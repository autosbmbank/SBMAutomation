import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import GuaranteeClaimPage from "../../pages/GuaranteeClaimPage";
import { timeout } from "../../hooks/hooks";

let guaranteePageloc: GuaranteeClaimPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User clicks on Guarantee New Tab", async function () {
    guaranteePageloc = new GuaranteeClaimPage(fixture.page); // ← initialize ONCE
    fixture.logger.info("clicks on Guarantee New Tab");
    await guaranteePageloc.clickNewTab();
});

When("User enters Guarantee Contract Reference {string}", async function (contractRef: string) {
    fixture.logger.info("enters Guarantee Contract Reference: " + contractRef);
    await guaranteePageloc.enterContractReference(contractRef);
});

When("User clicks Guarantee P button and clicks Ok", async function () {
    fixture.logger.info("clicks Guarantee P button and clicks Ok");
    await guaranteePageloc.clickPButtonAndOk();
});

When("User enters Guarantee Claim Lodgement Date {string}", async function (claimDate: string) {
    fixture.logger.info("enters Guarantee Claim Lodgement Date: " + claimDate);
    await guaranteePageloc.enterClaimLodgementDate(claimDate);
});

When("User enters Guarantee Claim Amount {string}", async function (claimAmount: string) {
    fixture.logger.info("enters Guarantee Claim Amount: " + claimAmount);
    await guaranteePageloc.enterClaimAmount(claimAmount);
});

When("User enters Guarantee Claiming Bank Reference {string}", async function (bankRef: string) {
    fixture.logger.info("enters Guarantee Claiming Bank Reference: " + bankRef);
    await guaranteePageloc.enterClaimingBankReference(bankRef);
});

When("User selects Guarantee Extend Or Settle {string}", async function (extendOrSettle: string) {
    fixture.logger.info("selects Guarantee Extend Or Settle: " + extendOrSettle);
    await guaranteePageloc.selectExtendOrSettle(extendOrSettle);
});

When("User clicks Guarantee Save button and clicks Ok", async function () {
    fixture.logger.info("clicks Guarantee Save button and clicks Ok");
    await guaranteePageloc.clickSaveAndOk();
});

When("User validates Guarantee Success Message", async function () {
    fixture.logger.info("validates Guarantee Success Message");
    await guaranteePageloc.verifySuccessMessage();
});

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks Guarantee Enter Query Tab", async function () {
    guaranteePageloc = new GuaranteeClaimPage(fixture.page); // ← re-initialize for Checker
    fixture.logger.info("clicks Guarantee Enter Query Tab");
    await guaranteePageloc.clickEnterQuery();
});

When("User enters Guarantee Claim SI No {string}", async function (claimSINo: string) {
    fixture.logger.info("enters Guarantee Claim SI No: " + claimSINo);
    await guaranteePageloc.enterClaimSINo(claimSINo);
});

When("User clicks Guarantee Execute Query Tab", async function () {
    fixture.logger.info("clicks Guarantee Execute Query Tab");
    await guaranteePageloc.clickExecuteQuery();
});

When("User clicks Guarantee Authorize Tab", async function () {
    fixture.logger.info("clicks Guarantee Authorize Tab");
    await guaranteePageloc.clickAuthorizeTab();
});

When("User clicks Guarantee Authorize button", async function () {
    fixture.logger.info("clicks Guarantee Authorize button");
    await guaranteePageloc.clickAuthorizeButton();
});

When("User clicks Guarantee Ok button", async function () {
    fixture.logger.info("clicks Guarantee Ok button");
    await guaranteePageloc.clickOkButton();
});

Then("User validates Guarantee auth success message", async function () {
    fixture.logger.info("validates Guarantee auth success message");
    await guaranteePageloc.verifyAuthSuccessMessage();
});
