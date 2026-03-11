import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let page2Promise;
let targetPage;
let globalacno
let GLCodevar,GLdescvar,option1var,option2var,option3var,option4var,option5var,option6var,parentGLvar;
//let frame: any; // typed to avoid TS1128 due to implicit any/global

export default class WithdrawalsPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
    NextGenUItab: "//a[@id='DBoardNextGenUI']",
    Tellertab: "//span[normalize-space(text())='Teller']",
    ChangeBrCode: "//div[@class='branch-container']//span[@id='branch-name']",
    BranchFilterInput: "//div[@class='oj-text-field-middle'] //input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input']",
    Fetchbtn: "//button[@class='oj-button-button']//span[@id='_oj34-lov-dialog-body-filter-fetch_oj47|text']",
    selectbranchrow: "//td[@id='_oj34-lov-dialog-body-table:50_0']",
    confirmbrcodebtn: "//span[@id='confirmBtn']",
    OpenBrBtch: "//span[normalize-space()='Open Branch Batch']/ancestor::a[1]",
    branchbtchokbtn:"//oj-dialog[.//div[contains(@class,'oj-dialog-content')]//*[normalize-space(.)='Branch batch is already open for the current date']]//button[.//span[contains(@class,'oj-button-text') and normalize-space(.)='OK']]",
     //oj-dialog[.//div[contains(@class,'oj-dialog-content')]             //*[normalize-space(.)='Branch batch is already open for the current date']]           //button[.//span[contains(@class,'oj-button-text')              and normalize-space(.)='OK']]
    OpenTellerBtch: "//div[@class='oj-flex-item oj-sm-padding-2x-horizontal']//a//span[normalize-space(text())='Open Teller Batch']",

    TellerBatchError: "//div[@class='oj-button-label']//span[@id='okBtn _oj56|text']",
    Cashwithdrawal: "//span[normalize-space(text())='Cash Withdrawal']",
    CashDeposit: "//span[normalize-space(text())='Cash Deposit']",
    AccountNumber: "//input[@id='accNo|input']",
    // DAccountNumber: "//input[@id='txnAcc|input']",
    TxnAmt: "//label[normalize-space()='Transaction Amount']   /following::input[contains(@class,'oj-inputtext-input')][1]",
    chargedetails: "//span[normalize-space(.)='Charge Details']/ancestor::*[@role='button' or contains(@class,'oj-collapsible-header')][1]",
    
    NoDataText: "//span[normalize-space()='Charge Details']/ancestor::oj-collapsible//td[normalize-space()='No data to display.']",
  successmsg:"(//div[@class='oj-message-summary oj-message-title'])[1]",
//   selectBtn:"(//label[@class='LBLmenustd'])[6]",
  ElecJrnl: "//span[normalize-space()='Electronic Journal']",
  dropdown:"//a[@aria-label='expand']",
  pendingapproval:"//ul[@role='listbox']//li[6]//div",
  fetchbtn1:"(//button[@class='oj-button-button'])[12]",
  approveBtn:"(//oj-button[@id='approveBtn']//button[@class='oj-button-button'])[1]",
  okButton: "(//span[text()='Ok'])[1]",
  Sentbank:"//ul[@role='listbox']//li[3]//div",
  userNameRep: "//input[@name='j_username']",
  passwordRep: "//input[@name='j_password']",
  successmsgD: "(//div[@class='oj-message-summary oj-message-title'])[1]",
  adviceconf: "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
    NoBtn: "(//span[@id='_oj82|text'])[1]"
  
  };

//Next Gen UI Dashboard

  async handleNextGenUIDashboard() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleAMFrame() failed:", message);
    }
  }

async clickNextGentab(){
 await this.page.waitForSelector(this.Elements.NextGenUItab, {state : 'visible', timeout : 15000});
 await this.page.locator(this.Elements.NextGenUItab).click();
 const page2Promise = this.page.waitForEvent('popup');
 await this.page.waitForTimeout(80000);
  }
//correct code
  async clickRetailOpstab() {
  const frame = await this.handleNextGenUIDashboard();
  await frame.waitForLoadState('domcontentloaded');
  const popupPromise = this.page.waitForEvent('popup');
  const retailOps = frame.getByRole('link', { name: 'Retail Operations' });
  await retailOps.waitFor({ state: 'visible', timeout: 20000 });
  await retailOps.click();
  try {
    targetPage = await popupPromise;
  
  } catch {
    targetPage = this.page;
  }
  await targetPage.bringToFront().catch(() => {});
  await targetPage.waitForFunction(() => document.body && document.body.innerText.length > 50);
  const proceed = targetPage.locator('//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]').first();
  if (await proceed.count()) {
     try {
      await proceed.click({ timeout: 4000 });
    } catch {
      console.log("⚠ normal click blocked → using JS click");
      await proceed.evaluate(el => el.click());
    }
  } else {
    console.log("Proceed not found");
  }
  await targetPage.waitForLoadState('networkidle').catch(() => {});
  await targetPage.waitForTimeout(600);
  
const currentURL = targetPage.url();
await targetPage.goto(currentURL, { waitUntil: 'networkidle' });
await targetPage.waitForTimeout(30000);
 await targetPage.waitForSelector(this.Elements.ChangeBrCode, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.ChangeBrCode).click();
 await targetPage.waitForTimeout(20000);
}

