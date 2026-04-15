import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import SecuritiesDealPage from "../../pages/SecuritiesDealPage";
import { timeout } from "../../hooks/hooks";

let secPageloc: SecuritiesDealPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User clicks on Securities New Tab", async function () {
    secPageloc = new SecuritiesDealPage(fixture.page); // ← initialize ONCE here
    fixture.logger.info("clicks on Securities New Tab");
    await secPageloc.clickNewTab();
});

When("User searches Securities Product {string}", async function (product: string) {
    fixture.logger.info("searches Securities Product: " + product);
    await secPageloc.searchProduct(product);
});

When("User clicks Securities P button", async function () {
    fixture.logger.info("clicks Securities P button");
    await secPageloc.clickPButton();
});

When("User searches Securities Security Code {string}", async function (securityCode: string) {
    fixture.logger.info("searches Securities Security Code: " + securityCode);
    await secPageloc.searchSecurityCode(securityCode);
});

When("User enters Securities Deal Quantity {string}", async function (dealQuantity: string) {
    fixture.logger.info("enters Securities Deal Quantity: " + dealQuantity);
    await secPageloc.enterDealQuantity(dealQuantity);
});

When("User enters Securities TSDL Date {string}", async function (tsdlDate: string) {
    fixture.logger.info("enters Securities TSDL Date: " + tsdlDate);
    await secPageloc.enterTSDLDate(tsdlDate);
});

When("User enters Securities Input Price {string}", async function (inputPrice: string) {
    fixture.logger.info("enters Securities Input Price: " + inputPrice);
    await secPageloc.enterInputPrice(inputPrice);
});

When("User searches Securities Counterparty {string}", async function (counterparty: string) {
    fixture.logger.info("searches Securities Counterparty: " + counterparty);
    await secPageloc.searchCounterparty(counterparty);
});

When("User enables Securities Accommodation Lodge", async function () {
    fixture.logger.info("enables Securities Accommodation Lodge");
    await secPageloc.enableAccommodationLodge();
});

When("User selects Securities Money Settlement Date {string}", async function (moneySettlementDate: string) {
    fixture.logger.info("selects Securities Money Settlement Date: " + moneySettlementDate);
    await secPageloc.enterMoneySettlementDate(moneySettlementDate);
});

When("User searches Securities Portfolio {string}", async function (portfolio: string) {
    fixture.logger.info("searches Securities Portfolio: " + portfolio);
    await secPageloc.searchPortfolio(portfolio);
});

When("User searches Securities Safe Keeping Location {string}", async function (safeKeepingLocation: string) {
    fixture.logger.info("searches Securities Safe Keeping Location: " + safeKeepingLocation);
    await secPageloc.searchSafeKeepingLocation(safeKeepingLocation);
});

When("User searches Securities Safe Keeping Account {string}", async function (safeKeepingAccount: string) {
    fixture.logger.info("searches Securities Safe Keeping Account: " + safeKeepingAccount);
    await secPageloc.searchSafeKeepingAccount(safeKeepingAccount);
});

When("User clicks Securities Save button", async function () {
    fixture.logger.info("clicks Securities Save button");
    await secPageloc.clickSaveButton();
});

When("User clicks Securities Accept button", async function () {
    fixture.logger.info("clicks Securities Accept button");
    await secPageloc.clickAcceptButton();
});

When("User clicks Securities Ok button", async function () {
    fixture.logger.info("clicks Securities Ok button");
    await secPageloc.clickOkButton();
});

When("User validates Securities Success Message", async function () {
    fixture.logger.info("validates Securities Success Message");
    await secPageloc.verifySuccessMessage();
    await secPageloc.exitSecuritiesPage();
});

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks Securities Enter Query Tab", async function () {
    secPageloc = new SecuritiesDealPage(fixture.page); // ← re-initialize for Checker login
    fixture.logger.info("clicks Securities Enter Query Tab");
    await secPageloc.clickEnterQuery();
});

When("User enters Securities Deal Reference {string}", async function (dealReference: string) {
    fixture.logger.info("enters Securities Deal Reference: " + dealReference);
    await secPageloc.enterDealReference(dealReference);
});

When("User clicks Securities Execute Query Tab", async function () {
    fixture.logger.info("clicks Securities Execute Query Tab");
    await secPageloc.clickExecuteQuery();
});

When("User clicks Securities Authorize Tab in main screen", async function () {
    fixture.logger.info("clicks Securities Authorize Tab in main screen");
    await secPageloc.clickAuthorizeTab();
});

When("User clicks Securities Authorize button in Deal Authorization screen", async function () {
    fixture.logger.info("clicks Securities Authorize button in Deal Authorization screen");
    await secPageloc.clickAuthorizeOnDealAuthScreen();
});

Then("User validates Securities auth success message", async function () {
    fixture.logger.info("validates Securities auth success message");
    await secPageloc.verifyAuthSuccessMessage();
});
