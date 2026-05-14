import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import GAPage from "../../pages/GuaranteeAmendmentpage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";


const reusableMethods = new ReusableMethods(fixture.page);
let GuaranteeAmendment : GAPage;


When("user clicks on New GA",async function () {
    fixture.logger.info("Clicking New in GuaranteeAmendment");
     GuaranteeAmendment = new GAPage(fixture.page);
    await GuaranteeAmendment.handleGuaranteeAmendmentFrame();
    await GuaranteeAmendment.clickNewamend();
  }
);

  
  When("get Amendment Number in GA", async function () {
       GuaranteeAmendment = new GAPage(fixture.page);
         fixture.logger.info("Fetch Amendment Number");
      await GuaranteeAmendment.getAmendno();
  });
  When("get Currency in GA", async function () {
       GuaranteeAmendment = new GAPage(fixture.page);
         fixture.logger.info("Fetch Currency");
      await GuaranteeAmendment.getcurrencyga();
  });
  When("get Customer in GA", async function () {
       GuaranteeAmendment = new GAPage(fixture.page);
         fixture.logger.info("Fetch Customer");
      await GuaranteeAmendment.getcustomerga();
  });
  When("get Contract Amount in GA", async function () {
       GuaranteeAmendment = new GAPage(fixture.page);
         fixture.logger.info("Fetch Contract Amount");
      await GuaranteeAmendment.getcontractamountga();
  });

When("user enters Contract Reference GA as {string}",
  async function (Contrarefn: string) {
    GuaranteeAmendment = new GAPage(fixture.page);
    await GuaranteeAmendment.entercontractreference(Contrarefn);

  });

When("user click P GA", async function () {
  await GuaranteeAmendment.clickPGAtab();
});
    
  When("clicks on save btn in GA", async function () {
    await GuaranteeAmendment.clicksaveamend();
  });
  When("click on Parties in GA", async function () {
    await GuaranteeAmendment.clickpartiesamend();
  });
  When("clicks on accept in GA", async function () {
    await GuaranteeAmendment.clickacceptamend();
  });

  Then("clicks on OK btn in GA", async function () {
    await GuaranteeAmendment.clickOkbtn();
  });
  When("user clicks on exits GuaranteeAmendmentPage", async function () {
    await GuaranteeAmendment.clickexit();
  });
  When('user clicks on Enter Query in GA', async function () {
    
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.clickEnterQuery();
  });
  
  When('user enters Amendment Number in GA', async function () {
    fixture.logger.info("Amend Number");
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.enterAmendnumber();
  });
  When('user enters Currency in GA', async function () {
    fixture.logger.info("Currency");
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.entercurrencyga();
  });
  When('user enters Customer in GA', async function () {
    fixture.logger.info("Cuatomer");
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.entercustomerga();
  });
  When('user enters Contract amount in GA', async function () {
    fixture.logger.info("Contract Amount");
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.enterontractamountga();
  });
  
  
  When('user clicks on Execute Query in GA', async function () {
      await GuaranteeAmendment.clickExecuteQuery();
  });
  When('user clicks on Authorize tab in GA', async function () {
     fixture.logger.info("Clicking tab in GA");
    await GuaranteeAmendment.clickAuthorizetab();
  });
  
  When('user clicks on Authorize button in GA', async function () {
    fixture.logger.info("Clicking authbtn in GA");
    await GuaranteeAmendment.clickAuthorizebtn();
  });
  Then("clicks on OK button in GA", async function () {
    await GuaranteeAmendment.clickOK();
  });
  
  