import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import FCYDealPage from "../../pages/FCYDealPage";
import { timeout } from "../../hooks/hooks";

let fcyPageloc: FCYDealPage;

setDefaultTimeout(timeout);

// ─── NextGen Navigation — own steps for FCY ───────────────────────────────────

When("user clicks on FCY NextGen UI Dashboard", async function () {
    fcyPageloc = new FCYDealPage(fixture.page); // ← initialize ONCE here
    fixture.logger.info("clicks on FCY NextGen UI Dashboard");
    await fcyPageloc.NextGenFun(); // ← sets own newPage
});

// ─── Both Purchase and Sell share same steps ──────────────────────────────────

When("user searches for FCY Screen {string}", async function (screenCode: string) {
    fixture.logger.info("searches for FCY Screen: " + screenCode);
    await fcyPageloc.searchFCYScreen(screenCode);
});

When("user provides FCY Account Number {string}", async function (accountNumber: string) {
    fixture.logger.info("provides FCY Account Number: " + accountNumber);
    await fcyPageloc.enterAccountNumber(accountNumber);
});
When("user provides FCY Sale Account Number {string}", async function (accountNumber: string) {
    fixture.logger.info("provides FCY Account Number: " + accountNumber);
    await fcyPageloc.enterSaleAccountNumber(accountNumber);
});

When("user selects FCY Bought Currency {string}", async function (currency: string) {
    fixture.logger.info("selects FCY Bought Currency: " + currency);
    await fcyPageloc.selectBoughtCurrency(currency);
});

When("user enters FCY Bought Amount {string}", async function (boughtAmount: string) {
    fixture.logger.info("enters FCY Bought Amount: " + boughtAmount);
    await fcyPageloc.enterBoughtAmount(boughtAmount);
});
When("user enters FCY Sold Amount {string}", async function(soldAmount: string) {
    fixture.logger.info("enters FCY Bought Amount: " + soldAmount);
    await fcyPageloc.enterSoldtAmount(soldAmount);
});

When("user expands FCY Denomination", async function () {
    fixture.logger.info("expands FCY Denomination");
    await fcyPageloc.expandDenomination();
});

// When("user enters FCY Denomination Units {string} {string}", async function (denominationCode: string, units: string) {
//     fixture.logger.info("enters FCY Denomination Units - code: " + denominationCode + " units: " + units);
//     await fcyPageloc.enterDenominationUnits(denominationCode, units);
// });
When("user fills FCY denomination from Bought Amount {string}", 
    async function (boughtAmount: string) {
    fixture.logger.info("fills FCY denomination from Bought Amount: " + boughtAmount);
    await fcyPageloc.enterDenominationUnitsFromBoughtAmount(boughtAmount);
});
When("user clicks FCY Submit and clicks Ok", async function () {
    fixture.logger.info("clicks FCY Submit and clicks Ok");
    await fcyPageloc.clickSubmitAndOk();
});

When("user clicks Yes in FCY Advice Confirmation", async function () {
    fixture.logger.info("clicks Yes in FCY Advice Confirmation");
    await fcyPageloc.clickYesInAdviceConfirmation();
});

When("user clicks FCY Print button", async function () {
    fixture.logger.info("clicks FCY Print button");
    await fcyPageloc.clickPrintButton();
});

When("user saves FCY file with name {string}", async function (fileName: string) {
    fixture.logger.info("saves FCY file with name: " + fileName);
    await fcyPageloc.saveFileWithName(fileName);
});

When("user clicks FCY Close button", async function () {
    fixture.logger.info("clicks FCY Close button");
    await fcyPageloc.clickCloseButton();
});

When("user clicks No in FCY Stay on Same Screen popup", async function () {
    fixture.logger.info("clicks No in FCY Stay on Same Screen popup");
    await fcyPageloc.clickNoInStayOnSameScreen();
});

