import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

//import userCreationPage from "../../pages/UserAuthPage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
import EditUserUsingQueryPage from "../../pages/EditUserUsingQueryPage";


const reusableMethods = new ReusableMethods(fixture.page);
let AuthPageloc: EditUserUsingQueryPage ;



//let loginPageloc: loginPage;


setDefaultTimeout(timeout);


When("User clicks enterquery Tab",async function(){
    AuthPageloc = new EditUserUsingQueryPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await AuthPageloc.handleuserAFrame();
    await AuthPageloc.clickNewquery();
})
When("User enters dcustomer ID {string}",async function(custID){
    
    await AuthPageloc.enterCustID(custID);
})
When("User clicks duser execute query Tab",async function(){
    fixture.logger.info("clicks on userExecute Query Tab");
    await AuthPageloc.executequery();
})
When("User clicks on unlock Tab",async function(){
    fixture.logger.info("clicks on unlock Tab");
    await AuthPageloc.unlockTab();
})
When("User clicks on disable button",async function(){
    fixture.logger.info("clicks on disable button");
    await AuthPageloc.disablebtnclick();
})
    When("User clicks on enable button",async function(){
        fixture.logger.info("clicks on enable button");
        await AuthPageloc.enablebtnclick();
})
When("User clicks on dsave button",async function(){
    fixture.logger.info("clicks on save button");
    await AuthPageloc.clickSaveButton();
})
Then("User validates dsuccess message {string}",async function(message){
    fixture.logger.info("Validates success message");
    await AuthPageloc.verifySuccessMessage(message);
})

When("User clicks on close Tab",async function(){
    fixture.logger.info("clicks on close Tab");
    await AuthPageloc.closeUserTab();
})
When("User clicks on closeok button",async function(){
    fixture.logger.info("clicks on disable button");
    
    await AuthPageloc.okbtnclick();
   
})

