import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,accNumber;
export default class AccountOpeningPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {


        New : '//*[@id="New_oj0|text"]',
        CustomerNo : '//*[@id="BLK_CUST_ACCOUNT__CUSTNO|input"]',
        Currency : '//*[@id="BLK_CUST_ACCOUNT__CCY|input"]',
        AccountClass : '//*[@id="BLK_CUST_ACCOUNT__ACCLS|input"]',
        fetch : '//*[@id="BLK_CUST_ACCOUNT__BTN_ACCPKP_oj92|text"]',
        saveoptn : '//*[@id="BTN_OK_oj17|text"]',
        Location : '//*[@id="BLK_CUST_ACCOUNT__LOC|input"]',
        Media : '//*[@id="BLK_CUST_ACCOUNT__MEDIA|input"]',
        MIStab :'//*[@id="MICACCTM_oj112|text"]',
        PoolCode : '//*[@id="BLK_MISDETAILS__POOLCD|input"]',
        savebtn : '//*[@id="BTN_OK_oj102|text"]',
        fieldstab : '//*[@id="CSCFNUDF_oj116|text"]',
        KDIC_FP_ODS : '//*[@id="BLK_UDF_DETAILS_VIEW__FLDVAL14|input"]',
        savebutton : '//*[@id="BTN_OK_oj52|text"]',
        save : '//*[@id="Save_oj7|text"]',
        OKBTN : '//*[@id="BTN_OK_oj2|text"]',
        accept : '//*[@id="BTN_ACCEPT_oj2|text"]',
        okbtn : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj134|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        accountnum : '//*[@id="BLK_CUST_ACCOUNT__ACC|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        acceptbtn :'//*[@id="BTN_OK_oj16|text"]',
        OKbutton : '//*[@id="BTN_OK_oj0|text"]',
        auxiliary : '//*[@id="AUXILIARY"]/span',
        debit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNODR"]/div/div', 
        credit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNOCR"]/div/div', 
        unlock : '//*[@id="Unlock_oj4|text"]',
        undebit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNODR"]/div/div/div',
        uncredit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNOCR"]/div/div/div',
        getAccNo:"//label[@for='BLK_CUST_ACCOUNT__ACC|input']//following::div[5]"
     }

// customer account 
async handleAOFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Accounts Maintenance")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleAOFrame() failed:", message);
    }
  }
// accountgeneration tab 
async handleaccountgenerationframe(){
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
  //Management Information System 
async handleMISFrame() {
   const frame = await this.handleAOFrame();

        const innerFrameHandle = await frame.waitForSelector(
            'iframe[id="ifrSubScreen"]', 
            { state: 'visible', timeout: 30000 }
        );
        
        return await innerFrameHandle.contentFrame();
    } catch (err) {
        console.log("Failed to switch to MIS Frame:", err);
        throw err;
    }
//  remarks frame
async getSubScreenFrame() {
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
// USER DEFINED FRAME
async getUDEFrame() {
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

//Override Message
async handleOverrideFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Customer Accounts Maintenance")]',{ timeout: 30000 }
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
async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Customer Accounts Maintenance")]', { timeout: 30000 }
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
async getauthorizeFrame() {
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
 
     async clicknewtab(){
        const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.New, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.New);
     }
     
     async entercustmno(custmno){
        const frame = await this.handleAOFrame()
       await frame.locator(this.Elements.CustomerNo).clear()
       await frame.locator(this.Elements.CustomerNo).fill(custmno)
     }

async entercurren(curren){
    const frame = await this.handleAOFrame()
       await frame.locator(this.Elements.Currency).clear()
       await frame.locator(this.Elements.Currency).fill(curren)

}

async enteraccntclass(accntclass){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.AccountClass, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.AccountClass).clear()
       await frame.locator(this.Elements.AccountClass).fill(accntclass)
}

async clickfetch(){
     const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.fetch, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.fetch);
     }  
async clicksaveoption(){
      const frame = await this.handleaccountgenerationframe()
        await frame.waitForSelector(this.Elements.saveoptn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.saveoptn);
     }

async enterlocation(location){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.Location, { state: 'visible', timeout: 30000 });
       await frame.locator(this.Elements.Location).clear()
       await frame.locator(this.Elements.Location).fill(location)
}
async entermedia(media){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.Media, { state: 'visible', timeout: 30000 });
       await frame.locator(this.Elements.Media).clear()
       await frame.locator(this.Elements.Media).fill(media)
}
async ClickMIStab(){
    const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.MIStab, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.MIStab);
}

