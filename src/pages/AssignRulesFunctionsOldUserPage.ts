import { Page, expect } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let userframe;
let successframe;
let frame;
let frameloc;
let assignframe;
let rolesframe;
let listframe;
let functionframe;
let frame1;

export default class AssignRulesFunctionsOldUserPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  
  private Elements = {
    // Outer Customer Maintenance frame
    outerFrame: '//iframe[contains(@title, "User Maintenance ")]',
    //userid: "//input[@id='BLK_STVW_SSTB_USER__USER_ID']",
    userid:"//input[@name='USRID']",
    serach:"//li[@id='Search']//a",
   // checkbox:"//body[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[1]",
    checkbox:"//table[@id='TBL_QryRslts']//tr[1]/td[2]/div/a",
    unlock:"//ul//li[@id='Unlock']//a",
    rolesTab: "//li[@id='CVS_ROLES']//a[normalize-space()='Roles']",
   // addBtn: "//button[@id='cmdAddRow_BLK_USERROLE']",
   functionsTab: "//a[normalize-space()='Functions']",
    addBtn:"//button[@id='cmdAddRow_BLK_USERROLE']//span[@class='ICOadd']",
    funaddBtn:"//button[@id='cmdAddRow_BLK_USERSFUNCTIONS']//span[@class='ICOadd']",
    branch: "//input[@id='BLK_USERROLE__ROLEBRNCD']",
    funbranch:"//input[@id='BLK_USERSFUNCTIONS__USERFUNCBRNCD']",
    role: "//input[@id='BLK_USERROLE__USRROLEID']",
    funrole:"//input[@id='BLK_USERSFUNCTIONS__USERFUNCFUNCID']",
    newchk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL1']//div[@class='DIVChkRadSel']",
    copychk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL2']//div[@class='DIVChkRadSel']",
    deletechk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL3']//div[@class='DIVChkRadSel']",
    closechk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL4']//div[@class='DIVChkRadSel']",
    unlockchk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL5']//div[@class='DIVChkRadSel']",
    searchBtn: "//tbody/tr[@onclick='fnMulipleEntryRow_onClick(event)']/td[4]/div[1]/button[1]",
    dropdownFirstOption: "//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/a",
     searchbutton:"(//div[@class='DIVText'])[4]//button",
    fetchfirstrow:"//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]/div[1]//a",
    okBtn: "//table//tr//td//input[@id='BTN_OK'][@name='BTN_OK']",
    saveBtn: "//li[@id='Save']//a",
     successMessage: "//table//tr//td//span[contains(text(),'Record Successfully ')]", 
    acceptBtn: "//input[@id='BTN_OK'][@title='Ok']",
   exitBtn: "//input[@name='BTN_EXIT']",
   exitbutton:"//input[@id='BTN_EXIT']",
        selectBtn:"(//label[@class='LBLmenustd'])[6]"


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
  await this.handleUserFrame();
    await userframe.click(this.Elements.serach) 
  }

  async clickcheckbox(){    
    await userframe.dblclick(this.Elements.checkbox,{ timeout: 7000 })

}

async clickunlock(){
  
        const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
        const toolbarElementHandle = await toolbarLocator.elementHandle();
        const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
        if (!assignframe) throw new Error('assignframe not found');
        await assignframe.locator(this.Elements.unlock).click();
         
         await this.page.waitForTimeout(3000);
}


async clickRolesTab(){
   const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
    const toolbarElementHandle = await toolbarLocator.elementHandle();
    const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
    if (!assignframe) throw new Error('assignframe not found');
    await assignframe.locator(this.Elements.rolesTab).click();
   
                 
  
}
  async RolesFrame(branch:string,role:string){ {
    try {
      const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
    const toolbarElementHandle = await toolbarLocator.elementHandle();
    const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
       
            // Wait for the iframe to appear in the DOM
            if (!assignframe) throw new Error('assignframe not found');
            const frameElementHandle1 = await assignframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 10000 });
            let rolesframe =  await frameElementHandle1.contentFrame() ;
                  await rolesframe.locator(this.Elements.addBtn).click();
 
  await rolesframe.locator(this.Elements.branch).fill(branch);
   await rolesframe.locator(this.Elements.role).fill(role);
                   await rolesframe.locator(this.Elements.searchBtn).click();
  
   try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await rolesframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 10000 });
             listframe= await frameElementHandle1.contentFrame();
             await listframe.locator(this.Elements.dropdownFirstOption).click();
            
                   
        } catch (message) {
           // console.log("Frame not found");
        }
      
        
      }        
         catch (message) {
                   // console.log("Frame not found");
        }
             
        }
                  
                  
       
    }

    async clickFunctionsTab(){
   const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
    const toolbarElementHandle = await toolbarLocator.elementHandle();
    const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
    if (!assignframe) throw new Error('assignframe not found');
    await assignframe.locator(this.Elements.functionsTab).click();
   
                 
  
}

