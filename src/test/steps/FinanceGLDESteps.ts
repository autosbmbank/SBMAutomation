// GL Opening(Direct Posting)

 import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

 import { expect, Keyboard } from "@playwright/test";

 import { fixture } from "../../hooks/pageFixture";

 import loginPage from "../../pages/LoginPage";

 import FinanceGLDEPage from "../../pages/FinanceGLDEPage";

 import ReusableMethods from "../../helper/wrapper/reusableMethods";

 import { context, timeout } from "../../hooks/hooks"

  import type { DataTable } from '@cucumber/cucumber';

 const reusableMethods = new ReusableMethods(fixture.page);
 
 let FinanceGLDEPageloc: FinanceGLDEPage;

 //let txnPage: DirectPostingTxnPage;

 setDefaultTimeout(timeout);

//GLDE Creation
When("Click on NewGLDE", async function () {
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.handleJLFrame();
  await finance.clickNewDE();
});

When("Enter the GLDEBatch Number", async function () {
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.enterGLDEBatchNumber();
});

When("Enter the GLDEDescription {string}", async function (desc) {
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.enterGLDEDescription(desc);
});

When("Enter the GLDEDebit {string}", async function (debit) {
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.enterGLDEDebit(debit);
});

When("Enter the GLDECredit {string}", async function (credit) {
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.enterGLDECredit(credit);
});

When("Click on GLDEOk button", async function () {
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.clickGLDEOk();
});

When("Click on Ok on the populated Pop Window", async function () {  
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.clickPopupOk();
});

When("Click on AddRow1 button", async function(){
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.clickGLDEAddRow1();
});
  
When("Select DrCr1 from given drop down list as {string}", async function(DrCr1  : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.SelectDrCr1(DrCr1);
});

When("Enter the Branch Code1 as {string}", async function(brcode1 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterBranchCode1(brcode1);
});

When("Enter the Account Number1", async function(){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterAccNumber1();
});

When("Enter the Currency1 as {string}", async function(Currency1 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterCurrency1(Currency1);
});

When("Enter the Amount1 as {string}", async function(Amount1 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterAmount1(Amount1)
});

When("Enter the TransactionCode1 as {string}", async function(Txncode1 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterTxnCode1(Txncode1)
});

//Adding Row2
When("Click on AddRow2 button", async function(){
  const finance = new FinanceGLDEPage(fixture.page);
  await finance.clickGLDEAddRow2();
});
  
When("Select DrCr2 from given drop down list as {string}", async function(DrCr2  : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.SelectDrCr2(DrCr2);
});

When("Enter the Branch Code2 as {string}", async function(brcode2 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterBranchCode2(brcode2);
});

When("Enter the Account Number2 as {string}", async function(accnum2 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterAccNumber2(accnum2);
});

When("Enter the Currency2 as {string}", async function(Currency2 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterCurrency2(Currency2);
});

When("Enter the Amount2 as {string}", async function(Amount2 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterAmount2(Amount2)
});

When("Enter the TransactionCode2 as {string}", async function(Txncode2 : string){
const finance = new FinanceGLDEPage(fixture.page);
  await finance.EnterTxnCode2(Txncode2)
});


When ("Click on Compute", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickCompute();
});

When("Click on ok to confirm", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickOkafterCompute();
});

When("Click Savetab to save the entries", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickSavetab();
});


When("Click on Ok button to confirm", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickokafterSave();
});

When("Click on BatchClose", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickBatchClose();
});

When("Click Ok to confirm", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickokafterBatchClose();
});

When("Click on Exit1 button", async function(){
const finance = new FinanceGLDEPage(fixture.page);
await finance.ClickExit1();
});

When("Click on SignOff1 button", async function(){
   const GLPage = new FinanceGLDEPage(fixture.page);
   await GLPage.clickSignOffBtn();
});

// When("Confirm with Ok1 button", async function(){
//    const GLPage = new FinanceGLDEPage(fixture.page);
//    await GLPage.handleCMFrame();
//    await GLPage.ConfirmOkBtn();
// });

//Authorize

When("set Authorization Status to Unauthorized for DESJNLON", async function(){
  const GLPage = new FinanceGLDEPage(fixture.page);
  await GLPage.selectAuthorizationStatus1();
 });

//   When("Enter the GL Code for authorization {string}", async function (glCode: string) {
//   const GLPage = new FinanceGLAddCopyPage(fixture.page);
//   await GLPage.handleAMFrame();
//   await GLPage.enterGLCodeauthorize(glCode);
// });



When("Enter the Batch Number for authorization for DESJNLON", async function(){
  const GLPage = new FinanceGLDEPage(fixture.page);
  await GLPage.enterBatchNumberauthorize1();
});

 When("click on search for DESJNLON", async function(){
  const GLPage = new FinanceGLDEPage(fixture.page);
  await GLPage.clickSearchbutton1();
 });

 When("Open the first unauthorized record from results for DESJNLON", async function(){
  const GLPage = new FinanceGLDEPage(fixture.page);
  await GLPage.clickFirstRecord1();

 });

 When("Click on Authorize for DESJNLON", async function(){
const GLPage = new FinanceGLDEPage(fixture.page);
  await GLPage.clickAuthorize1();
 });

 When("Click on Authorize to confirm", async function(){
const GLPage = new FinanceGLDEPage(fixture.page);
  await GLPage.clickAuthorize2();

 });

//  When("Click on Accept for DESJNLON", async function(){
// const GLPage = new FinanceGLDEPage(fixture.page);
//   await GLPage.handleAuthorizeFrame();
//    await GLPage.clickAccept2();
//  });


 When("Click on OkafterAuthorize for DESJNLON", async function(){
const GLPage = new FinanceGLDEPage(fixture.page);
 // await GLPage.handleAuthorizeFrame();
   await GLPage.clickokafterAuthorize2();
 });

 Then("System should authorize the record successfully and record status should be Authorized for DESJNLON", async function(){
      const GLPage = new FinanceGLDEPage(fixture.page);
      await GLPage.verifyAuthorizationStatus1();

 });

 //Report after
 When("User clicks on EnterQuery Tab", async function () {
   const GLPage = new FinanceGLDEPage(fixture.page);
    fixture.logger.info("clicks on EnterQuery Tab");
        await GLPage.clickEnterQueryTab();
});

When("User enters AccountNumber {string}", async function(acno : string){
  const GLPage = new FinanceGLDEPage(fixture.page);     
  await GLPage.EnterAccnumber(acno);
});

When("User enters the same AccountNumber", async function(){
  const GLPage = new FinanceGLDEPage(fixture.page);     
  await GLPage.EntersameAccnumber();
});

When("User clicks on ExecuteQuery Tab", async function () {
   const GLPage = new FinanceGLDEPage(fixture.page); 
          await GLPage.clickExecuteQueryTab();
});

Then('validate query results are not displayed', async function () {
  const GLPage = new FinanceGLDEPage(fixture.page); 
  await GLPage.validateNoRecordsMessage();
});


Then('validate query results are displayed', async function () {
  const GLPage = new FinanceGLDEPage(fixture.page); 
  await GLPage.validateAndScrollToResults();
});


// When("Click on GLDEAdd Row", async function () {
//   const finance = new FinanceGLDEPage(fixture.page);
//   await finance.clickGLDEAddRow();
// });

// assume rowsData is an array taken from Examples in feature file
// for (const row of rowsData){
//   await journalPage.clickAddRow();
//   await journalPage.fillLastRow(row);
// }


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