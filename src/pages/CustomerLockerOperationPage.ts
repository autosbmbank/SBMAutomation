import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let CLOframe,ACLOframe,Waitlist
// let Bframe
export default class CustomerLockerOperationPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
       
        NewCLO:"//span[@id='New_oj0|text']",
        boxtype:"//input[@id='BLK_DLTBS_CUST_WAITLIST__BOX_TYPE|input']",
        nameclo:"//input[@id='BLK_DLTBS_CUST_WAITLIST__CUST_NAME|input']",
        address :'//*[@id="BLK_DLTBS_CUST_WAITLIST__ADDRESS|input"]',
        phnumbr:"//input[@id='BLK_DLTBS_CUST_WAITLIST__PHONE_NO|input']",
        brnchcode:"//input[@id='BLK_DLTBS_CUST_WAITLIST__BRANCH_CODE|input']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        getwaitlist:'//*[@id="BLK_DLTBS_CUST_WAITLIST__SL_NO"]/div[1]/div/div/div',
        waitlist:"//input[@id='BLK_DLTBS_CUST_WAITLIST__SL_NO|input']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        saveCLO: "//span[@id='Save_oj7|text']",
        OKbutnclo:'//span[@id="BTN_OK_oj0|text"]',
        exitclo:"//span[@id='BTN_EXIT_IMG_oj57|text']",
        OKbuttonclo:"//span[@id='BTN_OK_oj0|text']",
        Authorizetab:"//span[@id='Authorize_oj8|text']",
        
        
    
    }
    async handleCLOperationFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const CLOframe = await frameElementHandle.contentFrame();

    if (!CLOframe) {
        throw new Error('Maintain Collateral Frame frame not loaded');
    }

    return CLOframe;
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Safe Deposit Box Customer Waitlist Log")]', { timeout: 30000 }
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
   async clickNewCLO() {
    const CLOframe = await this.handleCLOperationFrame();

    await CLOframe.waitForSelector(this.Elements.NewCLO,{state: 'visible',timeout: 20000});

    await CLOframe.click(this.Elements.NewCLO);
    await CLOframe.waitForTimeout(3000);
   }
   async enterBoxtype(boxtype: string) {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.locator(this.Elements.boxtype).fill(boxtype);
    await CLOframe.waitForTimeout(3000);

    }
    async enterBranchcode(branchcode: string) {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.locator(this.Elements.brnchcode).fill(branchcode);
    await CLOframe.waitForTimeout(3000);

    }
    async enterName(name: string) {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.locator(this.Elements.nameclo).fill(name);
    await CLOframe.waitForTimeout(3000);

    }
    async enterAddress(address: string) {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.locator(this.Elements.address).fill(address);
    await CLOframe.waitForTimeout(3000);

    }
    async enterPhoneNumber(Phonenumber: string) {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.locator(this.Elements.phnumbr).fill(Phonenumber);
    await CLOframe.waitForTimeout(3000);

    }
    async clicksaveguarantee() {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.click(this.Elements.saveCLO);
    await CLOframe.waitForTimeout(3000);
    }
    async clickOk() {
    const CLOframe = await this.handleInformationMessageFrame();
    await CLOframe.click(this.Elements.OKbutnclo);
    await CLOframe.waitForTimeout(3000);
    }
    async clickexit() {
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.click(this.Elements.exitclo);
    await CLOframe.waitForTimeout(3000);
    }
    async handleAuthorizeCLOperationFrame() {
      
      const CLOframe = await this.handleCLOperationFrame();
    const frameElementHandle = await CLOframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ACLOframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ACLOframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ACLOframe;
    }
   

    async clickEnterQuery() {
    const ACLOframe = await this.handleCLOperationFrame();

    await ACLOframe.waitForSelector(this.Elements.EntrQuery,{state: 'visible',timeout: 20000});

    await ACLOframe.click(this.Elements.EntrQuery);
   }
   async clickExecuteQuery() {
    const ACLOframe = await this.handleCLOperationFrame();

    await ACLOframe.waitForSelector(this.Elements.ExectQuery,{state: 'visible',timeout: 20000});

    await ACLOframe.click(this.Elements.ExectQuery);
    await ACLOframe.waitForTimeout(3000);
   }
   
    
    async enterwaitlist() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const CLOframe = await this.handleCLOperationFrame();
    await CLOframe.waitForSelector(this.Elements.waitlist, {state: 'visible',timeout: 20000});
    await CLOframe.locator(this.Elements.waitlist).fill(Waitlist)
   }
  async getwaitlist() {       
            const CLOframe = await this.handleCLOperationFrame();
               
      Waitlist = await CLOframe.innerText(this.Elements.getwaitlist)
    console.log("Waitlist:"+Waitlist)
       
    }
    async clickOkbtn() {
    const CLOframe = await this.handleInformationMessageFrame();
    await CLOframe.click(this.Elements.OKbuttonclo);
    await CLOframe.waitForTimeout(3000);
    }
    async clickAuthorizetab() {
    const ACLOframe = await this.handleCLOperationFrame();

    await ACLOframe.waitForSelector(this.Elements.Authorizetab,{state: 'visible',timeout: 20000});

    await ACLOframe.click(this.Elements.Authorizetab);
    await ACLOframe.waitForTimeout(3000);
   }
   
    
    
   }
   
