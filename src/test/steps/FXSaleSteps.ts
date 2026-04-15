import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import FXSaleWalkinPage from "../../pages/FXSalePage";
import { timeout } from "../../hooks/hooks";

let fxSalePageloc: FXSaleWalkinPage;

setDefaultTimeout(timeout);

// ─── NextGen Navigation ───────────────────────────────────────────────────────

When("user clicks on FXSale NextGen UI Dashboard", async function () {
    fxSalePageloc = new FXSaleWalkinPage(fixture.page); // ← initialize ONCE
    fixture.logger.info("clicks on FXSale NextGen UI Dashboard");
    await fxSalePageloc.NextGenFun();
});

// ─── Screen Navigation ────────────────────────────────────────────────────────

When("user searches for FXSale Screen", async function () {
    fixture.logger.info("searches for FXSale Screen");
    await fxSalePageloc.searchFXSaleScreen();
});

// ─── Main Form Fields ─────────────────────────────────────────────────────────

When("user selects FXSale Sold Currency {string}", async function (boughtCurrency: string) {
    fixture.logger.info("selects FXSale Bought Currency: " + boughtCurrency);
    await fxSalePageloc.selectSoldCurrency(boughtCurrency);
});

When("user enters FXSale Sold Amount {string}", async function (boughtAmount: string) {
    fixture.logger.info("enters FXSale Bought Amount: " + boughtAmount);
    await fxSalePageloc.enterSoldAmount(boughtAmount);
});

When("user selects FXSale Currency Paid {string}", async function (currencyPaid: string) {
    fixture.logger.info("selects FXSale Currency Paid: " + currencyPaid);
    await fxSalePageloc.selectCurrencyPaid(currencyPaid);
});

When("user enters FXSale Beneficiary Name {string}", async function (beneficiaryName: string) {
    fixture.logger.info("enters FXSale Beneficiary Name: " + beneficiaryName);
    await fxSalePageloc.enterBeneficiaryName(beneficiaryName);
});

// ─── FX In Denomination ───────────────────────────────────────────────────────

When("user expands FXSale FX In Denomination Details", async function () {
    fixture.logger.info("expands FXSale FX In Denomination Details");
    await fxSalePageloc.expandFXInDenomination();
});

When("user fills FXSale FX In denomination from Amount Received", async function () {
    fixture.logger.info("fills FXSale FX In denomination from Amount Received");
    await fxSalePageloc.fillFXInDenominationFromAmountReceived();
});

// ─── FX Out Denomination ──────────────────────────────────────────────────────

When("user expands FXSale FX Out Denomination Details", async function () {
    fixture.logger.info("expands FXSale FX Out Denomination Details");
    await fxSalePageloc.expandFXOutDenomination();
});

// When("user enters FXSale FX Out Denomination Units {string} {string}", async function (denominationCode: string, units: string) {
//     fixture.logger.info("enters FXSale FX Out Denomination Units - code: " + denominationCode + " units: " + units);
//     await fxSalePageloc.enterFXOutDenominationUnits(denominationCode, units);
// });

// ─── Submit & Validation ──────────────────────────────────────────────────────

When("user clicks FXSale Submit button", async function () {
    fixture.logger.info("clicks FXSale Submit button");
    await fxSalePageloc.clickSubmit();
});

Then("user validates FXSale Success Message", async function () {
    fixture.logger.info("validates FXSale Success Message");
    await fxSalePageloc.verifySuccessMessage();
});

// purchase walk in
When("user searches for FXPurchase Screen", async function () {
    fixture.logger.info("searches for FXPurchase Screen");
    await fxSalePageloc.searchFXPurchaseScreen();
});

When("user selects FXPurchase Bought Currency {string}", async function (boughtCurrency: string) {
    fixture.logger.info("selects FXPurchase Bought Currency: " + boughtCurrency);
    await fxSalePageloc.selectSoldCurrency(boughtCurrency); // ← reuse same method
});

When("user enters FXPurchase Bought Amount {string}", async function (boughtAmount: string) {
    fixture.logger.info("enters FXPurchase Bought Amount: " + boughtAmount);
    await fxSalePageloc.enterSoldAmount(boughtAmount); // ← reuse same method
});

When("user selects FXPurchase Currency Paid {string}", async function (currencyPaid: string) {
    fixture.logger.info("selects FXPurchase Currency Paid: " + currencyPaid);
    await fxSalePageloc.selectCurrencyPaid(currencyPaid); // ← reuse same method
});

When("user enters FXPurchase Beneficiary Name {string}", async function (beneficiaryName: string) {
    fixture.logger.info("enters FXPurchase Beneficiary Name: " + beneficiaryName);
    await fxSalePageloc.enterBeneficiaryName(beneficiaryName); // ← reuse same method
});

// ─── FX Purchase — FX Out first, then FX In (opposite to FX Sale) ─────────────

When("user expands FXPurchase FX Out Denomination Details", async function () {
    fixture.logger.info("expands FXPurchase FX Out Denomination Details");
    await fxSalePageloc.expandFXOutDenomination(); // ← reuse same method
});

// When("user enters FXPurchase FX Out Denomination Units {string} {string}", async function (denominationCode: string, units: string) {
//     fixture.logger.info("enters FXPurchase FX Out Units - code: " + denominationCode + " units: " + units);
//     await fxSalePageloc.enterFXOutDenominationUnits(denominationCode, units); // ← reuse same method
// });
When("user enters FXSale FX Out Denomination from Bought Amount {string}", 
    async function (boughtAmount: string) {
    fixture.logger.info("enters FX Out denomination from bought amount: " + boughtAmount);
    await fxSalePageloc.enterFXOutDenominationUnits(boughtAmount);
});
When("user fills FXPurchase FX Out denomination from Amount Paid", async function () {
    fixture.logger.info("fills FXPurchase FX Out denomination from Amount Paid");
    await fxSalePageloc.fillFXOutDenominationFromAmountPaid();
});

When("user expands FXPurchase FX In Denomination Details", async function () {
    fixture.logger.info("expands FXPurchase FX In Denomination Details");
    await fxSalePageloc.expandFXInDenomination(); // ← reuse same method
});

When("user fills FXPurchase FX In denomination from Amount Received", async function () {
    fixture.logger.info("fills FXPurchase FX In denomination from Amount Received");
    await fxSalePageloc.fillFXInDenominationFromAmountReceived(); // ← reuse same method
});
When("user fills FXPurchase FX In denomination from Bought Amount {string}", 
    async function (boughtAmount: string) {
    fixture.logger.info("fills FXPurchase FX In denomination from Bought Amount: " + boughtAmount);
    await fxSalePageloc.fillFXInDenominationFromBoughtAmount(boughtAmount);
});

When("user clicks FXPurchase Submit button", async function () {
    fixture.logger.info("clicks FXPurchase Submit button");
    await fxSalePageloc.clickSubmit(); // ← reuse same method
});

Then("user validates FXPurchase Success Message", async function () {
    fixture.logger.info("validates FXPurchase Success Message");
    await fxSalePageloc.verifySuccessMessage(); // ← reuse same method
});