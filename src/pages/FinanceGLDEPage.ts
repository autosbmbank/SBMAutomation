// FinanceGLPage.ts
import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
let batchid;
let bnvar,acnvar,globalacno;

export default class FinanceGLDEPage {
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
    DrCr1: "//select[@id='BLK_DETBS_JRNL_TXN_DETAIL__DR_CR']",
    BranchCode1:"//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODE']",
    Acnnumber1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NO']",
    Currency1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__CCY']",
    Amount1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__AMOUNTI']",
    TxnCode1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__TXN_CODE']",
    DrCr2:"//select[@id='BLK_DETBS_JRNL_TXN_DETAIL__DR_CRRC1']",
    BranchCode2:"//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODERC1']",
    Acnnumber2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NORC1']",
    Currency2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__CCYRC1']",
    Amount2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__AMOUNTIRC1']",
    TxnCode2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__TXN_CODERC1']",
    ComputeBtn: "//button[@id='BLK_DETBS_BATCH_MASTER__BTN_COMPUTE']",
    oKafterCompute:"//input[@id='BTN_OK']",
    Savetab:"//li[@id='Save']",
    Okaftersave:"//input[@id='BTN_OK']",
    BatchClose:"//button[@id='BLK_DETBS_JRNL_TXN_MASTER__BTN_CLOSE_BATCH']",
    OKafterbatchclose:"//input[@id='BTN_OK']",
    ExitBtn:"//input[@id='BTN_EXIT_IMG']",
    selectBtn:"(//label[@class='LBLmenustd'])[6]",
    OkBtn :"//input[@id='BTN_OK']",
    AuthorizationStatus1:"//select[@id='BLK_DETBS_JRNL_TXN_MASTER__AUTHSTAT']",
                                        
    Search1:"//li[@id='Search']",
    authorizeBatchNumber1: "//input[@id='BLK_DETBS_JRNL_TXN_MASTER__BATCH_NO']",
    authorizefirstrow1 : "//table[@id='TBL_QryRslts']//tr[contains(@class,'TBLoneTR')][1]",
    authorizebutton1:"//div[@id='toolbar' and (contains(@style,'display:none'))]//li[@id='Authorize']",
    authorizebutton2:"//button[@id='BLK_DETB_JRNL_TXN_MASTER__AUTH__BTN_AUTHORIZE']",
                      
    OkBtn1 :"//input[@id='BTN_OK']",
    ExitBtn1 : "//input[@id='BTN_EXIT_IMG']",
   acceptBtn1:"//input[@value='Accept']",
    okafterAccept1:"//input[@value='Accept']",
    authormsg1: "//input[@id='BLK_DETBS_JRNL_TXN_MASTER__AUTHSTAT']",

    EnterQuery: "//li[@id='EnterQuery']",
    AccountNumber: "//input[@id='BLK_QUERY_DETAILS__ACCNO' and contains(@class, 'TXTstd')]",
    
    ExecuteQuery: "//li[@id='ExecuteQuery']",
    Errormsg:"//span[@title='No records for the above selection']",
    Btnokk:"//input[@id='BTN_OK']",
    Cancel:"//input[@id='BTN_EXIT_IMG']",
    ok1:"//input[@id='BTN_OK']",
    ExitBtn2:"//input[@id='BTN_EXIT_IMG']",
    accountLOVsearch1:"//button[@title='List of Values']",
    AccountNumber1:"//input[@id='1']",
    Fetch1:"//label[@for='Fetch']",

}

//Reports
  async clickEnterQueryTab() {
    const frame = await this.handleCATQFrame();
    await frame.waitForSelector(this.Elements.EnterQuery, { state: 'visible', timeout: 15000 });
    await frame.click(this.Elements.EnterQuery);
    }

    async handleCATQFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Customer Account Transaction Query")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleCMFrame() failed:", message);
    }
  }

async EnterAccnumber(accNumber: string) {
  const frame = await this.handleCATQFrame();
  globalacno = accNumber;
  const input = frame.locator("//input[@id='BLK_QUERY_DETAILS__ACCNO' and contains(@class,'TXTstd')]");
  await input.waitFor({ state: 'visible', timeout: 15000 });
  await input.clear;
  await input.fill(accNumber);
}

