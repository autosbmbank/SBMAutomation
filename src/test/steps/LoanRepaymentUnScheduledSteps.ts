import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
 
import LoginPage from "../../pages/LoginPage";
import LRUncheduledPage from "../../pages/LoanRepaymentUnScheduledPage";
 
import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
 
const reusableMethods = new ReusableMethods(fixture.page);
let LRUnscheduled: LRUncheduledPage;
 
setDefaultTimeout(timeout);
 
When("user clicks on Newtab LRUS",async function () {
    fixture.logger.info("Clicking New in Standing Instructions");
     LRUnscheduled = new LRUncheduledPage(fixture.page);
        await LRUnscheduled.clickNewtab();
  }
);
 
When("user enters Account Number LRUS as {string}",
  async function (accountno: string) {
    LRUnscheduled = new LRUncheduledPage(fixture.page);
    await LRUnscheduled.enterAccountnumber(accountno);
 
  });
 
When("user click on Popualte Due button LRUS", async function () {
  await LRUnscheduled.clickPopulate();
});
When("user click on Allocate button LRUS", async function () {
  await LRUnscheduled.clickAllocate();
});
 
 
  When("user get Total amount Due LRUS", async function () {
     LRUnscheduled = new LRUncheduledPage(fixture.page);
       fixture.logger.info("Fetch Total Amount");
    await LRUnscheduled.gettotalamount();
});
 
When('user enter Total amount Due LRUS', async function () {
    fixture.logger.info("Entering Total Amount");
      LRUnscheduled = new LRUncheduledPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await LRUnscheduled.entertotalamount();
  });
 
 
  When("clicks on save button LRUS", async function () {
    await LRUnscheduled.clicksave();
  });
  When("user exits LoanRepaymentUnScheduled LRUS", async function () {
    await LRUnscheduled.clickexit();
  });
  When("clicks on OK btn LRUS", async function () {
    await LRUnscheduled.clickokbtn();
  });
  When('user clicks on Enter Query LRUS', async function () {
      fixture.logger.info("Clicking New in Book Transfer");
        LRUnscheduled = new LRUncheduledPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LRUnscheduled.clickEnterQuery();
    });
       
       
    When('user clicks on Execute Query LRUS', async function () {
        await LRUnscheduled.clickExecuteQuery();
    });
   
 
    When('user clicks on Authorize tab LRUS', async function () {
       fixture.logger.info("Clicking tab in GS");
      await LRUnscheduled.clickAuthorizetabgs();
    });
   
    When('user clicks on Authorize button LRUS', async function () {
      fixture.logger.info("Clicking authbtn in ILCB");
      await LRUnscheduled.clickAuthorizebtngs();
    });
    When("clicks on OK button LRUS", async function () {
    await LRUnscheduled.clickOK();
  });