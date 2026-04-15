 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let LAframe,ADframe,CurrencyLCA,ContractamountLCA,CustomerLCA
// let Bframe
export default class LCAvailmentPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newavail: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Contrarfn: "//input[@id='BLK_AVAILMENTS__CONREFNO|input']",
        clickPC: "//span[@id='BLK_AVAILMENTS__BTN_P_oj69|text']",
        Availamount: "//input[@id='BLK_AVAILMENTS__AVLAMT|input']",
        saveAvail:"//span[@id='Save_oj7|text']",
        OKbutn : "//span[@id='BTN_OK_oj0|text']",
        Search: "//a[normalize-space()='Search']",
        Authorizedl: "//span[@id='Authorize_oj8|text']",
        Authorizebuton: "//*[@id='BLK_BOOK_TXN__AUTHORIZATION_oj14|text']", 
        instructedCurrencyIndicator: "//select[@id='BLK_BOOK_TXN__INSTRUCTED_CCY_IND']",
        getcurrencyLCA:"",
        currencyLCA:"",
        getcontractamountLCA:"",
        contractamountLCA:"",
        getcustomerLCA:"",
        customerLCA:""
    
    }

   

    async handleLCAvailmentsFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const Lframe = await frameElementHandle.contentFrame();

    if (!Lframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return Lframe;
   }

    async clickNewavail() {
    const Lframe = await this.handleLCAvailmentsFrame();

    await Lframe.waitForSelector(this.Elements.Newavail,{state: 'visible',timeout: 20000});

    await Lframe.click(this.Elements.Newavail);
   }
   


    async entercontrareference(Contrarfn: string) {
    const Lframe = await this.handleLCAvailmentsFrame();
    await Lframe.locator(this.Elements.Contrarfn).fill(Contrarfn);
    await Lframe.waitForTimeout(3000);

    }
    async clickPCtab() {
    const Lframe = await this.handleLCAvailmentsFrame();
    await Lframe.click(this.Elements.clickPC);
    await Lframe.waitForTimeout(3000);
    }
    async enterAvailmentamount(Availamount: string) {
    const Lframe = await this.handleLCAvailmentsFrame();
    await Lframe.locator(this.Elements.Availamount).fill(Availamount);
    await Lframe.waitForTimeout(3000);

    }
    
    async clicksaveavail() {
    const Lframe = await this.handleLCAvailmentsFrame();
    await Lframe.click(this.Elements.saveAvail);
    await Lframe.waitForTimeout(3000);
    }
    

     async clickOk() {

    try{

     const outerFrameHandle1 = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin6108434161084341']", { timeout: 5000 });
     const outerFrame = await outerFrameHandle1.contentFrame();

     // Wait for the Override Message frame inside it
     const innerframehandle1 = await outerFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 5000 });
     const overrideFrame = await innerframehandle1.contentFrame();
     //const message = successframe.locator(this.Elements.successmsg);
     //await message.waitFor({ state: 'visible', timeout: 15000 });
     // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
     const okButton = overrideFrame.locator(this.Elements.OKbutn);
     await okButton.waitFor({state: 'visible', timeout: 5000 });
     await okButton.click();
     console.log("Successfully clicked on OK button")

     } catch (error) {
      console.log("Override or Alert frame not found");
     }
    }

async handleAuthorizeIssueDepositFrame() {
      
      const frame = await this.handleLCAvailmentsFrame();
    const frameElementHandle = await frame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ADframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ADframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ADframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleLCAvailmentsFrame();
    await frame.waitForSelector(this.Elements.Newavail, {state: 'visible',timeout: 20000});
    await frame.click(this.Elements.EntrQuery);
   }

   

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleLCAvailmentsFrame();
    await frame.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await frame.click(this.Elements.ExectQuery);
    }
async getcurrencyLCA() {       
            const GSframe = await this.handleLCAvailmentsFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CurrencyLCA = await GSframe.innerText(this.Elements.getcurrencyLCA)
    console.log("Currency :"+CurrencyLCA)
       
    }
    async entercurrencyLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleLCAvailmentsFrame();
    await GSframe.waitForSelector(this.Elements.currencyLCA, {state: 'visible',timeout: 20000});
    await GSframe.locator(this.Elements.currencyLCA).fill(CurrencyLCA)
   }
   async getcontractamountLCA() {       
            const GSframe = await this.handleLCAvailmentsFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      ContractamountLCA = await GSframe.innerText(this.Elements.getcontractamountLCA)
    console.log("Contract Amount:"+ContractamountLCA)
       
    }
    async entercontractamountLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleLCAvailmentsFrame();
    await GSframe.waitForSelector(this.Elements.contractamountLCA, {state: 'visible',timeout: 20000});
    await GSframe.locator(this.Elements.contractamountLCA).fill(ContractamountLCA)
   }
   async getcustomerLCA() {       
            const GSframe = await this.handleLCAvailmentsFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CustomerLCA = await GSframe.innerText(this.Elements.getcustomerLCA)
    console.log("Contract Amount:"+CustomerLCA)
       
    }
    async entercustomerLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleLCAvailmentsFrame();
    await GSframe.waitForSelector(this.Elements.customerLCA, {state: 'visible',timeout: 20000});
    await GSframe.locator(this.Elements.customerLCA).fill(CustomerLCA)
   }
   

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleLCAvailmentsFrame();
    await frame.click(this.Elements.Authorizedl);
    await frame.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const Bframe = await this.handleAuthorizeIssueDepositFrame();
    await Bframe.click(this.Elements.Authorizebuton);
    await Bframe.waitForTimeout(3000);
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