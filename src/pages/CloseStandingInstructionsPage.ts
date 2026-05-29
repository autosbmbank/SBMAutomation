 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let SIframe,ASIframe
// let Bframe
export default class CloseStandingInstructionsPage {

    private base: ReusableMethods;
  

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newtab: "//span[@id='New_oj0|text']",
        EnterQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        enterInstrno:'//input[@id="BLK_SITBINSTRUCTION__INSTRNO|input"]',
        close: '//*[@id="Close_oj3|text"]',        
        okButton:'//span[@id="BTN_OK_oj1|text"]',
               
    
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
  '//iframe[contains(@title, "Standing Instruction Online Detailed")]', { timeout: 30000 }
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
    await SIframe.locator(this.Elements.enterInstrno).fill(instrmentno);
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

    async clickclosetab() {
        const SIframe = await this.handleStandingInstructionFrame();
    await SIframe.click(this.Elements.close);
    await SIframe.waitForTimeout(3000);
      }      
      

  
    async clickOK() {
    const SIframe = await this.handleInformationMessageFrame();
    await SIframe.click(this.Elements.okButton);
    await SIframe.waitForTimeout(3000);
    }

}    

    
