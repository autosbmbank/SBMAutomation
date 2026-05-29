import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
 
import LoginPage from "../../pages/LoginPage";
import LoanForeclosurePage from "../../pages/ForeclosureofLoanPage";
 
import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
 
const reusableMethods = new ReusableMethods(fixture.page);
let LoanForeclosure: LoanForeclosurePage;
 
setDefaultTimeout(timeout);
 
When("user clicks on Newtab FOL",async function () {
    fixture.logger.info("Clicking New in Standing Instructions");
     LoanForeclosure = new LoanForeclosurePage(fixture.page);
        await LoanForeclosure.clickNewtab();
  }
);
When('user click on preclosure FOL', async function () {
  await LoanForeclosure.clickpreclosure();
});
 
When("user enters Account Number FOL as {string}",
  async function (accountno: string) {
    LoanForeclosure = new LoanForeclosurePage(fixture.page);
    await LoanForeclosure.enterAccountnumber(accountno);
 
  });
 
When("user click on Popualte Due button FOL", async function () {
  await LoanForeclosure.clickPopulate();
});
When("user click on Allocate button FOL", async function () {
  await LoanForeclosure.clickAllocate();
});
 
 
  When("user get Total amount Due FOL", async function () {
     LoanForeclosure = new LoanForeclosurePage(fixture.page);
       fixture.logger.info("Fetch Total Amount");
    await LoanForeclosure.gettotalamount();
});
 
When('user enter Total amount Due FOL', async function () {
    fixture.logger.info("Entering Total Amount");
      LoanForeclosure = new LoanForeclosurePage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await LoanForeclosure.entertotalamount();
  });
 
 
  When("clicks on save button FOL", async function () {
    await LoanForeclosure.clicksave();
  });
  When("user exits LoanRepaymentUnScheduled FOL", async function () {
    await LoanForeclosure.clickexit();
  });
  When("clicks on OK btn FOL", async function () {
    await LoanForeclosure.clickokbtn();
  });
  When('user clicks on Enter Query FOL', async function () {
      fixture.logger.info("Clicking New in Book Transfer");
        LoanForeclosure = new LoanForeclosurePage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await LoanForeclosure.clickEnterQuery();
    });
       
       
    When('user clicks on Execute Query FOL', async function () {
        await LoanForeclosure.clickExecuteQuery();
    });
   
 
    When('user clicks on Authorize tab FOL', async function () {
       fixture.logger.info("Clicking tab in GS");
      await LoanForeclosure.clickAuthorizetabgs();
    });
   
    When('user clicks on Authorize button FOL', async function () {
      fixture.logger.info("Clicking authbtn in ILCB");
      await LoanForeclosure.clickAuthorizebtngs();
    });
    When("clicks on OK button FOL", async function () {
    await LoanForeclosure.clickOK();
  });