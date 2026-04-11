import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

import RTGSOutboundPage from "../../pages/RTGSOutboundPage";
import { timeout } from "../../hooks/hooks";


const reusableMethods = new ReusableMethods(fixture.page);
let RtgsOutbound: RTGSOutboundPage;

setDefaultTimeout(timeout);


When("User click on NewTab",async function(){
       fixture.logger.info("clicks on New Tab");  
       RtgsOutbound = new RTGSOutboundPage(fixture.page);     
        await RtgsOutbound.handleRTGSOutboundFrame();
        await RtgsOutbound.clickNewTab();
})

When('User enters the SourceCode as {string}', async function (Scode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Entering SourceCode: ${Scode}`);
    await RtgsOutbound.enterSourceCode(Scode);
});

When('User enters the NetworkCode as {string}', async function (Ncode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Entering NetworkCode: ${Ncode}`);
    await RtgsOutbound.enterNetworkCode(Ncode);
});
When('User enters the Transfer Currency as {string}', async function (TCcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Entering Transfer Currency: ${TCcode}`);
    await RtgsOutbound.enterTransferCurrency(TCcode);
});
When('User enters the Transfer amount as {string}', async function (TAcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Entering Transfer Amount: ${TAcode}`);
    await RtgsOutbound.enterTransferAmount(TAcode);
});
When('User enters the Network account as {string}', async function (NAcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Entering Network Account: ${NAcode}`);
    await RtgsOutbound.enterNetworkAccount(NAcode);
});
When('User enters the Debit account as {string}', async function (DAcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Entering Debit Account: ${DAcode}`);
    await RtgsOutbound.enterDebitAccount(DAcode);
});
When('User enters the Debitor BICFI as {string}', async function (DBcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Enter DebitorBICFI: ${DBcode}`);
    await RtgsOutbound.enterDebitorBICFI(DBcode);
});
When('User enters the Creditor Agent BICFI as {string}', async function (CAcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Enter Creditor Agent BICFI: ${CAcode}`);
    await RtgsOutbound.enterCreditorAgentBICFI(CAcode);
});
When('User enters the Debitor Agent BICFI as {string}', async function (DAcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Enter Debitor Agent BICFI: ${DAcode}`);
    await RtgsOutbound.enterDebitorAgentBICFI(DAcode);
});

When('User enters the Creditor BICFI as {string}', async function (CBcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Enter CreditorBICFI: ${CBcode}`);
    await RtgsOutbound.enterCreditorBICFI(CBcode);
});
When('User enters the Instructing Agent BICFI as {string}', async function (IAcode) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Enter Instructing Agent BICFI: ${IAcode}`);
    await RtgsOutbound.enterInstructingAgentBICFI(IAcode);
});
When('User clicks on enrich button', async function () {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    // fixture.logger.info(`Clicking on enrich button: ${Enrichcode}`);
    await RtgsOutbound.clickEnrich();
});
When('User clicks on save button', async function () {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    // fixture.logger.info(`Clicking on save button: ${Save}`);
    await RtgsOutbound.saveTransaction();
});
When('User clicks on Ok button as {string}', async function (Ok) {
    RtgsOutbound = new RTGSOutboundPage(fixture.page);
    fixture.logger.info(`Clicking on Ok button: ${Ok}`);
    await RtgsOutbound.clickOk();
});