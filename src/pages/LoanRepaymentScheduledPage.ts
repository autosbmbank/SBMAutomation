import { expect, Page, Keyboard } from "@playwright/test";
 
import ReusableMethods from "../helper/wrapper/reusableMethods";
 
let LRSframe,ALRSframe,TotalAmount
// let Bframe
export default class LRscheduledPage {
 
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
        gettotalamt:'//*[@id="BLK_TOTAL__AMTDUERC0|input"]',
        totalamt:'//*[@id="BLK_SETTELMENTS__STLAMTRC0|input"]'
       
       
   
    }  
 
    async handleLRScheduledFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });
 
    const LRSframe = await frameElementHandle.contentFrame();
 
    if (!LRSframe) {
        throw new Error('Book Transfer frame not loaded');
    }
 
    return LRSframe;
   }
 
   async handleAuthorizeLRScheduledFrame() {
     
      const LRSframe = await this.handleLRScheduledFrame();
    const frameElementHandle = await LRSframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });
 
    const ALRSframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")
 
    if (!ALRSframe) {
        throw new Error('Authorize frame not loaded');
    }
 
    return ALRSframe;
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
    const LRSframe = await this.handleLRScheduledFrame();
 
    await LRSframe.waitForSelector(this.Elements.Newtab, {
        state: 'visible',
        timeout: 20000
    });
 
    await LRSframe.click(this.Elements.Newtab);
    try{
       const frame1 = await this.handleAuthorizeLRScheduledFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }
   async entertotalamount() {
   
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LRUSframe = await this.handleLRScheduledFrame();
    await LRUSframe.waitForSelector(this.Elements.totalamt, {state: 'visible',timeout: 20000});
    await LRUSframe.locator(this.Elements.totalamt).fill(TotalAmount)
   }
  async gettotalamount() {      
            const LRUSframe = await this.handleLRScheduledFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      TotalAmount = await LRUSframe.locator(this.Elements.gettotalamt).inputValue()
    console.log("Total Amount:"+TotalAmount)
       
    }  
 
 
    async enterAccountnumber(Accountnumber: string) {
    const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.locator(this.Elements.Accountnumber).fill(Accountnumber);
    await LRSframe.waitForTimeout(3000);
 
    }
    async clickPopulate() {
    const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.click(this.Elements.clickPopulate);
    await LRSframe.waitForTimeout(3000);
    }
    async clickAllocate() {
    const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.click(this.Elements.clickallocate);
    await LRSframe.waitForTimeout(3000);
    }
     
   
    async clickexit() {
    const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.click(this.Elements.exitplr);
    await LRSframe.waitForTimeout(3000);
    }
   
    async clicksave() {
    const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.click(this.Elements.save);
    await LRSframe.waitForTimeout(3000);
    }
    async clickokbtn() {
    const LRSframe = await this.handleInformationMessageFrame();
    await LRSframe.click(this.Elements.OKbtn);
    await LRSframe.waitForTimeout(3000);
    }
    async clickEnterQuery() {
   
        const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await LRSframe.click(this.Elements.EntrQuery);
   }
 
 
    async clickExecuteQuery() {
   
    const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await LRSframe.click(this.Elements.ExectQuery);
    }
 
    async clickAuthorizetabgs() {
        const LRSframe = await this.handleLRScheduledFrame();
    await LRSframe.click(this.Elements.Authorized);
    await LRSframe.waitForTimeout(3000);
      }
 
     
     
async clickAuthorizebtngs() {
   
    const ALRSframe = await this.handleAuthorizeLRScheduledFrame();
    await ALRSframe.click(this.Elements.Authorizebutton);
    await ALRSframe.waitForTimeout(3000);
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