import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let frame
let Cframe
export default class RTGSInboundPage {
      private base: ReusableMethods;
  
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        New : "//span[@id='New_oj0|text']",
        SourceCode : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__SOURCE_CODE|input']",
        NetworkCode : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__NETWORK_CODE|input']",
        TransferCurrency : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__TXN_CCY|input']",
        TransferAmount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__TXN_AMOUNT|input']",
        CreditAccount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_NO|input']",
        CreditAccountCurrency : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_CCY|input']",
        CreditAccountBranch : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_BRN|input']",
        CreditAmount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__CR_AMOUNT|input']",
        DebitAccount : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__DR_AC_NO|input']",
        DebitAccountCurrency : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__DR_AC_CCY|input']",
        DebitAccountBranch : "//input[@id='BLK_BRN_RTGS_IN_ISO_TXN__DR_AC_BRN|input']",
        CreditorBICFI:"//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTR_FINID_BICFI|input']",
        DebitorBICFI:"//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__DBTR_FINID_BICFI|input']",
        CreditorAgentBICFI: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTA_FINID_BICFI|input']",
        DebitorAgentBICFI: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__DTA_FINID_BICFI|input']",
        InstructingAgentBICFI: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG_DTL__ING_FINID_BICFI|input']",
        Enrich: "//span[@id='BLK_BRN_RTGS_IN_ISO_TXN__BTN_ENRICH_oj123|text']",
        OtherCreditorDetails: "//span[@id='BLK_BRN_RTGS_IN_FICT_MSG__BTN_CR_OTHR_DTLS_oj132|text']", 
        Department: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTR_FINID_PSTLADR_DEPT|input']",
        Floor: "//input[@id='BLK_BRN_RTGS_IN_FICT_MSG__CDTR_FINID_PSTLADR_FLR|input']",
        save: "//span[@id='BTN_OK_oj37|text']",
        savebutton: '//*[@id="Save_oj7|text"]',
        OKbutton : "//span[@id='BTN_OK_oj0|text']",
       
    }

    async handleRTGSInboundFrame() {
    const frameElementHandle = await this.page.waitForSelector(
    "//iframe[contains(@id,'ifr_LaunchWin') and not(contains(@style,'display:none'))]", { timeout: 5000 });

    const frame = await frameElementHandle.contentFrame();

    if (!frame) {
    throw new Error("RTGS Inbound frame not loaded");
    }

    return frame;
   }
   async handleCreditorDetails() {
    const frame = await this.handleRTGSInboundFrame();
    const frameElementHandles = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 5000 });

    const Cframe = await frameElementHandles.contentFrame();
    console.log("Check the screen");

    if (!Cframe) {
    throw new Error("HandleCreditor Inbound frame not loaded");
    }

    return Cframe;
   }


   async clickNew() {
    const frame = await this.handleRTGSInboundFrame();
    await frame.waitForSelector(this.Elements.New, {state: 'visible',timeout: 20000});
    await frame.click(this.Elements.New);
   }


    async enterSourceCode(sourceCode: string) {
    const frame = await this.handleRTGSInboundFrame();
    await frame.locator(this.Elements.SourceCode).fill(sourceCode);
    await this.page.waitForTimeout(2000);
    }

    async enterNetworkCode(networkCode: string) {
    const frame = await this.handleRTGSInboundFrame();
    await frame.locator(this.Elements.NetworkCode).fill(networkCode);  
    
    }

    
    async enterTransferCurrency(transferCurrency: string) {
    const frame = await this.handleRTGSInboundFrame();
    await frame.locator(this.Elements.TransferCurrency).fill(transferCurrency);
     
    }

   async enterTransferAmount(TransferAmount: string) {
   const frame = await this.handleRTGSInboundFrame();
   await frame.locator(this.Elements.TransferAmount).fill(TransferAmount);
    
   }

   async enterCreditAccount(CreditAccount: string) {
   const frame = await this.handleRTGSInboundFrame();
   await frame.locator(this.Elements.CreditAccount).fill(CreditAccount);
   await this.page.waitForTimeout(2000);
    
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
    const frame = await this.handleRTGSInboundFrame();
    await frame.locator(this.Elements.CreditorBICFI).fill(CreditorBICFI);
     
    }

   async enterDebitorBICFI(DebitorBICFI: string) {
   const frame = await this.handleRTGSInboundFrame();
   await frame.locator(this.Elements.DebitorBICFI).fill(DebitorBICFI);
    
    }

   async enterCreditorAgentBICFI(CreditorAgentBICFI: string) {
    const frame = await this.handleRTGSInboundFrame();
    await frame.locator(this.Elements.CreditorAgentBICFI).fill(CreditorAgentBICFI);
     
   }

   async enterDebitorAgentBICFI(debitorAgentBICFI: string) {
    const frame = await this.handleRTGSInboundFrame();
    await frame.locator(this.Elements.DebitorAgentBICFI).fill(debitorAgentBICFI);
     
   }

  async enterInstructingAgentBICFI(instructingAgentBICFI: string) {
  const frame = await this.handleRTGSInboundFrame();
  await frame.locator(this.Elements.InstructingAgentBICFI).fill(instructingAgentBICFI);
   
   }
   async clickOtherCreditDetails() {
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
    }

   async clickEnrich() {
    const frame = await this.handleRTGSInboundFrame();
    await frame.click(this.Elements.Enrich);
     await this.page.waitForTimeout(2000);
    }

    async saveTransaction() {
     const frame = await this.handleRTGSInboundFrame();
    await frame.click(this.Elements.savebutton);
     await this.page.waitForTimeout(4000);
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
     const okButton = overrideFrame.locator(this.Elements.OKbutton);
     await okButton.waitFor({state: 'visible', timeout: 5000 });
     await okButton.click();
     console.log("Successfully clicked on OK button")

     } catch (error) {
      console.log("Override or Alert frame not found");
     }
    }



}