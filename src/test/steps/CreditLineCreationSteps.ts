import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";
import CLCreationPage from "../../pages/CreditLineCreationPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";

const reusableMethods = new ReusableMethods(fixture.page);
let CLCreation: CLCreationPage;

setDefaultTimeout(timeout);

When("user clicks on Newtab CLC",async function () {
    fixture.logger.info("Clicking New in CLC page");
     CLCreation = new CLCreationPage(fixture.page);
        await CLCreation.clickNewtab();
  });

When("user enters Liability No CLC as {string}",
  async function (liabilityno: string) {
    CLCreation = new CLCreationPage(fixture.page);
    await CLCreation.enterliabilityno(liabilityno);

  });

When("user enters Line Code CLC as {string}",
  async function (linecode: string) {
    CLCreation = new CLCreationPage(fixture.page);
    await CLCreation.enterlinecode(linecode);

  });


  When("clicks on save button CLC", async function () {
    await CLCreation.clicksave();
  });
  When("user exits CreditLineCreationPage CLC", async function () {
    await CLCreation.clickexit();
  });
  When("clicks on OK btn CLC", async function () {
    await CLCreation.clickokbtn();
  });
  When('user clicks on Enter Query CLC', async function () {
      fixture.logger.info("Clicking New in Book Transfer");
        CLCreation = new CLCreationPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await CLCreation.clickEnterQuery();
    });
       
       
    When('user clicks on Execute Query CLC', async function () {
        await CLCreation.clickExecuteQuery();
    });
    
  
    When('user clicks on Authorize tab CLC', async function () {
       fixture.logger.info("Clicking tab in GS");
      await CLCreation.clickAuthorizetabgs();
    });
    
    When('user clicks on Authorize button CLC', async function () {
      fixture.logger.info("Clicking authbtn in ILCB");
      await CLCreation.clickAuthorizebtngs();
    });
    When("clicks on OK button CLC", async function () {
    await CLCreation.clickOK();
  });