import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import FixedAssetsSalePage from "../../pages/FixedAssetsSalePage";
import { timeout } from "../../hooks/hooks";

let fixedAssetsPageloc: FixedAssetsSalePage;

setDefaultTimeout(timeout);

When("User clicks FixedAssets Enter Query Tab", async function () {
    fixedAssetsPageloc = new FixedAssetsSalePage(fixture.page); 
    fixture.logger.info("clicks FixedAssets Enter Query Tab");
    await fixedAssetsPageloc.clickEnterQuery();
});

When("User enters FixedAssets Reference Number {string}", async function (referenceNumber: string) {
    fixture.logger.info("enters FixedAssets Reference Number: " + referenceNumber);
    await fixedAssetsPageloc.enterReferenceNumber(referenceNumber);
});

When("User clicks FixedAssets Execute Query Tab and takes screenshot", async function () {
    fixture.logger.info("clicks FixedAssets Execute Query Tab and takes screenshot");
    await fixedAssetsPageloc.clickExecuteQueryAndScreenshot(this);
});


When("User clicks FixedAssets {string} Tab and takes screenshot", async function (tabName: string) {
    fixture.logger.info("clicks FixedAssets Tab: " + tabName + " and takes screenshot");
    await fixedAssetsPageloc.clickTabAndScreenshot(tabName,this);
});

When("User clicks FixedAssets Exit button", async function () {
    fixture.logger.info("clicks FixedAssets Exit button");
    await fixedAssetsPageloc.exitFixedAssetsPage();
});
