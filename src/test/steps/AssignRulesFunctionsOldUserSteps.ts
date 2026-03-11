import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

//import userCreationPage from "../../pages/UserAuthPage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
import AssignRulesFunctionsOldUserPage from "../../pages/AssignRulesFunctionsOldUserPage";


const reusableMethods = new ReusableMethods(fixture.page);
let AuthPageloc: AssignRulesFunctionsOldUserPage ;

//let loginPageloc: loginPage;  
setDefaultTimeout(timeout);

When("User enters User Id as {string} in SMSURDF",async function(userId){
    AuthPageloc = new AssignRulesFunctionsOldUserPage(fixture.page);
       fixture.logger.info("Entering User ID");
    await AuthPageloc.handleUserFrame();
    await AuthPageloc.enterUserId(userId);
})
When("user Clicks on Searh button in SMSUSRDF",async function(){
  AuthPageloc = new AssignRulesFunctionsOldUserPage(fixture.page);
    fixture.logger.info("clicks on Search button");
    await AuthPageloc.clicksearch();
})
When("User Double clicks on User in SMSUSRDF",async function(){
    fixture.logger.info("clicks on User");
    await AuthPageloc.clickcheckbox();
})

When("User clicks on Unlock Tab in User_Maintenance screen",async function(){
     await AuthPageloc.clickunlock();
})

When("User clicks on Roles Tab in User_Maintenance screen {string},{string}", async function (branch,role) {
  await AuthPageloc.clickRolesTab();
  await AuthPageloc.RolesFrame(branch,role);
});

When ("User clicks on functions Tab in User_Maintenance screen {string},{string} and select copy,delete,new,close and unlock check boxes", async function (branch,Function) {
  await AuthPageloc.clickFunctionsTab();
  await AuthPageloc.FunctionsFrame(branch,Function);
});
/*When("User click on Add button in User_Maintenance screen", async function () {
  AuthPageloc = new editUserMaintenancePage(fixture.page);
    fixture.logger.info("Clicking on Add");
    await AuthPageloc.RolesFrame();
  
});

When("User enter branch as {string}", async function (branch: string) {
  await AuthPageloc.enterBranch(branch);
});

When("User enters Role as {string}", async function (role: string) {
  await AuthPageloc.enterRole(role);
});*/

/*When("User click on search button", async function () {
 
  await AuthPageloc.ListFrame();
});*/

When("User clicks on Ok button in User_Maintenance screen", async function () {
  await AuthPageloc.clickOkButton();
})

When("User clicks on Save button in User_Maintenance screen", async function () {
  await AuthPageloc.clickSaveButton();
});

When("User validate Asuccess message {string}", async function (message) {
  await AuthPageloc.verifySuccessMessage(message);
});

When("User Screen signoff the application", async function () {
  await AuthPageloc.Screensignoff();
});

When("userScreen signoff the application", async function () {
  AuthPageloc = new AssignRulesFunctionsOldUserPage(fixture.page);
    fixture.logger.info("Click on Signoff Button");
    await AuthPageloc.Signoff();
})