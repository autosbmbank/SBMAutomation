import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame;
export default class RolloverSimulationPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
        
        New :'//*[@id="New_oj0|text"]',
        AccountNumber : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__ACC_NO|input"]',
        pbutton : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__BTN_POP_oj90|text"]',
        savebtn : '//*[@id="Save_oj7|text"]',
        exit : '',

     }
// rollover simulation
 async handlerolloverFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Rollover Simulation Screen")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handlerolloverFrame() failed:", message);
    }
  }
  
  async clicknew(){
        const frame = await this.handlerolloverFrame()
        await frame.waitForSelector(this.Elements.New, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.New);
     }

     async enteraccountnumb(accountnum){
    const frame = await this.handlerolloverFrame()
    await frame.waitForSelector(this.Elements.AccountNumber, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.AccountNumber).clear()
       await frame.locator(this.Elements.AccountNumber).fill(accountnum)
}

  async clickPbutton(){
        const frame = await this.handlerolloverFrame()
        await frame.waitForSelector(this.Elements.pbutton, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.pbutton);
     }

     async clicksaveoption(){
        const frame = await this.handlerolloverFrame()
        await frame.waitForSelector(this.Elements.savebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.savebtn);
     }

     async clickexit(){
        const frame = await this.handlerolloverFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
     }
}