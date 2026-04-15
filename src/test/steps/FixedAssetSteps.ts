import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import FixedAssetsPage from "../../pages/FixedAssetsPage"; 
let FixedPage: FixedAssetsPage;

When("clicks on New Tab", async function(){
  FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickNewTab();
});

When("enter Product Code {string}", async function(code : string){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.enterproductcode(code);
});

When("click on p button in FADTRONL", async function(){
  FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickPButton();
});

When("click on Search button", async function(){
  FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clicksearch();
});

When("Enter Category {string}", async function(IFEQ : string){
  FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.entercategory(IFEQ);
});

When("Click on Fetch in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickfetch();
});

When("Select the first record", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.selectrecord();
});

When("enter asset cost {string}", async function(cost : string){
  FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.enterassetcost(cost);
});

When("get the contact reference number", async function () {
    FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.getcontactrefNumber();
 });

 When("enter Description {string}", async function(computer : string){
  FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.enterdescription(computer);
});

When("Click on save in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickSave();
});

When("click on Accept in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickAccept();
});

When("click on OK in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickOK();
});

When("click on exit in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickexit();
});

When("click on enter query in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickenterquery();
});

When("enter contact reference number", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.enterrefnumber();
});

When("click on execute query in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickexecutequery();
});

When("click on authorize in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickauthorize();
});

When("click on authorize button in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickauthorizebth();
});

When("click on ok in FADTRONL", async function(){
   FixedPage = await new FixedAssetsPage(fixture.page);
     await FixedPage.clickonOK();
});
