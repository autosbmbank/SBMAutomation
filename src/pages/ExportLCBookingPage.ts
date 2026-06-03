 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let ELCBframe,AELCBframe,Contractrefrn,AEBframe,MELCBframe,ContractamtELCB,CurrencyELCB,CustomerELCB,FELCBframe
// let Bframe
export default class ExportLCBookingPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        NewExILC: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        getcontrrfn:'//*[@id="BLK_CONTRACT_DETAILS__CONREFNO"]/div[1]/div/div/div',
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        productcodee: "//input[@id='BLK_CONTRACT_DETAILS__PRDCD|input']",
        operationcodee:"//input[@id='BLK_CONTRACT_DETAILS__OPERCD|input']",
        customere:"//input[@id='BLK_CONTRACT_DETAILS__CIFID|input']",
        contractamounte:"//input[@id='BLK_CONTRACT_DETAILS__CONTAMT|input']",
        okButton:"//span[@id='BTN_OK_oj0|text']",
        parties:'//*[@id="TAB_PARTIES"]/span',
        apppartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC0|input']",
        benpartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC1|input']",
        isbpartyid:"//*[@id='BLK_PARTY_DETAILS__PARTYCIFIDRC2|input']",
        appcustrfn:"//*[@id='BLK_PARTY_DETAILS__CUSTREFNORC0|input']",
        bencustrfn:"//*[@id='BLK_PARTY_DETAILS__CUSTREFNORC1|input']",
        isbcustrfn:"//*[@id='BLK_PARTY_DETAILS__CUSTREFNORC2|input']",
        appdated:"//*[@id='BLK_PARTY_DETAILS__CUSTREFDATERC0|input']",
        bendated:"//*[@id='BLK_PARTY_DETAILS__CUSTREFDATERC1|input']",
        isbdated:"//*[@id='BLK_PARTY_DETAILS__CUSTREFDATERC2|input']",
        expiryplacee:'//input[@id="BLK_CONTRACT_DETAILS__EXPPLACE|input"]',
        clickPexilcb: "//span[@id='BLK_CONTRACT_DETAILS__BTN_P_oj123|text']",
        saveimportlc:"//span[@id='Save_oj7|text']",
        acceptilc: "//span[@id='BTN_ACCEPT_oj1|text']",
        OKbtn : "//span[@id='BTN_OK_oj0|text']",
        exitgs:"//span[@id='BTN_EXIT_IMG_oj168|text']",
        contractrefrn: "//input[@id='BLK_CONTRACT_DETAILS__CONREFNO|input']",
        Authorizedgs: "//span[@id='Authorize_oj8|text']",
        Authorizebuttongs: "//*[@id='BLK_AUTH_DETAILS__BTN_AUTH_oj24|text']",
        confirm3 : '//*[@id="BLK_OVERRIDES_DETAILS__CONFIRMEDRC1"]/div/div' ,
        confirm2 : '//*[@id="BLK_OVERRIDES_DETAILS__CONFIRMEDRC0"]/div/div',
        MISilcb:'//*[@id="MICTFMIS_oj152|text"]',
        creditavailablee:'//*[@id="BLK_CONTRACT_DETAILS__CREDITAVLWITH|input"]',
       //getcontractamtilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTAMT"]/div[1]/div/div/div',
       // getcurrencyilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTCCY"]/div[1]/div/div/div',
       // getcustomerilcb:'//*[@id="BLK_CONTRACT_DETAILS__CIFID"]/div[1]/div/div/div',
        contractamtelcb:'//*[@id="BLK_REYKEY_DETAILS__CONTAMT|input"]',
        currencyelcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTCCY|input"]', 
        Authcurrencyelcb:'//*[@id="BLK_REYKEY_DETAILS__CONTCCY|input"]',               
        customerelcb:'//*[@id="BLK_REYKEY_DETAILS__CIFID|input"]',
        securetype:'//*[@id="BLK_TXN_UDF_DETAILS__FLDVALRC9|input"]',
        field:'//*[@id="CSCTFUDF_oj151|text"]',
        savefield:'//*[@id="BTN_OK_oj8|text"]'
        

    
    }

   

    async handleExportLCFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const ELCBframe = await frameElementHandle.contentFrame();

    if (!ELCBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ELCBframe;
   }
   async handleAcceptExportBookingFrame() {
    const ELCBframe = await this.handleExportLCFrame();
    const frameElementHandle = await ELCBframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const AEBframe = await frameElementHandle.contentFrame();

    if (!AEBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AEBframe;
   }
   async handleAuthorizeExportBookingFrame() {
      
      const ELCBframe = await this.handleExportLCFrame();
    const frameElementHandle = await ELCBframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const AELCBframe = await frameElementHandle.contentFrame();
    

    if (!AELCBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AELCBframe;
    }
    async handleFieldsExportLCBookingFrame() {
      
      const ELCBframe = await this.handleExportLCFrame();
    const frameElementHandle = await ELCBframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const FELCBframe = await frameElementHandle.contentFrame();
    

    if (!FELCBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return FELCBframe;
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
   
async clickNewExLCBooking() {
    const ELCBframe = await this.handleExportLCFrame();

    await ELCBframe.waitForSelector(this.Elements.NewExILC,{state: 'visible',timeout: 20000});

    await ELCBframe.click(this.Elements.NewExILC);
    try{
       const frame1 = await this.handleAuthorizeExportBookingFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }

    async enterproductcodee(productcodee: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.productcodee).fill(productcodee);
    await ELCBframe.waitForTimeout(3000);

    }
    async clickPExILCBtab() {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.click(this.Elements.clickPexilcb);
    await ELCBframe.waitForTimeout(3000);
    }
    async enteroperationcodee(operationcodee: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.operationcodee).fill(operationcodee);
    await ELCBframe.waitForTimeout(3000);

    }
    async entercustomere(customere: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.customere).fill(customere);
    await ELCBframe.waitForTimeout(3000);

    }
    async entercontractamounte(contractamounte: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.contractamounte).fill(contractamounte);
    await ELCBframe.waitForTimeout(3000);

    }
    
    async enterexpiryplacee(expiryplacee: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.expiryplacee).fill(expiryplacee);
    await ELCBframe.waitForTimeout(3000);

    }
    async entercreditavailablei(creditavailablei: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.creditavailablee).fill(creditavailablei);
    await ELCBframe.waitForTimeout(3000);

    }
    async clickfields() {
     const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.click(this.Elements.field);
    await ELCBframe.waitForTimeout(3000);
    }
    async entersecuritytype(securetype: string) {
    const FELCBframe = await this.handleFieldsExportLCBookingFrame();
    await FELCBframe.locator(this.Elements.securetype).fill(securetype);
    await FELCBframe.waitForTimeout(3000);

    }
    async clicksaveField() {
    const FELCBframe = await this.handleFieldsExportLCBookingFrame();
    await FELCBframe.click(this.Elements.savefield);
    await FELCBframe.waitForTimeout(3000);
    }
    
    
         async clickparties() {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.click(this.Elements.parties);
    await ELCBframe.waitForTimeout(3000);
    }
    
    async enterapppartyid(apppartyid: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.apppartyid).fill(apppartyid);
    await ELCBframe.waitForTimeout(3000);

    }
     async enterbenpartyid(benpartyid: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.benpartyid).fill(benpartyid);
    await ELCBframe.waitForTimeout(3000);

    }
    async enterisbpartyid(isbpartyid: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.isbpartyid).fill(isbpartyid);
    await ELCBframe.waitForTimeout(3000);

    }
    async enterappcustrfn(appcustrfn: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.appcustrfn).fill(appcustrfn);
    await ELCBframe.waitForTimeout(3000);

    }
     async enterbencustrfn(bencustrfn: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.bencustrfn).fill(bencustrfn);
    await ELCBframe.waitForTimeout(3000);

    }
    async enterisbcustrfn(isbcustrfn: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.isbcustrfn).fill(isbcustrfn);
    await ELCBframe.waitForTimeout(3000);

    }
    async enterappdated(appdated: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.appdated).fill(appdated);
    await ELCBframe.waitForTimeout(3000);

    }
     async enterbendated(bendated: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.bendated).fill(bendated);
    await ELCBframe.waitForTimeout(3000);

    }
    async enterisbdated(isbdated: string) {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.locator(this.Elements.isbdated).fill(isbdated);
    await ELCBframe.waitForTimeout(3000);

    }        
        
    async clicksaveExportLC() {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.click(this.Elements.saveimportlc);
    await ELCBframe.waitForTimeout(3000);
    }
    
   async clickacceptelcb() {
    const AAframe = await this.handleAcceptExportBookingFrame();
    await AAframe.click(this.Elements.acceptilc);
    await AAframe.waitForTimeout(3000);
    }
      

     async clickOkbtn() {
    const ELCBframe = await this.handleInformationMessageFrame();
    await ELCBframe.click(this.Elements.OKbtn);
    await ELCBframe.waitForTimeout(3000);
    }

