import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import KYCPage from "../../pages/KYCPage"
import { timeout } from "../../hooks/hooks";

let kycPageloc: KYCPage;

setDefaultTimeout(timeout);

// ─── Maker Flow ───────────────────────────────────────────────────────────────

When("User click on KYC New Tab", async function () {
    kycPageloc = new KYCPage(fixture.page); // ← initialize ONCE here
    fixture.logger.info("clicks on KYC New Tab");
    await kycPageloc.clickNewTab();
});

When("User enters KYC Full Name {string}", async function (fullName: string) {
    fixture.logger.info("enters KYC Full Name: " + fullName);
    await kycPageloc.enterFullName(fullName);
});

When("User selects KYC Customer Type as {string}", async function (kycCustomerType: string) {
    fixture.logger.info("selects KYC Customer Type: " + kycCustomerType);
    await kycPageloc.selectKYCCustomerType(kycCustomerType);
});

When("User selects KYC Risk Level as {string}", async function (riskLevel: string) {
    fixture.logger.info("selects KYC Risk Level: " + riskLevel);
    await kycPageloc.selectRiskLevel(riskLevel);
});

When("User selects Customer Type at bottom {string}", async function (kycCustomerType: string) {
    fixture.logger.info("selects Retail Customer at bottom");
    await kycPageloc.selectRetailCustomerAtBottom(kycCustomerType);
});
When("User enters Parent Company Country of Incorporation as {string}",async function (country: string) {
    fixture.logger.info("User enters Parent Company Country of Incorporation as: " +country);
    await kycPageloc.enterCorpCountry(country);
});


When("User enters KYC Birth Country {string}", async function (birthCountry: string) {
    fixture.logger.info("enters KYC Birth Country: " + birthCountry);
    await kycPageloc.enterBirthCountry(birthCountry);
});

When("User enters KYC Birth Date {string}", async function (birthDate: string) {
    fixture.logger.info("enters KYC Birth Date: " + birthDate);
    await kycPageloc.enterBirthDate(birthDate);
});

When("User enters KYC Birth Place {string}", async function (birthPlace: string) {
    fixture.logger.info("enters KYC Birth Place: " + birthPlace);
    await kycPageloc.enterBirthPlace(birthPlace);
});

When("User enters KYC Country {string}", async function (country: string) {
    fixture.logger.info("enters KYC Country: " + country);
    await kycPageloc.enterCountry(country);
});

When("User enters KYC Nationality {string}", async function (nationality: string) {
    fixture.logger.info("enters KYC Nationality: " + nationality);
    await kycPageloc.enterNationality(nationality);
});

When("User clicks Save in Retail Tab", async function () {
    fixture.logger.info("clicks Save in Retail Tab");
    await kycPageloc.clickSaveInRetailTab();
});
When("User clicks Save in Corporate Tab", async function () {
    fixture.logger.info("clicks Save in Corporate Tab");
    await kycPageloc.clickSaveInCorpTab();
});

When("User clicks Save in Main Tab and clicks Ok", async function () {
    fixture.logger.info("clicks Save in Main Tab and clicks Ok");
    await kycPageloc.clickSaveInMainTab();
    await kycPageloc.clickOkOnSaveAlert();
});
When("User validates KYC Success Message", async function(){
    fixture.logger.info("validates KYC Success Message"); 
    await kycPageloc.verifySuccessMessage()
    await kycPageloc.exitKYCPage()
})

// ─── Checker Flow ─────────────────────────────────────────────────────────────

When("User clicks KYC enter query Tab", async function () {
    kycPageloc = new KYCPage(fixture.page); // ← re-initialize for Checker login
    fixture.logger.info("clicks KYC enter query Tab");
    await kycPageloc.clickEnterQuery();
});

When("User enters KYC Reference Number", async function () {
    fixture.logger.info("enters KYC Reference Number");
    await kycPageloc.enterKYCReferenceNumber();
});

When("User clicks KYC execute query Tab", async function () {
    fixture.logger.info("clicks KYC execute query Tab");
    await kycPageloc.clickExecuteQuery();
});

When("User clicks KYC Authorize Tab", async function () {
    fixture.logger.info("clicks KYC Authorize Tab");
    await kycPageloc.clickAuthorizeTab();
});

When("User accepts KYC Authorize Alert and clicks Ok", async function () {
    fixture.logger.info("accepts KYC Authorize Alert and clicks Ok");
    await kycPageloc.acceptAuthorizeAlert();
});

Then("User validates KYC auth success message", async function(){
    fixture.logger.info("validates KYC auth success message"); 
    await kycPageloc.verifyauthSuccesssMessage()
})