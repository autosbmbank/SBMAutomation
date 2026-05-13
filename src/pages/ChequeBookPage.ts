import { expect, Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

// Module-level newPage — own instance
let newPage;
let pagePromise;

export default class ChequeBookPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private elements = {
        // NextGen Navigation — same pattern as FCYDealPage/RetailDepositPage
        proceedBtn:      '//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
        NextGenFrame:    '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        maintab:         "//span[normalize-space()='Teller']",

        // Screen buttons
        chequeBookBtn:   "//span[contains(normalize-space(),'CQRQ')] | //span[contains(normalize-space(),'Cheque Book Request')]",
        stopPaymentBtn:  "//span[contains(normalize-space(),'CQST')] | //span[contains(normalize-space(),'Stop Cheque Request')]",

        // Issue Cheque Book fields
        accountNumber:   '(//input[@id="accNo|input"])[2]',
        addressLine1:    '//input[@id="deliveryAddr1|input"]',
        addressLine2:    '//input[@id="deliveryAddr2|input"]',
        firstChequeNo:   '//input[@id="firstChequeLbl|input"]',

        // Stop Payment fields
        chequeNumber:    "//input[contains(@id,'chequeNumber') and contains(@id,'|input')] | //input[contains(@id,'ChequeNo') and contains(@id,'|input')]",

        // Buttons
        submitButton:    "(//span[normalize-space()='Submit'])[1]",
        okButton:        "(//span[text()='Ok'])[1]",
        okSuccessBtn:    "//span[@data-bind='text: labels.okLbl']",
        successmsg:      "(//div[@class='oj-message-summary oj-message-title'])[1]",
        adviceconf:      "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
    }

    

    async NextGenFun() {
        await this.base.jsClick('//*[@id="DBoardNextGenUI"]/span/span');
        console.log("Clicked on NextGen UI Dashboard");

        try {
            const frameElementHandle = await this.page.waitForSelector(
                this.elements.NextGenFrame, { timeout: 40000 }
            );
            const nextgenframe = await frameElementHandle.contentFrame();
            console.log("Switched to NextGen UI Dashboard Frame");

            pagePromise = this.page.context().waitForEvent('page');
            await nextgenframe.getByText("Retail Operations").click();
            console.log("Clicked on Retail Operations");

        } catch (error) {
            console.log("Frame not found:", error.message);
            throw error;
        }

        try {
            newPage = await pagePromise;
        } catch {
            newPage = this.page;
        }

        await newPage.bringToFront().catch(() => {});
        await newPage.waitForFunction(() => document.body && document.body.innerText.length > 50);

        const proceed = newPage.locator(this.elements.proceedBtn).first();
        if (await proceed.count()) {
            try {
                await proceed.click({ timeout: 4000 });
            } catch {
                console.log("using JS click");
                await proceed.evaluate(el => el.click());
            }
        }

        await newPage.waitForLoadState('networkidle').catch(() => {});
        await newPage.waitForTimeout(600);
        const currentURL = newPage.url();
        await newPage.goto(currentURL, { waitUntil: 'networkidle' });
        await newPage.waitForTimeout(5000);
    }

   

    async searchChequeScreen(screenCode: string) {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);

        if (screenCode === 'CQRQ') {
            await newPage.locator(this.elements.chequeBookBtn).click();
            console.log("Clicked on Issue Cheque Book screen");
        } else if (screenCode === 'CQST') {
            await newPage.locator(this.elements.stopPaymentBtn).click();
            console.log("Clicked on Stop Payment screen");
        } else {
            await newPage.getByText(screenCode, { exact: false }).first().click();
            console.log("Clicked on screen: " + screenCode);
        }
        await newPage.waitForTimeout(2000);
    }

    // ─── Issue Cheque Book Fields ─────────────────────────────────────────────

    async enterAccountNumber(accountNumber: string) {
        await newPage.locator(this.elements.accountNumber).fill(accountNumber);
        await newPage.locator(this.elements.accountNumber).press('Tab');
        await newPage.waitForTimeout(1000);
        console.log("Entered Account Number:", accountNumber);
    }

    async enterAddressLine1(addressLine1: string) {
        await newPage.locator(this.elements.addressLine1).fill(addressLine1);
        await newPage.waitForTimeout(500);
        console.log("Entered Address Line1:", addressLine1);
    }

    async enterAddressLine2(addressLine2: string) {
        await newPage.locator(this.elements.addressLine2).fill(addressLine2);
        await newPage.waitForTimeout(500);
        console.log("Entered Address Line2:", addressLine2);
    }

    async enterFirstChequeNumber(length:number) {
       
        const firstChequeNo = await this.base.generateAlphanumericValue(length);
        await newPage.locator(this.elements.firstChequeNo).fill(firstChequeNo);
        console.log("Entered First Cheque Number (auto generated):", firstChequeNo);
    }

    // ─── Stop Payment Fields ──────────────────────────────────────────────────

    async enterChequeNumber(chequeNumber: string) {
        await newPage.locator(this.elements.chequeNumber).fill(chequeNumber);
        await newPage.waitForTimeout(500);
        console.log("Entered Cheque Number:", chequeNumber);
    }

    // ─── Submit & Validation ──────────────────────────────────────────────────

    async clickSubmit() {
        await newPage.locator(this.elements.submitButton).click();
        console.log("Clicked on Submit");
        await newPage.waitForTimeout(2000);
    }

    async verifySuccessMessage() {
        await expect(
            await newPage.locator(this.elements.successmsg).textContent()
        ).toContain('Success');
        console.log("Cheque operation — Success");

        // Click Ok
        try {
            await newPage.locator(this.elements.okSuccessBtn).click();
        } catch {
            await newPage.locator(this.elements.okButton).click();
        }

        // Handle advice confirmation if appears
        try {
            await newPage.locator(this.elements.adviceconf).click();
        } catch {
            // No advice confirmation
        }
    }
}
