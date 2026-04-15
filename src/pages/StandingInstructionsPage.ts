 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let Sframe,Mframe
// let Bframe
export default class StandingInstructionsPage {

    private base: ReusableMethods;
  clickOtherCreditDetails: any;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newtab: "//span[@id='New_oj0|text']",
        EnterQuery: "//span[@id='EnterQuery_oj17|text']",
        TransactionReferenceNumber: "//*[@id='BLK_BOOK_TXN__TXN_REF_NO|input']",
        ExecuteQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Productcodes: "//input[@id='BLK_SITBINSTRUCTION__PRODUCT_CODE|input']",
        clickP: "//span[@id='BLK_SITBINSTRUCTION__BTN_P_oj109|text']",
        debitaccountbrn: "//input[@id='BLK_CONTRACTMASTER__DR_ACC_BR|input']",
        debitaccount: "//input[@id='BLK_CONTRACTMASTER__UI_DR_ACCOUNT|input']",
        siamount: "//input[@id='BLK_CONTRACTMASTER__SI_AMT|input']",
        creditbranch: "//input[@id='BLK_CONTRACTMASTER__CR_ACC_BR|input']",
        creditaccount: "//input[@id='BLK_CONTRACTMASTER__UI_CR_ACCOUNT|input']",
        Installments: "//input[@id='BLK_SITBINSTRUCTION__NUM_OF_INSTALLMENTS|input']",
        retrycount:"//input[@id='BLK_CONTRACTMASTER__RETRY_COUNT_ADV|input']",
        Enrich: "//span[@id='BLK_CONTRACTMASTER__BTN_ENRICH_oj126|text']",
        clickonMIS:"//span[@id='MICTRMIS_oj135|text']",
        ratetype:"//input[@id='BLK_MISDETAILS__REFRATETYP|input']",
        profitmethod:"//input[@id='BLK_MISDETAILS__CALCMTH|input']",
        ratecode:"//input[@id='BLK_MISDETAILS__REFRATECD|input']",
        poolcode:"//input[@id='BLK_MISDETAILS__POOLCD|input']",
        clickonsaveMIS:"//span[@id='BTN_OK_oj148|text']",
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        Search: "//a[normalize-space()='Search']",
        doubleclicktransaction: "//td[@class='numeric']//a[@alt='TXN_REF_NO'][normalize-space()='2604401425276000']",
        Authorize: "//span[@id='Authorize_oj8|text']",
        Authorizebtn: "//*[@id='BLK_BOOK_TXN__AUTHORIZATION_oj14|text']", 
        instructedCurrencyIndicator: "//select[@id='BLK_BOOK_TXN__INSTRUCTED_CCY_IND']",
    
    }

   

    async handleStandingInstructionFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const Sframe = await frameElementHandle.contentFrame();

    if (!Sframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return Sframe;
   }

   async handleMISFrame() {
    const Sframe = await this.handleStandingInstructionFrame();
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifrSubScreen")]',{ timeout: 30000 });

    const Mframe = await frameElementHandle.contentFrame();

    if (!Mframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return Mframe;
   }


    async clickNewtab() {
    const Sframe = await this.handleStandingInstructionFrame();

    await Sframe.waitForSelector(this.Elements.Newtab, {
        state: 'visible',
        timeout: 20000
    });

    await Sframe.click(this.Elements.Newtab);
   }
   


    async enterproductcodes(productcodes: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.Productcodes).fill(productcodes);
    await Sframe.waitForTimeout(3000);

    }
    async clickonP() {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.click(this.Elements.clickP);
    await Sframe.waitForTimeout(3000);
    }
    async enterdebitaccountbrn(debitaccountbrn: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.debitaccountbrn).fill(debitaccountbrn);
    await Sframe.waitForTimeout(3000);

    }
    async enterdebitaccount(debitaccount: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.debitaccount).fill(debitaccount);
    await Sframe.waitForTimeout(3000);

    }
    async entersiamount(siamount: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.siamount).fill(siamount);
    await Sframe.waitForTimeout(3000);

    }
    async entercreditbranch(creditbranch: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.creditbranch).fill(creditbranch);    
    await Sframe.waitForTimeout(3000);

    }
    async entercreditaccount(creditaccount: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.creditaccount).fill(creditaccount);
    await Sframe.waitForTimeout(3000);

    }
    async enterInstallments(Installments: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.Installments).fill(Installments);
    await Sframe.waitForTimeout(3000);

    }
    async enterretrycount(retrycount: string) {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.locator(this.Elements.retrycount).fill(retrycount);
    await Sframe.waitForTimeout(3000);

    }
    async clickEnrich() {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.click(this.Elements.Enrich);
    await Sframe.waitForTimeout(3000);
    }
    async clickonMIS() {
    const Sframe = await this.handleStandingInstructionFrame();
    await Sframe.click(this.Elements.clickonMIS);
    await Sframe.waitForTimeout(3000);
    }
    async enterratetype(ratetype: string) {
    const Mframe = await this.handleMISFrame();
    await Mframe.locator(this.Elements.ratetype).fill(ratetype);
    await Mframe.waitForTimeout(3000);

    }
    async enterprofitmethod(profitmethod: string) {
    const Mframe = await this.handleMISFrame();
    await Mframe.locator(this.Elements.profitmethod).fill(profitmethod);
    await Mframe.waitForTimeout(3000);

    }
    async enterpoolcode(poolcode: string) {
    const Mframe = await this.handleMISFrame();
    await Mframe.locator(this.Elements.poolcode).fill(poolcode);
    await Mframe.waitForTimeout(3000);

    }
    async enterratecode(ratecode: string) {
    const Mframe = await this.handleMISFrame();
    await Mframe.locator(this.Elements.ratecode).fill(ratecode);
    await Mframe.waitForTimeout(3000);

    }

    async clickonsaveMIS() {
    const Mframe = await this.handleMISFrame();
    await Mframe.click(this.Elements.clickonsaveMIS);
    await Mframe.waitForTimeout(3000);
    }
    

    /*async enterNetworkcodeb(Networkcodeb: string) {
    const frame = await this.handleStandingInstructionFrame();
    await frame.locator(this.Elements.Networkcodeb).fill(Networkcodeb);
    }

    async enterDebitorAccount(accountNo: string) {
    const frame = await this.handleStandingInstructionFrame();
    await frame.locator(this.Elements.DebitorAccount).fill(accountNo);
    await frame.waitForTimeout(3000);
    }

    async enterCreditorAccount(accountNo: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.CreditorAccount).fill(accountNo);
    await frame.waitForTimeout(3000);
    }*/

    /*async enterCreditCurrency(Currency: string) {
    const frame = await this.handleBookTransferFrame();
    await frame.locator(this.Elements.CreditCurrency).fill(Currency);
    }
    
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

*/
}