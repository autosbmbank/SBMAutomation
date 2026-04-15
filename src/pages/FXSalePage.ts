import { expect, Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

// Module-level newPage — own instance for FXSaleWalkinPage
let newPage;
let pagePromise;

export default class FXSaleWalkinPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private elements = {
        // NextGen Navigation — same pattern as RetailDepositPage
        proceedBtn:       '//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
        NextGenFrame:     '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        maintab:          "//span[normalize-space()='Teller']",

        // FX Sale Walk-in screen button
        fxSaleWalkinBtn:  "//span[contains(normalize-space(),'FX Sale - Walk-in')]",

        // Main form fields
        boughtCurrencyDropdown: '//*[@id="oj-select-choice-tfpm_ob_cmn_fd_currency"]/span/a',
        boughtAmount:     "fsgbu-ob-cmn-fd-amount input[aria-required='true']:not([disabled]):not([readonly])",
        currencyPaidDropdown: "//a[contains(@id,'currency-paid') and @aria-label='expand'] | //*[contains(@id,'currencyPaid')]/span/a",
        beneficiaryName:  '//input[@id="beneficiaryName|input"]',

        // Denomination section headers
        fxInDenomination:  "//span[normalize-space()='FX In Denomination Details'] | //span[contains(normalize-space(),'FX In')]",
        fxOutDenomination: "//span[normalize-space()='FX Out Denomination Details'] | //span[contains(normalize-space(),'FX Out')]",

        // Amount Received field
        amountReceived:   "fsgbu-ob-cmn-fd-amount input[readonly]:not([disabled])" +
                          " | //input[contains(@id,'amountReceived') and contains(@id,'|input')]",

        // Submit and success
        submitButton:     "(//span[normalize-space()='Submit'])[1]",
        okButton:         "(//span[text()='Ok'])[1]",
        okSuccessBtn:     "//span[@data-bind='text: labels.okLbl']",
        successmsg:       "(//div[@class='oj-message-summary oj-message-title'])[1]",
    }

    // ─── NextGen Fun — own copy same as RetailDepositPage ────────────────────

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

    async searchFXSaleScreen() {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);
        await newPage.locator(this.elements.fxSaleWalkinBtn).last().click();
        console.log("Clicked on FX Sale Walk-in screen");
        await newPage.waitForTimeout(2000);
    }

    // ─── Main Form Fields ─────────────────────────────────────────────────────

    async selectSoldCurrency(currency: string) {
        // Click dropdown trigger then select by aria-label
        await newPage.locator(this.elements.boughtCurrencyDropdown).click();
        await newPage.waitForTimeout(500);
        try {
            await newPage.locator(`//*[@aria-label="${currency}"]`).click();
        } catch {
            // Fallback — type in search field
            await newPage.locator("input[id*='lov-search']").fill(currency);
            await newPage.waitForTimeout(500);
            await newPage.locator(`//*[@aria-label="${currency}"]`).click();
        }
        console.log("Selected Bought Currency:", currency);
        await newPage.waitForTimeout(500);
    }

    async enterSoldAmount(boughtAmount: string) {
        // ✅ Stable — only input with aria-required=true, not disabled, not readonly
        await newPage.locator(this.elements.boughtAmount).fill(boughtAmount);
        await newPage.locator(this.elements.boughtAmount).press('Tab');
        await newPage.waitForTimeout(3000);
        console.log("Entered Bought Amount:", boughtAmount);
    }

    async selectCurrencyPaid(currencyPaid: string) {
      const visibleLovInput = newPage.locator(
        "input[id*='lov-search'][id*='|input']"
    ).filter({ visible: true });
    
    await visibleLovInput.fill(currencyPaid);
    await visibleLovInput.press('Tab');
    await newPage.waitForTimeout(1000);
    console.log("Selected Currency Received:", currencyPaid);
   
    }

    async enterBeneficiaryName(beneficiaryName: string) {
        await newPage.locator(this.elements.beneficiaryName).fill(beneficiaryName);
        await newPage.locator(this.elements.beneficiaryName).press('Tab');
        await newPage.waitForTimeout(500);
        console.log("Entered Beneficiary Name:", beneficiaryName);
    }

    // ─── FX In Denomination ───────────────────────────────────────────────────

    async expandFXInDenomination() {
        await newPage.locator(this.elements.fxInDenomination).click();
        await newPage.waitForTimeout(1000);
        console.log("Expanded FX In Denomination Details");
    }

   async fillFXInDenominationFromAmountReceived() {
        // ✅ Read Amount Received — visible + disabled + KES value != 0
        const amountText = await newPage.evaluate(() => {
            const inputs = Array.from(
                document.querySelectorAll("fsgbu-ob-cmn-fd-amount input")
            ) as HTMLInputElement[];
            const receivedInput = inputs.find(
                el => el.disabled &&
                      el.offsetParent !== null &&
                      el.value.includes('KES') &&
                      el.value !== 'KES 0.00'
            );
            return receivedInput?.value || '';
        });

        console.log("Amount Received raw:", amountText);
        const cleanAmount = parseFloat(amountText.replace(/[^0-9.]/g, ''));
        console.log("Amount Received cleaned:", cleanAmount);

        if (!cleanAmount || isNaN(cleanAmount)) {
            throw new Error(`Amount Received is 0 or invalid — got: "${amountText}"`);
        }

        // ✅ Calculate in descending order — use array of pairs to preserve order
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

        // ✅ Fill in correct descending order with wait between each
        for (const [denom, qty] of unitsOrdered) {
            if (qty > 0) {
                await this.fillFXInDenominationQty(denom, qty.toString());
                await newPage.waitForTimeout(1000);
            }
        }
    }



    private async fillFXInDenominationQty(denomination: string, qty: string) {
    // Step 1 — Find the _1 cell id
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
                        return cell.id.replace(/_0$/, '_1');
                    }
                }
            }
        }
        return null;
    }, denomination);

    if (!qtyCellId) {
        console.log(`FX In denomination "${denomination}" not found — skipping`);
        return;
    }
    console.log(`FX In — filling ${denomination} → ${qtyCellId}`);

    // Step 2 — Use Playwright locator to click (not JS evaluate)
    const cellLocator = newPage.locator(`td[id="${qtyCellId}"]`);
    await cellLocator.scrollIntoViewIfNeeded();
    await cellLocator.click();
    await newPage.waitForTimeout(500);
    await cellLocator.dblclick();
    await newPage.waitForTimeout(2000);

    // Step 3 — Find input inside cell using Playwright locator
    const inputLocator = cellLocator.locator("input").first();
    
    // Step 4 — Check if input appeared
    const isVisible = await inputLocator.isVisible().catch(() => false);
    console.log(`Input visible after dblclick: ${isVisible}`);

    if (!isVisible) {
        // Retry dblclick
        console.log("Input not visible — retrying dblclick");
        await cellLocator.dblclick();
        await newPage.waitForTimeout(2000);
    }

    // Step 5 — Fill using Playwright (not evaluate)
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

    // Step 6 — Verify
    const verified = await newPage.evaluate((cellId) => {
        const cell = document.getElementById(cellId!);
        const input = cell?.querySelector("input") as HTMLInputElement;
        return input?.value || 'NOT FOUND';
    }, qtyCellId);
    console.log(`✅ Filled FX In ${denomination} with ${qty} — cell value: ${verified}`);
}
    // // ✅ Scoped to _oj229 — FX In KES table only
    // private async fillFXInDenominationQty(denomination: string, qty: string) {
    //     const qtyCellId = await newPage.evaluate((denom) => {
    //         // ✅ Only look in _oj229 table — FX In KES denominations
    //         const cells = Array.from(
    //             document.querySelectorAll("td[id*='_oj229'][id*='tablegrid-table'][id$='_0']")
    //         );
    //         for (const cell of cells) {
    //             const ojInput = cell.querySelector("oj-input-text");
    //             const title = ojInput?.getAttribute("title")?.trim();
    //             if (title === denom) {
    //                 return cell.id.replace(/_0$/, '_1');
    //             }
    //         }
    //         return null;
    //     }, denomination);

    //     if (!qtyCellId) {
    //         console.log(`FX In denomination "${denomination}" not found in _oj229 table — skipping`);
    //         return;
    //     }
    //     console.log(`FX In — filling denomination ${denomination} → cell: ${qtyCellId}`);

    //     await newPage.evaluate((cellId) => {
    //         const cell = document.getElementById(cellId!);
    //         if (!cell) throw new Error(`Cell not found: ${cellId}`);
    //         cell.dispatchEvent(new MouseEvent('click',   { bubbles: true, cancelable: true }));
    //         cell.dispatchEvent(new MouseEvent('dblclick',{ bubbles: true, cancelable: true }));
    //     }, qtyCellId);

    //     await newPage.waitForTimeout(1500);

    //     await newPage.evaluate(({ cellId, value }) => {
    //         const cell = document.getElementById(cellId!);
    //         const input = (cell?.querySelector("input[id*='unitbills']")
    //                     || cell?.querySelector("input")) as HTMLInputElement;
    //         if (!input) throw new Error(`No input found in cell ${cellId}`);
    //         input.removeAttribute('readonly');
    //         input.focus();
    //         input.value = value;
    //         input.dispatchEvent(new Event('input',  { bubbles: true }));
    //         input.dispatchEvent(new Event('change', { bubbles: true }));
    //     }, { cellId: qtyCellId, value: qty });

    //     await newPage.keyboard.press('Tab');
    //     await newPage.waitForTimeout(500);
    //     console.log(`✅ Filled FX In denomination ${denomination} with ${qty} units`);
    // }

    // ─── FX Out Denomination ──────────────────────────────────────────────────

    async expandFXOutDenomination() {
        await newPage.locator(this.elements.fxOutDenomination).click();
        await newPage.waitForTimeout(1000);
        console.log("Expanded FX Out Denomination Details");
    }

   async enterFXOutDenominationUnits(boughtAmount: string) {
    const cleanAmount = parseFloat(boughtAmount.replace(/[^0-9.]/g, ''));
    console.log("FX Out Bought Amount:", cleanAmount);
 
    if (!cleanAmount || isNaN(cleanAmount)) {
        throw new Error(`Bought Amount is invalid — got: "${boughtAmount}"`);
    }
 
    // ✅ USD denominations (100,50,20,10,5,2,1)
    const denominations = [100, 50, 20, 10, 5, 2, 1];
    let remaining = cleanAmount;
    const unitsOrdered: Array<[string, number]> = [];
 
    for (const denom of denominations) {
        if (remaining >= denom) {
            const qty = Math.floor(remaining / denom);
            unitsOrdered.push([denom.toString(), qty]);
            remaining = parseFloat((remaining % denom).toFixed(2));
        }
    }
 
    console.log("FX Out denomination plan:", unitsOrdered);
    console.log("Remaining after calculation:", remaining);
 
    for (const [denom, qty] of unitsOrdered) {
        if (qty > 0) {
            await this.fillFXOutSingleDenomination(denom, qty.toString());
            await newPage.waitForTimeout(1000);
        }
    }
}
 
