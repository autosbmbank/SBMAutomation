import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame;
let authframe;
let successframe;

export default class EditUserUsingQueryPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
   newquerytab:"//li[@id='EnterQuery']",
   cusID:"//input[@id='BLK_USER__USER_ID']",
    executequerytab:"//li[@id='ExecuteQuery']//a",
    unlockTab:"//li[@id='Unlock']//a",
    disablebtn:"//label[normalize-space()='Disabled']",
     closeTab:"//li[@id='Close']//a",
    enablebtn:"//label[normalize-space()='Enabled']",
saveBtn: "//li[@id='Save']//a",
    successMessage: "//table//tr//td//span[contains(text(),'Record Successfully ')]", 
    okbtn:"//input[@id='BTN_OK'][@title='Ok']"
    }
    async handleuserAFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "User Creation")]', { timeout: 20000 });
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
        await frame.locator(this.Elements.cusID).clear();
        await frame.locator(this.Elements.cusID).fill(custID);
        await this.page.waitForTimeout(2000)
    }
     async executequery(){
        await frame.click(this.Elements.executequerytab) 
    }

    async unlockTab(){
        await frame.click(this.Elements.unlockTab)
    }

    async disablebtnclick(){
        await frame.locator(this.Elements.disablebtn).check();
    }

      async enablebtnclick(){
        await frame.locator(this.Elements.enablebtn).check();
    }

     async clickSaveButton() {
        await frame.locator(this.Elements.saveBtn).click();
      }
    
      async verifySuccessMessage(message:string) {
          const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
                   successframe= await frameElementHandle2.contentFrame();
            const successmessage= successframe.locator(this.Elements.successMessage)
            console.log("success message is "+await successmessage.textContent())
            expect(await successmessage.textContent()).toContain(message);
          
          await successframe.click(this.Elements.okbtn)
      
             
          }


  async closeUserTab(){
        await frame.click(this.Elements.closeTab)
    }

    
     async okbtnclick() {
           try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
             successframe= await frameElementHandle2.contentFrame();
             
            await successframe.click(this.Elements.okbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
       
           
        }
        }
}