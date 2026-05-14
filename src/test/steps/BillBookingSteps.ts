import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import BBPage from "../../pages/BillBookingPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

const reusableMethods = new ReusableMethods(fixture.page);
let BillBooking : BBPage;


When("user clicks on New BB",async function () {
    fixture.logger.info("Clicking New in BillBooking");
     BillBooking = new BBPage(fixture.page);
    await BillBooking.clickNewExLCBooking();
  }
);

When("user enters Product code BB as {string}",
  async function (productcodee: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterproductcodeb(productcodee);

  });

  When("user enters Customer Id BB as {string}",
  async function (customere: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.entercustomerb(customere);

  });
  When("user enters Amount BB as {string}",
  async function (contractamounte: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enteramountb(contractamounte);

  });
  
  
When("get Contract Reference BB", async function () {
     BillBooking = new BBPage(fixture.page);
       fixture.logger.info("Fetch Contract Reference");
    await BillBooking.getcontrarefn();
});

When('user enters Contract Reference BB', async function () {
    fixture.logger.info("Entering contract reference in Import LC Booking Page");
      BillBooking = new BBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await BillBooking.entercontractrefrn();
  });
  When("get Amount BB", async function () {
     BillBooking = new BBPage(fixture.page);
       fixture.logger.info("Fetch Contract amount");
    await BillBooking.getcontractamtBB();
});

When('user enters amount in BB', async function () {
    fixture.logger.info("Entering contract amount in Import LC Booking Page");
      BillBooking = new BBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await BillBooking.entercontractamtBB();
  });
  When("get Currency BB", async function () {
     BillBooking = new BBPage(fixture.page);
       fixture.logger.info("Fetch Currency");
    await BillBooking.getcurrencyBB();
});

When('user enters currency in BB', async function () {
    fixture.logger.info("Entering Currency in Import LC Booking Page");
      BillBooking = new BBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await BillBooking.entercurrencyBB();
  });
  When("get Customer Id BB", async function () {
     BillBooking = new BBPage(fixture.page);
       fixture.logger.info("Fetch Customer");
    await BillBooking.getcustomerBB();
});

When('user enters customer Id in BB', async function () {
    fixture.logger.info("Entering CuStomer in Import LC Booking Page");
      BillBooking = new BBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await BillBooking.entercustomerBB();
  });


  
   When("clicks on Parties btn in BB", async function () {
    await BillBooking.clickparties();
  });
When("user enters party id of Drawee in BB as {string}",
  async function (draweepartyid: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterdraweepartyid(draweepartyid);

  });
  When("user enters party id of Drawer in BB as {string}",
  async function (drawerpartyid: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterdrawerpartyid(drawerpartyid);

  });
  When("user enters party id of Remitting bank in BB as {string}",
  async function (remittingbankpartyid: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterremittingbankpartyid(remittingbankpartyid);

  });
  When("user enters rfn of Drawee in BB as {string}",
  async function (draweerfn: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterdraweerfn(draweerfn);

  });
  When("user enters rfn of Drawer in BB as {string}",
  async function (drawerrfn: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterdrawerrfn(drawerrfn);

  });
  When("user enters rfn of Remitting bank in BB as {string}",
  async function (remittingbankrfn: string) {
    BillBooking = new BBPage(fixture.page);
    await BillBooking.enterremittingbankrfn(remittingbankrfn);

  });
  
      
  When("clicks on save btn in BB", async function () {
    await BillBooking.clicksaveBillBooking();
  });
  When("clicks on ok btn in BB", async function () {
    await BillBooking.clickOkbtn();
  });
  
  
  When("clicks on accept in BB", async function () {
    await BillBooking.clickacceptBB();
  });
  

    When("user clicks on exits BillBookingPage", async function () {
    await BillBooking.clickexit();
  });
  When('user clicks on Enter Query in BB', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      BillBooking = new BBPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await BillBooking.clickEnterQuery();
  });
  
  
  
  When('user clicks on Execute Query in BB', async function () {
      await BillBooking.clickExecuteQuery();
  });
  

  When('user clicks on Authorize tab in BB', async function () {
     fixture.logger.info("Clicking tab in GS");
    await BillBooking.clickAuthorizetab();
  });
  
  When('user clicks on Authorize button in BB', async function () {
    fixture.logger.info("Clicking authbtn in ILCB");
    await BillBooking.clickAuthorizebtn();
  });
  
  When('clicks on OK button in BB', async function () {
    fixture.logger.info("Clicking okbtn in ILCB");
    await BillBooking.clickOK();
  });