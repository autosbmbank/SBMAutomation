 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let IDLframe,ADframe,Contractrefrn
// let Bframe
export default class IssueDepositLockerPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        Newbutton: "//span[@id='New_oj0|text']",
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        getcontrrfn:'//*[@id="BLK_CONTRACT_DETAILS__CONREFNO"]/div[1]/div/div/div',
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        Productcodel: "//input[@id='BLK_CONTRACT_DETAILS__PRDCD|input']",
        clickPtab: "//span[@id='BLK_CONTRACT_DETAILS__BTN_P_oj81|text']",
        vaultcode: "//input[@id='BLK_CONTRACT_DETAILS__VAULTCODE|input']",
        customer: "//input[@id='BLK_CONTRACT_DETAILS__CIFID|input']",
        branch: "//input[@id='BLK_CONTRACT_DETAILS__SETTLEMENTBRN|input']",
        accountnumber: "//input[@id='BLK_CONTRACT_DETAILS__SETTLEMENTAC|input']",
        saveLocker:"//span[@id='Save_oj7|text']",
        OKbutn : "//span[@id='BTN_OK_oj0|text']",
        Authorizedl: "//span[@id='Authorize_oj8|text']",
        Authorizebuton: "//*[@id='BLK_BOOK_TXN__AUTHORIZATION_oj14|text']", 
        contractrefrn: "//input[@id='BLK_CONTRACT_DETAILS__CONREFNO|input']",
        okButton : "//span[@id='BTN_OK_oj0|text']",

    
    }

   

    async handleIssueDepositLockerFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const IDLframe = await frameElementHandle.contentFrame();

    if (!IDLframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return IDLframe;
   }

    async clickNewbutton() {
    const IDLframe = await this.handleIssueDepositLockerFrame();

    await IDLframe.waitForSelector(this.Elements.Newbutton,{state: 'visible',timeout: 20000});

    await IDLframe.click(this.Elements.Newbutton);
    try{
       const frame1 = await this.handleAuthorizeIssueDepositFrame()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
   }
   


    async enterproductcodel(productcodel: string) {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.locator(this.Elements.Productcodel).fill(productcodel);
    await IDLframe.waitForTimeout(3000);

    }
    async clickPtab() {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.click(this.Elements.clickPtab);
    await IDLframe.waitForTimeout(3000);
    }
    async entervaultcode(vaultcode: string) {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.locator(this.Elements.vaultcode).fill(vaultcode);
    await IDLframe.waitForTimeout(3000);

    }
    async entercustomer(customer: string) {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.locator(this.Elements.customer).fill(customer);
    await IDLframe.waitForTimeout(3000);

    }
    async enterbranch(branch: string) {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.locator(this.Elements.branch).fill(branch);
    await IDLframe.waitForTimeout(3000);

    }
    async enteraccnumber(accnumber: string) {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.locator(this.Elements.accountnumber).fill(accnumber);    
    await IDLframe.waitForTimeout(3000);

    }
    
    async clicksave() {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.click(this.Elements.saveLocker);
    await IDLframe.waitForTimeout(3000);
    }
    async clickokbtn() {
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.click(this.Elements.OKbutn);
    await IDLframe.waitForTimeout(3000);
    }   

     

async handleAuthorizeIssueDepositFrame() {
      
      const frame = await this.handleIssueDepositLockerFrame();
    const frameElementHandle = await frame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const AIDframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!AIDframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return AIDframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.waitForSelector(this.Elements.Newbutton, {state: 'visible',timeout: 20000});
    await IDLframe.click(this.Elements.EntrQuery);
   }

   async entercontractrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.waitForSelector(this.Elements.contractrefrn, {state: 'visible',timeout: 20000});
    await IDLframe.locator(this.Elements.contractrefrn).fill(Contractrefrn)
   }
  async getcontrarefn() {       
            const IDLframe = await this.handleIssueDepositLockerFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Contractrefrn = await IDLframe.innerText(this.Elements.getcontrrfn)
    console.log("Contract Reference:"+Contractrefrn)
       
    }

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await IDLframe.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const IDLframe = await this.handleIssueDepositLockerFrame();
    await IDLframe.click(this.Elements.Authorizedl);
    await IDLframe.waitForTimeout(3000);
      }

      
      
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const AIDframe = await this.handleAuthorizeIssueDepositFrame();
    await AIDframe.click(this.Elements.Authorizebuton);
    await AIDframe.waitForTimeout(3000);
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