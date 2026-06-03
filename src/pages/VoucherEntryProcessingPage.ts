import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import { exit } from "node:process";




let batchFrame,JournalFrame,informationFrame,batchno,JournalFrame1,AuthFrame,InformFrame;

export default class VoucherEntryProcessingPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

   private Elements = {
    outerFrame: '//iframe[contains(@title, "Journal Entry Input")]',
    innerFrame: 'iframe[id="ifrSubScreen"]',
    informFrame:'iframe[id="ifr_AlertWin"]',

    // Buttons
    newBtn: '//*[@id="New_oj0|text"]',
    okBtn: '//*[@id="BTN_OK_oj0|text"]',
    OKBTN: '//*[@id="BTN_OK_oj17|text"]',
    addRowBtn: '//*[@id="cmdAddRow_BLK_DETBS_JRNL_TXN_DETAIL"]/button',
    computeBtn: '//*[@id="BLK_DETBS_BATCH_MASTER__BTN_COMPUTE_oj59|text"]',
    saveBtn: '//*[@id="Save_oj7|text"]',
    batchCloseBtn: '//*[@id="BLK_DETBS_JRNL_TXN_MASTER__BTN_CLOSE_BATCH_oj60|text"]',

    // Input fields
    batchNumber: '//*[@id="BLK_DEVWS_BATCH_MASTER__BATCH_NO|input"]',
    description:'//*[@id="BLK_DEVWS_BATCH_MASTER__DESCRIPTION|input"]',
    debit: '//*[@id="BLK_DEVWS_BATCH_MASTER__DR_CHK_TOTAL|input"]',
    credit:'//*[@id="BLK_DEVWS_BATCH_MASTER__CR_CHK_TOTAL|input"]',
    drCrDropdown: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__DR_CRRC0|input"]',
    branchCode: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODERC0|input"]',
    branchCode1: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODERC1|input"]',
    accountNumber: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NORC0|input"]',
    accountNumber1: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NORC1|input"]',
    currency: "//input[@id='BLK_DETAIL__CURRENCY']",
    amount:'//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__AMOUNTRC0|input"]',
    amount1: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__AMOUNTRC1|input"]',
    transactionCode: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__TXN_CODERC0|input"]',
    transactionCode1: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__TXN_CODERC1|input"]',
    debitcurrency: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__CCYRC0|input"]',
    cridetcurrency: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__CCYRC1|input"]',
    drCrDropdown1: '//*[@id="BLK_DETBS_JRNL_TXN_DETAIL__DR_CRRC1|input"]',
    acceptBtn:'//*[@id="BTN_OK_oj1|text"]',
    exitBtn:'//*[@id="BTN_EXIT_IMG_oj66|text"]',
    exitBtn1:"//input[@id='BTN_EXIT']",
    authstatus:'//*[@id="BLK_DETBS_JRNL_TXN_MASTER__AUTHSTAT|input"]',
    batchnmbr:'//*[@id="BLK_DETBS_JRNL_TXN_MASTER__BATCH_NO|input"]',
    search : '//*[@id="Search_oj35|text"]',
    dblclick:'//*[@id="TBL_QryRslts"]/div[1]/table/tbody',
    AuthBtn:'//*[@id="Authorize_oj8|text"]',
    authframe:'//*[@id="ifrSubScreen"]',
    authbtn:'//*[@id="BLK_DETB_JRNL_TXN_MASTER__AUTH__BTN_AUTHORIZE_oj16|text"]',
    Branchslct:"//label[normalize-space()='Branch : 100']",
    Homebranch:"//ul//li[@id='home_branch']",
    // Alerts
    alertFrame: "//iframe[@id='ifr_AlertWin'][@title='Information Message']",
    successMessage: "//table//tr//td//span[contains(text(),'Successfully')]"
  };

  async handleJournalFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 20000 });
    JournalFrame = await frameHandle.contentFrame();
    console.log("Switched to Journal Frame");
  }

  async clickNewButton() {
    await JournalFrame.locator(this.Elements.newBtn).click();
  }
