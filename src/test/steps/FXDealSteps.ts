import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import FXDealPage from "../../pages/FXDealPage";
import { timeout } from "../../hooks/hooks";

let fxPageloc: FXDealPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User clicks on FX New Tab", async function () {
    fxPageloc = new FXDealPage(fixture.page); // ← initialize ONCE here
    fixture.logger.info("clicks on FX New Tab");
    await fxPageloc.clickNewTab();
});

When("User searches FX Product Code {string}", async function (productCode: string) {
    fixture.logger.info("searches FX Product Code: " + productCode);
    await fxPageloc.searchProductCode(productCode);
});

When("User searches FX Counterparty {string}", async function (counterparty: string) {
    fixture.logger.info("searches FX Counterparty: " + counterparty);
    await fxPageloc.searchCounterparty(counterparty);
});

When("User searches FX Bought Currency {string}", async function (boughtCurrency: string) {
    fixture.logger.info("searches FX Bought Currency: " + boughtCurrency);
    await fxPageloc.searchBoughtCurrency(boughtCurrency);
});

When("User enters FX Bought Amount {string}", async function (boughtAmount: string) {
    fixture.logger.info("enters FX Bought Amount: " + boughtAmount);
    await fxPageloc.enterBoughtAmount(boughtAmount);
});

When("User selects FX Bought Value Date {string}", async function (boughtValueDate: string) {
    fixture.logger.info("selects FX Bought Value Date: " + boughtValueDate);
    await fxPageloc.enterBoughtValueDate(boughtValueDate);
});

When("User searches FX Sold Currency {string}", async function (soldCurrency: string) {
    fixture.logger.info("searches FX Sold Currency: " + soldCurrency);
    await fxPageloc.searchSoldCurrency(soldCurrency);
});

When("User enters FX Sold Amount {string}", async function (soldAmount: string) {
    fixture.logger.info("enters FX Sold Amount: " + soldAmount);
    await fxPageloc.enterSoldAmount(soldAmount);
});

When("User selects FX Sold Value Date {string}", async function (soldValueDate: string) {
    fixture.logger.info("selects FX Sold Value Date: " + soldValueDate);
    await fxPageloc.enterSoldValueDate(soldValueDate);
});

When("User clicks FX Calculate", async function () {
    fixture.logger.info("clicks FX Calculate/Recalculate");
    await fxPageloc.clickCalculate();
});

When("User clicks on FX Fields Tab", async function () {
    fixture.logger.info("clicks on FX Fields Tab");
    await fxPageloc.clickFieldsTab();
});

When("User enters Square Off Rate {string}", async function (squareOffRate: string) {
    fixture.logger.info("enters Square Off Rate: " + squareOffRate);
    await fxPageloc.enterSquareOffRate(squareOffRate);
});

When("User clicks FX Save button", async function () {
    fixture.logger.info("clicks FX Save button");
    await fxPageloc.clickSaveButton();
});

When("User validates FX Success Message", async function () {
    fixture.logger.info("validates FX Success Message");
    await fxPageloc.verifySuccessMessage();
    await fxPageloc.exitFXPage();
});

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks FX Enter Query Tab", async function () {
    fxPageloc = new FXDealPage(fixture.page); // ← re-initialize for Checker login
    fixture.logger.info("clicks FX Enter Query Tab");
    await fxPageloc.clickEnterQuery();
});

When("User enters FX Contract Reference Number", async function () {
    fixture.logger.info("enters FX Contract Reference Number");
    await fxPageloc.enterContractReference();
});

When("User clicks FX Execute Query Tab", async function () {
    fixture.logger.info("clicks FX Execute Query Tab");
    await fxPageloc.clickExecuteQuery();
});

When("User clicks FX Authorize Tab", async function () {
    fixture.logger.info("clicks FX Authorize Tab");
    await fxPageloc.clickAuthorizeTab();
});

When("User clicks FX Confirm Radio Button", async function () {
    fixture.logger.info("clicks FX Confirm Radio Button");
    await fxPageloc.clickConfirmRadioButton();
});

When("User clicks FX Authorize on popup", async function () {
    fixture.logger.info("clicks FX Authorize on popup");
    await fxPageloc.clickAuthorizeOnPopup();
});

When("User clicks FX Ok button", async function () {
    fixture.logger.info("clicks FX Ok button");
    await fxPageloc.clickOkButton();
});

Then("User validates FX auth success message", async function () {
    fixture.logger.info("validates FX auth success message");
    await fxPageloc.verifyAuthSuccessMessage();
});
