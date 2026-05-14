import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import MFPage from "../../pages/MaintainFacilityPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
 

const reusableMethods = new ReusableMethods(fixture.page);
let MaintainFacility: MFPage;

When('user clicks on Enter Query in MF', async function () {
    fixture.logger.info("Clicking Enter Query in Maintain Collateral Page");
     MaintainFacility  = new MFPage(fixture.page);      
      await MaintainFacility.clickEnterQuery();
  });
  When('user clicks on Execute Query in MF', async function () {
    fixture.logger.info("Clicking Execute Query in Maintain Collateral Page");
      MaintainFacility = new MFPage(fixture.page);      
      await MaintainFacility.clickExecuteQuery();
  });  
  
   When('user enters Limit reference MF as {string}',
    async function (limitrefn: string) {
      MaintainFacility = new MFPage(fixture.page);
      await MaintainFacility.enterlimitrefn(limitrefn);
  
    });
    When('user enters Liability Number MF as {string}',
    async function (Liabilityno: string) {
      MaintainFacility = new MFPage(fixture.page);
      await MaintainFacility.enterliabilityno(Liabilityno);
  
    });
    