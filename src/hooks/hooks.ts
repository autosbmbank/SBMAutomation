import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { expect, Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
 
const fs = require("fs-extra");
export let browser: Browser;
export const timeout = 60 * 1000;
export let context: BrowserContext;
 
 
 
BeforeAll(async function () {
  getEnv();
   fs.ensureDirSync("test-results/screenshots");
    fs.ensureDirSync("test-results/videos");
    fs.ensureDirSync("test-results/logs");
    fs.ensureDirSync("test-results/reports");
  browser = await invokeBrowser();
});
 
// It will trigger for not auth scenarios
Before(async function ({ pickle }) {
  //const scenarioName = pickle.name + pickle.id;
  const scenarioName = pickle.name;
  context = await browser.newContext({
    ignoreHTTPSErrors: true,
    recordVideo: {
      dir: "test-results/videos",
    },
  });
  let page = await context.newPage();
  context.setDefaultTimeout(timeout);
 
  await page.setViewportSize({ width: 1920, height: 1080 });
 
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
  // Track network logs for all pages
  //trackNetworkLogs(context, page);
});
 
// It will trigger for auth scenarios
Before("@AnalystLogin", async function ({ pickle }) {
  //const scenarioName = pickle.name + pickle.id;
  const scenarioName = pickle.name;
  context = await browser.newContext({
    storageState: getStorageState(pickle.name),
    recordVideo: {
      dir: "test-results/videos",
    },
  });
  const page = await context.newPage();
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
});
 
After(async function ({ pickle, result }) {
    const scenarioName = pickle.name
        .replace(/[/\\:*?"<>|]/g, '_')
        .replace(/\s+/g, '_')
        .trim();
 
    let videoPath: string;
    let img: Buffer;
 
    try {
        // ✅ For NextGen — use last page
        // ✅ For non-NextGen — use fixture.page
        const allPages = context.pages();
        console.log("Total pages open:", allPages.length);
 
        // ✅ Find best active page
        let activePage = fixture.page;
        if (allPages.length > 1) {
            // NextGen opened new page — use last one
            activePage = allPages[allPages.length - 1];
        }
        console.log("Active page URL:", activePage.url());
 
        // ✅ Take screenshot
        img = await activePage.screenshot({
            path: `./test-results/screenshots/${scenarioName}.png`,
            type: "png",
            fullPage: true
        }).catch(async () => {
            // ✅ Fallback to fixture.page if activePage fails
            return await fixture.page.screenshot({
                path: `./test-results/screenshots/${scenarioName}.png`,
                type: "png"
            });
        });
 
        // ✅ Get video path before closing
        videoPath = await activePage.video()?.path()
            .catch(() => fixture.page.video()?.path());
 
    } catch (error) {
        console.log("Screenshot/video error:", error.message);
        // ✅ Last resort screenshot
        try {
            img = await fixture.page.screenshot({ type: "png" });
            videoPath = await fixture.page.video()?.path();
        } catch {
            console.log("Could not take screenshot");
        }
    }
 
    // ✅ Close pages
    try {
        await fixture.page.close();
    } catch { }
   
    try {
        await context.close();
    } catch { }
 
    // ✅ Rename video and attach
    if (videoPath && img) {
        try {
            const newVideoPath = videoPath.replace(
                /[/\\][^/\\]*\.webm$/,
                `\\${scenarioName}.webm`
            );
            fs.renameSync(videoPath, newVideoPath);
            await this.attach(img, "image/png");
            await this.attach(fs.readFileSync(newVideoPath), "video/webm");
        } catch (error) {
            console.log("Video rename/attach failed:", error.message);
            if (img) await this.attach(img, "image/png");
        }
    } else if (img) {
        await this.attach(img, "image/png");
    }
});
 
AfterAll(async function () {
  await browser.close();
});
 
function getStorageState(user: string):
  | string
  | {
    cookies: {
      name: string;
      value: string;
      domain: string;
      path: string;
      expires: number;
      httpOnly: boolean;
      secure: boolean;
      sameSite: "Strict" | "Lax" | "None";
    }[];
    origins: {
      origin: string;
      localStorage: { name: string; value: string }[];
    }[];
  } {
  if (user.endsWith("biller")) {
    return "src/test/testData/billerlogin.json";
  }
  else if (user.endsWith("analyst")) return "src/test/testData/analystlogin.json";
}
 
function gettheCurrentTime() {
  const newDate = new Date();
  const currentTime = newDate
    .toLocaleString()
    .replace(",", "")
    .replace(" ", "")
    .replace("/", "")
    .replace("/", "")
    .replace(":", "")
    .replace(":", "")
    .replace("pm", "")
    .replace(" ", "");
  return currentTime;
}
 
function trackNetworkLogs(context: BrowserContext, page) {
  // Attach event listeners for the first page
  attachNetworkListeners(page);
 
  // Listen for new tabs and attach listeners
  context.on("page", async (newPage) => {
    fixture.logger.info("New tab detected. Attaching network listeners.")
      console.log("New tab detected. Attaching network listeners.");
    attachNetworkListeners(newPage);
  });
}
 
 
function attachNetworkListeners(page) {
  page.on('response', async (response) => {
    const status = response.status();
    fixture.logger.info(`Response: ${response.status()} - ${response.url()}`)
    //console.log(`Response: ${response.status()} - ${response.url()}`);
 
    // Fail if the URL having any error code"
    if (status >= 400) {
      console.error(`Network request failed with status ${status}: ${response.url()}`);
      throw new Error(`Test failed due to network error: ${status} - ${response.url()}`);
    }
    });
 }