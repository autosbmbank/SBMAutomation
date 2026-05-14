 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let CLCframe,ACLCframe
// let Bframe
export default class CreditLineCreationPage {

    private base: ReusableMethods;
  

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newtab: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        liabilityno: "//input[@id='BLK_FACILITY__LIAB_NO|input']",
        linecode: "//input[@id='BLK_FACILITY__LINE_CODE|input']",
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        Authorized: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BTN_OK_oj16|text']", 
        okButton : "//span[@id='BTN_OK_oj0|text']",
        exitclc:'//span[@id="BTN_EXIT_IMG_oj159|text"]'       
    
    }   

    async handleCLCreationFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const CLCframe = await frameElementHandle.contentFrame();

    if (!CLCframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return CLCframe;
   }   
   async handleAuthorizeCLCreationFrame() {
      
      const CLCframe = await this.handleCLCreationFrame();
    const frameElementHandle = await CLCframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ACLCframe = await frameElementHandle.contentFrame();
    

    if (!ACLCframe) {
        throw new Error('Authorize frame not loaded');
    }

    return ACLCframe;
    }    
    
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Facilities Maintenance")]', { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[id="ifr_AlertWin"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleInformationMessageFrame failed:", err);
    throw err;
  }
}

    async clickNewtab() {
    const CLCframe = await this.handleCLCreationFrame();

    await CLCframe.waitForSelector(this.Elements.Newtab, {
        state: 'visible',
        timeout: 20000
    });

    await CLCframe.click(this.Elements.Newtab);
   }


    async enterliabilityno(liabilityno: string) {
    const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.locator(this.Elements.liabilityno).fill(liabilityno);
    await CLCframe.waitForTimeout(3000);

    }
    async enterlinecode(linecode: string) {
    const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.locator(this.Elements.linecode).fill(linecode);
    await CLCframe.waitForTimeout(3000);
    }
       
    
    async clickexit() {
    const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.click(this.Elements.exitclc);
    await CLCframe.waitForTimeout(3000);
    }    
    
   async clicksave() {
    const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.click(this.Elements.save);
    await CLCframe.waitForTimeout(3000);
    }
    async clickokbtn() {
    const CLCframe = await this.handleInformationMessageFrame();
    await CLCframe.click(this.Elements.OKbtn);
    await CLCframe.waitForTimeout(3000);
    }
    async clickEnterQuery() {
    
        const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await CLCframe.click(this.Elements.EntrQuery);
   } 

    async clickExecuteQuery() {
    
    const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await CLCframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabgs() {
        const CLCframe = await this.handleCLCreationFrame();
    await CLCframe.click(this.Elements.Authorized);
    await CLCframe.waitForTimeout(3000);
      }      
      
async clickAuthorizebtngs() {
    
    const ACLCframe = await this.handleAuthorizeCLCreationFrame();
    await ACLCframe.click(this.Elements.Authorizebutton);
    await ACLCframe.waitForTimeout(3000);
    }
    async clickOK() {
  try {
    const okButton = this.page
      .frameLocator('iframe[id*="ifr_LaunchWin"]')
      .frameLocator('#ifrSubScreen')
      .frameLocator('#ifr_AlertWin')
      .getByRole('button', { name: 'OK' }); // using ARIA role for safety

    await okButton.waitFor({ state: 'visible', timeout: 20000 });
    await okButton.click({ force: true }); // force if masked

    console.log("Successfully clicked OK button in ALERTWIN");

  } catch (error) {
    console.error("Failed to click OK button in ALERTWIN frame", error);
    throw error;
  }

}
    
}