import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { get } from "node:http";
let frame,customerno,authframe,Jointframe,custno;
let popupframe;
let overrideframe;
let successframe;
export default class cifCreationPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
         
              newTab:"//li[@class='BTNIconNew']//a",
              btnP: "//div[@class='hrfDivTxt']//button",
              fullName: "//input[@id='BLK_CUSTOMER__FULLNAME']",
              shortName: "//label[normalize-space()='Short Name']",
              customerCategory: "//label[normalize-space()='Customer Category']",
              gender: "Male",
              dob: "//input[@title='Date of Birth']",
             nationality: "//input[@id='BLK_CUSTOMER__NLTY']",
            address: "//input[@id='BLK_CUSTOMER__ADDRLN1']",
            corpaddress:"//textarea[@title='Address 1']",
        country: "//input[@id='BLK_CUSTOMER__COUNTRY']",
        corpcountry:"//input[@id='BLK_CUSTCORP__CNTRY']",
        language: "//input[@id='BLK_CUSTPERSONAL__LANG']",
        corplanguage:"//input[@id='BLK_CUSTCORP__LANGUAGE']",
        additionalTab: "//a[@id='TAB_ADDITIONAL']",
        location: "//input[@id='BLK_CUSTOMER__LOC']",
        media: "//input[@id='BLK_CUSTOMER__MEDIA']",
      saveButton: "//li[@id='Save']//a[@class='TBitem']",
      okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    successMessage: "//span[@title='Record Successfully Saved']",
    acceptbtn:"#BTN_ACCEPT",
     exitButton:"//input[@id='BTN_EXIT_IMG']",
     newquerytab:"//li[@id='EnterQuery']",
   cusno:"//input[@id='BLK_CUSTOMER__CUSTNO']",
    executequerytab:"//li[@id='ExecuteQuery']",
    authTab:"//li[@id='Authorize']/a",
