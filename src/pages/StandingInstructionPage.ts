 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let CSIframe,CMISframe,Instrumentno,ACSIframe,CurrencyCSI,SIAmountCSI
// let Bframe
export default class CloseSIPage {

    private base: ReusableMethods;
  

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newtab: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Productcodecs: "//input[@id='BLK_SITBINSTRUCTION__PRODUCT_CODE|input']",
        clickCP: "//span[@id='BLK_SITBINSTRUCTION__BTN_P_oj109|text']",
        debitaccountbrn: "//input[@id='BLK_CONTRACTMASTER__DR_ACC_BR|input']",
        debitaccount: "//input[@id='BLK_CONTRACTMASTER__UI_DR_ACCOUNT|input']",
        siamount: "//input[@id='BLK_CONTRACTMASTER__SI_AMT|input']",
        creditbranch: "//input[@id='BLK_CONTRACTMASTER__CR_ACC_BR|input']",
        creditaccount: "//input[@id='BLK_CONTRACTMASTER__UI_CR_ACCOUNT|input']",
        Installments: "//input[@id='BLK_SITBINSTRUCTION__NUM_OF_INSTALLMENTS|input']",
        retrycount:"//input[@id='BLK_CONTRACTMASTER__RETRY_COUNT_ADV|input']",
        Enrich: "//span[@id='BLK_CONTRACTMASTER__BTN_ENRICH_oj126|text']",
        clickonaccept:'//span[@id="BTN_ACCEPT_oj1|text"]',
        acceptsave:'//span[@id="BTN_ACCEPT_oj1|text"]',
        misgroup:'//input[@id="BLK_MISDETAILS__MISGRP|input"]',
        exitcsi:'//span[@id="BTN_EXIT_IMG_oj139|text"]',
        getInstrno:'//*[@id="BLK_SITBINSTRUCTION__INSTRNO"]/div[1]/div/div/div',
        enterInstrno:'//*[@id="BLK_SITBINSTRUCTION__INSTRNO|input"]',
        getcurrncy:'//*[@id="BLK_CONTRACTMASTER__DR_ACC_CCY|input"]',
        entercurrncy:'//*[@id="BLK_REKEY__SI_AMT_CCYRC0|input"]',
      //  getSIamt:'//*[@id="BLK_SITBINSTRUCTION__INSTRNO"]/div[1]/div/div/div',
        enteSIamt:'//*[@id="BLK_REKEY__SI_AMTRC0|input"]',
        clickonMIStab:"//span[@id='MICTRMIS_oj135|text']",
        clickonsaveMIS:"//span[@id='BTN_OK_oj148|text']",
        save:"//span[@id='Save_oj7|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        Authorized: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: "//*[@id='BLK_INST__BTN_AUTHORIZE_oj17|text']", 
        okButton : "//span[@id='BTN_OK_oj0|text']",
        clickonacceptmis:'//span[@id="BTN_ACCEPT_oj1|text"]'
       
    
    }   

    async handleCloseSIFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const CSIframe = await frameElementHandle.contentFrame();

    if (!CSIframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return CSIframe;
   }

   async handleCloseMISFrame() {
    const CSIframe = await this.handleCloseSIFrame();
   const frameElementHandle = await CSIframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const CMISframe = await frameElementHandle.contentFrame();
    if (!CMISframe) {
        throw new Error('MIS frame not loaded');
    }

    return CMISframe;
   }
   async handleAuthorizeCloseSIFrame() {
      
      const CSIframe = await this.handleCloseSIFrame();
    const frameElementHandle = await CSIframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ACSIframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ACSIframe) {
        throw new Error('Authorize frame not loaded');
    }

    return ACSIframe;
    }
    
    async handleAcceptCloseSIFrame() {
    const CSIframe = await this.handleCloseSIFrame();
    const frameElementHandle = await CSIframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const AceeptCSIframe = await frameElementHandle.contentFrame();

    if (!AceeptCSIframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AceeptCSIframe;
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Standing Instruction Online Detailed")]', { timeout: 30000 }
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
    const CSIframe = await this.handleCloseSIFrame();

    await CSIframe.waitForSelector(this.Elements.Newtab, {
        state: 'visible',
        timeout: 20000
    });

    await CSIframe.click(this.Elements.Newtab);
   }


    async enterproductcodecs(productcodecs: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.Productcodecs).fill(productcodecs);
    await CSIframe.waitForTimeout(3000);

    }
    async clickonP() {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.click(this.Elements.clickCP);
    await CSIframe.waitForTimeout(3000);
    }
    async enterdebitaccountbrn(debitaccountbrn: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.debitaccountbrn).fill(debitaccountbrn);
    await CSIframe.waitForTimeout(3000);

    }
    async enterdebitaccount(debitaccount: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.debitaccount).fill(debitaccount);
    await CSIframe.waitForTimeout(3000);

    }
    async entersiamount(siamount: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.siamount).fill(siamount);
    await CSIframe.waitForTimeout(3000);

    }
    async entercreditbranch(creditbranch: string) {
    const Sframe = await this.handleCloseSIFrame();
    await Sframe.locator(this.Elements.creditbranch).fill(creditbranch);    
    await Sframe.waitForTimeout(3000);

    }
    async entercreditaccount(creditaccount: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.creditaccount).fill(creditaccount);
    await CSIframe.waitForTimeout(3000);

    }
    async enterInstallments(Installments: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.Installments).fill(Installments);
    await CSIframe.waitForTimeout(3000);

    }
    async enterretrycount(retrycount: string) {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.locator(this.Elements.retrycount).fill(retrycount);
    await CSIframe.waitForTimeout(3000);

    }
    async entermisgroup(misgroup: string) {
    const CloseMISframe = await this.handleCloseMISFrame();
    await CloseMISframe.locator(this.Elements.misgroup).fill(misgroup);
    await CloseMISframe.waitForTimeout(3000);
    
    }
    async clickEnrich() {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.click(this.Elements.Enrich);
    await CSIframe.waitForTimeout(3000);
    }
    async clickexit() {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.click(this.Elements.exitcsi);
    await CSIframe.waitForTimeout(3000);
    }
    async clickonMIS() {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.click(this.Elements.clickonMIStab);
    await CSIframe.waitForTimeout(3000);
    }
    
    
    async enterInstrnumber() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.waitForSelector(this.Elements.enterInstrno, {state: 'visible',timeout: 20000});
    await CSIframe.locator(this.Elements.enterInstrno).fill(Instrumentno)
   }
  async getInstrnumber() {       
            const CSIframe = await this.handleCloseSIFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Instrumentno = await CSIframe.innerText(this.Elements.getInstrno)
    console.log("Instrument Number:"+Instrumentno)
       
    }  
    async enterCurrency() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ACSIframe = await this.handleAuthorizeCloseSIFrame();
    await ACSIframe.waitForSelector(this.Elements.entercurrncy, {state: 'visible',timeout: 20000});
    await ACSIframe.locator(this.Elements.entercurrncy).fill(CurrencyCSI)
   }
  async getCurrency() {       
            const CSIframe = await this.handleCloseSIFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      CurrencyCSI = await CSIframe.locator(this.Elements.getcurrncy).inputValue()
    console.log("Currency:"+CurrencyCSI)
       
    }  
    async entersiamt() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ACSIframe = await this.handleAuthorizeCloseSIFrame();
    await ACSIframe.waitForSelector(this.Elements.enteSIamt, {state: 'visible',timeout: 20000});
    await ACSIframe.locator(this.Elements.enteSIamt).fill(SIAmountCSI)
   }
  async getsiamount() {       
            const CSIframe = await this.handleCloseSIFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      SIAmountCSI = await CSIframe.locator(this.Elements.siamount).inputValue()
    console.log("SI Amount:"+SIAmountCSI)
       
    }  

    async clickonsaveMIS() {
    const CloseMISframe = await this.handleCloseMISFrame();
    await CloseMISframe.click(this.Elements.clickonsaveMIS);
    await CloseMISframe.waitForTimeout(3000);
    }
    async clickonaccept() {
    const AcceptCSIframe = await this.handleAcceptCloseSIFrame();
    await AcceptCSIframe.click(this.Elements.clickonaccept);
    await AcceptCSIframe.waitForTimeout(3000);
    }
    async clickonacceptMIS() {
    const AcceptCSIframe = await this.handleAcceptCloseSIFrame();
    await AcceptCSIframe.click(this.Elements.clickonacceptmis);
    await AcceptCSIframe.waitForTimeout(3000);
    }
    async clicksave() {
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.click(this.Elements.save);
    await CSIframe.waitForTimeout(3000);
    }
    async clickokbtn() {
    const CSIframe = await this.handleInformationMessageFrame();
    await CSIframe.click(this.Elements.OKbtn);
    await CSIframe.waitForTimeout(3000);
    }
    async clickEnterQuery() {
    
        const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await CSIframe.click(this.Elements.EntrQuery);
   }
  

    async clickExecuteQuery() {
    
    const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await CSIframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabgs() {
        const CSIframe = await this.handleCloseSIFrame();
    await CSIframe.click(this.Elements.Authorized);
    await CSIframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtngs() {
    
    const ACSIframe = await this.handleAuthorizeCloseSIFrame();
    await ACSIframe.click(this.Elements.Authorizebutton);
    await ACSIframe.waitForTimeout(3000);
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