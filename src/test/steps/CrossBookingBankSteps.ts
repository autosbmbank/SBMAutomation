import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CrossBookingBankPage from "../../pages/CrossBookingBankPage"; 
let CrossPage: CrossBookingBankPage;

When("user click on new tab in PSDOCBBT", async function(){
  CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clicksnewtab();
});

When("enters source code {string}",async function(sourcecode : string){
   CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.entersourcecode(sourcecode);
});

When("enters Network code {string}",async function(networkcode : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enternetworkcode(networkcode);
});

When("enters Transfer Currency {string}",async function(currency : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.entercurrency(currency);
});

When("enters Transfer Amount {string}",async function(amount : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enteramount(amount);
});

When("enters Debit Account {string}",async function(account : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enteraccount(account);
});

When("enters Creditor Agent Details {string}",async function(creditBICFI : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enterCreditBICFI(creditBICFI);
});

When("enters Debitor Agent Details {string}",async function(debitBICFI : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enterDebitBICFI(debitBICFI);
});

When("enters Instructed Agent Details {string}",async function(BICFI : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enterBICFI(BICFI);
});
When("enters Debitor Details {string}",async function(debitor : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enterdebitor(debitor);
});
When("enters Creditor Details {string}",async function(creditor : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.entercreditor(creditor);
});


;
When("selects the charge bearer",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.selectchargebearer();
})
When("Click on Enrich in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clicksEnrich();
});

When("click on first row in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clicksfirstrow();
});

When("enter Debitor Details {string}",async function(name : string){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enterName(name);
});

When("Click on Save option in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickSave();
});

When("Click on ok in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickOK();
});

When("Click on exit button in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickexitbtn();
});

When("click on enter Query tab in PSDOCBBT",async function(){
   CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickenterquerytab();
});

When("enter Transaction Reference No in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.enterreferencenumber();
});

When("Click on Execute Query tab in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickexecutequerytab();
});

When("Click on Authorize tab in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickauthorizetab();
});

When("Click on Authorize button1 in PSDOCBBT",async function(){
   CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickauthorizebutton();
});

When("click on ok button1 in PSDOCBBT",async function(){
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.clickokbtn();
})

When("get the transaction reference number in PSDOCBBT", async function () {
    CrossPage = await new CrossBookingBankPage(fixture.page);
     await CrossPage.getTransrefNumber();
 });