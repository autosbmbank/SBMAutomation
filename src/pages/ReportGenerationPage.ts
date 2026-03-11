import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
export default class ReportGenerationPage {
  private base: ReusableMethods;
  constructor(private page: Page) {
  this.base = new ReusableMethods(page);
  }

 private Elements = {
     userNameRep: "//input[@name='j_username']",
     passwordRep: "//input[@name='j_password']",
     signinbutton: "//button[@id='btn_login']",
     sharedFolder: "//div[normalize-space()='Shared Folders']/parent::td/preceding-sibling::td//img[contains(@alt,'Click to')]",
}

    async enterUserNameReport(user: string) {
        const Elementhandle = await this.page.waitForSelector(this.Elements.userNameRep, {state: 'visible'});
        await Elementhandle.fill("");
        await Elementhandle.fill(user);
        await this.page.waitForTimeout(2000);    
    }

    async enterPasswordReport(Password: string) {
       const Elementhandle = await this.page.waitForSelector(this.Elements.passwordRep, {state: 'visible'});
       await Elementhandle.fill("");
       await Elementhandle.fill(Password);
       await this.page.waitForTimeout(2000);   
    }

    async signBtn() {
        try {
            await this.page.locator(this.Elements.signinbutton).click();
            await this.page.waitForTimeout(10000);
            } catch (message) {
        }
    }

    async ClickCatalog() {
          console.log("finding Catalog");
          await this.page.click('#navMenuItemCatalog', { force: true });
          await this.page.waitForTimeout(5000);
    }

    async Opendept(){
        // await this.page.locator("//div[normalize-space()='Shared Folders']/parent::td/preceding-sibling::td//img[contains(@alt,'expand')]").click();
        const folderRow = this.page.locator("//div[normalize-space(.)='Shared Folders']");
        await folderRow.waitFor({ state: 'visible', timeout: 55000 });
        const expandAnchor = folderRow.locator("xpath=ancestor::tr[1]//a[.//img[@alt='Click to expand']]");
        if (await expandAnchor.count() > 0 && await expandAnchor.isVisible()) {
        await expandAnchor.click();
    }
    }

    //New Account Report
    async OpenNewAC() {
        await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click();
        // await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/New%20Account']").click();
        await this.page.locator("//div[normalize-space(.)='New Account']").click();
        await this.page.waitForTimeout(55000);
     }

     //Closed Account Report
     async ClosedAC(){
        await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        // await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Closed%20Account']").click();
        await this.page.locator("(//div[normalize-space(.)='Closed Account'])[1]").click();
        await this.page.waitForTimeout(25000);
     }

     //Customer Segmentation Report
     async CustSegment(){
        await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        // await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Customer%20Segmentation']").click();
        await this.page.locator("//div[normalize-space(.)='Customer Segmentation']").click();
        await this.page.waitForTimeout(25000);        
     }

     //Reactivated Document Accounts Report
     async Reactivate(){
        await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        // await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Reactivated%20Dormant%20Account']").click();
        await this.page.locator("//div[normalize-space(.)='Reactivated Dormant Account']").click();
        await this.page.waitForTimeout(25000);        
     }

     //Vault Transaction Report
     async VaultTxn(){
        await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        // await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Vault%20Transaction']").click();
        await this.page.locator("//div[normalize-space(.)='Vault Transaction']").click();
        await this.page.waitForTimeout(25000);        
     }

    //  Cash Position Report
    async CashPosition(){
        // await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Cash%20Position']").click();
        await this.page.locator("//div[normalize-space(.)='Cash Position']").click();
        await this.page.waitForTimeout(25000);        
     }

    // 	UDF report
    async UDF(){
        // await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/UDF']").click();
        await this.page.locator("//div[normalize-space(.)='UDF']").click();
        await this.page.waitForTimeout(25000);        
     }

    // 	Large cash transaction report
    async CashTxn(){
        // await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Large%20Cash%20Transaction%20Report']").click();
        await this.page.locator("//div[normalize-space(.)='Large Cash Transaction Report']").click();
        await this.page.waitForTimeout(25000);        
     }

    // 	TD maturing next month
    async TD(){
        // await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/TD%20Maturing%20In%20Next%20Month']").click();
        await this.page.locator("//div[normalize-space(.)='TD Maturing In Next Month']").click();
        await this.page.waitForTimeout(25000);        
     }
     
    // 	Daily teller transaction report
    async TellerTxn(){
        // await this.page.locator("(//a//img[@alt='Click to expand'])[17]").click(); 
        await this.page.locator("//div[normalize-space()='Retail']/ancestor::tr[1]//img[@alt='Click to expand']").click({ timeout: 2000 }).catch(() => {});
        await this.page.locator("//td[@alt='/Retail/Daily%20Teller%20Transactions']//a").click();
        await this.page.locator("//div[normalize-space(.)='Daily Teller Transactions']").click();
        await this.page.waitForTimeout(25000);        
     }
     
