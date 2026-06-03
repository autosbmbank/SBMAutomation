import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let MCframe
// let Bframe
export default class MaintainCollateralPage {

    private base: ReusableMethods;
  
   
    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
       
        EntrQuery: "//span[@id='EnterQuery_oj17|text']",
        ExectQuery: "//span[@id='ExecuteQuery_oj18|text']",  
        collateralcode: "//input[@id='BLK_COLLATERALS__COLLATERAL_CODE|input']",
        //liabilityno:'//*[@id="BLK_COLLATERALS__LIAB_NO"]',
        searchliab:'//*[@id="BLK_COLLATERALS__LIAB_NO"]/div[1]/span/oj-button/button/div/span[1]/span',
        enterliab:'//*[@id="1|input"]',
        fetchliab:'//*[@id="_oj4|text"]',
        clickliab:'//*[@id="TableLov:48_0"]'
        
    
    }
    async handleMCollateralFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const MCframe = await frameElementHandle.contentFrame();

    if (!MCframe) {
        throw new Error('Maintain Collateral Frame frame not loaded');
    }

    return MCframe;
   }
   async handleLaunchMCollateralFrame() {
    const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@id,"ifr_LaunchWin")]',{ timeout: 30000 });

    const LMCframe = await frameElementHandle.contentFrame();

    if (!LMCframe) {
        throw new Error('Maintain Collateral Frame frame not loaded');
    }

    return LMCframe;
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
   
    async entercollateralcode(collateralcode: string) {
    const MCframe = await this.handleMCollateralFrame();
    await MCframe.locator(this.Elements.collateralcode).fill(collateralcode);
    await MCframe.waitForTimeout(3000);

    }
    async enterliabilityno(enterliab: string) {
    const LMCframe = await this.handleLaunchMCollateralFrame();
 const handle = await LMCframe.waitForSelector(
            '//iframe[@id="ifrSubScreen"]', { timeout: 15000 }
        );
        const subFrame= await handle.contentFrame();
 
         await subFrame.locator('//input[@id="1|input"]').fill(enterliab)
         await subFrame.click("//span[contains(text(),'Fetch')]")
         await subFrame.locator("tbody.oj-table-body")
        .getByText(enterliab, { exact: true })
        .first()
        .click();





    // await LMCframe.locator(this.Elements.enterliab).fill(enterliab);
    // await LMCframe.waitForTimeout(3000);
    
    console.log("enteredLiability Number");

    }
    async clicksearchliab() {
    
    const MCframe = await this.handleMCollateralFrame();

    await MCframe.waitForSelector(this.Elements.searchliab,{state: 'visible',timeout: 20000});

    await MCframe.click(this.Elements.searchliab);
    await MCframe.waitForTimeout(3000);

    }
    async clicksfetchliab() {
    
    const MCframe = await this.handleMCollateralFrame();

    await MCframe.waitForSelector(this.Elements.fetchliab,{state: 'visible',timeout: 20000});

    await MCframe.click(this.Elements.fetchliab);
    await MCframe.waitForTimeout(3000);

    }
    
   }
   
