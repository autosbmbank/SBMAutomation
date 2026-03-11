import { Page,expect} from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let assignframe;
let rolesframe;
let listframe;
let successframe;

export default class AssignRulesFunctionsNewUserPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }



  private Elements = {
    // Outer frame for Customer Maintenance
    outerFrame: '//iframe[contains(@title,"User Maintenance")]',
    newTabBtn: "//li[@id='New']//a",
    userId: "//input[@id='BLK_USR__USRID']",
    searchbutton:"//div[@id='TAB_MAIN__SEC1__SEC1_PRT1']//div[1]//button",
    fetchfirstrow:"//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]/div[1]//a",
    timeLevel: "//input[@id='BLK_USR__TIMELEVELI']",
    functionsTab: "//li[@id='CVS_FUNCTIONS']//a[normalize-space()='Functions']",
    functionadd:"//button[@name='cmdAddRow_BLK_USERSFUNCTIONS'][@id='cmdAddRow_BLK_USERSFUNCTIONS']",
    branchcode:"//input[@title='Branch Code']",
    function:"//input[@title='Function']",
    newchk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL1']//div[@class='DIVChkRadSel']",
    copychk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL2']//div[@class='DIVChkRadSel']",
    deletechk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL3']//div[@class='DIVChkRadSel']",
    closechk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL4']//div[@class='DIVChkRadSel']",
    unlockchk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL5']//div[@class='DIVChkRadSel']",
    reopenchk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL6']//div[@class='DIVChkRadSel']",
    authchk:"//label[@for='BLK_USERSFUNCTIONS__USERFUNCSCTRL8']//div[@class='DIVChkRadSel']",
    rolesTab: "//li[@id='CVS_ROLES']//a[normalize-space()='Roles']",
    addBtn: "//button[@id='cmdAddRow_BLK_USERROLE']",
    branch: "//input[@id='BLK_USERROLE__ROLEBRNCD']",
    role: "//input[@id='BLK_USERROLE__USRROLEID']",
    searchBtn: "//tbody/tr[@onclick='fnMulipleEntryRow_onClick(event)']/td[4]/div[1]/button[1]",
    dropdownFirstOption: "//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/a",
    okBtn: "//input[@id='BTN_OK'][@name='BTN_OK']",
    saveBtn: "//li[@id='Save']//a",
     successMessage: "//table//tr//td//span[contains(text(),'Record Successfully ')]", 
    acceptBtn: "//input[@id='BTN_OK'][@title='Ok']"
  };

  async handleassignFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector("//iframe[contains(@title,'User Maintenance')]", { timeout: 15000 });
             assignframe = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }



  async clickNewTab() {
   
    await assignframe.locator(this.Elements.newTabBtn).click();
  }

  async enterUserId(userId: string) {
    await assignframe.locator(this.Elements.userId).fill(userId);
    await assignframe.locator(this.Elements.searchbutton).click();
      try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await assignframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 20000 });
             rolesframe= await frameElementHandle1.contentFrame();
             await rolesframe.locator(this.Elements.fetchfirstrow).click();  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    
  }

  async enterTimeLevel(level: string) {
    await assignframe.locator(this.Elements.timeLevel).fill(level);
  }

  async clickFunctionsTab() {
    await assignframe.locator(this.Elements.functionsTab).click();
  }

  async clickFunctionAdd(){
    await rolesframe.locator(this.Elements.functionadd).click();
  }

  async enterBranchcode(branchcode:string){
    await rolesframe.locator(this.Elements.branchcode).clear();
    await rolesframe.locator(this.Elements.branchcode).fill(branchcode);
  }

  async enterFunction(func:string){
     await rolesframe.locator(this.Elements.function).clear();
    await rolesframe.locator(this.Elements.function).fill(func);
  }
  async clickNewchk(){
    await rolesframe.locator(this.Elements.newchk).check();
  }
  async clickCopychk(){
    await rolesframe.locator(this.Elements.copychk).check();
  }
  async clickDeletechk(){
    await rolesframe.locator(this.Elements.deletechk).check();
  }
  async clickClosechk(){
    await rolesframe.locator(this.Elements.closechk).check();
  }
  async clickUnlockchk(){
    await rolesframe.locator(this.Elements.unlockchk).check();
  }
  async clickReopenchk(){
    await rolesframe.locator(this.Elements.reopenchk).check();
  }
  async clickAuthchk(){
    await rolesframe.locator(this.Elements.authchk).check();
  }

  async clickRolesTab() {
    await assignframe.locator(this.Elements.rolesTab).click();
  }

  async RolesFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await assignframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 20000 });
             rolesframe= await frameElementHandle1.contentFrame();
             
             
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }


  async clickAdd() {
    
    await rolesframe.locator(this.Elements.addBtn).click();
  }

  async enterBranch(branch: string) {
    await rolesframe.locator(this.Elements.branch).fill(branch);
  }

  async enterRole(role: string) {
    await rolesframe.locator(this.Elements.role).fill(role);
  }

  async clickSearchAndSelectFirst() {
    await rolesframe.locator(this.Elements.searchBtn).click();
   
  }

   async ListFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await rolesframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 20000 });
             listframe= await frameElementHandle1.contentFrame();
             await listframe.locator(this.Elements.dropdownFirstOption).click();
             
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }



  async clickOkButton() {
    await rolesframe.locator(this.Elements.okBtn).click();
  }

  async clickSaveButton() {
    await assignframe.locator(this.Elements.saveBtn).click();
  }

  async verifySuccessMessage(message:string) {
       const frameElementHandle2 = await assignframe.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 15000 });
                successframe= await frameElementHandle2.contentFrame();
         const successmessage= successframe.locator(this.Elements.successMessage)
        console.log("success message is "+await successmessage.textContent())
            expect(await successmessage.textContent()).toContain(message);
       await successframe.click(this.Elements.acceptBtn)
   
          
       }
 
}
