import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LCATPage from "../../pages/LCAmendmentPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";


const reusableMethods = new ReusableMethods(fixture.page);
let LCAmendment: LCATPage;


When("user clicks on New LCAT",async function () {
    fixture.logger.info("Clicking New in LCAmendment");
     LCAmendment = new LCATPage(fixture.page);
    //await LCAmendment.handleLCAmendmentFrame();
    await LCAmendment.clickNewamend();
  }
);

When("user enters Contract Reference LCAT as {string}",
  async function (Contrarfn: string) {
    LCAmendment = new LCATPage(fixture.page);
    await LCAmendment.entercontrareference(Contrarfn);

  });
  When("get Currency LCAT",async function () {
    LCAmendment = new LCATPage(fixture.page);
    fixture.logger.info("Fetch Currency");
        await LCAmendment.getcurrencyLCA();

  });
  When("get Amendment Number in LCAT", async function () {
         LCAmendment = new LCATPage(fixture.page);
           fixture.logger.info("Fetch Amendment Number");
        await LCAmendment.getAmendno();
    });
  When('user enters Amendment Number in LCAT', async function () {
      fixture.logger.info("Amend Number");
        LCAmendment = new LCATPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAmendment.enterAmendnumber();
    });
  When('user enters Currency LCAT', async function () {
      fixture.logger.info("Entering Currency in LC Availment Page");
        LCAmendment = new LCATPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAmendment.entercurrencyLCA();
    });
When("get Contract amount LCAT",async function () {
    LCAmendment = new LCATPage(fixture.page);
    
    fixture.logger.info("Fetch Contract amount");
        await LCAmendment.getcontractamountLCA();

  });
  When('user enters Contract amount LCAT', async function () {
      fixture.logger.info("Entering Contract amount in LC Availment Page");
        LCAmendment = new LCATPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAmendment.entercontractamountLCA();
    });
    When("get customer LCAT",async function () {
    LCAmendment = new LCATPage(fixture.page);
    
    fixture.logger.info("Fetch customer");
        await LCAmendment.getcustomerLCA();

  });
  When('user enters customer LCAT', async function () {
      fixture.logger.info("Entering customer in LC Availment Page");
        LCAmendment = new LCATPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LCAmendment.entercustomerLCA();
    });
When("user click P LCAT", async function () {
  await LCAmendment.clickPCtab();
});
When("user clicks on parties LCAT", async function () {
  await LCAmendment.clickparties();
});
When("user click on Fields tab LCAT", async function () {
    await LCAmendment.clickfields();
  });
  When("clicks on accept in LCAT", async function () {
      await LCAmendment.clickacceptlcat();
    });
  When("user enter security type LCAT as {string}",
  async function (securitytype: string) {
    LCAmendment = new LCATPage(fixture.page);
    await LCAmendment.entersecuritytype(securitytype);

  });
  When("user click on save field LCAT", async function () {
    await LCAmendment.clicksaveField();
  });
    
  When("clicks on save btn LCAT", async function () {
    await LCAmendment.clicksaveavail();
  });
  When("user exits LCAmendmentPage", async function () {
    await LCAmendment.clickexitavail();
  });
  When("user exits Authr LCAmendmentPage", async function () {
    await LCAmendment.clickexitavail();
  });

  Then("clicks on OK btn LCAT", async function () {
    await LCAmendment.clickOkbtn();
  });
  Then("clicks on OK button in LCAT", async function () {
    await LCAmendment.clickOK();
  });
  When('user clicks on Enter Query in LCAT', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      LCAmendment = new LCATPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await LCAmendment.clickEnterQuery();
  });
  
  
  
  When('user clicks on Execute Query in LCAT', async function () {
      await LCAmendment.clickExecuteQuery();
  });
  When('user clicks on Authorize tab in LCAT', async function () {
     fixture.logger.info("Clicking tab in LCAT");
    await LCAmendment.clickAuthorizetab();
  });
  
  When('user clicks on Authorize button in LCAT', async function () {
    fixture.logger.info("Clicking authbtn in LCA");
    await LCAmendment.clickAuthorizebtn();
  });
  
  