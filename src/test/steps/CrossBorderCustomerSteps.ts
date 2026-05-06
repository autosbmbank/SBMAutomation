import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CrossBorderCustomerPage from "../../pages/CrossBorderCustomerPage"; 
let CustomerPage: CrossBorderCustomerPage;

When("user click on new tab in PSDOCBCT", async function(){
  CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clicksnewtab();
});

When("Enters source code {string}",async function(sourcecode : string){
   CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.Entersourcecode(sourcecode);
});

When("Enters Network code {string}",async function(networkcode : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enternetworkcode(networkcode);
});

When("Enters Transfer Currency {string}",async function(currency : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.entercurrency(currency);
});

When("Enters Transfer Amount {string}",async function(amount : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enteramount(amount);
});

When("Enters Debit Account {string}",async function(account : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enteraccount(account);
});

When("Enters Creditor Agent Details {string}",async function(creditBICFI : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enterCreditBICFI(creditBICFI);
});

When("Enters Debitor Agent Details {string}",async function(debitBICFI : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enterDebitBICFI(debitBICFI);
});

When("Enters Instructed Agent Details {string}",async function(BICFI : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enterBICFI(BICFI);
});
// When("Enters Debitor Details {string}",async function(debitor : string){
//     CustomerPage = await new CrossBorderCustomerPage(fixture.page);
//      await CustomerPage.enterdebitor(debitor);
// });
// When("Enters Creditor Details {string}",async function(creditor : string){
//     CustomerPage = await new CrossBorderCustomerPage(fixture.page);
//      await CustomerPage.entercreditor(creditor);
// });


;
When("selects the charge bearer in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.selectchargebearer();
})
When("Click on Enrich in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clicksEnrich();
});

When("click on first row in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clicksfirstrow();
});

When("Enters Creditor Details {string}",async function(name : string){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enterName(name);
});

When("Click on Save option in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickSave();
});

When("Click on ok in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickOK();
});

When("Click on exit button in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickexitbtn();
});

When("click on enter Query tab in PSDOCBCT",async function(){
   CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickenterquerytab();
});

When("enter Transaction Reference No in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.enterreferencenumber();
});

When("Click on Execute Query tab in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickexecutequerytab();
});

When("Click on Authorize tab in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickauthorizetab();
});

When("Click on Authorize button1 in PSDOCBCT",async function(){
   CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickauthorizebutton();
});

When("click on ok button1 in PSDOCBCT",async function(){
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.clickokbtn();
})

When("get the transaction reference number in PSDOCBCT", async function () {
    CustomerPage = await new CrossBorderCustomerPage(fixture.page);
     await CustomerPage.getTransrefNumber();
 });