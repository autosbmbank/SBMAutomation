import { expect, Page } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";


let newPage;
let pagePromise;

export default class BranchOperationsPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private elements = {
        
        proceedBtn:     '//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
        NextGenFrame:   '//iframe[contains(@title, "Next Gen UI Dashboard")]',
        maintab:        "//span[normalize-space()='Teller']",

        
        openVaultBtn:        "//span[contains(normalize-space(),'Open Vault Batch')]",
        closeVaultBtn:       "//span[contains(normalize-space(),'Close Vault Batch')]",
        openTillBtn:         "//span[contains(normalize-space(),'Current Open Tills')]",
        sellCashToVaultBtn:  "//span[contains(normalize-space(),'Sell Cash to Vault')]",
        buyCashFromVaultBtn: "//span[contains(normalize-space(),'Buy Cash from Vault')]",

       
        totalCash:      '//*[@id="_oj221-input-text|input"]',
        amount:         "fsgbu-ob-cmn-fd-amount input[aria-required='true']:not([disabled]):not([readonly])",

       
        submitButton:   "(//span[normalize-space()='Submit'])[1]",
        okButton:       "(//span[text()='Ok'])[1]",
        okSuccessBtn:   "//span[@data-bind='text: labels.okLbl']",
        successmsg:     "(//div[@class='oj-message-summary oj-message-title'])[1]",
        adviceconf:     "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
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
        await newPage.waitForFunction(
            () => document.body && document.body.innerText.length > 50
        );

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

   

    async searchScreen(screenName: string) {
        await newPage.locator(this.elements.maintab).click();
        console.log("Clicked on Teller tab");
        await newPage.waitForTimeout(1000);

        if (screenName === 'Open Vault Batch') {
            await newPage.locator(this.elements.openVaultBtn).click();
            console.log("Clicked on Open Vault Batch");
        } else if (screenName === 'Close Vault Batch') {
            await newPage.locator(this.elements.closeVaultBtn).click();
            console.log("Clicked on Close Vault Batch");
        } else if (screenName === 'Curret Open Tills') {
            await newPage.locator(this.elements.openTillBtn).click();
            console.log("Clicked on Curret Open Tills");
        } else if (screenName === 'Sell cash to Vault') {
            await newPage.locator(this.elements.sellCashToVaultBtn).click();
            console.log("Clicked on Sell cash to Vault");
        } else if (screenName === 'Buy cash from Vault') {
            await newPage.locator(this.elements.buyCashFromVaultBtn).click();
            console.log("Clicked on Buy cash from Vault");
        } else {
           
            await newPage.locator(
                `//span[contains(normalize-space(),'${screenName}')]`
            ).last().click();
            console.log("Clicked on screen:", screenName);
        }
        await newPage.waitForTimeout(2000);
    }

   
    async selectCurrencyCode(currencyCode: string) {
        await newPage.locator(
            '//*[@id="oj-select-choice-tfpm_ob_cmn_fd_currency"]/span/a'
        ).click();
        await newPage.locator(`//*[@aria-label="${currencyCode}"]`).click();
        console.log("Selected currency:", currencyCode);
        await newPage.waitForTimeout(500);
    }

    async enterTotalRequiredCash(totalCash: string) {
       
        try {
            await newPage.locator(this.elements.totalCash).fill(totalCash);
            await newPage.locator(this.elements.totalCash).press('Tab');
        } catch {
           
            await newPage.locator(this.elements.amount).clear();
            await newPage.locator(this.elements.amount).fill(totalCash);
            await newPage.locator(this.elements.amount).press('Tab');
        }
        await newPage.waitForTimeout(2000);
        console.log("Entered Total Required Cash:", totalCash);
    }

    async enterAmount(amount: string) {
        await newPage.locator(this.elements.amount).clear();
        await newPage.locator(this.elements.amount).fill(amount);
        await newPage.locator(this.elements.amount).press('Tab');
        await newPage.waitForTimeout(2000);
        console.log("Entered Amount:", amount);
    }

   

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
        await newPage.waitForTimeout(5000);
        console.log("Expanded Denomination section");
    }

    async fillDenominationFromAmount(amount: string) {
        const cleanAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
        console.log("Amount for denomination:", cleanAmount);

        if (!cleanAmount || isNaN(cleanAmount)) {
            throw new Error(`Amount is invalid — got: "${amount}"`);
        }

        
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

    
    private async fillSingleDenominationQty(
        denomination: string, qty: string
    ): Promise<boolean> {
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
                            (cell as HTMLElement).scrollIntoView({ block: 'center' });
                            return cell.id.replace(/_0$/, '_1');
                        }
                    }
                }
            }
           
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
            console.log(
                `❌ Skipping ${denomination} — input not visible after ${retries} retries`
            );
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

   

    async clickSubmit() {
        await newPage.locator(this.elements.submitButton).click();
        console.log("Clicked on Submit");
        await newPage.waitForTimeout(2000);
    }

    async verifySuccessMessage() {
        
        await newPage.getByRole('button', { name: 'Confirm' }).click();
        await newPage.getByRole('button', { name: 'Submit For Approval' }).click();
        console.log("Clicked on Submit For Approval");
        await newPage.waitForTimeout(2000);

        await expect(
            await newPage.locator(this.elements.successmsg).textContent()
        ).toContain('Approval');
        console.log("Branch Operation — sent for Approval");
        await newPage.locator(this.elements.okButton).click();
        await newPage.getByRole('button', { name: 'No' }).click();
    }
}
