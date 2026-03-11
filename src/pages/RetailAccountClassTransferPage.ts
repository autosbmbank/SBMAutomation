import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import { exit } from "node:process";
import { timeout } from "../hooks/hooks";
import { verify } from "node:crypto";
let AccountClassFrame,informationFrame,ManagementFrame,ListFrame,AccountClassFrame1,AuthFrame,TDFrame,RefNumber,authFrame,StartDate,AmountBlkSumFrame,Msgframe,statusFrame,manualstatusFrame;


export default class RetailAccountClassTransferPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
    // Iframe
    outerFrame: '//iframe[contains(@title, "Account Class Transfer")]',
    ManualstatuschFrame:"//iframe[contains(@title, 'Manual Status Change Summary')]",
    TDOuterFrame: '//iframe[contains(@title, "TD Amount Block Input")]',
    AmountFrame:'//iframe[contains(@title, "Amount Block Input")]',
    AmountBlocksumFrame:'//iframe[contains(@title, "Amount Block Summary")]',
    AcStateFrame:'//iframe[contains(@title, "Account Statement Report")]',

    MsgFrame:'//iframe[contains(@title, "Message")]',
    informFrame: "//iframe[@id='ifr_AlertWin']",
    managementFrame: "//iframe[@id='ifrSubScreen']",
    statuschangeframe:"//iframe[contains(@title,'Manual Status Change Input')]",
    verifyFrame:"//iframe[contains(@title,'Verify')]",
    // Buttons
    newBtn: "//li[@id='New']//a",
    defaultBtn: "//button[@id='BLK_MAIN__BTN_POPULATE']",
    saveBtn: "//li[@id='Save']//a",
    newQuryBtn:"//li[@id='EnterQuery']//a",
    exeQueryBtn:"//li[@id='ExecuteQuery']//a",
    authBtn: "//li[@id='Authorize']//a",
    // Input fields
    account: "//input[@id='BLK_MAIN__CUST_AC_NO']",
    accountClass: "//input[@id='BLK_MAIN__ACCOUNT_CLASS']",
    Account: "//input[@id='BLK_AMOUNT_BLOCKS__ACCOUNT']",
    Amount: "//input[@id='BLK_AMOUNT_BLOCKS__AMOUNTI']",
    EffectiveDate: "//input[@id='BLK_AMOUNT_BLOCKS__EFFECTIVE_DATEI']",//YYYY-MM-DD
    ExpiryDate: "//input[@id='BLK_AMOUNT_BLOCKS__EXPIRY_DATEI']",
    FromDate:"//input[@id='BLK_ACTBS_ACCOUNT_REPORT__FROMDTI']",
    ToDate:"//input[@id='BLK_ACTBS_ACCOUNT_REPORT__TODTI']",
    accountno:"//input[@id='BLK_ACTBS_ACCOUNT_REPORT__ACCNO']",
    newstatus:"//input[@id='BLK_STTMS_AC_STAT_CHANGE__STATUS_NEW']",
    dormantchkbox:"//input[@type='checkbox'][@name='DORMANT']",
    AcNo:"//input[@id='BLK_STTMS_AC_STAT_CHANGE__CUST_AC_NO']",
  
    RefNo:"//input[@id='BLK_AMOUNT_BLOCKS__AMOUNT_BLOCK_NO']",
    AmountBLKNo:"//input[@id='BLK_CADAMBLK_SUMMARY__AMOUNT_BLOCK_NO']",
    Acceptbtn:"//input[@value='Accept']",
    keyid:"//span[@class='ICOlov']",
    checkbox:"(//div[@class='DIVChkRadSel'])[2]",
    messagestatementfee:"//textarea[@id='BLK_MESSAGE__MESSAGE']",

    // Success message
    errorMessage: "//table//tr//td//span[contains(text(),'Error Description')]",
    successMessage:"//table//tr//td//span[contains(text(),'Success')]",
    //successMessage:"//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]",
    okBtn: "//input[@id='BTN_OK']",
    exitBtn: "//input[@id='BTN_EXIT_IMG']",
    exitBtn1:"//input[@id='BTN_EXIT']",
    acceptBtn: "//input[@id='BTN_ACCEPT']",
    MISBtn: "//li[@id='CVS_MIS']",
    poolcode: "//input[@id='BLK_MIS__POOL_CODE']",  
    firstrow:"//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]//div//a",
    AuthDropdown:"//select[@id='BLK_MAIN__AUTHSTAT']",
    AuthDropdown1:"//select[@id='BLK_CADAMBLK_SUMMARY__AUTHSTAT']",
    statusAuthDropdown:"//select[@id='BLK_STTMS_AC_STAT_CHANGE__AUTHSTAT']",
    searchBtn:"//li[@id='Search']//a",
    dblclick:"//table[@id='TBL_QryRslts']//tr[1]/td[2]/div/a",
     AuthBtn:"//li[@id='Authorize']//a",
    authframe:"//iframe[contains(@title,'Authorize')]"
  };

  /** Handle Retail iframe */
  async handleRetailFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 10000 });
    AccountClassFrame = await frameHandle.contentFrame();
    console.log("Switched to Account Class Transfer Frame");
  }
  async handleManualStFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.ManualstatuschFrame, { timeout: 50000 });
    manualstatusFrame = await frameHandle.contentFrame();
    console.log("Switched to Account Class Transfer Frame");
  }
  async exitManualStFrame(){
     await manualstatusFrame.locator(this.Elements.exitBtn).click();
    console.log("Exited from Manual Status Change Frame");
      }
  async authrizefunction(){
    await statusFrame.locator(this.Elements.authBtn).click()
     await this.page.waitForTimeout(2000);
  }
  async successAuthFun(SuccessMsg:string){
     const frameElementHandle1 = await statusFrame.waitForSelector(this.Elements.managementFrame, { timeout: 50000 });
    ManagementFrame = await frameElementHandle1.contentFrame();
   await  ManagementFrame.locator(this.Elements.okBtn).click()
   await this.page.waitForTimeout(2000);
    const frameElementHandle = await ManagementFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();
     try{
       const frameElementHandle1 = await informationFrame.waitForSelector(this.Elements.acceptBtn, { timeout: 20000 });
    await informationFrame.locator(this.Elements.acceptBtn).click();
     }catch{
      console.log('Alert not found')
     }
    const emessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await emessage.textContent()));
    expect(await emessage.textContent()).toContain(SuccessMsg);

    // Close alert
    await informationFrame.locator(this.Elements.okBtn).click();
    console.log("Closed Information Frame");

  }
  
   async handleTDFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.TDOuterFrame, { timeout: 30000 });
    TDFrame = await frameHandle.contentFrame();
    console.log("Switched to TD Frame");
  }
async handleAmountFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.AmountFrame, { timeout: 30000 });
    TDFrame = await frameHandle.contentFrame();
    console.log("Switched to Amount Frame");
  }
  async handleAmountBlockSumFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.AmountBlocksumFrame, { timeout: 30000 });
    AmountBlkSumFrame = await frameHandle.contentFrame();
    console.log("Switched to Amount Block Summary Frame");
  }
  async handleAcStateFrame(){
     const frameHandle = await this.page.waitForSelector(this.Elements.AcStateFrame, { timeout: 30000 });
    TDFrame = await frameHandle.contentFrame();
    console.log("Switched to Account Statement Report Frame");
  }
  async handleMsgFrame(){
     const frameHandle = await this.page.waitForSelector(this.Elements.MsgFrame, { timeout: 30000 });
    Msgframe = await frameHandle.contentFrame();
    console.log("Switched to Message Frame");
  }
   async handleStatusFrame(){
     const frameHandle = await this.page.waitForSelector(this.Elements.statuschangeframe, { timeout: 70000 });
    statusFrame = await frameHandle.contentFrame();
    console.log("Switched to Status Change Frame");
  }
  async handleVerifyFrame(){
     const frameHandle = await this.page.waitForSelector(this.Elements.verifyFrame, { timeout: 30000 });
    statusFrame = await frameHandle.contentFrame();
    console.log("Switched to Verify Frame");
  }
  async enterNewQuery(){
    await statusFrame.locator(this.Elements.newQuryBtn).click()
  }
  async enterNewKeyId(account:string){
    await statusFrame.locator(this.Elements.keyid).click();
    const frameElementHandle1 = await statusFrame.waitForSelector(this.Elements.managementFrame, { timeout: 50000 });
    ManagementFrame = await frameElementHandle1.contentFrame();
    await ManagementFrame.getByText(account).click();
    await this.page.waitForTimeout(2000);
  }
  async enterExecuteQuery(){
    await statusFrame.locator(this.Elements.exeQueryBtn).click()
     await this.page.waitForTimeout(2000);
  }
  async cheboxchk(){
    await statusFrame.locator(this.Elements.checkbox).check()
     await this.page.waitForTimeout(2000);
  }
  async clickonAccept(){
    await statusFrame.locator(this.Elements.Acceptbtn).click()
  }
   async selectUnauth(status: string) {
    await manualstatusFrame.selectOption(this.Elements.statusAuthDropdown,status)
    await this.page.waitForTimeout(2000);
  }
  async acnofill(account:string){
    await manualstatusFrame.locator(this.Elements.AcNo).clear()
    await manualstatusFrame.locator(this.Elements.AcNo).fill(account);
    await this.page.waitForTimeout(2000);
  }
  async slectRecord(){
    await manualstatusFrame.locator(this.Elements.searchBtn).click()
    await this.page.waitForTimeout(2000);
    await manualstatusFrame.locator(this.Elements.dblclick).dblclick()
    await this.page.waitForTimeout(2000);
  }
 
  async viewStmnt(){
    await this.page.screenshot({path: `test-results/screenshots/full_${Date.now()}.png`,fullPage: true});
    await expect(await Msgframe.locator(this.Elements.messagestatementfee)).toBeVisible();
   
     const textArea = Msgframe.locator(this.Elements.messagestatementfee);
    await textArea.evaluate(el => el.scrollTop = el.scrollHeight);
     console.log('Scrolled to the bottom of AC Statement')
   // await Msgframe.locator(this.Elements.messagestatementfee).screenshot({path:`test-results/screenshots/message_${Date.now()}.png`,})
    console.log("screenshot of AC statement taken")
    await this.page.screenshot({path: `test-results/screenshots/full_${Date.now()}.png`,fullPage: true});
    console.log("Full Page Screen Shot Taken")
    await this.page.waitForTimeout(2000);
    await Msgframe.locator(this.Elements.exitBtn).click()
    console.log("Exited from Message Frame");
      }
      async exitAcStateFrame(){
    await TDFrame.locator(this.Elements.exitBtn).click();
    console.log("Exited from Account Statement Report Frame");
      }
      async statusNewButton() {
    await statusFrame.locator(this.Elements.newBtn).click();
  }
  async fillAcNo(acno: string) {
   await statusFrame.locator(this.Elements.AcNo).clear()
    await statusFrame.locator(this.Elements.AcNo).fill(acno);
  }
  async enterNewstatus() {
    await statusFrame.locator("(//span[@class='ICOlov'])[2]").click();
    const frameElementHandle1 = await statusFrame.waitForSelector(this.Elements.managementFrame, { timeout: 50000 });
    ManagementFrame = await frameElementHandle1.contentFrame();
    await ManagementFrame.getByText('NORMAL').click();
    await this.page.waitForTimeout(2000);
    //await statusFrame.locator(this.Elements.newstatus).fill(status);
  }
  async unchkDormant(){
    const dormantCheckbox = statusFrame.getByText("Dormant", { exact: true }).last();
if (await dormantCheckbox.isChecked()) {
    await dormantCheckbox.click();
    console.log("Dormant checkbox is unchecked");
} else {
    console.log("Dormant checkbox was already unchecked");
}}
    async clickonSaveBtn(){
    await statusFrame.locator(this.Elements.saveBtn).click();
  }
 async ValidatestatusChnge(SuccessMsg:string){
    
    const frameElementHandle = await statusFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();
     try{
       const frameElementHandle1 = await informationFrame.waitForSelector(this.Elements.acceptBtn, { timeout: 20000 });
    await informationFrame.locator(this.Elements.acceptBtn).click();
     }catch{
      console.log('Alert not found')
     }
    const emessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await emessage.textContent()));
    expect(await emessage.textContent()).toContain(SuccessMsg);

    // Close alert
    await informationFrame.locator(this.Elements.okBtn).click();
    console.log("Closed Information Frame");
  }
  async exitstatusFrame(){
     await statusFrame.locator(this.Elements.exitBtn).click();
    console.log("Exited from Status Change Frame");
      }

  /** Click on New button */
  async clickNewButton() {
    await AccountClassFrame.locator(this.Elements.newBtn).click();
  }
   async clickonNew() {
    await TDFrame.locator(this.Elements.newBtn).click();
  }
  async enterFromDate(fromDate: string) {
   // const Fromdate=await this.base.generatePastDate(2)//number of months to be subtracted
   await TDFrame.locator(this.Elements.FromDate).clear()
    await TDFrame.locator(this.Elements.FromDate).fill(fromDate);
   // await TDFrame.locator(this.Elements.FromDate).fill(Fromdate);
  }
  async enterToDate(toDate: string) {
   // const Todate=await this.base.currentDate()
   await TDFrame.locator(this.Elements.ToDate).clear()
  // console.log("Current Date is:"+Todate) 
     await TDFrame.locator(this.Elements.ToDate).fill(toDate);  
   // await TDFrame.locator(this.Elements.ToDate).fill(Todate);
  }
  async fillAccountno(accountno: string) {
   await TDFrame.locator(this.Elements.accountno).clear()
    await TDFrame.locator(this.Elements.accountno).fill(accountno);
  }
  async clickonokBtn(){
    await TDFrame.locator(this.Elements.okBtn).last().click();
  }
  async selectUnauthstatus(status: string) {
    await AmountBlkSumFrame.selectOption(this.Elements.AuthDropdown1,status)
  }
  
  async clickEnterQuery() {
    await TDFrame.locator(this.Elements.newQuryBtn).click();
  }
   async enterRefNo() {
   await AmountBlkSumFrame.locator(this.Elements.AmountBLKNo).clear()
    await AmountBlkSumFrame.locator(this.Elements.AmountBLKNo).fill(RefNumber);
  }
  async clickonSearch(){
    await AmountBlkSumFrame.click(this.Elements.searchBtn)
  }
  async selectRecord(){
    await AmountBlkSumFrame.locator(this.Elements.dblclick).dblclick();
  }
   async clickExecuteQuery() {
    await TDFrame.locator(this.Elements.exeQueryBtn).click();
  }
  async clickauthTab(){
    await TDFrame.locator(this.Elements.authBtn).click()
  }

  async clickAcceptBtn(){
    const FrameHandle1=await TDFrame.locator(this.Elements.authframe)
authFrame = await FrameHandle1.contentFrame();
   console.log("Switched to Auth Frame")
       await authFrame.locator(this.Elements.Acceptbtn).click()
  }
  async ValidateSuccessFun(SuccessMsg:string){
       const frameElementHandle = await authFrame.locator(this.Elements.informFrame,{timeout:5000});
    informationFrame = await frameElementHandle.contentFrame();
             const smessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await smessage.textContent()));
    expect(await smessage.textContent()).toContain(SuccessMsg);
    await informationFrame.locator(this.Elements.okBtn).click();
    }
  async ExtractRefNo() {
   RefNumber= await TDFrame.locator(this.Elements.RefNo).inputValue();
   console.log("Reference Number is"+ RefNumber)
  }
 

  /** Enter Account */
  async enterAccount(account: string) {
    await AccountClassFrame.locator(this.Elements.account).fill(account);
  }
 async enterAccountNo(account: string) {
   await TDFrame.locator(this.Elements.Account).clear()
    await TDFrame.locator(this.Elements.Account).fill(account);
  }
  async enterAmount(amount: string) {
   await TDFrame.locator(this.Elements.Amount).clear()
    await TDFrame.locator(this.Elements.Amount).fill(amount);
  }

  async enterExpiryDate(expiryDate: string) {
    const Expirydate=await this.base.generatefutureDate(5)
   await TDFrame.locator(this.Elements.ExpiryDate).clear()
    //await TDFrame.locator(this.Elements.ExpiryDate).fill(StartDate);
    await TDFrame.locator(this.Elements.ExpiryDate).fill(Expirydate);
  }
  async enterEffectiveDate(effectiveDate: string) {
    StartDate=await this.base.currentDate()
    await TDFrame.locator(this.Elements.EffectiveDate).clear()
   console.log("Current Date is:"+StartDate)
   // await TDFrame.locator(this.Elements.EffectiveDate).fill(effectiveDate);
  await TDFrame.locator(this.Elements.EffectiveDate).fill(StartDate)
  }

  /** Enter Account Class */
  async enterAccountClass(accountClass: string) {
    await AccountClassFrame.locator(this.Elements.accountClass).fill(accountClass);
  }

  /** Click Default button */
  async clickDefaultButton() {
    await AccountClassFrame.locator(this.Elements.defaultBtn).click();
    console.log("Clicked on Default button");
    const frameElementHandle = await AccountClassFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
               informationFrame= await frameElementHandle.contentFrame();
               console.log("Switched to Information Frame");
             await informationFrame.locator(this.Elements.okBtn).click();
                console.log("Clicked on OK button in Information Frame");
  }

  /** Click Save button */
  async clickSaveButton() {
    await AccountClassFrame.locator(this.Elements.saveBtn).click();
  }
 async clicksonSave() {
    await TDFrame.locator(this.Elements.saveBtn).click();
  }
  async ValidateFunction(SuccessMsg:string){
    
    const frameElementHandle = await TDFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();
     try{
       const frameElementHandle1 = await informationFrame.waitForSelector(this.Elements.acceptBtn, { timeout: 20000 });
    await informationFrame.locator(this.Elements.acceptBtn).click();
     }catch{
      console.log('Alert not found')
     }
    const emessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await emessage.textContent()));
    expect(await emessage.textContent()).toContain(SuccessMsg);

    // Close alert
    await informationFrame.locator(this.Elements.okBtn).click();
    console.log("Closed Information Frame");
  }
  async overrideFrame(){
     try{
    const frameElementHandle1 = await TDFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle1.contentFrame();
    await informationFrame.click(this.Elements.acceptBtn);
     }catch{
      console.log('Alert not found')
     }
  }
  
  /** Validate Success Message and close alert */
  async validateErrorMessage() {
    // Wait for alert iframe
    const frameElementHandle = await AccountClassFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();

    const emessage = informationFrame.locator(this.Elements.errorMessage);
    console.log("Success message: " + (await emessage.textContent()));
    expect(await emessage.textContent()).toContain("Error");

    // Close alert
    await informationFrame.locator(this.Elements.okBtn).click();
    console.log("Closed error message");
  }

  async validateSuccessMessage() {
    // Wait for alert iframe
    try{
    const frameElementHandle = await AccountClassFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();
    await informationFrame.click(this.Elements.acceptBtn);
     informationFrame = await frameElementHandle.contentFrame();
    const smessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await smessage.textContent()));
          expect(await smessage.textContent()).toContain("Success");
          const messageText=await smessage.textContent();
 
       await informationFrame.locator(this.Elements.okBtn).click();
    }catch{
      console.log("Error Message Displayed")
    }
    // await informationFrame.locator(this.Elements.okBtn).click();
    
  }
