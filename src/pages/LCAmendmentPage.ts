 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let LCAframe,ADframe,CurrecyLCAT,ContractamtLCAT,CustomrLCAT,Amendnumber,FLCAframe,AcpLCAframe
// let Bframe
export default class LCAmendmentPage{

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newamend: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Contrarfn:'//*[@id="BLK_AMEND_DETAILS__CONTREFNO|input"]',
        clickPC: "//span[@id='BLK_AMEND_DETAILS__BTN_P_oj113|text']",
        clickonParties:'//*[@id="TAB_PARTIES"]/span',
        saveAvail:"//span[@id='Save_oj7|text']",
        OKbutn : "//span[@id='BTN_OK_oj0|text']",
        okButton:"//span[@id='BTN_OK_oj0|text']",
        exitamend:'//*[@id="BTN_EXIT_IMG_oj140|text"]',  
        getamendnumbr:'//*[@id="BLK_AMEND_DETAILS__AMENDMENT_NO|input"]',
        AMnumber:'//*[@id="BLK_AMEND_DETAILS__AMENDMENT_NO|input"]',      
        Authorizedla: "//span[@id='Authorize_oj8|text']",
        Authorizebutonla: "//*[@id='BLK_AUTH_DETAILS__BTN_AUTH_oj24|text']", 
        getcurrecyLCA:'//*[@id="BLK_AMEND_DETAILS__CCY|input"]',
        currencyLCA:'//*[@id="BLK_REYKEY_DETAILS__CONTCCY|input"]',
        getcontractamttLCA:'//*[@id="BLK_AMEND_DETAILS__CONAMT|input"]',
        contractamountLCA:'//*[@id="BLK_REYKEY_DETAILS__CONTAMT|input"]',
        getcustomrLCA:'//*[@id="BLK_PARTY_DETAILS__CIFIDRC1|input"]',
        customerLCA:'//*[@id="BLK_REYKEY_DETAILS__CIFID|input"]',
        exitathr:'//*[@id="BTN_EXIT_IMG_oj140|text"]',
        securetype:'//*[@id="BLK_TXN_UDF_DETAILS__FLDVALRC9|input"]',
        field:'//*[@id="CSCTFUDF_oj130|text"]',
        savefield:'//*[@id="BTN_OK_oj8|text"]',
        acceptlcat: "//span[@id='BTN_ACCEPT_oj1|text']",
    
    }

   

    async handleLCAmendmentFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const LCAframe = await frameElementHandle.contentFrame();

    if (!LCAframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return LCAframe;
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Letters of Credit Amendment Confirmation Input")]', { timeout: 30000 }
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
async handleFieldsLCAmendFrame() {
      
      const LCAframe = await this.handleLCAmendmentFrame();
    const frameElementHandle = await LCAframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const FLCAframe = await frameElementHandle.contentFrame();
    

    if (!FLCAframe) {
        throw new Error('frame not loaded');
    }

    return FLCAframe;
    }
    async handleAcceptLCAmendFrame() {
      
      const LCAframe = await this.handleLCAmendmentFrame();
    const frameElementHandle = await LCAframe.waitForSelector('iframe[id="ifr_AlertWin"]', { timeout: 10000 });

    const AcpLCAframe = await frameElementHandle.contentFrame();
    

    if (!AcpLCAframe) {
        throw new Error('frame not loaded');
    }

    return AcpLCAframe;
    }

    async clickNewamend() {
    const LCAframe = await this.handleLCAmendmentFrame();

    await LCAframe.waitForSelector(this.Elements.Newamend,{state: 'visible',timeout: 20000});

    await LCAframe.click(this.Elements.Newamend);
    try{
       const frame1 = await this.handleAuthorizeLCAmendmentFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }
   


    async entercontrareference(Contrarfn: string) {
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.locator(this.Elements.Contrarfn).fill(Contrarfn);
    await LCAframe.waitForTimeout(3000);

    }
    async getAmendno() {       
            const GAframe = await this.handleLCAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Amendnumber = await GAframe.locator(this.Elements.getamendnumbr).inputValue()
    console.log("Amendment Number:"+Amendnumber)
       
    }
    async enterAmendnumber() {
       
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.waitForSelector(this.Elements.AMnumber, {state: 'visible',timeout: 2000});
    await LCAframe.locator(this.Elements.AMnumber).fill(Amendnumber)
   }
    async clickPCtab() {
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.click(this.Elements.clickPC);
    await LCAframe.waitForTimeout(3000);
    }
    async clickparties() {
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.click(this.Elements.clickonParties);
    await LCAframe.waitForTimeout(3000);
    }
        
    async clicksaveavail() {
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.click(this.Elements.saveAvail);
    await LCAframe.waitForTimeout(3000);
    }
    async clickOkbtn() {
    const LCAframe = await this.handleInformationMessageFrame();
    await LCAframe.click(this.Elements.OKbutn);
    await LCAframe.waitForTimeout(3000);
    }
    async clickexitavail() {
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.click(this.Elements.exitamend);
    await LCAframe.waitForTimeout(3000);
    }
    async clickexitathr() {
    const ALCAframe = await this.handleAuthorizeLCAmendmentFrame();
    await ALCAframe.click(this.Elements.exitathr);
    await ALCAframe.waitForTimeout(3000);
    }
    async clickfields() {
     const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.click(this.Elements.field);
    await LCAframe.waitForTimeout(3000);
    }
    async entersecuritytype(securetype: string) {
    const FLCAframe = await this.handleFieldsLCAmendFrame();
    await FLCAframe.locator(this.Elements.securetype).fill(securetype);
    await FLCAframe.waitForTimeout(3000);

    }
    async clicksaveField() {
     const FLCAframe = await this.handleFieldsLCAmendFrame();
    await FLCAframe.click(this.Elements.savefield);
    await FLCAframe.waitForTimeout(3000);
    }
    async clickacceptlcat() {
    const AcpLCAframe = await this.handleAcceptLCAmendFrame();
    await AcpLCAframe.click(this.Elements.acceptlcat);
    await AcpLCAframe.waitForTimeout(3000);
    }
    
    

     

async handleAuthorizeLCAmendmentFrame() {
      
      const frame = await this.handleLCAmendmentFrame();
    const frameElementHandle = await frame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ALCAframe = await frameElementHandle.contentFrame();
    

    if (!ALCAframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ALCAframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await LCAframe.click(this.Elements.EntrQuery);
   }

   

    async clickExecuteQuery() {
    
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await LCAframe.click(this.Elements.ExectQuery);
    }
async getcurrencyLCA() {       
            const LCAframe = await this.handleLCAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CurrecyLCAT = await LCAframe.locator(this.Elements.getcurrecyLCA).inputValue()
    console.log("Currency :"+CurrecyLCAT)
       
    }
    async entercurrencyLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ALCAframe = await this.handleAuthorizeLCAmendmentFrame();
    await ALCAframe.waitForSelector(this.Elements.currencyLCA, {state: 'visible',timeout: 20000});
    await ALCAframe.locator(this.Elements.currencyLCA).fill(CurrecyLCAT)
   }
   async getcontractamountLCA() {       
            const LCAframe = await this.handleLCAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      ContractamtLCAT = await LCAframe.locator(this.Elements.getcontractamttLCA).inputValue()
    console.log("Contract Amount:"+ContractamtLCAT)
       
    }
    async entercontractamountLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ALCAframe = await this.handleAuthorizeLCAmendmentFrame();
    await ALCAframe.waitForSelector(this.Elements.contractamountLCA, {state: 'visible',timeout: 20000});
    await ALCAframe.locator(this.Elements.contractamountLCA).fill(ContractamtLCAT)
   }
   async getcustomerLCA() {       
            const LCAframe = await this.handleLCAmendmentFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CustomrLCAT = await LCAframe.locator(this.Elements.getcustomrLCA).inputValue()
    console.log("Customer:"+CustomrLCAT)
       
    }
    async entercustomerLCA() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ALCAframe = await this.handleAuthorizeLCAmendmentFrame();
    await ALCAframe.waitForSelector(this.Elements.customerLCA, {state: 'visible',timeout: 20000});
    await ALCAframe.locator(this.Elements.customerLCA).fill(CustomrLCAT)
   }
   

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LCAframe = await this.handleLCAmendmentFrame();
    await LCAframe.click(this.Elements.Authorizedla);
    await LCAframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const ALCAframe = await this.handleAuthorizeLCAmendmentFrame();
    await ALCAframe.click(this.Elements.Authorizebutonla);
    await ALCAframe.waitForTimeout(3000);
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