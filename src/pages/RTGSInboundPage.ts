import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let RIframe,ARIframe,Transactrefn

export default class RTGSInboundPage {
      private base: ReusableMethods;
  
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        NewRI : "//span[@id='New_oj0|text']",
        SourceCode : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__SOURCE_CODE|input']",
        NetworkCode : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__NETWORK_CODE|input']",
        TransferCurrency : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__TXN_CCY|input']",
        TransferAmount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__TXN_AMOUNT|input']",
        CreditAccount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_NO|input']",
        gettransrfn:'//*[@id="BLK_BRN_RTGS_IN_ISO_DRIVER__TXN_REF_NO"]/div[1]/div/div/div',
        transactrefn:'//*[@id="BLK_BRN_RTGS_IN_ISO_DRIVER__TXN_REF_NO|input"]',
       // CreditAccountCurrency : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_CCY|input']",
        // CreditAccountBranch : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_BRN|input']",
        // CreditAmount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AMOUNT|input']",
        // DebitAccount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__DR_AC_NO|input']",
        // DebitAccountCurrency : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__DR_AC_CCY|input']",
        // DebitAccountBranch : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__DR_AC_BRN|input']",
        CreditorBICFI:"//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTR_FINID_BICFI|input']",
        DebitorBICFI:"//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__DBTR_FINID_BICFI|input']",
        CreditorAgentBICFI: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTA_FINID_BICFI|input']",
        DebitorAgentBICFI: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__DTA_FINID_BICFI|input']",
        InstructingAgentBICFI: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG_DTL__ING_FINID_BICFI|input']",
        Enrich: "//span[@id='BLK_BRN_RTGS_IN_ISO_TXN__BTN_ENRICH_oj123|text']",
        // OtherCreditorDetails: "//span[@id='BLK_BRN_RTGS_IN_FICT_MSG__BTN_CR_OTHR_DTLS_oj132|text']", 
        // Department: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTR_FINID_PSTLADR_DEPT|input']",
        // Floor: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTR_FINID_PSTLADR_FLR|input']",
        // save: "//span[@id='BTN_OK_oj37|text']",
        savebutton: '//*[@id="Save_oj7|text"]',
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        okButton: "//span[@id='BTN_OK_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        AuthorizedRI: "//span[@id='Authorize_oj8|text']",
        AuthorizebuttonRI: "//*[@id='BLK_BRN_RTGS_IN_ISO_DRIVER__BTN_AUTH_oj20|text']",
        exitbutton:"//span[@id='BTN_EXIT_IMG_oj161|text']"

       
    }

    async handleRTGSInboundFrame() {
    const frameElementHandle = await this.page.waitForSelector(
    "//iframe[contains(@id,'ifr_LaunchWin') and not(contains(@style,'display:none'))]", { timeout: 5000 });

    const RIframe = await frameElementHandle.contentFrame();

    if (!RIframe) {
    throw new Error("RTGS Inbound frame not loaded");
    }

    return RIframe;
   }
   async handleAuthorizeRTGSInboundFrame() {
      
      const RIframe = await this.handleRTGSInboundFrame();
    const frameElementHandle = await RIframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ARIframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ARIframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ARIframe;
    }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "RTGS ISO Inbound FI Credit Transfer Input Detailed")]', { timeout: 30000 }
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
   /*async handleCreditorDetails() {
    const frame = await this.handleRTGSInboundFrame();
    const frameElementHandles = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 5000 });

    const Cframe = await frameElementHandles.contentFrame();
    console.log("Check the screen");

    if (!Cframe) {
    throw new Error("HandleCreditor Inbound frame not loaded");
    }

    return Cframe;
   }*/

   async clickNew() {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.waitForSelector(this.Elements.NewRI, {state: 'visible',timeout: 20000});
    await RIframe.click(this.Elements.NewRI);
   }


    async enterSourceCode(sourceCode: string) {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.locator(this.Elements.SourceCode).fill(sourceCode);
    await this.page.waitForTimeout(2000);
    }

    async enterNetworkCode(networkCode: string) {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.locator(this.Elements.NetworkCode).fill(networkCode);  
    
    }

    
    async enterTransferCurrency(transferCurrency: string) {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.locator(this.Elements.TransferCurrency).fill(transferCurrency);
     
    }

   async enterTransferAmount(TransferAmount: string) {
   const RIframe = await this.handleRTGSInboundFrame();
   await RIframe.locator(this.Elements.TransferAmount).fill(TransferAmount);
    
   }

   async enterCreditAccount(CreditAccount: string) {
   const RIframe = await this.handleRTGSInboundFrame();
   await RIframe.locator(this.Elements.CreditAccount).fill(CreditAccount);
   await this.page.waitForTimeout(2000);
    
   }
   async entertransactrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.waitForSelector(this.Elements.transactrefn, {state: 'visible',timeout: 20000});
    await RIframe.locator(this.Elements.transactrefn).fill(Transactrefn)
   }
  async gettransrefn() {       
            const RIframe = await this.handleRTGSInboundFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Transactrefn = await RIframe.innerText(this.Elements.gettransrfn)
    console.log("Transaction Reference Number:"+Transactrefn)
       
    }  
    

   /* async enterCreditAccountCurrency(CreditAccountCurrency: string) {
   const frame = await this.handleRTGSInboundFrame();
   await frame.locator(this.Elements.CreditAccountCurrency).fill(CreditAccountCurrency);
   
   }

   async enterCreditAccountBranch(CreditAccountBranch: string) {
   const frame = await this.handleRTGSInboundFrame();
   await frame.locator(this.Elements.CreditAccountBranch).fill(CreditAccountBranch);
    
   }

  async enterCreditAmount(CreditAmount: string) {   
  const frame = await this.handleRTGSInboundFrame();
  await frame.locator(this.Elements.CreditAmount).fill(CreditAmount);
  
  }

  async enterDebitAccount(DebitAccount: string) {
  const frame = await this.handleRTGSInboundFrame();
  await frame.locator(this.Elements.DebitAccount).fill(DebitAccount);
   
  }

  async enterDebitAccountCurrency(DebitAccountCurrency: string) {
  const frame = await this.handleRTGSInboundFrame();
  await frame.locator(this.Elements.DebitAccountCurrency).fill(DebitAccountCurrency);
   
   }

   async enterDebitAccountBranch(DebitAccountBranch: string) {
   const frame = await this.handleRTGSInboundFrame();
   await frame.locator(this.Elements.DebitAccountBranch).fill(DebitAccountBranch);
    
   }  */

    async enterCreditorBICFI(CreditorBICFI: string) {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.locator(this.Elements.CreditorBICFI).fill(CreditorBICFI);
     
    }

   async enterDebitorBICFI(DebitorBICFI: string) {
   const RIframe = await this.handleRTGSInboundFrame();
   await RIframe.locator(this.Elements.DebitorBICFI).fill(DebitorBICFI);
    
    }

   async enterCreditorAgentBICFI(CreditorAgentBICFI: string) {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.locator(this.Elements.CreditorAgentBICFI).fill(CreditorAgentBICFI);
     
   }

   async enterDebitorAgentBICFI(debitorAgentBICFI: string) {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.locator(this.Elements.DebitorAgentBICFI).fill(debitorAgentBICFI);
     
   }

  async enterInstructingAgentBICFI(instructingAgentBICFI: string) {
  const RIframe = await this.handleRTGSInboundFrame();
  await RIframe.locator(this.Elements.InstructingAgentBICFI).fill(instructingAgentBICFI);
   
   }
   /*async clickOtherCreditDetails() {
    const frame = await this.handleRTGSInboundFrame();
    await frame.waitForSelector(this.Elements.OtherCreditorDetails, {state: 'visible',timeout: 2000});
    await frame.click(this.Elements.OtherCreditorDetails);
    await this.page.waitForTimeout(2000);
    
   }

   async enterDepartment(Department: string) {
  const Cframe = await this.handleCreditorDetails();
  await Cframe.locator(this.Elements.Department).fill(Department);
  await this.page.waitForTimeout(5000);
   
   }
   async enterFloor(Floor: string) {
  const Cframe = await this.handleCreditorDetails();
  await Cframe.locator(this.Elements.Floor).fill(Floor);
   
   }
   async saveCreditorDetails() {
     const Cframe = await this.handleCreditorDetails();
    await Cframe.click(this.Elements.save);
     await this.page.waitForTimeout(2000);
    }*/

   async clickEnrich() {
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.click(this.Elements.Enrich);
     await this.page.waitForTimeout(3000);
    }

    async saveTransaction() {
     const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.click(this.Elements.savebutton);
     await this.page.waitForTimeout(3000);
    }
    async exitTransaction() {
     const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.click(this.Elements.exitbutton);
     await this.page.waitForTimeout(3000);
    }
    async okTransaction() {
     const RIframe = await this.handleInformationMessageFrame();
    await RIframe.click(this.Elements.OKbtn);
     await this.page.waitForTimeout(3000);
    }
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await RIframe.click(this.Elements.EntrQuery);
   }
  

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await RIframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabRI() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const RIframe = await this.handleRTGSInboundFrame();
    await RIframe.click(this.Elements.AuthorizedRI);
    await RIframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtnRI() {
    
    const ARIframe = await this.handleAuthorizeRTGSInboundFrame();
    await ARIframe.click(this.Elements.AuthorizebuttonRI);
    await ARIframe.waitForTimeout(3000);
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