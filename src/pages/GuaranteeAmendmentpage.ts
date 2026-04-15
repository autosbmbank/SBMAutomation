 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let GAframe,AAframe
// let Bframe
export default class GuaranteeAmendmentpage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newamend: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Contrarefn: "//input[@id='BLK_AMEND_DETAILS__CONTREFNO|input']",
        clickPGA: "//span[@id='BLK_AMEND_DETAILS__BTN_P_oj92|text']",
        saveamend:"//span[@id='Save_oj7|text']",
        acceptamend: "//span[@id='BTN_ACCEPT_oj1|text']",
        OKbutn : "//span[@id='BTN_OK_oj0|text']",
        exitamend:"//span[@id='BTN_EXIT_IMG_oj113|text']",
        Amendnumber: "//input[@id='BLK_AMEND_DETAILS__AMENDMENT_NO|input']",
        Authorizedl: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BLK_AUTH_DETAILS__BTN_AUTH_oj24|text']",
        currency:"//input[@id='BLK_REYKEY_DETAILS__CONTCCY|input']",
        contractamount:"//input[@id='BLK_REYKEY_DETAILS__CONTAMT|input']",
        customerid:"//input[@id='BLK_REYKEY_DETAILS__CIFID|input']" 
        
    
    }

   

    async handleGuaranteeAmendmentFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const GAframe = await frameElementHandle.contentFrame();

    if (!GAframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return GAframe;
   }
   async handleAcceptAmendmentFrame() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    const frameElementHandle = await GAframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const AAframe = await frameElementHandle.contentFrame();

    if (!AAframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AAframe;
   }

    async clickNewamend() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();

    await GAframe.waitForSelector(this.Elements.Newamend,{state: 'visible',timeout: 20000});

    await GAframe.click(this.Elements.Newamend);
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Guarantees and Standby Letters of Credit Amendment ")]', { timeout: 30000 }
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
   


    async entercontractreference(Contrarefn: string) {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.locator(this.Elements.Contrarefn).fill(Contrarefn);
    await GAframe.waitForTimeout(3000);

    }
    async clickPGAtab() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.click(this.Elements.clickPGA);
    await GAframe.waitForTimeout(3000);
    }
    
    async clicksaveamend() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.click(this.Elements.saveamend);
    await GAframe.waitForTimeout(3000);
    }
    async clickacceptamend() {
    const AAframe = await this.handleAcceptAmendmentFrame();
    await AAframe.click(this.Elements.acceptamend);
    await AAframe.waitForTimeout(3000);
    }
    

     async clickOk() {
    const GAframe = await this.handleInformationMessageFrame();
    await GAframe.click(this.Elements.saveamend);
    await GAframe.waitForTimeout(3000);
    }

async clickexit() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.click(this.Elements.exitamend);
    await GAframe.waitForTimeout(3000);
    }
    

async handleAuthorizeAmendFrame() {
      
      const GAframe = await this.handleGuaranteeAmendmentFrame();
    const frameElementHandle = await GAframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const AAMframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!AAMframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AAMframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.waitForSelector(this.Elements.Newamend, {state: 'visible',timeout: 20000});
    await GAframe.click(this.Elements.EntrQuery);
   }
async clickAmendnumber() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.waitForSelector(this.Elements.Amendnumber, {state: 'visible',timeout: 20000});
    await GAframe.click(this.Elements.Amendnumber);
   }
   

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await GAframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.click(this.Elements.Authorizedl);
    await GAframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtn() {
    
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.click(this.Elements.Authorizebutton);
    await AAMframe.waitForTimeout(3000);
    }

async entercurrency(currency: string) {
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.locator(this.Elements.currency).fill(currency);
    await AAMframe.waitForTimeout(3000);

    }
    
async entercontractamount(contractamount: string) {
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.locator(this.Elements.contractamount).fill(contractamount);
    await AAMframe.waitForTimeout(3000);

    }
    async entercustomerid(customerid: string) {
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.locator(this.Elements.customerid).fill(customerid);
    await AAMframe.waitForTimeout(3000);

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