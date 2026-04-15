import { expect, Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

// Module-level newPage — own instance for FCYDealPage
let newPage;
let pagePromise;

export default class FCYDealPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private elements = {
        // NextGen Navigation — same as RetailDepositPage
        proceedBtn:      '//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
        NextGenFrame:    '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        maintab:         "//span[normalize-space()='Teller']",

        // FCY screens
        purchaseFCYBtn:  "//span[contains(normalize-space(),'FX Purchase - Account')]",
        sellFCYBtn:      "//span[contains(normalize-space(),'FX Sale - Account')]",

        // Main form fields
        accountNumber:   "//input[@id='txnAcc|input']",
        saleaccountNumber:'(//input[@id="accNo|input"])[2]',
        boughtCurrency:  "//input[contains(@id,'currency') and contains(@id,'|input')]",
        boughtAmount:    "fsgbu-ob-cmn-fd-amount input[aria-required='true']:not([disabled]):not([readonly])",

        // Denomination
        denominationTab: "//span[normalize-space()='Denomination']",

        // Buttons
        submitButton:    "(//span[normalize-space()='Submit'])[1]",
        okButton:        "(//span[text()='Ok'])[1]",
        okSuccessBtn:    "//span[@data-bind='text: labels.okLbl']",
        yesBtn:          "//button[normalize-space()='Yes']",
        noBtn:           "//button[normalize-space()='No']",
        printBtn:        "//button[normalize-space()='Print'] | //span[normalize-space()='Print']",
        closeBtn:        "//button[normalize-space()='Close'] | //span[normalize-space()='Close']",
        successmsg:      "(//div[@class='oj-message-summary oj-message-title'])[1]",
        adviceconf: "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
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

        // Wait for new page
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
        } else {
            console.log("Proceed not found");
        }

        await newPage.waitForLoadState('networkidle').catch(() => {});
        await newPage.waitForTimeout(600);

        const currentURL = newPage.url();
        await newPage.goto(currentURL, { waitUntil: 'networkidle' });
        await newPage.waitForTimeout(5000);
    }

    // ─── Screen Navigation ────────────────────────────────────────────────────

    async searchFCYScreen(screenCode: string) {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);

        if (screenCode === '8207') {
            await newPage.locator(this.elements.purchaseFCYBtn).click();
            console.log("Clicked on Purchase FCY 8207");
        } else if (screenCode === '8206') {
            await newPage.locator(this.elements.sellFCYBtn).click();
            console.log("Clicked on Sell FCY 8206");
        } else {
            await newPage.getByText(screenCode, { exact: false }).first().click();
            console.log("Clicked on screen: " + screenCode);
        }
        await newPage.waitForTimeout(2000);
    }

   

    // ─── Main Form Fields ─────────────────────────────────────────────────────

    async enterAccountNumber(accountNumber: string) {
        await newPage.locator(this.elements.accountNumber).fill(accountNumber);
        await newPage.locator(this.elements.accountNumber).press('Tab');
        await newPage.waitForTimeout(1000);
        console.log("Entered Account Number:", accountNumber);
    }
async enterSaleAccountNumber(accountNumber: string) {
        await newPage.locator(this.elements.saleaccountNumber).fill(accountNumber);
        await newPage.locator(this.elements.saleaccountNumber).press('Tab');
        await newPage.waitForTimeout(1000);
        console.log("Entered Account Number:", accountNumber);
    }
    async selectBoughtCurrency(currency: string) {
        await newPage.locator('//*[@id="oj-select-choice-tfpm_ob_cmn_fd_currency"]/span/a').click()
      await newPage.locator(`//*[@aria-label="${currency}"]`).click();
     
    console.log("Selected currency:", currency);
    await newPage.waitForTimeout(500);
    //  await newPage.locator(this.elements.accountNumber).press('Tab');
    }

    async enterBoughtAmount(boughtAmount: string) {
      
         await newPage.locator(this.elements.boughtAmount).clear();
         await newPage.locator(this.elements.boughtAmount).fill(boughtAmount);
       
        await newPage.waitForTimeout(2000);
        console.log("Entered Bought Amount:", boughtAmount);
        await newPage.locator(this.elements.accountNumber).press('Tab');
    }
   async enterSoldtAmount(soldAmount: string) {
      await newPage.locator(this.elements.boughtAmount).clear();
         await newPage.locator(this.elements.boughtAmount).fill(soldAmount);
       
        await newPage.waitForTimeout(2000);
        console.log("Entered sold Amount:", soldAmount);
        // await newPage.locator(this.elements.accountNumber).press('Tab');
    }

    // ─── Denomination Section ─────────────────────────────────────────────────

  async expandDenomination() {
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
    await newPage.waitForTimeout(2000);
    console.log("Expanded Denomination section");
}

