import { expect, Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

// Module-level newPage — own instance
let newPage;
let pagePromise;

export default class BookShortageOveragePage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private elements = {
        // NextGen Navigation — same pattern as FCYDealPage
        proceedBtn:     '//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
        NextGenFrame:   '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        maintab:        "//span[normalize-space()='Teller']",

        // Screen buttons
        bookShortageBtn: "//span[contains(normalize-space(),'Book Shortage')]",
        bookOverageBtn:  "//span[contains(normalize-space(),'Book Overage')]",

        // Main form fields
        currencyCode:   "//input[contains(@id,'currency') and contains(@id,'|input')] | " +
                        "input[id*='lov-search'][id*='|input']",
        amount:         "fsgbu-ob-cmn-fd-amount input[aria-required='true']:not([disabled]):not([readonly])",

        // Buttons
        submitButton:   "(//span[normalize-space()='Submit'])[1]",
        okButton:       "(//span[text()='Ok'])[1]",
        okSuccessBtn:   "//span[@data-bind='text: labels.okLbl']",
        successmsg:     "(//div[@class='oj-message-summary oj-message-title'])[1]",
        adviceconf:     "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
    }

    // ─── NextGen Fun — own copy same as FCYDealPage ───────────────────────────

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

    // ─── Screen Navigation ────────────────────────────────────────────────────

    async searchBookShortageScreen() {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);
        await newPage.locator(this.elements.bookShortageBtn).click();
        console.log("Clicked on Book Shortage screen");
        await newPage.waitForTimeout(2000);
    }

    async searchBookOverageScreen() {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);
        await newPage.locator(this.elements.bookOverageBtn).click();
        console.log("Clicked on Book Overage screen");
        await newPage.waitForTimeout(2000);
    }

    // ─── Main Form Fields ─────────────────────────────────────────────────────

    async selectCurrencyCode(currencyCode: string) {
     await newPage.locator('//*[@id="oj-select-choice-tfpm_ob_cmn_fd_currency"]/span/a').click()
      await newPage.locator(`//*[@aria-label="${currencyCode}"]`).click();
     
    console.log("Selected currency:", currencyCode);
    await newPage.waitForTimeout(500);
    }

    async enterAmount(amount: string) {
        await newPage.locator(this.elements.amount).clear();
        await newPage.locator(this.elements.amount).fill(amount);
        await newPage.locator(this.elements.amount).press('Tab');
        await newPage.waitForTimeout(2000);
        console.log("Entered Amount:", amount);
    }

    // ─── Denomination Section — same working pattern as FCYDealPage ───────────

    async expandDenomination() {
        // ✅ Same JS evaluate pattern that worked for FCY screens
        await newPage.evaluate(() => {
            const wrappers = Array.from(
                document.querySelectorAll("div.oj-collapsible-header-wrapper")
            );
            for (const wrapper of wrappers) {
                if (wrapper.textContent?.includes("Denomination")) {
                    const icon = wrapper.querySelector(
                        "a.oj-collapsible-header-icon"
                    ) as HTMLElement;
                    icon?.click();
                    return;
                }
            }
        });
        await newPage.waitForTimeout(5000);
        console.log("Expanded Denomination section");
    }

    async fillDenominationFromAmount(amount: string) {
        const cleanAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
        console.log("Amount for denomination:", cleanAmount);

        if (!cleanAmount || isNaN(cleanAmount)) {
            throw new Error(`Amount is invalid — got: "${amount}"`);
        }

        // ✅ KES denominations (1000,500,200,100,50,40,20,10,5,1)
        const denominations = [1000, 500, 200, 100, 50, 40, 20, 10, 5, 1];
        let remaining = cleanAmount;
        const unitsOrdered: Array<[string, number]> = [];

        for (const denom of denominations) {
            if (remaining >= denom) {
                const qty = Math.floor(remaining / denom);
                unitsOrdered.push([denom.toString(), qty]);
                remaining = parseFloat((remaining % denom).toFixed(2));
            }
        }

        console.log("Denomination plan:", unitsOrdered);
        console.log("Remaining after calculation:", remaining);

        for (const [denom, qty] of unitsOrdered) {
            if (qty > 0) {
                await this.fillSingleDenominationQty(denom, qty.toString());
                await newPage.waitForTimeout(1000);
            }
        }
    }

    // ✅ Same working pattern with retry loop from FXSalePage
    private async fillSingleDenominationQty(denomination: string, qty: string): Promise<boolean> {
        const qtyCellId = await newPage.evaluate((denom) => {
            const allCells = Array.from(
                document.querySelectorAll("td[id*='tablegrid-table'][id$='_0']")
            );
            const tableGroups: { [prefix: string]: Element[] } = {};
            for (const cell of allCells) {
                const prefix = cell.id.split('tablegrid-table')[0];
                if (!tableGroups[prefix]) tableGroups[prefix] = [];
                tableGroups[prefix].push(cell);
            }
            // ✅ KES table — has "1000"
            for (const prefix in tableGroups) {
                const cells = tableGroups[prefix];
                const titles = cells.map(c =>
                    c.querySelector("oj-input-text")?.getAttribute("title") || ''
                );
                if (titles.includes("1000")) {
                    for (const cell of cells) {
                        const title = cell.querySelector("oj-input-text")
                            ?.getAttribute("title")?.trim();
                        if (title === denom) {
                            (cell as HTMLElement).scrollIntoView({ block: 'center' });
                            return cell.id.replace(/_0$/, '_1');
                        }
                    }
                }
            }
            // Fallback — search all tables
            for (const cell of allCells) {
                const title = cell.querySelector("oj-input-text")
                    ?.getAttribute("title")?.trim();
                if (title === denom) {
                    (cell as HTMLElement).scrollIntoView({ block: 'center' });
                    return cell.id.replace(/_0$/, '_1');
                }
            }
            return null;
        }, denomination);

        if (!qtyCellId) {
            console.log(`Denomination "${denomination}" not found — skipping`);
            return false;
        }
        console.log(`Filling denomination ${denomination} → ${qtyCellId}`);

        await newPage.waitForTimeout(1000);

        const cellLocator = newPage.locator(`td[id="${qtyCellId}"]`);
        await cellLocator.scrollIntoViewIfNeeded();
        await cellLocator.click();
        await newPage.waitForTimeout(1000);
        await cellLocator.dblclick();
        await newPage.waitForTimeout(2000);

        const inputLocator = cellLocator.locator("input").first();
        let isVisible = await inputLocator.isVisible().catch(() => false);
        console.log(`Input visible for ${denomination}: ${isVisible}`);

        // ✅ Retry up to 3 times
        let retries = 0;
        while (!isVisible && retries < 3) {
            console.log(`Retry ${retries + 1} — dblclick on ${denomination}`);
            await cellLocator.click();
            await newPage.waitForTimeout(500);
            await cellLocator.dblclick();
            await newPage.waitForTimeout(2000);
            isVisible = await inputLocator.isVisible().catch(() => false);
            retries++;
        }

        if (!isVisible) {
            console.log(`❌ Skipping ${denomination} — input not visible after ${retries} retries`);
            return false;
        }

        await newPage.evaluate((cellId) => {
            const cell = document.getElementById(cellId!);
            const input = cell?.querySelector("input") as HTMLInputElement;
            if (input) {
                input.removeAttribute('readonly');
                input.focus();
            }
        }, qtyCellId);

        await inputLocator.fill(qty);
        await inputLocator.press('Tab');
        await newPage.waitForTimeout(2000);

        // ✅ Body click to commit Oracle JET value
        await newPage.locator("body").click({ position: { x: 100, y: 100 } });
        await newPage.waitForTimeout(1000);

        const verified = await newPage.evaluate((cellId) => {
            const cell = document.getElementById(cellId!);
            const input = cell?.querySelector("input") as HTMLInputElement;
            return input?.value || 'NOT FOUND';
        }, qtyCellId);
        console.log(`✅ Filled ${denomination} with ${qty} — verified: ${verified}`);
        return true;
    }

    // ─── Submit & Validation ──────────────────────────────────────────────────

    async clickSubmit() {
        await newPage.locator(this.elements.submitButton).click();
        console.log("Clicked on Submit");
        await newPage.waitForTimeout(2000);
    }
// async approveconfirm(){
//     await expect(await newPage.locator(this.elements.successmsg).textContent()
//         ).toContain('Approval Confirmation');
//         console.log("Book transaction — confirm");
//         await newPage.locator('//*[@id="_oj234manualConfirmBtn_oj253|text"]').click()
// }
    async verifySuccessMessage() {
       
        await expect(
            await newPage.locator(this.elements.successmsg).textContent()
        ).toContain('Success');
        console.log("Book transaction — Success");
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
