import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let MCframe
// let Bframe
export default class MaintainFacilityPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
       
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        limitrfn: "//input[@id='BLK_LM_DET__LIMIT_REF_NO|input']",
        liabilityno:'//input[@id="BLK_LM_DET__LIAB_NO|input"]',
        
        
    
    }
    async handleMCollateralFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const MCframe = await frameElementHandle.contentFrame();

    if (!MCframe) {
        throw new Error('Maintain Collateral Frame frame not loaded');
    }

    return MCframe;
   }

    async clickEnterQuery() {
    const MCframe = await this.handleMCollateralFrame();

    await MCframe.waitForSelector(this.Elements.EntrQuery,{state: 'visible',timeout: 20000});

    await MCframe.click(this.Elements.EntrQuery);
   }
   async clickExecuteQuery() {
    const MCframe = await this.handleMCollateralFrame();

    await MCframe.waitForSelector(this.Elements.ExectQuery,{state: 'visible',timeout: 20000});

    await MCframe.click(this.Elements.ExectQuery);
    await MCframe.waitForTimeout(3000);
   }
   
    async enterlimitrefn(limitrefn: string) {
    const MCframe = await this.handleMCollateralFrame();
    await MCframe.locator(this.Elements.limitrfn).fill(limitrefn);
    await MCframe.waitForTimeout(3000);

    }
    async enterliabilityno(enterliab: string) {
    const MCframe = await this.handleMCollateralFrame();
    await MCframe.locator(this.Elements.liabilityno).fill(enterliab);
    await MCframe.waitForTimeout(3000);
    
    console.log("Before entering Liability Number");

    }
    
    
   }
   