async EntersameAccnumber() {
  const frame = await this.handleCATQFrame();
  const input = frame.locator("//input[@id='BLK_QUERY_DETAILS__ACCNO' and contains(@class,'TXTstd')]");
  await input.waitFor({ state: 'visible', timeout: 15000 });
  await input.clear;
  await input.fill(globalacno);
}

  async clickExecuteQueryTab() {
  const frame1= await this.handleCATQFrame();
  await frame1.waitForSelector(this.Elements.ExecuteQuery, { state: 'visible', timeout: 15000 });
  await frame1.click(this.Elements.ExecuteQuery);
  await frame1.waitForTimeout(3000); // shorter delay is enough
}


async validateNoRecordsMessage() {
  const outer = await this.handleCATQFrame();
  const alertFrameHandle = await outer.waitForSelector('iframe[title*="Error Message"]', { timeout: 10000 });
  const alertFrame = await alertFrameHandle.contentFrame();
  const txt = await alertFrame.locator("//span[contains(.,'No records for the above selection')]").textContent();
  expect(txt?.trim()).toContain('No records for the above selection');
}

  
async validateAndScrollToResults() {
  const frame= await this.handleCATQFrame();
  const rows = frame.locator("//div[@id='BLK_TRANSACTION_DETAILS_tableContainer']//tr[td]");
  await rows.first().waitFor({ state: 'visible', timeout: 15000 });
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

  async clickNewDE() {
  const frame = await this.handleJLFrame();
  await frame.waitForSelector(this.Elements.NewButton, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.NewButton);
    }

      async handleBOFrame() {
    try {
      // Wait for the outer frame first (Journal Entry Input)
      const outerFrameHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Journal Entry Input")]',  
        { timeout: 30000 }
      );
      const outerFrame = await outerFrameHandle.contentFrame(); 

      // Now find the inner frame (Batch Open) inside the outer frame
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
  async enterGLDEBatchNumber() {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.BatchNumber, { state: 'visible', timeout: 30000 });
  const batchid = await this.base.generateAlphanumericValue(5);
   await frame.locator(this.Elements.BatchNumber).clear;
  await frame.locator(this.Elements.BatchNumber).fill(batchid);
  bnvar = batchid;
  return frame;
  }

  
  async enterGLDEDescription(desc: string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.Description, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.Description).clear;
  await frame.locator(this.Elements.Description).fill(desc);
  return frame;
  }

  async enterGLDEDebit(debit: string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.Debit, { state: 'visible', timeout: 30000 });
   await frame.locator(this.Elements.Debit).clear;
  await frame.locator(this.Elements.Debit).fill(debit);
  return frame;
  }

  async enterGLDECredit(credit: string) {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.Credit, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.Credit).clear;
  await frame.locator(this.Elements.Credit).fill(credit);
  return frame;
  }

  async clickGLDEOk () {
  const frame = await this.handleBOFrame();
  await frame.waitForSelector(this.Elements.OkButton, { state: 'visible', timeout: 30000 });
  await frame.locator(this.Elements.OkButton).click();
  return frame;
  }

  async handleIMFrame() {
    try {
      // Wait for the outer frame first (Journal Entry Input)
      const outerFrameHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Journal Entry Input")]',  
        { timeout: 30000 }
      );
      const outerFrame = await outerFrameHandle.contentFrame(); 

      // Now find the inner frame (Batch Open) inside the outer frame
      const innerFrameHandle = await outerFrame.waitForSelector(
        '//iframe[contains(@title, "Information Message")]',
        { timeout: 50000 }
      );
      const innerFrame = await innerFrameHandle.contentFrame();
      return innerFrame;
    } catch (message) {
      console.log("handleIMFrame() failed:", message);
    }
  }

      // popup OK (common)
  async clickPopupOk() {
    const frame = await this.handleIMFrame();
    await frame.waitForSelector("//input[@id='BTN_OK']", { state: 'visible', timeout: 60000 }); 
    await frame.locator("//input[@id='BTN_OK']").click(); 
    return frame;
  }

