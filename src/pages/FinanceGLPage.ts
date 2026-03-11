// FinanceGLPage.ts
import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let frame: any; // typed to avoid TS1128 due to implicit any/global

export default class FinanceGLPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
    // EnterQuery: "//li[@id='EnterQuery']",
    // AccountNumber: "//input[@id='BLK_QUERY_DETAILS__ACCNO' and contains(@class, 'TXTstd')]",
    // ExecuteQuery: "//li[@id='ExecuteQuery']",
    // Errormsg:"//span[@title='No records for the above selection']",
    // Btnokk:"//input[@id='BTN_OK']",
    // Cancel:"//input[@id='BTN_EXIT_IMG']",
    // ok1:"//input[@id='BTN_OK']",
    // ExitBtn:"//input[@id='BTN_EXIT_IMG']",
    // accountLOVsearch1:"//button[@title='List of Values']",
    // AccountNumber1:"//input[@id='1']",
    // Fetch1:"//label[@for='Fetch']",

    //new scenario elements
    // NewButton: "//li[@id='New']",
    // BatchNumber: "//input[@id='BLK_DEVWS_BATCH_MASTER__BATCH_NO']",
    // Description: "//input[@id='BLK_DEVWS_BATCH_MASTER__DESCRIPTION']",
    // Debit: "//input[@id='BLK_DEVWS_BATCH_MASTER__DR_CHK_TOTALI']",
    // Credit: "//input[@id='BLK_DEVWS_BATCH_MASTER__CR_CHK_TOTALI']",
    // OkButton: "//div[@id='DIVFooter']//input[@id='BTN_OK']",
    // PopupOk: "//iframe[contains(@title,'Information Message')]//input[@id='BTN_OK']",
    // AddRow: "//button[@id='cmdAddRow_BLK_DETBS_JRNL_TXN_DETAIL']",

//     // rows inside detail table; use row index (1-based)
//     //DrCrSelectRow: (row = 1) => `//table[@id='details']//tr[${row}]//select[contains(@id,'drcr')]`,
//     DrCrSelectRow: function (row) {
//   return "//div[@id='BLK_DETBS_JRNL_TXN_DETAIL_tableContainer']//table[@id='BLK_DETBS_JRNL_TXN_DETAIL']//tr[" + row + "]//select[contains(@id,'DR_CR')]";
// },

//     RowBranchCode: (row = 1) => `//table[@id='details']//tr[${row}]//input[contains(@id,'branch')]`,
//     RowAccountNumber: (row = 1) => `//table[@id='details']//tr[${row}]//input[contains(@id,'account')]`,
//     RowCurrency: (row = 1) => `//table[@id='details']//tr[${row}]//input[contains(@id,'currency')]`,
//     RowAmount: (row = 1) => `//table[@id='details']//tr[${row}]//input[contains(@id,'amount')]`,
//     RowTxnCode: (row = 1) => `//table[@id='details']//tr[${row}]//input[contains(@id,'txncode')]`,

//     SaveButton: "//button[@id='btnSave' or text()='Save']",
//     BatchClose: "//button[@id='btnBatchClose' or text()='Batch Close']",
  };

  // Wait for the iframe and assign to global `frame` (NO return)
//   async handleACTxnFrame() {
//     try {
//       // Wait for the iframe to appear in the DOM
//       const frameElementHandle = await this.page.waitForSelector(
//         '//iframe[contains(@title, "Customer Account Transaction Query")]',
//         { timeout: 30000 }
//       );
//       // assign to global frame variable (no return)
//       frame = await frameElementHandle.contentFrame();
//       //await frame.setDefaultTimeout(30000);
//       } catch (message) {
//       // keep your original silent behaviour (but log so we can debug if needed)
//       console.log("handleACTxnFrame() failed:", message);
//     }
//   }

//   async clickEnterQueryTab() {
//     await this.handleACTxnFrame();
//     await frame.waitForSelector(this.Elements.EnterQuery, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.EnterQuery);
//     }

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

//   async clickExecuteQueryTab() {
//     await this.handleACTxnFrame();
//     await frame.waitForSelector(this.Elements.ExecuteQuery, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.ExecuteQuery);
//     await frame.waitForTimeout(10000);
//   }

  // add inside FinanceGLPage class
// async validateAndScrollToResults() {
//   await this.handleACTxnFrame();
//   const rows = frame.locator("//div[@id='BLK_TRANSACTION_DETAILS_tableContainer']//tr[td]");
//   await rows.first().waitFor({ state: 'visible', timeout: 15000 });
// }

