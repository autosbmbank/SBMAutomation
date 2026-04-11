import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import PrematureClosurePage from "../../pages/PrematureClosurePage"; 
let PreclosePage: PrematureClosurePage;

When("Click on New", async function(){
  PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickNew();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
});

When("enter Term Deposit Account Number {string}",async function(accountnum : string){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.enterTDaccountnum(accountnum);
});

When("Click on Arrow", async function(){
  PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickarrow();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
});

When("Select Redemption mode",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.selectFullRedemption();
});

When("click on Compute",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickcompute();
});

When("click on ok",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickok();
});

When("click on Add row in Payout details",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickaddrow();
});

When("enter Percentage {string}",async function(percen : string){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.enterpercentage(percen);
});

When("enter Amount {string}",async function(amount : string){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.enteramount(amount);
});

When("Enter Offset Account Number {string}",async function(offaccountnum : string){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.enterOffaccountnum(offaccountnum);
});

When("Click on Save1",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickSave();
});

When("Click on accept1",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickaccept();
});

When("click on OK button1",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickokbtn();
});

When("Click on Exit btn2",async function(){
    PreclosePage = await new PrematureClosurePage(fixture.page);
     await PreclosePage.clickexitbtn();
});

