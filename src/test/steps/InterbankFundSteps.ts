import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import InterbankFundPage from "../../pages/InterbankFundPage"; 
let Fundtransfer: InterbankFundPage;

When("Click on NextGen tab", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.NextgenFrame();
});

When("enter the Screen name {string}", async function(screen : string){
   Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.enterscreen(screen);
});

When("click on down tab", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickdowntab();
});

When("enter Debit Account Number {string}", async function(accnum : string){
   Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.enterdebtaccount(accnum);
});

When("enter amount {string}", async function(amount : string){
   Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.enteramount(amount);
});

When("enter Credit Account Number {string}", async function(credaccnum : string){
   Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.entercreditaccount(credaccnum);
});

When("click on Submit", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clicksubmit();
});

When("Click on OK", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickok();
});

When("click on NO", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickNO();
});

When("Clik on NO option", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickNOoptn();
});