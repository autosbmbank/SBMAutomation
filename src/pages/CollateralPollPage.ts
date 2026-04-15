import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let poolRefNo: string;

export default class CollateralPoolPage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
        // Navigation — |text suffix pattern (same as TopUp/KYC)
        newTab:          "//span[contains(@id,'New') and contains(@id,'|text')]",
        enterQueryTab:   "//span[contains(@id,'EnterQuery') and contains(@id,'|text')]",
        executeQueryTab: "//span[contains(@id,'ExecuteQuery') and contains(@id,'|text')]",
        authorizeTab:    "//span[contains(@id,'Authorize') and contains(@id,'|text')]",
        saveButton:      "//span[contains(@id,'Save') and contains(@id,'|text')]",
        exitButton:      "//span[contains(@id,'BTN_EXIT') and contains(@id,'|text')]",
        okBtn:           "//span[contains(@id,'BTN_OK') and contains(@id,'|text')]",
        acceptBtn:       "//*[contains(@id,'BTN_ACCEPT') and contains(@id,'|text')]",

        // Main form fields — |input suffix pattern (same as TopUp/KYC)
        liabilityNo:     '//input[@id="1|input"]',
        poolCode:        '//input[@id="BLK_COLLATERALS_POOL__POOL_CODE|input"]',
        poolCurrency:    '//input[@id="BLK_COLLATERALS_POOL__POOL_CCY|input"]',

        // Collateral Pool Linkage section
        collateralAddRow: '//*[@id="cmdAddRow_BLK_POOL_COLLATERALS_LINKAGE"]/button',
        collateralCode:  '//input[@id="1|input"]',

        // Success messages
        successMessage:  "//*[@id='ERRTBL:48_0']",
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Collateral Pool")]',
                { timeout: 50000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("Collateral Pool iframe could not be loaded");
        }
        return this._frame;
    }

    resetFrame() {
        this._frame = null;
    }

    // ─── Nested Frame Helpers — same pattern as TopUpTermDepositPage ──────────

    private async getSubScreenFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        const handle = await frame.waitForSelector(
            '//iframe[@id="ifrSubScreen"]', { timeout: 15000 }
        );
        return await handle.contentFrame();
    }

    private async getAlertFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        const handle = await frame.waitForSelector(
            'iframe#ifr_AlertWin', { timeout: 15000 }
        );
        return await handle.contentFrame();
    }

    // ─── Navigation ───────────────────────────────────────────────────────────

    async clickNewTab() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.newTab);
        // ✅ NEEDED — wait for form to load
       
    }

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
        // ✅ NEEDED — wait for query fields to be ready
        await frame.waitForSelector(this.Elements.liabilityNo, { state: 'visible', timeout: 15000 });
    }

    async clickExecuteQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.executeQueryTab);
        await frame.waitForTimeout(4000);
    }

    async clickAuthorizeTab() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.authorizeTab);
        await frame.waitForTimeout(2000);
    }

    // ─── Main Form Fields ─────────────────────────────────────────────────────

    async searchLiabilityNo(liabilityNo: string) {
        const frame = await this.getFrame();
        await frame.locator('//*[@id="BLK_COLLATERALS_POOL__LIAB_NO"]/div[1]/span/oj-button/button/div/span[1]/span').click()
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.liabilityNo).clear();
        await subFrame.locator(this.Elements.liabilityNo).fill(liabilityNo);
        await subFrame.locator('//*[@id="_oj5|text"]').click()
          await subFrame.locator(
        `td[id*='TableLov'][id$='_0']:has-text("${liabilityNo}")`
    ).first().click();
    
    console.log("Selected Liability No:", liabilityNo);
    await frame.waitForTimeout(1000);
       
}

    async enterPoolCode(poolCode: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.poolCode).clear();
        await frame.locator(this.Elements.poolCode).fill(poolCode);
        console.log("Entered Pool Code:", poolCode);
    }

    async searchPoolCurrency(poolCurrency: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.poolCurrency).fill(poolCurrency);
        await frame.locator(this.Elements.poolCurrency).press('Enter');
        await frame.waitForTimeout(1000);
        console.log("Searched Pool Currency:", poolCurrency);
    }

    // ─── Collateral Pool Linkage Section ──────────────────────────────────────

    async clickCollateralLinkageAddRow() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.collateralAddRow).click();
        await frame.waitForTimeout(1000);
        console.log("Clicked Collateral Linkage Add Row");
    }

    async searchCollateralCode(collateralCode: string) {
        const frame = await this.getFrame();
        await frame.locator('//*[@id="BLK_POOL_COLLATERALS_LINKAGE__COLLATERAL_CODERC0"]/div[1]/span/oj-button/button/div/span[1]/span').click()
        const subFrame = await this.getSubScreenFrame();
         await subFrame.locator(this.Elements.collateralCode).clear()
        await subFrame.locator(this.Elements.collateralCode).fill(collateralCode);
        await subFrame.locator('//*[@id="_oj5|text"]').click()
          await subFrame.locator(
        `td[id*='TableLov'][id$='_0']:has-text("${collateralCode}")`
    ).first().click();
        await subFrame.locator(this.Elements.collateralCode).press('Enter');
        await subFrame.waitForTimeout(1000);
        console.log("Searched Collateral Code:", collateralCode);
    }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveButton() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000);
        console.log("Clicked Save button");
    }

    async clickOkButton() {
        try {
            const alertFrame = await this.getAlertFrame();
            await alertFrame.locator(this.Elements.okBtn).click();
            console.log("Clicked Ok on alert");
        } catch {
            try {
                const subFrame = await this.getSubScreenFrame();
                await subFrame.locator(this.Elements.okBtn).click();
                console.log("Clicked Ok on subscreen");
            } catch {
                const frame = await this.getFrame();
                await frame.locator(this.Elements.okBtn).click();
                console.log("Clicked Ok on main frame");
            }
        }
        await this.page.waitForTimeout(1000);
    }

    async verifySuccessMessage() {
        const alertFrame = await this.getAlertFrame();
        const message = alertFrame.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Record Successfully Saved');
        await alertFrame.locator(this.Elements.okBtn).click();
        console.log("Pool record saved successfully");
    }

    // ─── Query & Authorize ────────────────────────────────────────────────────

    async enterLiabilityNoForQuery(liabilityNo: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.liabilityNo).clear();
        await frame.locator(this.Elements.liabilityNo).fill(liabilityNo);
        console.log("Entered Liability No for query:", liabilityNo);
    }

    async clickAcceptButton() {
        try {
            const subFrame = await this.getSubScreenFrame();
            await subFrame.locator(this.Elements.acceptBtn).click();
            console.log("Clicked Accept on subscreen");
        } catch {
            const frame = await this.getFrame();
            await frame.locator(this.Elements.acceptBtn).click();
            console.log("Clicked Accept on main frame");
        }
        await this.page.waitForTimeout(2000);
    }

    async verifyAuthSuccessMessage() {
        try {
            const subFrame = await this.getSubScreenFrame();
            const alertHandle = await subFrame.waitForSelector(
                "//iframe[@id='ifr_AlertWin']", { timeout: 10000 }
            );
            const successframe = await alertHandle.contentFrame();
            const message = successframe.locator(this.Elements.successMessage);
            await expect(message).toHaveText('Record Successfully Authorized');
            await successframe.locator(this.Elements.okBtn).click();
        } catch {
            const alertFrame = await this.getAlertFrame();
            const message = alertFrame.locator(this.Elements.successMessage);
            await expect(message).toHaveText('Record Successfully Authorized');
            await alertFrame.locator(this.Elements.okBtn).click();
        }
        console.log("Pool record authorized successfully");
    }

    async exitPoolPage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
    }
}
