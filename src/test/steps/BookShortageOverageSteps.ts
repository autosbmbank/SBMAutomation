import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import BookShortageOveragePage from "../../pages/BookShortageOveragePage";
import { timeout } from "../../hooks/hooks";

let bookPageloc: BookShortageOveragePage;

setDefaultTimeout(timeout);

// ─── NextGen Navigation ───────────────────────────────────────────────────────

When("user clicks on Book NextGen UI Dashboard", async function () {
    bookPageloc = new BookShortageOveragePage(fixture.page); // ← initialize ONCE
    fixture.logger.info("clicks on Book NextGen UI Dashboard");
    await bookPageloc.NextGenFun();
});

// ─── Screen Navigation ────────────────────────────────────────────────────────

When("user searches for Book Shortage Screen", async function () {
    fixture.logger.info("searches for Book Shortage Screen");
    await bookPageloc.searchBookShortageScreen();
});

When("user searches for Book Overage Screen", async function () {
    fixture.logger.info("searches for Book Overage Screen");
    await bookPageloc.searchBookOverageScreen();
});

// ─── Main Form Fields ─────────────────────────────────────────────────────────

When("user selects Book Currency Code {string}", async function (currencyCode: string) {
    fixture.logger.info("selects Book Currency Code: " + currencyCode);
    await bookPageloc.selectCurrencyCode(currencyCode);
});

When("user enters Book Amount {string}", async function (amount: string) {
    fixture.logger.info("enters Book Amount: " + amount);
    await bookPageloc.enterAmount(amount);
});

// ─── Denomination ─────────────────────────────────────────────────────────────

When("user expands Book Denomination", async function () {
    fixture.logger.info("expands Book Denomination");
    await bookPageloc.expandDenomination();
});

When("user fills Book Denomination from Amount {string}", async function (amount: string) {
    fixture.logger.info("fills Book Denomination from Amount: " + amount);
    await bookPageloc.fillDenominationFromAmount(amount);
});

// ─── Submit & Validation ──────────────────────────────────────────────────────

When("user clicks Book Submit button", async function () {
    fixture.logger.info("clicks Book Submit button");
    await bookPageloc.clickSubmit();
});

Then("user validates Book Success Message", async function () {
    fixture.logger.info("validates Book Success Message");
    await bookPageloc.verifySuccessMessage();
});
