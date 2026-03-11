import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

//import userCreationPage from "../../pages/UserAuthPage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
import UserMaintenanceAuthPage from "../../pages/UserMaintenanceAuthPage";


const reusableMethods = new ReusableMethods(fixture.page);
let AuthPageloc: UserMaintenanceAuthPage;



//let loginPageloc: loginPage;


setDefaultTimeout(timeout);


When("User clicks assignenter query Tab",async function(){
    AuthPageloc = new UserMaintenanceAuthPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await AuthPageloc.handleuserAFrame();
    await AuthPageloc.clickNewquery();
})
When("User enters assigncustomer ID {string}",async function(custID){
    
    await AuthPageloc.enterCustID(custID);
})
When("User clicks assignexecute query Tab",async function(){
    fixture.logger.info("clicks on userExecute Query Tab");
    await AuthPageloc.executequery();
})
Then ("User Validates close Maintenance Account with {string}",async function(message){
    await AuthPageloc.closeMaintAc(message);
})

When("User clicks on assignAutherize Tab",async function(){
    await AuthPageloc.authTabclick();
})
When("User accepts assignAutherize Alert",async function(){
    await AuthPageloc.AutherizeFrame();
})

Then("User validates assignsuccess msg {string}",async function(message){
    await AuthPageloc.verifySuccessMessage(message);
})  



