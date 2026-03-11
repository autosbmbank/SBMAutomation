import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import BookingLoanPage from "../../pages/BookingLoanPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { context, timeout } from "../../hooks/hooks"
import { configDotenv } from "dotenv";
const reusableMethods = new ReusableMethods(fixture.page);

let bookLoan : BookingLoanPage;

setDefaultTimeout(timeout);

When("User clicks on New Tab1", async function (){
    bookLoan = new BookingLoanPage(fixture.page);
    fixture.logger.info("clicks on New Tab");
    await bookLoan.handleLoanFrame();
    await bookLoan.clicknewTab();

})

When("enters the product code {string}", async function(ProductCode : string){
    bookLoan = new BookingLoanPage(fixture.page);
 await bookLoan.enterProductCode(ProductCode);
})

When('enter customer ID {string}', async function (CustomerID: string) {
await bookLoan.enterCustomerID(CustomerID);
         });

When("enter Currency {string}", async function(Currency){
await bookLoan.enterCurrency(Currency);
})


When('enter amount financed {string}', async function (Amount) {
    await bookLoan.enterAmount(Amount);
         });

When("click on product default button", async function () {
await bookLoan.clickProductDflt();
});

 When("click on enrich button", async function () {
 await bookLoan.clickEnrich();
});

When("click on preference tab", async function () {
 await bookLoan.clickPreference();
});

When("uncheck the Auto liquidation", async function () {
 await bookLoan.clickAutoliquidation();
});


When("clicks on Save button", async function () {
    await bookLoan.clickSave();
});


When("accept PopUp Alert", async function () {
    await bookLoan.overrideFrame();
});

When("System display success message", async function () {
    await bookLoan.verifySuccessMessage();
});

When("system capture account number",async function() {
    await bookLoan.captureinputvalue();
    
})
 
When("click on Enter Query", async function (){
    bookLoan = new BookingLoanPage(fixture.page);
    fixture.logger.info("clicks on enter query button");
    await bookLoan.handleloanAuthorizeFrame();
    await bookLoan.clickenterqueryBtn();
})


         When('enter loan account number {string}', async function (accountNumber) {
           // Write code here that turns the phrase above into concrete actions
        await bookLoan.enterAccountNmbr(accountNumber); 
         });

When('Click on Execute Query', async function () {
          await bookLoan.executeQueryBtn();
         });

 When('system Clicks Authorize', async function () {
           await bookLoan.authorizeBtn();
         });

 When('Click on Autorize1', async function () {
    await bookLoan.overrideauthFrame();
         });


Then ("System display success message with ok option", async function(){
    await bookLoan.verifyauthSuccessMessage();
})


When("User clicks on New Tab2",async function(){
 bookLoan = new BookingLoanPage(fixture.page);
    fixture.logger.info("clicks on New Tab");
    await bookLoan.handleDisbursementFrame();
    await bookLoan.clicknewTab2();

})   

   When('enter disbursement account number {string}', async function (AccountNumber: string) {
    await bookLoan.enteraccountNumber(AccountNumber);
         });


 When('click on default button', async function () {
await bookLoan.clickdefaultbutton();
         });

 When('enter the settlement amount {string}', async function(SettlementAmount : string){
    console.log("SettlementAmount"+ SettlementAmount);
    await bookLoan.entersettlementamount(SettlementAmount);
         })

When ("enter Loan Currency Equivalent {string}", async function(loancurencyamount: string){
    await bookLoan.enterloancurrencyequivalent(loancurencyamount);
})

When ("click on Default Settlement", async function(){
     await bookLoan.clickdefaultsettlementbutton();
})

When ("click on Ok button", async function (){
    await bookLoan.clickokbutton();
})
When ("click on Compute Charges", async function(){
    await bookLoan.clickcomputechargesbutton();
})

When ("clicks on Save button1", async function(){
    await bookLoan.clickSaveButtton1();
})

When("System displays successful message with ok option", async function(){
    await bookLoan.verifySuccessfulMessage();
})

When ("click on Enter Query button", async function() {
    bookLoan = new BookingLoanPage(fixture.page);
    fixture.logger.info("click on enter Query button");
    await bookLoan.handledisbursementauthorizeFrame();
    await bookLoan.clickenterqueryBtn1();
 })

      When('enter loan disbursement account number {string}', async function (AccountNumber: string) {
           // Write code here that turns the phrase above into concrete actions
        await bookLoan.enterdisbAccountNmbr(AccountNumber); 
         });

When('Click on Execute Query button', async function () {
          await bookLoan.executeQueryBtn1();
         });

 When('Click on Authorize button', async function () {
           await bookLoan.disbauthorizeBtn();
         });

 When('Click on Autorize1 button', async function () {
    await bookLoan.authorizeBtn1();
         });


Then ("System display success message with ok button", async function(){
    await bookLoan.verifySuccessMessage1();
})
