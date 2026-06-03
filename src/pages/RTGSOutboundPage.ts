import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";

let frame ,transrefnum;
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
                searchbtn : '//*[@id="BLK_BRN_RTGS_OUT_FICT_MSG__IND_FINID_BICFI"]/div[1]/span/oj-button',
                firstrow : '//*[@id="TableLov"]/div[1]/table/tbody/tr',
                enrichButton: '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__BTN_ENRICH_oj128|text"]',
                saveButton:'//*[@id="Save_oj7|text"]',
                okButton: '//*[@id="BTN_OK_oj0|text"]',
                exit : '//*[@id="BTN_EXIT_IMG_oj165|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        TransactionReferenceNo : '//*[@id="BLK_BRN_RTGS_OUT_ISO_DRIVER__TXN_REF_NO|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebtn : '//*[@id="BLK_BRN_RTGS_OUT_ISO_DRIVER__BTN_AUTH_oj21|text"]',
        ok : '//*[@id="BTN_OK_oj0|text"]',
        getrefNo : '//*[@id="BLK_BRN_RTGS_OUT_ISO_DRIVER__TXN_REF_NO"]/div[1]/div/div/div',
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

    // authorize frame 
async getauthorizeFrame() {
    const frame = await this.handleRTGSOutboundFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
// information message
async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  "//iframe[contains(@id,'ifr_LaunchWin') and not(contains(@style,'display: none'))]", { timeout: 30000 }
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
// firstrow
async getrowframe(){
     const frame = await this.handleRTGSOutboundFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
    async getTransrefNumber(){
         const frame = await this.handleRTGSOutboundFrame()
         transrefnum=await frame.innerText(this.Elements.getrefNo)
        console.log("Account number "+transrefnum)
    }
  
    async clickNewTab(){
        const frame =  await this.handleRTGSOutboundFrame();
       // await frame.waitForSelector(this.Elements.newTab, {state : 'visible' ,timeout: 10000 });
        await frame.click(this.Elements.newTab);
        try{
       const frame1 = await this.getauthorizeFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
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
 async clicksearch (){
  const frame = await this.handleRTGSOutboundFrame()
        await frame.waitForSelector(this.Elements.searchbtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.searchbtn);
 }
   async clicksfirstrow(){
     const frame = await this.getrowframe()
        await frame.waitForSelector(this.Elements.firstrow, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.firstrow);

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
      const frame = await this.handleInformationMessageFrame()
        await frame.waitForSelector(this.Elements.okButton, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.okButton);
    }
async clickexitbtn(){
  const frame = await this.handleRTGSOutboundFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
}
async clickenterquerytab(){
  const frame = await this.handleRTGSOutboundFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
}
async enterreferencenumber(){
  const frame = await this.handleRTGSOutboundFrame()
    await frame.waitForSelector(this.Elements.TransactionReferenceNo, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransactionReferenceNo).clear()
       await frame.locator(this.Elements.TransactionReferenceNo).fill(transrefnum)
}
async clickexecutequerytab(){
  const frame = await this.handleRTGSOutboundFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
}
async clickauthorizetab(){
  const frame = await this.handleRTGSOutboundFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
}
async clickauthorizebutton(){
  const frame = await this.getauthorizeFrame()
  await frame.waitForSelector(this.Elements.authorizebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebtn);
}
//  remarks frame
async getSubScreenFrame() {
    const frame = await this.handleRTGSOutboundFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
async clickokbtn() {
  const frame = await this.getSubScreenFrame();

    const frameElementHandle2 = await frame.waitForSelector(
        'iframe[id="ifr_AlertWin"]',
        { state: 'visible', timeout: 30000 }
    );

    const successframe = await frameElementHandle2.contentFrame();

    //const message = successframe.locator('//span[contains(text(),"Successfully Saved")]');

    // await expect(message).toContainText('Successfully Saved');

    await successframe.click(this.Elements.ok);
}
}
