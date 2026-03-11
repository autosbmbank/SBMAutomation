import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame,authframe,successframe;


export default class UserMaintenanceAuthPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
   newquerytab:"//li[@id='EnterQuery']",
   cusID:"//input[@id='BLK_USR__USRID']",
    executequerytab:"//li[@id='ExecuteQuery']//a",
    authTab:"//li[@id='Authorize']/a",
acceptbtn:"#BTN_OK",
    okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    successMsg: "//table//tr//td//span[contains(text(),'Record Successfully ')]"
    }
    async handleuserAFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "User Maintenance")]', { timeout: 30000 });
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
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 15000 });
             authframe= await frameElementHandle1.contentFrame();
             
            await authframe.click(this.Elements.acceptbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
    async verifySuccessMessage(message: string) {
        const frameElementHandle2 = await authframe.waitForSelector("//iframe[@id='ifr_AlertWin'][@title='Information Message']", { timeout: 10000 });
                 successframe= await frameElementHandle2.contentFrame();
          const smessage= successframe.locator(this.Elements.successMsg)
         console.log("success message is "+await smessage.textContent())
            expect(await smessage.textContent()).toContain(message);
        await successframe.click(this.Elements.okbtn)
    
           
        }
        async closeMaintAc(message:string){
        await frame.click("//li[@id='Close']//a")   
        // }
         const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 20000 });
       
          successframe = await frameElementHandle2.contentFrame();
            await successframe.click(this.Elements.okbtn) 
             const frameElementHandle3 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 20000 });
                   
                      successframe = await frameElementHandle3.contentFrame();
                      const successmessage = successframe.locator("//table//tr//td//span[contains(text(),'Record Successfully ')]");
                     console.log("success message is "+await successmessage.textContent())
                        expect(await successmessage.textContent()).toContain(message);
                      await successframe.click(this.Elements.okbtn); 
    }

}
