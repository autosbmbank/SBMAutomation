import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import RTGSIncomingPage from "../../pages/RTGSIncomingPage"; 
let RTGSINPage: RTGSIncomingPage;

When("clicks on newtab", async function(){
  RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clicksnewtab();
});

When("enter source code {string}",async function(sourcecode : string){
   RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.entersourcecode(sourcecode);
});

When("enter Network code {string}",async function(networkcode : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enternetworkcode(networkcode);
});

When("enter Transfer Currency {string}",async function(currency : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.entercurrency(currency);
});

When("enter Transfer Amount {string}",async function(amount : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enteramount(amount);
});

When("enter Credit Account {string}",async function(account : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enteraccount(account);
});

When("enter Creditor Agent Details {string}",async function(creditBICFI : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enterCreditBICFI(creditBICFI);
});

When("enter Debitor Agent Details {string}",async function(debitBICFI : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enterDebitBICFI(debitBICFI);
});

When("enter Instructed Agent Details {string}",async function(BICFI : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enterBICFI(BICFI);
});

;
When("selects the charge bearer",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.selectchargebearer();
})
When("Click on Enrich",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clicksEnrich();
});

When("enter Debitor Details {string}",async function(name : string){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enterName(name);
});

When("Click on Save option",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickSave();
});

When("Click on ok",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickOK();
});

When("Click on exit button",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickexitbtn();
});

When("click on enter Query tab",async function(){
   RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickenterquerytab();
});

When("enter Transaction Reference No",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.enterreferencenumber();
});

When("Click on Execute Query tab",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickexecutequerytab();
});

When("Click on Authorize tab",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickauthorizetab();
});

When("Click on Authorize button1",async function(){
   RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickauthorizebutton();
});

When("click on ok button1",async function(){
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.clickokbtn();
})

When("get the transaction reference number", async function () {
    RTGSINPage = await new RTGSIncomingPage(fixture.page);
     await RTGSINPage.getTransrefNumber();
 });