    // 	Loan Disbursement report
    async LoanDisbursement(){
        await this.page.locator("//td[@alt='/Credit']//a").click(); 
        await this.page.locator("//td[@alt='/Credit/Disbursement']//a").click();
        await this.page.locator("//td[@alt='/Credit/Disbursement/Disbursement_Report_002']//a").click();
        await this.page.locator("//div[normalize-space(.)='Disbursement_Report_002']").click();
        await this.page.waitForTimeout(25000);        
     }

     async OpenReport() {
        await this.page.locator("//a[@id='view0']").click();
        await this.page.waitForTimeout(25000);
    }

        //Branch for New Account Report
    async EnterBranchforNewAccount(bno) {
        await this.page.locator("(//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Chrome'])[2]").click();
        const allCheckboxes = this.page.locator("//div[contains(@id,'paramsBranchC')]//input[@type='checkbox']");
        const count = await allCheckboxes.count();
        for (let i = 0; i < count; i++) {
             const box = allCheckboxes.nth(i);
             if (await box.isChecked()) {
                await box.click();
        }
    }
    const targetCheckbox = this.page.locator(`//label[normalize-space()='${bno}']`);
    await targetCheckbox.click();
    await this.page.keyboard.press("Escape");
    }

    //Branch for Closed Account Report
async EnterBranchforClosedAccount(bno: string) {
  await this.page.click("//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Other']");
  await this.page.click(`//li[contains(@id,'paramsBranchC_div_li')]//div[normalize-space()='${bno}']`);
  await this.page.keyboard.press("Escape");
}

//Branch for Customer Segmentation Report
async EnterBranchforCustSegment(bno: string) {
  await this.page.click("(//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Chrome'])[2]");
 const allCheckboxes = this.page.locator("//div[contains(@name,'_paramsBranchC')]//input[@type='checkbox']");
        const count = await allCheckboxes.count();
        for (let i = 0; i < count; i++) {
             const box = allCheckboxes.nth(i);
             if (await box.isChecked()) {
                await box.click();
        }
    }
     const targetCheckbox = this.page.locator(`//label[normalize-space()='${bno}']`);
    await targetCheckbox.click();
    await this.page.keyboard.press("Escape");
}

//Branch for Reactivated Document Account Report
async EnterBranchforReactivate(bno: string) {
  await this.page.click("//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Other']");
  await this.page.click(`//ul[contains(@id,'paramsBranchC_div_ul')]//div[normalize-space()='${bno}']`);
  await this.page.keyboard.press("Escape");
}

//Branch for Vault Transaction Report
async EnterBranchforVaultTxn(bno: string) {
    // await this.page.click(`//div[contains(@id,'paramsUserID_div')]//a[contains(@class,'mchoiceboxDropdownBox')]`);
    await this.page.click("//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Other']");
    // await this.page.waitForTimeout(2000);
    await this.page.click(`//ul//li//label//div[contains(text(),"${bno}")]`);
}
    
async EnterBranchforUDF(bno: string) {
  await this.page.click(`//div[contains(@id,"paramsBranch_div")]//a[contains(@class,"mchoiceboxDropdownBox")]`);
  await this.page.click(`//li[.//input[@type='hidden' and @value='${bno}']]`);
  await this.page.keyboard.press('Escape');
}

