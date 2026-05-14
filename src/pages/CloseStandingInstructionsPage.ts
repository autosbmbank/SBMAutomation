 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let SIframe,ASIframe
// let Bframe
export default class StandingInstructionsPage {

    private base: ReusableMethods;
  

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newtab: "//span[@id='New_oj0|text']",
        EnterQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        enterInstrno:'//input[@id="BLK_SITBINSTRUCTION__INSTRNO|input"]',
        Authorized: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BLK_INST__BTN_AUTHORIZE_oj17|text']", 
        okButton:'//span[@id="BTN_OK_oj0|text"]',
        sicurrency:'//input[@id="BLK_REKEY__SI_AMT_CCYRC0|input"]',
        siamount:'//input[@id="BLK_REKEY__SI_AMTRC0|input"]'
       
    
    }

   

    async handleStandingInstructionFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const SIframe = await frameElementHandle.contentFrame();

    if (!SIframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return SIframe;
   }

   
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Guarantees and Standby Letters of Credit Contract Input")]', { timeout: 30000 }
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
async handleAuthorizeClosingFrame() {
      
      const SIframe = await this.handleStandingInstructionFrame();
    const frameElementHandle = await SIframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ASIframe = await frameElementHandle.contentFrame();
    

    if (!ASIframe) {
        throw new Error('frame not loaded');
    }

    return ASIframe;
    }


        
    async enterInstrnumber(instrmentno: string) {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const SIframe = await this.handleStandingInstructionFrame();
    await SIframe.waitForSelector(this.Elements.enterInstrno, {state: 'visible',timeout: 20000});
    await SIframe.locator(this.Elements.enterInstrno);
   }
  
    
    async clickEnterQuery() {
    
        const SIframe = await this.handleStandingInstructionFrame();
    await SIframe.waitForSelector(this.Elements.EnterQuery, {state: 'visible',timeout: 20000});
    await SIframe.click(this.Elements.EnterQuery);
   } 

    async clickExecuteQuery() {
    
    const SIframe = await this.handleStandingInstructionFrame();
    await SIframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await SIframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabgs() {
        const SIframe = await this.handleStandingInstructionFrame();
    await SIframe.click(this.Elements.Authorized);
    await SIframe.waitForTimeout(3000);
      }      
      
async clickAuthorizebtngs() {
    
    const ASIframe = await this.handleAuthorizeClosingFrame();
    await ASIframe.click(this.Elements.Authorizebutton);
    await ASIframe.waitForTimeout(3000);
    }
    async entersicurrency(sicurrncy: string) {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ASIframe = await this.handleAuthorizeClosingFrame();
    await ASIframe.waitForSelector(this.Elements.sicurrency, {state: 'visible',timeout: 20000});
    await ASIframe.locator(this.Elements.sicurrency);
   }
   async entersiamount(siamt: string) {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ASIframe = await this.handleAuthorizeClosingFrame();
    await ASIframe.waitForSelector(this.Elements.siamount, {state: 'visible',timeout: 20000});
    await ASIframe.locator(this.Elements.siamount);
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