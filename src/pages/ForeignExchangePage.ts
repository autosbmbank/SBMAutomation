import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame;
export default class ForeignExchangePage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
        new : '//*[@id="New_oj0|text"]',
        refnumber : '//*[@id="BLK_PAYMENT_DETAIL__REFNO|input"]',
        Default : '//*[@id="BLK_PAYMENT_DETAIL__BTN_DEFAULT_oj75|text"]',
        save : '//*[@id="Save_oj7|text"]',
        ok : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj91|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebtn : '//*[@id="BLK_CONTRACT_DETAIL__BTN_AUTH_oj24|text"]',
        okbtn : '//*[@id="BTN_OK_oj0|text"]',
     }

// Foreign Exchange Frame
async handleFEIFrame(){
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Foreign Exchange Payment Input")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleFEIFrame() failed:", message);
    }
}

async handleINformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Foreign Exchange Payment Input")]', { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[id="ifr_AlertWin"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleINformationMessageFrame failed:", err);
    throw err;
  }
}

// authorize frame 
async getAuthorizeframe() {
    const frame = await this.handleFEIFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

async clickNewTab(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.new, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.new);
     }
     
     async enterRefNum(refnum){
        const frame = await this.handleFEIFrame()
       await frame.locator(this.Elements.refnumber).clear()
       await frame.locator(this.Elements.refnumber).fill(refnum)
     }

     async clickdefault(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.Default, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Default);
     }

     async clicksave(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.save, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.save);
     }

     async clickok(){
        const frame = await this.handleINformationMessageFrame()
        await frame.waitForSelector(this.Elements.ok, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.ok);
     }

     async clickexit(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
     }

     async clickenterquery(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
     }

     async clickexecutequery(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
     }

     async clickauthorize(){
        const frame = await this.handleFEIFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
     }

     async clickauthorizebtn(){
        const frame = await this.getAuthorizeframe()
        await frame.waitForSelector(this.Elements.authorizebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebtn);
     }

     async clickokbtn() {
  try {
    const okbtn = this.page
      .frameLocator('iframe[id*="ifr_LaunchWin"]')
      .frameLocator('#ifrSubScreen')
      .frameLocator('#ifr_AlertWin')
      .getByRole('button', { name: 'OK' }); // using ARIA role for safety
 
    await okbtn.waitFor({ state: 'visible', timeout: 20000 });
    await okbtn.click({ force: true }); // force if masked
 
    console.log("Successfully clicked OK button in ALERTWIN");
 
  } catch (error) {
    console.error("Failed to click OK button in ALERTWIN frame", error);
    throw error;
  }
 
}
    }