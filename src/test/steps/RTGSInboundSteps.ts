import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";
import RTGSPage from "../../pages/RTGSInboundPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";


const reusableMethods = new ReusableMethods(fixture.page);
let rtgs: RTGSPage;

setDefaultTimeout(timeout);



When("user clicks on New tab", async function () {
  fixture.logger.info("Clicking New in RTGS");
  rtgs = new RTGSPage(fixture.page);
  await rtgs.handleRTGSInboundFrame();
  await rtgs.clickNew();
});

When("user enters Source Code as {string}", async function (SourceCode: string) {
  rtgs = new RTGSPage(fixture.page);
  await rtgs.enterSourceCode(SourceCode);
});


When("user enters Network code as {string}", async function (NetworkCode: string) {
  await rtgs.enterNetworkCode(NetworkCode);
});

When("user enters transfer currency as {string}", async function (TransferCurrency: string) {
  await rtgs.enterTransferCurrency(TransferCurrency);
});

When("user enters transfer amount as {string}", async function (TransferAmount: string) {
  await rtgs.enterTransferAmount(TransferAmount);
});

When("user enters credit account number as {string}", async function (CreditAccount: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterCreditAccount(CreditAccount);

});
When("get Transact reference Number RTGSIN", async function () {
     rtgs = new RTGSPage(fixture.page);
       fixture.logger.info("Fetch Contract Reference");
    await rtgs.gettransrefn();
});

When('enters Transact reference Number RTGSIN', async function () {
    fixture.logger.info("Entering contract reference in Guarantee Page");
      rtgs = new RTGSPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await rtgs.entertransactrefrn();
  });

/*When("user enter credit account currency as {string}", async function (CreditCurrency: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterCreditAccountCurrency(CreditCurrency);
});

When("user enter credit account branch as {string}", async function (CreditBranch: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterCreditAccountBranch(CreditBranch);
});

When("user enter credit amount as {string}", async function (CreditAmount: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterCreditAmount(CreditAmount);
});

When("user enter debit account as {string}", async function (DebitAccount: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterDebitAccount(DebitAccount);
});

When("user enter debit account currency as {string}", async function (DebitCurrency: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterDebitAccountCurrency(DebitCurrency);
});

When("user enter debit account branch as {string}", async function (DebitBranch: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterDebitAccountBranch(DebitBranch);
}); */

When("user enters creditor details for BICFI as {string}", async function (CreditorBICFI: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterCreditorBICFI(CreditorBICFI);
});

When("user enters debitor details for BICFI as {string}", async function (DebtorBICFI: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterDebitorBICFI(DebtorBICFI);
});

When("user enters creditor agent details for BICFI as {string}", async function (CreditorAgentBICFI: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterCreditorAgentBICFI(CreditorAgentBICFI);
});

When("user enters debitor agent details for BICFI as {string}", async function (DebitorAgentBICFI: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterDebitorAgentBICFI(DebitorAgentBICFI);
});

When("user enters instructing agent for BICFI as {string}", async function (InstructingAgentBICFI: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterInstructingAgentBICFI(InstructingAgentBICFI);
});

When("User Click on Other Creditor Details",
  async function () {
    fixture.logger.info("Clicking Other Creditor Details in RTGSInbound");
    rtgs = new RTGSPage(fixture.page);
    await rtgs.handleRTGSInboundFrame();
    await rtgs.clickOtherCreditDetails();

  });

 When("User enters Department as {string}", async function (Department: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterDepartment(Department);
}); 
When("User enters Floor as {string}", async function (Floor: string) {
    rtgs = new RTGSPage(fixture.page);
  await rtgs.enterFloor(Floor);
});
When("User clicks on save", async function () {
  await rtgs.saveCreditorDetails();
});

When("User click on Enrichbutton", async function () {
  await rtgs.clickEnrich();
});

When("User clicks on savebutton", async function () {
  await rtgs.saveTransaction();
});
When("User clicks on Exit Button", async function () {
  await rtgs.exitTransaction();
});

Then("User clicks on Okbutton", async function () {
  await rtgs.okTransaction();
});
When('user clicks on Enter Query in RTGSIN', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      rtgs = new RTGSPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await rtgs.clickEnterQuery();
  });
  When('user clicks on Execute Query in RTGSIN', async function () {
        await rtgs.clickExecuteQuery();
    });
    
  
    When('user clicks on Authorize tab in RTGSIN', async function () {
       fixture.logger.info("Clicking tab in GS");
      await rtgs.clickAuthorizetabRI();
    });
    
    When('user clicks on Authorize button in RTGSIN', async function () {
      fixture.logger.info("Clicking authbtn in GS");
      await rtgs.clickAuthorizebtnRI();
    });
    When('clicks on OK button in RTGSIN', async function () {
        fixture.logger.info("Clicking okbtn in GS");
        await rtgs.clickOK();
      });
