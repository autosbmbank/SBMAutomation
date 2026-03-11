import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import homePage from "../../pages/HomePage";


import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"

let homePageloc: homePage;


setDefaultTimeout(timeout);

When(`enters the function name as {string} and click on search button`, async function(funName) {
homePageloc = new homePage(fixture.page);
    fixture.logger.info("Enter the function name and click on search button");
    await homePageloc.enterFunctionName(funName);
    await fixture.page.waitForTimeout(10000)
});

Given(`enter the Branch number as {string}`, async function(number) {
     homePageloc = new homePage(fixture.page);
    fixture.logger.info("Select the Branch number");
    await homePageloc.changeBranchNumber(number);
    await fixture.page.waitForTimeout(2000)
});