async clickGLDEAddRow1() {
  const f = await this.handleJLFrame();
  await f.click('#cmdAddRow_BLK_DETBS_JRNL_TXN_DETAIL');
  await f.waitForTimeout(12000);
  // await f.locator("//table[@id='BLK_DETBS_JRNL_TXN_DETAIL']//tr").last().waitFor({ state: 'attached', timeout: 10000 });
}

async SelectDrCr1(DrCr1 : string){
  const frame = await this.handleJLFrame();
  await frame.waitForSelector(this.Elements.DrCr1, { state: 'visible', timeout: 30000 });
  await frame.selectOption(this.Elements.DrCr1, DrCr1.toLowerCase() === 'debit' ? 'D' : 'C');
  return frame;
  }

  async EnterBranchCode1(BranchCode1 : string){
    const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.BranchCode1, { state: 'visible', timeout: 30000 });
     await frame.locator(this.Elements.BranchCode1).clear;
    await frame.locator(this.Elements.BranchCode1).fill(BranchCode1);
  }

  async EnterAccNumber1(){
    const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Acnnumber1, { state: 'visible', timeout: 30000 });
    await frame.locator(this.Elements.Acnnumber1).clear;
    await frame.locator(this.Elements.Acnnumber1).fill(globalacno);
  }

  async EnterCurrency1(Currency1 : string){
    const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Currency1, { state: 'visible', timeout: 30000 });
    await frame.locator(this.Elements.Currency1).clear;
    await frame.locator(this.Elements.Currency1).fill(Currency1);
  }

  async EnterAmount1(Amt1 : string){
   const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Amount1, { state: 'visible', timeout: 30000 });
    await frame.locator(this.Elements.Amount1).clear;
    await frame.locator(this.Elements.Amount1).fill(Amt1);
    }

  async EnterTxnCode1(Txncode1 : string){
  const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.TxnCode1, { state: 'visible', timeout: 30000 });
     await frame.locator(this.Elements.TxnCode1).clear;
    await frame.locator(this.Elements.TxnCode1).fill(Txncode1);
  }
  //Adding Row2
  async clickGLDEAddRow2() {
  const f = await this.handleJLFrame();
  await f.click('#cmdAddRow_BLK_DETBS_JRNL_TXN_DETAIL');
  await f.waitForTimeout(32000);
  // await f.locator("//table[@id='BLK_DETBS_JRNL_TXN_DETAIL']//tr").last().waitFor({ state: 'attached', timeout: 10000 });
}

async SelectDrCr2(DrCr2 : string){
  const frame = await this.handleJLFrame();
  await frame.waitForSelector(this.Elements.DrCr2, { state: 'visible', timeout: 60000 });
  await frame.selectOption(this.Elements.DrCr2, DrCr2.toLowerCase() === 'credit' ? 'C' : 'D');
  return frame;
  }

  async EnterBranchCode2(BranchCode2 : string){
    const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.BranchCode2, { state: 'visible', timeout: 30000 });
    await frame.locator(this.Elements.BranchCode2).fill(BranchCode2);
  }

  async EnterAccNumber2(AccNum2 : string){
    const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Acnnumber2, { state: 'visible', timeout: 30000 });
    await frame.locator(this.Elements.Acnnumber2).clear;
    await frame.locator(this.Elements.Acnnumber2).fill(AccNum2);
  }

  async EnterCurrency2(Currency2 : string){
    const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Currency2, { state: 'visible', timeout: 30000 });
     await frame.locator(this.Elements.Currency2).clear;
    await frame.locator(this.Elements.Currency2).fill(Currency2);
  }

  async EnterAmount2(Amt2 : string){
   const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Amount2, { state: 'visible', timeout: 30000 });
    await frame.locator(this.Elements.Amount2).clear;
    await frame.locator(this.Elements.Amount2).fill(Amt2);
    }

  async EnterTxnCode2(Txncode2 : string){
  const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.TxnCode2, { state: 'visible', timeout: 30000 });
     await frame.locator(this.Elements.TxnCode2).clear;
    await frame.locator(this.Elements.TxnCode2).fill(Txncode2);
  }

