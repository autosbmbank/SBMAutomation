  import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let BTframe,ABframe,Transctionrefrn

export default class BookTransferPage {

    private base: ReusableMethods;
  clickOtherCreditDetails: any;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        New: "//span[@id='New_oj0|text']",
        EnterQuery: "//span[@id='EnterQuery_oj17|text']",
        gettransactionrefn: '//*[@id="BLK_BOOK_TXN__TXN_REF_NO"]/div[1]/div/div/div',
        entertransactionrefn:'//*[@id="BLK_BOOK_TXN__TXN_REF_NO|input"]',
        ExecuteQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        SourceCodeb: "//input[@id='BLK_BOOK_TXN__SOURCE_CODE|input']",
        Networkcodeb: "//input[@id='BLK_BOOK_TXN__NETWORK_CODE|input']",
        DebitorAccount: "//input[@id='BLK_BOOK_TXN__DR_AC_NO|input']",
        CreditorAccount: "//input[@id='BLK_BOOK_TXN__CR_AC_NO|input']",
        CreditAmount: "//input[@id='BLK_BOOK_TXN__CR_AMT|input']",
        Exchangerate: "//*[@id='BLK_BOOK_TXN__EXCH_RATE|input']",
        Enrich: "//span[@id='BLK_BOOK_TXN__ENRICH_oj107|text']",
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        exitbt:'//span[@id="BTN_EXIT_IMG_oj119|text"]',
        Authorize: "//span[@id='Authorize_oj8|text']",
        Authorizebtn: "//*[@id='BLK_BOOK_TXN__AUTHORIZATION_oj14|text']", 
        okButton : "//span[@id='BTN_OK_oj0|text']",
        

    }    

    async handleBookTransferFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const BTframe = await frameElementHandle.contentFrame();

    if (!BTframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return BTframe;
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Book Transfer Transaction Input")]', { timeout: 30000 }
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


    async clickNew() {
    const BTframe = await this.handleBookTransferFrame();

    await BTframe.waitForSelector(this.Elements.New, {
        state: 'visible',
        timeout: 20000
    });

    await BTframe.click(this.Elements.New);
    try{
       const frame1 = await this.handleAuthorizeBookTransferFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }


    async enterSourceCodeb(sourceCodeb: string) {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.locator(this.Elements.SourceCodeb).fill(sourceCodeb);
    await BTframe.waitForTimeout(3000);

    }
    async enterNetworkcodeb(Networkcodeb: string) {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.locator(this.Elements.Networkcodeb).fill(Networkcodeb);
    }

    async enterDebitorAccount(DaccountNo: string) {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.locator(this.Elements.DebitorAccount).fill(DaccountNo);
    await BTframe.waitForTimeout(3000);
    }

    async enterCreditorAccount(CaccountNo: string) {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.locator(this.Elements.CreditorAccount).fill(CaccountNo);
    await BTframe.waitForTimeout(3000);
    }

       
    async enterCreditAmount(amount: string) {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.locator(this.Elements.CreditAmount).fill(amount);
    }
    async enterExchangerate(Exchangert: string) {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.locator(this.Elements.Exchangerate).fill(Exchangert);
    await BTframe.waitForTimeout(3000);
    }

    async clickEnrich() {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.click(this.Elements.Enrich);
    await BTframe.waitForTimeout(3000);
    }
    async clickExit() {
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.click(this.Elements.exitbt);
    await BTframe.waitForTimeout(3000);
    }

    async saveTransaction() {
     const BTframe = await this.handleBookTransferFrame();
    await BTframe.click(this.Elements.save);
    await BTframe.waitForTimeout(3000);
    }
    async clickokTransaction() {
     const BTframe = await this.handleInformationMessageFrame();
    await BTframe.click(this.Elements.OKbtn);
    await BTframe.waitForTimeout(3000);
    }    

   
     async handleAuthorizeBookTransferFrame() {
      
      const BTframe = await this.handleBookTransferFrame();
    const frameElementHandle = await BTframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ABframe = await frameElementHandle.contentFrame();
    

    if (!ABframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ABframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.waitForSelector(this.Elements.New, {state: 'visible',timeout: 20000});
    await BTframe.click(this.Elements.EnterQuery);
   }
   
       async enterTransactionReferenceNumber() {

    const BTframe = await this.handleBookTransferFrame();
    await BTframe.waitForSelector(this.Elements.entertransactionrefn,{state: 'visible',timeout: 20000});
    await BTframe.locator(this.Elements.entertransactionrefn).fill(Transctionrefrn)
   }
  async getTransactionReferenceNumber() {       
            const BTframe = await this.handleBookTransferFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Transctionrefrn = await BTframe.innerText(this.Elements.gettransactionrefn)
    console.log("Reference:"+Transctionrefrn)
       
    }  

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.waitForSelector(this.Elements.ExecuteQuery, {state: 'visible',timeout: 15000,});
    await BTframe.click(this.Elements.ExecuteQuery);
    }

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BTframe = await this.handleBookTransferFrame();
    await BTframe.click(this.Elements.Authorize);
    await BTframe.waitForTimeout(3000);
      }

      
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const ABframe = await this.handleAuthorizeBookTransferFrame();
    await ABframe.click(this.Elements.Authorizebtn);
    await ABframe.waitForTimeout(3000);
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