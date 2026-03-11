import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";


let newPage,pagePromise;


export default class BranchOperationsPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
     NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
      proceedBtn:'//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
    NextGenUItab: "//a[@id='DBoardNextGenUI']",
    Tellertab: "//span[normalize-space(text())='Teller']",
    ChangeBrCode: "//div[@class='branch-container']//span[@id='branch-name']",
    BranchFilterInput: "//div[@class='oj-text-field-middle'] //input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input']",
    Fetchbtn: "//button[@class='oj-button-button']//span[@id='_oj34-lov-dialog-body-filter-fetch_oj47|text']",
    selectbranchrow: "//td[@id='_oj34-lov-dialog-body-table:50_0']",
    confirmbrcodebtn: "//span[@id='confirmBtn']",
    OpenBrBtch: "//span[normalize-space()='Open Branch Batch']/ancestor::a[1]",
    branchbtchokbtn:"//oj-dialog[.//div[contains(@class,'oj-dialog-content')]//*[normalize-space(.)='Branch batch is already open for the current date']]//button[.//span[contains(@class,'oj-button-text') and normalize-space(.)='OK']]",
    OpenTellerBtch: "//div[@class='oj-flex-item oj-sm-padding-2x-horizontal']//a//span[normalize-space(text())='Open Teller Batch']",
    TellerBatchError: "//div[@class='oj-button-label']//span[@id='okBtn _oj56|text']",
    closeTellerBtch: "//div[@class='oj-flex-item oj-sm-padding-2x-horizontal']//a//span[normalize-space(text())='Close Teller Batch']"
  
  };

 async NextGenFun() {
    await this.base.jsClick("//a[@id='DBoardNextGenUI']");
    console.log("Clicked on NextGen UI Dashboard");
    
       
    try {
        const frameElementHandle = await this.page.waitForSelector(this.Elements.NextGenFrame, { timeout: 40000 });
       const nextgenframe = await frameElementHandle.contentFrame();
        console.log("Switched to NextGen UI Dashboard Frame");
        
        
        pagePromise = this.page.context().waitForEvent('page');
        
        await nextgenframe.getByText("Retail Operations").click();
        console.log("Clicked on Retail Operations");
        
    } catch (error) {
        console.log("Frame not found:", error.message);
        throw error; // Re-throw if you want to stop execution
    }
    
    // Wait for the new page to open
    try {
       newPage = await pagePromise;
     
     } catch {
       newPage = this.page;
     }
     await newPage.bringToFront().catch(() => {});
     await newPage.waitForFunction(() => document.body && document.body.innerText.length > 50);
    const proceed = newPage.locator(this.Elements.proceedBtn).first();
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
                
    await newPage.locator("//div[@class='branch-container']//span[@id='branch-name']").click({ timeout: 50000 });
    console.log("Clicked on branch name in new page");
    await newPage.fill("(//input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input'])[1]","100");
    console.log("Entered Branch code")
     await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
     await newPage.waitForTimeout(1000);
   // await newPage.click("//button[@class='oj-button-button']//span[@id='_oj34-lov-dialog-body-filter-fetch_oj47|text']");
     await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
    console.log("clicked on Fetch Button")
   // await newPage.locator("(//table[@role='application']//tr[@class='oj-table-body-row']//td)[1]").click();
    await newPage.getByText("100").click()
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
    }}

async clickopenbranchbatch() {
await newPage.waitForSelector(this.Elements.Tellertab, {state : 'visible', timeout : 5000});
await newPage.locator(this.Elements.Tellertab).click();
await newPage.waitForTimeout(5000);
await newPage.waitForSelector(this.Elements.OpenBrBtch, { state: 'visible', timeout: 10000 });
const item = newPage.locator(this.Elements.OpenBrBtch).first();
await item.scrollIntoViewIfNeeded();
await item.click();
await newPage.waitForTimeout(2000);
console.log("selected open branch batch");
await newPage.waitForSelector(this.Elements.branchbtchokbtn, {state : 'visible', timeout : 40000});
await newPage.locator(this.Elements.branchbtchokbtn).click();
await newPage.waitForTimeout(2000);
}

async clickopentellerbatch(){
 await newPage.waitForSelector(this.Elements.Tellertab, {state : 'visible', timeout : 5000});
 await newPage.locator(this.Elements.Tellertab).click();
 await newPage.waitForTimeout(20000);
 await newPage.waitForSelector(this.Elements.OpenTellerBtch, {state : 'visible', timeout : 10000});
 await newPage.locator(this.Elements.OpenTellerBtch).click();
 await newPage.waitForTimeout(10000);
if (await newPage.getByRole('button', { name: 'Submit' }).isVisible().catch(() => false)) {

    
    await newPage.getByRole('button', { name: 'Submit' }).click();
    await newPage.getByText('Transaction Completed Successfully').waitFor();
    await newPage.getByRole('button', { name: 'OK' }).click();
    await newPage.waitForTimeout(5000);

} else {

    
    await newPage.locator(this.Elements.TellerBatchError).click();
    await newPage.waitForTimeout(5000);
}
        }

        async clickclosetellerbatch(){
 await newPage.waitForSelector(this.Elements.Tellertab, {state : 'visible', timeout : 15000});
 await newPage.locator(this.Elements.Tellertab).click();
 await newPage.waitForTimeout(20000);
 await newPage.waitForSelector(this.Elements.closeTellerBtch, {state : 'visible', timeout : 15000});
 await newPage.locator(this.Elements.closeTellerBtch).click();
 await newPage.waitForTimeout(10000);
 
  const totalCashInput = newPage.locator('input.oj-inputtext-input').nth(0);

  // Cash Available input (second JET input)
  const cashAvailableInput = newPage.locator('input.oj-inputtext-input').nth(1);

  // Step 1: Select the Cash Available amount
  await cashAvailableInput.dblclick();
  await newPage.keyboard.press('Control+C');

  // Step 2: Select the Total Cash box
  await totalCashInput.dblclick();

  // Step 3: Paste
  await newPage.keyboard.press('Control+V');

 await newPage.waitForTimeout(5000);
if (await newPage.getByRole('button', { name: 'Submit' }).isVisible().catch(() => false)) {

    
    await newPage.getByRole('button', { name: 'Submit' }).click();
    await newPage.getByText('Transaction Completed Successfully').waitFor();
    await newPage.getByRole('button', { name: 'OK' }).click();
    await newPage.waitForTimeout(5000);

} else {

    
    await newPage.locator(this.Elements.TellerBatchError).click();
    await newPage.waitForTimeout(5000);
}
        }

         async NewGenBrOpsexit() {
    await newPage.click("//div[@class='oj-flex-item']//span[@id='user-info-name']");
    //await newPage.click("//div[@id='user-info-menu-logout']//span");
    await newPage.getByText("Log Out").click()
  }
 }