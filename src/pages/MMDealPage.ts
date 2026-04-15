import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let contractRefNo: string;

export default class MMDealPage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
        // Navigation — |text suffix pattern (same as Securities/KYC)
        newTab:          "//span[contains(@id,'New') and contains(@id,'|text')]",
        enterQueryTab:   "//span[contains(@id,'EnterQuery') and contains(@id,'|text')]",
        executeQueryTab: "//span[contains(@id,'ExecuteQuery') and contains(@id,'|text')]",
        authorizeTab:    "//span[contains(@id,'Authorize') and contains(@id,'|text')]",
        saveButton:      "//span[contains(@id,'Save') and contains(@id,'|text')]",
        exitButton:      "//span[contains(@id,'BTN_EXIT') and contains(@id,'|text')]",
        okBtn:           "//span[contains(@id,'BTN_OK') and contains(@id,'|text')]",
        acceptBtn:       "//*[contains(@id,'BTN_ACCEPT') and contains(@id,'|text')]",

        // Main form fields — |input suffix pattern (same as Securities/KYC)
        productCode:     '//input[@id="BLK_MMVW_CONTRACT_MASTER__PRD|input"]',
        customerNumber:  '//input[@id="BLK_MMVW_CONTRACT_MASTER__COUNTPRTY|input"]',
        currency:        '//input[@id="BLK_MMVW_CONTRACT_MASTER__CURRENCY|input"]',
        amount:          '//input[@id="BLK_MMVW_CONTRACT_MASTER__AMOUNT|input"]',
        liquidation:     '//select[@id="BLK_MMTRONL_MASTER__LIQMODE"] | //*[contains(@id,"LIQMODE") and contains(@id,"|input")]',
        contractRefNo:   '[id="BLK_MMTRONL_MASTER__CONTREF|input"]',

        // Authorize screen — override checkboxes
        overrideCheckboxes: "//input[@type='checkbox'][contains(@id,'CONFIRM')] | //input[@type='checkbox'][contains(@id,'override')]",
        authorizeBtn:        '//*[contains(@id,"BTN_AUTH") and contains(@id,"|text")] | //button[contains(@title,"Authorize")]',

        // Success messages
        successMessage:  "//*[@id='ERRTBL:48_0']",
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Money Market")]',
                { timeout: 50000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("MM Deal iframe content could not be loaded");
        }
        return this._frame;
    }

    resetFrame() {
        this._frame = null;
    }

    // ─── Nested Frame Helpers ─────────────────────────────────────────────────

    private async getSubScreenFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        // ✅ NEEDED — sub-screen appears conditionally after action
        const handle = await frame.waitForSelector(
            '//iframe[@id="ifrSubScreen"]', { timeout: 15000 }
        );
        return await handle.contentFrame();
    }

    private async getAlertFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        // ✅ NEEDED — alert appears conditionally after save/authorize
        const handle = await frame.waitForSelector(
            'iframe#ifr_AlertWin', { timeout: 15000 }
        );
        return await handle.contentFrame();
    }

    private async getOverrideFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        // ✅ NEEDED — override message appears conditionally after save
        const handle = await frame.waitForSelector(
            '//iframe[contains(@title,"Override Message")]', { timeout: 10000 }
        );
        return await handle.contentFrame();
    }

    // ─── Navigation ───────────────────────────────────────────────────────────

    async clickNewTab() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.newTab);
        // ✅ NEEDED — wait for form to load after new tab click
        await frame.waitForSelector(this.Elements.productCode, { state: 'visible', timeout: 15000 });
    }

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
        // ✅ NEEDED — wait for query fields to be ready
        await frame.waitForSelector(this.Elements.contractRefNo, { state: 'attached', timeout: 15000 });
    }

    async clickExecuteQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.executeQueryTab);
        // ✅ NEEDED — results take time to load
        await frame.waitForTimeout(4000);
    }

    async clickAuthorizeTab() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.authorizeTab);
        await frame.waitForTimeout(2000);
    }

    // ─── Main Form Fields ─────────────────────────────────────────────────────

    async enterProductCode(productCode: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.productCode).fill(productCode);
        await frame.locator(this.Elements.productCode).press('Tab');
        await frame.waitForTimeout(1000);
    }

    async enterCustomerNumber(customerNumber: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.customerNumber).fill(customerNumber);
        await frame.locator(this.Elements.customerNumber).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async enterCurrency(currency: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.currency).fill(currency);
        await frame.locator(this.Elements.currency).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async enterAmount(amount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.amount).clear();
        await frame.locator(this.Elements.amount).fill(amount);
    }

    async selectLiquidationManual() {
        const frame = await this.getFrame();
      
            await frame.getByText('Manual', { exact: true }).click();
    
        await frame.waitForTimeout(500);
    }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveButton() {
        const frame = await this.getFrame();

        // Capture contract reference before save
        try {
            await frame.waitForSelector(this.Elements.contractRefNo, { state: 'attached', timeout: 5000 });
            const refNo = await frame.locator(this.Elements.contractRefNo).inputValue();
            if (refNo) {
                contractRefNo = refNo;
                console.log("MM Contract Reference captured: " + contractRefNo);
            }
        } catch {
            // Reference not yet available — will capture after save
        }

        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000);

        // Capture reference after save if not captured before
        if (!contractRefNo) {
            try {
                await frame.waitForSelector(this.Elements.contractRefNo, { state: 'attached', timeout: 10000 });
                contractRefNo = await frame.locator(this.Elements.contractRefNo).inputValue();
                console.log("MM Contract Reference captured after save: " + contractRefNo);
            } catch {
                console.log("Could not capture MM Contract Reference Number");
            }
        }
    }

    async clickAcceptButton() {
        try {
            // Override frame appears after save
            const overrideFrame = await this.getOverrideFrame();
            await overrideFrame.locator(this.Elements.acceptBtn).click();
        } catch {
            // Try alert frame
            try {
                const alertFrame = await this.getAlertFrame();
                await alertFrame.locator(this.Elements.acceptBtn).click();
            } catch {
                // Try main frame directly
                const frame = await this.getFrame();
                await frame.locator(this.Elements.acceptBtn).click();
            }
        }
        await this.page.waitForTimeout(2000);
    }

    async clickOkButton() {
        try {
            const alertFrame = await this.getAlertFrame();
            await alertFrame.locator(this.Elements.okBtn).click();
        } catch {
            try {
                const subFrame = await this.getSubScreenFrame();
                await subFrame.locator(this.Elements.okBtn).click();
            } catch {
                const frame = await this.getFrame();
                await frame.locator(this.Elements.okBtn).click();
            }
        }
        await this.page.waitForTimeout(1000);
    }

    async verifySuccessMessage() {
        const alertFrame = await this.getAlertFrame();
        const message = alertFrame.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Successfully Saved');
        await alertFrame.locator(this.Elements.okBtn).click();
    }

    // ─── Query & Authorize ────────────────────────────────────────────────────

    async enterContractReference(contractReference: string) {
        // Use captured contractRefNo if available, otherwise use passed value
        const refToUse = contractRefNo || contractReference;
        if (!refToUse) throw new Error("Contract Reference not available — check Maker flow ran successfully");
        const frame = await this.getFrame();
        await frame.locator(this.Elements.contractRefNo).clear();
        await frame.locator(this.Elements.contractRefNo).fill(refToUse);
        console.log("Entering MM Contract Reference: " + refToUse);
    }

    async confirmAllOverrideCheckboxes() {
        // ✅ Override checkboxes appear in subscreen after clicking Authorize
        const subFrame = await this.getSubScreenFrame();
        const checkboxes = subFrame.locator(this.Elements.overrideCheckboxes);
        const count = await checkboxes.count();
        console.log("Override checkboxes found: " + count);
        for (let i = 0; i < count; i++) {
            const checkbox = checkboxes.nth(i);
            if (!(await checkbox.isChecked())) {
                await checkbox.check();
            }
        }
        await this.page.waitForTimeout(1000);
    }

    async clickAuthorizeButton() {
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.authorizeBtn).click();
        await this.page.waitForTimeout(2000);
    }

    async verifyAuthSuccessMessage() {
        const subFrame = await this.getSubScreenFrame();
        const frameElementHandle2 = await subFrame.waitForSelector(
            "//iframe[@id='ifr_AlertWin']", { timeout: 10000 }
        );
        const successframe = await frameElementHandle2.contentFrame();
        const message = successframe.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Successfully Authorized');
        await successframe.locator(this.Elements.okBtn).click();
    }

    async exitMMPage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
    }
}
