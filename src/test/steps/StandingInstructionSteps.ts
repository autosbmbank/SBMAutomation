import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";
import CloseSIPage from "../../pages/StandingInstructionPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";

const reusableMethods = new ReusableMethods(fixture.page);
let CloseSI: CloseSIPage;

setDefaultTimeout(timeout);

When("user clicks on Newtab CSI",async function () {
    fixture.logger.info("Clicking New in Standing Instructions");
     CloseSI = new CloseSIPage(fixture.page);
        await CloseSI.clickNewtab();
  }
);

When("user enters Product Code CSI as {string}",
  async function (Productcodes: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.enterproductcodecs(Productcodes);

  });

When("user click on P button CSI", async function () {
  await CloseSI.clickonP();
});

When("user enters Debit account branch CSI as {string}",
  async function (debitaccountbranch: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.enterdebitaccountbrn(debitaccountbranch);

  });
  When("user enters debit account CSI as {string}",
  async function (debitaccount: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.enterdebitaccount(debitaccount);

  });
   When("user enters SI amount CSI as {string}",
  async function (siamount: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.entersiamount(siamount);

  });
  When("user get Instrument Number CSI", async function () {
     CloseSI = new CloseSIPage(fixture.page);
       fixture.logger.info("Fetch Contract Reference");
    await CloseSI.getInstrnumber();
});
When("user get Currency CSI", async function () {
     CloseSI = new CloseSIPage(fixture.page);
       fixture.logger.info("Fetch Currency");
    await CloseSI.getCurrency();
});
When("user get SI amount CSI", async function () {
     CloseSI = new CloseSIPage(fixture.page);
       fixture.logger.info("Fetch Currency");
    await CloseSI.getsiamount();
});

When('user enter Instrument Number CSI', async function () {
    fixture.logger.info("Entering contract reference in Guarantee Page");
      CloseSI = new CloseSIPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await CloseSI.enterInstrnumber();
  });
  When('user enter Currency CSI', async function () {
    fixture.logger.info("Entering Currency");
      CloseSI = new CloseSIPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await CloseSI.enterCurrency();
  });
  When('user enter SI amount CSI', async function () {
    fixture.logger.info("Entering SI Amount");
      CloseSI = new CloseSIPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await CloseSI.entersiamt();
  });
  When("user enters Credit account branch CSI as {string}",
  async function (creditbranch: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.entercreditbranch(creditbranch);

  });
  When("user enters credit account CSI as {string}",
  async function (creditaccount: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.entercreditaccount(creditaccount);

  });
  When("user enters Number of Installments CSI as {string}",
  async function (Installments: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.enterInstallments(Installments);

  });
  When("user enters Retry count for Advice CSI as {string}",
  async function (retrycount: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.enterretrycount(retrycount);

  });
  When("user enters MIS Group CSI as {string}",
  async function (misgroup: string) {
    CloseSI = new CloseSIPage(fixture.page);
    await CloseSI.entermisgroup(misgroup);

  });
  When("click on Enrich tab CSI", async function () {
    await CloseSI.clickEnrich();
  });
  When("click on MIS tab CSI", async function () {
    await CloseSI.clickonMIS();
  });
   When("click on accept CSI", async function () {
    await CloseSI.clickonaccept();
  });
  When("click on accept MIS CSI", async function () {
    await CloseSI.clickonacceptMIS();
  });
  
  When("clicks on save MIS button CSI", async function () {
    await CloseSI.clickonsaveMIS();
  });
  When("clicks on save button CSI", async function () {
    await CloseSI.clicksave();
  });
  When("user exits CloseStandingInstructionPage CSI", async function () {
    await CloseSI.clickexit();
  });
  When("clicks on OK btn CSI", async function () {
    await CloseSI.clickokbtn();
  });
  When('user clicks on Enter Query CSI', async function () {
      fixture.logger.info("Clicking New in Book Transfer");
        CloseSI = new CloseSIPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await CloseSI.clickEnterQuery();
    });
       
       
    When('user clicks on Execute Query CSI', async function () {
        await CloseSI.clickExecuteQuery();
    });
    
  
    When('user clicks on Authorize tab CSI', async function () {
       fixture.logger.info("Clicking tab in GS");
      await CloseSI.clickAuthorizetabgs();
    });
    
    When('user clicks on Authorize button CSI', async function () {
      fixture.logger.info("Clicking authbtn in ILCB");
      await CloseSI.clickAuthorizebtngs();
    });
    When("clicks on OK button CSI", async function () {
    await CloseSI.clickOK();
  });