import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ELCBPage from "../../pages/ExportLCBookingPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

const reusableMethods = new ReusableMethods(fixture.page);
let ExportLC : ELCBPage;


When("user clicks on New ELCB",async function () {
    fixture.logger.info("Clicking New in ExportLC");
     ExportLC = new ELCBPage(fixture.page);
    await ExportLC.handleExportLCFrame();
    await ExportLC.clickNewExLCBooking();
  }
);

When("user enters Product code ELCB as {string}",
  async function (productcodee: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterproductcodee(productcodee);

  });

When("user click P ELCB", async function () {
  await ExportLC.clickPExILCBtab();
});
When("user enters Operation code ELCB as {string}",
  async function (operationcodee: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enteroperationcodee(operationcodee);

  });
  When("user enters Customer ELCB as {string}",
  async function (customere: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.entercustomere(customere);

  });
  When("user enters Contract Amount ELCB as {string}",
  async function (contractamounte: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.entercontractamounte(contractamounte);

  });
  
  When("user enter Credit AVailable with ELCB as {string}",
  async function (creditavailablee: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.entercreditavailablei(creditavailablee);

  });
  When("user enter Expiry Place in ELCB as {string}",
  async function (expiryplacee: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterexpiryplacee(expiryplacee);

  });
  
  
When("get Contract Reference ELCB", async function () {
     ExportLC = new ELCBPage(fixture.page);
       fixture.logger.info("Fetch Contract Reference");
    await ExportLC.getcontrarefn();
});

When('user enters Contract Reference ELCB', async function () {
    fixture.logger.info("Entering contract reference in Import LC Booking Page");
      ExportLC = new ELCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ExportLC.entercontractrefrn();
  });
  When("get Contract Amount ELCB", async function () {
     ExportLC = new ELCBPage(fixture.page);
       fixture.logger.info("Fetch Contract amount");
    await ExportLC.getcontractamtELCB();
});

When('user enters contract amount in ELCB', async function () {
    fixture.logger.info("Entering contract amount in Import LC Booking Page");
      ExportLC = new ELCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ExportLC.entercontractamtELCB();
  });
  When("get Currency ELCB", async function () {
     ExportLC = new ELCBPage(fixture.page);
       fixture.logger.info("Fetch Currency");
    await ExportLC.getcurrencyELCB();
});

When('user enters currency in ELCB', async function () {
    fixture.logger.info("Entering Currency in Import LC Booking Page");
      ExportLC = new ELCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ExportLC.entercurrencyELCB();
  });
  When("get Customer ELCB", async function () {
     ExportLC = new ELCBPage(fixture.page);
       fixture.logger.info("Fetch Customer");
    await ExportLC.getcustomerELCB();
});

When('user enters customer in ELCB', async function () {
    fixture.logger.info("Entering CuStomer in Import LC Booking Page");
      ExportLC = new ELCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ExportLC.entercustomerELCB();
  });


  
   When("clicks on Parties btn in ELCB", async function () {
    await ExportLC.clickparties();
  });
  When("user click on Fields tab ELCB", async function () {
    await ExportLC.clickfields();
  });
  When("user enter security type ELCB as {string}",
  async function (securitytype: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.entersecuritytype(securitytype);

  });
When("user enters party id of APP in ELCB as {string}",
  async function (apppartyid: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterapppartyid(apppartyid);

  });
  When("user enters party id of BEN in ELCB as {string}",
  async function (benpartyid: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterbenpartyid(benpartyid);

  });
  When("user enters party id of ISB in ELCB as {string}",
  async function (isbpartyid: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterisbpartyid(isbpartyid);

  });
  When("user enters customer rfn of APP in ELCB as {string}",
  async function (appcustrfn: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterappcustrfn(appcustrfn);

  });
  When("user enters customer rfn of BEN in ELCB as {string}",
  async function (bencustrfn: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterbencustrfn(bencustrfn);

  });
  When("user enters customer rfn of ISB in ELCB as {string}",
  async function (isbcustrfn: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterisbcustrfn(isbcustrfn);

  });
  
  When("user enters dated of APP in ELCB as {string}",
  async function (appdated: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterappdated(appdated);

  });
  When("user enters dated of BEN in ELCB as {string}",
  async function (bendated: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterbendated(bendated);

  });
  When("user enters dated of ISB in ELCB as {string}",
  async function (isbdated: string) {
    ExportLC = new ELCBPage(fixture.page);
    await ExportLC.enterisbdated(isbdated);

  });
     
  When("clicks on save btn in ELCB", async function () {
    await ExportLC.clicksaveExportLC();
  });
  When("user click on save field ELCB", async function () {
    await ExportLC.clicksaveField();
  });
  
  
  When("clicks on accept in ELCB", async function () {
    await ExportLC.clickacceptelcb();
  });
  

  Then("clicks on OK btn in ELCB", async function () {
    await ExportLC.clickOkbtn();
  });
  When("user clicks on exits ExportLCBookingPage", async function () {
    await ExportLC.clickexit();
  });
  When('user clicks on Enter Query in ELCB', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      ExportLC = new ELCBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ExportLC.clickEnterQuery();
  });
  
  When('User click checkbox for Credit available with', async function() {
    await ExportLC.clickcreditavailable();
  });
  When('User click checkbox for No limit tracking done for the contract ELCB', async function () {
    await ExportLC.clickToggleByNolimit();
  });
  
  When('user clicks on Execute Query in ELCB', async function () {
      await ExportLC.clickExecuteQuery();
  });
  

  When('user clicks on Authorize tab in ELCB', async function () {
     fixture.logger.info("Clicking tab in GS");
    await ExportLC.clickAuthorizetabgs();
  });
  
  When('user clicks on Authorize button in ELCB', async function () {
    fixture.logger.info("Clicking authbtn in ILCB");
    await ExportLC.clickAuthorizebtngs();
  });
  
  When('clicks on OK button in ELCB', async function () {
    fixture.logger.info("Clicking okbtn in ILCB");
    await ExportLC.clickOK();
  });