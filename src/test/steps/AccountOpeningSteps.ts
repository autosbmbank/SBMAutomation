import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import AccountOpeningPage from "../../pages/AccountOpeningPage";
import cifCreationPage from "../../pages/CorePage"; 
let AOPage: AccountOpeningPage;

When("clicks on New tab", async function(){
  AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicknewtab();
});

// When("clicks on ok in STDCUSAC", async function(){
//   AOPage = await new AccountOpeningPage(fixture.page);
//      await AOPage.clicksok();
// });

When("enter Customer no", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.entercustmno();
});

When("enter Customer no {string}", async function(accountnumber : string ){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.entercustomernum(accountnumber);
});

When("enter Currency1 {string}", async function(curren : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.entercurren(curren);
});

When("enter Account Class {string}", async function(accntclass : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enteraccntclass(accntclass);
});

When("Click on Fetch", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickfetch();
});

When("click on save in Account generation tab", async function(){
  AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksaveoption();
});

When("enter location {string}", async function(location : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enterlocation(location);
});

When("enter media {string}", async function(media : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.entermedia(media);
});

When("select mode of Operation", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.selectmodeofoperation();
});

When("uncheck ATM checkbox", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickatm();
});

When("click on MIS tab in STDCUSAC", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.ClickMIStab();
});

When("enter Pool Code {string}", async function(poolcode : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enterpoolcode(poolcode);
});
 When("Click on Save button in MIS tab", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.ClickSavebutton();
 });
 
 When("Click on Fields tab", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickfielstab();
 });

 When("enter KDIC-FP-ODS {string}", async function(KDIC : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enterKDICFP(KDIC);
});

When("click on Auxiliary tab", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickauxiliary();
 });

 When("Click on no debit check box", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clicknodebit();
 });

 When("Click on no credit check box", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clicknocredit();
 });

When("Click on Save in UDE fields", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.ClickSavebtn();
 });
 
When("Click on Save", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickonsave();
});

When("Click on Ok", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickonOK();
});
 
When("Click on Accept button", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickaccept();
 });

 When("click on ok button", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickokbutton();
 });

 When("Click on Exit", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickexit();
 });

 When("click enter Query", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.ClickenterQuery();
 });

 When("enter Account number", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enteraccntmuber();
});

When("Click on Execute Query in STDCUSAC", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.ClickexecuteQuery();
 });

 When("click on Authorize", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickauthorize();
 });

 When("Click on Accept1", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickaccept1();
 });

 When("Click on OKButton", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickOkbtn();
 });

 When("click on unlock", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickunlock();
 });

 When("uncheck on no debit check box", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickuncheckdebit();
 });

 When("uncheck on no credit check box", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.Clickuncheckcredit();
 });

 When("get the account number", async function () {
    AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.getAccNumber();
 });

 When("click on Account Signatory tab", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksignatorytab();
 });

 When("click on addrow in signatory details", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickaddrow();
 });

 When("click on search button in customer id", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksearchcustomer();
 });

 When("click on fetch in STDCUSAC", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickfetchSTD();
 });

 When("click on first record", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickfirstrecord();
 });

 When("click on search in STDCUSAC", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksearch();
 });

 When("click on search in signature id", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksignatorysearch();
 });

 When("click on fetch button", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickfetchbutton();
 });

 When("click on save in signatory details", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksavesignatory();
 });

// When("click on Account Signatory tab", async function(){
//    AOPage = await new AccountOpeningPage(fixture.page);
//      await AOPage.clicksignatorytab();
//  });

When("enter the Account number {string}", async function(accnum : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enteraccountnumber(accnum);
});

When("click on close option", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickclose();
 });

When("click on ok for confirm", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clickokconfirm();
 });

 When("enter offset branch {string}", async function(branch : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enteroffsetbranch(branch);
});

When("enter offset account {string}", async function(offsetaccnum : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enteroffsetnumber(offsetaccnum);
});

When("enter close mode {string}", async function(closemode : string){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.enterclosemode(closemode);
});

When("click on save in account closure", async function(){
   AOPage = await new AccountOpeningPage(fixture.page);
     await AOPage.clicksaveclose();
 });