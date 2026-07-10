import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import BranchOperationsPage from "../../pages/TillVaultPage";
import { timeout } from "../../hooks/hooks";

let branchPageloc: BranchOperationsPage;

setDefaultTimeout(timeout);



When("user selects NextGen UI Dashboard in TillVault", async function () {
    branchPageloc = new BranchOperationsPage(fixture.page); 
    fixture.logger.info("selects NextGen UI Dashboard and select Retail Operations");
    await branchPageloc.NextGenFun();
});



When("user enters screen name {string}", async function (screenName: string) {
    fixture.logger.info("enters screen name: " + screenName);
    await branchPageloc.searchScreen(screenName);
});



When("user enters Branch Total Required Cash {string}", async function (totalCash: string) {
    fixture.logger.info("enters Branch Total Required Cash: " + totalCash);
    await branchPageloc.enterTotalRequiredCash(totalCash);
});

When("user expands Branch Denomination", async function () {
    fixture.logger.info("expands Branch Denomination");
    await branchPageloc.expandDenomination();
});

When("user fills Branch Denomination from Total Required Cash {string}", async function (totalCash: string) {
    fixture.logger.info("fills Branch Denomination from Total Required Cash: " + totalCash);
    await branchPageloc.fillDenominationFromAmount(totalCash);
});

When("user clicks Branch Submit button", async function () {
    fixture.logger.info("clicks Branch Submit button");
    await branchPageloc.clickSubmit();
});


Then("user validates TillVault Success Message", async function () {
    fixture.logger.info("clicks Branch Submit button");
    await branchPageloc.verifySuccessMessage();
});
