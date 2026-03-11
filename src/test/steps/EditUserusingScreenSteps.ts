import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

//import userCreationPage from "../../pages/UserAuthPage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
import EditUserUsingScreenPage from "../../pages/EditUserUsingScreenPage";


const reusableMethods = new ReusableMethods(fixture.page);
let AuthPageloc: EditUserUsingScreenPage ;

//let loginPageloc: loginPage;  
setDefaultTimeout(timeout);

When("User enters UserID as {string}",async function(userId){
    AuthPageloc = new EditUserUsingScreenPage(fixture.page);
       fixture.logger.info("Entering User ID");
    await AuthPageloc.handleUserFrame();
    await AuthPageloc.enterUserId(userId);
    
})
When("User Clicks on Searh button",async function(){
     AuthPageloc = new EditUserUsingScreenPage(fixture.page);
    fixture.logger.info("clicks on Search button");
    // await AuthPageloc.handleUserFrame();
    await AuthPageloc.clicksearch();
     
})



When("User Double clicks on User",async function(){
      AuthPageloc = new EditUserUsingScreenPage(fixture.page);
    fixture.logger.info("clicks on User");
    await AuthPageloc.clickcheckbox();
})

When("User Clicks on close button",async function(){
   
    await AuthPageloc.clickclose();
})


When("User clicks on close ok button",async function(){
    fixture.logger.info("clicks on disable button");
    
    await AuthPageloc.okbtnclick();
   
})

When("User enters name as {string}",async function(name){
   
    await AuthPageloc.clickunlock(name);
})




When("User enters password as {string}",async function(password){
   
    await AuthPageloc.enterpassword(password);
})
When("User clicked on Save button",async function(){
    fixture.logger.info("clicks on Save button");
    await AuthPageloc.clickSaveButton();
})
Then("User validates success message as {string}", async function(message){

   await AuthPageloc.verifySuccessMessage(message);
})




