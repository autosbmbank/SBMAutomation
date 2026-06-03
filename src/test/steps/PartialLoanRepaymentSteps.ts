import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
 
import LoginPage from "../../pages/LoginPage";
import PartialLRPage from "../../pages/PartialLoanRepaymentPage";
 
import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
 
const reusableMethods = new ReusableMethods(fixture.page);
let PartialLR: PartialLRPage;
 
setDefaultTimeout(timeout);
 
When("user clicks on Newtab PLR",async function () {
    fixture.logger.info("Clicking New in Standing Instructions");
     PartialLR = new PartialLRPage(fixture.page);
        await PartialLR.clickNewtab();
  }
);
 
When("user enters Account Number PLR as {string}",
  async function (accountno: string) {
    PartialLR = new PartialLRPage(fixture.page);
    await PartialLR.enterAccountnumber(accountno);
 
  });
 
When("user click on Popualte Due button PLR", async function () {
  await PartialLR.clickPopulate();
});
When("user click on Allocate button PLR", async function () {
  await PartialLR.clickAllocate();
});
 
When("user enters Settlement Amount PLR as {string}",
  async function (settleamount: string) {
    PartialLR = new PartialLRPage(fixture.page);
    await PartialLR.entersettleamount(settleamount);
 
  });
 
 
  When("clicks on save button PLR", async function () {
    await PartialLR.clicksave();
  });
  When("user exits PartialLoanRepayment PLR", async function () {
    await PartialLR.clickexit();
  });
  When("clicks on OK btn PLR", async function () {
    await PartialLR.clickokbtn();
  });
  When('user clicks on Enter Query PLR', async function () {
      fixture.logger.info("Clicking New in Book Transfer");
        PartialLR = new PartialLRPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await PartialLR.clickEnterQuery();
    });
       
       
    When('user clicks on Execute Query PLR', async function () {
        await PartialLR.clickExecuteQuery();
    });
   
 
    When('user clicks on Authorize tab PLR', async function () {
       fixture.logger.info("Clicking tab in GS");
      await PartialLR.clickAuthorizetabgs();
    });
   
    When('user clicks on Authorize button PLR', async function () {
      fixture.logger.info("Clicking authbtn in ILCB");
      await PartialLR.clickAuthorizebtngs();
    });
    When("clicks on OK button PLR", async function () {
    await PartialLR.clickOK();
  });