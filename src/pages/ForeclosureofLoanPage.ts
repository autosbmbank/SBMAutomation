import { expect, Page, Keyboard } from "@playwright/test";
 
import ReusableMethods from "../helper/wrapper/reusableMethods";
 
let LFframe,ALFframe,TotalAmount
// let Bframe
export default class LoanForeclosurePage {
 
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
         clickallocate:'//span[@id="BLK_LIQ__BTN_ALLOCATE_oj72|text"]',      
        exitplr:'//span[@id="BTN_EXIT_IMG_oj91|text"]',
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        Authorized: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BLK_ACC__BTN_AUTH_oj20|text']",
        okButton : "//span[@id='BTN_OK_oj0|text']",
        gettotalamt:'//*[@id="BLK_TOTAL__TOTALRC0|input"]',
        totalamt:'//*[@id="BLK_SETTELMENTS__STLAMTRC0|input"]',
        preclosure:'//*[@id="BLK_LIQ__CLOSE_RVLNG_LOAN"]/div/div/div'
       
       
   
    }  
 
    async handleLoanForeclosureFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });
 
    const LFframe = await frameElementHandle.contentFrame();
 
    if (!LFframe) {
        throw new Error('Book Transfer frame not loaded');
    }
 
    return LFframe;
   }
 
   async handleAuthorizeLFFrame() {
     
      const LFframe = await this.handleLoanForeclosureFrame();
    const frameElementHandle = await LFframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });
 
    const ALFframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")
 
    if (!ALFframe) {
        throw new Error('Authorize frame not loaded');
    }
 
    return ALFframe;
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
    const LFframe = await this.handleLoanForeclosureFrame();
 
    await LFframe.waitForSelector(this.Elements.Newtab, {
        state: 'visible',
        timeout: 20000
    });
 
    await LFframe.click(this.Elements.Newtab);
    try{
       const frame1 = await this.handleAuthorizeLFFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }
 
 
    async enterAccountnumber(Accountnumber: string) {
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.locator(this.Elements.Accountnumber).fill(Accountnumber);
    await LFframe.waitForTimeout(3000);
 
    }
    async clickPopulate() {
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.click(this.Elements.clickPopulate);
    await LFframe.waitForTimeout(3000);
    }
    async clickAllocate() {
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.click(this.Elements.clickallocate);
    await LFframe.waitForTimeout(3000);
    }
   
    async entertotalamount() {
   
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.waitForSelector(this.Elements.totalamt, {state: 'visible',timeout: 20000});
    await LFframe.locator(this.Elements.totalamt).fill(TotalAmount)
   }
  async gettotalamount() {      
            const LFframe = await this.handleLoanForeclosureFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      TotalAmount = await LFframe.locator(this.Elements.gettotalamt).inputValue()
    console.log("Contract Reference:"+TotalAmount)
       
    }  
    async clickpreclosure() {
        const LFframe = await this.handleLoanForeclosureFrame();
       await LFframe.locator(this.Elements.preclosure).click()
 }
   
    async clickexit() {
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.click(this.Elements.exitplr);
    await LFframe.waitForTimeout(3000);
    }
   
    async clicksave() {
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.click(this.Elements.save);
    await LFframe.waitForTimeout(3000);
    }
    async clickokbtn() {
    const LFframe = await this.handleInformationMessageFrame();
    await LFframe.click(this.Elements.OKbtn);
    await LFframe.waitForTimeout(3000);
    }
    async clickEnterQuery() {
   
        const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await LFframe.click(this.Elements.EntrQuery);
   }
 
 
    async clickExecuteQuery() {
   
    const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await LFframe.click(this.Elements.ExectQuery);
    }
 
    async clickAuthorizetabgs() {
        const LFframe = await this.handleLoanForeclosureFrame();
    await LFframe.click(this.Elements.Authorized);
    await LFframe.waitForTimeout(3000);
      }
 
     
     
async clickAuthorizebtngs() {
   
    const ALFframe = await this.handleAuthorizeLFFrame();
    await ALFframe.click(this.Elements.Authorizebutton);
    await ALFframe.waitForTimeout(3000);
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