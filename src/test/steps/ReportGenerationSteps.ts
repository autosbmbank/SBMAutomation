//Reports
import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { context, timeout } from "../../hooks/hooks"
import ReportGenerationPage from "../../pages/ReportGenerationPage"; 


Given("User navigates to the Reports application", async function () {
   const RGPageloc = new ReportGenerationPage(fixture.page);
    fixture.logger.info("Navigated to the application");
    await fixture.page.goto(process.env.REPORTURL);
    // await fixture.page.goto(process.env.REPORTURLUAT);
    let title = await fixture.page.title();
    console.log("Title is " + title)
});

When("user enters the Reports username and password", async function () {
   const RGPageloc = new ReportGenerationPage(fixture.page);
  fixture.logger.info("Enter the user name and Password");
  if (!process.env.UserNameReport || !process.env.PasswordReport) {
    throw new Error('Missing env variables: set UserNameReport and PasswordReport before running tests.');
  }
  await RGPageloc.enterUserNameReport(process.env.UserNameReport);
//   await RGPageloc.enterUserNameReport(process.env.UserNameReportUAT);
  await fixture.page.waitForTimeout(2000);
  await RGPageloc.enterPasswordReport(process.env.PasswordReport);
//   await RGPageloc.enterPasswordReport(process.env.PasswordReportUAT);
});

When("click on Reports signin button", async function () {
  const RGPageloc = new ReportGenerationPage(fixture.page);
  await RGPageloc.signBtn(); // implement signBtn as shown next if missing
  await fixture.page.waitForLoadState('networkidle');
});

When("Navigate to the Catalog", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.ClickCatalog();
});

When("Open the Department Folder", async function () {
     const RGPageloc = new ReportGenerationPage(fixture.page);
     await RGPageloc.Opendept();
});

When("Select the New Account Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.OpenNewAC();
});

When("Select the Closed Account Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.ClosedAC();
});

When("Select the Customer Segmentation Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.CustSegment();
});

When("Select the Reactivated Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.Reactivate();
});

When("Select the Vault Transaction Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.VaultTxn();
});
	
When("Select the Cash Position Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.CashPosition();
});

When("Select the UDF Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.UDF();
});

When("Select the Cash Transaction Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.CashTxn();
});

When("Select the TD mature Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.TD();
});

When("Select the Teller Transaction Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.TellerTxn();
});

When("Select the Loan Disbursement Folder", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.LoanDisbursement();
});

When("Open the Report", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.OpenReport();
});

When("Enter the Branch for New Account {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforNewAccount(bno);
});

When("Enter the Branch for Closed Account {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforClosedAccount(bno);
});

When("Enter the Branch for Customer Segment {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforCustSegment(bno);
});

When("Enter the Branch for Reactivated {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforReactivate(bno);
});

When("Enter the Branch for Vault Transaction {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforVaultTxn(bno);
});

When("Enter the Branch for UDF {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforUDF(bno);
});

When("Enter the Branch for Cash Transaction {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforCashTxn(bno);
});

When("Enter the Branch for TD mature {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforTD(bno);
});

When("Enter the Branch for Teller Transaction {string}", async function (bno : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterBranchforTellerTxn(bno);
});

When("Enter the Currency for Vault Transaction {string}", async function (currency : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterCurrencyforVaultTxn(currency);
});


When("Enter the Currency for UDF {string}", async function (currency : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterCurrencyforUDF(currency);
});

When("Enter the UserID for Cash Position {string}", async function (UserID : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterUserIDforCashPosition(UserID);
});

When("Enter the UserID for Cash Transaction {string}", async function (UserID : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterUserIDforCashTxn(UserID);
});

When("Enter the UserID for Teller Transaction {string}", async function (UserID : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterUserIDforTellerTxn(UserID);
});

When("Enter the AccountType for Cash Transaction {string}", async function (ACType : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterACTypeforCashTxn(ACType);
});

When("Enter the Amount From for Large Cash Transaction {string}", async function (AmtFrom : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterAmtFromforCashTxn(AmtFrom);
});

When("Enter the Amount To for Large Cash Transaction {string}", async function (AmtTo : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterAmtToforCashTxn(AmtTo);
});

// Enter the Date for Cash Position
When("Enter the Date for Cash Position {string}", async function (Date : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterDateforCashPosition(Date);
});
      
When("Enter the Start Date {string}", async function (sdate : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterSdate(sdate);
});

When("Enter the Start Date for Loan Disbursement {string}", async function (sdate : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterSdateforLD(sdate);
});

When("Enter the End Date {string}", async function (edate : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterEdate(edate);

    
});

When("Enter the End Date for Loan Disbursement {string}", async function (edate : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterEdateforLD(edate);
});

When("Enter the Transaction Date for Teller Transaction {string}", async function (TxnDate : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterTxnDateforTT(TxnDate);
});

When("Enter the Date of Transaction for UDF {string}", async function (TxnDate : string) {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.EnterTxnDateforUDF(TxnDate);
});

When("Run the Report", async function () {
    const RGPageloc = new ReportGenerationPage(fixture.page);
    await RGPageloc.RunReport();
});
