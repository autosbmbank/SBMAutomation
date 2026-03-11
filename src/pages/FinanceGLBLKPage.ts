// FinanceGLPage.ts
import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
let batchid;
let option1;
//let frame;
export default class FinanceGLBLKPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

    private Elements = {
    NewButton: "//li[@id='New']",
    BatchNumber: "//input[@id='BLK_DEVWS_BATCH_MASTER__BATCH_NO' and @title='Batch Number']",
    Description: "//input[@id='BLK_DEVWS_BATCH_MASTER__DESCRIPTION']",
    Debit: "//input[@id='BLK_DEVWS_BATCH_MASTER__DR_CHK_TOTALI']",
    Credit: "//input[@id='BLK_DEVWS_BATCH_MASTER__CR_CHK_TOTALI']",
    OkButton: "//div[@id='DIVFooter']//input[@id='BTN_OK']",
    PopupOk: "//iframe[contains(@title,'Information Message')]//input[@id='BTN_OK']",
    AddRowBtn: "//button[@id='cmdAddRow_BLK_DETBS_JRNL_TXN_DETAIL']",
    DrCr: "//select[@id='BLK_DETBS_JRNL_TXN_DETAIL__DR_CR']",
    branchCode: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODE']" ,
    account: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NO']",
    accountLOVsearch:"//button[@title='List of Values' and contains(@onclick, 'UI_AC_GL_NO')]",
    accountLOVtext: "//input[@class='TXTstd' and @id='1']",  
    ButtonFetch: "//button[@class='BTNtext' and contains(@onclick, 'getLovResults()') and normalize-space(text())='Fetch']",  
      
}

  //Creation of Journal

async handleJLFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Journal Entry Input")]',
        { timeout: 30000 }
      );
    const frame = await frameElementHandle.contentFrame();
    if (!frame) throw new Error('Journal frame found but contentFrame() returned null');
   return frame;
    } catch (message) {
     console.log("handleJLFrame() failed:", message);
    }
  }
 
 // click New

  async clickGLBLKnew() {
  const frame = await this.handleJLFrame();
  await frame.waitForSelector(this.Elements.NewButton, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.NewButton);
    }

    async handleBOFrame() {
    try {
     const outerFrameHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Journal Entry Input")]',  
        { timeout: 30000 }
      );
      const outerFrame = await outerFrameHandle.contentFrame(); 
      const innerFrameHandle = await outerFrame.waitForSelector(
        '//iframe[contains(@title, "Batch Open")]',
        { timeout: 50000 }
      );
      const innerFrame = await innerFrameHandle.contentFrame();
      return innerFrame;
    } catch (message) {
      console.log("handleBOFrame() failed:", message);
    }
  }

  // batch header fields
  async enterGLBLKBatchNumber(bno : string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.BatchNumber, { state: 'visible', timeout: 30000 });
 // const batchid = await this.base.generateAlphanumericValue(5);
 // await frame.locator(this.Elements.BatchNumber).fill(batchid);
  await frame.locator(this.Elements.BatchNumber).fill(bno);
  return frame;
  }
  
  async enterGLBLKDescription(desc: string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.Description, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.Description).fill(desc);
  return frame;
  }

  async enterGLBLKDebit(debit: string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.Debit, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.Debit).fill(debit);
  return frame;
  }

  async enterGLBLKCredit(credit: string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.Credit, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.Credit).fill(credit);
  return frame;
  }

  async clickGLBLKOk () {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.OkButton, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.OkButton).click();
  await frame.waitForTimeout(20000);
  return frame;
  }

async handleIMFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
      'iframe[title*="Journal Entry Input"]',
      { timeout: 30000 }
    );
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Information Message"], iframe[id*="ifr_AlertWin"]',
      { timeout: 30000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleIMFrame() failed:", err);
    throw err;
  }
}

async clickPopupBLKOk() {
  const frame = await this.handleIMFrame();

  // define multiple selector options, just in case
  const okSelectors = [
    'input#BTN_OK',          // id from your screenshot
    'input.BTNfooter',       // class also seen
    'input[value="Ok"]',
    'input[title="Ok"]',
  ];

  for (const sel of okSelectors) {
    const element = frame.locator(sel);
    if (await element.count() > 0) {
      await element.waitFor({ state: 'visible', timeout: 5000 });
      await element.click({ timeout: 5000 }).catch(async () => {
        await element.click({ force: true });
      });
      console.log(`Clicked OK using selector: ${sel}`);
      return;
    }
  }

  throw new Error("OK button not found inside Information Message frame.");
}

async clickGLBLKAddRow() {
  const frame = await this.handleJLFrame();
 // await f.waitForSelector(this.Elements.AddRowBtn, {state :'visible', timeout: 60000});
  await frame.locator(this.Elements.AddRowBtn).click();
  //await f.waitForTimeout(10000);
}

async selectDrCrDropdown(option: string) {
  const frame = await this.handleJLFrame();
  await frame.waitForSelector(this.Elements.DrCr, { state: 'visible', timeout: 15000 });
  await frame.selectOption(this.Elements.DrCr, { label: option });
}

async enterBLKBranchCode(option: string){
const frame = await this.handleJLFrame();
await frame.waitForSelector(this.Elements.branchCode, { state: 'visible', timeout: 15000 });
await frame.locator(this.Elements.branchCode).fill(option);
}

async enterBLKacno(option: string){
const frame = await this.handleJLFrame();
await frame.waitForSelector(this.Elements.account, { state: 'visible', timeout: 15000 });
await frame.locator(this.Elements.account).fill(option);
option1 = option;
await frame.waitForTimeout(1000);
}

async searchaccount(){
const frame = await this.handleJLFrame();
await frame.waitForSelector(this.Elements.accountLOVsearch, { state: 'visible', timeout: 15000 });
await frame.locator(this.Elements.accountLOVsearch).click();
await frame.waitForTimeout(40000);
}

async handleLOVFrame() {
    try {
     const outerFrameHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Journal Entry Input")]',  
        { timeout: 30000 }
      );
      const outerFrame = await outerFrameHandle.contentFrame(); 
      const innerFrameHandle = await outerFrame.waitForSelector(
        '//iframe[contains(@title, "List of Values Account")]',
        { timeout: 50000 }
      );
      const innerFrame = await innerFrameHandle.contentFrame();
      return innerFrame;
    } catch (message) {
      console.log("handleLOVrame() failed:", message);
    }
  }

async enterLOVaccounttext(option: string){
const frame = await this.handleLOVFrame();
await frame.waitForSelector(this.Elements.accountLOVtext, { state: 'visible', timeout: 45000 });
await frame.locator(this.Elements.accountLOVtext).clear();
await frame.locator(this.Elements.accountLOVtext).fill(option);
}

async clickFetch(){
const frame = await this.handleLOVFrame();
await frame.waitForSelector(this.Elements.ButtonFetch, { state: 'visible', timeout: 15000 });
await frame.locator(this.Elements.ButtonFetch).click();
await frame.waitForTimeout(1000);
}

}
