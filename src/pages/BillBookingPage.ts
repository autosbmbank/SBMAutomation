 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let BBframe,ABBframe,Contractrefrn,AUBBframe,amountBB,CurrencyBB,CustomerBB
// let Bframe
export default class BillBookingPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        NewBB: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        getcontrrfn:'//*[@id="BLK_CONTRACT_DETAILS__CONREFNO"]/div[1]/div/div/div',
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        productcodeb: "//input[@id='BLK_CONTRACT_DETAILS__PRDCD|input']",
        customerb:"//input[@id='BLK_CONTRACT_DETAILS__CUSTID|input']",
        amountb:"//input[@id='BLK_CONTRACT_DETAILS__BILLAMT|input']",
        okButton:"//span[@id='BTN_OK_oj0|text']",
        okbtn:"//span[@id='BTN_OK_oj0|text']",
        parties:'//*[@id="TAB_PARTIES"]/span',
        draweepartyid:"//*[@id='BLK_CONTRACT_PARTIES__PARTIDRC0|input']",
        drawerpartyid:"//*[@id='BLK_CONTRACT_PARTIES__PARTIDRC1|input']",
        remittingbnkpartyid:"//*[@id='BLK_CONTRACT_PARTIES__PARTIDRC2|input']",
        draweerfn:"//*[@id='BLK_CONTRACT_PARTIES__PARTREFNORC0|input']",
        drawerrfn:"//*[@id='BLK_CONTRACT_PARTIES__PARTREFNORC1|input']",
        remittingbnkrfn:"//*[@id='BLK_CONTRACT_PARTIES__PARTREFNORC2|input']",      
        savebill:"//span[@id='Save_oj7|text']",
        acceptbb: "//span[@id='BTN_ACCEPT_oj1|text']",
        exitgs:"//span[@id='BTN_EXIT_IMG_oj174|text']",
        contractrefrn: "//input[@id='BLK_CONTRACT_DETAILS__CONREFNO|input']",
        Authorized: "//span[@id='Authorize_oj8|text']",
        Authorizebutton: '//*[@id="BLK_REKEY_DETAILS__BTN_AUTH_oj17|text"]',
        //getcontractamtilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTAMT"]/div[1]/div/div/div',
       // getcurrencyilcb:'//*[@id="BLK_CONTRACT_DETAILS__CONTCCY"]/div[1]/div/div/div',
       // getcustomerilcb:'//*[@id="BLK_CONTRACT_DETAILS__CIFID"]/div[1]/div/div/div',
        amountbb:'//*[@id="BLK_REKEY_DETAILS__BILLAMT|input"]',
        currencybb:'//*[@id="BLK_CONTRACT_DETAILS__BILLCCY|input"]', 
        Authcurrencyebb:'//*[@id="BLK_REKEY_DETAILS__BILLCCY|input"]',               
        customerbb:'//*[@id="BLK_REKEY_DETAILS__CUSTID|input"]',
        

    
    }

   

    async handleBillBookingFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const BBframe = await frameElementHandle.contentFrame();

    if (!BBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return BBframe;
   }
   async handleAcceptBillBookingFrame() {
    const BBframe = await this.handleBillBookingFrame();
    const frameElementHandle = await BBframe.waitForSelector('iframe[id="ifr_AlertWin"]',{ timeout: 30000 });

    const ABBframe = await frameElementHandle.contentFrame();

    if (!ABBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ABBframe;
   }
   async handleAuthorizeBillBookingFrame() {
      
      const BBframe = await this.handleBillBookingFrame();
    const frameElementHandle = await BBframe.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const AUBBframe = await frameElementHandle.contentFrame();
    
    if (!AUBBframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AUBBframe;
    }
    
    
   async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Bills and Collection Contract Detailed")]', { timeout: 30000 }
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
    const BBframe = await this.handleBillBookingFrame();

    await BBframe.waitForSelector(this.Elements.NewBB,{state: 'visible',timeout: 20000});

    await BBframe.click(this.Elements.NewBB);
    try{
       const frame1 = await this.handleAuthorizeBillBookingFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }

    async enterproductcodeb(productcodeb: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.productcodeb).fill(productcodeb);
    await BBframe.waitForTimeout(3000);

    }
    
    async entercustomerb(customerb: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.customerb).fill(customerb);
    await BBframe.waitForTimeout(3000);

    }
    async enteramountb(amountb: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.amountb).fill(amountb);
    await BBframe.waitForTimeout(3000);

    }
    
    async clickparties() {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.click(this.Elements.parties);
    await BBframe.waitForTimeout(3000);
    }
    
    async enterdraweepartyid(draweepartyid: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.draweepartyid).fill(draweepartyid);
    await BBframe.waitForTimeout(3000);

    }
     async enterdrawerpartyid(drawerpartyid: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.drawerpartyid).fill(drawerpartyid);
    await BBframe.waitForTimeout(3000);

    }
    async enterremittingbankpartyid(remittingpartyid: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.remittingbnkpartyid).fill(remittingpartyid);
    await BBframe.waitForTimeout(3000);

    }
    async enterdraweerfn(draweerfn: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.draweerfn).fill(draweerfn);
    await BBframe.waitForTimeout(3000);

    }
     async enterdrawerrfn(drawerrfn: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.drawerrfn).fill(drawerrfn);
    await BBframe.waitForTimeout(3000);

    }
    async enterremittingbankrfn(remittingrfn: string) {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.locator(this.Elements.remittingbnkrfn).fill(remittingrfn);
    await BBframe.waitForTimeout(3000);

    }
    async clicksaveBillBooking() {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.click(this.Elements.savebill);
    await BBframe.waitForTimeout(3000);
    }
   async clickOkbtn() {
    const BBframe = await this.handleInformationMessageFrame();
    await BBframe.click(this.Elements.okbtn);
    await BBframe.waitForTimeout(3000);
    }
    
   async clickacceptBB() {
    const ABBframe = await this.handleAcceptBillBookingFrame();
    await ABBframe.click(this.Elements.acceptbb);
    await ABBframe.waitForTimeout(3000);
    }
      