async handleBatchFrame() {
    try {
        // Wait for the iframe to appear in the DOM     
        const frameElementHandle = await JournalFrame.waitForSelector(this.Elements.innerFrame, { timeout: 20000 });
            batchFrame = await frameElementHandle.contentFrame();
    } catch (message) {
        console.log("Frame not found");
    }}


  async enterBatchNumber(batchNumber: string) {
    
   const maxLength = 4;
  // const remainingLength = maxLength - batchNumber.length;

  // const randomPart = remainingLength >= 0 
  //     ? await this.base.generateAlphanumericValue(remainingLength)
  //     : '';
   // if batchNumber is longer than 4, trim it (optional safeguard)
  batchNumber = batchNumber.substring(0, maxLength);

  const remainingLength = maxLength - batchNumber.length;

  let randomPart = '';
  if (remainingLength > 0) {
    randomPart = await this.base.generateAlphanumericValue(remainingLength);
  }

   batchno = batchNumber + randomPart;
    console.log("Final Batch no is "+batchno);
    await batchFrame.locator(this.Elements.batchNumber).fill(batchno);
  }
   async enterBatchnumber() {
    const frameHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 20000 });
    JournalFrame = await frameHandle.contentFrame();
    console.log("Batchno is "+batchno)
           await JournalFrame.locator(this.Elements.batchnmbr).clear()
           console.log("TestMamatha")
    await JournalFrame.locator(this.Elements.batchnmbr).fill(batchno);
  }

  async enterDescription(desc: string) {
    await batchFrame.locator(this.Elements.description).fill(desc);
  }

  async enterDebit(amount: string) {
    await batchFrame.locator(this.Elements.debit).fill(amount);
  }

  async enterCredit(amount: string) {
    await batchFrame.locator(this.Elements.credit).fill(amount);
  }

  async clickOk() {
    await batchFrame.locator(this.Elements.OKBTN).click();
  }
  async handleInformationMessage() {
   const frameElementHandle1 = await JournalFrame.waitForSelector(this.Elements.informFrame, { timeout: 30000 });
               informationFrame= await frameElementHandle1.contentFrame();
                await informationFrame.click(this.Elements.okBtn);
  }

 

  async clickAddRow() {
    await JournalFrame.locator(this.Elements.addRowBtn).click();
  }

  // async selectDrCrOption(option: string) {
  //   await JournalFrame.selectOption(this.Elements.drCrDropdown,option)
  // }
async selectDrCrOption() {
    // const JournalFrame = await this.handleJournalFrame();

    const chargeField = JournalFrame.locator(this.Elements.drCrDropdown);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const debitOption = JournalFrame.locator("//li[normalize-space()='Debit']");

    await debitOption.waitFor({ state: 'visible' });
    await debitOption.click();
}

  // async selectDrCrOption1(option: string) {
  //   await JournalFrame.selectOption(this.Elements.drCrDropdown1,option)
  // }
async selectDrCrOption1() {
    // const JournalFrame = await this.handleJournalFrame();

    const chargeField = JournalFrame.locator(this.Elements.drCrDropdown1);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const creditOption = JournalFrame.locator("//li[normalize-space()='Credit']");

    await creditOption.waitFor({ state: 'visible' });
    await creditOption.click();
}
  async enterBranchCode(code: string) {
    await JournalFrame.locator(this.Elements.branchCode).fill(code);
  }
  async enterBranchCode1(code: string) {
    await JournalFrame.locator(this.Elements.branchCode1).fill(code);
  }

  async enterAccountNumber(account: string) {
    await JournalFrame.locator(this.Elements.accountNumber).fill(account);
  }
    async enterAccountNumber1(account: string) {    
    await JournalFrame.locator(this.Elements.accountNumber1).fill(account);
  }
  
  async enterCurrency(curr: string) {
    await JournalFrame.locator(this.Elements.debitcurrency).fill(curr);
    
  }
    async enterCurrency1(curr: string) {    
    await JournalFrame.locator(this.Elements.cridetcurrency).fill(curr);
  }

  async enterAmount(amount: string) {
    await JournalFrame.locator(this.Elements.amount).fill(amount);
  }