async FunctionsFrame(branch:string,Function:string){ {
    try {
      const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
    const toolbarElementHandle = await toolbarLocator.elementHandle();
    const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
       
            // Wait for the iframe to appear in the DOM
            if (!assignframe) throw new Error('assignframe not found');
            const frameElementHandle1 = await assignframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 10000 });
            let functionframe =  await frameElementHandle1.contentFrame() ;
                  await functionframe.locator(this.Elements.funaddBtn).click();
 
  await functionframe.locator(this.Elements.funbranch).fill(branch);
   await functionframe.locator(this.Elements.funrole).fill(Function);
    await functionframe.locator(this.Elements.newchk).check();  
    await functionframe.locator(this.Elements.copychk).check();
    await functionframe.locator(this.Elements.deletechk).check();
    await functionframe.locator(this.Elements.closechk).check();
    await functionframe.locator(this.Elements.unlockchk).check();
   
                  
      
        
      }        
         catch (message) {
                   // console.log("Frame not found");
        }
             
        }
      }

      async clickOkButton(){ 
    try {
      const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
    const toolbarElementHandle = await toolbarLocator.elementHandle();
    const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
       
            // Wait for the iframe to appear in the DOM
            if (!assignframe) throw new Error('assignframe not found');
            const frameElementHandle1 = await assignframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 10000 });
            let rolesframe =  await frameElementHandle1.contentFrame() ;
 await rolesframe.locator(this.Elements.okBtn).click();


  }  catch (message) {
                   // console.log("Frame not found");
        }
      }

  

  
  

   

  async clickSaveButton() {
     const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
        const toolbarElementHandle = await toolbarLocator.elementHandle();
        const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
        if (!assignframe) throw new Error('assignframe not found');
    await assignframe.locator(this.Elements.saveBtn).click();
  }

  async verifySuccessMessage(message:string) {
     const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
        const toolbarElementHandle = await toolbarLocator.elementHandle();
        const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
        if (!assignframe) throw new Error('assignframe not found');
       const frameElementHandle2 = await assignframe.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 10000 });
                successframe= await frameElementHandle2.contentFrame();
         const successmessage= successframe.locator(this.Elements.successMessage)
      console.log("success message is "+await successmessage.textContent())
       expect(await successmessage.textContent()).toContain(message);
       await successframe.click(this.Elements.acceptBtn)
   
          
       }
 

async Screensignoff(){
        
            // Wait for the iframe to appear in the DOM
             try {
      const toolbarLocator = this.page.locator('//iframe[contains(@title, "User Maintenance")]').nth(1);
    const toolbarElementHandle = await toolbarLocator.elementHandle();
    const assignframe = toolbarElementHandle ? await toolbarElementHandle.contentFrame() : null;
        await assignframe.click(this.Elements.exitBtn);
            // Wait for the iframe to appear in the DOM
            if (!assignframe) throw new Error('assignframe not found');
            const frameElementHandle2 = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin']", { timeout: 10000 });
            let functionframe =  await frameElementHandle2.contentFrame() ;
            await functionframe.click(this.Elements.exitbutton);


            
           // await frame.click(this.Elements.newTab)  
                 
                  await this.page.waitForTimeout(2000)
                 await this.page.click(this.Elements.selectBtn)
                 await this.page.getByText('Sign Off').click();
       // await this.page.click(this.Elements.signoffBtn)
         const frameElementHandle1 = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 50000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");

        } catch (message) {
           // console.log("Frame not found");
        }

    }
 async Signoff(){
        try {
            // Wait for the iframe to appear in the DOM
            const toolbarFrame1 = await this.page.locator('//iframe[contains(@title, "User Creation")]').nth(1);
            const toolbar1handle= await toolbarFrame1.elementHandle();
            const toolbarFrame = toolbar1handle ? await toolbar1handle.contentFrame() : null;
            if (!toolbarFrame) throw new Error('toolbarFrame not found');
           //
        const frame1 = toolbarFrame;
           // await frame.click(this.Elements.newTab)  
                  await frame1.click(this.Elements.exitBtn);
                  await this.page.waitForTimeout(2000)
                   const frameElementHandle4 = await this.page.waitForSelector("//iframe[@id='ifr_LaunchWin']", { timeout: 10000 });
            let functionframe =  await frameElementHandle4.contentFrame() ;
            await functionframe.click(this.Elements.exitbutton);
                 await this.page.click(this.Elements.selectBtn)
                 await this.page.getByText('Sign Off').click();
       // await this.page.click(this.Elements.signoffBtn)
         const frameElementHandle1 = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 50000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");

        } catch (message) {
           // console.log("Frame not found");
        }

    }

  }