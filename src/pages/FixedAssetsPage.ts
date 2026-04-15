import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,contactReference;
export default class FixedAssets {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
        new : '//*[@id="New_oj0|text"]',
        productcode : '//*[@id="BLK_CONTRACT_DETAILS__PRDCD|input"]',
        pbutton : '//*[@id="BLK_CONTRACT_DETAILS__BTN_P_oj68|text"]',
        search : '//*[@id="BLK_CONTRACT_DETAILS__CATGRY"]/div[1]/span/oj-button',
        category : '//*[@id="1|input"]',
        fetch : '//*[@id="_oj7|text"]',
        firstrecord : '//*[@id="TableLov"]/div[1]/table/tbody',
        assetcost : '//*[@id="BLK_CONTRACT_DETAILS__ASSTCST|input"]',
        descrpition : '//*[@id="BLK_CONTRACT_DETAILS__DESC|input"]',
        save : '//*[@id="Save_oj7|text"]',
        accept : '//*[@id="BTN_ACCEPT_oj1|text"]',
        OK : '//*[@id="BTN_OK_oj0|text"]',  
        exit : '//*[@id="BTN_EXIT_IMG_oj84|text"]',
        enterquery :'//*[@id="EnterQuery_oj17|text"]',
        contactreference : '//*[@id="BLK_CONTRACT_DETAILS__CONREFNO|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebtn : '//*[@id="BLK_AUTH_DETAILS__BTN_AUTH_oj22|text"]',
        ok : '//*[@id="BTN_OK_oj0|text"]', 
        getcontactref : '//*[@id="BLK_CONTRACT_DETAILS__CONREFNO"]/div[1]/div/div/div'  
    }

    // Fixed Assets 
async handleFixedFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Fixed Assets Asset Capture")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleFixedFrame() failed:", message);
    }
  }

  //Override Message
async handleOVerrideFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Fixed Assets Asset Capture")]',{ timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector('iframe[id="ifr_AlertWin"]', { timeout: 50000 });
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleOVerrideFrame failed:", err);
    throw err;
  }
}
async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Fixed Assets Asset Capture")]', { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[id="ifr_AlertWin"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleInformationMessageFrame failed:", err);
    throw err;
  }
}

// authorize frame 
async getAuthorizeFrame() {
    const frame = await this.handleFixedFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

// listofvalue frame
async getlistofframe(){
    const frame = await this.handleFixedFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}


async getcontactrefNumber(){
         const frame = await this.handleFixedFrame()
         contactReference=await frame.innerText(this.Elements.getcontactref)
        console.log("Account number "+contactReference)
    }
    

async clickNewTab(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.new, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.new);
     }
     
     async enterproductcode(code){
        const frame = await this.handleFixedFrame()
       await frame.locator(this.Elements.productcode).clear()
       await frame.locator(this.Elements.productcode).fill(code)
     }

     async clickPButton(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.pbutton, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.pbutton);
     }

     async clicksearch(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.search, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.search);
     }

 async entercategory(IFEQ){
        const frame = await this.getlistofframe()
       await frame.locator(this.Elements.category).clear()
       await frame.locator(this.Elements.category).fill(IFEQ)
     }
     
     async clickfetch(){
        const frame = await this.getlistofframe()
        await frame.waitForSelector(this.Elements.fetch, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.fetch);
     }
     async selectrecord(){
        const frame = await this.getlistofframe()
        await frame.waitForSelector(this.Elements.firstrecord, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.firstrecord);
     }

     async enterassetcost(cost){
        const frame = await this.handleFixedFrame()
       await frame.locator(this.Elements.assetcost).clear()
       await frame.locator(this.Elements.assetcost).fill(cost)
     }

     async enterdescription(computer){
        const frame = await this.handleFixedFrame()
       await frame.locator(this.Elements.descrpition).clear()
       await frame.locator(this.Elements.descrpition).fill(computer)
     }

     async clickSave(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.save, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.save);
     }

     async clickAccept(){
        const frame = await this.handleOVerrideFrame()
        await frame.waitForSelector(this.Elements.accept, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.accept);
     }

     async clickOK(){
        const frame = await this.handleInformationMessageFrame()
        await frame.waitForSelector(this.Elements.OK, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.OK);
     }
     async clickexit(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
     }

     async clickenterquery(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
     }

     async enterrefnumber(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.contactreference, { state: 'visible', timeout: 15000 });
      await frame.locator(this.Elements.contactreference).clear()
       await frame.locator(this.Elements.contactreference).fill(contactReference)
     }

     async clickexecutequery(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
     }

     async clickauthorize(){
        const frame = await this.handleFixedFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
     }

     async clickauthorizebth(){
        const frame = await this.getAuthorizeFrame()
        await frame.waitForSelector(this.Elements.authorizebtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebtn);
     }

     async clickonOK() {
  try {
    const ok = this.page
      .frameLocator('iframe[id*="ifr_LaunchWin"]')
      .frameLocator('#ifrSubScreen')
      .frameLocator('#ifr_AlertWin')
      .getByRole('button', { name: 'OK' }); // using ARIA role for safety
 
    await ok.waitFor({ state: 'visible', timeout: 20000 });
    await ok.click({ force: true }); // force if masked
 
    console.log("Successfully clicked OK button in ALERTWIN");
 
  } catch (error) {
    console.error("Failed to click OK button in ALERTWIN frame", error);
    throw error;
  }
 
}
    }