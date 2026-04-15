 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let GSframe,AAGframe,Contractrefrn
// let Bframe
export default class GuaranteePage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newamend: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        getcontrrfn:'//*[@id="BLK_CONTRACT_DETAILS__CONREFNO"]/div[1]/div/div/div',
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        productcodeg: "//input[@id='BLK_CONTRACT_DETAILS__PRDCD|input']",
        operationcodeg:"//input[@id='BLK_CONTRACT_DETAILS__OPERCD|input']",
        customerg:"//input[@id='BLK_CONTRACT_DETAILS__CIFID|input']",
        contractamountg:"//input[@id='BLK_CONTRACT_DETAILS__CONTAMT|input']",
        clickdefault:"//span[@id='BLK_CONTRACT_DETAILS__BTN_DEFAULT_oj127|text']",
        okmain:"//span[@id='BTN_OK_oj0|text']",
        parties:"//*[@id='TAB_PARTIES']/span",
        apppartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC0|input']",
        benpartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC1|input']",
        termandcon:"//*[@id='TAB_TERMS_CONDS']/span",
        plus:"//*[@id='cmdAddRow_BLK_TERMS_CONDS']/button/div/span[1]/span",
        termandcond:"//*[@id='BLK_TERMS_CONDS__TERMS_CONDITIONSRC0|input']",
        acceptgs:"//span[@id='BTN_ACCEPT_oj1|text']",
        GuaranteePurpose:"//*[@id='BLK_CONTRACT_DETAILS__ISSREQ|input']",
        ExpiryType:"//*[@id='BLK_CONTRACT_DETAILS__VALIDITY_TYPE|input']",
        clickPGS: "//span[@id='BLK_CONTRACT_DETAILS__BTN_P_oj116|text']",
        saveguarantee:"//span[@id='Save_oj7|text']",
        acceptmain: "//span[@id='BTN_ACCEPT_oj1|text']",
        OKbutngs : "//span[@id='BTN_OK_oj0|text']",
        exitgs:"//span[@id='BTN_EXIT_IMG_oj156|text']",
        contractrefrn: "//input[@id='BLK_CONTRACT_DETAILS__CONREFNO|input']",
        Authorizedgs: "//span[@id='Authorize_oj8|text']",
        Authorizebuttongs: "//*[@id='BLK_AUTH_DETAILS__BTN_AUTH_oj24|text']",
        currencygs:"//input[@id='BLK_REYKEY_DETAILS__CONTCCY|input']",
        contractamountgs:"//input[@id='BLK_REYKEY_DETAILS__CONTAMT|input']",
        customeridgs:"//input[@id='BLK_REYKEY_DETAILS__CIFID|input']",
        confirm3 : '//*[@id="BLK_OVERRIDES_DETAILS__CONFIRMEDRC3"]/div/div' ,
        confirm2 : '//*[@id="BLK_OVERRIDES_DETAILS__CONFIRMEDRC2"]/div/div',
        
    
    }

   

    async handleGuaranteeFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const GSframe = await frameElementHandle.contentFrame();

    if (!GSframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return GSframe;
   }
   async handleAcceptGuaranteeFrame() {
    const GSframe = await this.handleGuaranteeFrame();
    const frameElementHandle = await GSframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const AGframe = await frameElementHandle.contentFrame();

    if (!AGframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AGframe;
   }

    async clickNewGuarantee() {
    const GSframe = await this.handleGuaranteeFrame();

    await GSframe.waitForSelector(this.Elements.Newamend,{state: 'visible',timeout: 20000});

    await GSframe.click(this.Elements.Newamend);
   }
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Guarantees and Standby Letters of Credit Contract Input")]', { timeout: 30000 }
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
   


    async enterproductcodeg(productcodeg: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.productcodeg).fill(productcodeg);
    await GSframe.waitForTimeout(3000);

    }
    async clickPGStab() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.clickPGS);
    await GSframe.waitForTimeout(3000);
    }
    async enteroperationcodeg(operationcodeg: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.operationcodeg).fill(operationcodeg);
    await GSframe.waitForTimeout(3000);

    }
    async entercustomerg(customerg: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.customerg).fill(customerg);
    await GSframe.waitForTimeout(3000);

    }
    async entercontractamountg(contractamountg: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.contractamountg).fill(contractamountg);
    await GSframe.waitForTimeout(3000);

    }
   async selectpurposeg() {
    const frame = await this.handleGuaranteeFrame();
 
    const purposeg = frame.locator(this.Elements.GuaranteePurpose);
 
    await purposeg.click();
    await this.page.waitForTimeout(1000);
 
    const issueOption = frame.locator("//li[normalize-space()='Issue']");
 
    await issueOption.waitFor({ state: 'visible' });
    await issueOption.click();
}
async selectexpirytype() {
    const frame = await this.handleGuaranteeFrame();
 
    const purposeg = frame.locator(this.Elements.ExpiryType);
 
    await purposeg.click();
    await this.page.waitForTimeout(1000);
 
    const fixedOption = frame.locator("//li[normalize-space()='Fixed']");
 
    await fixedOption.waitFor({ state: 'visible' });
    await fixedOption.click();
}
async clicDefaulttab() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.clickdefault);
    await GSframe.waitForTimeout(3000);
    }
     async clickacceptmain() {
    const AGframe = await this.handleAcceptGuaranteeFrame();
    await AGframe.click(this.Elements.acceptmain);
    await AGframe.waitForTimeout(3000);
    }
     async clickOkmain() {
    const GSframe = await this.handleInformationMessageFrame();
    await GSframe.click(this.Elements.okmain);
    await GSframe.waitForTimeout(3000);
    }
    async clickparties() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.parties);
    await GSframe.waitForTimeout(3000);
    }
    async enterapppartyid(apppartyid: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.apppartyid).fill(apppartyid);
    await GSframe.waitForTimeout(3000);

    }
     async enterbenpartyid(benpartyid: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.benpartyid).fill(benpartyid);
    await GSframe.waitForTimeout(3000);

    }
    async clicktermandcon() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.termandcon);
    await GSframe.waitForTimeout(3000);
    }
    async clickplus() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.plus);
    await GSframe.waitForTimeout(3000);
    }
    async entertermandcond(termandcond: string) {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.locator(this.Elements.termandcond).fill(termandcond);
    await GSframe.waitForTimeout(3000);

    }
    
    async clicksaveguarantee() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.saveguarantee);
    await GSframe.waitForTimeout(3000);
    }
   async clickacceptgs() {
    const AAframe = await this.handleAcceptGuaranteeFrame();
    await AAframe.click(this.Elements.acceptgs);
    await AAframe.waitForTimeout(3000);
    }
    

     async clickOk() {
    const GSframe = await this.handleInformationMessageFrame();
    await GSframe.click(this.Elements.OKbutngs);
    await GSframe.waitForTimeout(3000);
    }

