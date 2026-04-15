import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame;
export default class SecuritiesInstrumentPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
            
        new : '//*[@id="New_oj0|text"]',
        SecurityID : '//*[@id="BLK_SECURITY_MASTER__SECURITYID|input"]',
        Product : '//*[@id="BLK_SECURITY_MASTER__PRODUCT|input"]',
        Pbutton : '//*[@id="BLK_SECURITY_MASTER__BTN_P_oj90|text"]',
        MarketOfIssue : '//*[@id="BLK_SECURITY_MASTER__LCLMRKTISUE|input"]',
        IssuerCode :'//*[@id="BLK_SECURITY_MASTER__ISSUERID|input"]',
        Quantity : '//*[@id="BLK_SECURITY_MASTER__QTYQUT|input"]',
        IssueDate : '//*[@id="BLK_SECURITY_MASTER__ISSDT|input"]',
        StartofTradingDate : '//*[@id="BLK_SECURITY_MASTER__STTRADEDT|input"]',
        RedemptionDate : '//*[@id="BLK_SECURITY_MASTER__REDDT|input"]',
        SecurityCurrency : '//*[@id="BLK_SECURITY_MASTER__SECURITYCCY|input"]',
        InitialFaceValue : '//*[@id="BLK_SECURITY_MASTER__INFACVAL|input"]',
        IssuePrice : '//*[@id="BLK_SECURITY_MASTER__ISSPRIC|input"]',
        RedemptionPrice : '//*[@id="BLK_SECURITY_MASTER__REDPRIC|input"]',
        others : '//*[@id="TAB_OTHERS"]/span',
        CollateralType : '//*[@id="BLK_SECURITY_MASTER__COLLATYPE|input"]',
        MarketForRevaluation : '//*[@id="BLK_SECURITY_MASTER__BMKTREV|input"]',
        save : '//*[@id="Save_oj7|text"]',
        accept : '//*[@id="BTN_ACCEPT_oj1|text"]',
        okbtn : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj111|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebtn : '//*[@id="BLK_SECMA_AU__BTN_AUTH_oj4|text"]',
        OKbtn : '//*[@id="BTN_OK_oj0|text"]',

     }
// customer account 
async handleSIDFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Securities Instrument Definition")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleSIDFrame() failed:", message);
    }
  }
//Override Message
async handleOverRideFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Securities Instrument Definition")]',{ timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector('iframe[id="ifr_AlertWin"]', { timeout: 50000 });
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleOverrideFrame failed:", err);
    throw err;
  }
}
// information message
async handleInformationMessageFrame() {
    try {
        // Step 1: Find the outer frame first
        const outerFrameHandle = await this.page.waitForSelector(
            '//iframe[contains(@title, "Securities Instrument Definition")]',
            { state: 'visible', timeout: 30000 }
        );
        const outerFrame = await outerFrameHandle.contentFrame();
       
        // Step 2: Wait for the specific alert iframe to be VISIBLE
        // The terminal log says it was hidden; 'visible' state fixes this.
        const innerFrameHandle = await outerFrame.waitForSelector(
            'iframe[id="ifr_AlertWin"]', 
            { state: 'visible', timeout: 15000 }
        );
        
        const innerFrame = await innerFrameHandle.contentFrame();
        return innerFrame;
    } catch (err) {
        console.error("handleInformationMessageFrame failed:", err);
        throw err;
    }
}

// autorizeok
async clickauthorizeok() {
    try {
        // Step 1: Wait for the top-level main window frame
        const outerFrameHandle = await this.page.waitForSelector(
            'iframe[id="ifr_LaunchWin5812578858125788"]', // Using wildcard for dynamic IDs
            { state: 'visible', timeout: 30000 }
        );
        const outerFrame = await outerFrameHandle.contentFrame();

        // Step 2: Access the SubScreen iframe (where the authorization message lives)
        const innerFrameHandle = await outerFrame.waitForSelector(
            'iframe[id="ifrSubScreen"]', 
            { state: 'visible', timeout: 20000 }
        );
        const subFrame = await innerFrameHandle.contentFrame();

        // Step 3: Wait for the Alert/Information frame inside the SubScreen
        // This is where the 'Successfully Authorized' text and OK button reside
        const alertFrameHandle = await subFrame.waitForSelector(
            'iframe[id="ifr_AlertWin"]', 
            { state: 'visible', timeout: 15000 }
        );
        const finalFrame = await alertFrameHandle.contentFrame();

        // Final Step: Click the 'Ok' button using its ID
        const OKbtn = finalFrame.locator('#BTN_OK_OI');
        await OKbtn.waitFor({ state: 'visible', timeout: 10000 });
        await OKbtn.click();

        console.log("Authorization confirmed successfully.");
    } catch (err) {
        console.error("Failed to navigate authorization frames:", err);
        throw err;
    }
}

