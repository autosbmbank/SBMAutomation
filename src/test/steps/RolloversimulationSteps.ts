import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import RolloverSimulationPage from "../../pages/RolloversimulationPage"; 
let RolloverPage: RolloverSimulationPage;

When("clicks on New tab1", async function(){
  RolloverPage = await new RolloverSimulationPage(fixture.page);
     await RolloverPage.clicknew();
});

When("enter Account number1 {string}", async function(accountnum : string){
   RolloverPage = await new RolloverSimulationPage(fixture.page);
     await RolloverPage.enteraccountnumb(accountnum);
});

When("Click on p", async function(){
  RolloverPage = await new RolloverSimulationPage(fixture.page);
     await RolloverPage.clickPbutton();
});

When("click on Save option", async function(){
  RolloverPage = await new RolloverSimulationPage(fixture.page);
     await RolloverPage.clicksaveoption();
});

When("click on exit", async function(){
  RolloverPage = await new RolloverSimulationPage(fixture.page);
     await RolloverPage.clickexit();
});