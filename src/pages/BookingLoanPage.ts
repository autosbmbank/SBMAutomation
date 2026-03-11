import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,account
let popupframe;
let overrideframe;
let successframe;
export default class BookingLoanPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {

        newTab :"//a[normalize-space()='New']",
        productCode :"//input[@id='BLK_ACCOUNT_MASTER__PROD']",
        customerID:"//input[@id='BLK_ACCOUNT_MASTER__CUSTID']",
        currency:"//input[@id='BLK_ACCOUNT_MASTER__CCY']",
        amount:"//input[@id='BLK_ACCOUNT_MASTER__AMTFINANCEDI']",
        productDefault:"//button[@id='BLK_ACCOUNT_MASTER__BTN_DEFAULT']",
        enrich:"//button[@id='BLK_ACCOUNT_MASTER__BTN_ENRICH']",
        preference:"//span[normalize-space()='Preferences']",
        autoLiquidation:"//label[@for='BLK_ACCOUNT_MASTER__TRACKRECEVALIQ']//div[@class='DIVChkRadSel']",
        saveBtn:"//a[normalize-space()='Save']",
        acceptBtn:"//input[@id='BTN_ACCEPT']",
        // successmsg:"//span[@title='Successfully Saved']",
        okBtn:"//input[@id='BTN_OK']",
       enterQuery : "//li[@id='EnterQuery']//a", 
       accountNumber : "//input[@id='BLK_ACCOUNT_MASTER__ACCNO'] ",
       executeQuery : "//a[normalize-space()='Execute Query']", 
       autorizeBtn : "//a[normalize-space()='Authorize']", 
       authorize1 : "//button[@id='BLK_ACCOUNTDETAILS__BTN_AUTH']",
       okButton : "//input[@id='BTN_OK']",

       newButton: "//a[normalize-space()='New']",
        accountNmber : "//input[@id='BLK_DSBR_MASTER__ACTNO']",
        defaultBtn : "//button[@id='BLK_DSBR_MASTER__BTN_DEFAULT']", 
        settlementamount : "//input[@id='BLK_DSBR_DETAIL__STTLAMTI']", 
        loancurrencyequivalent : "//input[@id='BLK_DSBR_DETAIL__STTLLCYEQI']",
        defaultsettlementBtn : "//button[@id='BLK_DSBR_DETAIL__BTN_FETCH_SETTLEMENT']",
        OkButton : "//input[@id='BTN_OK']", 
        computeChanrgesBtn : "//button[@id='BLK_DSBR_MASTER__BTN_COMPUTE_CHARGES']",
        // saveBtn : "//a[normalize-space()='Save']",
        // okBtn : "//input[@id='BTN_OK']",
        // enterQuery : "//a[normalize-space()='Enter Query']", 
        accountnumber : "//input[@id='BLK_DSBR_MASTER__ACTNO']",
        // executeQuery : "//a[normalize-space()='Execute Query']",
        authorize2 : "//a[normalize-space()='Authorize']",
        authorizeBtn : "//button[@id='BLK_AUTHORIZE__BTN_AUTHORIZE']",
        // okBtn : "//input[@id='BTN_OK']"

       
    }

    async handleLoanFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Account Details")]', { timeout: 30000 });
            frame = await frameElementHandle.contentFrame();
            return frame;
            await frame.click(this.Elements.newTab)  
        } catch (message) {
            // console.log("Frame not found");
        }
    }


    async clicknewTab(){
    frame = await this.handleLoanFrame();
  await frame.waitForSelector(this.Elements.newTab, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.newTab);
    }

    async enterProductCode(code: string){
        console.log("Code entered")
        await frame.locator(this.Elements.productCode).fill(code);


    }
    
    async enterCustomerID(ID: string){
        console.log("Customer ID entered successfully")
        await frame.locator(this.Elements.customerID).fill(ID);
    
    }

    async enterCurrency(currency: string){
         console.log("currency entered successfully")
        await frame.locator(this.Elements.currency).fill(currency);
    
    }

    async enterAmount(amount: string){
        await frame.locator(this.Elements.amount).fill(amount);
    
    }

    async clickProductDflt(){
        await frame.click(this.Elements.productDefault);
    
    }

    async clickEnrich(){
        await frame.click(this.Elements.enrich);
    
    }

  async clickPreference(){
        await frame.click(this.Elements.preference);
    
    }

    async clickAutoliquidation(){
        await frame.click(this.Elements.autoLiquidation)

    }

    async clickSave(){
        await frame.click(this.Elements.saveBtn)
    }

