import { expect, Page, Keyboard } from "@playwright/test";
 
import ReusableMethods from "../helper/wrapper/reusableMethods";
 
import { captureRejectionSymbol } from "node:events";
import { MissingPDFException } from "pdfjs-dist";
 
let STDCUSACframe ;
let ACCNUMGENframe;
let frameElementHandle;
let acnoframe;
 
export default class CreateAccountPage {
 
    private base: ReusableMethods;
 
    constructor(private page: Page) {
 
        this.base = new ReusableMethods(page);
 
    }
 
    private Elements = {
 
    Search      :   "//input[@id='fastpath' and @class='TXTstd']",
    Custnumber  :   "//input[@id='BLK_CUST_ACCOUNT__CUSTNO']",
    Currency    :   "//input[@id='BLK_CUST_ACCOUNT__CCY']",
    AccountClass:   "//input[@id='BLK_CUST_ACCOUNT__ACCLS']",
    FetchBtn    :   "//button[@id='BLK_CUST_ACCOUNT__BTN_ACCPKP']",
    Location    :   "//input[@id='BLK_CUST_ACCOUNT__LOC']",
    Media       :   "//input[@id='BLK_CUST_ACCOUNT__MEDIA']",
    MIStab        :   "//li[@id='MICACCTM']//a[@class='Abutton'][normalize-space()='|']",
     okbtn: "//input[@name='BTN_OK']"
 
    }
 
   /*async searchFunction(searchText:string) {
        await this.page.fill(this.Elements.Search,searchText);
        //await this.base.waitAndClick(this.Elements.Go);
        await this.page.keyboard.press('Enter');
        // await this.page.click(this.Elements.Go);
    }*/
 
   async EnterCustAcNum(Account:string)
   {
        await STDCUSACframe.fill(this.Elements.Custnumber, Account);
   }
 
   async EnterCurrency(Currency:string)
   {
        await STDCUSACframe.fill(this.Elements.Currency, Currency);
   }
 
   async EnterAccountClass(AccountClass:string)
   {
        await STDCUSACframe.fill(this.Elements.AccountClass, AccountClass);
   }
 
     async ClickFetchBtn()
   {
        await STDCUSACframe.click(this.Elements.FetchBtn);
        await STDCUSACframe.waitForTimeout(1000);
     
   }
 
   async ClickOkBtn() {
    try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await STDCUSACframe.waitForSelector("//iframe[contains(@title, 'Account Number Generation')]", { timeout: 3000 });
             acnoframe= await frameElementHandle1.contentFrame();
             
            await acnoframe.click(this.Elements.okbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
 
 
async EnterLocation(Location:string)
   {
         
    await STDCUSACframe.waitForSelector(this.Elements.Location, { state: 'visible', timeout: 3000 });
    await STDCUSACframe.fill(this.Elements.Location, Location);
}
 
async EnterMedia(Media:string)
    {
 
    //await STDCUSACframe.waitForSelector(this.Elements.Location, { state: 'visible', timeout: 3000 });
    await STDCUSACframe.fill(this.Elements.Media, Media);
}
 
async ClickMIStab()
{
    await STDCUSACframe.click(this.Elements.MIStab,{ timeout: 1000 });
    //await this.page.waitForTimeout(10000);
}
   
   
    async handleSTDCUSACFrame() {
        try {
            // Wait for the iframe to appear in the DOM
 
             const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Accounts Maintenance")]', { timeout: 1000 });
             STDCUSACframe = await frameElementHandle.contentFrame();          
             await STDCUSACframe.waitForTimeout(1000)   ;    
             await STDCUSACframe.click("//li[@class='BTNIconNew']//a");
              // await frame.click("this.page.Elements.new");  
             await STDCUSACframe.waitForTimeout(10000)   ;      
                 
        } catch (message) {
           // console.log("Frame not found");
        }
 
    }
   
   
    async handleMISFrame() {
        try {
            // Wait for the iframe to appear in the DOM
             const frameElementHandle2 = await this.page.waitForSelector('//iframe[contains(@title, "Management Information System")]', { timeout: 1000 });
             const MISframe = await frameElementHandle2.contentFrame();          
             await MISframe.waitForTimeout(10000)   ;    
             await MISframe.locator('//*[@id="BLK_MISDETAILS__POOLCD"]').fill('DELTPOOL');
             await MISframe.waitForTimeout(10000)   ;      
                 
        } catch (message) {
           // console.log("Frame not found");
        }
    }
   }