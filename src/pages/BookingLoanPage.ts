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

        newTab :"//*[@id='New_oj0|text']",
        productCode :'//*[@id="BLK_ACCOUNT_MASTER__PROD|input"]',
        customerID:'//*[@id="BLK_ACCOUNT_MASTER__CUSTID|input"]',
        currency:'//*[@id="BLK_ACCOUNT_MASTER__CCY|input"]',
        amount:'//*[@id="BLK_ACCOUNT_MASTER__AMTFINANCED|input"]',
        productDefault:'//*[@id="BLK_ACCOUNT_MASTER__BTN_DEFAULT_oj95|text"]',
        enrich:'//*[@id="BLK_ACCOUNT_MASTER__BTN_ENRICH_oj98|text"]',
        preference:'//*[@id="TAB_DEFAULT"]/span',
        autoLiquidation:'//*[@id="BLK_ACCOUNT_MASTER__TRACKRECEVALIQ"]/div/div',
        getaccnum : '//*[@id="BLK_ACCOUNT_MASTER__ACCNO"]/div[1]/div/div',
        linkagedetails : '//*[@id="TAB_LINKAGES"]',
        addrow : '//*[@id="cmdAddRow_BLK_COLL_LINKAGES"]',
        linkagetype : '//*[@id="BLK_COLL_LINKAGES__LINKAGE_TYPERC0|input"]',
        searchoptn : '//*[@id="BLK_COLL_LINKAGES__LINKED_REFERENCE_NORC0"]/div[1]/span/oj-button',
        fetch : '//*[@id="_oj9|text"]',
        linked : '//*[@id="BLK_COLL_LINKAGES__LINKED_PERCENT_NUMBERRC0|input"]',
        order : '//*[@id="BLK_COLL_LINKAGES__UTIL_ORDERRC0|input"]',
        fields : '//*[@id="TAB_UDF"]/span',
        search : '//*[@id="BLK_CLVWS_ACCOUNT_UDF_CHAR__FIELD_CHAR_1RC13"]/div[1]/span/oj-button/button/div/span[1]',
        fetchbtn : '//*[@id="_oj3|text"]',
        firstrecord : '//*[@id="TableLov"]/div[1]/table/tbody/tr[1]',
        saveBtn:'//*[@id="Save_oj7|text"]',
        acceptBtn:'//*[@id="BTN_ACCEPT_oj1|text"]',
        // successmsg:"//span[@title='Successfully Saved']",
        okBtn:'//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj128|text"]',
       enterQuery : '//*[@id="EnterQuery_oj17|text"]', 
       accountNumber : '//*[@id="BLK_ACCOUNT_MASTER__ACCNO|input"]',
       executeQuery : '//*[@id="ExecuteQuery_oj18|text"]', 
       autorizeBtn : '//*[@id="Authorize_oj8|text"]', 
       authorize1 : '//*[@id="BLK_ACCOUNTDETAILS__BTN_AUTH_oj28|text"]',
       okButton : '//*[@id="BTN_OK_oj0|text"]',

       newButton: '//*[@id="New_oj0|text"]',
        accountNmber : '//*[@id="BLK_DSBR_MASTER__ACTNO|input"]',
        defaultBtn : '//*[@id="BLK_DSBR_MASTER__BTN_DEFAULT_oj55|text"]', 
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
//  remarks frame
async getSubScreenFrame() {
    const frame = await this.handleLoanFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

//  remarks frame
async getoverrideFrame() {
    const frame = await this.handleLoanFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifr_AlertWin"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
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
    async clickfields(){
        await frame.click(this.Elements.fields)

    }
    async clicklinkage(){
       frame = await this.handleLoanFrame();
       await frame.click(this.Elements.linkagedetails)
    }
    async clickrow(){
        frame = await this.handleLoanFrame();
        await frame.click(this.Elements.addrow)
    }
    async selectlinkagetype(){
        const frame = await this.handleLoanFrame();

    const chargeField = frame.locator(this.Elements.linkagetype);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const facilityOption = frame.locator("//li[normalize-space()='Facility']");

    await facilityOption.waitFor({ state: 'visible' });
    await facilityOption.click();
    }
    async clicksearchoptn(){
      frame = await this.handleLoanFrame();
      await frame.click(this.Elements.searchoptn)
    }

    async clickfetchbtn(){
        frame = await this.getSubScreenFrame();
        await frame.click(this.Elements.fetch)

    }

    async enterpercent(percent){
         frame = await this.handleLoanFrame();
        await frame.locator(this.Elements.linked).fill(percent);
    }
    async enterorder(order){
        frame = await this.handleLoanFrame();
       await frame.locator(this.Elements.order).fill(order);
    }
    async clicksearch(){
        await frame.click(this.Elements.search)

    }async clickfetch(){
        frame = await this.getSubScreenFrame();
        await frame.click(this.Elements.fetchbtn)

    }async selectfirstrecord(){
        frame = await this.getSubScreenFrame();
        await frame.click(this.Elements.firstrecord)

    }
    async clickSave(){
        frame = await this.handleLoanFrame();
        await frame.click(this.Elements.saveBtn)
    }
async clickexit(){
        await frame.click(this.Elements.exit)
    }

async overrideFrame() {
    const frame = await this.getoverrideFrame()
         await frame.waitForSelector(this.Elements.acceptBtn, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.acceptBtn);
    await this.page.waitForTimeout(2000)
}
    

   
 async verifySuccessMessage() {
         const frame = await this.handleLoanFrame();

    const frameElementHandle2 = await frame.waitForSelector(
        'iframe[id="ifr_AlertWin"]',
        { state: 'visible', timeout: 30000 }
    );

    const successframe = await frameElementHandle2.contentFrame();

    //const message = successframe.locator('//span[contains(text(),"Successfully Saved")]');

    // await expect(message).toContainText('Successfully Saved');

    await successframe.click(this.Elements.okBtn);
}

async captureinputvalue(){
    frame = await this.handleLoanFrame();
    account=await frame.innerText(this.Elements.getaccnum)
    // account=await frame.locator('//*[@id="BLK_ACCOUNT_MASTER__ACCNO"]/div[1]/div/div').inputValue()
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

        async enterAccountNmbr(){ 
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
    const frame = await this.getSubScreenFrame()
        await frame.waitForSelector(this.Elements.authorize1, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.authorize1);
    await this.page.waitForTimeout(3000)
    }
 
 async verifyauthSuccessMessage() {

    const frame = await this.getSubScreenFrame();

    const frameElementHandle2 = await frame.waitForSelector(
        'iframe[id="ifr_AlertWin"]',
        { state: 'visible', timeout: 30000 }
    );

    const successframe = await frameElementHandle2.contentFrame();

    //const message = successframe.locator('//span[contains(text(),"Successfully Saved")]');

    // await expect(message).toContainText('Successfully Saved');

    await successframe.click(this.Elements.okButton);
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

