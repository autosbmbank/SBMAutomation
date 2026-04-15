import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
let frame,NewPage,pagePromise;
export default class InterbankFundPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

     private Elements = {
            NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
           ProceedBtn:'//span[normalize-space()="Proceed"]/ancestor::*[self::button or self::a or @role="button" or self::input]',
           Screen : '//*[@id="searchHeaderMenuItem|input"]',
           downtab : '//*[@id="oj-listbox-results-searchHeaderMenuItem"]/li',
           debitacc : '//*[@id="txnAcc|input"]',
           Amount : '//*[@id="_oj210-input-text|input"]',
           creditacc : '//*[@id="toAccountNumber|input"]',
           submit : '//*[@id="wiz-custom-footer-next_oj167|text"]',
           ok : '//*[@id="_oj221|text"]',
           No : '//*[@id="_oj186|text"]',
           noOptn : '//*[@id="_oj188|text"]',
     }

     async NextgenFrame() {
    await this.base.jsClick('//*[@id="DBoardNextGenUI"]/span/span');
    console.log("Clicked on NextGen UI Dashboard");
   
       
    try {
        const frameElementHandle = await this.page.waitForSelector(this.Elements.NextGenFrame, { timeout: 40000 });
       const nextgenframe = await frameElementHandle.contentFrame();
        console.log("Switched to NextGen UI Dashboard Frame");
       
       
        pagePromise = this.page.context().waitForEvent('page');
       
        await nextgenframe.getByText("Retail Operations").click();
        console.log("Clicked on Retail Operations");
       
    } catch (error) {
        console.log("Frame not found:", error.message);
        throw error; // Re-throw if you want to stop execution
    }
   
    // Wait for the new page to open
    try {
       NewPage = await pagePromise;
     
     } catch {
       NewPage = this.page;
     }
     await NewPage.bringToFront().catch(() => {});
     await NewPage.waitForFunction(() => document.body && document.body.innerText.length > 50);
    const proceed = NewPage.locator(this.Elements.ProceedBtn).first();
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
     await NewPage.waitForLoadState('networkidle').catch(() => {});
     await NewPage.waitForTimeout(600);
     
   const currentURL = NewPage.url();
   await NewPage.goto(currentURL, { waitUntil: 'networkidle' });
   await NewPage.waitForTimeout(20000);
  }

  async enterscreen(screen){
    await NewPage.locator(this.Elements.Screen).fill(screen)
  }

  async clickdowntab(){
    await NewPage.locator(this.Elements.downtab).click()
  }
  async enterdebtaccount(accnum){
    await NewPage.locator(this.Elements.debitacc).fill(accnum)
  }

  async enteramount(amount){
    await NewPage.locator(this.Elements.Amount).fill(amount)
  }

  async entercreditaccount(credaccnum){
    await NewPage.locator(this.Elements.creditacc).fill(credaccnum)
  }

  async clicksubmit(){
    await NewPage.locator(this.Elements.submit).click()
    await NewPage.waitForTimeout(2000);
  }

  async clickok(){
    // await NewPage.locator(this.Elements.ok).click()
    await NewPage.getByRole('button', { name: 'OK' }).click()
    console.log("Clicked on ok button")
    await NewPage.waitForTimeout(2000);
  }

  async clickNO(){
    await NewPage.locator(this.Elements.No).click()
  }

  async clickNOoptn(){
    await NewPage.locator(this.Elements.noOptn).click()
  }
    }