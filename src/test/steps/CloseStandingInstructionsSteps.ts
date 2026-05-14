import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

import LoginPage from "../../pages/LoginPage";


import ReusableMethods from "../../helper/wrapper/reusableMethods";
import { timeout } from "../../hooks/hooks";
import StandingInstructionsPage from "../../pages/CloseStandingInstructionsPage";

const reusableMethods = new ReusableMethods(fixture.page);
let StandingInstruction: StandingInstructionsPage;

setDefaultTimeout(timeout);


When("user enter Instrument Number as {string}",
  async function (instrmentno: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.enterInstrnumber(instrmentno);

  });
  When("user enter SI Currency as {string}",
  async function (sicurrncy: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.entersicurrency(sicurrncy);

  });
  When("user enter SI Amount as {string}",
  async function (siamt: string) {
    StandingInstruction = new StandingInstructionsPage(fixture.page);
    await StandingInstruction.entersiamount(siamt);
  });
  When("clicks on OK button", async function () {
    await StandingInstruction.clickOK();
  });
  When('user clicks on Enter Query SI', async function () {
        fixture.logger.info("Clicking New in Book Transfer");
          StandingInstruction = new StandingInstructionsPage(fixture.page);
          //await bookTransfer.handledeleteBookTransferFrame();
          await StandingInstruction.clickEnterQuery();
      });
         
         
      When('user clicks on Execute Query SI', async function () {
          await StandingInstruction.clickExecuteQuery();
      });
      
    
      When('user clicks on Authorize tab SI', async function () {
         fixture.logger.info("Clicking tab in GS");
        await StandingInstruction.clickAuthorizetabgs();
      });
      
      When('user clicks on Authorize button SI', async function () {
        fixture.logger.info("Clicking authbtn in ILCB");
        await StandingInstruction.clickAuthorizebtngs();
      });