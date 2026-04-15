import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import ForeignExchangePage from "../../pages/ForeignExchangePage"; 
let ForeignPage: ForeignExchangePage;

When("Click on New in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickNewTab();
});

When("enter Reference Number {string}", async function(refnum : string){
   ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.enterRefNum(refnum);
});

When("click on Default Button", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickdefault();
});

When("click on Save in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clicksave();
});

When("click on okbtn in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickok();
});

When("click on exit in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickexit();
});

When("click on enter query in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickenterquery();
});

When("click on execute query in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickexecutequery();
});

When("click on authorize in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickauthorize();
});

When("click on authorize button in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickauthorizebtn();
});

When("click on ok in FXDTRPAY", async function(){
  ForeignPage = await new ForeignExchangePage(fixture.page);
     await ForeignPage.clickokbtn();
});