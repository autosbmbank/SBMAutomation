 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let ILCBframe,AILCBframe,Contractrefrn,AIBframe,MILCBframe,ContractamtILCB,CurrencyILCB,CustomerILCB
// let Bframe
export default class ImportLCBookingPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        NewILC: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        getcontrrfn:'//*[@id="BLK_CONTRACT_DETAILS__CONREFNO"]/div[1]/div/div/div',
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        productcodei: "//input[@id='BLK_CONTRACT_DETAILS__PRDCD|input']",
        operationcodei:"//input[@id='BLK_CONTRACT_DETAILS__OPERCD|input']",
        customeri:"//input[@id='BLK_CONTRACT_DETAILS__CIFID|input']",
        contractamounti:"//input[@id='BLK_CONTRACT_DETAILS__CONTAMT|input']",
        okButton:"//span[@id='BTN_OK_oj0|text']",
        parties:'//*[@id="TAB_PARTIES"]/span',
        apppartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC0|input']",
        benpartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC1|input']",
        abkpartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC2|input']",
        Units:'//*[@id="BLK_CONTRACT_DETAILS__UNITS|input"]',
        clickPilcb: "//span[@id='BLK_CONTRACT_DETAILS__BTN_P_oj123|text']",
        saveimportlc:"//span[@id='Save_oj7|text']",
        savemisimportlc:'//span[@id="BTN_OK_oj148|text"]',
        acceptilc: "//span[@id='BTN_ACCEPT_oj1|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        exitgs:"//span[@id='BTN_EXIT_IMG_oj168|text']",
        contractrefrn: "//input[@id='BLK_CONTRACT_DETAILS__CONREFNO|input']",
        Authorizedgs: "//span[@id='Authorize_oj8|text']",
        Authorizebuttongs: "//*[@id='BLK_AUTH_DETAILS__BTN_AUTH_oj24|text']",
        confirm3 : '//*[@id="BLK_OVERRIDES_DETAILS__CONFIRMEDRC3"]/div/div/div' ,
        confirm2 : '//*[@id="BLK_OVERRIDES_DETAILS__CONFIRMEDRC2"]/div/div/div',
        MISilcb:'//*[@id="MICTFMIS_oj152|text"]',
        frequencyi:'//*[@id="BLK_CONTRACT_DETAILS__FREQ|input"]',
        expiryplacei:'//*[@id="BLK_CONTRACT_DETAILS__EXPPLACE|input"]',
        poolcodei:'//*[@id="BLK_MISDETAILS__POOLCD|input"]',
        ratecodei:'//*[@id="BLK_MISDETAILS__REFRATECD|input"]',
        creditavailablei:'//*[@id="BLK_CONTRACT_DETAILS__CREDITAVLWITH|input"]',
        profitmethodi:'//*[@id="BLK_MISDETAILS__CALCMTH|input"]',
        ratetypei:'//*[@id="BLK_MISDETAILS__REFRATETYP|input"]',
        //getcontractamtilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTAMT"]/div[1]/div/div/div',
       // getcurrencyilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTCCY"]/div[1]/div/div/div',
       // getcustomerilcb:'//*[@id="BLK_CONTRACT_DETAILS__CIFID"]/div[1]/div/div/div',
        contractamtilcb:'//*[@id="BLK_REYKEY_DETAILS__CONTAMT|input"]',
        currencyilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTCCY|input"]', 
        Authcurrencyilcb:'//*[@id="BLK_REYKEY_DETAILS__CONTCCY|input"]',               
        customerilcb:'//*[@id="BLK_REYKEY_DETAILS__CIFID|input"]',
        

    
    }

   

    async handleImportLCFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const ILCBframe = await frameElementHandle.contentFrame();

    if (!ILCBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ILCBframe;
   }
   async handleAcceptImportBookingFrame() {
    const ILCBframe = await this.handleImportLCFrame();
    const frameElementHandle = await ILCBframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const AIBframe = await frameElementHandle.contentFrame();

    if (!AIBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AIBframe;
   }
   async handleAuthorizeImportBookingFrame() {
      
      const ILCBframe = await this.handleImportLCFrame();
    const frameElementHandle = await ILCBframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const AILCBframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!AILCBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AILCBframe;
    }
    async handleMISImportBookingFrame() {
      
      const ILCBframe = await this.handleImportLCFrame();
    const frameElementHandle = await ILCBframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const MILCBframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!MILCBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return MILCBframe;
    }

    
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Letters Of Credit Contract Detailed")]', { timeout: 30000 }
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
   
async clickNewLCBooking() {
    const ILCBframe = await this.handleImportLCFrame();

    await ILCBframe.waitForSelector(this.Elements.NewILC,{state: 'visible',timeout: 20000});

    await ILCBframe.click(this.Elements.NewILC);
   }

    async enterproductcodei(productcodei: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.productcodei).fill(productcodei);
    await ILCBframe.waitForTimeout(3000);

    }
    async clickPILCBtab() {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.clickPilcb);
    await ILCBframe.waitForTimeout(3000);
    }
    async enteroperationcodei(operationcodei: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.operationcodei).fill(operationcodei);
    await ILCBframe.waitForTimeout(3000);

    }
    async entercustomeri(customeri: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.customeri).fill(customeri);
    await ILCBframe.waitForTimeout(3000);

    }
    async entercontractamounti(contractamounti: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.contractamounti).fill(contractamounti);
    await ILCBframe.waitForTimeout(3000);

    }
    async enterfrequencyi(frequencyi: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.frequencyi).fill(frequencyi);
    await ILCBframe.waitForTimeout(3000);

    }
    async enterexpiryplacei(expiryplacei: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.expiryplacei).fill(expiryplacei);
    await ILCBframe.waitForTimeout(3000);

    }
    async entercreditavailablei(creditavailablei: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.creditavailablei).fill(creditavailablei);
    await ILCBframe.waitForTimeout(3000);

    }
    async enterpoolcodei(poolcodei: string) {
    const MILCBframe = await this.handleMISImportBookingFrame();
    await MILCBframe.locator(this.Elements.poolcodei).fill(poolcodei);
    await MILCBframe.waitForTimeout(3000);

    }
    async enterratecodei(ratecodei: string) {
    const MILCBframe = await this.handleMISImportBookingFrame();
    await MILCBframe.locator(this.Elements.ratecodei).fill(ratecodei);
    await MILCBframe.waitForTimeout(3000);

    }
   async selectratetype() {
    const frame = await this.handleMISImportBookingFrame();
 
    const ratei = frame.locator(this.Elements.ratetypei);
 
    await ratei.click();
    await this.page.waitForTimeout(1000);
 
    const rateOption = frame.locator("//li[normalize-space()='Fixed']");
 
    await rateOption.waitFor({ state: 'visible' });
    await rateOption.click();
}
/*async selectunits() {
    const frame = await this.handleImportLCFrame();
 
    const uniti = frame.locator(this.Elements.Units);
 
    await uniti.click();
    await this.page.waitForTimeout(1000);
 
    const unitOption = frame.locator("//li[normalize-space()='Months']");
 
    await unitOption.waitFor({ state: 'visible' });
    await unitOption.click();
}*/
async selectunits() {
    const frame = await this.handleImportLCFrame();
 
    const purposeg = frame.locator(this.Elements.Units);
 
    await purposeg.click();
    await this.page.waitForTimeout(1000);
 
    const monthOption = frame.locator("//li[normalize-space()='Months']");
 
    await monthOption.waitFor({ state: 'visible' });
    await monthOption.click();
    console.log("Enter Unit")
}
async selectprofitmethod() {
    const frame = await this.handleMISImportBookingFrame();
 
    const profiti = frame.locator(this.Elements.profitmethodi);
 
    await profiti.click();
    await this.page.waitForTimeout(1000);
 
    const profitOption = frame.locator("//li[normalize-space()='Actual/360']");
 
    await profitOption.waitFor({ state: 'visible' });
    await profitOption.click();
}
     
         async clickparties() {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.parties);
    await ILCBframe.waitForTimeout(3000);
    }
    async clickMISILCB() {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.MISilcb);
    await ILCBframe.waitForTimeout(3000);
    }
    async enterapppartyid(apppartyid: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.apppartyid).fill(apppartyid);
    await ILCBframe.waitForTimeout(3000);

    }
     async enterbenpartyid(benpartyid: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.benpartyid).fill(benpartyid);
    await ILCBframe.waitForTimeout(3000);

    }
    async enterabkpartyid(abkpartyid: string) {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.locator(this.Elements.abkpartyid).fill(abkpartyid);
    await ILCBframe.waitForTimeout(3000);

    }
    async clickonMISImportLC() {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.MISilcb);
    await ILCBframe.waitForTimeout(3000);
    }
       
        
    async clicksaveImportLC() {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.saveimportlc);
    await ILCBframe.waitForTimeout(3000);
    }
    async clicksaveMISImportLC() {
    const MILCBframe = await this.handleMISImportBookingFrame();
    await MILCBframe.click(this.Elements.savemisimportlc);
    await MILCBframe.waitForTimeout(3000);
    }
   async clickacceptilcb() {
    const AAframe = await this.handleAcceptImportBookingFrame();
    await AAframe.click(this.Elements.acceptilc);
    await AAframe.waitForTimeout(3000);
    }
      

     async clickOkbtn() {
    const ILCBframe = await this.handleInformationMessageFrame();
    await ILCBframe.click(this.Elements.OKbtn);
    await ILCBframe.waitForTimeout(3000);
    }

