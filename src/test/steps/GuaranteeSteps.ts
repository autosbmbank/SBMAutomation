import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import GSPage from "../../pages/GuaranteePage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import GuaranteePage from "../../pages/GuaranteePage";


const reusableMethods = new ReusableMethods(fixture.page);
let Guarantee : GSPage;


When("user clicks on New GS",async function () {
    fixture.logger.info("Clicking New in Guarantee");
     Guarantee = new GSPage(fixture.page);
    await Guarantee.handleGuaranteeFrame();
    await Guarantee.clickNewGuarantee();
  }
);

When("user enters Product code GS as {string}",
  async function (productcodeg: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.enterproductcodeg(productcodeg);

  });

When("user click P GS", async function () {
  await Guarantee.clickPGStab();
});
When("user enters Operation code GS as {string}",
  async function (operationcodeg: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.enteroperationcodeg(operationcodeg);

  });
  When("user enters Customer GS as {string}",
  async function (customerg: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.entercustomerg(customerg);

  });
  When("user enters Contract Amount GS as {string}",
  async function (contractamountg: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.entercontractamountg(contractamountg);

  });
  When("user selects Purpose of Guarantee GS",async function () {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.selectpurposeg();

  });
  When("user selects Expiry Type GS",async function () {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.selectexpirytype();

  });
//   When('user selects Purpose of Guarantee Amount GS {string}', async function (Issue: string) {
//   await this.pageObject.selectpurposegs('Purpose of Guarantee Amount GS', Issue);
// });

When('user selects Expiry Type GS {string}', async function (Fixed: string) {
  await this.pageObject.selectexpirytypegs('Expiry Type GS', Fixed);
});
  When("clicks on Default btn in GS", async function () {
  await Guarantee.clicDefaulttab();
});
 When("clicks on Accept btn in GS", async function () {
    await Guarantee.clickacceptmain();
  });
  When("clicks on OK in Main GS", async function () {
    await Guarantee.clickOkmain();
  });
  When("clicks on Parties btn in GS", async function () {
    await Guarantee.clickparties();
  });
When("user enters party id of APP in Parties as {string}",
  async function (apppartyid: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.enterapppartyid(apppartyid);

  });
  When("user enters party id of BEN in Parties as {string}",
  async function (benpartyid: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.enterbenpartyid(benpartyid);

  });
  When("clicks on Terms& Conditions btn in GS", async function () {
    await Guarantee.clicktermandcon();
  });
  When("clicks on + btn in GS", async function () {
    await Guarantee.clickplus();
  });
  When("user enters Terms& Conditions in GS as {string}",
  async function (termandcond: string) {
    Guarantee = new GSPage(fixture.page);
    await Guarantee.entertermandcond(termandcond);

  });
    
  When("clicks on save btn in GS", async function () {
    await Guarantee.clicksaveguarantee();
  });
  When("clicks on accept in GS", async function () {
    await Guarantee.clickacceptgs();
  });
 

  Then("clicks on OK btn in GS", async function () {
    await Guarantee.clickOk();
  });
  When("user clicks on exits GuaranteePage", async function () {
    await Guarantee.clickexit();
  });
  When('user clicks on Enter Query in GS', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      Guarantee = new GSPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await Guarantee.clickEnterQuery();
  });
  When("get Contract Reference GS", async function () {
     Guarantee = new GSPage(fixture.page);
       fixture.logger.info("Fetch Contract Reference");
    await Guarantee.getcontrarefn();
});
  
  
  When('user enters Contract Reference GS', async function () {
    fixture.logger.info("Entering contract reference in Guarantee Page");
      Guarantee = new GSPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await Guarantee.entercontractrefrn();
  });
  When('user enters currency in GS as {string}', async function (currencygs: string) {
    fixture.logger.info("Entering currency in Guarantee Page");
      Guarantee = new GSPage(fixture.page);
      await Guarantee.entercurrencygs(currencygs);
  });
  When('user enters contract amount in GS as {string}', async function (contractamountgs: string) {
    fixture.logger.info("Entering contract amount in Guarantee Page");
      Guarantee = new GSPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await Guarantee.entercontractamountgs(contractamountgs);
  });
  When('user enters customer in GS as {string}', async function (customeridgs: string) {
    fixture.logger.info("Entering customer in Guarantee Page");
      Guarantee = new GSPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await Guarantee.entercustomeridgs(customeridgs);
  });
  
  
  When('user clicks on Execute Query in GS', async function () {
      await Guarantee.clickExecuteQuery();
  });
  When('User click checkbox for Guarantee type is not input', async function() {
  await Guarantee.clickToggleByNolimit();
});
When('User click checkbox for No limit tracking done for the contract', async function () {
  await Guarantee.clickToggleByGtype();
});
  When('user clicks on Authorize tab in GS', async function () {
     fixture.logger.info("Clicking tab in GS");
    await Guarantee.clickAuthorizetabgs();
  });
  
  When('user clicks on Authorize button in GS', async function () {
    fixture.logger.info("Clicking authbtn in GS");
    await Guarantee.clickAuthorizebtngs();
  });
  
  When('clicks on OK button in GS', async function () {
    fixture.logger.info("Clicking okbtn in GS");
    await Guarantee.clickOK();
  });