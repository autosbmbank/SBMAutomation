import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,account;
export default class RTGSIncomingPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
            
        newtab : '//*[@id="New_oj0|text"]',
        SourceCode : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__SOURCE_CODE|input"]',
        NetworkCode : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__NETWORK_CODE|input"]',
        TransferCurrecy : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__TXN_CCY|input"]',
        TransferAmount : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__TXN_AMOUNT|input"]',
        CreditAccountNo : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__CR_AC_NO|input"]',
        CreditBICFI : '//*[@id="BLK_BRN_RTGS_IN_CCT_MSG__CDTA_FINID_BICFI|input"]',
        DebitBICFI : '//*[@id="BLK_BRN_RTGS_IN_CCT_MSG__DTA_FINID_BICFI|input"]',
        INBICFI : '//*[@id="BLK_BRN_RTGS_IN_CCT_MSG_DTL__ING_FINID_BICFI|input"]',
        ChargeBearer : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__CHARGE_BEARER|input"]',
        Enrich : '//*[@id="BLK_BRN_RTGS_IN_ISO_TXN__BTN_ENRICH_oj119|text"]',
        DebitorName : '//*[@id="BLK_BRN_RTGS_IN_CCT_MSG__DBTR_NM|input"]',
        Savebtn : '//*[@id="Save_oj7|text"]',
        Okbutton : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj149|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        TransactionReferenceNo : '//*[@id="BLK_BRN_RTGS_IN_ISO_DRIVER__TXN_REF_NO|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebtn : '//*[@id="BLK_BRN_RTGS_IN_ISO_DRIVER__BTN_AUTH_oj20|text"]',
        ok : '//*[@id="BTN_OK_oj0|text"]',
     }

    // Incoming Transaction 
async handleRTGSINFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "RTGS ISO Inbound FI to FI Customer Credit Transfer Input Detailed")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleRTGSINFrame() failed:", message);
    }
  }
// information message
async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "RTGS ISO Inbound FI to FI Customer Credit Transfer Input Detailed")]', { timeout: 30000 }
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
// subscreen 
async getSubScreenFrame() {
    const frame = await this.handleRTGSINFrame();
    const frame1 = await this.handleInformationMessageFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
// authorize frame 
async getauthorizeFrame() {
    const frame = await this.handleRTGSINFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
// autorizeok
async clickauthorizeok() {
    try {
        // Step 1: Wait for the top-level main window frame
        const outerFrameHandle = await this.page.waitForSelector(
            'iframe[id="ifr_LaunchWin5812596958125969"]', // Using wildcard for dynamic IDs
            { state: 'visible', timeout: 30000 }
        );
        const outerFrame = await outerFrameHandle.contentFrame();

        // Step 2: Access the SubScreen iframe (where the authorization message lives)
        const innerFrameHandle = await outerFrame.waitForSelector(
            'iframe[id="ifrSubScreen"]', 
            { state: 'visible', timeout: 20000 }
        );
        const subFrame = await innerFrameHandle.contentFrame();

        // Step 3: Wait for the Alert/Information frame inside the SubScreen
        // This is where the 'Successfully Authorized' text and OK button reside
        const alertFrameHandle = await subFrame.waitForSelector(
            'iframe[id="ifr_AlertWin"]', 
            { state: 'visible', timeout: 20000 }
        );
        const finalFrame = await alertFrameHandle.contentFrame();

        // Final Step: Click the 'Ok' button using its ID
        const ok = finalFrame.locator('#BTN_OK_OI');
        await ok.waitFor({ state: 'visible', timeout: 20000 });
        await ok.click();

        console.log("Authorization confirmed successfully.");
    } catch (err) {
        console.error("Failed to navigate authorization frames:", err);
        throw err;
    }
}

async clicksnewtab(){
    const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.newtab, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.newtab);
}
  
async entersourcecode(sourcecode){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.SourceCode, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.SourceCode).clear()
       await frame.locator(this.Elements.SourceCode).fill(sourcecode)
}
async enternetworkcode(networkcode){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.NetworkCode, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.NetworkCode).clear()
       await frame.locator(this.Elements.NetworkCode).fill(networkcode)
}

async entercurrency(currency){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.TransferCurrecy, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransferCurrecy).clear()
       await frame.locator(this.Elements.TransferCurrecy).fill(currency)
}
async enteramount(amount){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.TransferAmount, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransferAmount).clear()
       await frame.locator(this.Elements.TransferAmount).fill(amount)
}
async enteraccount(account){
     const frame = await this.handleRTGSINFrame()
     await frame.waitForSelector(this.Elements.CreditAccountNo, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.CreditAccountNo).clear()
       await frame.locator(this.Elements.CreditAccountNo).fill(account)
}
async enterCreditBICFI(creditBICFI){
  const frame = await this.handleRTGSINFrame()
  await frame.waitForSelector(this.Elements.CreditBICFI, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.CreditBICFI).clear()
       await frame.locator(this.Elements.CreditBICFI).fill(creditBICFI)  
}
async enterDebitBICFI(debitBICFI){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.DebitBICFI, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.DebitBICFI).clear()
       await frame.locator(this.Elements.DebitBICFI).fill(debitBICFI)
}
async enterBICFI(BICFI){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.INBICFI, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.INBICFI).clear()
       await frame.locator(this.Elements.INBICFI).fill(BICFI)
}

async selectchargebearer() {
    const frame = await this.handleRTGSINFrame();

    const chargeField = frame.locator(this.Elements.ChargeBearer);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const debtOption = frame.locator("//li[normalize-space()='DEBT']");

    await debtOption.waitFor({ state: 'visible' });
    await debtOption.click();
}

async clicksEnrich(){
     const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.Enrich, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Enrich);
}

async captureinputvalue(){
    account=await frame.locator('//*[@id="BLK_BRN_RTGS_IN_ISO_DRIVER__TXN_REF_NO|input"]').inputValue()
    console.log("inputValue"+account)

}
async enterName(name){
    const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.DebitorName, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.DebitorName).clear()
       await frame.locator(this.Elements.DebitorName).fill(name)
}
async clickSave(){
    const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.Savebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Savebtn);
}
async clickOK(){
    const frame = await this.handleInformationMessageFrame()
        await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Okbutton);
}
async clickexitbtn(){
  const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
}
async clickenterquerytab(){
  const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
}
async enterreferencenumber(referenceno){
  const frame = await this.handleRTGSINFrame()
    await frame.waitForSelector(this.Elements.TransactionReferenceNo, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransactionReferenceNo).clear()
       await frame.locator(this.Elements.TransactionReferenceNo).fill(referenceno)
}
async clickexecutequerytab(){
  const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
}
async clickauthorizetab(){
  const frame = await this.handleRTGSINFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
}
async clickauthorizebutton(){
  const frame = await this.getauthorizeFrame()
  await frame.waitForSelector(this.Elements.authorizebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebtn);
}
async clickokbtn(){
  const frame = await this.getSubScreenFrame()
  await frame.waitForSelector(this.Elements.ok, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.ok);
}

}