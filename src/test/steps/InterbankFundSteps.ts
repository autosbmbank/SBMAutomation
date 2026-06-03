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
     await fixture.page.waitForTimeout(2000)
});

When("enter debit amount {string}", async function(Amount : string){
   Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.enteramount(Amount);
     await fixture.page.waitForTimeout(2000)
});

When("enter Credit Account Number {string}", async function(credaccnum : string){
   Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.entercreditaccount(credaccnum);
});

When("click on Submit", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clicksubmit();
});
When("click on Confirm button", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickconfirm();
});


When("Click on OK in bankfund", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickok();
});

When("click on NO in bankfund", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickNO();
});

When("Clik on NO option in bankfund", async function(){
  Fundtransfer = await new InterbankFundPage(fixture.page);
     await Fundtransfer.clickNOoptn();
});
