import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
 
import { expect, Keyboard } from "@playwright/test";
 
import { fixture } from "../../hooks/pageFixture";
 
import CreateAccountPage from "../../pages/createAccountPage";
 
import ReusableMethods from "../../helper/wrapper/reusableMethods";
 
import { context, timeout } from "../../hooks/hooks"
 
const reusableMethods = new ReusableMethods(fixture.page);
 
 
const CreateAccountPageloc = new CreateAccountPage(fixture.page);
 
setDefaultTimeout(timeout);
 
/*
When('User enters  {string} and click on search button', async function () {
     AccountCreationPageloc = new AccountCreationPage(fixture.page);
    fixture.logger.info("Enter the screen name");
    await AccountCreationPageloc.searchFunction( 'STDCUSAC');
   
   
  }); */
 
When('Clicks on the New button', async function () {
 
    const CreateAccountPageloc = new CreateAccountPage(fixture.page);
    await CreateAccountPageloc.handleSTDCUSACFrame();
 
});
 
When('Enters Customer Number as {string}', async function (Account) {
    await CreateAccountPageloc.EnterCustAcNum(Account);
});
 
When('Enters Currency as {string}', async function (currency) {
    await CreateAccountPageloc.EnterCurrency(currency);
});
 
 
When('Enters Account Class as {string}', async function (AccountClass) {
    await CreateAccountPageloc.EnterAccountClass(AccountClass);
});
 
When('Clicks on the Fetch button', async function () {
    await CreateAccountPageloc.ClickFetchBtn();
});
 
When('Clicks on the OK button', async function () {
    await CreateAccountPageloc.ClickOkBtn();
});
 
When('Enters the Location as {string}', async function (Location) {
    await CreateAccountPageloc.EnterLocation(Location);
});
 
When('Enters the Media as {string}', async function (Media) {
    await CreateAccountPageloc.EnterMedia(Media);
});
 
When('Clicks on the MIS Tab', async function () {
    await CreateAccountPageloc.ClickMIStab();
});
 
When('Enters the Pool Code as {string}', async function () {
    await CreateAccountPageloc.handleMISFrame();
});
 