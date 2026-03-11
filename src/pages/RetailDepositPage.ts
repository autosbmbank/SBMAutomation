import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import { exit } from "node:process";
import { TIMEOUT } from "node:dns";
import { timeout } from "../hooks/hooks";
import { cli } from "winston/lib/winston/config";
let pagePromise, loginId, UserName, value1;
let newPage;
export default class ReatailDepositPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }
  private elements = {
    proceedBtn:'//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
    NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
    fetch:"//button[@class='oj-button-button']//span[@id='_oj34-lov-dialog-body-filter-fetch_oj47|text']",
    maintab: "//span[normalize-space()='Teller']",
   screenBtn: "//span[normalize-space()='Cash Deposit']",
   // screenBtn: "//span[normalize-space()='Cash Withdrawal']",
    AcclosureBtn:"//span[normalize-space()='Close Out Withdrawal']",
    screenBtn2:"//span[normalize-space()='Electronic Journal']",
    dropdown:"//a[@aria-label='expand']",
    pendingapproval:"//ul[@role='listbox']//li[6]//div",
    Sentbank:"//ul[@role='listbox']//li[3]//div",
    approveBtn:"//oj-button[@id='approveBtn']//button[@class='oj-button-button']",
   accountNumber: "//input[@id='txnAcc|input']",
   // accountNumber:"//input[@id='accNo|input']",
    closeacno:"//input[@id='accNo|input']",
    icLiqBtn:"//span[@data-bind='text : labelsCommon.liquidate']",
    //transactionAmount: "(//input[@id='_oj105-input-text|input'])[1]",
    transactionAmount: "(//div[@class='oj-text-field-middle']//input)[23]",
    InformationBtn: "(//a[contains(@role,'button')])[23]",
    customerInformation: "//input[@name='UDF_Customer']",
    submitButton: "(//span[normalize-space()='Submit'])[1]",
    successmsg: "(//div[@class='oj-message-summary oj-message-title'])[1]",
    okButton: "(//span[text()='Ok'])[1]",
    okcloseBtn:"(//button[@class='oj-button-button'])[2]",
    oksuccess:"//span[@data-bind='text: labels.okLbl']",
    samescreenYesBtn:"//oj-button[@on-click='[[stayOnScreen]]']//button[@class='oj-button-button']",
    queryTab:"//span[@data-bind='text : labelsCommon.queryLbl']",
    transRefBtn:"(//span[@slot='startIcon'])[10]",
    bycashmode:"//ul//li//div[@aria-label='By Cash']",
    byaccountmode:"//ul//li//div[@aria-label='By Account']",
    expandBtn:"//div[@id='oj-combobox-choice-closeMode']//span[@class='oj-text-field-end']//a[@aria-label='expand']",
    submitcloseBtn:"(//span[@id='wiz-custom-footer-next_oj61|text'])[1]",
    submitclose1Btn:"(//span[@id='wiz-custom-footer-next_oj281|text'])[1]",
    confirmBtn:"(//button[@class='oj-button-button'])[1]",
    submitforApprove:"(//button[@class='oj-button-button'])[1]",
    adviceconf: "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
    NoBtn: "(//span[@id='_oj82|text'])[1]",
    NoBtn1: "(//span[@id='_oj72|text'])[1]"
  };

  async NextGenFun() {
    await this.base.jsClick("//a[@id='DBoardNextGenUI']");
    console.log("Clicked on NextGen UI Dashboard");

    try {
      const frameElementHandle = await this.page.waitForSelector(this.elements.NextGenFrame, { timeout: 40000 });
      const nextgenframe = await frameElementHandle.contentFrame();
      console.log("Switched to NextGen UI Dashboard Frame");
      pagePromise = this.page.context().waitForEvent('page');
      await nextgenframe.getByText("Retail Operations").click();
      console.log("Clicked on Retail Operations");
    } catch (error) {
      console.log("Frame not found:", error.message);
      throw error;
    }
    
 try {
    newPage = await pagePromise;
  
  } catch {
    newPage = this.page;
  }
  await newPage.bringToFront().catch(() => {});
  await newPage.waitForFunction(() => document.body && document.body.innerText.length > 50);
 const proceed = newPage.locator(this.elements.proceedBtn).first();
  if (await proceed.count()) {
     try {
      await proceed.click({ timeout: 4000 });
    } catch {
      console.log("using JS click");
      await proceed.evaluate(el => el.click());
    }
  } else {
    console.log("Proceed not found");
  }
  await newPage.waitForLoadState('networkidle').catch(() => {});
  await newPage.waitForTimeout(600);
  
const currentURL = newPage.url();
await newPage.goto(currentURL, { waitUntil: 'networkidle' });
await newPage.waitForTimeout(20000);

   
  }
  async BranchSelection(BranchName: string) {

    await newPage.locator("//div[@class='branch-container']//span[@id='branch-name']").click({ timeout: 100000 });
    console.log("Clicked on branch name in new page");
    await newPage.fill("(//input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input'])[1]", BranchName);
    console.log("Entered Branch code")
   await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
     await newPage.waitForTimeout(1000);
        await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
    console.log("clicked on Fetch Button")
    console.log("clicked on Fetch Button")
    // await newPage.locator("(//table[@role='application']//tr[@class='oj-table-body-row']//td)[1]").click();
    await newPage.getByText(BranchName).click()
    console.log("clicked on Branch Code")
    try {

      await newPage.waitForSelector("#alertDialogId_oj11", { timeout: 5000 });
      console.log("Alert dialog detected");
      const proceedButton = newPage.locator("oj-button[on-click='[[confirmBtn]]']");
      console.log("Button detected")
      await proceedButton.click();
      console.log("Clicked on Proceed button in alert dialog");
      await newPage.waitForSelector("#alertDialogId_oj11", { state: 'hidden', timeout: 5000 });
      console.log("Alert dialog closed");
    } catch (error) {
      console.log("No alert dialog found or already dismissed");
    }
  }



  async searchScreen() {

    await newPage.locator(this.elements.maintab).click();
    await newPage.locator(this.elements.screenBtn).click();
  }
   async searchAcclosureScreen() {

    await newPage.locator(this.elements.maintab).click();
    await newPage.locator(this.elements.AcclosureBtn).click();
  }
   async searchScreen1() {

    await newPage.locator(this.elements.maintab).click();
    await newPage.locator(this.elements.screenBtn2).click();
  }
  async selectPendingid(){
    await newPage.locator(this.elements.dropdown).click();
    console.log('clicked on dropdown')
    await newPage.waitForTimeout(2000)
    await newPage.locator(this.elements.pendingapproval).click()
    console.log('clicked on pending approval')
    await newPage.locator("(//button[@class='oj-button-button'])[12]").click();
  }
  async selectsentbackid(){
    await newPage.locator(this.elements.dropdown).click();
    console.log('clicked on dropdown')
    await newPage.waitForTimeout(2000)
    await newPage.locator(this.elements.Sentbank).click()
    console.log('clicked on sent Back approval')
     await newPage.locator("(//button[@class='oj-button-button'])[12]").click();
    await newPage.locator("//oj-button[@id='resubmitBtn']//button[@class='oj-button-button']").first().click();
    await newPage.getByRole('button', { name: 'Confirm' }).click();
    await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await newPage.locator(this.elements.okButton).click()
  }
