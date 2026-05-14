import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import MCPage from "../../pages/MaintainCollateralPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
 

const reusableMethods = new ReusableMethods(fixture.page);
let MaintainCollateral: MCPage;

When('user clicks on Enter Query in MC', async function () {
    fixture.logger.info("Clicking Enter Query in Maintain Collateral Page");
     MaintainCollateral  = new MCPage(fixture.page);      
      await MaintainCollateral.clickEnterQuery();
  });
  When('user clicks on Execute Query in MC', async function () {
    fixture.logger.info("Clicking Execute Query in Maintain Collateral Page");
      MaintainCollateral = new MCPage(fixture.page);      
      await MaintainCollateral.clickExecuteQuery();
  });  
  
   When('user enters Collateral Code MC as {string}',
    async function (collateralcode: string) {
      MaintainCollateral = new MCPage(fixture.page);
      await MaintainCollateral.entercollateralcode(collateralcode);
  
    });
    When('user enters Liability Number MC as {string}',
    async function (Liabilityno: string) {
      MaintainCollateral = new MCPage(fixture.page);
      await MaintainCollateral.enterliabilityno(Liabilityno);
  
    });
    When('user search liab no in MC', async function () {
    fixture.logger.info("Clicking search liab no in Maintain Collateral Page");
     MaintainCollateral  = new MCPage(fixture.page);      
      await MaintainCollateral.clicksearchliab();
  });
  When('user fetch Liab No in MC', async function () {
    fixture.logger.info("Clicking search liab no in Maintain Collateral Page");
     MaintainCollateral  = new MCPage(fixture.page);      
      await MaintainCollateral.clicksfetchliab();
  });