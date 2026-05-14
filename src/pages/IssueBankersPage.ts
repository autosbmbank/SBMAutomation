import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,IssuePage,PAGEPromise;
export default class IssueBankersPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
            NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
           ProceedBtn:'//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
           Screen : '//*[@id="searchHeaderMenuItem|input"]',
           downtab : '//*[@id="oj-listbox-results-searchHeaderMenuItem"]/li',
           payeename : '//*[@id="payeeName|input"]',
           amount : '//*[@id="_oj327-input-text|input"]',
           Number : '//*[@id="instrNo|input"]',
           Funding : '//*[@id="oj-collapsible-user-collapsible-currencyfsgbu-ob-remo-srv-ds-dd-bc-issuance-walkin-header"]/span',
           drawername : '//*[@id="drawerName|input"]',
           denomination : '//*[@id="oj-collapsible-user-collapsible-currencyfsgbu-ob-remo-srv-ds-denomination-header"]/span',
           units : '',
           submit : "(//span[normalize-space()='Submit'])[1]",
     }
    
    async NextgenFrame() {
        await this.base.jsClick('//*[@id="DBoardNextGenUI"]/span/span');
        console.log("Clicked on NextGen UI Dashboard");
       
           
        try {
            const frameElementHandle = await this.page.waitForSelector(this.Elements.NextGenFrame, { timeout: 40000 });
           const nextgenframe = await frameElementHandle.contentFrame();
            console.log("Switched to NextGen UI Dashboard Frame");
           
           
            PAGEPromise = this.page.context().waitForEvent('page');
           
            await nextgenframe.getByText("Retail Operations").click();
            console.log("Clicked on Retail Operations");
           
        } catch (error) {
            console.log("Frame not found:", error.message);
            throw error; // Re-throw if you want to stop execution
        }
       
        // Wait for the new page to open
        try {
           IssuePage = await PAGEPromise;
         
         } catch {
           IssuePage = this.page;
         }
         await IssuePage.bringToFront().catch(() => {});
         await IssuePage.waitForFunction(() => document.body && document.body.innerText.length > 50);
        const proceed = IssuePage.locator(this.Elements.ProceedBtn).first();
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
         await IssuePage.waitForLoadState('networkidle').catch(() => {});
         await IssuePage.waitForTimeout(600);
         
       const currentURL = IssuePage.url();
       await IssuePage.goto(currentURL, { waitUntil: 'networkidle' });
       await IssuePage.waitForTimeout(20000);
      }

    async enterscreen(screen){
      await IssuePage.locator(this.Elements.Screen).fill(screen)
    }
    async clickdowntab(){
      await IssuePage.locator(this.Elements.downtab).click()
    }
    async enterpayeename(name){
      const field = IssuePage.locator(this.Elements.payeename);
    // await NewPage.locator(this.Elements.debitacc)
    await field.waitFor({ state: 'visible' });
    await field.fill(name);

    }
    async enterBCAmount(amount){
      const field = IssuePage.locator(this.Elements.amount);
    await field.waitFor({ state: 'visible' });
    await field.fill(amount)

    }
    async enternumber(BCnum){
      const field = IssuePage.locator(this.Elements.Number);
    await field.waitFor({ state: 'visible' });
    await field.fill(BCnum)

    }
    async clickfundingdeatils(){
      await IssuePage.locator(this.Elements.Funding).click()

    }
    async enterdrawername(drawname){
      const field = IssuePage.locator(this.Elements.drawername);
    await field.waitFor({ state: 'visible' });
    await field.fill(drawname)

    }
    async clickdenomination(){
      await IssuePage.locator(this.Elements.denomination).click()

    }
    async enterunits(units){
      const field = IssuePage.locator(this.Elements.units);
    await field.waitFor({ state: 'visible' });
    await field.fill(units)

    }
    async clicksubmit(){
      await IssuePage.locator(this.Elements.submit).click()

    }
    }