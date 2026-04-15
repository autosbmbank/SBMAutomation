import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";
import BookTransferPage from "../../pages/BookTransferPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";

const reusableMethods = new ReusableMethods(fixture.page);
let bookTransfer: BookTransferPage;

setDefaultTimeout(timeout);

When("user clicks on New",
  async function () {
    fixture.logger.info("Clicking New in Book Transfer");
    bookTransfer = new BookTransferPage(fixture.page);
    await bookTransfer.handleBookTransferFrame();
    await bookTransfer.clickNew();
  }
);

When("user enters sourcecodeb as {string}",
  async function (SourceCodeb: string) {
    bookTransfer = new BookTransferPage(fixture.page);
    await bookTransfer.enterSourceCodeb(SourceCodeb);
  }
);
When("user enters Networkcodeb as {string}",
  async function (Networkcodeb: string) {
    bookTransfer = new BookTransferPage(fixture.page);
    await bookTransfer.enterNetworkcodeb(Networkcodeb);
  }
);

When("user enters Debtor account as {string}",
  async function (DebitorAccount: string) {
    await bookTransfer.enterDebitorAccount(DebitorAccount);
    
  }
);

When(
  "user enters creditor account as {string}",
  async function (CreditorAccount: string) {
    await bookTransfer.enterCreditorAccount(CreditorAccount);
  }
);

/*When(
  "user enters creditor Currency as {string}",
  async function (CreditCurrency: string) {
    await bookTransfer.enterCreditCurrency(CreditCurrency);
  }
);*/

When("user enters creditor amount as {string}",
  async function (CreditAmount: string) {
    await bookTransfer.enterCreditAmount(CreditAmount);
  }
);
When("user enters exchange rate as {string}",
  async function (Exchangerate: string) {
    await bookTransfer.enterExchangerate(Exchangerate);

  }
);

When("click on Enrich button", async function () {
  await bookTransfer.clickEnrich();
});



When("clicks on save button", async function () {
  await bookTransfer.saveTransaction();
});

Then("clicks on OK button", async function () {
  await bookTransfer.clickOKbutton1();
});
/* ------------------- Delete Transaction -------------------*/

When('user clicks on Enter Query', async function () {
  fixture.logger.info("Clicking New in Book Transfer");
    bookTransfer = new BookTransferPage(fixture.page);
    //await bookTransfer.handledeleteBookTransferFrame();
    await bookTransfer.clickEnterQuery();
});

When(
  'user enters Transaction reference number as {string}',
  async function (refNo: string) {
      await bookTransfer.enterTransactionReferenceNumber(refNo);
  }
);

When('user clicks on Execute Query', async function () {
    await bookTransfer.clickExecuteQuery();
});


/*Then("clicks on Delete", async function () {
  fixture.logger.info("Clicking Delete button");
  await bookTransfer.clickDeletebutton();
}); */


/*--------------------------------------------------------*/

When('user clicks on Authorize tab', async function () {
   fixture.logger.info("Clicking tab in Book Transfer");
  await bookTransfer.clickAuthorizetab();
});

When('user clicks on Authorize button', async function () {
  fixture.logger.info("Clicking authbtn in Book Transfer");
  await bookTransfer.clickAuthorizebtn();
});



/*--------------------------------------------------------

When(
  "user selects Instructed Currency Indicator as {string}",
  async function (debitcurrency: string) {
    await bookTransfer.selectDebitCurrency(debitcurrency);
  }
);

When("User enters the debit amount as {string}", async function(debitAmount : string){
    bookTransfer = new BookTransferPage(fixture.page);
 await bookTransfer.enterdebitAmount(debitAmount);
})

/*--------------------------------------------------------

When("user selects checkbox {string}",
  async function (TemplateID: string) {
    await bookTransfer.selectTemplateCheckbox(TemplateID);
  }); */

