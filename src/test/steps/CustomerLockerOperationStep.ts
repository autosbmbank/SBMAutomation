import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CLOPage from "../../pages/CustomerLockerOperationPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";
 

const reusableMethods = new ReusableMethods(fixture.page);
let CustomerLockerOperation: CLOPage;

When('user clicks on New CLO', async function () {
    fixture.logger.info("Clicking Enter Query in Customer Locker Operation Page");
     CustomerLockerOperation  = new CLOPage(fixture.page);      
      await CustomerLockerOperation.clickNewCLO();
  });
  When('get Waitlist CLO', async function () {
    fixture.logger.info("Waitlist Number");
     CustomerLockerOperation  = new CLOPage(fixture.page);      
      await CustomerLockerOperation.getwaitlist();
  });
  When('user enters Waitlist CLO', async function () {
      fixture.logger.info("Entering contract reference in Guarantee Page");
        CustomerLockerOperation = new CLOPage(fixture.page);
        //await bookTransfer.handledeleteBookTransferFrame();
        await CustomerLockerOperation.enterwaitlist();
    });
  When('user enters Box Type CLO as {string}',
    async function (boxtype: string) {
      CustomerLockerOperation = new CLOPage(fixture.page);
      await CustomerLockerOperation.enterBoxtype(boxtype);
  
    });
    When('user enters Branch Code CLO as {string}',
    async function (branchcode: string) {
      CustomerLockerOperation = new CLOPage(fixture.page);
      await CustomerLockerOperation.enterBranchcode(branchcode);
  
    });
    When('user enters Name CLO as {string}',
    async function (name: string) {
      CustomerLockerOperation = new CLOPage(fixture.page);
      await CustomerLockerOperation.enterName(name);
  
    });
    When('user enters Address CLO as {string}',
    async function (address: string) {
      CustomerLockerOperation = new CLOPage(fixture.page);
      await CustomerLockerOperation.enterAddress(address);
  
    });
    When('user enters Phone Number CLO as {string}',
    async function (Phonenumber: string) {
      CustomerLockerOperation = new CLOPage(fixture.page);
      await CustomerLockerOperation.enterPhoneNumber(Phonenumber);
  
    });
    When("clicks on save btn in CLO", async function () {
        await CustomerLockerOperation.clicksaveguarantee();
      });
      Then("clicks on OK btn in CLO", async function () {
          await CustomerLockerOperation.clickOk();
        });
    When("user clicks on exits CustomerLockerOperationPage", async function () {
        await CustomerLockerOperation.clickexit();
      });

When('user clicks on Enter Query in CLO', async function () {
    fixture.logger.info("Clicking Enter Query in Customer Locker Operation Page");
     CustomerLockerOperation  = new CLOPage(fixture.page);      
      await CustomerLockerOperation.clickEnterQuery();
  });
  When('user clicks on Execute Query in CLO', async function () {
    fixture.logger.info("Clicking Execute Query in Customer Locker Operation Page");
      CustomerLockerOperation = new CLOPage(fixture.page);      
      await CustomerLockerOperation.clickExecuteQuery();
  });  
  Then("clicks on OK button in CLO", async function () {
          await CustomerLockerOperation.clickOkbtn();
        });
  When('user clicks Authorize tab CLO', async function () {
    fixture.logger.info("Clicking Authorize tab in Customer Locker Operation Page");
     CustomerLockerOperation  = new CLOPage(fixture.page);      
      await CustomerLockerOperation.clickAuthorizetab();
  });
  

  
   
    
    