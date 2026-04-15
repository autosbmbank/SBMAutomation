import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let ARAframe
// let Bframe
export default class ARAccountPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
       
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        custnumber: "//input[@id='BLK_STTM_CUSTOMER__CUSTNO|input']",
        
    
    }
    async handleARAccountFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const ARAframe = await frameElementHandle.contentFrame();

    if (!ARAframe) {
        throw new Error('Book Transfer frame not loaded');
    }

    return ARAframe;
   }

    async clickEnterQuery() {
    const ARAframe = await this.handleARAccountFrame();

    await ARAframe.waitForSelector(this.Elements.EntrQuery,{state: 'visible',timeout: 20000});

    await ARAframe.click(this.Elements.EntrQuery);
   }
   async clickExecuteQuery() {
    const ARAframe = await this.handleARAccountFrame();

    await ARAframe.waitForSelector(this.Elements.ExectQuery,{state: 'visible',timeout: 20000});

    await ARAframe.click(this.Elements.ExectQuery);
    await ARAframe.waitForTimeout(3000);
   }
   
    async entercustomernumber(custrnumber: string) {
    const ARAframe = await this.handleARAccountFrame();
    await ARAframe.locator(this.Elements.custnumber).fill(custrnumber);
    await ARAframe.waitForTimeout(3000);

    }
   }
   