async clickexit() {
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.exitgs);
    await GSframe.waitForTimeout(3000);
    }
    

async handleAuthorizeGuaranteeFrame() {
      
      const GSframe = await this.handleGuaranteeFrame();
    const frameElementHandle = await GSframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const AAGframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!AAGframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AAGframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.waitForSelector(this.Elements.Newamend, {state: 'visible',timeout: 20000});
    await GSframe.click(this.Elements.EntrQuery);
   }
async entercontractrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.waitForSelector(this.Elements.contractrefrn, {state: 'visible',timeout: 20000});
    await GSframe.locator(this.Elements.contractrefrn).fill(Contractrefrn)
   }
  async getcontrarefn() {       
            const GSframe = await this.handleGuaranteeFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Contractrefrn = await GSframe.innerText(this.Elements.getcontrrfn)
    console.log("Contract Reference:"+Contractrefrn)
       
    }
   

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await GSframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabgs() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleGuaranteeFrame();
    await GSframe.click(this.Elements.Authorizedgs);
    await GSframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtngs() {
    
    const AAGframe = await this.handleAuthorizeGuaranteeFrame();
    await AAGframe.click(this.Elements.Authorizebuttongs);
    await AAGframe.waitForTimeout(3000);
    }

async entercurrencygs(currencygs: string) {
    const AAGframe = await this.handleAuthorizeGuaranteeFrame();
    await AAGframe.locator(this.Elements.currencygs).fill(currencygs);
    await AAGframe.waitForTimeout(3000);

    }
    
async entercontractamountgs(contractamountgs: string) {
    const AAGframe = await this.handleAuthorizeGuaranteeFrame();
    await AAGframe.locator(this.Elements.contractamountgs).fill(contractamountgs);
    await AAGframe.waitForTimeout(3000);

    }
    async entercustomeridgs(customeridgs: string) {
    const AAGframe = await this.handleAuthorizeGuaranteeFrame();
    await AAGframe.locator(this.Elements.customeridgs).fill(customeridgs);
    await AAGframe.waitForTimeout(3000);

    }
    async clickToggleByNolimit() {
        const AAGframe = await this.handleAuthorizeGuaranteeFrame();
       await AAGframe.locator(this.Elements.confirm3).click()
 }
async clickToggleByGtype() {
    const AAGframe = await this.handleAuthorizeGuaranteeFrame();
    await AAGframe.locator(this.Elements.confirm2).click()
}

async clickOK() {
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