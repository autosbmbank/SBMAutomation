import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import ARAPage from "../../pages/AmendRetailAccountPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";


const reusableMethods = new ReusableMethods(fixture.page);
let ARAccount: ARAPage;

When('user clicks on Enter Query in ARA', async function () {
    fixture.logger.info("Clicking Enter Query in ARAccount Page");
      ARAccount = new ARAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ARAccount.clickEnterQuery();
  });
  When('user clicks on Execute Query in ARA', async function () {
    fixture.logger.info("Clicking Execute Query in ARAccount Page");
      ARAccount = new ARAPage(fixture.page);
      //await bookTransfer.handledeleteBookTransferFrame();
      await ARAccount.clickExecuteQuery();
  });
  
  
  
   When("user enters Customer Number ARA as {string}",
    async function (custrnumber: string) {
      ARAccount = new ARAPage(fixture.page);
      await ARAccount.entercustomernumber(custrnumber);
  
    });