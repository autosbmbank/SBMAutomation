 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let LCframe,ALCframe
// let Bframe
export default class LiabilityCreationPage {
    

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newliab: "//span[@id='New_oj0|text']",
        EntrQueryLC: "//span[@id='EnterQuery_oj17|text']",
        ExectQueryLC: "//span[@id='ExecuteQuery_oj18|text']",  
        liabilityno: "//input[@id='BLK_LIABILITY__LIAB_NO|input']",
        liabilityname:"//input[@id='BLK_LIABILITY__LIAB_NAME|input']",
        clickPLC: "//span[@id='BLK_AMEND_DETAILS__BTN_P_oj92|text']",
        saveliab:"//span[@id='Save_oj7|text']",
        okliab : "//span[@id='BTN_OK_oj0|text']",
        exitliab:"//span[@id='BTN_EXIT_IMG_oj69|text']",
       AuthorizedLC: "//span[@id='Authorize_oj8|text']",
        AuthorizebuttonLC: "//*[@id='BTN_OK_oj16|text']",
      
        //okauthr:"//span[@id='BTN_OK_oj0|text']",  
        
        
        
    
    }   

    async handleLiabilitycreationFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const LCframe = await frameElementHandle.contentFrame();

    if (!LCframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return LCframe;
   }
   
    
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Liability Maintenance")]', { timeout: 30000 }
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

   async clickNewliab() {
    const LCframe = await this.handleLiabilitycreationFrame();

    await LCframe.waitForSelector(this.Elements.Newliab,{state: 'visible',timeout: 20000});

    await LCframe.click(this.Elements.Newliab);
   }


    async enterliabilityno(liabilityno: string) {
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.locator(this.Elements.liabilityno).fill(liabilityno);
    await LCframe.waitForTimeout(3000);

    }
    async enterliabilityname(liabilityname: string) {
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.locator(this.Elements.liabilityname).fill(liabilityname);
    await LCframe.waitForTimeout(3000);

    }
    async clickPLCtab() {
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.click(this.Elements.clickPLC);
    await LCframe.waitForTimeout(3000);
    }
    
    async clicksaveliab() {
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.click(this.Elements.saveliab);
    await LCframe.waitForTimeout(3000);
    }

    

     async clickOkLC() {
    const LCframe = await this.handleInformationMessageFrame();
    await LCframe.click(this.Elements.okliab);
    await LCframe.waitForTimeout(3000);
    }

async clickexitLC() {
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.click(this.Elements.exitliab);
    await LCframe.waitForTimeout(3000);
    }
    

async handleAuthorizeLiabFrame() {
      
      const LCframe = await this.handleLiabilitycreationFrame();
    const frameElementHandle = await LCframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ALCframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ALCframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ALCframe;
    }
   
async clickEnterQueryLC() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.waitForSelector(this.Elements.EntrQueryLC, {state: 'visible',timeout: 20000});
    await LCframe.click(this.Elements.EntrQueryLC);
   }
/*async enterliabno() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.waitForSelector(this.Elements.liabilityno, {state: 'visible',timeout: 20000});
    await LCframe.locator(this.Elements.liabilityno).clear()
    await LCframe.locator(this.Elements.liabilityno).fill(LiabNumber)
   }
   */

    async clickExecuteQueryLC() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.waitForSelector(this.Elements.ExectQueryLC, {state: 'visible',timeout: 15000,});
    await LCframe.click(this.Elements.ExectQueryLC);
    }

    async clickAuthorizetabLC() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const LCframe = await this.handleLiabilitycreationFrame();
    await LCframe.click(this.Elements.AuthorizedLC);
    await LCframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtnLC() {
    
    const AAMframe = await this.handleAuthorizeLiabFrame();
    await AAMframe.click(this.Elements.AuthorizebuttonLC);
    await AAMframe.waitForTimeout(3000);
    }

   

   

async clickOkbtnLC() {
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
}