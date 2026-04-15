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
  When("clicks on accept in GA", async function () {
    await GuaranteeAmendment.clickacceptamend();
  });

  Then("clicks on OK btn in GA", async function () {
    await GuaranteeAmendment.clickOk();
  });
  When("user clicks on exits GuaranteeAmendmentPage", async function () {
    await GuaranteeAmendment.clickexit();
  });
  When('user clicks on Enter Query in GA', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.clickEnterQuery();
  });
  
  When('user enters Amendment Number in GA as', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      GuaranteeAmendment = new GAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await GuaranteeAmendment.clickAmendnumber();
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
  
  