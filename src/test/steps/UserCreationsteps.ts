import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";
import UserCreationPage from "../../pages/UserCreationPage";
import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
const reusableMethods = new ReusableMethods(fixture.page);

let userPage: UserCreationPage;
setDefaultTimeout(timeout);



When("User clicks on UserNew Tab", async function () {
  userPage = new UserCreationPage(fixture.page);
  fixture.logger.info("Clicking on New Tab");
  await userPage.handleUserFrame();
  await userPage.clickNewTab();
});

When("User enters User Identification {string}", async function (userId: string) {
  await userPage.enterUserId(userId);
});

When("User enters Name {string}", async function (name: string) {
  await userPage.enterName(name);
});

When("User enters Home Entity {string}", async function (entity: string) {
  await userPage.enterHomeEntity(entity);
});

When("User enters Password {string}", async function (password: string) {
  await userPage.enterPassword(password);
});



When("User clicks on UserSave button", async function () {
  fixture.logger.info("Clicking Save button");
  await userPage.clickSaveButton();
});

Then("User validates success message {string}", async function (message: string) {
  fixture.logger.info("Validating success message");
  await userPage.verifySuccessMessage(message);
});

When("User clicks userenter query Tab",async function(){
   userPage = new UserCreationPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await userPage.handleuserAFrame();
    await userPage.clickNewquery();
})

When("User enters customer ID {string}",async function(custID){
     userPage = new UserCreationPage(fixture.page);
    await userPage.enteruserID(custID);
})
When("User enters User ID",async function(){
    
    await userPage.enterCustID();
})
When("User enters Maintenance User ID",async function(){
     userPage = new UserCreationPage(fixture.page);
    await userPage.enterMaintCustID();
})

When("User enters Old User ID",async function(){
     userPage = new UserCreationPage(fixture.page);
    await userPage.enterOldCustID();
})

When("User clicks userexecute query Tab",async function(){
    fixture.logger.info("clicks on userExecute Query Tab");
    await userPage.executequery();
})

When("User clicks on userAutherize Tab",async function(){
    await userPage.authTabclick();
})
When("User accepts userAuthorize Alert",async function(){
    await userPage.AutherizeFrame();
})

When("User validates usersuccess msg",async function(){
     await userPage.verifyAuthSuccessMessage();
 })  