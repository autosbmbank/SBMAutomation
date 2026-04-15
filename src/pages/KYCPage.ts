import { expect, Page, Frame } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let kycRefNo: string;

export default class KYCPage {
    private base: ReusableMethods;
    private _frame: Frame | null = null;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
        newTab:          "//span[@id='New_oj0|text']",
        enterQueryTab:   "//span[@id='EnterQuery_oj17|text']",
        executeQueryTab: "//span[@id='ExecuteQuery_oj18|text']",
        authorizeTab:    '//*[@id="Authorize_oj8|text"]',
        saveButton:      '//*[@id="BTN_OK_oj91|text"]',
        savecorpButton:  '//span[@id="BTN_OK_oj71|text"]',
        okBtn:           "//input[@id='BTN_OK']",
        acceptBtn:       "//span[@id='BTN_OK_oj16|text']",
        fullName:        "//input[@id='BLK_KYCMASTER__KYCDESC|input']",
        custtype:         '(//*[@id="BLK_KYCMASTER__KYCCUSTTYPE|input"])',
        risklevel:        '//*[@id="BLK_KYCMASTER__RISKLVL|input"]',
        kycRefNumber:    '[id="BLK_KYCMASTER__KYCREFNO|input"]',
        birthCountry:    '//input[@id="BLK_KYCRETAIL__BIRTH_COUNTRY|input"]',
        birthDate:       '//input[@id="BLK_KYCRETAIL__BRTHDT|input"]',
        birthPlace:      '//*[@id="BLK_KYCRETAIL__BRTHPLC|input"]',
        country:         '//*[@id="BLK_KYCRETAIL__LOCAL_ADDR_COUNTRY|input"]',
        corpcountry:     '//input[@id="BLK_CORPORT__PRNCOMPCNTRY|input"]',
        nationality:     '//*[@id="BLK_KYCRETAIL__NATIONLTY|input"]',
        exitButton:      '//*[@id="BTN_EXIT_IMG_oj43|text"]',
         okbtn:"//*[@id='BTN_OK_oj0|text']",
        successMessage: "//*[@id='ERRTBL:48_0']"
    }

    // ─── Private Frame Getter — Lazy Init with Cache ──────────────────────────

    private async getFrame(): Promise<Frame> {
        if (!this._frame || this._frame.isDetached()) {
            const handle = await this.page.waitForSelector(
                '//iframe[contains(@title, "KYC Maintenance")]',
                { timeout: 10000 }
            );
            this._frame = await handle.contentFrame();
            if (!this._frame) throw new Error("KYC iframe content could not be loaded");
        }
        return this._frame;
    }

    resetFrame() {
        this._frame = null;
    }

    // ─── Nested Frame Helpers ─────────────────────────────────────────────────

    private async getSubScreenFrame(): Promise<Frame> {
        const frame = await this.getFrame();
        // ✅ waitForSelector NEEDED — sub-screen appears conditionally after action
        const handle = await frame.waitForSelector(
            '//iframe[@id="ifrSubScreen"]', { timeout: 10000 }
        );
        return await handle.contentFrame();
    }

    private async getAuthorizeSubFrame(): Promise<Frame> {
        const frame = await this.getFrame();
       
        const handle = await frame.waitForSelector(
            'iframe[id="ifrSubScreen"]', { timeout: 10000 }
        );
        return await handle.contentFrame();
    }

   

    async clickNewTab() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.newTab);
        await frame.waitForSelector(this.Elements.fullName, { state: 'visible', timeout: 5000 });
    }

    async clickEnterQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.enterQueryTab);
        // ✅ NEEDED — wait for query fields to be ready
        await frame.waitForSelector(this.Elements.kycRefNumber, { state: 'visible', timeout: 15000 });
    }

    async clickExecuteQuery() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.executeQueryTab);
        // ✅ NEEDED — results take time to load after query
        await frame.waitForTimeout(4000);
    }

    async clickAuthorizeTab() {
        const frame = await this.getFrame();
        await frame.click(this.Elements.authorizeTab);
        await frame.waitForTimeout(2000);
    }

    // ─── Main Form Fields — No waitForSelector needed, fill/click auto-wait ───

    async enterFullName(fullName: string) {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.fullName).clear();
        await frame.locator(this.Elements.fullName).fill(fullName);
    }

    async selectKYCCustomerType(kycCustomerType: string) {
        const frame = await this.getFrame();
    await frame.locator(this.Elements.custtype).fill(kycCustomerType)
    await frame.locator(this.Elements.custtype).press('Enter')
    await frame.waitForTimeout(2000);
        // await frame.getByText(kycCustomerType, { exact: true }).first().click();
    }

    async selectRiskLevel(riskLevel: string) {
        const frame = await this.getFrame();
       await frame.locator(this.Elements.risklevel).fill(riskLevel)
    await frame.locator(this.Elements.risklevel).press('Enter')
    await frame.waitForTimeout(2000);
    }

    async selectRetailCustomerAtBottom(kycCustomerType: string) {
        const frame = await this.getFrame();
        await frame.getByText(kycCustomerType, { exact: true }).click();
    }

    // ─── Retail Customer Sub-form Fields ──────────────────────────────────────

    async enterBirthCountry(birthCountry: string) {
         const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.birthCountry).clear();
        await subFrame.locator(this.Elements.birthCountry).fill(birthCountry);
    }

    async enterBirthDate(birthDate: string) {
         const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.birthDate).clear();
        await subFrame.locator(this.Elements.birthDate).fill(birthDate);
    }

    async enterBirthPlace(birthPlace: string) {
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.birthPlace).clear();
        await subFrame.locator(this.Elements.birthPlace).fill(birthPlace);
    }

    async enterCountry(country: string) {
         const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.country).clear();
        await subFrame.locator(this.Elements.country).fill(country);
    }

    async enterNationality(nationality: string) {
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.nationality).clear();
        await subFrame.locator(this.Elements.nationality).fill(nationality);
         await subFrame.waitForTimeout(5000);
    }

    // ─── Save Actions ─────────────────────────────────────────────────────────

    async clickSaveInRetailTab() {
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.saveButton).click();
        
    }
    async enterCorpCountry(country:string) {
       const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.corpcountry).clear();
        await subFrame.locator(this.Elements.corpcountry).fill(country);  
    }
     async clickSaveInCorpTab() {
        const subFrame = await this.getSubScreenFrame();
        await subFrame.locator(this.Elements.savecorpButton).click();
        
    }
    async clickSaveInMainTab() {
        const frame = await this.getFrame();
      await frame.waitForSelector(this.Elements.kycRefNumber, { state: 'attached', timeout: 15000 });
    kycRefNo = await frame.locator(this.Elements.kycRefNumber).inputValue();
    console.log("KYC Reference Number captured: " + kycRefNo);
        await frame.locator('//span[@id="Save_oj7|text"]').click();

            }
     async verifySuccessMessage() {
        const frame = await this.getFrame();
                const frameElementHandle2 = await frame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
                        const successframe= await frameElementHandle2.contentFrame();
                         
                  const message= successframe.locator(this.Elements.successMessage)
                await expect(message).toHaveText('Record Successfully Saved');
                await successframe.click(this.Elements.okbtn)
            
                   
         }

    async clickOkOnSaveAlert() {
        try {
            // ✅ NEEDED — alert popup appears conditionally after save
            const subFrame = await this.getSubScreenFrame();
            await subFrame.locator(this.Elements.okBtn).click();
        } catch {
            // No alert popup — continue
        }
    }

    // ─── Query & Authorize ────────────────────────────────────────────────────

    async enterKYCReferenceNumber() {
        if (!kycRefNo) throw new Error("KYC Reference Number not captured — check Maker flow ran successfully");
        const frame = await this.getFrame();
        await frame.locator(this.Elements.kycRefNumber).clear();
        await frame.locator(this.Elements.kycRefNumber).fill(kycRefNo);
        console.log("Entering KYC Reference Number: " + kycRefNo);
    }

    async acceptAuthorizeAlert() {
       
            const authFrame = await this.getAuthorizeSubFrame();
            await authFrame.locator(this.Elements.acceptBtn).click();
            await this.page.waitForTimeout(2000);
       
    }
     async verifyauthSuccesssMessage() {
         const authFrame = await this.getAuthorizeSubFrame();
             const frameElementHandle2 = await authFrame.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 3000 });
                const successframe= await frameElementHandle2.contentFrame();
                 
          const message= successframe.locator(this.Elements.successMessage)
        await expect(message).toHaveText('Record Successfully Authorized');
        await successframe.click(this.Elements.okbtn)
                  
            }
        

    async exitKYCPage() {
        const frame = await this.getFrame();
        await frame.locator(this.Elements.exitButton).click();
        this.resetFrame();
    }
}
