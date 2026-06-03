 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let GAframe,AAframe,Amendnumber,CurrecyGA,CustomrGA,ContractamountGA
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
        getamendnumbr:'//*[@id="BLK_AMEND_DETAILS__AMENDMENT_NO"]/div[1]/div/div/div',
        getcurrecyga:'//*[@id="BLK_AMEND_DETAILS__CCY"]/div[1]/div/div/div',
        getcustomrga:'//*[@id="BLK_PARTY_DETAILS__CIFIDRC1|input"]',
        getcontractamtga:'//*[@id="BLK_AMEND_DETAILS__CONAMT|input"]',
        AMnumber:"//input[@id='BLK_AMEND_DETAILS__AMENDMENT_NO|input']",
        okamend : "//span[@id='BTN_OK_oj0|text']",
        exitamend:"//span[@id='BTN_EXIT_IMG_oj113|text']",
        Amendnumber: "//input[@id='BLK_AMEND_DETAILS__AMENDMENT_NO|input']",
        Authorizedl: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BLK_AUTH_DETAILS__BTN_AUTH_oj24|text']",
        currency:"//input[@id='BLK_REYKEY_DETAILS__CONTCCY|input']",
        contractamount:"//input[@id='BLK_REYKEY_DETAILS__CONTAMT|input']",
        customerid:'//*[@id="BLK_REYKEY_DETAILS__CIFID|input"]',
        okButton : "//span[@id='BTN_OK_oj0|text']",
        partiesamend:'//*[@id="TAB_PARTIES"]/span'

            
    }   

    async handleGuaranteeAmendmentFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const GAframe = await frameElementHandle.contentFrame();

    if (!GAframe) {
        throw new Error('Frame not loaded');
    }

    return GAframe;
   }
   async handleAcceptAmendmentFrame() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    const frameElementHandle = await GAframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const AAframe = await frameElementHandle.contentFrame();

    if (!AAframe) {
        throw new Error('Frame not loaded');
    }

    return AAframe;
   }

    async clickNewamend() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();

    await GAframe.waitForSelector(this.Elements.Newamend,{state: 'visible',timeout: 20000});

    await GAframe.click(this.Elements.Newamend);
    try{
       const frame1 = await this.handleAuthorizeAmendFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Guarantees and Standby Letters of Credit Amendment")]', { timeout: 30000 }
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
    async clickpartiesamend() {
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.click(this.Elements.partiesamend);
    await GAframe.waitForTimeout(3000);
    }
    async clickacceptamend() {
    const AAframe = await this.handleAcceptAmendmentFrame();
    await AAframe.click(this.Elements.acceptamend);
    await AAframe.waitForTimeout(3000);
    }
    

     async clickOkbtn() {
    const GAframe = await this.handleInformationMessageFrame();
    await GAframe.click(this.Elements.okamend);
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
    
  
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await GAframe.click(this.Elements.EntrQuery);
   }

  
    async enterAmendnumber() {
       
    const GAframe = await this.handleGuaranteeAmendmentFrame();
    await GAframe.waitForSelector(this.Elements.AMnumber, {state: 'visible',timeout: 2000});
    await GAframe.locator(this.Elements.AMnumber).fill(Amendnumber)
   }
   async entercurrencyga() {
    
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.waitForSelector(this.Elements.currency, {state: 'visible',timeout: 2000});
    await AAMframe.locator(this.Elements.currency).fill(CurrecyGA)
   }
   async entercustomerga() {
    
    
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.waitForSelector(this.Elements.customerid, {state: 'visible',timeout: 2000});
    await AAMframe.locator(this.Elements.customerid).fill(CustomrGA)
   }
   async enterontractamountga() {
    
    
    const AAMframe = await this.handleAuthorizeAmendFrame();
    await AAMframe.waitForSelector(this.Elements.contractamount, {state: 'visible',timeout: 2000});
    await AAMframe.locator(this.Elements.contractamount).fill(ContractamountGA)
   }
  async getAmendno() {       
            const GAframe = await this.handleGuaranteeAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Amendnumber = await GAframe.innerText(this.Elements.getamendnumbr)
    console.log("Amendment Number:"+Amendnumber)
       
    }
    async getcurrencyga() {       
            const GAframe = await this.handleGuaranteeAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CurrecyGA = await GAframe.innerText(this.Elements.getcurrecyga)
    console.log("Currency:"+CurrecyGA)
       
    }
    async getcustomerga() {       
            const GAframe = await this.handleGuaranteeAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CustomrGA = await GAframe.locator(this.Elements.getcustomrga).inputValue()
    console.log("Customer:"+CustomrGA)
       
    }
    async getcontractamountga() {       
            const GAframe = await this.handleGuaranteeAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
    //   ContractamountGA = await GAframe.innerText(this.Elements.getcontractamtga)
    // console.log("Contract Amount:"+ContractamountGA)
     ContractamountGA = await GAframe.locator(this.Elements.getcontractamtga).inputValue()
     console.log("Contract Amount:"+ContractamountGA)
     
       
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