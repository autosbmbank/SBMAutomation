import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import cifCreationPage from "../../pages/CorePage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"


const reusableMethods = new ReusableMethods(fixture.page);
let CifPageloc: cifCreationPage;



//let loginPageloc: loginPage;


setDefaultTimeout(timeout);



When("User click on New Tab",async function(){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Tab");
       
    await CifPageloc.handleClFFrame();
    await CifPageloc.clickNewTab();
})
When("User in QuickCustomer frame click on New Tab",async function(){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Tab");
       
    await CifPageloc.handleQuickCustFrame();
    await CifPageloc.clickNewTab();
})
When("User selects customer Type as {string}",async function(custType:string){

    await CifPageloc.selectCustomerType(custType);
 })

When("User clicks the button P", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on button P");
    await CifPageloc.clickButtonP();
});
When("User Fetch CustomerNumber", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("Fetch Customer Number");
    await CifPageloc.fetchCustno();
});

When("User enters Full Name {string}", async function (FullName){
    await CifPageloc.enterFullName(FullName);
});


When("User enters Short Name {string}", async function (shortName){
    await CifPageloc.enterShortName(shortName);
});

When("User enters Customer Category {string}", async function (category) {
    
    await CifPageloc.enterCustomerCategory(category);
});
 When("User selects {string} radio button",async function(gender:string){

    await CifPageloc.selectgender(gender);
 })

 When("User enters Date of Birth {string}", async function (dob: string) {
    await CifPageloc.enterDOB(dob);
});

When("User enters Nationality {string}", async function (nationality: string) {
    await CifPageloc.enterNationality(nationality);
});

When("User enters Address {string}", async function (address: string) {
    await CifPageloc.enterAddress(address);
});

When("User enters Country {string}", async function (country: string) {
    await CifPageloc.enterCountry(country);
});
When("User enters Corporate Address {string}", async function (address: string) {
    await CifPageloc.corporateaddress(address);
});

When("User enters Corporate Country {string}", async function (country: string) {
    await CifPageloc.corporatecountry(country);
});
When("User enters Corporate Language {string}", async function (language: string) {
    await CifPageloc.corporatelanguage(language);
});

When("User enters Language {string}", async function (language: string) {
    await CifPageloc.enterLanguage(language);
});
When("User checks Staff checkbox",async function(){
    await CifPageloc.checkstaff();
})
When("User clicks on Additional tab", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on Additional tab");
    await CifPageloc.clickAdditionalTab();
});

When("User enters Location {string}", async function (location: string) {
    await CifPageloc.enterLocation(location);
});

When("User enters Media {string}", async function (media: string) {
    await CifPageloc.enterMedia(media);
});
When("User clicks Limits Tab and enter Limit Amount as {string}", async function(amount:string){
    await CifPageloc.clickLimitsTab();
    await CifPageloc.enterLimtAmount(amount);
})
When("User selects customer status {string}",async function (CustomerStatus:string){

    await CifPageloc.selectCustomerStatus(CustomerStatus);
 })
 When("User clicks Account Details Tab",async function(){
    await CifPageloc.clckAccDetailsTab();
 })

 When("User clicks Linked Entities Tab",async function(){
    await CifPageloc.clckLinkedEntityTab();
 })
 When("User shares Joint Customer Details {string},{string}",async function(relation:string,jointcustNo:string){
    await CifPageloc.addJointCust(relation,jointcustNo);
 })
 

 When("User enters Joint Customer Details {string},{string},{string},{string}",async function(Acclass:string,location:string,jointcustNo:string,jointholdertype:string){
    await CifPageloc.addjointAcc(Acclass,location,jointcustNo,jointholdertype);
 })

When("User clicks on Save button", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on Save button");
    await CifPageloc.clickSaveButton();
    
    
});

When("User unchecks Track Limits option",async function(){
    await CifPageloc.uncheckTrackLimits()
 })
 When("User checks Track Limits option",async function(){
    await CifPageloc.checkTrackLimits()
 })
 When("User checks AutoAccountCreation option",async function(){
    await CifPageloc.checkAutoAccCreation()
 })


When("User accepts PopUp Alert",async function(){
    await CifPageloc.remarksFrame()
})

When("User accepts accept Alert",async function(){
    await CifPageloc.overrideFrame();
})

Then("User validates success message", async function () {
     await CifPageloc.verifySuccessMessage();
   await CifPageloc.exitFrame()
});
When("User clicks on Joint Tab and enter details {string}",async function(dob:string){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on Joint Tab");
   // await CifPageloc.handleClFAFrame();
    await CifPageloc.clickJointTab();
    await CifPageloc.enterJointCustomer(dob);
})
When("User clicks enter query Tab",async function(){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await CifPageloc.handleClFAFrame();
    await CifPageloc.clickNewquery();
})
When("User in QuickCustomer frame clicks enter query Tab",async function(){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await CifPageloc.handleQuickCustFrame();
    await CifPageloc.clickNewquery();
})
When("User in liability link frame clicks enter query Tab",async function(){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await CifPageloc.handleLialinkFrame();
    await CifPageloc.clickNewquery();
    await CifPageloc.enterliaCustno();
})
When("User in liability Maintenance frame enter cif details {string}",async function(CustomerNo:string){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await CifPageloc.handleLiaMaintFrame();
    await CifPageloc.clickNewquery();
    await CifPageloc.enterliaMaintCustno(CustomerNo);
})
Then("User validates limit amount set for the customer with {string}",async function(amount:string){
    await CifPageloc.validateLimitAmount(amount);
})
When("User enters customer number {string}", async function (number){
    await CifPageloc.enterCustno(number);
});
When("User uses created customer number", async function (){
    await CifPageloc.enterfetchCustno();
});
When("User clicks execute query Tab",async function(){
    await CifPageloc.executequery();
})

When("User clicks on Autherize Tab",async function(){
    await CifPageloc.authTabclick();
})
When("User accepts Autherize Alert",async function(){
    await CifPageloc.AutherizeFrame();
})

When("User validates success msg",async function(){
    await CifPageloc.verifySuccesssMessage();
    await CifPageloc.exitFrame()
})  