accepttbtn:"#BTN_OK",
   // okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    successMsg: "//span[@title='Record Successfully Authorized']"



    }

    
  async handleClFFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Maintenance")]', { timeout: 50000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
  async handleQuickCustFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Quick Customer Addition")]', { timeout: 100000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
    async clickNewTab(){
        await frame.locator(this.Elements.newTab).click()
    }
    async selectCustomerType(custType:string){
       await frame.getByText(custType,{exact:true}).first().click()
    }

    async clickButtonP() {
        
            
               await frame.click(this.Elements.btnP);     
       await frame.waitForTimeout(2000)
      customerno= await frame.locator("//input[@id='BLK_CUSTOMER__CUSTNO']").inputValue()
       await console.log("customer number:"+customerno)
       
    }
     async fetchCustno() {
        
            
               await frame.click(this.Elements.btnP);     
       await frame.waitForTimeout(2000)
      custno= await frame.locator("//input[@id='BLK_CUSTOMER__CUSTNO']").inputValue()
       await console.log("customer number:"+custno)
       
    }

     async enterFullName(name: string) {
        await frame.locator(this.Elements.fullName).fill(name);
    }


    async enterShortName(name: string) {
        const shortname=await this.base.generateAlphanumericValue(6)
        await frame.locator(this.Elements.shortName).fill(shortname);
    }

    async enterCustomerCategory(category: string) {
        
        await frame.locator(this.Elements.customerCategory).fill(category);
        
    }

    async selectgender(gender:string){
       // await frame.getByText(this.Elements.gender,{exact:true}).click();
       await frame.getByText(gender,{exact:true}).click()
    }

    async enterDOB(date: string) {
        await frame.locator(this.Elements.dob).fill(date);
    }

    async enterNationality(code: string) {
        await frame.locator(this.Elements.nationality).fill(code);
    }

    async enterAddress(address: string) {
        await frame.locator(this.Elements.address).fill(address);
    }

    async enterCountry(country: string) {
        await frame.locator(this.Elements.country).fill(country);
    }

    async enterLanguage(language: string) {
        await frame.locator(this.Elements.language).fill(language);
    }
    async checkstaff(){
        await frame.getByText("Staff").check()
    }
    async corporateaddress(address: string) {
        await frame.locator(this.Elements.corpaddress).fill(address);
    }
    async corporatecountry(country: string) {
        await frame.locator(this.Elements.corpcountry).fill(country);
    }
    async corporatelanguage(language: string) {
        await frame.locator(this.Elements.corplanguage).fill(language);
    }

        async clickAdditionalTab() {
        await frame.locator(this.Elements.additionalTab).click();
    }

    async enterLocation(location: string) {
        await frame.locator(this.Elements.location).fill(location);
    }

    async enterMedia(media: string) {
        await frame.locator(this.Elements.media).fill(media);

    }
    async clickLimitsTab(){
        await frame.locator("//li//a[normalize-space()='Limits']").click()
    }
    async clckLinkedEntityTab(){
        await frame.locator("//a[normalize-space()='Linked Entities']").click()
    }
     async addJointCust(relation:string,jointcustNo:string){
       const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
            const addframe= await frameElementHandle1.contentFrame();
            // await Jointframe.locator("//input[@id='BLK_CUST_ACCOUNT__ACCOUNT_CLASS']").fill(AcClassNo)
            // await Jointframe.getByText("Fetch").click()
            // const frameElementHandle2 = await Jointframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
            // const Acnoframe= await frameElementHandle2.contentFrame();
            // await Acnoframe.locator("//input[@id='BTN_OK']").click()
            // await this.page.waitForTimeout(2000);
            // await Jointframe.getByText("Joint",{exact:true}).first().click()
            // await Jointframe.locator("//input[@id='BLK_CUST_ACCOUNT__LOCATION']").fill(location)
            await addframe.locator("//span[@class='ICOadd']").click()
             await this.page.waitForTimeout(2000);
            await addframe.locator("//tbody/tr[@onclick='fnMulipleEntryRow_onClick(event)']/td[2]/div[1]/button[1]/span[1]").click()
             await this.page.waitForTimeout(2000);
             const frameElementHandle2 = await addframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
            const listframe= await frameElementHandle2.contentFrame();
             await listframe.locator("//input[@id='1']").fill(customerno)
            // await listframe.locator("//input[@id='1']").fill(jointcustNo)
             await listframe.locator("//button[normalize-space()='Fetch']").click()
             await listframe.getByText(customerno).click()
             //await listframe.getByText(jointcustNo).click()
             await addframe.locator("//label[@for='BLK_RELATIONSHIP_LINKAGE__SIGNATURE_APPLICABLE']//div[@class='DIVChkRadSel']").check()
             await addframe.locator("//label[@for='BLK_RELATIONSHIP_LINKAGE__INHERIT']//div[@class='DIVChkRadSel']").check()
             await addframe.locator("//body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/fieldset[1]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/button[1]").click()
             const frameElementHandle3 = await addframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 10000 });
            const valuesframe= await frameElementHandle3.contentFrame();
             await valuesframe.getByText(relation).click()
             await addframe.locator("//input[@id='BTN_OK']").click()
             await this.page.waitForTimeout(2000);
    }
  
    async clckAccDetailsTab(){
        await frame.locator("//a[normalize-space()='Account Details']").click()
    }

    async addjointAcc(AcClassNo:string,location:string,jointcustNo:string,jointholdertype:string){
       const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
            const Jointframe= await frameElementHandle1.contentFrame();
            await Jointframe.locator("//input[@id='BLK_CUST_ACCOUNT__ACCOUNT_CLASS']").fill(AcClassNo)
            await Jointframe.getByText("Fetch").click()
            const frameElementHandle2 = await Jointframe.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
            const Acnoframe= await frameElementHandle2.contentFrame();
            await Acnoframe.locator("//input[@id='BTN_OK']").click()
            await this.page.waitForTimeout(2000);
            await Jointframe.getByText("Joint",{exact:true}).first().click()
            await Jointframe.locator("//input[@id='BLK_CUST_ACCOUNT__LOCATION']").fill(location)
            await Jointframe.locator("//button[@id='cmdAddRow_BLK_JOINTHOLDERS']//span[@class='ICOadd']").click()
             await this.page.waitForTimeout(2000);
            await Jointframe.locator("//input[@id='BLK_JOINTHOLDERS__JNTHLDCDE']").fill(jointcustNo)
             await this.page.waitForTimeout(2000);
             await Jointframe.locator("#BLK_JOINTHOLDERS__JNTHLDTYP").selectOption(jointholdertype)
             await Jointframe.locator("//input[@id='BTN_OK']").click()
             await this.page.waitForTimeout(2000);
    }
  
    async enterLimtAmount(amount:string){
        const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
            const Liframe= await frameElementHandle1.contentFrame();
       await Liframe.locator("//input[@title='Overall Limit']").fill(amount)
       await this.page.waitForTimeout(2000);
       await Liframe.click("//input[@id='BTN_OK']")
    }
async selectCustomerStatus(status:string){
       await frame.getByText(status,{exact:true}).check()
    }
    async clickSaveButton() {
        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000)
        
}

 async uncheckTrackLimits(){
    if (await frame.getByText("Track Limits").isChecked()) {
       
    await frame.getByText("Track Limits").click();
    }
 }
  async checkTrackLimits(){
    if (!(await frame.getByText("Track Limits").isChecked())) {
       
    await frame.getByText("Track Limits").click();
    }
 }