async enterAmount1(amount: string) {    
    await JournalFrame.locator(this.Elements.amount1).fill(amount);
  }
  async enterTransactionCode(code: string) {
    await JournalFrame.locator(this.Elements.transactionCode).fill(code);
  }
    async enterTransactionCode1(code: string) {    
    await JournalFrame.locator(this.Elements.transactionCode1).fill(code);
  }

  async clickCompute() {
    await JournalFrame.locator(this.Elements.computeBtn).click();
    
  }
   async handleInformationMessage1() {
   const frameElementHandle1 = await JournalFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
               informationFrame= await frameElementHandle1.contentFrame();
                await informationFrame.click(this.Elements.okBtn);
  }

  async clickSaveButton() {
    await JournalFrame.locator(this.Elements.saveBtn).click();
    const frameElementHandle1 = await JournalFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
               informationFrame= await frameElementHandle1.contentFrame();
                await informationFrame.click(this.Elements.okBtn);
  }

  // async verifySuccessMessage() {
  //    const frameElementHandle1 = await JournalFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
  //              informationFrame= await frameElementHandle1.contentFrame();
  //   const smessage= informationFrame.locator(this.Elements.successMessage)
  //   console.log("success message is "+await smessage.textContent())
  //              expect(await smessage.textContent()).toContain("Successfully");
  //          await informationFrame.click(this.Elements.okBtn)
  // }

  async clickBatchClose() {
    await JournalFrame.locator(this.Elements.batchCloseBtn).click();
const frameElementHandle2 = await JournalFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
               informationFrame= await frameElementHandle2.contentFrame();
               informationFrame.click(this.Elements.okBtn);
  }

  async clickOK(){
    await batchFrame.locator(this.Elements.okBtn).click();
  }
async clickOnExitButton() {
    await JournalFrame.locator(this.Elements.exitBtn).click();
    console.log("Clicked on exit button")
   
  }
  async clickOnExitButton1() {
    await JournalFrame.locator(this.Elements.exitBtn1).click();
    console.log("Clicked on exit button1")  
  }
 

  // async selectAuthorizationStatus(status: string) {
  //   await JournalFrame.selectOption(this.Elements.AuthDropdown, status);
  // }
 async selectAuthorizationStatus() {
    //  const JournalFrame = await this.handleJournalFrame();

    const chargeField = JournalFrame.locator(this.Elements.authstatus);

    await chargeField.click();
    await this.page.waitForTimeout(2000);

    const unauthorizeOption = JournalFrame.locator("//li[normalize-space()='Unauthorized']");

    await unauthorizeOption.waitFor({ state: 'visible' });
    await unauthorizeOption.click();
}
async clickSearchButton() {
    await JournalFrame.locator(this.Elements.search).click();
  }
async doubleclicksrecord() {
    await JournalFrame.locator(this.Elements.dblclick).dblclick();
  }
  
  async clickAuthorizeButton() {
    const FrameHandle=await this.page.locator(this.Elements.outerFrame).nth(1)
    JournalFrame1 = await FrameHandle.contentFrame();
    console.log("In Authorize Button")
    
        await JournalFrame1.locator(this.Elements.AuthBtn).click();
        await this.page.waitForTimeout(2000);
    console.log("Clicked on Authorize Button")
   const FrameHandle1=await JournalFrame1.locator(this.Elements.authframe)
AuthFrame = await FrameHandle1.contentFrame();
   console.log("Switched to Auth Frame")
   await AuthFrame.locator(this.Elements.authbtn).click();
   console.log("Clicked on Authorize in Auth Frame")
    }

  async successMessage() {
     const frameElementHandle3 = await AuthFrame.locator(this.Elements.informFrame);
               InformFrame= await frameElementHandle3.contentFrame();
    //             const smessage= InformFrame.locator(this.Elements.successMessage)
    // console.log("success message is "+await smessage.textContent())
              //  expect(await smessage.textContent()).toContain("Successfully");
                await InformFrame.locator(this.Elements.okBtn).click();
    //             await JournalFrame1.locator(this.Elements.exitBtn).click();
    //             console.log("Clicked on exit button in Journal Frame1")
    //            const frameHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 10000 });
    // JournalFrame = await frameHandle.contentFrame();
    // console.log("Switched to Journal Frame");
    // await JournalFrame.locator(this.Elements.exitBtn1).click();

}
}
