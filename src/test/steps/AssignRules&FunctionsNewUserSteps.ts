import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import AssignRulesFunctionsNewUserPage  from "../../pages/AssignRulesFunctionsNewUserPage";
import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"


const reusableMethods = new ReusableMethods(fixture.page);
let assignPage: AssignRulesFunctionsNewUserPage;
setDefaultTimeout(timeout);



When("User clicks on ANew Tab", async function () {
  assignPage = new AssignRulesFunctionsNewUserPage(fixture.page);
    fixture.logger.info("Clicking on New Tab");
  await assignPage.handleassignFrame();
  await assignPage.clickNewTab();
});

When("User enters AUser Identification {string}", async function (userId: string) {
  await assignPage.enterUserId(userId);
});


When("User enters Timelevel {string}", async function (level: string) {
  await assignPage.enterTimeLevel(level);
});

When("User Click on Functions Tab", async function () {
 
  await assignPage.clickFunctionsTab();
});
When("User click on functionAdd", async function () {
   await assignPage.RolesFrame();
  await assignPage.clickFunctionAdd();
});

When("User enters branch {string}", async function (branchcode: string) {
  await assignPage.enterBranchcode(branchcode);
});   
When("User enters Function as {string}", async function (func: string) {
  await assignPage.enterFunction(func);
});
When("User Click on New checkbox", async function () {
  await assignPage.clickNewchk();
});
When("User Click on Copy checkbox", async function () {
  await assignPage.clickCopychk();
}); 
When("User Click on Delete checkbox", async function () {
  await assignPage.clickDeletechk();
});
When("User Click on Close checkbox", async function () {
  await assignPage.clickClosechk();
});
When("User Click on Unlock checkbox", async function () {
  await assignPage.clickUnlockchk();
}); 
When("User Click on Reopen checkbox", async function () {
  await assignPage.clickReopenchk();
});
When("User Click on Auth checkbox", async function () {
  await assignPage.clickAuthchk();
});


When("User Click on Roles Tab", async function () {
  await assignPage.clickRolesTab();
});

When("User click on Add", async function () {
  assignPage = new AssignRulesFunctionsNewUserPage(fixture.page);
    fixture.logger.info("Clicking on Add");
    await assignPage.RolesFrame();
  await assignPage.clickAdd();
});

When("User enters branch as {string}", async function (branch: string) {
  await assignPage.enterBranch(branch);
});

When("User enter Role as {string}", async function (role: string) {
  await assignPage.enterRole(role);
});

When("User click on search button and selects first one on dropdown list", async function () {
  await assignPage.clickSearchAndSelectFirst();
  await assignPage.ListFrame();
});

When("User clicks on Ok button", async function () {
  await assignPage.clickOkButton();
});

When("User clicks on ASave button", async function () {
  await assignPage.clickSaveButton();
});

Then("User validates Asuccess message {string}", async function (message) {
  await assignPage.verifySuccessMessage(message);
});
