import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import IssueBankersPage from "../../pages/IssueBankersPage"; 
let Walkin: IssueBankersPage;

When("Click on NextGen tab in 8301", async function(){
  Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.NextgenFrame();
});

When("enter the Screen Name {string}", async function(screen : string){
   Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.enterscreen(screen);
});

When("click on down tab in 8301", async function(){
  Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.clickdowntab();
});

When("enter Payee name {string}", async function(name : string){
   Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.enterpayeename(name);
});

When("enter BC Amount {string}", async function(amount : string){
   Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.enterBCAmount(amount);
});

When("enter BC number {string}", async function(BCnum : string){
   Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.enternumber(BCnum);
});

When("click on Funding Details", async function(){
  Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.clickfundingdeatils();
});

When("enter drawer name {string}", async function(drawname : string){
   Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.enterdrawername(drawname);
});

When("click on Denomination", async function(){
  Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.clickdenomination();
});

When("enter the units in bills {string}", async function(units : string){
   Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.enterunits(units);
});

When("click on Submit in 8301", async function(){
  Walkin = await new IssueBankersPage(fixture.page);
     await Walkin.clicksubmit();
});