async clickexit() {
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.exitgs);
    await ILCBframe.waitForTimeout(3000);
    }
    async clickToggleByNolimit() {
        const AILCBframe = await this.handleAuthorizeImportBookingFrame();
       await AILCBframe.locator(this.Elements.confirm3).click()
 }
async clickToggleByGtype() {
    const AILCBframe = await this.handleAuthorizeImportBookingFrame();
    await AILCBframe.locator(this.Elements.confirm2).click()
}
    


   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await ILCBframe.click(this.Elements.EntrQuery);
   }
async entercontractrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.waitForSelector(this.Elements.contractrefrn, {state: 'visible',timeout: 20000});
    await ILCBframe.locator(this.Elements.contractrefrn).fill(Contractrefrn)
   }
  async getcontrarefn() {       
            const ILCBframe = await this.handleImportLCFrame();
               //await ILCBframe.click(this.Elements.fetchcontrrfn);
      Contractrefrn = await ILCBframe.innerText(this.Elements.getcontrrfn)
    console.log("Contract Reference:"+Contractrefrn)
       
    }
   

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await ILCBframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabgs() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ILCBframe = await this.handleImportLCFrame();
    await ILCBframe.click(this.Elements.Authorizedgs);
    await ILCBframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtngs() {
    
    const AAGframe = await this.handleAuthorizeImportBookingFrame();
    await AAGframe.click(this.Elements.Authorizebuttongs);
    await AAGframe.waitForTimeout(3000);
    }

