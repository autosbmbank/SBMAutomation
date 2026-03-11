

import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";


 let pagePromise;
    let newPage;

export default class HomePage {

    private base: ReusableMethods;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        functionID: "//input[@id='fastpath']",
        searchId: "//button[@id='btnGo']",
        clickOnBranch: "//li[@id='Branch_Menu']",
        clickOnSelectBranch: "//li[@id='select_branch']",
        moveToBranchFrame: "//iframe[@id='ifrSubScreen']",
        enterBranchId:"//input[@id='1']",
        clickOnFetchBtn:"//button[contains(text(),'Fetch')]",
        selectBranchNum:"//table[@id='TableLov']//tr//td//a[1]",
        validateBranchNum:"//li[@id='Branch_Menu']//label[1]",
        msgframe: "//iframe[@id='ifr_AlertWin']",
        okbtn:"//table//tr//td//input[@id='BTN_OK']",
        NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
    }

    async enterFunctionName(funname: string) {
        await this.base.enterValue(this.Elements.functionID, funname);
        await this.base.waitAndClick(this.Elements.searchId);

    }


    async changeBranchNumber(branchId: string){
        await this.base.ClickWait(this.Elements.clickOnBranch);
        await this.page.waitForTimeout(1000);
        await this.base.jsClick(this.Elements.clickOnSelectBranch);
        await this.handleBranchFrame(branchId);
    }
 
async handleBranchFrame(branchId) {
        try {
            const frameElementHandle = await this.page.waitForSelector(this.Elements.moveToBranchFrame, { timeout: 1000 });
             const branchframe = await frameElementHandle.contentFrame();
            await branchframe.fill(this.Elements.enterBranchId,branchId);
            await branchframe.click(this.Elements.clickOnFetchBtn);
            await branchframe.click(this.Elements.selectBranchNum);
            await this.page.waitForTimeout(1000);
            await this.moveToConfMsgFrame();
            await this.page.waitForTimeout(1000);
            let branchNumber = await this.page.textContent(this.Elements.validateBranchNum);
            branchNumber=branchNumber.replace(/\s+/g, ' ').trim();
            branchId="Branch :"+" "+ branchId;
            console.log("Selected Branch Number is: "+branchNumber);
            await expect(branchNumber).toBe(branchId);  
        } catch (message) {
           console.log("Frame not found");
        }
     }

     async moveToConfMsgFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector(this.Elements.msgframe, { timeout: 30000 });
            const frame = await frameElementHandle.contentFrame();
            await this.page.waitForTimeout(2000);
            await frame.click(this.Elements.okbtn);
        } catch (message) {
           // console.log("Frame not found");
        }
    }

   
//     async NextGenFun() {
//     await this.base.jsClick("//a[@id='DBoardNextGenUI']");
//     console.log("Clicked on NextGen UI Dashboard");
    
       
//     try {
//         const frameElementHandle = await this.page.waitForSelector(this.Elements.NextGenFrame, { timeout: 20000 });
//         const nextgenframe = await frameElementHandle.contentFrame();
//         console.log("Switched to NextGen UI Dashboard Frame");
        
//         // Initialize page promise before the action that opens new page
//         pagePromise = this.page.context().waitForEvent('page');
        
//         await nextgenframe.getByText("Retail Operations").click();
//         console.log("Clicked on Retail Operations");
        
//     } catch (error) {
//         console.log("Frame not found:", error.message);
//         throw error; // Re-throw if you want to stop execution
//     }
    
//     // Wait for the new page to open
//     newPage = await pagePromise;
//      await newPage.waitForLoadState('domcontentloaded');
   
//     //  try {
//     //     // Wait for the alert dialog to appear
//     //     await newPage.waitForSelector("#ssoAlreadyLoggedInUser", { timeout: 5000 });
//     //     console.log("Alert dialog detected");
//     // await newPage.click("span[id='okButton_oj3|text']")
//     //  await newPage.waitForSelector("#ssoAlreadyLoggedInUser", { state: 'hidden', timeout: 5000 });
//     //     console.log("Alert dialog closed");
//     //   } catch (error) {
//     //     console.log("No alert dialog found or already dismissed");
//     // }

   
//     await newPage.locator("//div[@class='branch-container']//span[@id='branch-name']").click({ timeout: 150000 });
//     console.log("Clicked on branch name in new page");
//     await newPage.fill("(//input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input'])[1]","100");
//     console.log("Entered Branch code")
//     await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
//     console.log("clicked on Fetch Button")
//    // await newPage.locator("(//table[@role='application']//tr[@class='oj-table-body-row']//td)[1]").click();
//     await newPage.getByText("100").click()
//     console.log("clicked on Branch Code")
//      try {
//         // Wait for the alert dialog to appear
//         await newPage.waitForSelector("#alertDialogId_oj11", { timeout: 5000 });
//         console.log("Alert dialog detected");
        
//         // Click on Proceed/OK button within the alert dialog
//         const proceedButton = newPage.locator("oj-button[on-click='[[confirmBtn]]']");
//         console.log("Button detected")
//         await proceedButton.click();
//         console.log("Clicked on Proceed button in alert dialog");
//          await this.page.locator("//span[normalize-space()='Security Management']").click();
//         // Wait for dialog to close
//         await newPage.waitForSelector("#alertDialogId_oj11", { state: 'hidden', timeout: 5000 });
//         console.log("Alert dialog closed");
//     } catch (error) {
//         console.log("No alert dialog found or already dismissed");
//     }

     
//     return newPage; // ✅ return new tab to continue Create Us
   
    
// }
    async NextGenBranchFun() {
       await this.page.waitForSelector("//div[@class='branch-container']//span[@id='branch-name']")
        await this.base.jsClick("//div[@class='branch-container']//span[@id='branch-name']")
        console.log("Clicked on NextGen UI Dashboard");

 
}}
