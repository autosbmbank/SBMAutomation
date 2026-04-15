import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LCPage from "../../pages/LiabilityCreationPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import LiabilityCreationPage from "../../pages/LiabilityCreationPage";


const reusableMethods = new ReusableMethods(fixture.page);
let Liabilitycreation : LCPage;


When("user clicks on New LC",async function () {
    fixture.logger.info("Clicking New in Liabilitycreation");
     Liabilitycreation = new LCPage(fixture.page);
    await Liabilitycreation.handleLiabilitycreationFrame();
    await Liabilitycreation.clickNewliab();
  }
);

When("user enters Liability No LC as {string}",
  async function (liabilityno: string) {
    Liabilitycreation = new LCPage(fixture.page);
    await Liabilitycreation.enterliabilityno(liabilityno);

  });
  When("user enters Liability Name in LC as {string}",
  async function (liabilityname: string) {
    Liabilitycreation = new LCPage(fixture.page);
    await Liabilitycreation.enterliabilityname(liabilityname);

  });

When("user click P GA", async function () {
  await Liabilitycreation.clickPLCtab();
});
    
  When("clicks on save btn in LC", async function () {
    await Liabilitycreation.clicksaveliab();
  });
 

  Then("clicks on OK btn in LC", async function () {
    await Liabilitycreation.clickOkLC();
  });
  When("user clicks on exits LiabilitycreationPage", async function () {
    await Liabilitycreation.clickexitLC();
  });
  
  When('user clicks on Enter Query in LC', async function () {
    fixture.logger.info("Clicking Enter Query in Liability Creation");
      Liabilitycreation = new LCPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await Liabilitycreation.clickEnterQueryLC();
  });
  
 /* When('user enters Liability Number', async function () {
    // fixture.logger.info("Clicking New in Book Transfer");
      Liabilitycreation = new LCPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await Liabilitycreation.enterliabno();
  }); */
  
  
  When('user clicks on Execute Query in LC', async function () {
      await Liabilitycreation.clickExecuteQueryLC();
  });
  When('user clicks on Authorize tab in LC', async function () {
     fixture.logger.info("Clicking tab in LC");
    await Liabilitycreation.clickAuthorizetabLC();
  });

  
  When('user clicks on Authorize button in LC', async function () {
    fixture.logger.info("Clicking authbtn in LC");
    await Liabilitycreation.clickAuthorizebtnLC();
  });
  
  Then("clicks on OK button in LC", async function () {
    await Liabilitycreation.clickOkbtnLC();
  });
 
  
  