async clickchangebranch(code: string) {
 await targetPage.waitForSelector(this.Elements.BranchFilterInput, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.BranchFilterInput).clear();
 await targetPage.locator(this.Elements.BranchFilterInput).fill(code);
 await targetPage.locator(this.Elements.Fetchbtn).click();
 await targetPage.locator(this.Elements.Fetchbtn).click();
 await targetPage.locator(this.Elements.selectbranchrow).click();
 await targetPage.locator(this.Elements.confirmbrcodebtn).click();
 await targetPage.waitForTimeout(20000);
}



async clickCashWithdrawal(){
 await targetPage.waitForSelector(this.Elements.Tellertab, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.Tellertab).click();
 await targetPage.waitForTimeout(20000);
 await targetPage.waitForSelector(this.Elements.Cashwithdrawal, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.Cashwithdrawal).click();
 await targetPage.waitForTimeout(120000); 
}

async beforechargedetails(){
await targetPage.waitForSelector(this.Elements.chargedetails, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.chargedetails).click();
 await targetPage.waitForTimeout(20000);
}

async afterchargedetails(){
await targetPage.waitForSelector(this.Elements.chargedetails, {state : 'visible', timeout : 15000});
if (!(await targetPage.locator(this.Elements.chargedetails).getAttribute('aria-expanded'))){await targetPage.locator(this.Elements.chargedetails).click();}
//  await targetPage.locator(this.Elements.chargedetails).click();
 await expect(targetPage.locator("text=Cash Withdrawal Fee")).toBeVisible();
 await targetPage.waitForTimeout(20000);
}

async validatesuccessmsg() {
  const timeout = 15000;
  const summaryLocator = targetPage.locator(
    "//div[contains(@class,'oj-message-summary') and normalize-space(.)='Transaction Completed Successfully']"
  );
  await summaryLocator.waitFor({ state: 'visible', timeout });
  await expect(summaryLocator).toBeVisible({ timeout });
  const detailLocator = targetPage.locator(
    "//div[contains(@class,'oj-message-body') and contains(normalize-space(.),'Teller Sequence Number')]"
  );
  await detailLocator.waitFor({ state: 'visible', timeout });
  await expect(detailLocator).toContainText("Teller Sequence Number", { timeout });
  const okButton = targetPage.getByRole('button', { name: /ok/i });
  await expect(okButton).toBeVisible({ timeout });
  await okButton.click();
   await expect(summaryLocator).toBeHidden({ timeout });
  const advicebtn = await targetPage.getByRole('button', { name: /No/i });
  await expect(advicebtn).toBeVisible({timeout});
  await advicebtn.click();
  await targetPage.waitForTimeout(300);
}

async verifyNoDataDisplayed() {
 await expect(targetPage.locator(this.Elements.NoDataText)).toBeVisible();
}

async enterACNum(acno){
    globalacno = acno
 await targetPage.waitForSelector(this.Elements.AccountNumber, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.AccountNumber).clear();
 await targetPage.locator(this.Elements.AccountNumber).fill(acno);
 await targetPage.waitForTimeout(20000);
}

async enterTxnAmt(txnamt){
 await targetPage.waitForSelector(this.Elements.TxnAmt, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.TxnAmt).clear();
 await targetPage.locator(this.Elements.TxnAmt).fill(txnamt);
  await targetPage.locator(this.Elements.TxnAmt).press("Enter");
 await targetPage.waitForTimeout(10000);
 await expect(targetPage.locator(this.Elements.NoDataText)).not.toBeVisible();
 await targetPage.waitForTimeout(20000);
}

 //Adding UDF AND ELECTRONIC-JOURNAL
async enterCustinfo(custinfo){
await targetPage.locator("//span[normalize-space()='Additional Field Information']").click();
const udf = targetPage.locator("input[name='UDF_Customer']:visible").first();
await udf.click({ force: true });
await udf.fill('');             
await udf.type(custinfo);    
}

