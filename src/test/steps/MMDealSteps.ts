import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import MMDealPage from "../../pages/MMDealPage";
import { timeout } from "../../hooks/hooks";

let mmPageloc: MMDealPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User clicks on MM New Tab", async function () {
    mmPageloc = new MMDealPage(fixture.page); // ← initialize ONCE here
    fixture.logger.info("clicks on MM New Tab");
    await mmPageloc.clickNewTab();
});

When("User enters MM Product Code {string}", async function (productCode: string) {
    fixture.logger.info("enters MM Product Code: " + productCode);
    await mmPageloc.enterProductCode(productCode);
});

When("User enters MM Customer Number {string}", async function (customerNumber: string) {
    fixture.logger.info("enters MM Customer Number: " + customerNumber);
    await mmPageloc.enterCustomerNumber(customerNumber);
});

When("User enters MM Currency {string}", async function (currency: string) {
    fixture.logger.info("enters MM Currency: " + currency);
    await mmPageloc.enterCurrency(currency);
});

When("User enters MM Amount {string}", async function (amount: string) {
    fixture.logger.info("enters MM Amount: " + amount);
    await mmPageloc.enterAmount(amount);
});

When("User selects MM Liquidation as Manual", async function () {
    fixture.logger.info("selects MM Liquidation as Manual");
    await mmPageloc.selectLiquidationManual();
});

When("User clicks MM Save button", async function () {
    fixture.logger.info("clicks MM Save button");
    await mmPageloc.clickSaveButton();
});

When("User clicks MM Accept button", async function () {
    fixture.logger.info("clicks MM Accept button");
    await mmPageloc.clickAcceptButton();
});

When("User clicks MM Ok button", async function () {
    fixture.logger.info("clicks MM Ok button");
    await mmPageloc.clickOkButton();
});

When("User validates MM Success Message", async function () {
    fixture.logger.info("validates MM Success Message");
    await mmPageloc.verifySuccessMessage();
    await mmPageloc.exitMMPage();
});

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks MM Enter Query Tab", async function () {
    mmPageloc = new MMDealPage(fixture.page); // ← re-initialize for Checker login
    fixture.logger.info("clicks MM Enter Query Tab");
    await mmPageloc.clickEnterQuery();
});

When("User enters MM Contract Reference Number {string}", async function (contractReference: string) {
    fixture.logger.info("enters MM Contract Reference Number: " + contractReference);
    await mmPageloc.enterContractReference(contractReference);
});

When("User clicks MM Execute Query Tab", async function () {
    fixture.logger.info("clicks MM Execute Query Tab");
    await mmPageloc.clickExecuteQuery();
});

When("User clicks MM Authorize Tab", async function () {
    fixture.logger.info("clicks MM Authorize Tab");
    await mmPageloc.clickAuthorizeTab();
});

When("User confirms MM all Override Checkboxes", async function () {
    fixture.logger.info("confirms MM all Override Checkboxes");
    await mmPageloc.confirmAllOverrideCheckboxes();
});

When("User clicks MM Authorize button and clicks Ok", async function () {
    fixture.logger.info("clicks MM Authorize button and clicks Ok");
    await mmPageloc.clickAuthorizeButton();
    await mmPageloc.clickOkButton();
});

Then("User validates MM auth success message", async function () {
    fixture.logger.info("validates MM auth success message");
    await mmPageloc.verifyAuthSuccessMessage();
});
