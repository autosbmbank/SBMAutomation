  import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let frame, authoframe
let Bframe
export default class BookTransferPage {

    private base: ReusableMethods;
  clickOtherCreditDetails: any;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        New: "//span[@id='New_oj0|text']",
        EnterQuery: "//span[@id='EnterQuery_oj17|text']",
        TransactionReferenceNumber: "//*[@id='BLK_BOOK_TXN__TXN_REF_NO|input']",
        ExecuteQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        SourceCodeb: "//input[@id='BLK_BOOK_TXN__SOURCE_CODE|input']",
        Networkcodeb: "//input[@id='BLK_BOOK_TXN__NETWORK_CODE|input']",
        DebitorAccount: "//input[@id='BLK_BOOK_TXN__DR_AC_NO|input']",
        CreditorAccount: "//input[@id='BLK_BOOK_TXN__CR_AC_NO|input']",
        CreditAmount: "//input[@id='BLK_BOOK_TXN__CR_AMT|input']",
        Exchangerate: "//*[@id='BLK_BOOK_TXN__EXCH_RATE|input']",
        //CreditCurrency : "//input[@id='BLK_BOOK_TXN__CR_AC_CCY']" ,
        Enrich: "//span[@id='BLK_BOOK_TXN__ENRICH_oj107|text']",
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        // Delete: "//a[normalize-space()='Delete']",
        //TRNReferenceNumber: "//*[@id='BLK_BOOK_TXN__TXN_REF_NO|input']",
        Search: "//a[normalize-space()='Search']",
        doubleclicktransaction: "//td[@class='numeric']//a[@alt='TXN_REF_NO'][normalize-space()='2604401425276000']",
        Authorize: "//span[@id='Authorize_oj8|text']",
        Authorizebtn: "//*[@id='BLK_BOOK_TXN__AUTHORIZATION_oj14|text']", 
        instructedCurrencyIndicator: "//select[@id='BLK_BOOK_TXN__INSTRUCTED_CCY_IND']",
        // debitAmount: "//input[@id='BLK_BOOK_TXN__DR_AMTI']",
        // CredittoGL:"//label[normalize-space()='Credit to GL']",

    }

    // transrefno=frame.locator("").inputvalue()

    async handleBookTransferFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const frame = await frameElementHandle.contentFrame();

    if (!frame) {
        throw new Error('Book Transfer frame not loaded');
    }

    return frame;
   }


    async clickNew() {
    const frame = await this.handleBookTransferFrame();

    await frame.waitForSelector(this.Elements.New, {
        state: 'visible',
        timeout: 20000
    });

    await frame.click(this.Elements.New);
   }


    async enterSourceCodeb(sourceCodeb: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.SourceCodeb).fill(sourceCodeb);
    await frame.waitForTimeout(3000);

    }
    async enterNetworkcodeb(Networkcodeb: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.Networkcodeb).fill(Networkcodeb);
    }

    async enterDebitorAccount(accountNo: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.DebitorAccount).fill(accountNo);
    await frame.waitForTimeout(3000);
    }

    async enterCreditorAccount(accountNo: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.CreditorAccount).fill(accountNo);
    await frame.waitForTimeout(3000);
    }

    /*async enterCreditCurrency(Currency: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.CreditCurrency).fill(Currency);
    }*/
    
    async enterCreditAmount(amount: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.CreditAmount).fill(amount);
    }
    async enterExchangerate(Exchangerate: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.Exchangerate).fill("1");
    await frame.waitForTimeout(3000);
    }

    async clickEnrich() {
    const frame = await this.handleBookTransferFrame();
    await frame.click(this.Elements.Enrich);
    await frame.waitForTimeout(3000);
    }

    async saveTransaction() {
     const frame = await this.handleBookTransferFrame();
    await frame.click(this.Elements.save);
    }

    async clickOKbutton1() {

    try{

     const outerFrameHandle1 = await this.page.waitForSelector('//iframe[@id="ifr_LaunchWin59220555")]', { timeout: 10000 });
     const outerFrame = await outerFrameHandle1.contentFrame();

     // Wait for the Override Message frame inside it
     const innerframehandle1 = await outerFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 10000 });
     const overrideFrame = await innerframehandle1.contentFrame();
     //const message = successframe.locator(this.Elements.successmsg);
     //await message.waitFor({ state: 'visible', timeout: 15000 });
     // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
     const okButton = overrideFrame.locator(this.Elements.OKbtn);
     await okButton.waitFor({state: 'visible', timeout: 10000 });
     await okButton.click();
     console.log("Successfully clicked on OK button")

     } catch (error) {
      console.log("Override or Alert frame not found");
     }
    }

    /*-------------------------------handledeleteBookTransferFrame----------------------------------------------------------

    async handledeleteBookTransferFrame() {
    const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@id,"ifr_LaunchWin")]',
        { timeout: 30000 }
    );

    const frame = await frameElementHandle.contentFrame();

    if (!frame) {
        throw new Error('Book Transfer frame not loaded');
    }

    return frame;
    }


    async clickEnterQuery() {
    //const frame = await this.handledeleteBookTransferFrame();
    const frame = await this.handleAuthorizeBookTransferFrame();
    await frame.waitForSelector(this.Elements.New, {state: 'visible',timeout: 20000});
    await frame.click(this.Elements.EnterQuery);
   }

   async enterTransactionReferenceNumber(TransactionReferenceNum: string) {
    //const frame = await this.handledeleteBookTransferFrame();
    const frame = await this.handleAuthorizeBookTransferFrame();
    await frame.locator(this.Elements.TransactionReferenceNumber).fill(TransactionReferenceNum);
    }

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    const frame = await this.handleAuthorizeBookTransferFrame();
    await frame.waitForSelector(this.Elements.ExecuteQuery, {state: 'visible',timeout: 15000,});
    await frame.click(this.Elements.ExecuteQuery);
    }


    /*async clickDeletebutton() {
    const frame = await this.handledeleteBookTransferFrame();
    await frame.waitForSelector(this.Elements.Delete, {state: 'visible',timeout: 10000});
    await frame.click(this.Elements.Delete); 
      } 


  async clickokbutton() {
  try {
    const frame = this.page
      .frameLocator('//iframe[contains(@id,"ifr_LaunchWin") and not(contains(@style,"display:none"))]')
      .frameLocator('//iframe[contains(@id,"ifr_AlertWin")]');

    const okButton = frame.locator(this.Elements.OKbtn);

    // ✅ Click first popup
    await okButton.first().waitFor({ state: 'visible', timeout: 15000 });
    await okButton.first().click();
    console.log('Clicked first OK button');

    // Small delay to allow second popup (if any)
    await this.page.waitForTimeout(2000);

    // ✅ Check without waiting
    if (await okButton.first().isVisible()) {
      await okButton.first().click();
      console.log('Clicked second OK button');
    } else {
      console.log('Second popup not present');
    }

  } catch (error) {
    console.log('Error handling popup:', error);
    throw error;
  }
  } */

  /*------------------------------------AuthorizateBookTransferFrame-----------------------------------------------------*/
  
     async handleAuthorizeBookTransferFrame() {
      
      const frame = await this.handleBookTransferFrame();
    const frameElementHandle = await frame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const Bframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!Bframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return Bframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleBookTransferFrame();
    await frame.waitForSelector(this.Elements.New, {state: 'visible',timeout: 20000});
    await frame.click(this.Elements.EnterQuery);
   }

   async enterTransactionReferenceNumber(TransactionReferenceNum: string) {
    //const frame = await this.handledeleteBookTransferFrame();
    const frame = await this.handleBookTransferFrame();
    //const frame = await this.handleAuthorizeBookTransferFrame();
    await frame.locator(this.Elements.TransactionReferenceNumber).fill("2608901443065000");
    }

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleBookTransferFrame();
    await frame.waitForSelector(this.Elements.ExecuteQuery, {state: 'visible',timeout: 15000,});
    await frame.click(this.Elements.ExecuteQuery);
    }

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleBookTransferFrame();
    await frame.click(this.Elements.Authorize);
    await frame.waitForTimeout(3000);
      }

      
      /*async clickAuthorizebtn() {
  try {
    //const authorizeFrame = this.page
      //.frameLocator('//iframe[contains(@title, "Book Transfer Transaction Input")]')
      //.frameLocator('//iframe[contains(@title, "Authorize")]');

    //const authorizeBtn = authorizeFrame.locator('#BLK_BOOK_TXN__AUTHORIZATION');
    //const frame = await this.handleBookTransferFrame();
    const Bframe = await this.handleAuthorizeBookTransferFrame();

    //await authorizeBtn.waitFor({ state: 'visible', timeout: 5000 });
    //await authorizeBtn.click();
    await Bframe.click(this.Elements.Authorizebtn);
    console.log("Clicked on Authorize button");

  } catch (error) {
    console.error("Authorize frame not found", error);
    throw error;
  }
} */
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const Bframe = await this.handleAuthorizeBookTransferFrame();
    await Bframe.click(this.Elements.Authorizebtn);
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


