import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import  RetailAccountClassTransferPage  from "../../pages/RetailAccountClassTransferPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"



const reusableMethods = new ReusableMethods(fixture.page);
let retailPage :  RetailAccountClassTransferPage;

setDefaultTimeout(timeout);

When('user click on New in Account Class', async function () {
         retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleRetailFrame();
  await retailPage.clickNewButton();
});
When('user click on New in TD Block Input Frame', async function () {
         retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleTDFrame();
  await retailPage.clickonNew();
});
When('user click on New in Amount Block Input Frame', async function () {
         retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleAmountFrame();
  await retailPage.clickonNew();
});

When('user extracts Reference Number from InputBox', async function() {
  await retailPage.ExtractRefNo();
});
When('user Enter the Account {string}', async function(account: string) {
  await retailPage.enterAccount(account);
});
When('user enters Account Number as {string}', async function(account: string) {
  await retailPage.enterAccountNo(account);
});
When('user enters amount as {string}', async function(amount: string) {
  await retailPage.enterAmount(amount);
});
When('user enters EffectiveDate as {string}', async function(StartDate: string) {
  await retailPage.enterEffectiveDate(StartDate);
})
When('user enters ExpiryDate as {string}', async function(EndDate: string) {
  await retailPage.enterExpiryDate(EndDate);
})
When('user click on Save Button',async function(){
  await retailPage.clicksonSave();
})
When('user accepts override limits',async function(){
  await retailPage.overrideFrame();
})
Then('user Validates Function to contain {string}',async function(SuccMsg:string){
  await retailPage.ValidateFunction(SuccMsg)
})
When('user clicks on Enter Query Tab',async function(){
     retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleTDFrame();
  await retailPage.clickEnterQuery()
})
When('user in Amount Frame clicks on Enter Query Tab',async function(){
     retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleAmountFrame();
  await retailPage.clickEnterQuery()
})
When('user selects status as {string}',async function(status){
     retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleAmountBlockSumFrame();
  await retailPage.selectUnauthstatus(status)
})
When('user enters Block Reference Number',async function(){
  await retailPage.enterRefNo();
})
When('user clicks on search and selects record',async function(){
  await retailPage.clickonSearch();
  await retailPage.selectRecord();
})
When('user clicks on Execute Query Tab',async function(){
  await retailPage.clickExecuteQuery();
})
When('user clicks on Authorize Tab',async function(){
   retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleAmountFrame();
  await retailPage.clickauthTab();
})
When('user clicks on Accept Button',async function(){
  await retailPage.clickAcceptBtn();
})
Then('user Validates Block Success message with {string}',async function(SuccessMsg:string){
  await retailPage.ValidateSuccessFun(SuccessMsg)
})
When('user Enter the Account Class {string}', async function(accountClass: string) {
  await retailPage.enterAccountClass(accountClass);
});

When('user Click on Default button', async function() {
  await retailPage.clickDefaultButton();
});

When('user Click on Save', async function (){
  await retailPage.clickSaveButton();
});

Then('validate the Error message', async function () {
  await retailPage.validateErrorMessage();
});
Then('validate the Success message', async function () {
  await retailPage.validateSuccessMessage();
});
When('user Click on Exit button', async function () {
  await retailPage.clickExitButton();
});
When('user Click on TDFrame Exit button', async function () {
  await retailPage.clickExitBtn();
});
When ('user exits Amount BLK Frame',async function(){
  await retailPage.exitAmntBlkFrame();
})
When('user Click on MIS Tab', async function () {
  await retailPage.clickMISTab();
});
When("select {string} from drop down", async function (status: string) {
    retailPage = new RetailAccountClassTransferPage(fixture.page);
  fixture.logger.info("Handling Journal Frame");
  await retailPage.handleRetailFrame();

  fixture.logger.info(`Selecting ${status} from drop down`);
  await retailPage.selectAuthorizationStatus(status);
});
When("user Clicks on Search button", async function(){
  await retailPage.Searchfunction()
})
When("user doubleclick on record", async function () {
  fixture.logger.info("Double clicking on the record");
  await retailPage.doubleclicksrecord() 
});
When("Click on Authorize Button", async function () {
  fixture.logger.info("Clicking on Authorize Button");
  await retailPage.clickAuthorizeButton();
});
Then("validate the Authsuccess message",async function(){
  await retailPage.AuthSuccessFun();
})
When('user click on New in Account Statement Input Frame', async function () {
         retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleAcStateFrame();
  await retailPage.clickonNew();
});
When('user enters From Date as {string}', async function(fromDate: string) {
  await retailPage.enterFromDate(fromDate);
});
When('user enters To Date as {string}', async function(toDate: string) {
  await retailPage.enterToDate(toDate);
});
When('user enters Account number as {string}', async function(accountno: string) {
  await retailPage.fillAccountno(accountno);
});
When('user clicks on Ok Button',async function(){
  await retailPage.clickonokBtn();
})
Then('user Validates Account Statement',async function(){
  await retailPage.handleMsgFrame();
  await retailPage.viewStmnt()
})
When('user exits Account Statement Frame',async function(){
  retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleAcStateFrame();
  await retailPage.exitAcStateFrame()
});
When('user click on New in Account status change Input Frame', async function () {
         retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleStatusFrame();
  await retailPage.statusNewButton();
});
When('user enters Dormant Account Number as {string}', async function(acno: string) {
  await retailPage.fillAcNo(acno);
});
When('user selects Norm as New Status', async function() {
  await retailPage.enterNewstatus();
});
When('user Unchecks Dormant checkbox', async function() {
  await retailPage.unchkDormant();
});
When('user clicks on Save Button in Account status change Frame',async function(){
  await retailPage.clickonSaveBtn();
})
Then('user Validates Account Status change Success Message with {string}',async function(SuccessMsg:string){
  await retailPage.ValidatestatusChnge(SuccessMsg)
})
When('user clicks on Exit Button in Account status change Frame',async function(){
  await retailPage.exitstatusFrame();
})
When ('user selects key id as {string}',async function(account:string){
    retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleVerifyFrame();
  await retailPage.enterNewQuery()
  await retailPage.enterNewKeyId(account)
  })
  When('user clicks on Execute Query and selects record',async function(){
    await retailPage.enterExecuteQuery()
    await retailPage.cheboxchk()
  })
  When('user clicks on accept Button in verify Frame',async function(){
  await retailPage.clickonAccept()
  })
  When('user enters status as {string} in Manual status change Frame',async function(status:string){
     retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleManualStFrame();
  await retailPage.selectUnauth(status)
  })
  When('user enters account number as {string} in Manual status change Frame',async function(account:string){
    await retailPage.acnofill(account)
  })
  When('user enters search button and selects record from Manual status change Frame',async function(){
    await retailPage.slectRecord()
  })
  When('user authorizes the record in Manual status Frame',async function(){
    await retailPage.handleStatusFrame()
    await retailPage.authrizefunction()
  })
  Then('user Validates Manual status change Authsuccess message with {string}',async function(statusMsg:string){
    await retailPage.successAuthFun(statusMsg)
  })
  When('user exits Manual status change Frame',async function(){
     retailPage = new RetailAccountClassTransferPage(fixture.page);
    await retailPage.handleManualStFrame();
    await retailPage.exitManualStFrame()
  })