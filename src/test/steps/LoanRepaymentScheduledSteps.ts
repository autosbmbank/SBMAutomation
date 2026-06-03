import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
 
import LoginPage from "../../pages/LoginPage";
import LRscheduledPage from "../../pages/LoanRepaymentScheduledPage";
 
import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
 
const reusableMethods = new ReusableMethods(fixture.page);
let LRscheduled: LRscheduledPage;
 
setDefaultTimeout(timeout);
 
When("user clicks on Newtab LRS",async function () {
    fixture.logger.info("Clicking New in Standing Instructions");
     LRscheduled = new LRscheduledPage(fixture.page);
        await LRscheduled.clickNewtab();
  }
);

When("clicks on accept in LRS", async function () {
    await LRscheduled.clickacceptelrs();
  });
 
When("user enters Account Number LRS as {string}",
  async function (accountno: string) {
    LRscheduled = new LRscheduledPage(fixture.page);
    await LRscheduled.enterAccountnumber(accountno);
 
  });
 
When("user click on Popualte Due button LRS", async function () {
  await LRscheduled.clickPopulate();
});
When("user click on Allocate button LRS", async function () {
  await LRscheduled.clickAllocate();
});
 
When("user get Total amount Due LRS", async function () {
     LRscheduled = new LRscheduledPage(fixture.page);
       fixture.logger.info("Fetch Total Amount");
    await LRscheduled.gettotalamount();
});
 
When('user enter Total amount Due LRS', async function () {
    fixture.logger.info("Entering Total Amount");
      LRscheduled = new LRscheduledPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await LRscheduled.entertotalamount();
  });
 
 
  When("clicks on save button LRS", async function () {
    await LRscheduled.clicksave();
  });
  When("user exits LoanRepaymentScheduled LRS", async function () {
    await LRscheduled.clickexit();
  });
  When("clicks on OK btn LRS", async function () {
    await LRscheduled.clickokbtn();
  });
  When('user clicks on Enter Query LRS', async function () {
      fixture.logger.info("Clicking New in Book Transfer");
        LRscheduled = new LRscheduledPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LRscheduled.clickEnterQuery();
    });
       
       
    When('user clicks on Execute Query LRS', async function () {
        await LRscheduled.clickExecuteQuery();
    });
   
 
    When('user clicks on Authorize tab LRS', async function () {
       fixture.logger.info("Clicking tab in GS");
      await LRscheduled.clickAuthorizetabgs();
    });
   
    When('user clicks on Authorize button LRS', async function () {
      fixture.logger.info("Clicking authbtn in ILCB");
      await LRscheduled.clickAuthorizebtngs();
    });
    When("clicks on OK button LRS", async function () {
    await LRscheduled.clickOK();
  });