async overrideFrame() {
    try {
        // Wait for the outer Account Details frame
        const outerFrameHandle = await this.page.waitForSelector('iframe[title*="Account Details"]', { timeout: 30000 });
        const outerFrame = await outerFrameHandle.contentFrame();

        // Wait for the Override Message frame inside it
        const overrideFrameHandle = await outerFrame.waitForSelector('iframe[title*="Override Message"]', { timeout: 15000 });
        const overrideFrame = await overrideFrameHandle.contentFrame();

        // Wait for Accept button and click it
        await overrideFrame.waitForSelector('input[id="BTN_ACCEPT"]', { state: 'visible', timeout: 15000 });
        await overrideFrame.click('input[id="BTN_ACCEPT"]');
        console.log("Clicked on Accept button in Override Message");

    } catch (error) {
        console.log("Override or Alert frame not found");
    }
}

   
 async verifySuccessMessage() {
         const frameElement2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 10000 });
       const  successframe = await frameElement2.contentFrame();
        //const message = successframe.locator(this.Elements.successmsg);
        //await message.waitFor({ state: 'visible', timeout: 15000 });
       // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
       const okButton = successframe.locator(this.Elements.okBtn);
        await okButton.waitFor({state: 'visible', timeout: 15000 });
        await okButton.click();
        console.log("Successfully clicked on ok button")

    }

async captureinputvalue(){
    account=await frame.locator("//input[@id='BLK_ACCOUNT_MASTER__ACCNO']").inputValue()
    console.log("inputValue"+account)

}

async handleloanAuthorizeFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Account Details")]', { timeout: 20000 });
            frame = await frameElementHandle.contentFrame();
            return frame;
            await frame.click(this.Elements.enterQuery)
        } catch (message) {
            // console.log("Frame not found");
        }
    }


         async clickenterqueryBtn(){
         frame = await this.handleloanAuthorizeFrame();
         await frame.waitForSelector(this.Elements.enterQuery, { state: 'visible', timeout: 15000 });
         await frame.click(this.Elements.enterQuery);
         await frame.waitForTimeout(2000);
 }

        async enterAccountNmbr(number : string){ 
                     frame = await this.handleloanAuthorizeFrame();
            await frame.waitForSelector(this.Elements.accountNumber,{state : 'visible', timeout: 15000})
        await frame.locator(this.Elements.accountNumber).fill(account);
        await frame.waitForTimeout(2000);

 }

        async executeQueryBtn (){
        await frame.click(this.Elements.executeQuery);
        await frame.waitForTimeout(2000);

 }

        async authorizeBtn (){
        await frame.click(this.Elements.autorizeBtn);
        await frame.waitForTimeout(2000);

}

      

 async overrideauthFrame() {
    try {
        // Wait for the outer Account Details frame
        const outerFrameHandle = await this.page.waitForSelector('//iframe[contains(@title, "Account Details")]', { timeout: 20000 });
        const outerFrame = await outerFrameHandle.contentFrame();

        // Wait for the Override Message frame inside it
        const overrideFrameHandle = await outerFrame.waitForSelector('iframe[title*="Authorize"]', { timeout: 15000 });
        const overrideFrame = await overrideFrameHandle.contentFrame();

        // Wait for Accept button and click it
        await overrideFrame.waitForSelector("//button[@id='BLK_ACCOUNTDETAILS__BTN_AUTH']", { state: 'visible', timeout: 15000 });
                await overrideFrame.click(this.Elements.authorize1);

        console.log("Clicked on Accept button in Override Message");

    } catch (error) {
        console.log("Override or Alert frame not found");
    }
}

 async verifyauthSuccessMessage() {

    try{

         const outerFrameHandle1 = await this.page.waitForSelector('//iframe[contains(@title, "Account Details")]', { timeout: 20000 });
        const outerFrame = await outerFrameHandle1.contentFrame();

        // Wait for the Override Message frame inside it
        const overrideFrameHandle1 = await outerFrame.waitForSelector('iframe[title*="Authorize"]', { timeout: 15000 });
        const overrideFrame = await overrideFrameHandle1.contentFrame();

         const frameElement = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 20000 });
       const  successframe = await frameElement.contentFrame();
        //const message = successframe.locator(this.Elements.successmsg);
        //await message.waitFor({ state: 'visible', timeout: 15000 });
       // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
       const okButton = successframe.locator(this.Elements.okButton);
        await okButton.waitFor({state: 'visible', timeout: 15000 });
        await okButton.click();
        console.log("Successfully clicked on ok button")

   } catch (error) {
        console.log("Override or Alert frame not found");
    }
}
async handleDisbursementFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 30000 });
            frame = await frameElementHandle.contentFrame();
            return frame;
            await frame.click(this.Elements.newButton)  

        } catch (message) {
            // console.log("Frame not found");
        }
    }

      async clicknewTab2(){
    frame = await this.handleDisbursementFrame();
  await frame.waitForSelector(this.Elements.newButton, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.newButton);
    }

