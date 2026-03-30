import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import { exit } from "node:process";
import { TIMEOUT } from "node:dns";
let pagePromise,loginId,UserName,value1;
    let newPage;
export default class CreateTellerPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }
 
  private ele = {
    securitymanagement: "//span[normalize-space()='Security Management']",
    proceedBtn:'//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
    user:"//span[normalize-space()='User']",
    createuser:"//span[normalize-space()='Create User']",
    viewuser:"//span[normalize-space()='View User']",
    loginID: "//input[@id='userLoginId|input']",
    username: "//input[@id='userName|input']",
       branchcode:"(//input[@aria-label='Please select the value for Branch Code'])[2]",
        statusDropdown: "//span[@class='oj-text-field-end']//a[@role='presentation']",
    enable:"//span[normalize-space()='Enable']",
    startDate: "(//input[@aria-label='Please enter a valid Date'])[5]",
    addRowRole: "(//button[@aria-label='Add'])[1]",
    branch1:"(//input[@aria-label='Please select the value for Branch Code'])[3]",
    role1:"(//input[@aria-label='Please select the value for Role Code'])[1]",
    addRowApp: "(//button[@aria-label='Add'])[2]",
    appcode:"(//input[@aria-label='Please select the value for Application Name'])[1]",
    saveBtn: "//oj-button[@id='maint-save-btn']//button[@class='oj-button-button']//span",
    popupOkBtn: "//button[text()='Ok']",
    lovIframe: "//iframe[contains(@title,'LOV')]",
    languageInput: "//input[@aria-label='Please select the value for Language Code']",
     NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',

        authorizationStatus : "//select[@id='authStatus']",
   searchButton :"//oj-button[@id='summary-search-btn']//button[@class='oj-button-button']",
  firstRecord : "//span[@class='oj-fwk-icon-dots-vertical oj-fwk-icon summary-action-btn']",
   threeDotMenu : "(//*[@id='menuButton']/button/div/span[1]/span)[1]",
   authorizeOption : "//a[@id='authorize']",
   unlockOption: "//a[@id='unlock']",
   selectCheckbox: "//*[@class='oj-radiocheckbox-icon oj-component-icon']//input",
   approveButton: "//*[@id='bookmark29']/button",
   okButton : "//button[text()='Ok' or text()='OK']",
   addbranchUser:'//*[@id="containerDiv"]/div[1]/div/oj-button[2]/button',
   search:"//input[@id='searchHeaderMenuItem|input']",
   BranchUserLimit:"Teller-->Branch Maintenance-->Branch User Limits",
    maintab:'//*[@id="ui-id-100"]/span',
    screenBtn:"//span[normalize-space()='Branch User Limits']",
   Searchfirst:"(//div[@id='oj-listbox-result-label-390'])[1]",
   
   lovBranch: "(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[43]",
    lovUser: "(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[45]",
    tillDropdown: "//div[@id='oj-select-choice-custCat']//a[@role='presentation']",

    toggleCarryForward: "(//div[@role='switch'])[2]",
    toggleInterBranch: "(//div[@role='switch'])[3]",
    currency:"(//input[@aria-label='Please select the value for Currency Code'])[1]",
    MinBal: "(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[52]",
    MaxBal:"(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[53]",
    currency1:"(//input[@aria-label='Please select the value for Currency Code'])[2]",
    MaxTransamnt: "(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[56]",
    AuthTransamnt:"(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[57]"
  };
  async NextGenFun() {
    await this.base.jsClick('//*[@id="DBoardNextGenUI"]/span/span');
    console.log("Clicked on NextGen UI Dashboard");
    
       
    try {
        const frameElementHandle = await this.page.waitForSelector(this.ele.NextGenFrame, { timeout: 40000 });
       const nextgenframe = await frameElementHandle.contentFrame();
        console.log("Switched to NextGen UI Dashboard Frame");
        
        
        pagePromise = this.page.context().waitForEvent('page');
        
        await nextgenframe.getByText("Retail Operations").click();
        console.log("Clicked on Retail Operations");
        
    } catch (error) {
        console.log("Frame not found:", error.message);
        throw error; // Re-throw if you want to stop execution
    }
    
    // Wait for the new page to open
    try {
       newPage = await pagePromise;
     
     } catch {
       newPage = this.page;
     }
     await newPage.bringToFront().catch(() => {});
     await newPage.waitForFunction(() => document.body && document.body.innerText.length > 50);
    const proceed = newPage.locator(this.ele.proceedBtn).first();
     if (await proceed.count()) {
        try {
         await proceed.click({ timeout: 4000 });
       } catch {
         console.log("using JS click");
         await proceed.evaluate(el => el.click());
       }
     } else {
       console.log("Proceed not found");
     }
     await newPage.waitForLoadState('networkidle').catch(() => {});
     await newPage.waitForTimeout(600);
     
   const currentURL = newPage.url();
   await newPage.goto(currentURL, { waitUntil: 'networkidle' });
   await newPage.waitForTimeout(5000);

    
}
  async searchMenu() {
    
    await newPage.locator(this.ele.securitymanagement).click();
    await newPage.locator(this.ele.user).click();
    await newPage.locator(this.ele.createuser).click()
    
  }

  async enterLoginID(value: string) {
      value1=await this.base.generateRandomNumber(2); 
     console.log("generated value is "+value1)
     loginId=value+value1;
     console.log("user id is "+loginId)
    await newPage.locator(this.ele.loginID).clear()
       await newPage.locator(this.ele.loginID).fill(loginId);
  }

  async enterUsername(value: string) {
        console.log("generated value is "+value1)
     UserName=value+value1;
     console.log("user id is "+UserName)
    await newPage.locator(this.ele.username).clear();
    await newPage.locator(this.ele.username).fill(UserName);
  }

  async selectHomeBranch(branch: string) {
    //await newPage.click(this.ele.branchsearch)
    await newPage.locator(this.ele.branchcode).fill(branch);  
   // await newPage.click(this.ele.Fetch)
   // await newPage.click(this.ele.selectbranchcode)
  }

  async selectUserStatus() {
    await newPage.locator(this.ele.statusDropdown).click();
    await newPage.locator(this.ele.enable).click()
   
  }
  async selectsSuperVisor(){
 await newPage.locator("//oj-switch[@id='isSupervisor']//div[@class='oj-switch-track']").click()
  }

  async enterStartDate(date: string) {
    await newPage.locator(this.ele.startDate).clear()
    await newPage.locator(this.ele.startDate).fill(date);
  }

  async selectLanguage(lang: string) {
    await newPage.fill(this.ele.languageInput,lang);
  }

  async addUserRole1() {
    await newPage.locator(this.ele.addRowRole).click();
     
      }
  async addBranch1(branch: string){
    await newPage.locator(this.ele.branch1).clear();
     await newPage.locator(this.ele.branch1).fill(branch);
  }
  async addRole1(role: string){
    await newPage.locator(this.ele.role1).fill(role);
    await newPage.waitForTimeout(2000)
  }
  async deleterow1(){
     await newPage.locator("(//input[@type='checkbox'])[8]").check()
  await newPage.locator("(//button[@aria-label='Delete'])[1]").click();
   console.log("deleted")
  }
  async deleteApplicationrow1(){
     await newPage.locator("(//input[@type='checkbox'])[11]").check()
  await newPage.locator("(//button[@aria-label='Delete'])[2]").click();
   console.log("deleted")
  }
 async addApplication() {
 
    await newPage.locator(this.ele.addRowApp).click();
 }
  async addApplication1(app: string) {
    await newPage.locator(this.ele.addRowApp).click();
    await newPage.locator(this.ele.appcode).fill(app);
    await newPage.waitForTimeout(2000)
  }

  async saveUser() {
           await newPage.locator(this.ele.saveBtn).click();
        console.log("clicked on save Button")
       try {
        await newPage.locator("##alertDialogId_oj355", { timeout: 5000 });
        console.log("Alert dialog detected");
        await newPage.getByRole('button', { name: 'Confirm' }).click();
        console.log("Clicked on Confirm button");
        await newPage.waitForTimeout(5000)
        // Wait for dialog to close
       
        console.log("Save dialog closed");
        
    } catch (error) {
        console.log("Save dialog interaction failed:", error);
        throw new Error("Failed to confirm save action");
    }
    
  }

  async verifySuccessPopup() {
    try {
         // Wait for the alert dialog to appear
       await newPage.waitForSelector("#alertDialogId_oj11", { timeout: 15000 });
        console.log("Alert dialog detected");
        
       // Click on Proceed/OK button within the alert dialog
         await newPage.getByRole('button', { name: 'OK' }).click();
             
        console.log("Clicked on Proceed button in alert dialog");
           await newPage.waitForSelector("#alertDialogId_oj11", { state: 'hidden', timeout: 15000 });
        console.log("Alert dialog closed");
         await newPage.locator(this.ele.saveBtn).click();
          await newPage.locator("#alertDialogId_oj76", { timeout: 5000 });
        console.log("Alert dialog detected");
        await newPage.getByRole('button', { name: 'Confirm' }).click();
     } catch (error) {
        console.log("No alert dialog found or already dismissed");
     }
     await newPage.waitForTimeout(2000)
      await expect(await newPage.locator("//oj-button[@id='auditPopupLauncher']//button[@class='oj-button-button']")).toBeVisible()
     console.log("Validated successfully")
  }
  async auditTab(){
     await expect(await newPage.locator("//oj-button[@id='auditPopupLauncher']//button[@class='oj-button-button']")).toBeVisible()
    console.log("Validated successfully")
  }
