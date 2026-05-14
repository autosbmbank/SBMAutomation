import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame;
export default class SecuritiesMaintenancePage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
           enterquery : '//*[@id="EnterQuery_oj17|text"]',
           Actionid : '//*[@id="BLK_SER__IACD|input"]',
           executequery : '//*[@id="ExecuteQuery_oj18|text"]',

     }
// securities maintenance
async handleSMFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Securities Corporate Action Maintenance Redemption")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleSMFrame() failed:", message);
    }
  }

  async clickenterquery(){
        const frame = await this.handleSMFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
     }
     
     async enteractionid(id){
        const frame = await this.handleSMFrame()
        await frame.waitForSelector(this.Elements.Actionid, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.Actionid).clear()
       await frame.locator(this.Elements.Actionid).fill(id)
     }

     async clickexecutequery(){
        const frame = await this.handleSMFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
     }

    }