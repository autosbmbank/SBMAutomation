import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import RTGSBookingCustomerPage from "../../pages/RTGSBookingCustomerPage"; 
let RTGSCustomerPage: RTGSBookingCustomerPage;

When("user click on new tab in PSDOT2CT", async function(){
  RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clicksnewtab();
});

When("Enters the source code {string}",async function(sourcecode : string){
   RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.Entersourcecode(sourcecode);
});

When("Enters the Network code {string}",async function(networkcode : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enternetworkcode(networkcode);
});

When("Enters the Transfer Currency {string}",async function(currency : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.entercurrency(currency);
});

When("Enters the Transfer Amount {string}",async function(amount : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enteramount(amount);
});

When("Enters the Debit Account {string}",async function(account : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enteraccount(account);
});

When("Enters the Creditor Agent Details {string}",async function(creditBICFI : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enterCreditBICFI(creditBICFI);
});

When("Enters the Debitor Agent Details {string}",async function(debitBICFI : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enterDebitBICFI(debitBICFI);
});

When("Enters the Instructed Agent Details {string}",async function(BICFI : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enterBICFI(BICFI);
});
// When("Enters Debitor Details {string}",async function(debitor : string){
//     RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
//      await RTGSCustomerPage.enterdebitor(debitor);
// });
// When("Enters Creditor Details {string}",async function(creditor : string){
//     RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
//      await RTGSCustomerPage.entercreditor(creditor);
// });


;
When("selects the charge bearer in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.selectchargebearer();
})
When("Click on Enrich in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clicksEnrich();
});

When("click on first row in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clicksfirstrow();
});

When("Enters the Creditor Details {string}",async function(name : string){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enterName(name);
});

When("Click on Save option in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickSave();
});

When("Click on ok in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickOK();
});

When("Click on exit button in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickexitbtn();
});

When("click on enter Query tab in PSDOT2CT",async function(){
   RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickenterquerytab();
});

When("enter Transaction Reference No in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.enterreferencenumber();
});

When("Click on Execute Query tab in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickexecutequerytab();
});

When("Click on Authorize tab in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickauthorizetab();
});

When("Click on Authorize button1 in PSDOT2CT",async function(){
   RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickauthorizebutton();
});

When("click on ok button1 in PSDOT2CT",async function(){
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.clickokbtn();
})

When("get the transaction reference number in PSDOT2CT", async function () {
    RTGSCustomerPage = await new RTGSBookingCustomerPage(fixture.page);
     await RTGSCustomerPage.getTransrefNumber();
 });