// authorize frame 
async getAuthorizeFrame() {
    const frame = await this.handleSIDFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
async clicknewtab(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.new, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.new);
     }

     async entersecurityid(id){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.SecurityID, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.SecurityID).clear()
       await frame.locator(this.Elements.SecurityID).fill(id)
}

   async enterproduct(product){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.Product, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.Product).clear()
       await frame.locator(this.Elements.Product).fill(product)
}

async clickPbtn(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.Pbutton, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Pbutton);
     }
async entermarketofissue(MOI){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.MarketOfIssue, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.MarketOfIssue).clear()
       await frame.locator(this.Elements.MarketOfIssue).fill(MOI)
}
  async enterissuercode(issuer){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.IssuerCode, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.IssuerCode).clear()
       await frame.locator(this.Elements.IssuerCode).fill(issuer)
}
  async selectQuantity() {
    const frame = await this.handleSIDFrame();

    const chargeField = frame.locator(this.Elements.Quantity);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const unitsOption = frame.locator("//li[normalize-space()='Units']");

    await unitsOption.waitFor({ state: 'visible' });
    await unitsOption.click();
}

async enterissuedate(issuedate){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.IssueDate, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.IssueDate).clear()
       await frame.locator(this.Elements.IssueDate).fill(issuedate)
}
async entertradingdate(SOTD){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.StartofTradingDate, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.StartofTradingDate).clear()
       await frame.locator(this.Elements.StartofTradingDate).fill(SOTD)
}

async enterredempdate(redmdate){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.RedemptionDate, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.RedemptionDate).clear()
       await frame.locator(this.Elements.RedemptionDate).fill(redmdate)
}
async enterseccurrency(seccuren){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.SecurityCurrency, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.SecurityCurrency).clear()
       await frame.locator(this.Elements.SecurityCurrency).fill(seccuren)
}
async enterfacevalue(facevalue){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.InitialFaceValue, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.InitialFaceValue).clear()
       await frame.locator(this.Elements.InitialFaceValue).fill(facevalue)
}
async enterissueprice(issueprice){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.IssuePrice, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.IssuePrice).clear()
       await frame.locator(this.Elements.IssuePrice).fill(issueprice)
}
async enterredemptprice(redmprice){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.RedemptionPrice, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.RedemptionPrice).clear()
       await frame.locator(this.Elements.RedemptionPrice).fill(redmprice)
}

async clickothers(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.others, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.others);
     }
async entercolltype(coltype){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.CollateralType, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.CollateralType).clear()
       await frame.locator(this.Elements.CollateralType).fill(coltype)
}

async entermarketrevalu(revaluation){
    const frame = await this.handleSIDFrame()
    await frame.waitForSelector(this.Elements.MarketForRevaluation, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.MarketForRevaluation).clear()
       await frame.locator(this.Elements.MarketForRevaluation).fill(revaluation)
}
 async clicksave(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.save, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.save);
     }
     async clickaccept(){
        const frame = await this.handleOverRideFrame()
        await frame.waitForSelector(this.Elements.accept, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.accept);
     }
     async clickOK(){
        const frame = await this.handleInformationMessageFrame()
        await frame.waitForSelector(this.Elements.okbtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.okbtn);
     }

 async clickexit(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
     }

async clickenterquery(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
     }
     async clickexecutequery(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
     }
     async clickauthorize(){
        const frame = await this.handleSIDFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
     }
     async clickauthorizebtn(){
        const frame = await this.getAuthorizeFrame()
        await frame.waitForSelector(this.Elements.authorizebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebtn);
     }
    //  async clickOKbtn(){
    //     const frame = await this.clickauthorizeok()
    //     await frame.waitForSelector(this.Elements.OKbtn, { state: 'visible', timeout: 15000 });
    //   await frame.click(this.Elements.OKbtn);
    //  }





    }