// ✅ Playwright locator pattern — same working approach as fillFXInDenominationQty
private async fillFXOutSingleDenomination(denomination: string, qty: string): Promise<boolean> {
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
        // ✅ FX Out USD table — has "100" but NOT "1000"
        for (const prefix in tableGroups) {
            const cells = tableGroups[prefix];
            const titles = cells.map(c =>
                c.querySelector("oj-input-text")?.getAttribute("title") || ''
            );
            if (titles.includes("100") && !titles.includes("1000")) {
                for (const cell of cells) {
                    const title = cell.querySelector("oj-input-text")
                        ?.getAttribute("title")?.trim();
                    if (title === denom) {
                        // ✅ Scroll into view before returning
                        (cell as HTMLElement).scrollIntoView({ block: 'center' });
                        return cell.id.replace(/_0$/, '_1');
                    }
                }
            }
        }
        return null;
    }, denomination);

    if (!qtyCellId) {
        console.log(`FX Out denomination "${denomination}" not found — skipping`);
        return false;
    }
    console.log(`FX Out — filling ${denomination} → ${qtyCellId}`);

    // ✅ Extra wait after scroll for 20 denomination
    await newPage.waitForTimeout(1000);

    const cellLocator = newPage.locator(`td[id="${qtyCellId}"]`);
    await cellLocator.scrollIntoViewIfNeeded();

    // ✅ Single click first to select row
    await cellLocator.click();
    await newPage.waitForTimeout(1000); // ✅ Longer wait for 20 row

    // ✅ Double click to enter edit mode
    await cellLocator.dblclick();
    await newPage.waitForTimeout(2000);

    const inputLocator = cellLocator.locator("input").first();
    let isVisible = await inputLocator.isVisible().catch(() => false);
    console.log(`Input visible after dblclick for ${denomination}: ${isVisible}`);

    // ✅ Retry up to 3 times for stubborn rows like 20
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
        console.log(`❌ Input still not visible for ${denomination} after ${retries} retries — skipping`);
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

    // ✅ Click body to commit Oracle JET value
    await newPage.locator("body").click({ position: { x: 100, y: 100 } });
    await newPage.waitForTimeout(1000);

    const verified = await newPage.evaluate((cellId) => {
        const cell = document.getElementById(cellId!);
        const input = cell?.querySelector("input") as HTMLInputElement;
        return input?.value || 'NOT FOUND';
    }, qtyCellId);
    console.log(`✅ Filled FX Out ${denomination} with ${qty} — verified: ${verified}`);
    return true;
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
        console.log("FX Sale Walk-in — Success");
        try {
            await newPage.locator(this.elements.okSuccessBtn).click();
        } catch {
            await newPage.locator(this.elements.okButton).click();
        }
    }



    async searchFXPurchaseScreen() {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);
        // FX Purchase Walk-in screen
        await newPage.locator(
            "//span[contains(normalize-space(),'FX Purchase') and contains(normalize-space(),'Walk-in')]"
        ).last().click();
        console.log("Clicked on FX Purchase Walk-in screen");
        await newPage.waitForTimeout(2000);
    }

   async fillFXInDenominationFromBoughtAmount(boughtAmount: string) {
    const cleanAmount = parseFloat(boughtAmount.replace(/[^0-9.]/g, ''));
    console.log("Bought Amount for FX In:", cleanAmount);

    if (!cleanAmount || isNaN(cleanAmount)) {
        throw new Error(`Bought Amount is invalid — got: "${boughtAmount}"`);
    }

    // ✅ USD denominations for FX Purchase FX In
    const denominations = [100, 50, 20, 10, 5, 2, 1];
    let remaining = cleanAmount;
    const unitsOrdered: Array<[string, number]> = [];

    for (const denom of denominations) {
        if (remaining >= denom) {
            const qty = Math.floor(remaining / denom);
            unitsOrdered.push([denom.toString(), qty]);
            remaining = parseFloat((remaining % denom).toFixed(2));
        }
    }

    console.log("FX In denomination plan:", unitsOrdered);
    console.log("Remaining after calculation:", remaining);

    for (const [denom, qty] of unitsOrdered) {
        if (qty > 0) {
            // ✅ Call fillFXInDenominationQtyForUSD — NOT fillFXOutDenominationQty
            await this.fillFXInDenominationQtyForUSD(denom, qty.toString());
            await newPage.waitForTimeout(1000);
        }
    }
}

