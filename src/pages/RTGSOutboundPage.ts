import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";

let frame 
export default class RTGSOutboundPage {
    
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
         
              newTab:'//*[@id="New_oj0|text"]',
              SourceCode: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__SOURCE_CODE|input"]',
              NetworkCode: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__NETWORK_CODE|input"]',
              TransferCurrency: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__TXN_CCY|input"]',
              TransferAmount:'//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__TXN_AMOUNT|input"]',
                DebitAccount: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__DR_AC_NO|input"]',
                NetworkAccount: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__NETWORK_ACCOUNT|input"]',
                DebitorBICFI:'//*[@id="BLK_BRN_RTGS_OUT_FICT_MSG__DBTR_FINID_BICFI|input"]',
                CreditorAgentBICFI: '//*[@id="BLK_BRN_RTGS_OUT_FICT_MSG__CDTA_FINID_BICFI|input"]',
                DebitorAgentBICFI: '//*[@id="BLK_BRN_RTGS_OUT_FICT_MSG__DTA_FINID_BICFI|input"]',                
                CreditorBICFI: '//*[@id="BLK_BRN_RTGS_OUT_FICT_MSG__CDTR_FINID_BICFI|input"]',
                InstructingAgentBICFI:'//*[@id="BLK_BRN_RTGS_OUT_FICT_MSG__IND_FINID_BICFI|input"]',
                enrichButton: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__BTN_ENRICH_oj128|text"]',
                saveButton:'//*[@id="Save_oj7|text"]',
                okButton: "//button[@id='popup_ok']",
                //SubmitButton: "//a[normalize-space()='LESOTHO POST BANK NEW']"
                    }

    
  
    async handleRTGSOutboundFrame() {

        const frameElementHandle = await this.page.waitForSelector("//iframe[contains(@id,'ifr_LaunchWin') and not(contains(@style,'display: none'))]",
            { timeout: 30000 }
        );

        const frame = await frameElementHandle.contentFrame();

        if (!frame) {
            throw new Error("RTGSOutbound Frame not found");
        }

        return frame;
    }
  
    async clickNewTab(){
        const frame =  await this.handleRTGSOutboundFrame();
       // await frame.waitForSelector(this.Elements.newTab, {state : 'visible' ,timeout: 10000 });
        await frame.click(this.Elements.newTab);
    }
 
    async enterSourceCode(SCode: string) {
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.SourceCode).fill(SCode);
    await this.page.waitForTimeout(2000);
    }
    async enterNetworkCode(NCode: string) {
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.NetworkCode).fill(NCode);  
   
    }
   
    async enterTransferCurrency(TCode: string) {
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.TransferCurrency).fill(TCode);
     
    }
   async enterTransferAmount(TAcode: string) {
   const frame = await this.handleRTGSOutboundFrame();
   await frame.locator(this.Elements.TransferAmount).fill(TAcode);
   
   }
   
   
    async enterNetworkAccount(NAcode: string) { 
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.NetworkAccount).fill(NAcode); 
    }
  async enterDebitAccount(DAcode: string) {
  const frame = await this.handleRTGSOutboundFrame();
  await frame.locator(this.Elements.DebitAccount).fill(DAcode);
   
  }
  
async enterDebitorBICFI(DBcode: string) {

    const mainFrame = await this.handleRTGSOutboundFrame();

    // Step 1: Fill BICFI
    await mainFrame.locator(this.Elements.DebitorBICFI).fill(DBcode);
    await mainFrame.waitForTimeout(2000);

}

     async enterCreditorAgentBICFI(CAcode: string) {
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.CreditorAgentBICFI).fill(CAcode);
     
   }
   async enterDebitorAgentBICFI(DBAcode: string) {
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.DebitorAgentBICFI).fill(DBAcode);
     
   }
    async enterCreditorBICFI(CBcode: string) {
    const frame = await this.handleRTGSOutboundFrame();
    await frame.locator(this.Elements.CreditorBICFI).fill(CBcode);
     
    }   

  async enterInstructingAgentBICFI(IAcode: string) {
  const frame = await this.handleRTGSOutboundFrame();
  await frame.locator(this.Elements.InstructingAgentBICFI).fill(IAcode);
   
   }

    async clickEnrich() {
  const frame = await this.handleRTGSOutboundFrame();

  const enrichBtn = frame.locator(this.Elements.enrichButton);
   await frame.waitForTimeout(2000);

  // Wait for button
  await enrichBtn.waitFor({ state: 'visible', timeout: 15000 });

  // Wait for overlays to disappear (fix applied)
  await frame.locator("#Div_ChildWin")
    .waitFor({ state: 'detached', timeout: 20000 })
    .catch(() => {});

  await frame.locator("#masker")
    .waitFor({ state: 'detached', timeout: 20000 })
    .catch(() => {});

  // Click safely
  await enrichBtn.click();

  console.log("Clicked Enrich button successfully");
}


    async saveTransaction() {
     const frame = await this.handleRTGSOutboundFrame();
    await frame.click(this.Elements.saveButton);
     await this.page.waitForTimeout(2000);
    }
    async clickOk() {
    try{
     const outerFrameHandle1 = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin6115556561155565']", { timeout: 10000 });
     const outerFrame = await outerFrameHandle1.contentFrame();
     // Wait for the Override Message frame inside it
     const innerframehandle1 = await outerFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 10000 });
     const overrideFrame = await innerframehandle1.contentFrame();
     //const message = successframe.locator(this.Elements.successmsg);
     //await message.waitFor({ state: 'visible', timeout: 15000 });
     // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
     const okButton = overrideFrame.locator(this.Elements.okButton);
     await okButton.waitFor({state: 'visible', timeout: 10000 });
     await okButton.click();
     console.log("Successfully clicked on OK button")
     } catch (error) {
      console.log("Override or Alert frame not found");
     }
    }


};