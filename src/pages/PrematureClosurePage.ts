import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,redemprefnum;
export default class PrematureClosurePage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
           
        new : '//*[@id="New_oj0|text"]',
        TDAccountNumber : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__ACC_NO|input"]',
        arrow : '//div[@id="ui-id-45"]//span',
        Redemption : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__REDEMPTION_MODE|input"]',
        Compute :'//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__BTN_COMPUTE_oj77|text"]',
        ok : '//*[@id="BTN_OK_oj0|text"]',
        addrow : '//*[@id="cmdAddRow_BLK_ICTMS_TDREDMPAYOUT_DETAILS"]',
        Percentage :'//*[@id="BLK_ICTMS_TDREDMPAYOUT_DETAILS__PERCENTAGERC0|input"]',
        Amount : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_DETAILS__REDMAMTRC0|input"]',
        OffsetAccount : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_DETAILS__OFFSET_ACCRC0|input"]',
        Save :'//*[@id="Save_oj7|text"]',
        accept :'//*[@id="BTN_ACCEPT_oj1|text"]',
        okbtn : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj89|text"]',
        redrefNo : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__REDEM_REF_NO"]/div[1]/div/div',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        redemtion : '//*[@id="BLK_ICTMS_TDREDMPAYOUT_MASTER__REDEM_REF_NO|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        
        authorize : '//*[@id="Authorize_oj8|text"]',
        authorizebth : '//*[@id="BLK_REDEMPTION_MASSTER__BTN_AUTH_oj12|text"]',
        okbutton : '//*[@id="BTN_OK_oj0|text"]',

     }
// redemption input
 async handleREDMFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Term Deposits Redemption Input")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleREDMFrame() failed:", message);
    }
  }

//   information message
    async handleinformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Term Deposits Redemption Input")]', { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[id="ifr_AlertWin"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleinformationMessageFrame failed:", err);
    throw err;
  }
}
//Override Message
async handleoverrideFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Term Deposits Redemption Input")]',{ timeout: 30000 }
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

// authorize frame 
async getauthorizeFrame() {
    const frame = await this.handleREDMFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
  
//  authorizeok frame
async getSubScreenFrame() {
    const frame = await this.handleREDMFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
async clickNew(){
        const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.new, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.new);
      try{
       const frame1 = await this.getauthorizeFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
     }

     async enterTDaccountnum(accountnum){
    const frame = await this.handleREDMFrame()
    await frame.waitForSelector(this.Elements.TDAccountNumber, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.TDAccountNumber).clear()
       await frame.locator(this.Elements.TDAccountNumber).fill(accountnum)
}
async clickarrow(){
        const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.arrow, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.arrow);
     }

 async selectFullRedemption() {
    const frame = await this.handleREDMFrame();

    const chargeField = frame.locator(this.Elements.Redemption);

    await chargeField.click();
    await this.page.waitForTimeout(2000);

    const FullRedemptionOption = frame.locator("//li[normalize-space()='Full Redemption']");

    await FullRedemptionOption.waitFor({ state: 'visible' });
    await FullRedemptionOption.click();
}

async clickcompute(){
        const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.Compute, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Compute);
     }

     async clickok(){
        const frame = await this.handleinformationMessageFrame()
        await frame.waitForSelector(this.Elements.ok, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.ok);
     }

  async clickaddrow(){
        const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.addrow, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.addrow);
     }

     async enterpercentage(percen){
    const frame = await this.handleREDMFrame()
    await frame.waitForSelector(this.Elements.Percentage, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.Percentage).clear()
       await frame.locator(this.Elements.Percentage).fill(percen)
}

async enteramount(amount){
    const frame = await this.handleREDMFrame()
    await frame.waitForSelector(this.Elements.Amount, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.Amount).clear()
       await frame.locator(this.Elements.Amount).fill(amount)
}

async enterOffaccountnum(offaccountnum){
    const frame = await this.handleREDMFrame()
    await frame.waitForSelector(this.Elements.OffsetAccount, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.OffsetAccount).clear()
       await frame.locator(this.Elements.OffsetAccount).fill(offaccountnum)
}

 async clickSave(){
        const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.Save, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Save);
     }

     async clickaccept(){
        const frame = await this.handleoverrideFrame()
        await frame.waitForSelector(this.Elements.accept, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.accept);
     }

     async clickokbtn(){
        const frame = await this.handleinformationMessageFrame()
        await frame.waitForSelector(this.Elements.okbtn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.okbtn);
     }

     async clickexitbtn(){
        const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.exit);
     }

     async getRedrefNumber(){
         const frame = await this.handleREDMFrame()
         redemprefnum=await frame.innerText(this.Elements.redrefNo)
        console.log("Redemption Reference Number "+redemprefnum)
    }

    async clickenterquery(){
      const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.enterquery);
    }

    async clickexecutequery(){
      const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.executequery);
    }

    async enterredemptionnum(){
      const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.redemtion, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.redemtion);
      await frame.locator(this.Elements.redemtion).fill(redemprefnum)
    }

    async clickauthorize(){
      const frame = await this.handleREDMFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorize);
    }

    async clickauthorizebtn(){
      const frame = await this.getauthorizeFrame()
        await frame.waitForSelector(this.Elements.authorizebth, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.authorizebth);
    }

    async clickOKbtn(){
      const frame = await this.getSubScreenFrame();

    const frameElementHandle2 = await frame.waitForSelector(
        'iframe[id="ifr_AlertWin"]',
        { state: 'visible', timeout: 30000 }
    );

    const successframe = await frameElementHandle2.contentFrame();

    //const message = successframe.locator('//span[contains(text(),"Successfully Saved")]');

    // await expect(message).toContainText('Successfully Saved');

    await successframe.click(this.Elements.okbutton);
    }
    }