async NewGenexit(){
await newPage.click("//*[@id='user-info-tile-source']/div/div[2]/a/span");
//await newPage.click("//div[@id='user-info-menu-logout']//span");
await newPage.getByText("Log Out").click()
}
  async handleLOV(value: string) {
    const frame = await this.page.frameLocator(this.ele.lovIframe);
    await frame.locator(`//td[text()='${value}']`).click();
    await frame.locator("//button[text()='OK']").click();
  }

   async searchAuthMenu() {
    await newPage.locator(this.ele.securitymanagement).click();
    await newPage.locator(this.ele.user).click();
    await newPage.locator(this.ele.viewuser).click()
    
  }
 async selectAuthorizationStatus(status: string,value:string) {
  await newPage.locator(".oj-fwk-icon.oj-inputsearch-search-button.oj-inputsearch-search-icon").click()
     await newPage.click("//div[@id='oj-select-choice-summary-search-form-container-fields-authStatus']//a[@role='presentation']")
    await newPage.getByText(status)
    await newPage.locator("//input[@id='summary-search-form-container-fields-userLoginId|input']").fill(loginId)
    //await newPage.locator("//input[@name='userId']").fill(value)
    
  }
   async selectVaultAuthorizationStatus(status: string,value:string) {
  await newPage.locator("//*[@id='containerDiv']/div[1]/div/oj-button[1]/button/div/span[1]/span").click()
     await newPage.click("//*[@id='summary-search-form-container-fields-authStatus']/div[2]/span/span")
    await newPage.getByText(status, { exact: true }).first().click();
  //  const locator = newPage.locator("//div[@role='presentation'][@class='oj-text-field-container oj-searchselect-main-field oj-text-field-has-end-slot']").first();

  //   await locator.fill(status);
  //     await locator.press('Enter');
    await newPage.waitForTimeout(2000);
   // await newPage.locator("//input[@id='summary-search-form-container-fields-userLoginId|input']").fill(loginId)
  //await newPage.locator("//input[@name='userId']").fill(value)
  await newPage.locator("//input[@name='userId']").fill(value)
  await newPage.waitForTimeout(2000);
   
  }

  async clickSearch() {
    await newPage.locator(this.ele.searchButton).click();
    await newPage.waitForTimeout(5000);
  }

  async selectRecord() {
    await newPage.locator(this.ele.firstRecord).click();
  }

  async clickThreeDotMenu() {
    await newPage.locator(this.ele.threeDotMenu).click();
  }

  async clickAuthorize() {
    await newPage.locator(this.ele.authorizeOption).click();
  }
  async clickUnlock(){
    await newPage.locator(this.ele.unlockOption).click();
  }

  async approveRecord() {
    await newPage.locator(this.ele.selectCheckbox).check();
    await newPage.locator(this.ele.approveButton).click();
  }

  async clickOk() {
     try {
  
        await newPage.locator("#alertDialogId_oj11", { timeout: 5000 });
        console.log("Alert dialog detected");
        await newPage.getByRole('button', { name: 'Confirm' }).click();
        console.log("Clicked on Proceed button");
        await newPage.waitForTimeout(5000)
        // Wait for dialog to close
       
        console.log("Approve dialog closed");
        
    } catch (error) {
        console.log("Save dialog interaction failed:", error);
        throw new Error("Failed to confirm save action");
    }
   
  }
  async searchNextGen(SearchName:string){
// await newPage.fill(this.ele.search,SearchName);
// await newPage.getByText(this.ele.BranchUserLimit).click()
await newPage.click(this.ele.maintab);
await newPage.locator(this.ele.screenBtn).click()
await newPage.waitForTimeout(2000)
  }
  async clickAddButton(){
   await newPage.waitForSelector(this.ele.addbranchUser,{ timeout: 70000 })
    await newPage.locator(this.ele.addbranchUser).click()
    console.log("clicked on Add Branch")
     await newPage.waitForTimeout(2000)
    
  }
    async selectBranchLov(branch: string) {
 
       await newPage.locator("(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[43]").clear();
     await newPage.locator("(//input[@class='oj-inputtext-input oj-text-field-input oj-component-initnode'])[43]").fill(branch);
      await newPage.waitForTimeout(2000)
    
  }

  async selectUserLov(user: string) {
    await newPage.locator(this.ele.lovUser).clear();
    await newPage.locator(this.ele.lovUser).fill(user);
    await newPage.waitForTimeout(2000)
  }

  async selectTillIndicator(type: string) {
    
    await newPage.locator(this.ele.tillDropdown).click();
    await newPage.getByRole('option', { name: type }).click()
  }

  async enableCarryForwardToggle() {
    const toggle = newPage.locator(this.ele.toggleCarryForward);
    if ((await toggle.getAttribute("aria-checked")) === "false") {
      await toggle.click();
    }
  }

  async enableInterBranchToggle() {
    const toggle = newPage.locator(this.ele.toggleInterBranch);
    if ((await toggle.getAttribute("aria-checked")) === "false") {
      await toggle.click();
    }
  }

  async addCurrencyHoldingPreference(curr: string, min: string, max: string) {
    
   await newPage.locator(this.ele.currency).fill(curr);
   await newPage.waitForTimeout(2000)
   await newPage.locator(this.ele.MinBal).clear();
    await newPage.locator(this.ele.MinBal).fill(min);
    await newPage.waitForTimeout(2000)
    await newPage.locator(this.ele.MaxBal).fill(max);
    await newPage.waitForTimeout(2000)
  }

  async addCurrencyLimitPreference(curr: string, maxTxn: string, auth: string) {
    
   await newPage.locator(this.ele.currency1).fill(curr);
   await newPage.waitForTimeout(2000)
   await newPage.locator(this.ele.MaxTransamnt).clear();
    await newPage.locator(this.ele.MaxTransamnt).fill(maxTxn);
    await newPage.waitForTimeout(2000)
    await newPage.locator(this.ele.AuthTransamnt).fill(auth);
     await newPage.waitForTimeout(2000)
  }

  async saveRecord() {
    await newPage.locator(this.ele.saveBtn).click();
  }

  // async handleSuccessMessage() {
  //   const msg = newPage.locator(this.ele.successMsg);
  //   await expect(msg).toBeVisible();
  //   await newPage.locator(this.ele.okBtn).click();
  // }
}



