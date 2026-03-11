import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import WithdrawalsPage from "../../pages/WithdrawalsPage";

let WDPage: WithdrawalsPage;

      
When("User selects the NextGen tab", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.clickNextGentab();
});

When("Clicks on Retail Operations", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.clickRetailOpstab();
});

When("changes the branch code as {string}", async function(brcode : string)
{
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.clickchangebranch(brcode);
});



When("selects Cash Withdrawal in the Teller Menu Bar", async function(){
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.clickCashWithdrawal();
});

When("selects Cash Electronic Journal in the Teller Menu Bar", async function(){
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.clickElectronicJournal();
});

When("click on Charge details button", async function(){
    const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.beforechargedetails();
});

Then('No data to display message should be shown', async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.verifyNoDataDisplayed();
});

When("enters the Account number {string}", async function(acno : string){
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.enterACNum(acno);
}); 

When("enters the Transaction Amount {string}", async function(txnamt : string){
  const WDPage = new WithdrawalsPage(fixture.page);
  await WDPage.enterTxnAmt(txnamt);
});

When("enters the Customer Information {string}", async function (custinfo : string) {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.enterCustinfo(custinfo);
});
        When("saves the transaction", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.txnsave();
});
     When("saves the normal transaction", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.normaltxnsave();
});

        Then("validate that Till minimum balance breached message is displayed", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.validatetillmsg();
});

        Then("validate that transaction is submitted succesfully for approval", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.validatemsg();
});

  Then("validate that transaction is submitted succesfully", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.validatesuccessmsg();
});
        When("logout the application", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.applogout();
});

 When("selects Electronic Journal in the Teller Menu Bar", async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.clickElectronicJournal();
});

When("Fetches the transactions that have status as Pending Approval", async function(){
const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.clickPendingApproval();
});

When('selects Sent Back in the Transaction Status', async function () {
  const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.clickSentBack();
          
  });

When("approves the transaction", async function(){
const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.approvetxn();
});

When("validate the Error Message", async function(){
    const WDPage = new WithdrawalsPage(fixture.page);
    await WDPage.Errormessage();
});