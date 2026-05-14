import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import SecuritiesMaintenancePage from "../../pages/SecuritiesMaintenancePage"; 
let SAMPage: SecuritiesMaintenancePage;

When("click on enter query in SEDXREDF", async function(){
  SAMPage = await new SecuritiesMaintenancePage(fixture.page);
     await SAMPage.clickenterquery();
});

When("enter Internal Action {string}", async function(id : string){
   SAMPage = await new SecuritiesMaintenancePage(fixture.page);
     await SAMPage.enteractionid(id);
});

When("click on Execute Query in SEDXREDF", async function(){
  SAMPage = await new SecuritiesMaintenancePage(fixture.page);
     await SAMPage.clickexecutequery();
});