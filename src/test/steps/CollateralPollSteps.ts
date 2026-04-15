import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CollateralPoolPage from "../../pages/CollateralPollPage";
import { timeout } from "../../hooks/hooks";

let poolPageloc: CollateralPoolPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User clicks on Pool New Tab", async function () {
    poolPageloc = new CollateralPoolPage(fixture.page); // ← initialize ONCE
    fixture.logger.info("clicks on Pool New Tab");
    await poolPageloc.clickNewTab();
});

When("User searches Pool Liability No {string}", async function (liabilityNo: string) {
    fixture.logger.info("searches Pool Liability No: " + liabilityNo);
    await poolPageloc.searchLiabilityNo(liabilityNo);
});

When("User enters Pool Code {string}", async function (poolCode: string) {
    fixture.logger.info("enters Pool Code: " + poolCode);
    await poolPageloc.enterPoolCode(poolCode);
});

When("User searches Pool Currency {string}", async function (poolCurrency: string) {
    fixture.logger.info("searches Pool Currency: " + poolCurrency);
    await poolPageloc.searchPoolCurrency(poolCurrency);
});

When("User clicks Pool Collateral Linkage Add Row button", async function () {
    fixture.logger.info("clicks Pool Collateral Linkage Add Row button");
    await poolPageloc.clickCollateralLinkageAddRow();
});

When("User searches Pool Collateral Code {string}", async function (collateralCode: string) {
    fixture.logger.info("searches Pool Collateral Code: " + collateralCode);
    await poolPageloc.searchCollateralCode(collateralCode);
});

When("User clicks Pool Save button", async function () {
    fixture.logger.info("clicks Pool Save button");
    await poolPageloc.clickSaveButton();
});

When("User clicks Pool Ok button", async function () {
    fixture.logger.info("clicks Pool Ok button");
    await poolPageloc.clickOkButton();
});

When("User validates Pool Success Message", async function () {
    fixture.logger.info("validates Pool Success Message");
    await poolPageloc.verifySuccessMessage();
});

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks Pool Enter Query Tab", async function () {
    poolPageloc = new CollateralPoolPage(fixture.page); // ← re-initialize for Checker
    fixture.logger.info("clicks Pool Enter Query Tab");
    await poolPageloc.clickEnterQuery();
});

When("User enters Pool Liability No {string}", async function (liabilityNo: string) {
    fixture.logger.info("enters Pool Liability No: " + liabilityNo);
    await poolPageloc.enterLiabilityNoForQuery(liabilityNo);
});

When("User clicks Pool Execute Query Tab", async function () {
    fixture.logger.info("clicks Pool Execute Query Tab");
    await poolPageloc.clickExecuteQuery();
});

When("User clicks Pool Authorize Tab", async function () {
    fixture.logger.info("clicks Pool Authorize Tab");
    await poolPageloc.clickAuthorizeTab();
});

When("User clicks Pool Accept button", async function () {
    fixture.logger.info("clicks Pool Accept button");
    await poolPageloc.clickAcceptButton();
});

Then("User validates Pool auth success message", async function () {
    fixture.logger.info("validates Pool auth success message");
    await poolPageloc.verifyAuthSuccessMessage();
});