/*------------------------------------handlebooktransferFrame-----------------------------------------------------

async handlebooktransferFrame() {
  const frameElementHandle = await this.page.waitForSelector(
    "//iframe[contains(@id,'ifr_LaunchWin')]",{ timeout: 20000 }
  );

  const frame = await frameElementHandle.contentFrame();

  if (!frame) {
    throw new Error("Frame not found");
  }

  await frame.waitForLoadState("domcontentloaded");

  return frame;
}

async selectDebitCurrency(currency: string) {
  const frame = await this.handlebooktransferFrame();

  await frame.locator(this.Elements.instructedCurrencyIndicator)
    .selectOption({ label: "Debit Currency" });
}

async enterdebitAmount(amount: string){
    const frame = await this.handlebooktransferFrame();
        await frame.locator(this.Elements.debitAmount).fill(amount);
    
  } */

  /*---------------------------------selectTemplateCheckbox--------------------------------------------------------


 async selectTemplateCheckbox(option: string) {

  const frame = await this.handlebooktransferFrame();

  if (option === "Credit to GL") {
    await frame.locator("//input[contains(@id,'CREDIT_TO_GL')]").check();
  }

  if (option === "Prefunded Payments") {
    await frame.locator("//input[contains(@id,'PREFUND')]").check();
  }
}
  
*/

          
 

}