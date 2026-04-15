import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import SecuritiesInstrumentPage from "../../pages/SecuritiesInstrumentPage"; 
let InstrumentPage: SecuritiesInstrumentPage;

When("clicks on new", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clicknewtab();
});

When("enter security id {string}", async function(id : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.entersecurityid(id);
});

When("enter product {string}", async function(product : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterproduct(product);
});

When("click on p button", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickPbtn();
});

When("enter market of issue {string}", async function(MOI : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.entermarketofissue(MOI);
});

When("enter issuer code {string}", async function(issuer : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterissuercode(issuer);
});

When("select the Quantity Quotation",async function(){
    InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.selectQuantity();
});

When("enter issue date {string}", async function(issuedate : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterissuedate(issuedate);
});

When("enter start of trading date {string}", async function(SOTD : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.entertradingdate(SOTD);
});

When("enter redemption date {string}", async function(redmdate : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterredempdate(redmdate);
});

When("enter security currency {string}", async function(seccuren : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterseccurrency(seccuren);
});

When("enter initial face value {string}", async function(facevalue : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterfacevalue(facevalue);
});

When("enter issue price {string}", async function(issueprice : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterissueprice(issueprice);
});

When("enter redemption price {string}", async function(redmprice : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.enterredemptprice(redmprice);
});

When("click on others tab", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickothers();
});

When("enter collateral type {string}", async function(coltype : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.entercolltype(coltype);
});

When("enter market for revaluation {string}", async function(revaluation : string){
   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.entermarketrevalu(revaluation);
});

When("Click on save", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clicksave();
});

When("Click on Accept2", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickaccept();
});

When("click on ok button2", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickOK();
});

When("Click on exitbtn2", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickexit();
});

When("click on Enter Query1", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickenterquery();
});

When("click on Execute Query", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickexecutequery();
});

When("Click on Authorize1", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickauthorize();
});

When("click on Authorize btn", async function(){
  InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
     await InstrumentPage.clickauthorizebtn();
});

// When("click on OK", async function(){
//   InstrumentPage = await new SecuritiesInstrumentPage(fixture.page);
//      await InstrumentPage.clickOKbtn();
// });