	// Branch for Large cash transaction report
async EnterBranchforCashTxn(bno: string) {
  await this.page.click("//div[contains(@id,'xdo:_paramsBranchC_div')]//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Chrome']");
  console.log("Selected Branch Number");
  await this.page.click(`//ul//li//label//input[@value="${bno}"]`);
  console.log("Selected Branch Number");
  await this.page.keyboard.press("Escape");
}
 
// Branch for TD maturing next month
async EnterBranchforTD(bno: string) {
  await this.page.click(`//div[contains(@id,"xdo:_paramsBranchC_div")]//a[contains(@class,"mchoiceboxDropdownBox mchoiceboxDropdownBox_Other")]`);
  await this.page.click(`//li[contains(normalize-space(.), "${bno}")]`);
  await this.page.keyboard.press("Escape");
}

// Branch for Daily teller transaction report
async EnterBranchforTellerTxn(bno: string) {
  await this.page.click(`//div[contains(@id,"paramsBranchC_div")]//a[contains(@class,"mchoiceboxDropdownBox")]`);
  await this.page.click(`//li[contains(normalize-space(.), "${bno}")]`);
  await this.page.keyboard.press("Escape");
}

//Currency for Vault Transaction Report
async EnterCurrencyforVaultTxn(curr: string){
    await this.page.click("//div[contains(@id,'paramsCCY_div')]//a[contains(@class,'mchoiceboxDropdownBox')]");
    await this.page.waitForTimeout(2000);
    await this.page.click(`//ul//li//label//div[contains(text(),"${curr}")]`);
    await this.page.keyboard.press("Escape");
}

//UserID for Cash Position Report
async EnterUserIDforCashPosition(UserID: string) {
await this.page.click(`//div[contains(@id,'paramsUserID_div')]//a[contains(@class,'mchoiceboxDropdownBox')]`);
await this.page.waitForTimeout(2000);
await this.page.click(`//ul//li//label//div[contains(text(),"${UserID}")]`);
}

//Currency for UDF report
async EnterCurrencyforUDF(curr: string){
    await this.page.click("(//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Other'])[2]");
    await this.page.selectOption("select[name='_paramsCCY']", curr);
    await this.page.keyboard.press("Escape");
}

//UserID for Large cash transaction report
async EnterUserIDforCashTxn(UserID: string) {
await this.page.click(`//div[contains(@id,"paramsUserID_div")]//span[contains(@class,"mchoiceboxDropdownArrow")]`);
await this.page.waitForTimeout(2000);
await this.page.click(`//ul//li//label//div[contains(text(),"${UserID}")]`);
}

//Currency for TD maturing next month
async EnterCurrencyforTD(curr: string){
    await this.page.click("(//a[@class='mchoiceboxDropdownBox mchoiceboxDropdownBox_Other'])[2]");
    await this.page.selectOption("select[name='_paramsCCY']", curr);
    await this.page.keyboard.press("Escape");
}

//UserID for Daily teller transaction report
async EnterUserIDforTellerTxn(UserID: string){
  await this.page.click(`//div[contains(@id,"xdo:_paramsUserID_div")]//a[contains(@class,"mchoiceboxDropdownBox mchoiceboxDropdownBox_Other")]`);
  await this.page.click(`//li[contains(normalize-space(.), "${UserID}")]`);
  await this.page.keyboard.press("Escape");
}

//Account Type for Large Cash Transaction
async EnterACTypeforCashTxn(ACType: string){
  await this.page.click(`//div[contains(@id,"xdo:_paramsAType_div")]//a[contains(@class,"mchoiceboxDropdownBox mchoiceboxDropdownBox_Chrome")]`);
  await this.page.click(`//li[contains(normalize-space(.), "${ACType}")]`);
  await this.page.keyboard.press("Escape");
}

//Amount From for Cash Transaction
async EnterAmtFromforCashTxn(AmtFrom: string){
    await this.page.locator("//input[@id='_paramsAmountF']").clear();
    await this.page.locator("//input[@id='_paramsAmountF']").fill(AmtFrom);
    await this.page.keyboard.press("Escape");
}

//Amount To for Cash Transaction
async EnterAmtToforCashTxn(AmtTo: string){
 await this.page.locator("//input[@id='_paramsAmountT']").clear();
 await this.page.locator("//input[@id='_paramsAmountT']").fill(AmtTo);
 await this.page.keyboard.press("Escape");
}

//Date for Cash Position
async EnterDateforCashPosition(Date: string){
 await this.page.locator("//input[@id='_paramsTDate']").clear();
 await this.page.locator("//input[@id='_paramsTDate']").fill(Date);
 await this.page.keyboard.press("Escape");
}

async EnterSdate(sdate) {
    await this.page.locator("//input[@id='_paramsSDate']").clear();
    await this.page.locator("//input[@id='_paramsSDate']").fill(sdate);
}

//Loan Disbursement Report
async EnterSdateforLD(sdate) {
    await this.page.locator("//input[@id='_paramsStartDate']").clear();
    await this.page.locator("//input[@id='_paramsStartDate']").fill(sdate);
}

    async EnterEdate(edate) {
          await this.page.locator("//input[@id='_paramsEDate']").clear();
          await this.page.locator("//input[@id='_paramsEDate']").fill(edate);
        //   console.log("Entered End Date");
        //    await this.page.locator("//button[@id='reportViewApply']").click();
        //    console.log("Clicked on Run Report");
        //    await this.page.waitForTimeout(400000);
    }

//Loan Disbursement Report
    async EnterEdateforLD(edate) {
          await this.page.locator("//input[@id='_paramsEndDate']").clear();
          await this.page.locator("//input[@id='_paramsEndDate']").fill(edate);
    }

//Teller Transaction Report
 async EnterTxnDateforTT(TxnDate) {
          await this.page.locator("//input[@id='_paramsTDate']").clear();
          await this.page.locator("//input[@id='_paramsTDate']").fill(TxnDate);
    }

//Transaction Date for UDF
     async EnterTxnDateforUDF(TxnDate) {
          await this.page.locator("//input[@id='_paramsDate_']").clear();
          await this.page.locator("//input[@id='_paramsDate_']").fill(TxnDate);
         // await this.page.locator("//button[@id='reportViewApply']").click();
         // await this.page.waitForTimeout(200000);
     }

async RunReport() {
        await this.page.locator("//button[@id='reportViewApply']").click();
        await this.page.waitForTimeout(400000);
    }

async addAmount(){
        await this.page.locator("//button[@id='reportViewApply']").click();
        await this.page.waitForTimeout(400000);

}
}