async clickexit() {
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.click(this.Elements.exitgs);
    await ELCBframe.waitForTimeout(3000);
    }
    


   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await ELCBframe.click(this.Elements.EntrQuery);
   }
async entercontractrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.waitForSelector(this.Elements.contractrefrn, {state: 'visible',timeout: 20000});
    await ELCBframe.locator(this.Elements.contractrefrn).fill(Contractrefrn)
   }
  async getcontrarefn() {       
            const ELCBframe = await this.handleExportLCFrame();
               //await ELCBframe.click(this.Elements.fetchcontrrfn);
      Contractrefrn = await ELCBframe.innerText(this.Elements.getcontrrfn)
    console.log("Contract Reference:"+Contractrefrn)
       
    }
   

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await ELCBframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetabgs() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const ELCBframe = await this.handleExportLCFrame();
    await ELCBframe.click(this.Elements.Authorizedgs);
    await ELCBframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtngs() {
    
    const AAGframe = await this.handleAuthorizeExportBookingFrame();
    await AAGframe.click(this.Elements.Authorizebuttongs);
    await AAGframe.waitForTimeout(3000);
    }

async entercontractamtELCB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AELCBframe = await this.handleAuthorizeExportBookingFrame();
    await AELCBframe.waitForSelector(this.Elements.contractamtelcb, {state: 'visible',timeout: 20000});
    await AELCBframe.locator(this.Elements.contractamtelcb).fill(ContractamtELCB)
   }
  async getcontractamtELCB() {       
            const ELCBframe = await this.handleExportLCFrame();
               //await ELCBframe.click(this.Elements.fetchcontrrfn);
      ContractamtELCB = await ELCBframe.locator(this.Elements.contractamounte).inputValue()
    console.log("Contract Amount:"+ContractamtELCB)
       
    } 
    async entercurrencyELCB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AELCBframe = await this.handleAuthorizeExportBookingFrame();
        await AELCBframe.waitForSelector(this.Elements.Authcurrencyelcb, {state: 'visible',timeout: 20000});
    await AELCBframe.locator(this.Elements.Authcurrencyelcb).fill(CurrencyELCB)
   }
  async getcurrencyELCB() {       
            const ELCBframe = await this.handleExportLCFrame();
               //await ELCBframe.click(this.Elements.fetchcontrrfn);
      CurrencyELCB = await ELCBframe.locator(this.Elements.currencyelcb).inputValue()
    console.log("Currency:"+CurrencyELCB)
       
    } 

    async entercustomerELCB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AELCBframe = await this.handleAuthorizeExportBookingFrame();
    await AELCBframe.waitForSelector(this.Elements.customerelcb, {state: 'visible',timeout: 20000});
    await AELCBframe.locator(this.Elements.customerelcb).fill(CustomerELCB)
   }
  async getcustomerELCB() {       
            const ELCBframe = await this.handleExportLCFrame();
               //await ELCBframe.click(this.Elements.fetchcontrrfn);
      CustomerELCB = await ELCBframe.locator(this.Elements.customere).inputValue()
    console.log("Customer:"+CustomerELCB)
       
    } 
    async clickToggleByNolimit() {
        const AELCBframe = await this.handleAuthorizeExportBookingFrame();
       await AELCBframe.locator(this.Elements.confirm3).click()
       console.log("No Limit");
 }
async clickcreditavailable() {
    const AELCBframe = await this.handleAuthorizeExportBookingFrame();
    await AELCBframe.locator(this.Elements.confirm2).click()
    console.log("Credit Available");
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