async enterpoolcode(poolcode){
    const frame = await this.handleMISFrame()
    await frame.waitForSelector(this.Elements.PoolCode, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.PoolCode).clear()
       await frame.locator(this.Elements.PoolCode).fill(poolcode)
}

async ClickSavebutton(){
   const frame = await this.handleMISFrame()
    await frame.waitForSelector(this.Elements.savebtn, { state: 'visible', timeout: 25000 });
       await frame.click(this.Elements.savebtn); 
}
async Clickfielstab(){
   const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.fieldstab, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.fieldstab); 
}
async enterKDICFP(KDIC){
   const frame = await this.getUDEFrame()
   await frame.waitForSelector(this.Elements.KDIC_FP_ODS, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.KDIC_FP_ODS).clear()
       await frame.locator(this.Elements.KDIC_FP_ODS).fill(KDIC)
}
async ClickSavebtn(){
    const frame = await this.getUDEFrame()
    await frame.waitForSelector(this.Elements.savebutton, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.savebutton);
}
async Clickauxiliary(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.auxiliary, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.auxiliary);
}
async Clicknodebit(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.debit, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.debit);
}
async Clicknocredit(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.credit, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.credit);
}
async clickonsave(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.save, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.save);
}

async clickonOK(){
    const frame = await this.getSubScreenFrame()
    await frame.waitForSelector(this.Elements.OKBTN, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.OKBTN);
}

async Clickaccept(){
    const frame = await this.handleOverrideFrame()
    await frame.waitForSelector(this.Elements.accept, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.accept);
}

async Clickokbutton(){
    const frame = await this.handleInformationMessageFrame()
    await frame.waitForSelector(this.Elements.okbtn, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.okbtn);
}

async Clickexit(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.exit);
}

    async ClickenterQuery(){
       const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.enterquery);
    }
   
    async enteraccntmuber(){
       const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.accountnum, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.accountnum).clear()
       await frame.locator(this.Elements.accountnum).fill(accNumber)
    }

    async ClickexecuteQuery(){
      const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.executequery);
    }

    async Clickauthorize(){
        const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.authorize);
    }

    async Clickaccept1(){
         const frame = await this.getauthorizeFrame()
         await frame.waitForSelector(this.Elements.acceptbtn, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.acceptbtn);
    }

    async clickOkbtn() {
  try {
    const okButton = this.page
      .frameLocator('iframe[id*="ifr_LaunchWin"]')
      .frameLocator('#ifrSubScreen')
      .frameLocator('#ifr_AlertWin')
      .getByRole('button', { name: 'OK' }); // using ARIA role for safety
 
    await okButton.waitFor({ state: 'visible', timeout: 20000 });
    await okButton.click({ force: true }); // force if masked
 
    console.log("Successfully clicked OK button in ALERTWIN");
 
  } catch (error) {
    console.error("Failed to click OK button in ALERTWIN frame", error);
    throw error;
  }
 
}

    async Clickunlock(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.unlock, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.unlock);
    }

    async Clickuncheckdebit(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.undebit, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.undebit);
    }

    async Clickuncheckcredit(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.uncredit, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.uncredit);
    }

    async getAccNumber(){
         const frame = await this.handleAOFrame()
         accNumber=await frame.innerText(this.Elements.getAccNo)
        console.log("Account number "+accNumber)
    }
}