async enteraccountNumber(number : string){
    await frame.locator(this.Elements.accountNmber).fill(account);
}


async clickdefaultbutton (){
    await frame.click(this.Elements.defaultBtn);
}

async entersettlementamount (amount : string){
    
    await frame.waitForTimeout(2000);
    await frame.locator(this.Elements.settlementamount).fill(amount);
}

async enterloancurrencyequivalent(currency : string){
    await frame.locator(this.Elements.loancurrencyequivalent).fill(currency);
}

async clickdefaultsettlementbutton(){
    await frame.click(this.Elements.defaultsettlementBtn);
}

 async clickokbutton() {

    try{

         const outerFrameHandle1 = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 20000 });
        const outerFrame = await outerFrameHandle1.contentFrame();

        // Wait for the Override Message frame inside it
        const innerframehandle1 = await outerFrame.waitForSelector('iframe[title*="Information Message"]', { timeout: 15000 });
        const overrideFrame = await innerframehandle1.contentFrame();
        //const message = successframe.locator(this.Elements.successmsg);
        //await message.waitFor({ state: 'visible', timeout: 15000 });
       // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
       const okButton = overrideFrame.locator(this.Elements.OkButton);
        await okButton.waitFor({state: 'visible', timeout: 15000 });
        await okButton.click();
        console.log("Successfully clicked on ok button")

   } catch (error) {
        console.log("Override or Alert frame not found");
    }
}

async clickcomputechargesbutton(){

 const frameElementHandle2 = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 30000 });
            frame = await frameElementHandle2.contentFrame();
            await frame.click(this.Elements.computeChanrgesBtn);
}

async clickSaveButtton1(){
    await frame.click(this.Elements.saveBtn);
}

  async verifySuccessfulMessage() {
          const outerFrameHandle2 = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 40000 });
        const outerFrame = await outerFrameHandle2.contentFrame();

         // Wait for the Override Message frame inside it
         const innerframehandle2 = await outerFrame.waitForSelector('iframe[title*="Information Message"]', { timeout: 15000 });
         const successframe = await innerframehandle2.contentFrame();
         //const message = successframe.locator(this.Elements.successmsg);
         //await message.waitFor({ state: 'visible', timeout: 15000 });
        // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
    const OkButton1 = successframe.locator(this.Elements.okBtn);
        await OkButton1.waitFor({state: 'visible', timeout: 15000 });
        await OkButton1.click();
         console.log("Successfully clicked on ok button")

    }


