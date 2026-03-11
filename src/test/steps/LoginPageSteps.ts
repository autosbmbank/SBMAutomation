import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";


import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"


const reusableMethods = new ReusableMethods(fixture.page);

let loginPageloc: loginPage;


setDefaultTimeout(timeout);


Given("User navigates to the application", async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Navigated to the application");
    await fixture.page.goto(process.env.BASEURL);
    let title = await fixture.page.title();
    console.log("Title is " + title)

});

When(`MAK user enters the username and password`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Enter the user name and Password");
    await loginPageloc.enterUserName(process.env.MAKUserName);
    await fixture.page.waitForTimeout(2000)
    await loginPageloc.enterPassword(process.env.MAKPassword);
});



When(`CHE user enters the username and password`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Enter the user name and Password");
    await loginPageloc.enterUserName(process.env.CHEUserName);
    await fixture.page.waitForTimeout(2000)
    await loginPageloc.enterPassword(process.env.CHEPassword);
});

When(`CHE second user enters the username and password`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Enter the user name and Password");
    await loginPageloc.enterUserName(process.env.CHEUserName1);
    await fixture.page.waitForTimeout(2000)
    await loginPageloc.enterPassword(process.env.CHEPassword1);
});
When('CHE second user login in the application', async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Login Button");
    await fixture.page.waitForTimeout(1000)
    await loginPageloc.chkLoginBtn(process.env.CHEPassword1);
  await loginPageloc.handleFrame();
});

When(`click on signin button`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Login Button");
    await fixture.page.waitForTimeout(1000)
    await loginPageloc.loginBtn(process.env.MAKPassword);
    console.log("Clicked on login button")
   await loginPageloc.handleFrame();
    

});


When(`CHE click on signin button`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Login Button");
    await fixture.page.waitForTimeout(1000)
    await loginPageloc.loginBtn(process.env.CHEPassword);
   await loginPageloc.handleFrame();
    

});

Then(`valdiate the home page tite as {string}`, async function (msg) {
    
   await loginPageloc.validateHomePageTitle(msg)
});

When("User signoff the application", async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Signoff Button");
    await loginPageloc.signoff();
})

When("User Maintenance signoff the application", async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Signoff Button");
    await loginPageloc.Msignoff();
})



When('CHE user login in the application', async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Login Button");
    await fixture.page.waitForTimeout(1000)
    await loginPageloc.chkLoginBtn(process.env.CHEPassword);
  await loginPageloc.handleFrame();
});

When('MAK user login in the application', async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Login Button");
    await fixture.page.waitForTimeout(1000)
    await loginPageloc.loginBtn1(process.env.MAKPassword);
    console.log("Clicked on login button veeru")
   await loginPageloc.handleFrame();
});

When("user SignOff the application", async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Clicking on Signoff Button");
    await loginPageloc.Signoff();
})