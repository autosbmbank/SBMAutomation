 import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let Lframe,ADframe,Contractrefrn
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
        
    
    }

   

    async handleIssueDepositLockerFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const Lframe = await frameElementHandle.contentFrame();

    if (!Lframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return Lframe;
   }

    async clickNewbutton() {
    const Lframe = await this.handleIssueDepositLockerFrame();

    await Lframe.waitForSelector(this.Elements.Newbutton,{state: 'visible',timeout: 20000});

    await Lframe.click(this.Elements.Newbutton);
   }
   


    async enterproductcodel(productcodel: string) {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.locator(this.Elements.Productcodel).fill(productcodel);
    await Lframe.waitForTimeout(3000);

    }
    async clickPtab() {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.click(this.Elements.clickPtab);
    await Lframe.waitForTimeout(3000);
    }
    async entervaultcode(vaultcode: string) {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.locator(this.Elements.vaultcode).fill(vaultcode);
    await Lframe.waitForTimeout(3000);

    }
    async entercustomer(customer: string) {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.locator(this.Elements.customer).fill(customer);
    await Lframe.waitForTimeout(3000);

    }
    async enterbranch(branch: string) {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.locator(this.Elements.branch).fill(branch);
    await Lframe.waitForTimeout(3000);

    }
    async enteraccnumber(accnumber: string) {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.locator(this.Elements.accountnumber).fill(accnumber);    
    await Lframe.waitForTimeout(3000);

    }
    
    async clicksave() {
    const Lframe = await this.handleIssueDepositLockerFrame();
    await Lframe.click(this.Elements.saveLocker);
    await Lframe.waitForTimeout(3000);
    }
    

     async clickOk() {

    try{

     const outerFrameHandle1 = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin6108434161084341']", { timeout: 5000 });
     const outerFrame = await outerFrameHandle1.contentFrame();

     // Wait for the Override Message frame inside it
     const innerframehandle1 = await outerFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 5000 });
     const overrideFrame = await innerframehandle1.contentFrame();
     //const message = successframe.locator(this.Elements.successmsg);
     //await message.waitFor({ state: 'visible', timeout: 15000 });
     // await expect(message).toHaveText('Successfully Saved', {timeout: 15000});
     const okButton = overrideFrame.locator(this.Elements.OKbutn);
     await okButton.waitFor({state: 'visible', timeout: 5000 });
     await okButton.click();
     console.log("Successfully clicked on OK button")

     } catch (error) {
      console.log("Override or Alert frame not found");
     }
    }

async handleAuthorizeIssueDepositFrame() {
      
      const frame = await this.handleIssueDepositLockerFrame();
    const frameElementHandle = await frame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 10000 });

    const ADframe = await frameElementHandle.contentFrame();
    console.log("Authroize frame")

    if (!ADframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ADframe;
    }
   
async clickEnterQuery() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleIssueDepositLockerFrame();
    await frame.waitForSelector(this.Elements.Newbutton, {state: 'visible',timeout: 20000});
    await frame.click(this.Elements.EntrQuery);
   }

   async entercontractrefrn() {
    
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const GSframe = await this.handleIssueDepositLockerFrame();
    await GSframe.waitForSelector(this.Elements.contractrefrn, {state: 'visible',timeout: 20000});
    await GSframe.locator(this.Elements.contractrefrn).fill(Contractrefrn)
   }
  async getcontrarefn() {       
            const GSframe = await this.handleIssueDepositLockerFrame();
               //await GSframe.click(this.Elements.fetchcontrrfn);
      Contractrefrn = await GSframe.innerText(this.Elements.getcontrrfn)
    console.log("Contract Reference:"+Contractrefrn)
       
    }

    async clickExecuteQuery() {
    //const frame = await this.handledeleteBookTransferFrame(); // or handleBookTransferFrame()
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleIssueDepositLockerFrame();
    await frame.waitForSelector(this.Elements.ExectQuery, {state: 'visible',timeout: 15000,});
    await frame.click(this.Elements.ExectQuery);
    }

    async clickAuthorizetab() {
    //const frame = await this.handleAuthorizeBookTransferFrame();
    const frame = await this.handleIssueDepositLockerFrame();
    await frame.click(this.Elements.Authorizedl);
    await frame.waitForTimeout(3000);
      }

      
      /*async clickAuthorizebtn() {
  try {
    //const authorizeFrame = this.page
      //.frameLocator('//iframe[contains(@title, "Book Transfer Transaction Input")]')
      //.frameLocator('//iframe[contains(@title, "Authorize")]');

    //const authorizeBtn = authorizeFrame.locator('#BLK_BOOK_TXN__AUTHORIZATION');
    //const frame = await this.handleBookTransferFrame();
    const Bframe = await this.handleAuthorizeBookTransferFrame();

    //await authorizeBtn.waitFor({ state: 'visible', timeout: 5000 });
    //await authorizeBtn.click();
    await Bframe.click(this.Elements.Authorizebtn);
    console.log("Clicked on Authorize button");

  } catch (error) {
    console.error("Authorize frame not found", error);
    throw error;
  }
} */
async clickAuthorizebtn() {
    //const frame = await this.handleBookTransferFrame();
    const Bframe = await this.handleAuthorizeIssueDepositFrame();
    await Bframe.click(this.Elements.Authorizebuton);
    await Bframe.waitForTimeout(3000);
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