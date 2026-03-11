import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import  VoucherEntryProcessingPage  from "../../pages/VoucherEntryProcessingPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"



const reusableMethods = new ReusableMethods(fixture.page);
let ProcessingPageloc: VoucherEntryProcessingPage ;

//let loginPageloc: loginPage;  
setDefaultTimeout(timeout);
When("user Click on New", async function () {
  ProcessingPageloc = new VoucherEntryProcessingPage(fixture.page);
  fixture.logger.info("Clicking on New");
  await ProcessingPageloc.handleJournalFrame();
  await ProcessingPageloc.clickNewButton();
});

When("user Enter the Batch Number {string}", async function (batchNumber: string) {
     ProcessingPageloc = new VoucherEntryProcessingPage(fixture.page);
    fixture.logger.info("Entering Batch Number");
  await ProcessingPageloc.handleBatchFrame();
  await ProcessingPageloc.enterBatchNumber(batchNumber);
});

When("user Enter the Description {string}", async function (desc: string) {
  fixture.logger.info(`Entering Description: ${desc}`);
  await ProcessingPageloc.enterDescription(desc);
});

When("user Enter the Debit {string}", async function (debit: string) {
  fixture.logger.info(`Entering Debit: ${debit}`);
  await ProcessingPageloc.enterDebit(debit);
});

When("user Enter the Credit {string}", async function (credit: string) {
  fixture.logger.info(`Entering Credit: ${credit}`);
  await ProcessingPageloc.enterCredit(credit);
});

When("user Click on Ok", async function () {
  fixture.logger.info("Clicking Ok");
  await ProcessingPageloc.clickOk();
});

When("System will populate Pop Window. Click on Ok", async function () {
  fixture.logger.info("Handling Pop-up window");
  await ProcessingPageloc.handleInformationMessage();
});

When("user Click on Add Row", async function () {
  fixture.logger.info("Clicking Add Row (+)");
  await ProcessingPageloc.clickAddRow();
});

When("user Select Debit from given drop down list", async function () {
  fixture.logger.info("Selecting Debit");
  await ProcessingPageloc.selectDrCrOption("D");
});



When("user Enter the Branch Code {string}", async function (code: string) {
  fixture.logger.info(`Entering Branch Code: ${code}`);
  await ProcessingPageloc.enterBranchCode(code);
});

When("user Enter the Account Number {string}", async function (account: string) {
  fixture.logger.info(`Entering Account Number: ${account}`);
  await ProcessingPageloc.enterAccountNumber(account);
});

When("user Enter the Currency {string}", async function (curr: string) {
  fixture.logger.info(`Entering Currency: ${curr}`);
  await ProcessingPageloc.enterCurrency(curr);
});

When("user Enter the Amount {string}", async function (amount: string) {
  fixture.logger.info(`Entering Amount: ${amount}`);
  await ProcessingPageloc.enterAmount(amount);
});

When("user Enter the Trransaction Code {string}", async function (code: string) {
  fixture.logger.info(`Entering Transaction Code: ${code}`);
  await ProcessingPageloc.enterTransactionCode(code);
});

When("user Click on Add Row (+)", async function () {
  fixture.logger.info("Clicking Add Row (+)");
  await ProcessingPageloc.clickAddRow();
});


When("user Select Credit from given drop down list", async function () {
  fixture.logger.info("Selecting Credit");
  await ProcessingPageloc.selectDrCrOption1("C");
});

When("user Enter the CrBranch Code {string}", async function (code: string) {
  fixture.logger.info(`Entering Branch Code: ${code}`);
  await ProcessingPageloc.enterBranchCode1(code);
});

When("user Enter the CrAccount Number {string}", async function (Craccount: string) {
  fixture.logger.info(`Entering Account Number: ${Craccount}`);
  await ProcessingPageloc.enterAccountNumber1(Craccount);
});

When("user Enter the CrCurrency {string}", async function (curr: string) {
  fixture.logger.info(`Entering Currency: ${curr}`);
  await ProcessingPageloc.enterCurrency1(curr);
});

When("user Enter the CrAmount {string}", async function (amount: string) {
  fixture.logger.info(`Entering Amount: ${amount}`);
  await ProcessingPageloc.enterAmount1(amount);
});

When("user Enter the CrTrransaction Code {string}", async function (code: string) {
  fixture.logger.info(`Entering Transaction Code: ${code}`);
  await ProcessingPageloc.enterTransactionCode1(code);
});


When("user Click on Compute", async function () {
  fixture.logger.info("Clicking Compute");
  await ProcessingPageloc.clickCompute();
});

When("user System will populate Pop Window. Click on Ok", async function () {
  fixture.logger.info("Handling Compute Pop-up");
  await ProcessingPageloc.handleInformationMessage();
});

When("user Click on Save and Click on Ok", async function () {
  fixture.logger.info("Clicking Save and verifying success");
  await ProcessingPageloc.clickSaveButton();
  await ProcessingPageloc.verifySuccessMessage();
});

When("user Click on Batch Close", async function () {
  fixture.logger.info("Clicking Batch Close");
  await ProcessingPageloc.clickBatchClose();
  //await ProcessingPageloc.verifySuccessMessage();
})

When("user click on exit button", async function () {
   ProcessingPageloc = new VoucherEntryProcessingPage(fixture.page);
  fixture.logger.info("Handling Journal Frame");
  await ProcessingPageloc.handleJournalFrame();
  fixture.logger.info("Clicking on Exit button");
  await ProcessingPageloc.clickOnExitButton();
  
})



When("select {string} from the drop down list", async function (status: string) {
   ProcessingPageloc = new VoucherEntryProcessingPage(fixture.page);
  fixture.logger.info("Handling Journal Frame");
  await ProcessingPageloc.handleJournalFrame();

  fixture.logger.info(`Selecting ${status} from drop down`);
  await ProcessingPageloc.selectAuthorizationStatus(status);
});
When("user enter Batch number", async function () {
   await ProcessingPageloc.handleJournalFrame();
  fixture.logger.info(`Entering Branch Number: `);
  await ProcessingPageloc.enterBatchnumber();
})

When("click on Search Button", async function () {
  fixture.logger.info("Clicking on Search Button");
  await ProcessingPageloc.clickSearchButton();
});
When("user doubleclicks on the record", async function () {
  fixture.logger.info("Double clicking on the record");
  await ProcessingPageloc.doubleclicksrecord() 
});
When("user Click on Authorize Button", async function () {
  fixture.logger.info("Clicking on Authorize Button");
  await ProcessingPageloc.clickAuthorizeButton();
});
Then("validate the success message", async function () {
  fixture.logger.info("Validating success message");
  await ProcessingPageloc.successMessage();
});
When("user click on Exit button1", async function () {
   ProcessingPageloc = new VoucherEntryProcessingPage(fixture.page);
  fixture.logger.info("Handling Journal Frame");
  await ProcessingPageloc.handleJournalFrame();
  fixture.logger.info("Clicking on Exit button");
  await ProcessingPageloc.clickOnExitButton1();
  
})