private async fillFXInDenominationQtyForUSD(denomination: string, qty: string) {
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
        // ✅ FX In USD table — has "100" but NOT "1000"
        for (const prefix in tableGroups) {
            const cells = tableGroups[prefix];
            const titles = cells.map(c =>
                c.querySelector("oj-input-text")?.getAttribute("title") || ''
            );
            if (titles.includes("100") && !titles.includes("1000")) {
                for (const cell of cells) {
                    const title = cell.querySelector("oj-input-text")
                        ?.getAttribute("title")?.trim();
                    if (title === denom) {
                        return cell.id.replace(/_0$/, '_1');
                    }
                }
            }
        }
        return null;
    }, denomination);

    if (!qtyCellId) {
        console.log(`FX In USD denomination "${denomination}" not found — skipping`);
        return;
    }
    console.log(`FX In USD — filling ${denomination} → ${qtyCellId}`);

    // ✅ Playwright locator — same working pattern
    const cellLocator = newPage.locator(`td[id="${qtyCellId}"]`);
    await cellLocator.scrollIntoViewIfNeeded();
    await cellLocator.click();
    await newPage.waitForTimeout(500);
    await cellLocator.dblclick();
    await newPage.waitForTimeout(2000);

    const inputLocator = cellLocator.locator("input").first();
    const isVisible = await inputLocator.isVisible().catch(() => false);

    if (!isVisible) {
        console.log("Input not visible — retrying dblclick");
        await cellLocator.dblclick();
        await newPage.waitForTimeout(2000);
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

    const verified = await newPage.evaluate((cellId) => {
        const cell = document.getElementById(cellId!);
        const input = cell?.querySelector("input") as HTMLInputElement;
        return input?.value || 'NOT FOUND';
    }, qtyCellId);
    console.log(`✅ Filled FX In USD ${denomination} with ${qty} — verified: ${verified}`);
}