async closeScreen(){
   try {
      await newPage.locator("modalDialog3", { timeout: 5000 });
      console.log("close dialog detected");

      await newPage.locator(this.elements.NoBtn1).click()
      console.log("Clicked on No button");
      await newPage.waitForTimeout(5000)
      console.log("close dialog closed");
    } catch (error) {
      console.log("close dialog not found");

      //await newPage.locator(this.elements.NoBtn).click()
    }
}
  async approvefun(){
    await newPage.locator(this.elements.approveBtn).first().click()
     await newPage.getByRole('button', { name: 'Ok' }).click();
     await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await newPage.locator(this.elements.okButton).click()
  }
  
  async enterAccountNumber(accountNumber: string) {
    await newPage.locator(this.elements.accountNumber).fill(accountNumber);
    console.log("Entered Account Number:", accountNumber);
  }
  async entercloseAccountNumber(accountNumber: string) {
    await newPage.locator(this.elements.closeacno).fill(accountNumber);
    console.log("Entered Account Number:", accountNumber);
     await newPage.waitForTimeout(5000)
  }
  async clickonIcliquidate(){
    await newPage.click(this.elements.icLiqBtn)
    console.log("Clicked on IC Liquidate Button");
    await newPage.waitForTimeout(5000)
    await newPage.click(this.elements.icLiqBtn)
    console.log("Clicked on IC Liquidate Button");
  }
  async clickonOkBtn(){
   // await newPage.locator(this.elements.okcloseBtn).click()
    await newPage.getByRole('button', { name: 'OK' }).click();
    console.log("Clicked on OK Button");
  }
  async clickonclosesubmit(){
   // await newPage.getByText('Submit').nth(1).click()
   // console.log("Clicked on close Submit Button");
    await newPage.locator(this.elements.submitButton).click()
    await newPage.waitForTimeout(2000)
    console.log("Clicked on close Submit Button");
     await newPage.locator(this.elements.oksuccess).click()
     await newPage.waitForTimeout(2000)
     await newPage.locator(this.elements.samescreenYesBtn).click()
      await newPage.waitForTimeout(2000)
  }
  async clickqueryTab(){
    await newPage.locator(this.elements.queryTab).click()
  }
  async enterTransRefNo(AccountNumber: string) {
    await newPage.locator(this.elements.transRefBtn).click()
    await newPage.getByText(AccountNumber).click()
  }
  async closemode(){
    await newPage.locator(this.elements.expandBtn).click()
    await newPage.locator(this.elements.bycashmode).click()
    await newPage.waitForTimeout(10000)
    // try{
    //  await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('500')
    // console.log('Server error')
    // await newPage.locator(this.elements.okButton).click()
    // }catch(error){
    //   console.log('No server error')
    // }
     await newPage.locator(this.elements.submitButton).click()
     console.log("clicked on submit Button")
  }
   async closemode1(){
    await newPage.locator(this.elements.expandBtn).click()
    await newPage.locator(this.elements.byaccountmode).click()
    await newPage.waitForTimeout(10000)
   
     await newPage.locator(this.elements.submitButton).click()
     console.log("clicked on submit Button")
  }
  async submitclick(){
   
     //await newPage.getByRole('button', { name: 'Submit' }).click();
    
     await newPage.getByRole('button', { name: 'Confirm' }).click();
     await newPage.getByRole('button', { name: 'Submit For Approval' }).click();
   console.log('clicked on button1')
   await newPage.waitForTimeout(2000)
    await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Approval')
    console.log('sent for Approval')
    await newPage.locator(this.elements.okButton).click()
   await newPage.getByRole('button', { name: 'No' }).click();
  }
  async submitclick2(){
   
     //await newPage.getByRole('button', { name: 'Submit' }).click();
    
     await newPage.getByRole('button', { name: 'Confirm' }).click();
     await newPage.getByRole('button', { name: 'Submit For Approval' }).click();
   console.log('clicked on button1')
   await newPage.waitForTimeout(2000)
    await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Approval')
    console.log('sent for Approval')
    await newPage.waitForTimeout(5000)
     await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Approval')
    console.log('sent for Approval')
    await newPage.locator(this.elements.okButton).click()
   await newPage.getByRole('button', { name: 'No' }).click();
    
  }

  async enterTransactionAmount(amount: string) {
    await newPage.locator(this.elements.transactionAmount).fill(amount);
    console.log("Entered Transaction Amount:", amount);
  }

  async enterCustomerInterview(interview: string) {
   
    await newPage.locator(this.elements.InformationBtn).click();
     const udfno=await this.base.generateRandomNumber(4)
   // await newPage.locator(this.elements.customerInformation).fill(interview);
   await newPage.locator(this.elements.customerInformation).fill(udfno);
    console.log("Entered Customer Interview:", interview);
  }

  async clickOnSave() {
    await newPage.locator(this.elements.submitButton).click();
    console.log("Clicked on Save");
    
  }

  async limitCross(){
        //await newPage.locator("#_oj133assign_auto",{timeout:5000})
   // await newPage.locator(this.elements.confirmBtn).click()
   await newPage.getByRole('button', { name: 'Confirm' }).click();
   await newPage.getByRole('button', { name: 'Submit For Approval' }).click();
   console.log('clicked on button1')
   await newPage.waitForTimeout(5000)
 
     await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Approval')
    
    await newPage.locator(this.elements.okButton).click()
console.log('sent for Approval')
    //await newPage.locator(this.elements.adviceconf).click()
    try {
      // await newPage.locator("#closeScreenDialog_oj65", { timeout: 5000 });
      // console.log("close dialog detected");

      await newPage.locator(this.elements.NoBtn).click()
      console.log("Clicked on Proceed button");
      await newPage.waitForTimeout(5000)
      console.log("close dialog closed");
    } catch (error) {
      console.log("close dialog not found");

      //await newPage.locator(this.elements.NoBtn).click()
    }
  }
  async successPop() {
  
    await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await newPage.locator(this.elements.okButton).click()
    await newPage.locator(this.elements.adviceconf).click()
    try {
      await newPage.locator("#closeScreenDialog_oj65", { timeout: 5000 });
      console.log("close dialog detected");

      await newPage.locator(this.elements.NoBtn).click()
      console.log("Clicked on No button");
      await newPage.waitForTimeout(5000)
      console.log("close dialog closed");
    } catch (error) {
      console.log("close dialog not found");

      //await newPage.locator(this.elements.NoBtn).click()
    }
  }
  async NewGenDepositexit() {
    await newPage.click("//div[@class='oj-flex-item']//span[@id='user-info-name']");
    //await newPage.click("//div[@id='user-info-menu-logout']//span");
    await newPage.getByText("Log Out").click()
  }
}