async handledisbursementauthorizeFrame(){
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 30000 });
            frame = await frameElementHandle1.contentFrame();
            return frame;
            await frame.click(this.Elements.enterQuery)
            } catch (message) {
            // console.log("Frame not found");
         }
        }

         async clickenterqueryBtn1(){
         frame = await this.handledisbursementauthorizeFrame();
         await frame.waitForSelector(this.Elements.enterQuery, { state: 'visible', timeout: 15000 });
         await frame.click(this.Elements.enterQuery);
         await frame.waitForTimeout(2000);
 }

        async enterdisbAccountNmbr(accountnumber : string){ 
                     frame = await this.handledisbursementauthorizeFrame();
            await frame.waitForSelector(this.Elements.accountnumber,{state : 'visible', timeout: 15000})
        await frame.locator(this.Elements.accountnumber).fill(account);
        await frame.waitForTimeout(2000);

 }

        async executeQueryBtn1(){
        await frame.click(this.Elements.executeQuery);
        await frame.waitForTimeout(2000);
 }

        async disbauthorizeBtn(){
        await frame.click(this.Elements.authorize1);
        await frame.waitForTimeout(2000);

}

 async overrideFrame1() {
    try {
        // Wait for the outer Account Details frame
        const outerFrameHandle = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 20000 });
        const outerFrame = await outerFrameHandle.contentFrame();

        // Wait for the Override Message frame inside it
        const overrideFrameHandle = await outerFrame.waitForSelector('iframe[title*="Authorize"]', { timeout: 15000 });
        const overrideFrame = await overrideFrameHandle.contentFrame();

        // Wait for Accept button and click it
        await overrideFrame.waitForSelector("//button[@id='BLK_ACCOUNTDETAILS__BTN_AUTH']", { state: 'visible', timeout: 15000 });
                await overrideFrame.click(this.Elements.authorize2);

        console.log("Clicked on Accept button in Override Message");

    } catch (error) {
        console.log("Override or Alert frame not found");
    }
}


async authorizeBtn1() {
    try {
        // 1. Wait for outer frame - Manual Disbursement Details
        const outerFrameHandle = await this.page.waitForSelector(
            '//iframe[contains(@title, "Manual Disbursement Details")]',
            { timeout: 20000 }
        );
        const outerFrame = await outerFrameHandle.contentFrame();

        if (!outerFrame) {
            console.log("Outer frame not found");
            return;
        }

        // 2. Wait for the Authorization inner frame
        const innerFrameHandle = await outerFrame.waitForSelector(
            '//iframe[contains(@title, "Authorization")]',
            { timeout: 20000 }
        );
        const innerFrame = await innerFrameHandle.contentFrame();

        if (!innerFrame) {
            console.log("Authorization inner frame not found");
            return;
        }

        // 3. Wait & click the correct Authorize button
        await innerFrame.waitForSelector('#BLK_AUTHORIZE__BTN_AUTHORIZE', {
            state: 'visible',
            timeout: 15000
        });

        await innerFrame.click('#BLK_AUTHORIZE__BTN_AUTHORIZE');

        console.log("Clicked on Authorize button");

    } catch (error) {
        console.log("Authorize frame not found", error);
    }
}

 async verifySuccessMessage1() {

    try{

         const outerFrameHandle1 = await this.page.waitForSelector('//iframe[contains(@title, "Manual Disbursement Details")]', { timeout: 20000 });
        const outerFrame = await outerFrameHandle1.contentFrame();

        // Wait for the Override Message frame inside it
        const overrideFrameHandle1 = await outerFrame.waitForSelector('//iframe[contains(@title, "Authorization")]', { timeout: 20000 });
        const overrideFrame = await overrideFrameHandle1.contentFrame();


         const innerFrameHandle = await overrideFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 20000 });
       const  successframe = await innerFrameHandle.contentFrame();
        //const message = successframe.locator(this.Elements.successmsg);
        //await message.waitFor({ state: 'visible', timeout: 15000 });
       // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
   const okButton = successframe.locator(this.Elements.okBtn);
        await okButton.waitFor({state: 'visible', timeout: 15000 });
        await okButton.click();
        console.log("Successfully clicked on ok button")

   } catch (error) {
        console.log("Override or Alert frame not found",error);
    }
 }
}

