import { Page, expect } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let userframe;
let successframe;
let frame;
let frameloc;
let rolesframe;

export default class EditUserUsingScreenPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  
  private Elements = {
    // Outer Customer Maintenance frame
    outerFrame: '//iframe[contains(@title, "User Creation")]',
    //userid: "//input[@id='BLK_STVW_SSTB_USER__USER_ID']",
    userid:"//input[@name='USER_ID']",
    serach:"//li[@id='Search']//a",
   // checkbox:"//body[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[1]",
    checkbox:"//table[@id='TBL_QryRslts']//tr[1]/td[2]/div/a",
    close:"//ul//li[@id='Close']//a",
    unlock:"//ul//li[@id='Unlock']//a",
    password:"//input[@title='Password']",
    name:"//input[@title='Name']",
    saveBtn: "//li[@id='Save']//a",
    successMessage: "//table//tr//td//span[contains(text(),'Record Successfully ')]", 
    okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    searchbutton:"(//div[@class='DIVText'])[1]//button",
    fetchfirstrow:"//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]/div[1]//a"
     };

  async handleUserFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin']", { timeout: 20000 });
             userframe = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }

    async enterUserId(userId: string) {
      await userframe.locator(this.Elements.userid).clear();
    await userframe.locator(this.Elements.userid).fill(userId);
    await this.page.waitForTimeout(2000)
      await userframe.locator(this.Elements.searchbutton).click();
      try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await userframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 20000 });
             rolesframe= await frameElementHandle1.contentFrame();
             await rolesframe.locator(this.Elements.fetchfirstrow).click();  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
  }
  async clicksearch(){
  console.log("inside search")
  await this.handleUserFrame()
    await userframe.click(this.Elements.serach) 
    await this.page.waitForTimeout(2000)
  }



  async clickcheckbox(){    
    await userframe.dblclick(this.Elements.checkbox,{ timeout: 7000 })
    await this.page.waitForTimeout(2000)

}

async clickclose(){
  
        const toolbarFrame = await this.page.waitForSelector('(//iframe[contains(@title, "User Creation")])[2]',{ timeout: 20000 })
        const frame = await toolbarFrame.contentFrame();
        await frame.locator("//ul//li[@id='Close']//a").click();
       // await frame.locator("//input[@title='LDAP DN']").fill("34342342432424");
  }

 async okbtnclick() {
          
              const toolbarFrameElement = await this.page.waitForSelector('(//iframe[contains(@title, "User Creation")])[2]',{ timeout: 20000 })
          // const toolbarFrameElement = await toolbarFrameLocator.elementHandle();
          // if (!toolbarFrameElement) throw new Error('Toolbar iframe not found');
          const frame = await toolbarFrameElement.contentFrame();
          // if (!frame) throw new Error('Failed to get content frame');
          const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 20000 });
       
          successframe = await frameElementHandle2.contentFrame();
            await successframe.click(this.Elements.okbtn)  
                   
       
        }

async clickunlock(name:string){
  
        const toolbarFrame = await this.page.waitForSelector('(//iframe[contains(@title, "User Creation")])[2]',{ timeout: 50000 })
        const frame = await toolbarFrame.contentFrame();
        await frame.locator(this.Elements.unlock).click();
        //await frame.locator("//input[@title='Name']").fill("34");
        await frame.locator(this.Elements.name).clear();
       //  await frame.locator("//input[@title='Password']").clear()
         await this.page.waitForTimeout(1000);
        await frame.locator(this.Elements.name).fill(name);
       // await frame.locator("//input[@title='Password']").fill("Wel@123");
       
}



async enterpassword(password: string) {
 
     const toolbarFrame = await this.page.waitForSelector('(//iframe[contains(@title, "User Creation")])[2]',{ timeout: 50000 })
        const frame = await toolbarFrame.contentFrame();
        await frame.locator(this.Elements.unlock).click();
         await frame.locator(this.Elements.password).clear()
         await this.page.waitForTimeout(1000);
        await frame.locator(this.Elements.password).fill(password);
  }

   async clickSaveButton() {
     const toolbarFrame = await this.page.waitForSelector('(//iframe[contains(@title, "User Creation")])[2]',{ timeout: 20000 });
        const frame = await toolbarFrame.contentFrame();
          await frame.locator(this.Elements.saveBtn).click();
        }
      
        async verifySuccessMessage(message: string) {
          const toolbarFrameLocator = this.page.waitForSelector('(//iframe[contains(@title, "User Creation")])[2]',{ timeout: 20000 })
         const frame = await (await toolbarFrameLocator).contentFrame();
          // if (!toolbarFrameElement) throw new Error('Toolbar iframe not found');
          // const frame = await toolbarFrameElement.contentFrame();
         // if (!frame) throw new Error('Failed to get content frame');
          const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 20000 });
       
          successframe = await frameElementHandle2.contentFrame();
          const successmessage = successframe.locator(this.Elements.successMessage);
         console.log("success message is "+await successmessage.textContent())
            expect(await successmessage.textContent()).toContain(message);
          await successframe.click(this.Elements.okbtn);
        }

}