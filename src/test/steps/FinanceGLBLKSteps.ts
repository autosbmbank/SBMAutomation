

 import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

 import { expect, Keyboard } from "@playwright/test";

 import { fixture } from "../../hooks/pageFixture";

 import loginPage from "../../pages/LoginPage";

 import FinanceGLBLKPage from "../../pages/FinanceGLBLKPage";

 import ReusableMethods from "../../helper/wrapper/reusableMethods";

 import { context, timeout } from "../../hooks/hooks"

 import type { DataTable } from '@cucumber/cucumber';

 const reusableMethods = new ReusableMethods(fixture.page);

 
 let FinanceGLBLKPageloc: FinanceGLBLKPage;

 //let txnPage: DirectPostingTxnPage;

 setDefaultTimeout(timeout);

//Blocking
When("Click on BLKNew", async function () {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.handleJLFrame();
  await finance.clickGLBLKnew();
});

When("Enter the BLKBatch Number {string}", async function (bno : string) {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.enterGLBLKBatchNumber(bno);
});

When("Enter the BLKDescription {string}", async function (desc : string) {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.enterGLBLKDescription(desc);
});

When("Enter the BLKDebit {string}", async function (debit : string) {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.enterGLBLKDebit(debit);
});

When("Enter the BLKCredit {string}", async function (credit : string) {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.enterGLBLKCredit(credit);
});

When("Click on BLKOk", async function () {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.clickGLBLKOk();
});

When("Click on Ok on the popup Window for BLK", async function () {  
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.clickPopupBLKOk();
});

When("Click on BLKAdd Row", async function () {
  const finance = await new FinanceGLBLKPage(fixture.page);
  await finance.clickGLBLKAddRow();
});

When("Select DrCr from given drop down list {string}", async function(drcr : string){
     const finance = await new FinanceGLBLKPage(fixture.page);
    await finance.selectDrCrDropdown(drcr);
});

When("Enter the BLKBranch Code {string}", async function(bcode : string){
    const finance = await new FinanceGLBLKPage(fixture.page);
    await finance.enterBLKBranchCode(bcode);
});

When("Enter the BLKAccount Number {string}", async function(acno : string){
    const finance = await new FinanceGLBLKPage(fixture.page);
    await finance.enterBLKacno(acno);
});

When("Click on LOVSearch button", async function(){
    const finance = await new FinanceGLBLKPage(fixture.page);
    await finance.searchaccount();
});

When("Enter the BLKAccount Number in the Account field {string}", async function(option  : string){
const finance = await new FinanceGLBLKPage(fixture.page);
    await finance.enterLOVaccounttext(option);

});

Then("System should not display the provided GL in LOV", async function(){
  const finance = await new FinanceGLBLKPage(fixture.page);
    await finance.clickFetch();  
    
});
// When("Select Dr/Cr from given drop down list {string}", async function (drcr) {
//   FinanceGLPageloc = new FinanceGLPage(fixture.page);
//   fixture.logger.info("Select Dr/Cr from dropdown");

//   // If the current data row is Debit, pick first row; if Credit, pick second
//   if (drcr.toLowerCase() === "debit") {
//     await FinanceGLPageloc.selectDrCr(1, drcr);
//   } else {
//     await FinanceGLPageloc.selectDrCr(2, drcr);
//   }
// });


// When("Enter the Branch Code {string}", async function (branchCode) {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.enterRowBranchCode(1, branchCode);
// });

// When("Enter the Account Number {string}", async function (accNum) {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.enterRowAccountNumber(1, accNum);
// });

// When("Enter the Currency {string}", async function (currency) {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.enterRowCurrency(1, currency);
// });

// When("Enter the Amount {string}", async function (amount) {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.enterRowAmount(1, amount);
// });

// When("Enter the Transaction Code {string}", async function (txnCode) {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.enterRowTxnCode(1, txnCode);
// });

// When("Click on Save and Click on Ok", async function () {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.clickSaveAndOk();
// });

// Then("Click on Batch Close", async function () {
//   const finance = new FinanceGLPage(fixture.page);
//   await finance.clickBatchClose();
// });

//GLDE Blocking


// Given("User navigates to the application", async function () {
//   txnPage = new DirectPostingTxnPage(appFixture.page);
//   await txnPage.openAppDirect();
// });

// When("user enters the username and password", async function () {
//   await txnPage.enterLoginCredsDirect();
// });

// When("click on signin button", async function () {
//   await txnPage.tapSignInDirect();
// });

// When("enter the Branch number as {string}", async function (branch: string) {
//   await txnPage.setBranchDirect(branch);
// });

// When("enters the function name as {string} and click on search button", async function (funcName: string) {
//   await txnPage.searchAndOpenFunctionDirect(funcName);
// });

// When("Click on New", async function () {
//   await txnPage.startNewTransactionDirect();
// });

// When("Enter the Batch Number {string}", async function (batchNo: string) {
//   await txnPage.fillBatchNumberDirect(batchNo);
// });

// When("Enter the Description {string}", async function (desc: string) {
//   await txnPage.fillDescriptionDirect(desc);
// });

// When("Enter the Debit {string}", async function (debit: string) {
//   await txnPage.fillDebitDirect(debit);
// });

// When("Enter the Credit {string}", async function (credit: string) {
//   await txnPage.fillCreditDirect(credit);
// });

// When("Click on Ok", async function () {
//   await txnPage.clickOkDirect();
// });

// When("System will populate Pop Window. Click on Ok", async function () {
//   await txnPage.handlePopupOkDirect();
// });

// When("Click on Add Row", async function () {
//   await txnPage.addNewRowDirect();
// });

// When("Select Dr/Cr from given drop down list {string}", async function (drcr: string) {
//   await txnPage.chooseDrCrDirect(drcr);
// });

// When("Enter the Branch Code {string}", async function (branchCode: string) {
//   await txnPage.enterRowBranchCodeDirect(branchCode);
// });

// When("Enter the Account Number {string}", async function (acctNum: string) {
//   await txnPage.enterRowAccountDirect(acctNum);
// });

// Then("System should not display the provided GL in LOV as it is in direct posting GL", async function () {
//   const isPresent = await txnPage.isGLPresentInLovDirect();
//   expect(isPresent).toBeFalsy();
// });

 