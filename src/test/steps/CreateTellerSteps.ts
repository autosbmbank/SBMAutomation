import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard, Page } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";

import  CreateTellerPage  from "../../pages/CreateTellerPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"

const reusableMethods = new ReusableMethods(fixture.page);

let createUser :  CreateTellerPage;
let homePage:HomePage
setDefaultTimeout(timeout);
let newPage;

When(`user selects NextGen UI Dashboard and select Retail Operations`, async function() {
     createUser = new CreateTellerPage(fixture.page);
    fixture.logger.info("Click on NextGen UI Dashboard and select Retail Operations");
    await createUser.NextGenFun();
    await fixture.page.waitForTimeout(2000)
});
When('user searches for in menu bar', async function ()  {
// homePage=new HomePage(fixture.page)
    createUser = new CreateTellerPage(newPage);
  await createUser.searchMenu();
});

When('user enters Login ID {string}', async function (login:string) {
  await createUser.enterLoginID(login);
});

When('user enters Username {string}', async function (uname:string)  {
  await createUser.enterUsername(uname);
});

When('user selects Home Branch {string}', async function (branch:string)  {
  await createUser.selectHomeBranch(branch);
});

When('user selects User Status', async function ()  {
  await createUser.selectUserStatus();
  
});
When('user celects SuperVisor',async function(){
  await createUser.selectsSuperVisor()
})

When('user enters Start Date {string}', async (sdate) => {
  await createUser.enterStartDate(sdate);
});

When('user selects Language Code {string}', async (lang) => {
  await createUser.selectLanguage(lang);
});

When('user click on add', async function ()  {
  await createUser.addUserRole1();
});
When('User enters Branch {string}',async function(branch:string){
  await createUser.addBranch1(branch)
})
When('user enters Role {string}',async function(role:string){
  await createUser.addRole1(role)
})
When('user deletes row',async function(){
  await createUser.deleterow1()
})
When('user deletes Application row',async function(){
  await createUser.deleteApplicationrow1()
})
When('user clicks on add2',async function(){
  await createUser.addApplication()
})
When('user adds User Application {string}', async (app) => {
  await createUser.addApplication1(app);
});

When('user clicks Save', async () => {
  await createUser.saveUser();
});
Then('user validates function',async function(){
  await createUser.auditTab()
})

Then('system should display success popup', async () => {
  await createUser.verifySuccessPopup();
});
When('user exits NewGenPage',async function () {
  await createUser.NewGenexit()
  
})

When('user searches for ViewUser in menu bar', async function ()  {
    createUser = new CreateTellerPage(newPage);
  await createUser.searchAuthMenu();
});
When('user selects authorization status {string},{string}', async function (status: string,value:string) {
  
  await createUser.selectAuthorizationStatus(status,value);
});
When('user selects Vault authorization status {string},{string}', async function (status: string,value:string) {
  
  await createUser.selectVaultAuthorizationStatus(status,value);
});

When('user clicks on Search button', async function () {
  await createUser.clickSearch();
});

When('user selects a record from search result', async function () {
  await createUser.selectRecord();
});

When('user clicks on three dot menu', async function () {
  await createUser.clickThreeDotMenu();
});

When('user clicks on Authorize option', async function () {
  await createUser.clickAuthorize();
});
When('user clicks on Unlock option', async function () {
  await createUser.clickUnlock();
});

When('user approves the record', async function () {
  await createUser.approveRecord();
});

Then('user validates authorization success', async function () {
  await createUser.clickOk();
});
When('user enters in Menu Bar {string}',async function(searchname:string){
   createUser = new CreateTellerPage(newPage);
  await createUser.searchNextGen(searchname);
  
})
When('user clicks on Add button in Branch User Limit', async function () {
  await createUser.clickAddButton();
});

When('user selects Branch Code {string}', async function (branch) {
  await createUser.selectBranchLov(branch);
});

When('user selects User ID {string} from LOV', async function (userId) {
  await createUser.selectUserLov(userId);
});

When('user selects Till Vault Indicator {string}', async function (tillType) {
  await createUser.selectTillIndicator(tillType);
});

When('user enables Carry Forward Allowed toggle', async function () {
  await createUser.enableCarryForwardToggle();
});

When('user enables Inter Branch Transactions Allowed toggle', async function () {
  await createUser.enableInterBranchToggle();
});

When('user adds Currency Holding Preference with {string} {string} {string}', async function (currency, minBal, maxBal) {
    await createUser.addCurrencyHoldingPreference(currency, minBal, maxBal);
  }
);

When('user adds Currency Limit Preference with {string} {string} {string}', async function (currency, maxTxnAmt, authLimit) {
    await createUser.addCurrencyLimitPreference(currency, maxTxnAmt, authLimit);
  });

When('user clicks on save in Branch User Limit', async function () {
  await createUser.saveRecord();
});

// Then('system should display success message and user clicks OK', async function () {
//   await createUser.handleSuccessMessage();
// });
