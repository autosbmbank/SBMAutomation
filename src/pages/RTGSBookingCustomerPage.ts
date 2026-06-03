import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,transrefnum;
export default class RTGSBookingCustomerPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
            
        newtab : '//*[@id="New_oj0|text"]',
        SourceCode : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__SOURCE_CODE|input"]',
        NetworkCode : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__NETWORK_CODE|input"]',
        TransferCurrecy : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__TXN_CCY|input"]',
        TransferAmount : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__TXN_AMOUNT|input"]',
        DebitAccountNo : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__DR_AC_NO|input"]',
        CreditBICFI : '//*[@id="BLK_BRN_RTGS_OUT_CCT_MSG__CDTA_FINID_BICFI|input"]',
        DebitBICFI : '//*[@id="BLK_BRN_RTGS_OUT_CCT_MSG__DTA_FINID_BICFI|input"]',
        INBICFI : '//*[@id="BLK_BRN_RTGS_OUT_CCT_MSG__IND_FINID_BICFI|input"]',
        firstrow : '//*[@id="TableLov"]/div[1]/table/tbody/tr',
        ChargeBearer : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__CHARGE_BEARER|input"]',
        Enrich : '//*[@id="BLK_BRN_RTGS_OUT_ISO_TXN__BTN_ENRICH_oj124|text"]',
        CreditorName : '//*[@id="BLK_BRN_RTGS_OUT_CCT_MSG__CDTR_NM|input"]',
        Savebtn : '//*[@id="Save_oj7|text"]',
        Okbutton : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj155|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        TransactionReferenceNo : '//*[@id="BLK_BRN_RTGS_OUT_ISO_DRIVER__TXN_REF_NO|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebtn : '//*[@id="BLK_BRN_RTGS_OUT_ISO_DRIVER__BTN_AUTH_oj21|text"]',
        ok : '//*[@id="BTN_OK_oj0|text"]',
        getrefNo : '//*[@id="BLK_BRN_RTGS_OUT_ISO_DRIVER__TXN_REF_NO"]/div[1]/div/div/div',
     }

    // Incoming Transaction 
async handleRTGSCustomerFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "RTGS ISO Outbound FI to FI Customer Credit Transfer Input Detailed")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleRTGSCustomerFrame() failed:", message);
    }
  }
// information message
async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "RTGS ISO Outbound FI to FI Customer Credit Transfer Input Detailed")]', { timeout: 30000 }
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
    const frame = await this.handleRTGSCustomerFrame();
    const frame1 = await this.handleInformationMessageFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
// authorize frame 
async getauthorizeFrame() {
    const frame = await this.handleRTGSCustomerFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

// firstrow
async getrowframe(){
     const frame = await this.handleRTGSCustomerFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}


async clicksnewtab(){
    const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.newtab, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.newtab);
      try{
       const frame1 = await this.getauthorizeFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
}
  
async Entersourcecode(sourcecode){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.SourceCode, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.SourceCode).clear()
       await frame.locator(this.Elements.SourceCode).fill(sourcecode)
}
async enternetworkcode(networkcode){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.NetworkCode, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.NetworkCode).clear()
       await frame.locator(this.Elements.NetworkCode).fill(networkcode)
}

async entercurrency(currency){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.TransferCurrecy, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransferCurrecy).clear()
       await frame.locator(this.Elements.TransferCurrecy).fill(currency)
}
async enteramount(amount){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.TransferAmount, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransferAmount).clear()
       await frame.locator(this.Elements.TransferAmount).fill(amount)
}
async enteraccount(account){
     const frame = await this.handleRTGSCustomerFrame()
     await frame.waitForSelector(this.Elements.DebitAccountNo, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.DebitAccountNo).clear()
       await frame.locator(this.Elements.DebitAccountNo).fill(account)
}
async enterCreditBICFI(creditBICFI){
  const frame = await this.handleRTGSCustomerFrame()
  await frame.waitForSelector(this.Elements.CreditBICFI, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.CreditBICFI).clear()
       await frame.locator(this.Elements.CreditBICFI).fill(creditBICFI)  
}
async enterDebitBICFI(debitBICFI){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.DebitBICFI, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.DebitBICFI).clear()
       await frame.locator(this.Elements.DebitBICFI).fill(debitBICFI)
}
async enterBICFI(BICFI){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.INBICFI, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.INBICFI).clear()
       await frame.locator(this.Elements.INBICFI).fill(BICFI)
}

async clicksfirstrow(){
     const frame = await this.getrowframe()
        await frame.waitForSelector(this.Elements.firstrow, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.firstrow);
}

async selectchargebearer() {
    const frame = await this.handleRTGSCustomerFrame();

    const chargeField = frame.locator(this.Elements.ChargeBearer);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const sharOption = frame.locator("//li[normalize-space()='SHAR']");

    await sharOption.waitFor({ state: 'visible' });
    await sharOption.click();
}

async clicksEnrich(){
     const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.Enrich, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Enrich);
}

async enterName(name){
    const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.CreditorName, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.CreditorName).clear()
       await frame.locator(this.Elements.CreditorName).fill(name)
}
async clickSave(){
    const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.Savebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Savebtn);
}
async clickOK(){
    const frame = await this.handleInformationMessageFrame()
        await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Okbutton);
}
async clickexitbtn(){
  const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
}
async clickenterquerytab(){
  const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
}
async enterreferencenumber(){
  const frame = await this.handleRTGSCustomerFrame()
    await frame.waitForSelector(this.Elements.TransactionReferenceNo, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TransactionReferenceNo).clear()
       await frame.locator(this.Elements.TransactionReferenceNo).fill(transrefnum)
}
async clickexecutequerytab(){
  const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
}
async clickauthorizetab(){
  const frame = await this.handleRTGSCustomerFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
}
async clickauthorizebutton(){
  const frame = await this.getauthorizeFrame()
  await frame.waitForSelector(this.Elements.authorizebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebtn);
}
async clickokbtn() {
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
async getTransrefNumber(){
         const frame = await this.handleRTGSCustomerFrame()
         transrefnum=await frame.innerText(this.Elements.getrefNo)
        console.log("Account number "+transrefnum)
    }

}