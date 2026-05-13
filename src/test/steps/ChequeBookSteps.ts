import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import ChequeBookPage from "../../pages/ChequeBookPage";
import { timeout } from "../../hooks/hooks";

let chequePageloc: ChequeBookPage;

setDefaultTimeout(timeout);



When("user clicks on Cheque NextGen UI Dashboard", async function () {
    chequePageloc = new ChequeBookPage(fixture.page); 
    fixture.logger.info("clicks on Cheque NextGen UI Dashboard");
    await chequePageloc.NextGenFun();
});



When("user searches for Cheque Screen {string}", async function (screenCode: string) {
    fixture.logger.info("searches for Cheque Screen: " + screenCode);
    await chequePageloc.searchChequeScreen(screenCode);
});



When("user enters Cheque Account Number {string}", async function (accountNumber: string) {
    fixture.logger.info("enters Cheque Account Number: " + accountNumber);
    await chequePageloc.enterAccountNumber(accountNumber);
});

When("user enters Cheque Address Line1 {string}", async function (addressLine1: string) {
    fixture.logger.info("enters Cheque Address Line1: " + addressLine1);
    await chequePageloc.enterAddressLine1(addressLine1);
});

When("user enters Cheque Address Line2 {string}", async function (addressLine2: string) {
    fixture.logger.info("enters Cheque Address Line2: " + addressLine2);
    await chequePageloc.enterAddressLine2(addressLine2);
});

When("user enters Cheque First Cheque Number with length {string}", async function (length: string) {
    fixture.logger.info("enters Cheque First Cheque Number with length: " + length);
    await chequePageloc.enterFirstChequeNumber(parseInt(length));
});


When("user enters Cheque Number {string}", async function (chequeNumber: string) {
    fixture.logger.info("enters Cheque Number: " + chequeNumber);
    await chequePageloc.enterChequeNumber(chequeNumber);
});


When("user clicks Cheque Submit button", async function () {
    fixture.logger.info("clicks Cheque Submit button");
    await chequePageloc.clickSubmit();
});

Then("user validates Cheque Success Message", async function () {
    fixture.logger.info("validates Cheque Success Message");
    await chequePageloc.verifySuccessMessage();
});
