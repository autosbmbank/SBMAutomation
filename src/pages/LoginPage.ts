

import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";

let signoffframe;
export default class LoginPage {

    private base: ReusableMethods;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
         userName: "//input[@name='USERID']",
        password: "//input[@name='user_pwd']",
        loginBtn: "//oj-button[@name='submit']",
        okBtn: "(//input[@id='BTN_OK'])[1]",
        newPassword: "//input[@id='newpwd']",
        exitBtn: "//input[@name='BTN_EXIT']",
        selectBtn:"//span[@id='ui-id-14']",
       //signoffBtn:"//ul[@class='listPop']//li[contains(text(),'Sign Off')]",
      outerFrame: '//iframe[contains(@title, "User Creation")]',
        outerFrame1: '//iframe[contains(@title, "User Maintenance")]',
        enterfunNmae:"//input[@placeholder='E.g.ABCD123']"
    }

    async enterUserName(user: string) {
        await this.base.enterValue(this.Elements.userName, user);
        
    }

    async enterPassword(Password: string) {
        await this.base.enterValue(this.Elements.password, Password);
    }
    async loginUsers(password){
    await this.page.locator(this.Elements.loginBtn).click();
    await this.page.waitForTimeout(1000);
    console.log("Alert frame detected");
    const frame = this.page.frameLocator('#ifr_AlertWin');
    await frame.locator('button:has-text("OK")').click();
    await this.page.waitForTimeout(2000)
    const header = await this.page.frameLocator('#ifr_AlertWin').
        locator("//h1[contains(text(),'Clear User')]");
 
    if (await header.isVisible()) {
        const text = await header.textContent();
        console.log("Header Text:", text);
        await this.page.waitForTimeout(1000)
        await frame.locator("//input[@name='newpwd']").fill(password);
        await this.page.waitForTimeout(1000)
        await frame.locator('button:has-text("OK")').click();
        await this.page.waitForTimeout(1000)
        await frame.locator('button:has-text("OK")').click();
 
    }
}

//     async loginUsers(password){
//     await this.page.locator(this.Elements.loginBtn).click();
//     await this.page.waitForTimeout(1000);
//     console.log("Alert frame detected");
//     const frame = this.page.frameLocator('#ifr_AlertWin');
//     await frame.locator('button:has-text("OK")').click();
//     await this.page.waitForTimeout(2000)
//     const header = await this.page.frameLocator('#ifr_AlertWin').
//         locator("//h1[contains(text(),'Clear User')]");

//     if (await header.isVisible()) {
//         const text = await header.textContent();
//         console.log("Header Text:", text);
//         await this.page.waitForTimeout(1000)
//         await frame.locator("//input[@name='newpwd']").fill('Oracle@12');
//         await this.page.waitForTimeout(1000)
//         await frame.locator('button:has-text("OK")').click();
//         await this.page.waitForTimeout(1000)
//         await frame.locator('button:has-text("OK")').click();

//     }
// }

     async handleFrame() {
        try {
            console.log("Handling Frame");
            const frameElementHandle = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 100000 });
            console.log("Handling Frame 1");
            const frame = await frameElementHandle.contentFrame();
              console.log("Handling Frame 2");
            await frame.click("//table//tr//td//input[@id='BTN_OK']");
            console.log("Frame handled successfully");
        } catch (message) {
           console.log("Frame not found");
          // console.error(message);
        }
    }

    async validateHomePageTitle(msg){
        this.page.waitForTimeout(5000)
       const title= await this.page.title()
       console.log("title is "+title)
       expect(title).toContain(msg);
    }

    async signoff(){
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 5000 });
             signoffframe = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                  await signoffframe.click(this.Elements.exitBtn);
                  await this.page.waitForTimeout(2000)
                 await this.page.click(this.Elements.selectBtn)
                 await this.page.getByText('Sign Off').click();
       // await this.page.click(this.Elements.signoffBtn)
         const frameElementHandle1 = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 50000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");

        } catch (message) {
           // console.log("Frame not found");
        }

    }

     async Signoff(){
        try{
        await this.page.waitForTimeout(2000)
                  await this.page.click(this.Elements.selectBtn)
                  console.log("Clicked on select button")
                  await this.page.waitForTimeout(10000)
                 await this.page.getByText('Sign Off').click();
       // await this.page.click(this.Elements.signoffBtn)
         const frameElementHandle1 = await this.page.waitForSelector("//iframe[@id='ifr_AlertWin']", { timeout: 50000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//span[@id='BTN_OK_oj1|text']");
        }catch(message){
    console.log("Signoff not done"+message)
}
     }
async Msignoff(){
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector(this.Elements.outerFrame1, { timeout: 5000 });
             signoffframe = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                  await signoffframe.click(this.Elements.exitBtn);
                  await this.page.waitForTimeout(2000)
                 await this.page.click(this.Elements.selectBtn)
                 await this.page.getByText('Sign Off').click();
       // await this.page.click(this.Elements.signoffBtn)
         const frameElementHandle1 = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 50000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");

        } catch (message) {
           // console.log("Frame not found");
        }}

    

async loginBtn1(password) {
        try {
            await this.page.locator(this.Elements.loginBtn).click();
            await this.page.waitForTimeout(1000);
            const frame = this.page.locator('#ifr_AlertWin');
           await frame.locator('button:has-text("OK")').click();
             await frame.fill(this.Elements.newPassword, password);
           // await frame.click("//input[@id='BTN_SAVE']");
             console.log("Password reset successfully");
        } catch (message) {
           // console.log("An error occurred during login and password reset flow:", message);
           console.log("No password reset required");
           
        }
    }
    async chkLoginBtn(password: string) {
        try {
            await this.page.locator(this.Elements.loginBtn).click();
            await this.page.waitForTimeout(1000);
            if (await this.page.title() === "Oracle Financial Services"){
                console.log("Login successful, no password change required.");
                const frameElement = await this.page.waitForSelector('iframe[name="ifr_AlertWin"]', {
                    state: 'visible',
                    timeout: 30000  
                }).catch(() => null);
                if (frameElement) {
                    const frame = await frameElement.contentFrame();
                    if (frame) {
                        console.log("Frame 'ifr_AlertWin' is visible and accessible.");
                        await frame.click("//table//tr//td//input[@id='BTN_OK']");
                        await frame.fill(this.Elements.newPassword, password);
                        await frame.click("//input[@id='BTN_SAVE']");
                    } else {
                        console.log("Frame element found, but contentFrame() returned null.");
                    }
                } else {
                    console.log("Frame 'ifr_AlertWin' not visible or not found.");
                }
            }
        } catch (message) {
            console.log("No password entering required");
        }
    }

    async enterFunName(funname){
        await this.base.enterValue(this.Elements.enterfunNmae,funname);
        await this.page.waitForTimeout(500)
        await this.base.keyBoardActions("Enter");
        await this.page.waitForTimeout(2000)

    }

}

