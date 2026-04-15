import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let contractRefNo: string;

export default class FXDealPage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
        // Navigation — using |text suffix pattern (same as KYC)
        newTab:          "//span[contains(@id,'New') and contains(@id,'|text')]",
        enterQueryTab:   "//span[contains(@id,'EnterQuery') and contains(@id,'|text')]",
        executeQueryTab: "//span[contains(@id,'ExecuteQuery') and contains(@id,'|text')]",
        authorizeTab:    "//span[contains(@id,'Authorize') and contains(@id,'|text')]",
        saveButton:      "//span[contains(@id,'Save') and contains(@id,'|text')]",
        exitButton:      "//span[contains(@id,'BTN_EXIT') and contains(@id,'|text')]",
        okBtn:           "//span[contains(@id,'BTN_OK') and contains(@id,'|text')]",

        // Main form fields — using |input suffix pattern (same as KYC)
        productCode:     '//input[@id="BLK_CONTRACT_MASTER__PRDCD|input"]',
        counterparty:    '//input[@id="BLK_CONTRACT_MASTER__COUNTERPARTY|input"]',
        boughtCurrency:  '//input[@id="BLK_CONTRACT_MASTER__BOTCCY|input"]',
        boughtAmount:    "//input[@id='BLK_CONTRACT_MASTER__BOTAMT|input']",
        boughtValueDate: "//input[@id='BLK_CONTRACT_MASTER__BOTVALDT|input']",
        soldCurrency:    "//input[@id='BLK_CONTRACT_MASTER__SOLDCCY|input']",
        soldAmount:      "//input[@id='BLK_CONTRACT_MASTER__SOLDAMT|input']",
        soldValueDate:   "//input[@id='BLK_CONTRACT_MASTER__SOLDVALDT|input']",
        calculateBtn:    "//span[contains(@id,'CALCULATE') and contains(@id,'|text')] | //button[contains(@title,'Calculate')]",
        fieldsTab:       "//span[contains(text(),'Fields')] | //a[normalize-space()='Fields']",
        squareOffRate:   '//*[@id="BLK_UDVWS_TR_CONT_UDF_UPLD_DTL_NUM__FIELD_VALRC0|input"]',
        contractRefNo:   '//input[@id="BLK_CONTRACT_MASTER__CONTREFNNO|input"]',

        // Authorize popup
        confirmRadio:    '//*[@id="BLK_OVERRIDES__CONFIRMEDRC0"]/div/div',
        authorizeBtn:    '//*[@id="BLK_CONTRACT_DETAIL__BTN_AUTH_oj24|text"]',

        // Success messages
        successMessage:  "//*[@id='ERRTBL:48_0']",
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Foreign Exchange Contract Input")]',
                { timeout: 10000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("FX Deal iframe content could not be loaded");
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
        // ✅ NEEDED — alert popup appears conditionally
        const handle = await frame.waitForSelector(
            'iframe#ifr_AlertWin', { timeout: 15000 }
        );
        return await handle.contentFrame();
    }

    private async getAuthorizeSubFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        // ✅ NEEDED — authorize popup appears after clicking Authorize tab
        const handle = await frame.waitForSelector(
            'iframe[id="ifrSubScreen"]', { timeout: 15000 }
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

    async clickFieldsTab() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.fieldsTab).click();
        await frame.waitForTimeout(2000);

    }

    // ─── Main Form Fields — fill/click auto-wait, no waitForSelector needed ──

    async searchProductCode(productCode: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.productCode).fill(productCode);
        await frame.locator(this.Elements.productCode).press('Tab');
        await frame.waitForTimeout(1000);
    }

    async searchCounterparty(counterparty: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.counterparty).fill(counterparty);
       
        await frame.waitForTimeout(1000);
    }

    async searchBoughtCurrency(boughtCurrency: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.boughtCurrency).fill(boughtCurrency);
       
        await frame.waitForTimeout(1000);
    }

    async enterBoughtAmount(boughtAmount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.boughtAmount).clear();
        await frame.locator(this.Elements.boughtAmount).fill(boughtAmount);
    }

    async enterBoughtValueDate(boughtValueDate: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.boughtValueDate).clear();
        await frame.locator(this.Elements.boughtValueDate).fill(boughtValueDate);
        await frame.locator(this.Elements.boughtValueDate).press('Tab');
        await frame.waitForTimeout(1000);
    }

    async searchSoldCurrency(soldCurrency: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.soldCurrency).fill(soldCurrency);
        await frame.locator(this.Elements.soldCurrency).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async enterSoldAmount(soldAmount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.soldAmount).clear();
        await frame.locator(this.Elements.soldAmount).fill(soldAmount);
    }

    async enterSoldValueDate(soldValueDate: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.soldValueDate).clear();
        await frame.locator(this.Elements.soldValueDate).fill(soldValueDate);
        await frame.locator(this.Elements.soldValueDate).press('Tab');
        await frame.waitForTimeout(1000);
    }

    async clickCalculate() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.calculateBtn).click();
        await frame.waitForTimeout(2000);
    }

    async enterSquareOffRate(squareOffRate: string) {
       
         const alertFrame = await this.getAlertFrame();
     alertFrame.locator('//*[@id="BTN_ACCEPT_oj1|text"]').click();
        const authFrame = await this.getAuthorizeSubFrame();
        await authFrame.locator(this.Elements.squareOffRate).clear();
        await authFrame.locator(this.Elements.squareOffRate).fill(squareOffRate);
        await authFrame.locator('//*[@id="BTN_OK_oj8|text"]').click()
    }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveButton() {
        const frame = await this.getFrame();

      
            await frame.waitForSelector(this.Elements.contractRefNo, { state: 'attached', timeout: 5000 });
            const refNo = await frame.locator(this.Elements.contractRefNo).inputValue();
           
                contractRefNo = refNo;
                console.log("FX Contract Reference captured: " + contractRefNo);
         

        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000);

    }

    async verifySuccessMessage() {
        const frame = await this.getFrame();
        const alertFrame = await this.getAlertFrame();
         alertFrame.locator('//*[@id="BTN_ACCEPT_oj1|text"]').click();
        const message = alertFrame.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Successfully Saved');
        await alertFrame.locator(this.Elements.okBtn).click();
    }

    // ─── Query & Authorize ────────────────────────────────────────────────────

    async enterContractReference() {
        if (!contractRefNo) throw new Error("Contract Reference not captured — check Maker flow ran successfully");
        const frame = await this.getFrame();
        await frame.locator(this.Elements.contractRefNo).clear();
        await frame.locator(this.Elements.contractRefNo).fill(contractRefNo);
        console.log("Entering Contract Reference: " + contractRefNo);
    }

    async clickConfirmRadioButton() {
        const authFrame = await this.getAuthorizeSubFrame();
        await authFrame.locator(this.Elements.confirmRadio).click();
        console.log("clicked on radio button")
        await this.page.waitForTimeout(1000);
    }

    async clickAuthorizeOnPopup() {
        const authFrame = await this.getAuthorizeSubFrame();
        await authFrame.locator(this.Elements.authorizeBtn).click();
        await this.page.waitForTimeout(2000);
    }

    async clickOkButton() {
        try {
            const authFrame = await this.getAuthorizeSubFrame();
            await authFrame.locator(this.Elements.okBtn).click();
        } catch {
            const frame = await this.getFrame();
            const alertFrame = await this.getAlertFrame();
            await alertFrame.locator(this.Elements.okBtn).click();
        }
    }

    async verifyAuthSuccessMessage() {
         const authFrame = await this.getAuthorizeSubFrame();
             const frameElementHandle2 = await authFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
                const successframe= await frameElementHandle2.contentFrame();
                 
          const message= successframe.locator(this.Elements.successMessage)
        await expect(message).toHaveText('Successfully Authorized');
        await successframe.click(this.Elements.okBtn)
    }

    async exitFXPage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
    }
}