async ClickCompute(){
const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.ComputeBtn, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.ComputeBtn).click(); 
    return frame;
}

async ClickOkafterCompute(){
const frame = await this.handleIMFrame();
    await frame.waitForSelector(this.Elements.oKafterCompute, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.oKafterCompute).click(); 
    return frame;
}

async ClickSavetab(){
const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.Savetab, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.Savetab).click(); 
    return frame;
}

async ClickokafterSave(){
const frame = await this.handleIMFrame();
    await frame.waitForSelector(this.Elements.Okaftersave, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.Okaftersave).click(); 
    return frame;
}

async ClickBatchClose(){
const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.BatchClose, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.BatchClose).click(); 
    return frame;
}

async ClickokafterBatchClose(){
const frame = await this.handleIMFrame();
    await frame.waitForSelector(this.Elements.OKafterbatchclose, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.OKafterbatchclose).click(); 
    return frame;
}

async ClickExit1(){
const frame = await this.handleJLFrame();
    await frame.waitForSelector(this.Elements.ExitBtn, { state: 'visible', timeout: 60000 }); 
    await frame.locator(this.Elements.ExitBtn).click(); 
    return frame;
}

async clickSignOffBtn() {
   await this.page.click(this.Elements.selectBtn)
                 await this.page.getByText('Sign Off').click();
       // await this.page.click(this.Elements.signoffBtn)
         const frameElementHandle1 = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 50000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");
 
  }

   async handleCMFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Confirmation Message")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleCMFrame() failed:", message);
    }
  }

async ConfirmOkBtn() {
  const frame = await this.handleCMFrame();
  await frame.waitForSelector(this.Elements.OkBtn, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.OkBtn);
   }

   //Authorize

    async handleAMFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Chart of Accounts Maintenance")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleJLFrame() failed:", message);
    }
  }


async selectAuthorizationStatus1() {
  const frame = await this.handleJLFrame();   // <-- JL frame (was AM in my earlier message)
  await frame.waitForSelector(this.Elements.AuthorizationStatus1, { state: 'visible', timeout: 15000 });
  await frame.selectOption(this.Elements.AuthorizationStatus1, 'U'); // 'U' = Unauthorized
}

async enterBatchNumberauthorize1() {
  const frame = await this.handleJLFrame();
  await frame.waitForSelector(this.Elements.authorizeBatchNumber1, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.authorizeBatchNumber1).clear;
  await frame.locator(this.Elements.authorizeBatchNumber1).fill(bnvar);
}

async clickSearchbutton1(){
const frame = await this.handleJLFrame();
await frame.waitForSelector(this.Elements.Search1,{state: 'visible', timeout : 15000});
await frame.click(this.Elements.Search1);
}

async clickFirstRecord1(){
const frame = await this.handleJLFrame();
await frame.waitForSelector(this.Elements.authorizefirstrow1,{state: 'visible', timeout : 55000});
await frame.locator(this.Elements.authorizefirstrow1).dblclick();
await frame.waitForTimeout(10000)
}

async clickAuthorize1(){
  const frameLocator = this.page.frameLocator("iframe[title*='Journal Entry Input'][src*='funcid=DEDJNLON']");
  const authorize = frameLocator.locator("//li[@id='Authorize']/a");

  // await authorize.waitFor({ state: 'visible', timeout: 50000 });
  // await authorize.click();
  await frameLocator.locator("//li[@id='Authorize']/a").evaluate(e => (e as HTMLElement).click());

  await this.page.waitForTimeout(3000);
}

 async handleAuthorizeFrame() {
    try {
      // Wait for the outer frame first (Journal Entry Input)
      const outerFrameHandle = await this. page.waitForSelector(
  '//iframe[contains(@title, "Journal Entry Input") and contains(@src, "funcid=DEDJNLON")]',
  { timeout: 30000 }
);

      const outerFrame = await outerFrameHandle.contentFrame(); 

      // Now find the inner frame (Batch Open) inside the outer frame
      const innerFrameHandle = await outerFrame.waitForSelector(
        '//iframe[contains(@title, "Authorize")]',
        { timeout: 50000 }
      );
      const innerFrame = await innerFrameHandle.contentFrame();
      return innerFrame;
    } catch (message) {
      console.log("handleAuthorizeFrame() failed:", message);
    }
  }

