import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";


export const invokeBrowser = () => {
  //const browserType = process.env.npm_config_BROWSER;   //npm run test --BROWSER="chrome"
  const browserType = process.env.BROWSER;
  const executionMode = process.env.HEAD;
  if (executionMode == "true") {
    const options: LaunchOptions = {
      headless: !true,
    };
    // console.log("Browser type " +browserType);
    switch (browserType) {
      case "chrome":
        return chromium.launch(options);
      case "firefox":
        return firefox.launch(options);
      case "webkit":
        return webkit.launch(options);
      default:
        throw new Error("Please set the proper browser!");
    }
  } else {
    const options: LaunchOptions = {
      headless: true,
    };
    // console.log("Browser type " +browserType);
    switch (browserType) {
      case "chrome":
        return chromium.launch(options);
      case "firefox":
        return firefox.launch(options);
      case "webkit":
        return webkit.launch(options);
      default:
        throw new Error("Please set the proper browser!");
    }
  }
};