async clickExitButton() {
    await AccountClassFrame.locator(this.Elements.exitBtn).click();
    console.log("Clicked on Exit button");
  }
  async clickExitBtn() {
    await TDFrame.locator(this.Elements.exitBtn).click();
    console.log("Clicked on Exit button");
    await this.page.waitForTimeout(2000);
  }
  async exitAmntBlkFrame(){
     await AmountBlkSumFrame.locator(this.Elements.exitBtn1).click();
    console.log("Clicked on Exit button");
    await this.page.waitForTimeout(2000);
  }

 async clickMISTab() {
    await AccountClassFrame.locator(this.Elements.MISBtn).click();
    console.log("Clicked on MIS Tab");
 const frameElementHandle1 = await AccountClassFrame.waitForSelector(this.Elements.managementFrame, { timeout: 50000 });
    ManagementFrame = await frameElementHandle1.contentFrame();
    await ManagementFrame.locator(this.Elements.poolcode).fill("DELTPOOL");
    await ManagementFrame.click("//div[@id='TAB_MAIN__SEC_1']//div[5]//button[1]")
     const frameElementHandle2 = await ManagementFrame.locator(this.Elements.managementFrame)
    ListFrame = await frameElementHandle2.contentFrame();
    console.log("Listframe visible");
   await ListFrame.locator(this.Elements.firstrow).click();
    await ManagementFrame.locator(this.Elements.okBtn).click();
      }

 async selectAuthorizationStatus(status: string) {
    await AccountClassFrame.selectOption(this.Elements.AuthDropdown, status);
  }
  async Searchfunction(){
    await AccountClassFrame.click(this.Elements.searchBtn)
  }
async doubleclicksrecord() {
    await AccountClassFrame.locator(this.Elements.dblclick).dblclick();
  }
async clickAuthorizeButton() {
    const FrameHandle=await this.page.locator(this.Elements.outerFrame).nth(1)
    AccountClassFrame1 = await FrameHandle.contentFrame();
    console.log("In Authorize Button")
    
        await AccountClassFrame1.locator(this.Elements.AuthBtn).click();
    console.log("Clicked on Authorize Button")
   const FrameHandle1=await AccountClassFrame1.locator(this.Elements.authframe)
AuthFrame = await FrameHandle1.contentFrame();
   console.log("Switched to Auth Frame")
   await AuthFrame.locator(this.Elements.okBtn).click();
   console.log("Clicked on Authorize in Auth Frame")
    }

    async AuthSuccessFun(){
       const frameElementHandle = await AuthFrame.locator(this.Elements.informFrame,{timeout:5000});
    informationFrame = await frameElementHandle.contentFrame();
             const smessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await smessage.textContent()));
    expect(await smessage.textContent()).toContain("Success");
    await informationFrame.locator(this.Elements.okBtn).click();
    }
  }
  