async checkAutoAccCreation(){
   
      if (!(await frame.getByText("Auto Account Creation").isChecked())) {
       
    await frame.getByText("Auto Account Creation").click();
    }
    //await frame.getByText("Special Customer No Generation").click();
    
 }
 
   async remarksFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
             popupframe= await frameElementHandle1.contentFrame();
             
            await popupframe.click(this.Elements.okbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }

    async overrideFrame(){
   
      
       try {  
            // Wait for the iframe to appear in the DOM
            const frameElementHandle2 = await frame.waitForSelector("//iframe[contains(@title, 'Override Message')]", { timeout: 3000 });
             overrideframe= await frameElementHandle2.contentFrame();
           
            await overrideframe.click(this.Elements.acceptbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
       
           
        }
    }
        
   async verifySuccessMessage() {
    const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
             successframe= await frameElementHandle2.contentFrame();
             
      const message= successframe.locator(this.Elements.successMessage)
    await expect(message).toHaveText('Record Successfully Saved');
    await successframe.click(this.Elements.okbtn)

       
    }
    async exitFrame(){
        await this.page.waitForTimeout(2000);
        await frame.click(this.Elements.exitButton);
    }

    async clickJointTab(){
        await frame.locator("//li//a[normalize-space()='Joint']").click()
    }
    async enterJointCustomer(dob: string){
       const frameElementHandle = await frame.waitForSelector('//iframe[contains(@title, "Customer Information Maintenance")]', { timeout: 3000 });
            Jointframe = await frameElementHandle.contentFrame();
        await Jointframe.locator("//button[@title='Add Row'][@name='BTN_ADD_BLK_CUSTJOINT']").click()
        await this.page.waitForTimeout(2000);
        await Jointframe.locator(this.Elements.dob).fill(dob)
        await this.page.waitForTimeout(2000);
        await Jointframe.click("//input[@id='BTN_OK']")
    }

 async handleClFAFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Maintenance")]', { timeout: 10000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
  async handleLialinkFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer to liability link Maintenance")]', { timeout: 3000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
     async handleLiaMaintFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Liability Maintenance")]', { timeout: 3000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
    async clickNewquery(){
        await frame.click(this.Elements.newquerytab) 
    }
    async enterCustno(number: string) {
         await frame.locator(this.Elements.cusno).clear()
        await frame.locator(this.Elements.cusno).fill(customerno);
    }
     async enterfetchCustno() {
         await frame.locator(this.Elements.cusno).clear()
        await frame.locator(this.Elements.cusno).fill(custno);
    }
     async enterliaCustno() {
         await frame.locator("//input[@id='BLK_LIAB_CUST__CUSTOMER_NO']").clear()
        await frame.locator("//input[@id='BLK_LIAB_CUST__CUSTOMER_NO']").fill(customerno);
       //await frame.locator("//input[@id='BLK_LIAB_CUST__CUSTOMER_NO']").fill("10381220");
    }
     async enterliaMaintCustno(CustomerNo:string) {
         await frame.locator("//input[@id='BLK_LIABILITY__LIAB_NO']").clear()
          await frame.locator("//input[@id='BLK_LIABILITY__LIAB_NO']").fill(customerno);
       // await frame.locator("//input[@id='BLK_LIABILITY__LIAB_NO']").fill(CustomerNo);
       //await frame.locator("//input[@id='BLK_LIABILITY__LIAB_NO']").fill("10381220");
    }
     async validateLimitAmount(amount:string){
          const limitamount1= await frame.locator("//input[@id='BLK_LIABILITY__OVERALL_LIMITI']").inputValue()
          await console.log("limit amount fetched from application is:"+limitamount1)
          const limitamount=await limitamount1.replace(/,/g, '').replace('.00', '');
            await console.log("limit amount is:"+limitamount)
            await this.page.waitForTimeout(2000);
        expect(limitamount).toBe(amount);
    }
     async executequery(){
        await frame.click(this.Elements.executequerytab) 
        await frame.waitForTimeout(4000)
    }
    async authTabclick(){
        await frame.click(this.Elements.authTab) 
    }

     async AutherizeFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
             authframe= await frameElementHandle1.contentFrame();
             
            await authframe.click(this.Elements.accepttbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
    async verifySuccesssMessage() {
        const frameElementHandle2 = await authframe.waitForSelector("//iframe[contains(@title, 'Information Message')]", { timeout: 10000 });
                 successframe= await frameElementHandle2.contentFrame();
          const message= successframe.locator(this.Elements.successMsg)
        await expect(message).toHaveText('Record Successfully Authorized');
        await successframe.click(this.Elements.okbtn)
    
           
        }
    
   

    }