// async handleEMFrame() {
//   try {
//         const outerFrameHandle = await this.page.waitForSelector(
//       'iframe[title*="Customer Account Transaction Query"]',
//       { timeout: 30000 }
//     );
//     const outerFrame = await outerFrameHandle.contentFrame();
//     const innerFrameHandle = await outerFrame.waitForSelector(
//       'iframe[title*="Error Message"]',
//       { timeout: 50000 }
//     );
//     const innerFrame = await innerFrameHandle.contentFrame();
//     return innerFrame;
//   } catch (err) {
//     console.log("handleEMFrame() failed:", err);
//     throw err;
//   }
// }





// // Validating Error
// async ValidateErrormsg(errmsg) {
//   const frame = await this.handleEMFrame();
//   if (!frame) throw new Error('Error frame not available');

//   // small wait so DOM inside iframe stabilizes
//   await frame.waitForTimeout(500); // small wait; avoid huge sleeps

//   // Use locator().textContent() because the error is a span (not an <input>)
//   const locator = frame.locator(this.Elements.Errormsg);
//   await locator.waitFor({ state: 'visible', timeout: 10000 });

//   const statusRaw = await locator.textContent();
//   const status = (statusRaw || '').trim();

//   expect(status).toBe(errmsg);
// }


// async Okaftererrorms(){

//   const frame = await this.handleEMFrame();
//   frame.waitForTimeout(10000);
//   await frame.waitForSelector(this.Elements.Btnokk, {state: 'visible', timeout: 15000 });
//   await frame.click(this.Elements.Btnokk);
// }

// // async ConfirmOkBtn() {
// //   const frame = await this.handleCMFrame();
// //   await frame.waitForSelector(this.Elements.OkBtn, { state: 'visible', timeout: 15000 });
// //   await frame.click(this.Elements.OkBtn);
// //    }

// async handleCATQFrame() {
//     try {
//       // Wait for the iframe to appear in the DOM
//       const frameElementHandle = await this.page.waitForSelector(
//         '//iframe[contains(@title, "Customer Account Transaction Query")]',
//         { timeout: 45000 }
//       );
//     const frame = await frameElementHandle.contentFrame();
//    return frame;
//     } catch (message) {
//      console.log("handleCMFrame() failed:", message);
//     }
//   }

//   async ClickCancel(){

//   const frame = await this.handleCATQFrame();
//   frame.waitForTimeout(10000);
//   frame.click(this.Elements.Cancel);
// }

// async handleCMsgFrame() {
//   try {
//         const outerFrameHandle = await this.page.waitForSelector(
//       'iframe[title*="Customer Account Transaction Query"]',
//       { timeout: 30000 }
//     );
//     const outerFrame = await outerFrameHandle.contentFrame();
//     const innerFrameHandle = await outerFrame.waitForSelector(
//       'iframe[title*="Confirmation Message"]',
//       { timeout: 50000 }
//     );
//     const innerFrame = await innerFrameHandle.contentFrame();
//     return innerFrame;
//   } catch (err) {
//     console.log("handleEMFrame() failed:", err);
//     throw err;
//   }
// }

// async okafterCancel(){
//   const frame = await this.handleCMsgFrame();
//   frame.waitForTimeout(10000);
//   frame.click(this.Elements.ok1);

// }

// async Exitt(){
// const frame = await this.handleCATQFrame();
//   frame.waitForTimeout(10000);
//   frame.click(this.Elements.ExitBtn);

// }


//New Scenario
// async handleJLFrame() {
//     try {
//       // Wait for the iframe to appear in the DOM
//       const frameElementHandle = await this.page.waitForSelector(
//         '//iframe[contains(@title, "Journal Entry Input")]',
//         { timeout: 30000 }
//       );
//      frame = await frameElementHandle.contentFrame();
   
//     } catch (message) {
//      console.log("handleJLFrame() failed:", message);
//     }
//   }

//  // click New

//   async clickNew() {
//     await this.handleJLFrame();
//     await this.page.waitForSelector(this.Elements.NewButton, { state: 'visible', timeout: 15000 });
//     await this.base.waitAndClick(this.Elements.NewButton);
//   }

//   // batch header fields
//   async enterBatchNumber(batchNo: string) {
//     await this.handleJLFrame();
//     await this.page.waitForSelector(this.Elements.BatchNumber, { state: 'visible', timeout: 10000 });
//     await this.base.enterValue(this.Elements.BatchNumber, batchNo);
//   }