async clickexit() {
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.click(this.Elements.exitgs);
    await BBframe.waitForTimeout(3000);
    }    


   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.waitForSelector(this.Elements.EntrQuery, {state: 'visible',timeout: 20000});
    await BBframe.click(this.Elements.EntrQuery);
   }
async entercontractrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.waitForSelector(this.Elements.contractrefrn, {state: 'visible',timeout: 20000});
    await BBframe.locator(this.Elements.contractrefrn).fill(Contractrefrn)
   }
  async getcontrarefn() {       
            const BBframe = await this.handleBillBookingFrame();
               //await BBframe.click(this.Elements.fetchcontrrfn);
      Contractrefrn = await BBframe.innerText(this.Elements.getcontrrfn)
    console.log("Contract Reference:"+Contractrefrn)
       
    }   

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await BBframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const BBframe = await this.handleBillBookingFrame();
    await BBframe.click(this.Elements.Authorized);
    await BBframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtn() {
    
    const AUBBframe = await this.handleAuthorizeBillBookingFrame();
    await AUBBframe.click(this.Elements.Authorizebutton);
    await AUBBframe.waitForTimeout(3000);
    }

async entercontractamtBB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AUBBframe = await this.handleAuthorizeBillBookingFrame();
    await AUBBframe.waitForSelector(this.Elements.amountbb, {state: 'visible',timeout: 20000});
    await AUBBframe.locator(this.Elements.amountbb).fill(amountBB)
   }
  async getcontractamtBB() {       
            const BBframe = await this.handleBillBookingFrame();
               //await BBframe.click(this.Elements.fetchcontrrfn);
      amountBB = await BBframe.locator(this.Elements.amountb).inputValue()
    console.log("Contract Amount:"+amountBB)
       
    } 
    async entercurrencyBB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AUBBframe = await this.handleAuthorizeBillBookingFrame();
        await AUBBframe.waitForSelector(this.Elements.Authcurrencyebb, {state: 'visible',timeout: 20000});
    await AUBBframe.locator(this.Elements.Authcurrencyebb).fill(CurrencyBB)
   }
  async getcurrencyBB() {       
            const BBframe = await this.handleBillBookingFrame();
               //await BBframe.click(this.Elements.fetchcontrrfn);
      CurrencyBB = await BBframe.locator(this.Elements.currencybb).inputValue()
    console.log("Currency:"+CurrencyBB)
       
    } 

    async entercustomerBB() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const AUBBframe = await this.handleAuthorizeBillBookingFrame();
    await AUBBframe.waitForSelector(this.Elements.customerbb, {state: 'visible',timeout: 20000});
    await AUBBframe.locator(this.Elements.customerbb).fill(CustomerBB)
   }
  async getcustomerBB() {       
            const BBframe = await this.handleBillBookingFrame();
               //await BBframe.click(this.Elements.fetchcontrrfn);
      CustomerBB = await BBframe.locator(this.Elements.customerb).inputValue()
    console.log("Customer:"+CustomerBB)
       
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