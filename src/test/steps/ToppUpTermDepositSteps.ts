import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import TopUpTermDepositPage from "../../pages/TopUpTermDepositPage";
import { timeout } from "../../hooks/hooks";

let topUpPageloc: TopUpTermDepositPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User clicks on TopUp New Tab", async function () {
    topUpPageloc = new TopUpTermDepositPage(fixture.page); // ← initialize ONCE here
    fixture.logger.info("clicks on TopUp New Tab");
    await topUpPageloc.clickNewTab();
});

When("User enters TopUp Account Number {string}", async function (accountNumber: string) {
    fixture.logger.info("enters TopUp Account Number: " + accountNumber);
    await topUpPageloc.enterAccountNumber(accountNumber);
});

When("User clicks TopUp P button and clicks Ok", async function () {
    fixture.logger.info("clicks TopUp P button and clicks Ok");
    await topUpPageloc.clickPButtonAndOk();
});

When("User enters TopUp Amount {string}", async function (topUpAmount: string) {
    fixture.logger.info("enters TopUp Amount: " + topUpAmount);
    await topUpPageloc.enterTopUpAmount(topUpAmount);
});

When("User clicks TopUp PayIn Add Row button", async function () {
    fixture.logger.info("clicks TopUp PayIn Add Row button");
    await topUpPageloc.clickPayInAddRowButton();
});

When("User enters TopUp Percentage {string}", async function (percentage: string) {
    fixture.logger.info("enters TopUp Percentage: " + percentage);
    await topUpPageloc.enterPercentage(percentage);
});

When("User enters TopUp PayIn Amount {string}", async function (payInAmount: string) {
    fixture.logger.info("enters TopUp PayIn Amount: " + payInAmount);
    await topUpPageloc.enterPayInAmount(payInAmount);
});

When("User enters TopUp Offset Account {string}", async function (offsetAccount: string) {
    fixture.logger.info("enters TopUp Offset Account: " + offsetAccount);
    await topUpPageloc.enterOffsetAccount(offsetAccount);
});

When("User clicks TopUp Compute and clicks Ok", async function () {
    fixture.logger.info("clicks TopUp Compute and clicks Ok");
    await topUpPageloc.clickComputeAndOk();
});

When("User clicks TopUp Save button", async function () {
    fixture.logger.info("clicks TopUp Save button");
    await topUpPageloc.clickSaveButton();
});

When("User clicks TopUp Accept button and clicks Ok", async function () {
    fixture.logger.info("clicks TopUp Accept button and clicks Ok");
    await topUpPageloc.clickAcceptAndOk();
});

When("User validates TopUp Success Message", async function () {
    fixture.logger.info("validates TopUp Success Message");
    await topUpPageloc.verifySuccessMessage();
    await topUpPageloc.exitTopUpPage();
});

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks TopUp Enter Query Tab", async function () {
    topUpPageloc = new TopUpTermDepositPage(fixture.page); // ← re-initialize for Checker login
    fixture.logger.info("clicks TopUp Enter Query Tab");
    await topUpPageloc.clickEnterQuery();
});

When("User enters TopUp Reference Number {string}", async function (topUpReference: string) {
    fixture.logger.info("enters TopUp Reference Number: " + topUpReference);
    await topUpPageloc.enterTopUpReference(topUpReference);
});

When("User clicks TopUp Execute Query Tab", async function () {
    fixture.logger.info("clicks TopUp Execute Query Tab");
    await topUpPageloc.clickExecuteQuery();
});

When("User clicks TopUp Authorize Tab", async function () {
    fixture.logger.info("clicks TopUp Authorize Tab");
    await topUpPageloc.clickAuthorizeTab();
});

Then("User validates TopUp auth success message", async function () {
    fixture.logger.info("validates TopUp auth success message");
    await topUpPageloc.verifyAuthSuccessMessage();
});
