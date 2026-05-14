import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ILCBPage from "../../pages/ImportLCBookingPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

const reusableMethods = new ReusableMethods(fixture.page);
let ImportLC : ILCBPage;


When("user clicks on New ILCB",async function () {
    fixture.logger.info("Clicking New in ImportLC");
     ImportLC = new ILCBPage(fixture.page);
    await ImportLC.handleImportLCFrame();
    await ImportLC.clickNewLCBooking();
  }
);

When("user enters Product code ILCB as {string}",
  async function (productcodei: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterproductcodei(productcodei);

  });

When("user click P ILCB", async function () {
  await ImportLC.clickPILCBtab();
});
When("user enters Operation code ILCB as {string}",
  async function (operationcodei: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enteroperationcodei(operationcodei);

  });
  When("user enters Customer ILCB as {string}",
  async function (customeri: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.entercustomeri(customeri);

  });
  When("user enters Contract Amount ILCB as {string}",
  async function (contractamounti: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.entercontractamounti(contractamounti);

  });
  When("user selects Units ILCB",async function () {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.selectunits();
    console.log("Units");

  });
  When("user selects Rate Type ILCB",async function () {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.selectratetype();

  });
  When("user selects Profit Method ILCB",async function () {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.selectprofitmethod();

  });
  When("user enters Pool Code ILCB as {string}",
  async function (poolcodei: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterpoolcodei(poolcodei);

  });
  When("user enters Rate Code ILCB as {string}",
  async function (ratecodei: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterratecodei(ratecodei);

  });
  When("user enter Frequency ILCB as {string}",
  async function (frequencyi: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterfrequencyi(frequencyi);

  });
  When("user enter Credit AVailable with ILCB as {string}",
  async function (creditavailablei: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.entercreditavailablei(creditavailablei);

  });
  When("user enter Expiry Place as {string}",
  async function (expiryplacei: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterexpiryplacei(expiryplacei);

  });
  
  
When("get Contract Reference ILCB", async function () {
     ImportLC = new ILCBPage(fixture.page);
       fixture.logger.info("Fetch Contract Reference");
    await ImportLC.getcontrarefn();
});

When('user enters Contract Reference ILCB', async function () {
    fixture.logger.info("Entering contract reference in Import LC Booking Page");
      ImportLC = new ILCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ImportLC.entercontractrefrn();
  });
  When("get Contract Amount ILCB", async function () {
     ImportLC = new ILCBPage(fixture.page);
       fixture.logger.info("Fetch Contract amount");
    await ImportLC.getcontractamtILCB();
});

When('user enters contract amount in ILCB', async function () {
    fixture.logger.info("Entering contract amount in Import LC Booking Page");
      ImportLC = new ILCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ImportLC.entercontractamtILCB();
  });
  When("get Currency ILCB", async function () {
     ImportLC = new ILCBPage(fixture.page);
       fixture.logger.info("Fetch Currency");
    await ImportLC.getcurrencyILCB();
});

When('user enters currency in ILCB', async function () {
    fixture.logger.info("Entering Currency in Import LC Booking Page");
      ImportLC = new ILCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ImportLC.entercurrencyILCB();
  });
  When("get Customer ILCB", async function () {
     ImportLC = new ILCBPage(fixture.page);
       fixture.logger.info("Fetch Customer");
    await ImportLC.getcustomerILCB();
});

When('user enters customer in ILCB', async function () {
    fixture.logger.info("Entering Cuatomer in Import LC Booking Page");
      ImportLC = new ILCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ImportLC.entercustomerILCB();
  });


  
   When("clicks on Parties btn in ILCB", async function () {
    await ImportLC.clickparties();
  });
When("user enters party id of APP in ILCB as {string}",
  async function (apppartyid: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterapppartyid(apppartyid);

  });
  When("user enters party id of BEN in ILCB as {string}",
  async function (benpartyid: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterbenpartyid(benpartyid);

  });
  When("user enters party id of ABK in ILCB as {string}",
  async function (abkpartyid: string) {
    ImportLC = new ILCBPage(fixture.page);
    await ImportLC.enterabkpartyid(abkpartyid);

  });
  
     
  When("clicks on save btn in ILCB", async function () {
    await ImportLC.clicksaveImportLC();
  });
  When("user click on MIS tab ILCB", async function () {
    await ImportLC.clickonMISImportLC();
  });
  When("user click on save MIS ILCB", async function () {
    await ImportLC.clicksaveMISImportLC();
  });
  When("clicks on accept in ILCB", async function () {
    await ImportLC.clickacceptilcb();
  });
  

  Then("clicks on OK btn in ILCB", async function () {
    await ImportLC.clickOkbtn();
  });
  When("user clicks on exits ImportLCBookingPage", async function () {
    await ImportLC.clickexit();
  });
  When('user clicks on Enter Query in ILCB', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      ImportLC = new ILCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ImportLC.clickEnterQuery();
  });
  
  
  
  When('user clicks on Execute Query in ILCB', async function () {
      await ImportLC.clickExecuteQuery();
  });
  

  When('user clicks on Authorize tab in ILCB', async function () {
     fixture.logger.info("Clicking tab in GS");
    await ImportLC.clickAuthorizetabgs();
  });
  
  When('user clicks on Authorize button in ILCB', async function () {
    fixture.logger.info("Clicking authbtn in ILCB");
    await ImportLC.clickAuthorizebtngs();
  });
  
  When('clicks on OK button in ILCB', async function () {
    fixture.logger.info("Clicking okbtn in ILCB");
    await ImportLC.clickOK();
  });