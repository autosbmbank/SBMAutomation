import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame;
let authframe;
let successframe;

export default class UserAuthPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
   newquerytab:"//li[@id='EnterQuery']",
   cusID:"//input[@id='BLK_USER__USER_ID']",
      executequerytab:"//li[@id='ExecuteQuery']//a",
    authTab:"//li[@id='Authorize']/a",
acceptbtn:"#BTN_OK",
    okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    successMsg: "//table//tr//td//span[contains(text(),'Record Successfully ')]"
    }
    async handleuserAFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "User Creation")]', { timeout: 10000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
 
    async clickNewquery(){
        await frame.click(this.Elements.newquerytab) 
    }
    async enterCustID(custID: string) {
        await frame.locator(this.Elements.cusID).fill(custID);
    }
     async executequery(){
        await frame.click(this.Elements.executequerytab) 
    }
    async authTabclick(){
        await frame.click(this.Elements.authTab) 
    }

     async AutherizeFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
             authframe= await frameElementHandle1.contentFrame();
             
            await authframe.click(this.Elements.acceptbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
    async verifySuccessMessage() {
        const frameElementHandle2 = await authframe.waitForSelector("//iframe[@id='ifr_AlertWin'][@title='Information Message']", { timeout: 50000 });
                 successframe= await frameElementHandle2.contentFrame();
          const message= successframe.locator(this.Elements.successMsg)
          console.log("success message is "+await message.textContent())
       expect(await message.textContent()).toContain('Record Successfully ');
        
        await successframe.click(this.Elements.okbtn)
    
           
        }
    }
    