async txnsave(){
  await targetPage.getByRole('button', { name: 'Submit' }).click();
  await targetPage.waitForTimeout(2000);
  await targetPage.getByRole('button', { name: 'Confirm' }).click();
  await targetPage.waitForTimeout(2000);
  await targetPage.locator('[id="ui-id-74\\|input"]').fill('rem2');
  await targetPage.waitForTimeout(2000);
  await targetPage.getByRole('button', { name: 'Submit For Approval' }).click();
  await targetPage.waitForTimeout(2000);
}

async normaltxnsave(){
  await targetPage.getByRole('button', { name: 'Submit' }).click();
  await targetPage.waitForTimeout(10000);
}

async validatemsg(){
  const successMsg = targetPage.locator("//div[contains(text(),'Transaction Submitted For Approval Successfully')]", {timeout:3000});
  await expect(successMsg).toBeVisible();
  await targetPage.waitForTimeout(2000);
  await targetPage.getByRole('button', { name: 'Ok' }).click();
  await targetPage.getByRole('button', { name: 'No' }).click();
  await targetPage.waitForTimeout(30000);
}

async validatetillmsg() {
  await targetPage.waitForSelector('li.message-content', { state: 'attached', timeout: 5000 });

  const message = targetPage
      .locator('li.message-content')
      .filter({ hasText: 'Till minimum balance breached' })
      .first();   // add .first() to avoid strict errors

  const errorText = await message.innerText();
  expect(errorText).toContain('Till minimum balance breached');

  await targetPage.getByRole('button', { name: /^ok$/i }).click();
  await targetPage.waitForTimeout(20000);
}

async applogout(){
  await targetPage.click("//div[@class='oj-flex-item']//span[@id='user-info-name']");
  await targetPage.getByText("Log Out").click()
  await targetPage.waitForTimeout(3000);
}

async clickElectronicJournal(){
 await targetPage.waitForSelector(this.Elements.Tellertab, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.Tellertab).click();
 await targetPage.waitForTimeout(20000);
 await targetPage.waitForSelector(this.Elements.ElecJrnl, {state : 'visible', timeout : 15000});
 await targetPage.locator(this.Elements.ElecJrnl).click();
 await targetPage.waitForTimeout(30000); 
}
  
async clickPendingApproval(){
 await targetPage.locator(this.Elements.dropdown).click();
 await targetPage.waitForTimeout(2000)
 await targetPage.locator(this.Elements.pendingapproval).click()
//  await targetPage.locator("(//button[@class='oj-button-button'])[12]").click();
 await targetPage.locator(this.Elements.fetchbtn1).click();
 await targetPage.waitForTimeout(3000);
}

 async clickSentBack(){
    await targetPage.locator(this.Elements.dropdown).click();
    console.log('clicked on dropdown')
    await targetPage.waitForTimeout(2000)
    await targetPage.locator(this.Elements.Sentbank).click()
    console.log('clicked on Sent Back')
     await targetPage.locator(this.Elements.fetchbtn1).click();
 await targetPage.waitForTimeout(3000);
//  await targetPage.locator('oj-button span.oj-button-text:has-text("Submit Transaction")').click();
  await targetPage.locator("//oj-button[@id='resubmitBtn']//button[@class='oj-button-button']").first().click();
    await targetPage.getByRole('button', { name: 'Confirm' }).click();
    await expect(await targetPage.locator(this.Elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await targetPage.locator(this.Elements.okButton).click()
  }

async approvetxn(){
  await targetPage.locator(this.Elements.approveBtn).click()
   await targetPage.waitForTimeout(3000);
  await targetPage.getByRole('button', { name: 'Ok' }).click();
   await targetPage.waitForTimeout(3000);
     const successMsg = targetPage.locator("//div[contains(text(),'Transaction Approved Successfully')]", {timeout:8000});
  await expect(successMsg).toBeVisible();
  await targetPage.waitForTimeout(50000);
  // await expect(await targetPage.locator(this.Elements.successmsg).textContent()).toContain('Transaction Approved Successfully')
   await targetPage.waitForTimeout(3000);
  console.log('Successfully Saved')
  await targetPage.locator(this.Elements.okButton).click()
   await targetPage.waitForTimeout(3000);
}
   

async Errormessage() {
  // validate the message (pick the specific message item)
  await expect(
    targetPage.locator("li.message-content").filter({ hasText: "Available Amount for Account" }).first()
  ).toContainText("Available Amount for Account");

  // scope to the dialog that contains that message, then click its Ok button
  const dialog = targetPage.locator(
    "oj-dialog:has(li.message-content:has-text('Available Amount for Account'))"
  ).first();

  await dialog.locator("button:has-text('Ok')").first().click();
}

}
 