async fillFXOutDenominationFromAmountPaid() {
 await newPage.waitForTimeout(2000);

    const amountText = await newPage.evaluate(() => {
        const inputs = Array.from(
            document.querySelectorAll("fsgbu-ob-cmn-fd-amount input")
        ) as HTMLInputElement[];

        // ✅ First visible + disabled + KES non-zero value = Amount Paid
        const amountPaidInput = inputs.find(
            el => el.disabled &&
                  el.offsetParent !== null &&
                  el.value.includes('KES') &&
                  el.value !== 'KES 0.00' &&
                  parseFloat(el.value.replace(/[^0-9.]/g, '')) > 0
        );
        return amountPaidInput?.value || '';
    });

    console.log("Amount Paid raw:", amountText);
    const cleanAmount = parseFloat(amountText.replace(/[^0-9.]/g, ''));
    console.log("Amount Paid cleaned:", cleanAmount);

    if (!cleanAmount || isNaN(cleanAmount)) {
        throw new Error(`Amount Paid is 0 or invalid — got: "${amountText}"`);
    }

    // ✅ KES denominations
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

    console.log("FX Out KES denomination plan:", unitsOrdered);
    console.log("Remaining after calculation:", remaining);

    for (const [denom, qty] of unitsOrdered) {
        if (qty > 0) {
            await this.fillFXOutKESDenominationQty(denom, qty.toString());
            await newPage.waitForTimeout(1000);
        }
    }
}
// ✅ FX Out KES table — has "1000"
private async fillFXOutKESDenominationQty(denomination: string, qty: string) {
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
        // ✅ FX Out KES table — has "1000"
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
                        return cell.id.replace(/_0$/, '_1');
                    }
                }
            }
        }
        return null;
    }, denomination);

    if (!qtyCellId) {
        console.log(`FX Out KES denomination "${denomination}" not found — skipping`);
        return;
    }
    console.log(`FX Out KES — filling ${denomination} → ${qtyCellId}`);

    // ✅ Playwright locator — same working pattern
    const cellLocator = newPage.locator(`td[id="${qtyCellId}"]`);
    await cellLocator.scrollIntoViewIfNeeded();
    await cellLocator.click();
    await newPage.waitForTimeout(500);
    await cellLocator.dblclick();
    await newPage.waitForTimeout(2000);

    const inputLocator = cellLocator.locator("input").first();
    const isVisible = await inputLocator.isVisible().catch(() => false);

    if (!isVisible) {
        console.log("Input not visible — retrying dblclick");
        await cellLocator.dblclick();
        await newPage.waitForTimeout(2000);
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

    const verified = await newPage.evaluate((cellId) => {
        const cell = document.getElementById(cellId!);
        const input = cell?.querySelector("input") as HTMLInputElement;
        return input?.value || 'NOT FOUND';
    }, qtyCellId);
    console.log(`✅ Filled FX Out KES ${denomination} with ${qty} — verified: ${verified}`);
}
}