async entercontractamtILCB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AILCBframe = await this.handleAuthorizeImportBookingFrame();
    await AILCBframe.waitForSelector(this.Elements.contractamtilcb, {state: 'visible',timeout: 20000});
    await AILCBframe.locator(this.Elements.contractamtilcb).fill(ContractamtILCB)
   }
  async getcontractamtILCB() {       
            const ILCBframe = await this.handleImportLCFrame();
               //await ILCBframe.click(this.Elements.fetchcontrrfn);
      ContractamtILCB = await ILCBframe.locator(this.Elements.contractamounti).inputValue()
    console.log("Contract Amount:"+ContractamtILCB)
       
    } 
    async entercurrencyILCB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AILCBframe = await this.handleAuthorizeImportBookingFrame();
    console.log("Authorize frame");
    await AILCBframe.waitForSelector(this.Elements.Authcurrencyilcb, {state: 'visible',timeout: 20000});
    await AILCBframe.locator(this.Elements.Authcurrencyilcb).fill(CurrencyILCB)
   }
  async getcurrencyILCB() {       
            const ILCBframe = await this.handleImportLCFrame();
               //await ILCBframe.click(this.Elements.fetchcontrrfn);
      CurrencyILCB = await ILCBframe.locator(this.Elements.currencyilcb).inputValue()
    console.log("Currency:"+CurrencyILCB)
       
    } 

    async entercustomerILCB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AILCBframe = await this.handleAuthorizeImportBookingFrame();
    await AILCBframe.waitForSelector(this.Elements.customerilcb, {state: 'visible',timeout: 20000});
    await AILCBframe.locator(this.Elements.customerilcb).fill(CustomerILCB)
   }
  async getcustomerILCB() {       
            const ILCBframe = await this.handleImportLCFrame();
               //await ILCBframe.click(this.Elements.fetchcontrrfn);
      CustomerILCB = await ILCBframe.locator(this.Elements.customeri).inputValue()
    console.log("Customer:"+CustomerILCB)
       
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