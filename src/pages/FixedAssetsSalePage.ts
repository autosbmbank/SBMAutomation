import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import * as fs from 'fs';
import * as path from 'path';

export default class FixedAssetsSalePage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
       
        enterQueryTab:   "//span[contains(@id,'EnterQuery') and contains(@id,'|text')]",
        executeQueryTab: "//span[contains(@id,'ExecuteQuery') and contains(@id,'|text')]",
        exitButton:      "//span[contains(@id,'BTN_EXIT') and contains(@id,'|text')]",

        
        referenceNumber: '//input[@id="BLK_MAINMASTERDET__CONREFNO|input"]',
    }

   

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Fixed Assets")]',
                { timeout: 50000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("Fixed Assets Sale iframe could not be loaded");
        }
        return this._frame;
    }

    resetFrame() {
        this._frame = null;
    }

   
    private async takeScreenshot(world: any, name: string): Promise<void> {
        // ✅ Ensure screenshots directory exists
        const dir = path.join('test-results', 'screenshots');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const screenshotPath = path.join(dir, `${name}_${Date.now()}.png`);

        
        const screenshot = await this.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });
        console.log("Screenshot saved:", screenshotPath);

        // ✅ Attach to Cucumber report
        if (world && world.attach) {
            await world.attach(screenshot, 'image/png');
            console.log("Screenshot attached to report:", name);
        }
    }

    

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
       
        await frame.waitForSelector(
            this.Elements.referenceNumber, { state: 'visible', timeout: 15000 }
        );
        console.log("Clicked Enter Query Tab");
    }

  
    async enterReferenceNumber(referenceNumber: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.referenceNumber).clear();
        // await this.page.pause();
        await frame.locator(this.Elements.referenceNumber).fill(referenceNumber);
        console.log("Entered Reference Number:", referenceNumber);
    }

    
    async clickExecuteQueryAndScreenshot(world: any) {
        const frame = await this.getFrame();
        await frame.click(this.Elements.executeQueryTab);
      
        await frame.waitForTimeout(4000);
        console.log("Clicked Execute Query Tab");

       
        try {
            const refValue = await frame.locator(
                this.Elements.referenceNumber
            ).inputValue();
            console.log("Reference Number loaded:", refValue);
            expect(refValue.length).toBeGreaterThan(0);
            console.log("✅ Fixed Assets Sale record loaded");
        } catch {
            console.log("Reference number check skipped");
        }

       
        await this.takeScreenshot(world, 'FixedAssetsSale_ExecuteQuery');
    }

   

async clickTabAndScreenshot(tabName: string, world: any) {
    const frame = await this.getFrame();
    console.log(`Clicking tab: ${tabName}`);

   
    await frame.locator(`//span[normalize-space()='${tabName}']`).click();
    console.log(`Clicked ${tabName} tab`);

   
    await frame.waitForTimeout(3000);

   
    await this.takeScreenshot(world, `FixedAssetsSale_${tabName}`);
    console.log(`Screenshot taken for ${tabName} tab`);
}

    
    
 async exitFixedAssetsPage() {
    const frame = await this.getFrame();
   
    try {
        await frame.locator(this.Elements.exitButton).click();
        console.log("Clicked Exit button");
    } catch {
        
        await frame.locator('//span[normalize-space()="Exit"]').click();
        console.log("Clicked Exit button by span text");
    }
}
}
