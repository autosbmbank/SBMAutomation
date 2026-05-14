 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let LAframe,ADframe,CurrecyLCA,ContractamtLCA,CustomrLCA
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
        okButton:"//span[@id='BTN_OK_oj0|text']",
        exitavail:'//*[@id="BTN_EXIT_IMG_oj85|text"]',        
        Authorizedla: "//span[@id='Authorize_oj8|text']",
        Authorizebutonla: "//*[@id='BLK_BOOK_TXN__AUTHORIZATION_oj14|text']", 
        instructedCurrencyIndicator: "//select[@id='BLK_BOOK_TXN__INSTRUCTED_CCY_IND']",
        getcurrecyLCA:'//*[@id="BLK_AVAILMENTS__CONTCCY"]/div[1]/div/div/div',
        currencyLCA:'//*[@id="BLK_AVAILMENTS__CONTCCY|input"]',
        getcontractamttLCA:'//*[@id="BLK_AVAILMENTS__AVLAMT|input"]',
        contractamountLCA:'//*[@id="BLK_AVAILMENTS__AVLAMT|input"]',
        getcustomrLCA:'//*[@id="BLK_AVAILMENTS__CNTRPRTY"]/div[1]/div/div/div',
        customerLCA:'//*[@id="BLK_AVAILMENTS__CNTRPRTY|input"]',
        exitathr:'//*[@id="BTN_EXIT_IMG_oj85|text"]',
    
    }

   

    async handleLCAvailmentsFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const LAframe = await frameElementHandle.contentFrame();

    if (!LAframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return LAframe;
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Letters Of Credit Availment Detail")]', { timeout: 30000 }
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

    async clickNewavail() {
    const LAframe = await this.handleLCAvailmentsFrame();

    await LAframe.waitForSelector(this.Elements.Newavail,{state: 'visible',timeout: 20000});

    await LAframe.click(this.Elements.Newavail);
   }
   


    async entercontrareference(Contrarfn: string) {
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.locator(this.Elements.Contrarfn).fill(Contrarfn);
    await LAframe.waitForTimeout(3000);

    }
    async clickPCtab() {
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.click(this.Elements.clickPC);
    await LAframe.waitForTimeout(3000);
    }
    async enterAvailmentamount(Availamount: string) {
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.locator(this.Elements.Availamount).fill(Availamount);
    await LAframe.waitForTimeout(3000);

    }
    
    async clicksaveavail() {
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.click(this.Elements.saveAvail);
    await LAframe.waitForTimeout(3000);
    }
    async clickOkbtn() {
    const LAframe = await this.handleInformationMessageFrame();
    await LAframe.click(this.Elements.OKbutn);
    await LAframe.waitForTimeout(3000);
    }
    async clickexitavail() {
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.click(this.Elements.exitavail);
    await LAframe.waitForTimeout(3000);
    }
    async clickexitathr() {
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.click(this.Elements.exitathr);
    await LAframe.waitForTimeout(3000);
    }
    

     

async handleAuthorizeLCAvailmentFrame() {
      
      const frame = await this.handleLCAvailmentsFrame();
    const frameElementHandle = await frame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ALCframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ALCframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ALCframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.waitForSelector(this.Elements.Newavail, {state: 'visible',timeout: 20000});
    await LAframe.click(this.Elements.EntrQuery);
   }

   

    async clickExecuteQuery() {
    
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await LAframe.click(this.Elements.ExectQuery);
    }
async getcurrencyLCA() {       
            const LAframe = await this.handleLCAvailmentsFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CurrecyLCA = await LAframe.innerText(this.Elements.getcurrecyLCA)
    console.log("Currency :"+CurrecyLCA)
       
    }
    async entercurrencyLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ALCframe = await this.handleLCAvailmentsFrame();
    await ALCframe.waitForSelector(this.Elements.currencyLCA, {state: 'visible',timeout: 20000});
    await ALCframe.locator(this.Elements.currencyLCA).fill(CurrecyLCA)
   }
   async getcontractamountLCA() {       
            const LAframe = await this.handleLCAvailmentsFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      ContractamtLCA = await LAframe.locator(this.Elements.getcontractamttLCA).inputValue()
    console.log("Contract Amount:"+ContractamtLCA)
       
    }
    async entercontractamountLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ALCframe = await this.handleLCAvailmentsFrame();
    ContractamtLCA = await ALCframe.waitForSelector(this.Elements.contractamountLCA, {state: 'visible',timeout: 20000});
    await ALCframe.locator(this.Elements.contractamountLCA).fill(ContractamtLCA)
   }
   async getcustomerLCA() {       
            const LAframe = await this.handleLCAvailmentsFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CustomrLCA = await LAframe.innerText(this.Elements.getcustomrLCA)
    console.log("Customer:"+CustomrLCA)
       
    }
    async entercustomerLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ALCframe = await this.handleLCAvailmentsFrame();
    await ALCframe.waitForSelector(this.Elements.customerLCA, {state: 'visible',timeout: 20000});
    await ALCframe.locator(this.Elements.customerLCA).fill(CustomrLCA)
   }
   

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LAframe = await this.handleLCAvailmentsFrame();
    await LAframe.click(this.Elements.Authorizedla);
    await LAframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const ALCframe = await this.handleAuthorizeLCAvailmentFrame();
    await ALCframe.click(this.Elements.Authorizebutonla);
    await ALCframe.waitForTimeout(3000);
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