async clickAuthorize2(){
const frame = await this.handleAuthorizeFrame();
await frame.waitForSelector(this.Elements.authorizebutton2,{state: 'visible', timeout : 85000});
await frame.locator(this.Elements.authorizebutton2).click();
}


async clickokafterAuthorize2(){

const ok = this.page
  .frameLocator("iframe[title*='Journal Entry Input'][src*='funcid=DEDJNLON']")
  .frameLocator("iframe[title*='Authorize']")
  .frameLocator("iframe[title*='Information Message']")
  .locator("input#BTN_OK, input[title='Ok'], input[value='OK']");

await ok.waitFor({ state: 'visible', timeout: 60000 });

try {
  await ok.click();
} catch {
  const h = await ok.elementHandle();
  if (h) await h.evaluate((e: HTMLElement) => (e as any).click());
  else throw new Error('OK button not found');
}

}

async verifyAuthorizationStatus1() {
  // target the exact frame by title + funcid and the select by id (CSS)
  const msg = this.page
    .frameLocator("iframe[title*='Journal Entry Input'][src*='funcid=DEDJNLON']")
    .locator("select#BLK_DETBS_JRNL_TXN_MASTER__AUTHSTAT");

  // wait for the select to be visible inside that frame
  await msg.waitFor({ state: 'visible', timeout: 60000 });

  // get the visible text of the selected option (not the option value)
  const statusText = (await msg.locator('option:checked').innerText()).trim();

  // assert the visible label (keeps your original expectation)
  expect(statusText).toBe('Authorized');
}
  }

 // async handleACTxnFrame() {
//     try {
//       // Wait for the iframe to appear in the DOM
//       const frameElementHandle = await this.page.waitForSelector(
//         '//iframe[contains(@title, "Customer Account Transaction Query")]',
//         { timeout: 30000 }
//       );
//       // assign to global frame variable (no return)
//       const frame = await frameElementHandle.contentFrame();
//       return frame;
//       //await frame.setDefaultTimeout(30000);
//       } catch (message) {
//       // keep your original silent behaviour (but log so we can debug if needed)
//       console.log("handleACTxnFrame() failed:", message);
//     }
//   }
//     async searchaccount1(){
// const frame = await this.handleCATQFrame();
// await frame.waitForSelector(this.Elements.accountLOVsearch1, { state: 'visible', timeout: 15000 });
// await frame.locator(this.Elements.accountLOVsearch1).click();
// await frame.waitForTimeout(40000);
// }

// async handleLOVFrame1() {
//     try {
//      const outerFrameHandle = await this.page.waitForSelector(
//         '//iframe[contains(@title, "Customer Account Transaction Query")]',  
//         { timeout: 30000 }
//       );
//       const outerFrame = await outerFrameHandle.contentFrame(); 
//       const innerFrameHandle = await outerFrame.waitForSelector(
//         '//iframe[contains(@title, "List of Values Account Number")]',
//         { timeout: 50000 }
//       );
//       const innerFrame = await innerFrameHandle.contentFrame();
//       return innerFrame;
//     } catch (message) {
//       console.log("handleLOVrame() failed:", message);
//     }
//   }

//     async enterAccountNumber1(accNumber: string) {
//     await this.handleLOVFrame1();
//     await frame.waitForSelector(this.Elements.AccountNumber1, { state: 'visible', timeout: 15000 });
//     await frame.locator(this.Elements.AccountNumber1).clear();
//     await frame.locator(this.Elements.AccountNumber1).fill(accNumber);
//    }

// async clickFetch1(){
// const frame = await this.handleLOVFrame1();
// await frame.waitForSelector(this.Elements.Fetch1, { state: 'visible', timeout: 15000 });
// await frame.locator(this.Elements.Fetch1).click();
// await frame.waitForTimeout(1000);
// } 
