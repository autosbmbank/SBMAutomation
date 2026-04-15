import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let dealRefNo: string;

export default class SecuritiesDealPage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
        // Navigation — |text suffix pattern (same as KYC/FX)
        newTab:          "//span[contains(@id,'New') and contains(@id,'|text')]",
        enterQueryTab:   "//span[contains(@id,'EnterQuery') and contains(@id,'|text')]",
        executeQueryTab: "//span[contains(@id,'ExecuteQuery') and contains(@id,'|text')]",
        authorizeTab:    "//span[contains(@id,'Authorize') and contains(@id,'|text')]",
        saveButton:      "//span[contains(@id,'Save') and contains(@id,'|text')]",
        exitButton:      "//span[contains(@id,'BTN_EXIT') and contains(@id,'|text')]",
        okBtn:           "//span[contains(@id,'BTN_OK') and contains(@id,'|text')]",
        acceptBtn:       "//*[@id='BTN_ACCEPT_oj1|text']",

        // Main form fields — |input suffix pattern (same as KYC/FX)
        product:              '//input[@id="BLK_DEALMASTER__PRD|input"]',
        pButton:              '//span[@id="BLK_DEALMASTER__BTN_P_oj127|text"]',
        securityCode:         '//input[@id="BLK_DEALMASTER__SECTYCD|input"]',
        dealQuantity:         '//input[@id="BLK_DEALMASTER__DEALQTY|input"]',
        tsdlDate:             '//*[@id="BLK_DEALMASTER__TRADEDT|input"]',
        inputPrice:           '//input[@id="BLK_DEALMASTER__INPUTPRC|input"]',
        dealRefNo:            '[id="BLK_DEALMASTER__DEALREF|input"]',

        // Securities From section
        counterparty:         '//*[@id="BLK_DETALFROM__CPTY|input"]',
        accommodationLodge:   '//*[@id="BLK_DETALFROM__ACCOMLODGE"]/div/div/div',
        moneySettlementDate:  '//*[@id="BLK_DETALFROM__MSTLDT|input"]',

        // Securities To section
        portfolio:            '//input[@id="BLK_DETALTO__PORTFOLIO|input"]',
        safeKeepingLocation:  '//input[@id="BLK_DETALTO__SKLOCTO|input"]',
        safeKeepingAccount:   '//input[@id="BLK_DETALTO__SKACCTO|input"]',

        // Authorize screen
        authorizeBtn:        '//*[@id="BLK_RKY__BTN_AUTH_oj17|text"]',

        // Success messages
        successMessage:       "//*[@id='ERRTBL:48_0']",
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Securities Deal Input")]',
                { timeout: 50000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("Securities Deal iframe content could not be loaded");
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
        // ✅ NEEDED — override message appears conditionally
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
        await frame.waitForSelector(this.Elements.product, { state: 'visible', timeout: 15000 });
    }

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
        // ✅ NEEDED — wait for query fields to be ready
        await frame.waitForSelector(this.Elements.dealRefNo, { state: 'attached', timeout: 15000 });
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

    async searchProduct(product: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.product).fill(product);
        await frame.locator(this.Elements.product).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async clickPButton() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.pButton).click();

        // ✅ NEEDED — wait for deal reference to be generated
      await frame.waitForSelector(this.Elements.dealRefNo, { state: 'attached', timeout: 15000 });
    dealRefNo = await frame.locator(this.Elements.dealRefNo).inputValue();
    console.log("Securities Deal Reference captured: " + dealRefNo);
    }

    async searchSecurityCode(securityCode: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.securityCode).fill(securityCode);
        await frame.locator(this.Elements.securityCode).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async enterDealQuantity(dealQuantity: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.dealQuantity).clear();
        await frame.locator(this.Elements.dealQuantity).fill(dealQuantity);
    }

    async enterTSDLDate(tsdlDate: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.tsdlDate).clear();
        await frame.locator(this.Elements.tsdlDate).fill(tsdlDate);
        await frame.locator(this.Elements.tsdlDate).press('Tab');
        await frame.waitForTimeout(1000);
    }

    async enterInputPrice(inputPrice: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.inputPrice).clear();
        await frame.locator(this.Elements.inputPrice).fill(inputPrice);
    }

    // ─── Securities From Section ──────────────────────────────────────────────

    async searchCounterparty(counterparty: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.counterparty).fill(counterparty);
        // await frame.locator(this.Elements.counterparty).press('Enter');
        await frame.waitForTimeout(3000);
    }

    async enableAccommodationLodge() {
        const frame = await this.getFrame();
        const checkbox = frame.locator(this.Elements.accommodationLodge);
        if (!(await checkbox.isChecked())) {
            await checkbox.click();
        }
        console.log("Accommodation Lodge enabled");
    }

    async enterMoneySettlementDate(moneySettlementDate: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.moneySettlementDate).clear();
        await frame.locator(this.Elements.moneySettlementDate).fill(moneySettlementDate);
        await frame.locator(this.Elements.moneySettlementDate).press('Tab');
        await frame.waitForTimeout(1000);
    }

    // ─── Securities To Section ────────────────────────────────────────────────

    async searchPortfolio(portfolio: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.portfolio).fill(portfolio);
        await frame.locator(this.Elements.portfolio).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async searchSafeKeepingLocation(safeKeepingLocation: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.safeKeepingLocation).fill(safeKeepingLocation);
        await frame.locator(this.Elements.safeKeepingLocation).press('Enter');
        await frame.waitForTimeout(1000);
    }

    async searchSafeKeepingAccount(safeKeepingAccount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.safeKeepingAccount).fill(safeKeepingAccount);
        await frame.locator(this.Elements.safeKeepingAccount).press('Enter');
        await frame.waitForTimeout(1000);
    }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveButton() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000);
    }

    async clickAcceptButton() {
         const frame = await this.getFrame();
        const alertFrame = await this.getAlertFrame();
         alertFrame.locator('//*[@id="BTN_ACCEPT_oj1|text"]').click();
        // try {
        //     // Try override frame first
        //     const overrideFrame = await this.getOverrideFrame();
        //     await overrideFrame.locator(this.Elements.acceptBtn).click();
        // } catch {
        //     // Try direct on main frame
        //     const frame = await this.getFrame();
        //     await frame.locator(this.Elements.acceptBtn).click();
        // }
        // await this.page.waitForTimeout(2000);
    }

    async clickOkButton() {
        try {
            const alertFrame = await this.getAlertFrame();
            await alertFrame.locator(this.Elements.okBtn).click();
        } catch {
            const subFrame = await this.getSubScreenFrame();
            await subFrame.locator(this.Elements.okBtn).click();
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

    async enterDealReference(dealReference: string) {
        // Use captured dealRefNo if available, otherwise use passed value
        const refToUse = dealRefNo || dealReference;
        if (!refToUse) throw new Error("Deal Reference not available — check Maker flow ran successfully");
        const frame = await this.getFrame();
        await frame.locator(this.Elements.dealRefNo).clear();
         await frame.locator(this.Elements.dealRefNo).fill(refToUse);
        console.log("Entering Deal Reference: " + refToUse);
    }

    async clickAuthorizeOnDealAuthScreen() {
        // ✅ Deal Authorization is a subscreen popup
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.authorizeBtn).click();
        await this.page.waitForTimeout(2000);
    }

    async verifyAuthSuccessMessage() {
         const subFrame = await this.getSubScreenFrame();
             const frameElementHandle2 = await subFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
                const successframe= await frameElementHandle2.contentFrame();
                 
          const message= successframe.locator(this.Elements.successMessage)
        await expect(message).toHaveText('Successfully Authorized');
        await successframe.click(this.Elements.okBtn)
    }

    async exitSecuritiesPage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
    }
}
