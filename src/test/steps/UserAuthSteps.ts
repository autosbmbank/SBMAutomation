import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

//import userCreationPage from "../../pages/UserAuthPage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
import UserAuthPage from "../../pages/UserAuthPage";


const reusableMethods = new ReusableMethods(fixture.page);
let AuthPageloc: UserAuthPage ;



//let loginPageloc: loginPage;


setDefaultTimeout(timeout);


// When("User clicks userenter query Tab",async function(){
//     AuthPageloc = new UserAuthPage(fixture.page);
//        fixture.logger.info("clicks on New Query Tab");
//     await AuthPageloc.handleuserAFrame();
//     await AuthPageloc.clickNewquery();
// })
// When("User enters User ID",async function(){
    
//     await AuthPageloc.enterCustID();
// })
// When("User clicks userexecute query Tab",async function(){
//     fixture.logger.info("clicks on userExecute Query Tab");
//     await AuthPageloc.executequery();
// })

// When("User clicks on userAutherize Tab",async function(){
//     await AuthPageloc.authTabclick();
// })
// When("User accepts userAuthorize Alert",async function(){
//     await AuthPageloc.AutherizeFrame();
// })

// When("User validates usersuccess msg",async function(){
//     await AuthPageloc.verifySuccessMessage();
// })  



