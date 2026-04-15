import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let topUpRefNo: string;

export default class TopUpTermDepositPage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
        // Navigation — |text suffix pattern (same as Securities/KYC/MM)
        newTab:          "//span[contains(@id,'New') and contains(@id,'|text')]",
        enterQueryTab:   "//span[contains(@id,'EnterQuery') and contains(@id,'|text')]",
        executeQueryTab: "//span[contains(@id,'ExecuteQuery') and contains(@id,'|text')]",
        authorizeTab:    "//span[contains(@id,'Authorize') and contains(@id,'|text')]",
        saveButton:      "//span[contains(@id,'Save') and contains(@id,'|text')]",
        exitButton:      "//span[contains(@id,'BTN_EXIT') and contains(@id,'|text')]",
        okBtn:           "//span[contains(@id,'BTN_OK') and contains(@id,'|text')]",
        acceptBtn:       "//*[contains(@id,'BTN_ACCEPT') and contains(@id,'|text')]",

        // Main form fields — |input suffix pattern (same as Securities/KYC/MM)
        accountNumber:   '//input[@id="BLK_TDTOPUP_DETAIL__ACC|input"]',
        pButton:         '//span[@id="BLK_TDTOPUP_DETAIL__BTN_POPULATE_oj63|text"]',
        topUpAmount:     '//input[@id="BLK_TDTOPUP_DETAIL__TOPUP_AMOUNT|input"]',
        topUpRefNo:      '//input[@id="BLK_TDTOPUP_DETAIL__TOPUP_REF_NO|input"]',
        computeBtn:      "//span[contains(@id,'COMPUTE') and contains(@id,'|text')] | //button[contains(@title,'Compute')]",

        // PayIn Details section
        payInAddRow:     '//*[@id="cmdAddRow_BLK_TDTOPUP_PAYIN"]/button/div/span[1]/span',
        percentage:      '//input[@id="BLK_TDTOPUP_PAYIN__MULTIMODE_PERCENTAGERC0|input"]',
        payInAmount:     '//input[@id="BLK_TDTOPUP_PAYIN__MULTIMODE_TDAMOUNTRC0|input"]',
        offsetAccount:   '//input[@id="BLK_TDTOPUP_PAYIN__MMOFFSETACC|input"] | (//input[contains(@id,"OFFSETACC") and contains(@id,"|input")])[1]',

        // Success messages
        successMessage:  "//*[@id='ERRTBL:48_0']",
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "Top-Up of Term Deposit")]',
                { timeout: 50000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("TopUp Term Deposit iframe content could not be loaded");
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
        await frame.waitForSelector(this.Elements.accountNumber, { state: 'visible', timeout: 15000 });
    }

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
        // ✅ NEEDED — wait for query fields to be ready
        await frame.waitForSelector(this.Elements.topUpRefNo, { state: 'attached', timeout: 15000 });
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
         const subFrame=await this.getSubScreenFrame()
        await subFrame.locator('//*[@id="BTN_OK_oj16|text"]').click()
         await frame.waitForTimeout(2000);
    }

    // ─── Main Form Fields ─────────────────────────────────────────────────────

    async enterAccountNumber(accountNumber: string) {
         const frame = await this.getFrame();
      
        await frame.locator(this.Elements.accountNumber).clear()
        await frame.locator(this.Elements.accountNumber).fill(accountNumber);
        await frame.waitForTimeout(3000);
    }

    async clickPButtonAndOk() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.pButton).click();
        console.log('clicked on P button')
        await frame.waitForTimeout(1000);

        const alertFrame = await this.getAlertFrame();
        const message = alertFrame.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Request Successfully Processed');
        await alertFrame.locator(this.Elements.okBtn).click();
      
    }

    async enterTopUpAmount(topUpAmount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.topUpAmount).clear();
        await frame.locator(this.Elements.topUpAmount).fill(topUpAmount);
    }

    // ─── PayIn Details Section ────────────────────────────────────────────────

    async clickPayInAddRowButton() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.payInAddRow).click();
        await frame.waitForTimeout(1000);
    }

    async enterPercentage(percentage: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.percentage).clear();
        await frame.locator(this.Elements.percentage).fill(percentage);
    }

    async enterPayInAmount(payInAmount: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.payInAmount).clear();
        await frame.locator(this.Elements.payInAmount).fill(payInAmount);
    }

    async enterOffsetAccount(offsetAccount: string) {
        const frame = await this.getFrame();
        await frame.locator('//*[@id="BLK_TDTOPUP_PAYIN__MULTIMODE_TDOFFSET_ACCRC0"]/div[1]/span/oj-button/button/div/span[1]/span').click()
        const subFrame=await this.getSubScreenFrame()
         await subFrame.click("//span[contains(text(),'Fetch')]")
         await subFrame.locator("tbody.oj-table-body")
        .getByText(offsetAccount, { exact: true })
        .first()
        .click();
    console.log("Selected offset account:", offsetAccount);
   
    }

    async clickComputeAndOk() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.computeBtn).click();
        await frame.waitForTimeout(1000);
         const alertFrame = await this.getAlertFrame();
        const message = alertFrame.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Request Successfully Processed');
        await alertFrame.locator(this.Elements.okBtn).click();

          }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveButton() {
        const frame = await this.getFrame();

        // Capture TopUp reference before save if not already captured
        // if (!topUpRefNo) {
        //     try {
        //         await frame.waitForSelector(this.Elements.topUpRefNo, { state: 'attached', timeout: 5000 });
        //         topUpRefNo = await frame.locator(this.Elements.topUpRefNo).inputValue();
        //         console.log("TopUp Reference captured before save: " + topUpRefNo);
        //     } catch {
        //         console.log("TopUp Reference not available before save");
        //     }
        // }

        await frame.locator(this.Elements.saveButton).click();
        await frame.waitForTimeout(2000);

        // Capture reference after save if still not captured
        // if (!topUpRefNo) {
        //     try {
        //         await frame.waitForSelector(this.Elements.topUpRefNo, { state: 'attached', timeout: 10000 });
        //         topUpRefNo = await frame.locator(this.Elements.topUpRefNo).inputValue();
        //         console.log("TopUp Reference captured after save: " + topUpRefNo);
        //     } catch {
        //         console.log("Could not capture TopUp Reference Number");
        //     }
        // }
    }

    async clickAcceptAndOk() {
        // Accept — tries override frame first then alert frame
         try {
            const overrideFrame = await this.getAlertFrame();
            await overrideFrame.locator(this.Elements.acceptBtn).click();
            console.log("accepted override popup")
       
            } catch {
                console.log("No Ok popup after Accept");
            }
        // }
        await this.page.waitForTimeout(1000);
    }

    async verifySuccessMessage() {
        const frame = await this.getFrame();
        const alertFrame = await this.getAlertFrame();
        const message = alertFrame.locator(this.Elements.successMessage);
        await expect(message).toHaveText('Record Successfully Saved');
        await alertFrame.locator(this.Elements.okBtn).click();
        await frame.waitForSelector(
    '[id="BLK_TDTOPUP_DETAIL__TOPUP_REF_NO|input"]',
    { state: 'attached', timeout: 15000 }
);
topUpRefNo = await frame.locator(
    '[id="BLK_TDTOPUP_DETAIL__TOPUP_REF_NO|input"]'
).inputValue();

console.log("TopUp Reference captured:", topUpRefNo);
    }

    // ─── Query & Authorize ────────────────────────────────────────────────────

    async enterTopUpReference(topUpReference: string) {
        // Use captured topUpRefNo if available, otherwise use passed value
        const refToUse = topUpRefNo || topUpReference;
        if (!refToUse) throw new Error("TopUp Reference not available — check Maker flow ran successfully");
        const frame = await this.getFrame();
        await frame.locator(this.Elements.topUpRefNo).clear();
        await frame.locator(this.Elements.topUpRefNo).fill(refToUse);
        console.log("Entering TopUp Reference: " + refToUse);
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

    async exitTopUpPage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
    }
}
