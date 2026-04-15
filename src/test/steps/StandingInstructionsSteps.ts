import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";
import BookTransferPage from "../../pages/StandingInstructionsPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
import StandingInstructionsPage from "../../pages/StandingInstructionsPage";

const reusableMethods = new ReusableMethods(fixture.page);
let StandingInstruction: StandingInstructionsPage;

setDefaultTimeout(timeout);

When("user clicks on Newtab",async function () {
    fixture.logger.info("Clicking New in Standing Instructions");
     StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.handleStandingInstructionFrame();
    await StandingInstruction.clickNewtab();
  }
);

When("user enters Product Code as {string}",
  async function (Productcodes: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterproductcodes(Productcodes);

  });

When("user click on P button", async function () {
  await StandingInstruction.clickonP();
});

When("user enters Debit account branch as {string}",
  async function (debitaccountbranch: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterdebitaccountbrn(debitaccountbranch);

  });
  When("user enters debit account as {string}",
  async function (debitaccount: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterdebitaccount(debitaccount);

  });
   When("user enters SI amount as {string}",
  async function (siamount: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.entersiamount(siamount);

  });
  When("user enters Credit account branch as {string}",
  async function (creditbranch: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.entercreditbranch(creditbranch);

  });
  When("user enters credit account as {string}",
  async function (creditaccount: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.entercreditaccount(creditaccount);

  });
  When("user enters Number of Installments as {string}",
  async function (Installments: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterInstallments(Installments);

  });
  When("user enters Retry count for Advice as {string}",
  async function (retrycount: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterretrycount(retrycount);

  });
  When("click on Enrich tab", async function () {
    await StandingInstruction.clickEnrich();
  });
  When("click on MIS tab", async function () {
    await StandingInstruction.clickonMIS();
  });
  When("user enters Rate Type as {string}",
  async function (ratetype: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await this.page.click('#dropdown');
    await this.page.click(`text=${"Floating Automatic"}`);
    await this.click();
    await StandingInstruction.enterratetype(ratetype);

  });
  When("user enters Profit Method as {string}",
  async function (profitmethod: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterprofitmethod(profitmethod);

  });
  When("user enters Pool Code as {string}",
  async function (poolcode: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterpoolcode(poolcode);

  });
  When("user enters Rate Code as {string}",
  async function (ratecode: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterratecode(ratecode);

  });