async enterDenominationUnitsFromBoughtAmount(boughtAmount: string) {
    const cleanAmount = parseFloat(boughtAmount.replace(/[^0-9.]/g, ''));
    console.log("Bought Amount for denomination:", cleanAmount);

    if (!cleanAmount || isNaN(cleanAmount)) {
        throw new Error(`Bought Amount is invalid — got: "${boughtAmount}"`);
    }

    // ✅ USD denominations — matches table on screen (100,50,20,10,5,2,1)
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

    console.log("Denomination plan:", unitsOrdered);
    console.log("Remaining after calculation:", remaining);

    for (const [denom, qty] of unitsOrdered) {
        if (qty > 0) {
            await this.fillSingleDenominationQty(denom, qty.toString());
            await newPage.waitForTimeout(1000);
        }
    }
}

private async fillSingleDenominationQty(denomination: string, qty: string) {
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
        for (const cell of allCells) {
            const title = cell.querySelector("oj-input-text")
                ?.getAttribute("title")?.trim();
            if (title === denom) {
                return cell.id.replace(/_0$/, '_1');
            }
        }
        return null;
    }, denomination);

    if (!qtyCellId) {
        console.log(`Denomination "${denomination}" not found — skipping`);
        return;
    }
    console.log(`Filling denomination ${denomination} → ${qtyCellId}`);

    const cellLocator = newPage.locator(`td[id="${qtyCellId}"]`);
    await cellLocator.scrollIntoViewIfNeeded();
    await cellLocator.click();
    await newPage.waitForTimeout(500);
    await cellLocator.dblclick();
    await newPage.waitForTimeout(2000);

    const inputLocator = cellLocator.locator("input").first();
    const isVisible = await inputLocator.isVisible().catch(() => false);
    console.log(`Input visible after dblclick: ${isVisible}`);

    if (isVisible) {
        // ✅ Playwright fill — preferred
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
    } else {
        // ✅ JS fallback — when input is not visible (hidden by Oracle JET)
        console.log("Input not visible — using JS fallback");
        await newPage.evaluate(({ cellId, value }) => {
            const cell = document.getElementById(cellId!);
            const input = cell?.querySelector("input") as HTMLInputElement;
            if (!input) throw new Error(`No input in cell ${cellId}`);
            input.removeAttribute('readonly');
            input.focus();
            input.value = value;
            input.dispatchEvent(new Event('input',  { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            input.dispatchEvent(new Event('blur',   { bubbles: true }));
        }, { cellId: qtyCellId, value: qty });
        await newPage.keyboard.press('Tab');
    }

    await newPage.waitForTimeout(2000);

    const verified = await newPage.evaluate((cellId) => {
        const cell = document.getElementById(cellId!);
        const input = cell?.querySelector("input") as HTMLInputElement;
        return input?.value || 'NOT FOUND';
    }, qtyCellId);
    console.log(`✅ Filled ${denomination} with ${qty} — verified: ${verified}`);
}
    // ─── Submit & Confirmations ───────────────────────────────────────────────

    async clickSubmitAndOk() {
        await newPage.locator(this.elements.submitButton).click();
        console.log("Clicked on Submit");
        await newPage.waitForTimeout(2000);
         await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
            console.log('Successfully Saved')
            await newPage.locator(this.elements.okButton).click()
            await newPage.locator(this.elements.adviceconf).click()
          

        // try {
        //     await newPage.locator(this.elements.okSuccessBtn).click();
        //     console.log("Clicked Ok after Submit");
        // } catch {
        //     await newPage.locator(this.elements.okButton).click();
        //     console.log("Clicked Ok (fallback) after Submit");
        // }
        // await newPage.waitForTimeout(1000);
    }

    async clickYesInAdviceConfirmation() {
        try {
            await newPage.getByRole('button', { name: 'Yes' }).click();
            console.log("Clicked Yes in Advice Confirmation");
        } catch {
            await newPage.locator(this.elements.yesBtn).click();
            console.log("Clicked Yes in Advice Confirmation (fallback)");
        }
        await newPage.waitForTimeout(1000);
    }

    // ─── Print Actions ────────────────────────────────────────────────────────

    async clickPrintButton() {
        await newPage.locator(this.elements.printBtn).first().click();
        console.log("Clicked on Print button");
        await newPage.waitForTimeout(2000);
    }

    async saveFileWithName(fileName: string) {
        try {
            await newPage.waitForTimeout(2000);
            await newPage.keyboard.type(fileName);
            await newPage.keyboard.press('Enter');
            console.log("Saved file with name:", fileName);
        } catch (error) {
            console.log("File save dialog:", error.message);
        }
    }

    async clickCloseButton() {
        await newPage.locator(this.elements.closeBtn).first().click();
        console.log("Clicked on Close button");
        await newPage.waitForTimeout(1000);
    }

    async clickNoInStayOnSameScreen() {
        try {
            await newPage.getByRole('button', { name: 'No' }).click();
            console.log("Clicked No in Stay on Same Screen popup");
        } catch {
            await newPage.locator(this.elements.noBtn).click();
            console.log("Clicked No (fallback)");
        }
        await newPage.waitForTimeout(1000);
    }
}
