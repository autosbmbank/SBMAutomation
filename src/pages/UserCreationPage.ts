import { Page, expect } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame,authframe,userframe,successframe,custId,custName,assignframe,frame1;


export default class UserCreationPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  
  private Elements = {
    // Outer Customer Maintenance frame
    outerFrame: '//iframe[contains(@title, "User Creation")]',

    // New Tab button inside Customer Maintenance frame
    newTabBtn: "//li[@id='New']//a",
    OldUserid:"//input[@id='BLK_SUMMARY__USRID']",
    UserId: "//input[@id='BLK_USR__USRID']",
    userId: "//input[@id='BLK_USER__USER_ID']",
    name: "//input[@id='BLK_USER__USER_NAME']",
    homeEntity: "//input[@id='BLK_USER__HOME_ENTITY']",
    password: "//input[@id='BLK_USER__USER_PASSWORD']",
    saveBtn: "//li[@id='Save']//a",
    successMessage: "//table//tr//td//span[contains(text(),'Record Successfully ')]", 
    okbtn:"//input[@id='BTN_OK'][@title='Ok']",
     newquerytab:"//li[@id='EnterQuery']",
   cusID:"//input[@id='BLK_USER__USER_ID']",
    executequerytab:"//li[@id='ExecuteQuery']//a",
    authTab:"//li[@id='Authorize']/a",
    acceptbtn:"#BTN_OK"
       
  };

  async handleUserFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 20000 });
             userframe = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }

  
  async clickNewTab() {
    await this.page.waitForTimeout(2000)
    await userframe.locator(this.Elements.newTabBtn).click();
  }

  async enterUserId(userId: string) {
     const value=await this.base.generateAlphanumericValue(4); 
     console.log("generated value is "+value)
     custId=userId+value;
     console.log("user id is "+custId)
    await userframe.locator(this.Elements.userId).clear()
    await userframe.locator(this.Elements.userId).fill(custId);
  }

   

  async enterName(name: string) {
    const value=await this.base.generateRandomString(4); 
     console.log("generated value is "+value)
     custName=name+value;
     console.log("user name is "+custName)
    await userframe.locator(this.Elements.name).clear()
    await userframe.locator(this.Elements.name).fill(custName);
  }

  async enterHomeEntity(entity: string) {
    await userframe.locator(this.Elements.homeEntity).fill(entity);
  }

  async enterPassword(password: string) {
    await userframe.locator(this.Elements.password).fill(password);
  }

 

  async clickSaveButton() {
    await userframe.locator(this.Elements.saveBtn).click();
  }

  async verifySuccessMessage(message:string) {
      const frameElementHandle2 = await userframe.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 50000 });
               successframe= await frameElementHandle2.contentFrame();
        const successmessage= successframe.locator(this.Elements.successMessage)
        console.log("success message is "+await successmessage.textContent())
       expect(await successmessage.textContent()).toContain(message);
      await successframe.click(this.Elements.okbtn)
  
         

     
}

 async handleuserAFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 20000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
 
    async clickNewquery(){
        await frame.click(this.Elements.newquerytab) 
    }

    async enteruserID(custID: string) {
        await frame.locator(this.Elements.cusID).fill(custID);
    }
    async enterCustID() {
        await frame.locator(this.Elements.cusID).fill(custId);
    }

     async enterMaintCustID() {
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle3 = await this.page.waitForSelector("//iframe[contains(@title,'User Maintenance')]", { timeout: 15000 });
             assignframe = await frameElementHandle3.contentFrame();
             await this.page.waitForTimeout(2000)
             console.log("MaintenanceID is "+custId)
           // await frame.click(this.Elements.newTab)  
           await assignframe.locator(this.Elements.UserId).clear()
           console.log("TestMamatha")
                 await assignframe.locator(this.Elements.UserId).fill(custId);   
        } catch (message) {
           // console.log("Frame not found");
        }
       
    }

    async enterOldCustID(){
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle4 = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin']", { timeout: 20000 });
             frame1 = await frameElementHandle4.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   await frame1.locator(this.Elements.OldUserid).clear()
                  await frame1.locator(this.Elements.OldUserid).fill(custId);
        } catch (message) {
           // console.log("Frame not found");
        }
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
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 10000 });
             authframe= await frameElementHandle1.contentFrame();
             
            await authframe.click(this.Elements.acceptbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
}

 async verifyAuthSuccessMessage() {
        const frameElementHandle2 = await authframe.waitForSelector("//iframe[@id='ifr_AlertWin'][@title='Information Message']", { timeout: 50000 });
                 successframe= await frameElementHandle2.contentFrame();
          const message= successframe.locator(this.Elements.successMessage)
          console.log("success message is "+await message.textContent())
       expect(await message.textContent()).toContain('Record Successfully ');
        
        await successframe.click(this.Elements.okbtn)
    
           
        }
}
