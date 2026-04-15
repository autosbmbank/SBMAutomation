import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LCAPage from "../../pages/LCAvailmentPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";


const reusableMethods = new ReusableMethods(fixture.page);
let LCAvailment: LCAPage;


When("user clicks on New LCA",async function () {
    fixture.logger.info("Clicking New in LCAvailment");
     LCAvailment = new LCAPage(fixture.page);
    await LCAvailment.handleLCAvailmentsFrame();
    await LCAvailment.clickNewavail();
  }
);

When("user enters Contract Reference LCA as {string}",
  async function (Contrarfn: string) {
    LCAvailment = new LCAPage(fixture.page);
    await LCAvailment.entercontrareference(Contrarfn);

  });
  When("get Currency LCA",async function () {
    LCAvailment = new LCAPage(fixture.page);
    fixture.logger.info("Fetch Currency");
        await LCAvailment.getcurrencyLCA();

  });
  When('user enters Currency LCA', async function () {
      fixture.logger.info("Entering Currency in LC Availment Page");
        LCAvailment = new LCAPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAvailment.entercurrencyLCA();
    });
When("get Contract amount LCA",async function () {
    LCAvailment = new LCAPage(fixture.page);
    
    fixture.logger.info("Fetch Contract amount");
        await LCAvailment.getcontractamountLCA();

  });
  When('user enters Contract amount LCA', async function () {
      fixture.logger.info("Entering Contract amount in LC Availment Page");
        LCAvailment = new LCAPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAvailment.entercontractamountLCA();
    });
    When("get customer LCA",async function () {
    LCAvailment = new LCAPage(fixture.page);
    
    fixture.logger.info("Fetch customer");
        await LCAvailment.getcustomerLCA();

  });
  When('user enters customer LCA', async function () {
      fixture.logger.info("Entering customer in LC Availment Page");
        LCAvailment = new LCAPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAvailment.entercustomerLCA();
    });
When("user click P LCA", async function () {
  await LCAvailment.clickPCtab();
});

When("user enters Availment amount LCA as {string}",
  async function (Availamount: string) {
    LCAvailment = new LCAPage(fixture.page);
    await LCAvailment.enterAvailmentamount(Availamount);

  });
    
  When("clicks on save btn LCA", async function () {
    await LCAvailment.clicksaveavail();
  });

  Then("clicks on OK btn LCA", async function () {
    await LCAvailment.clickOk();
  });
  When('user clicks on Enter Query in LCA', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      LCAvailment = new LCAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await LCAvailment.clickEnterQuery();
  });
  
  
  
  When('user clicks on Execute Query in LCA', async function () {
      await LCAvailment.clickExecuteQuery();
  });
  When('user clicks on Authorize tab in LCA', async function () {
     fixture.logger.info("Clicking tab in LCA");
    await LCAvailment.clickAuthorizetab();
  });
  
  When('user clicks on Authorize button in LCA', async function () {
    fixture.logger.info("Clicking authbtn in LCA");
    await LCAvailment.clickAuthorizebtn();
  });
  
  