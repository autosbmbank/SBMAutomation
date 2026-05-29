 import { expect, Page, Keyboard } from "@playwright/test";
 
import ReusableMethods from "../helper/wrapper/reusableMethods";
 
let PLRframe,APLRframe
// let Bframe
export default class PartialLRPage {
 
    private base: ReusableMethods;
 
 
    constructor(private page: Page) {
 
        this.base = new ReusableMethods(page);
 
    }
 
    private Elements = {
        Newtab: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Accountnumber: "//input[@id='BLK_LIQ__ACCNO|input']",
        clickPopulate: "//span[@id='BLK_LIQ__BTN_POPDUE_oj70|text']",
        settlementamount: "//input[@id='BLK_SETTELMENTS__STLAMTRC0|input']",  
        clickallocate:'//span[@id="BLK_LIQ__BTN_ALLOCATE_oj72|text"]',      
        exitplr:'//span[@id="BTN_EXIT_IMG_oj91|text"]',
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        Authorized: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BLK_ACC__BTN_AUTH_oj20|text']",
        okButton : "//span[@id='BTN_OK_oj0|text']",
       
       
   
    }  
 
    async handlePartialLoanRepaymentFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });
 
    const PLRframe = await frameElementHandle.contentFrame();
 
    if (!PLRframe) {
        throw new Error('Book Transfer frame not loaded');
    }
 
    return PLRframe;
   }
 
   async handleAuthorizePLRFrame() {
     
      const PLRframe = await this.handlePartialLoanRepaymentFrame();
    const frameElementHandle = await PLRframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });
 
    const APLRframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")
 
    if (!APLRframe) {
        throw new Error('Authorize frame not loaded');
    }
 
    return APLRframe;
    }
   
    async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "CL Payments")]', { timeout: 30000 }
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
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
 
    await PLRframe.waitForSelector(this.Elements.Newtab, {
        state: 'visible',
        timeout: 20000
    });
 
    await PLRframe.click(this.Elements.Newtab);
    try{
       const frame1 = await this.handleAuthorizePLRFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }
 
 
    async enterAccountnumber(Accountnumber: string) {
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.locator(this.Elements.Accountnumber).fill(Accountnumber);
    await PLRframe.waitForTimeout(3000);
 
    }
    async clickPopulate() {
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.click(this.Elements.clickPopulate);
    await PLRframe.waitForTimeout(3000);
    }
    async clickAllocate() {
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.click(this.Elements.clickallocate);
    await PLRframe.waitForTimeout(3000);
    }
    async entersettleamount(settleamount: string) {
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.locator(this.Elements.settlementamount).fill(settleamount);
    await PLRframe.waitForTimeout(3000);
 
    }    
   
    async clickexit() {
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.click(this.Elements.exitplr);
    await PLRframe.waitForTimeout(3000);
    }
   
    async clicksave() {
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.click(this.Elements.save);
    await PLRframe.waitForTimeout(3000);
    }
    async clickokbtn() {
    const PLRframe = await this.handleInformationMessageFrame();
    await PLRframe.click(this.Elements.OKbtn);
    await PLRframe.waitForTimeout(3000);
    }
    async clickEnterQuery() {
   
        const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await PLRframe.click(this.Elements.EntrQuery);
   }
 
 
    async clickExecuteQuery() {
   
    const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await PLRframe.click(this.Elements.ExectQuery);
    }
 
    async clickAuthorizetabgs() {
        const PLRframe = await this.handlePartialLoanRepaymentFrame();
    await PLRframe.click(this.Elements.Authorized);
    await PLRframe.waitForTimeout(3000);
      }
 
     
     
async clickAuthorizebtngs() {
   
    const APLRframe = await this.handleAuthorizePLRFrame();
    await APLRframe.click(this.Elements.Authorizebutton);
    await APLRframe.waitForTimeout(3000);
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