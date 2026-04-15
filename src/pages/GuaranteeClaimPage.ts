import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let contractRefNo: string;

export default class GuaranteeClaimPage {
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
        authorizeBtn:    "//button[contains(@title,'Authorize')] | //input[@title='Authorize']",

        // Main form fields — |input suffix pattern (same as TopUp/KYC)
        contractRefNo:       '//input[@id="BLK_GUARANTEE_CLAIM__CONREFNO|input"]',
        pButton:             "//span[contains(@id,'BTN_P') and contains(@id,'|text')] | //button[contains(@title,'P')]",
        claimLodgementDate:  '//input[@id="BLK_GUARANTEE_CLAIM__CLAIMDT|input"]',
        claimAmount:         '//input[@id="BLK_GUARANTEE_CLAIM__CLAIMAMT|input"]',
        claimingBankRef:     '//input[@id="BLK_LCDGCLM_MASTER__CLAIMING_BANK_REF|input"]',
        extendOrSettle:      '//select[@id="BLK_LCDGCLM_MASTER__CLAIM_ACTION"] | //*[contains(@id,"CLAIM_ACTION") and contains(@id,"|input")]',
        claimSINo:           '//input[@id="BLK_LCDGCLM_MASTER__CLAIM_SERIAL_NO|input"]',

        // Success messages
        successMessage:  "//*[@id='ERRTBL:48_0']",
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Claim Lodgement")]',
                { timeout: 50000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("Guarantee Claim iframe could not be loaded");
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
        await frame.waitForSelector(
            this.Elements.contractRefNo, { state: 'visible', timeout: 15000 }
        );
    }

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
        // ✅ NEEDED — wait for query fields to be ready
        await frame.waitForSelector(
            this.Elements.contractRefNo, { state: 'visible', timeout: 15000 }
        );
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

    async enterContractReference(contractRef: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.contractRefNo).clear();
        await frame.locator(this.Elements.contractRefNo).fill(contractRef);
        await frame.locator(this.Elements.contractRefNo).press('Tab');
        await frame.waitForTimeout(1000);
        console.log("Entered Contract Reference:", contractRef);
    }

    async clickPButtonAndOk() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.pButton).click();
        await frame.waitForTimeout(1000);
        console.log("Clicked P button");

        // ✅ Handle Ok popup after P button
        try {
            const alertFrame = await this.getAlertFrame();
            await alertFrame.locator(this.Elements.okBtn).click();
            console.log("Clicked Ok after P button");
        } catch {
            try {
                const subFrame = await this.getSubScreenFrame();
                await subFrame.locator(this.Elements.okBtn).click();
                console.log("Clicked Ok on subscreen after P button");
            } catch {
                console.log("No popup after P button");
            }
        }
        await frame.waitForTimeout(1000);
    }

    async enterClaimLodgementDate(claimDate: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.claimLodgementDate).clear();
        await frame.locator(this.Elements.claimLodgementDate).fill(claimDate);
        await frame.locator(this.Elements.claimLodgementDate).press('Tab');
        await frame.waitForTimeout(500);
        console.log("Entered Claim Lodgement Date:", claimDate);
    }

    async enterClaimAmount(claimAmount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.claimAmount).clear();
        await frame.locator(this.Elements.claimAmount).fill(claimAmount);
        console.log("Entered Claim Amount:", claimAmount);
    }

    async enterClaimingBankReference(bankRef: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.claimingBankRef).clear();
        await frame.locator(this.Elements.claimingBankRef).fill(bankRef);
        console.log("Entered Claiming Bank Reference:", bankRef);
    }

    async selectExtendOrSettle(extendOrSettle: string) {
      const frame = await this.getFrame();

    
    await frame.locator(
        "[id*='BLK_GUARANTEE_CLAIM__EXTEND_OR_PAY'] span.oj-searchselect-open-icon"
    ).click();
    await frame.waitForTimeout(1000);

    
    try {
        
        await frame.getByText(extendOrSettle, { exact: true }).click();
        console.log("Clicked option by text:", extendOrSettle);
    } catch {
        try {
           
            await frame.locator(`li:has-text("${extendOrSettle}")`).click();
        } catch {
           
            await frame.locator(
                `//div[contains(@class,'oj-listbox')]//li[normalize-space()='${extendOrSettle}']`
            ).click();
        }
    }
    
    await frame.waitForTimeout(500);
    console.log("Selected Extend Or Settle:", extendOrSettle);
    }
     async enterClaimSINo(claimSINo: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.claimSINo).clear();
        await frame.locator(this.Elements.claimSINo).fill(claimSINo);
        console.log("Entered Claim SI No:", claimSINo);
    }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveAndOk() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000);
        console.log("Clicked Save button");

        // ✅ Click Ok after save
        try {
            const subFrame = await this.getSubScreenFrame();
            await subFrame.locator(this.Elements.okBtn).click();
            console.log("Clicked Ok on subscreen after save");
        } catch {
            try {
                const alertFrame = await this.getAlertFrame();
                await alertFrame.locator(this.Elements.okBtn).click();
                console.log("Clicked Ok on alert after save");
            } catch {
                console.log("No popup after save");
            }
        }
        await frame.waitForTimeout(1000);
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
        console.log("Guarantee Claim saved successfully");
    }

    // ─── Authorize ────────────────────────────────────────────────────────────

    async clickAuthorizeButton() {
        // ✅ Authorize button inside subscreen popup
        try {
            const subFrame = await this.getSubScreenFrame();
            await subFrame.locator(this.Elements.authorizeBtn).click();
            console.log("Clicked Authorize button on subscreen");
        } catch {
            const frame = await this.getFrame();
            await frame.locator(this.Elements.authorizeBtn).click();
            console.log("Clicked Authorize button on main frame");
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
        console.log("Guarantee Claim authorized successfully");
    }

    async exitGuaranteePage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
    }
}
