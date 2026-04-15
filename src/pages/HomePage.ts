

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
        clickOnBranch: "//oj-menu-button[@id='Branch_Menu']//button",
        clickOnSelectBranch: "//oj-option[@id='select_branch']",
        moveToBranchFrame: "//iframe[@id='ifrSubScreen']",
        enterBranchId:"(//input[@name='1'])[1]",
        clickOnFetchBtn:"//span[contains(text(),'Fetch')]",
        selectBranchNum:"//tr[@class='oj-table-body-row']//td[1]",
        validateBranchNum:"//span[@id='ui-id-12']",
        msgframe: "//iframe[@id='ifr_AlertWin']",
        okbtn:"//span[@id='BTN_OK_oj1|text']",
        NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        enterbranchname:"(//input[@name='1'])[1]"
    }
    async enterFunctionName(funname: string) {
        await this.base.enterValue(this.Elements.functionID, funname);
        await this.base.waitAndClick(this.Elements.searchId);

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
    async changeBranchNumber(branchId: string){
        console.log("ChNGE branch number")
        await this.base.jsClick(this.Elements.clickOnBranch);
        await this.page.waitForTimeout(1000);
        await this.base.jsClick(this.Elements.clickOnSelectBranch);
        await this.page.waitForTimeout(1000);
        console.log("Branch name ")
       
        await this.handleBranchFrame(branchId);
        
    }
 
async handleBranchFrame(branchId) {
        // try {
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

   
