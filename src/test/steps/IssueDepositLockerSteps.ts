import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";
import IssueDepositLockerPage from "../../pages/IssueDepositLockerPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
import IssueDepositLockersPage from "../../pages/IssueDepositLockerPage";

const reusableMethods = new ReusableMethods(fixture.page);
let IssueDepositLocker: IssueDepositLockerPage;

setDefaultTimeout(timeout);

When("user clicks on New button IDL",async function () {
    fixture.logger.info("Clicking New in IssueDepositLocker");
     IssueDepositLocker = new IssueDepositLockerPage(fixture.page);
    await IssueDepositLocker.handleIssueDepositLockerFrame();
    await IssueDepositLocker.clickNewbutton();
  }
);

When("user enters ProductCode IDL as {string}",
  async function (Productcodedl: string) {
    IssueDepositLocker = new IssueDepositLockerPage(fixture.page);
    await IssueDepositLocker.enterproductcodel(Productcodedl);

  });

When("user click on P IDL", async function () {
  await IssueDepositLocker.clickPtab();
});

When("user enters Vault code IDL as {string}",
  async function (vaultcode: string) {
    IssueDepositLocker = new IssueDepositLockersPage(fixture.page);
    await IssueDepositLocker.entervaultcode(vaultcode);

  });
  When("user enters Customer IDL as {string}",
  async function (customer: string) {
    IssueDepositLocker = new IssueDepositLockersPage(fixture.page);
    await IssueDepositLocker.entercustomer(customer);

  });
   When("user enters Branch IDL as {string}",
  async function (branch: string) {
    IssueDepositLocker = new IssueDepositLockersPage(fixture.page);
    await IssueDepositLocker.enterbranch(branch);

  });
  When("user enters Account number IDL as {string}",
  async function (accnumber: string) {
    IssueDepositLocker = new IssueDepositLockersPage(fixture.page);
    await IssueDepositLocker.enteraccnumber(accnumber);

  });
  
  When("clicks on save tab IDL", async function () {
    await IssueDepositLocker.clicksave();
  });

  Then("clicks on OK tab IDL", async function () {
    await IssueDepositLocker.clickOk();
  });
  When('user clicks on Enter Query IDL', async function () {
    fixture.logger.info("Clicking New in Book Transfer");
      IssueDepositLocker = new IssueDepositLockersPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await IssueDepositLocker.clickEnterQuery();
  });
  
  When("get Contract Reference IDL", async function () {
       IssueDepositLocker = new IssueDepositLockersPage(fixture.page);
         fixture.logger.info("Fetch Contract Reference");
      await IssueDepositLocker.getcontrarefn();
  });
  When('user enters Contract Reference IDl', async function () {
      fixture.logger.info("Entering contract reference in IssueDepositLocker Page");
        IssueDepositLocker = new IssueDepositLockerPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await IssueDepositLocker.entercontractrefrn();
    });
  
  
  When('user clicks on Execute Query IDL', async function () {
      await IssueDepositLocker.clickExecuteQuery();
  });
  When('user clicks on Authorize tab IDL', async function () {
     fixture.logger.info("Clicking tab in Book Transfer");
    await IssueDepositLocker.clickAuthorizetab();
  });
  
  When('user clicks on Authorize button IDL', async function () {
    fixture.logger.info("Clicking authbtn in Book Transfer");
    await IssueDepositLocker.clickAuthorizebtn();
  });
  
  