//   async enterDescription(desc: string) {
//      await this.handleJLFrame();
//     await this.page.waitForSelector(this.Elements.Description, { state: 'visible', timeout: 10000 });
//     await this.base.enterValue(this.Elements.Description, desc);
//   }

//   async enterDebit(debit: string) {
//     await this.handleJLFrame();
//     await this.page.waitForSelector(this.Elements.Debit, { state: 'visible', timeout: 10000 });
//     await this.base.enterValue(this.Elements.Debit, debit);
//   }

//   async enterCredit(credit: string) {
//     await this.handleJLFrame();
//     await this.page.waitForSelector(this.Elements.Credit, { state: 'visible', timeout: 10000 });
//     await this.base.enterValue(this.Elements.Credit, credit);
//   }

//   async clickOk() {
//     await this.page.waitForSelector(this.Elements.OkButton, { state: 'visible', timeout: 10000 });
//     await this.base.waitAndClick(this.Elements.OkButton);
//   }

//   // popup OK (common)
//   async clickPopupOk() {
//     await this.page.waitForSelector(this.Elements.PopupOk, { state: 'visible', timeout: 15000 });
//     await this.base.waitAndClick(this.Elements.PopupOk);
//   }

//   // add a new detail row (press +)
//   async clickAddRow() {
//     await this.page.waitForSelector(this.Elements.AddRow, { state: 'visible', timeout: 10000 });
//     await this.base.waitAndClick(this.Elements.AddRow);
//     // small wait for row to render
//     await this.page.waitForTimeout(500);
//   }

//    async selectDrCr(row, choice) {
//   await this.handleACTxnFrame();
//   const selXPath = this.Elements.DrCrSelectRow(row);

//   await frame.waitForSelector(selXPath, { state: 'visible', timeout: 8000 });

//   let value;
//   if (choice.toLowerCase() === 'debit') {
//     value = 'D';
//   } else if (choice.toLowerCase() === 'credit') {
//     value = 'C';
//   } else {
//     throw new Error("Invalid option: use 'Debit' or 'Credit'");
//   }

//   await frame.selectOption(selXPath, { value: value });
// }



//   // enter branch/account/currency/amount/txncode in a row
//   async enterRowBranchCode(row = 1, code: string) {
//     const sel = this.Elements.RowBranchCode(row);
//     await this.page.waitForSelector(sel, { state: 'visible', timeout: 8000 });
//     await this.base.enterValue(sel, code);
//   }

//   async enterRowAccountNumber(row = 1, acc: string) {
//     const sel = this.Elements.RowAccountNumber(row);
//     await this.page.waitForSelector(sel, { state: 'visible', timeout: 8000 });
//     await this.base.enterValue(sel, acc);
//   }

//   async enterRowCurrency(row = 1, cur: string) {
//     const sel = this.Elements.RowCurrency(row);
//     await this.page.waitForSelector(sel, { state: 'visible', timeout: 8000 });
//     await this.base.enterValue(sel, cur);
//   }

//   async enterRowAmount(row = 1, amt: string) {
//     const sel = this.Elements.RowAmount(row);
//     await this.page.waitForSelector(sel, { state: 'visible', timeout: 8000 });
//     await this.base.enterValue(sel, amt);
//   }

//   async enterRowTxnCode(row = 1, code: string) {
//     const sel = this.Elements.RowTxnCode(row);
//     await this.page.waitForSelector(sel, { state: 'visible', timeout: 8000 });
//     await this.base.enterValue(sel, code);
//   }

//   // save and ok flows
//   async clickSaveAndOk() {
//     await this.page.waitForSelector(this.Elements.SaveButton, { state: 'visible', timeout: 15000 });
//     await this.base.waitAndClick(this.Elements.SaveButton);
//     // wait for popup then click ok
//     await this.page.waitForTimeout(500);
//     await this.clickPopupOk().catch(()=>{});
//   }

//   async clickBatchClose() {
//     await this.page.waitForSelector(this.Elements.BatchClose, { state: 'visible', timeout: 15000 });
//     await this.base.waitAndClick(this.Elements.BatchClose);
//   }

//   // convenience: fill one detail row with provided data
//   async fillDetailRow(row = 1, drcr = "Debit", branch = "100", account = "", currency = "LSL", amount = "0", txn = "ANC") {
//     await this.selectDrCr(row, drcr);
//     await this.enterRowBranchCode(row, branch);
//     await this.enterRowAccountNumber(row, account);
//     await this.enterRowCurrency(row, currency);
//     await this.enterRowAmount(row, amount);
//     await this.enterRowTxnCode(row, txn);
//   }

} // end class
