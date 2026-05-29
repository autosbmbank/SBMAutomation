import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
import { timeout } from "../hooks/hooks";
import { getCustomerNo } from "../pages/CorePage"
let frame,accNumber,successframe;
export default class AccountOpeningPage {
    private base: ReusableMethods;
  

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
      
    }

     private Elements = {


        New : '//*[@id="New_oj0|text"]',
        ok : '//*[@id="BTN_OK_oj3|text"]',
        CustomerNo : '//*[@id="BLK_CUST_ACCOUNT__CUSTNO|input"]',
        Currency : '//*[@id="BLK_CUST_ACCOUNT__CCY|input"]',
        AccountClass : '//*[@id="BLK_CUST_ACCOUNT__ACCLS|input"]',
        fetch : '//*[@id="BLK_CUST_ACCOUNT__BTN_ACCPKP_oj92|text"]',
        saveoptn : '//*[@id="BTN_OK_oj17|text"]',
        Location : '//*[@id="BLK_CUST_ACCOUNT__LOC|input"]',
        Media : '//*[@id="BLK_CUST_ACCOUNT__MEDIA|input"]',
        mode : '//*[@id="BLK_CUST_ACCOUNT__OPMODE|input"]',
        atm : '//*[@id="BLK_CUST_ACCOUNT__ATM"]/div/div',
        MIStab :'//*[@id="MICACCTM_oj112|text"]',
        PoolCode : '//*[@id="BLK_MISDETAILS__POOLCD|input"]',
        savebtn : '//*[@id="BTN_OK_oj102|text"]',
        fieldstab : '//*[@id="CSCFNUDF_oj116|text"]',
        KDIC_FP_ODS : '//*[@id="BLK_UDF_DETAILS_VIEW__FLDVAL14|input"]',
        savebutton : '//*[@id="BTN_OK_oj52|text"]',
        save : '//*[@id="Save_oj7|text"]',
        OKBTN : '//*[@id="BTN_OK_oj2|text"]',
        accept : '//*[@id="BTN_ACCEPT_oj2|text"]',
        okbtn : '//*[@id="BTN_OK_oj0|text"]',
        exit : '//*[@id="BTN_EXIT_IMG_oj134|text"]',
        enterquery : '//*[@id="EnterQuery_oj17|text"]',
        accountnum : '//*[@id="BLK_CUST_ACCOUNT__ACC|input"]',
        executequery : '//*[@id="ExecuteQuery_oj18|text"]',
        authorize : '//*[@id="Authorize_oj8|text"]',
        acceptbtn :'//*[@id="BTN_OK_oj16|text"]',
        OKbutton : '//*[@id="BTN_OK_oj0|text"]',
        auxiliary : '//*[@id="AUXILIARY"]/span',
        debit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNODR"]/div/div', 
        credit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNOCR"]/div/div', 
        unlock : '//*[@id="Unlock_oj4|text"]',
        undebit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNODR"]/div/div/div',
        uncredit : '//*[@id="BLK_CUST_ACCOUNT__ACSTATNOCR"]/div/div/div',
        getAccNo:"//label[@for='BLK_CUST_ACCOUNT__ACC|input']//following::div[5]",
        accountsignatory : '//*[@id="SVCACSIG_oj118|text"]',
        addrow : '//*[@id="cmdAddRow_BLK_ACCSIGDETAILS"]/button',
        customersearch : '//*[@id="BLK_ACCSIGDETAILS__CIFIDRC0"]/div[1]/span/oj-button/button',
        fetch1 : '//*[@id="_oj3|text"]',
        firstrecord : '//*[@id="TableLov"]/div[1]/table/tbody',
        search : '//*[@id="BLK_CUST_ACCOUNT_CLOSURE__CLSMOD"]/div[1]/span/oj-button/button/div/span[1]/span',
        signatorysearch : '//*[@id="BLK_ACCSIGDETAILS__SIGIDRC0"]/div[1]/span/oj-button/button',
        fetch2 :'//*[@id="_oj3|text"]',
        // firstrecord1 : '//*[@id="TableLov"]/div[1]/table/tbody',
        savebtn3 : '//*[@id="BTN_OK_oj16|text"]',
        close : '//*[@id="Close_oj3|text"]',
        ok3 : '//*[@id="BTN_OK_oj1|text"]',
        saveclose : '//*[@id="BTN_OK_oj47|text"]',
        offsetbranch : '//*[@id="BLK_CUST_ACCOUNT_CLOSURE__OFFBRN|input"]',
        offsetaccount : '//*[@id="BLK_CUST_ACCOUNT_CLOSURE__OFFACC|input"]',
        CloseMode : '//*[@id="BLK_CUST_ACCOUNT_CLOSURE__CLSMOD|input"]',
        // successMessage: "//*[@id='ERRTBL:48_0']",

     }

// customer account 
async handleAOFrame() {
    try {
      // Wait for the iframe to appear in the AO
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Accounts Maintenance")]',{ timeout: 30000 });
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleAOFrame() failed:", message);
    }
  }
// accountgeneration tab 
async handleaccountgenerationframe(){
    try{
    const frame = await this.handleAOFrame();
 
    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );
 
    return await iframe.contentFrame();
  }catch{}
}
  //Management Information System 
async handleMISFrame() {
   const frame = await this.handleAOFrame();

        const innerFrameHandle = await frame.waitForSelector(
            'iframe[id="ifrSubScreen"]', 
            { state: 'visible', timeout: 30000 }
        );
        
        return await innerFrameHandle.contentFrame();
    } catch (err) {
        console.log("Failed to switch to MIS Frame:", err);
        throw err;
    }
//  remarks frame
async getSubScreenFrame() {
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
// USER DEFINED FRAME
async getUDEFrame() {
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

//Override Message
async handleOverrideFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Customer Accounts Maintenance")]',{ timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector('iframe[id="ifr_AlertWin"]', { timeout: 50000 });
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleOverrideFrame failed:", err);
    throw err;
  }
}
async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Customer Accounts Maintenance")]', { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[id="ifr_AlertWin"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleInformationMessageFrame failed:", err);
    throw err;
  }
}

// authorize frame 
async getauthorizeFrame() {
    const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

// signatory frame
async getsignatoryframe(){
  const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();

}

// list of values
async getlistofframe(){
  const frame = await this.getsignatoryframe();

  const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}
 
// listof valuesid frame
async getlistoffvaluesframe(){
  const frame = await this.getsignatoryframe();

  const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();
}

// confirmation message 
async handleconfirmframe(){
   try {
        const outerFrameHandle = await this.page.waitForSelector(
  '//iframe[contains(@title, "Customer Accounts Maintenance")]',{ timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector('iframe[id="ifr_AlertWin"]', { timeout: 50000 });
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleOverrideFrame failed:", err);
    throw err;
  }
}

// account closure
async getclosureframe(){
  const frame = await this.handleAOFrame();

    const iframe = await frame.waitForSelector(
        'iframe[id="ifrSubScreen"]',
        { state: 'visible', timeout: 30000 }
    );

    return await iframe.contentFrame();

}


     async clicknewtab(){
        const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.New, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.New);
      try{
       const frame1 = await this.handleaccountgenerationframe()
       await frame1.locator('//span[@id="BTN_OK_oj3|text"]').click()
        }catch{}
     }
     
    //  async clicksok(){
    //     const frame = await this.handleaccountgenerationframe()
    //     await frame.waitForSelector(this.Elements.ok, { state: 'visible', timeout: 15000 });
    //   await frame.click(this.Elements.ok);
    //  }

     async entercustmno() {

        const frame = await this.handleAOFrame()
        
 
        // const frame = await this.handleAOFrame()
        const cifNo = getCustomerNo();
       await frame.locator(this.Elements.CustomerNo).clear()
       console.log("customerno"+cifNo)

      //  await frame.locator(this.Elements.CustomerNo).fill(custmno)
      await frame.locator(this.Elements.CustomerNo).fill(cifNo)
     }
    async entercustomernum(accountnumber){
      const frame = await this.handleAOFrame()
      await frame.locator(this.Elements.CustomerNo).clear()
      await frame.locator(this.Elements.CustomerNo).fill(accountnumber)
    }
async entercurren(curren){
    const frame = await this.handleAOFrame()
       await frame.locator(this.Elements.Currency).clear()
       await frame.locator(this.Elements.Currency).fill(curren)

}

async enteraccntclass(accntclass){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.AccountClass, { state: 'visible', timeout: 15000 });
       await frame.locator(this.Elements.AccountClass).clear()
       await frame.locator(this.Elements.AccountClass).fill(accntclass)
}

async clickfetch(){
     const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.fetch, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.fetch);
     }  
async clicksaveoption(){
      const frame = await this.handleaccountgenerationframe()
        await frame.waitForSelector(this.Elements.saveoptn, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.saveoptn);
     }

async enterlocation(location){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.Location, { state: 'visible', timeout: 30000 });
       await frame.locator(this.Elements.Location).clear()
       await frame.locator(this.Elements.Location).fill(location)
}
async entermedia(media){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.Media, { state: 'visible', timeout: 30000 });
       await frame.locator(this.Elements.Media).clear()
       await frame.locator(this.Elements.Media).fill(media)
       await this.page.waitForTimeout(2000)
}
async ClickMIStab(){
    const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.MIStab, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.MIStab);
      await this.page.waitForTimeout(2000)
}
async selectmodeofoperation() {
    const frame = await this.handleAOFrame();

    const chargeField = frame.locator(this.Elements.mode);

    await chargeField.click();
    await this.page.waitForTimeout(1000);

    const singleOption = frame.locator("//li[normalize-space()='Single']");

    await singleOption.waitFor({ state: 'visible' });
    await singleOption.click();
}

async Clickatm(){
    const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.atm, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.atm);
      await this.page.waitForTimeout(2000)
}
async enterpoolcode(poolcode){
    const frame = await this.handleMISFrame()
    await frame.waitForSelector(this.Elements.PoolCode, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.PoolCode).clear()
       await frame.locator(this.Elements.PoolCode).fill(poolcode)
       await this.page.waitForTimeout(2000)
}

async ClickSavebutton(){
   const frame = await this.handleMISFrame()
    await frame.waitForSelector(this.Elements.savebtn, { state: 'visible', timeout: 25000 });
       await frame.click(this.Elements.savebtn); 
       await this.page.waitForTimeout(2000)
}
async Clickfielstab(){
   const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.fieldstab, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.fieldstab); 
      await this.page.waitForTimeout(2000)
}
async enterKDICFP(KDIC){
   const frame = await this.getUDEFrame()
   await frame.waitForSelector(this.Elements.KDIC_FP_ODS, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.KDIC_FP_ODS).clear()
       await frame.locator(this.Elements.KDIC_FP_ODS).fill(KDIC)
       await this.page.waitForTimeout(2000)
}
async ClickSavebtn(){
    const frame = await this.getUDEFrame()
    await frame.waitForSelector(this.Elements.savebutton, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.savebutton);
}
async Clickauxiliary(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.auxiliary, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.auxiliary);
}
async Clicknodebit(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.debit, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.debit);
}
async Clicknocredit(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.credit, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.credit);
}
async clickonsave(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.save, { state: 'visible', timeout: 30000 });
      await frame.click(this.Elements.save);
}

async clickonOK(){
    const frame = await this.getSubScreenFrame()
    await frame.waitForSelector(this.Elements.OKBTN, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.OKBTN);
}

async Clickaccept(){
    const frame = await this.handleOverrideFrame()
    await frame.waitForSelector(this.Elements.accept, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.accept);
}

async Clickokbutton(){
    const frame = await this.handleInformationMessageFrame()
    await frame.waitForSelector(this.Elements.okbtn, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.okbtn);
}

async Clickexit(){
    const frame = await this.handleAOFrame()
    await frame.waitForSelector(this.Elements.exit, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.exit);
}

    async ClickenterQuery(){
       const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.enterquery, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.enterquery);
    }
   
    async enteraccntmuber(){
       const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.accountnum, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.accountnum).clear()
       await frame.locator(this.Elements.accountnum).fill(accNumber)
    }

    async ClickexecuteQuery(){
      const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.executequery, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.executequery);
    await this.page.waitForTimeout(3000)
    }

    async Clickauthorize(){
        const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.authorize, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.authorize);
    await this.page.waitForTimeout(3000)
    }

    async Clickaccept1(){
         const frame = await this.getauthorizeFrame()
         await frame.waitForSelector(this.Elements.acceptbtn, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.acceptbtn);
    await this.page.waitForTimeout(2000)
    }

//     async clickOkbtn() {

//     const frame = await this.getSubScreenFrame();

//     const frameElementHandle2 = await frame.waitForSelector(
//         'iframe[id="ifr_AlertWin"]',
//         { state: 'visible', timeout: 30000 }
//     );

//     const successframe = await frameElementHandle2.contentFrame();

//     const message = successframe.locator(this.Elements.okbtn);

//     await expect(message).toContainText('Successfully Saved');

//     await successframe.click(this.Elements.okbtn);
// }
      
  async clickOkbtn() {

    const frame = await this.getSubScreenFrame();

    const frameElementHandle2 = await frame.waitForSelector(
        'iframe[id="ifr_AlertWin"]',
        { state: 'visible', timeout: 30000 }
    );

    const successframe = await frameElementHandle2.contentFrame();

    //const message = successframe.locator('//span[contains(text(),"Successfully Saved")]');

    // await expect(message).toContainText('Successfully Saved');

    await successframe.click(this.Elements.OKbutton);
}
//   try {
//     const okButton = this.page
//       .frameLocator('iframe[id*="ifr_LaunchWin"]')
//       .frameLocator('#ifrSubScreen')
//       .frameLocator('#ifr_AlertWin')
//       .getByRole('button', { name: 'OK' }); // using ARIA role for safety
 
//     await okButton.waitFor({ state: 'visible', timeout: 20000 });
//     await okButton.click({ force: true }); // force if masked
 
//     console.log("Successfully clicked OK button in ALERTWIN");
 
//   } catch (error) {
//     console.error("Failed to click OK button in ALERTWIN frame", error);
//     throw error;
//   }
 
// }

    async Clickunlock(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.unlock, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.unlock);
    }

    async Clickuncheckdebit(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.undebit, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.undebit);
    }

    async Clickuncheckcredit(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.uncredit, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.uncredit);
    }

    async enteraccountnumber(accnum){
      const frame = await this.handleAOFrame()
       await frame.waitForSelector(this.Elements.accountnum, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.accountnum).clear()
       await frame.locator(this.Elements.accountnum).fill(accnum)
    }

    async getAccNumber(){
         const frame = await this.handleAOFrame()
         accNumber=await frame.innerText(this.Elements.getAccNo)
        console.log("Account number "+accNumber)
    }

    async clicksignatorytab(){
         const frame = await this.handleAOFrame()
         await frame.waitForSelector(this.Elements.accountsignatory, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.accountsignatory);
    }

    async clickaddrow(){
         const frame = await this.getsignatoryframe()
         await frame.waitForSelector(this.Elements.addrow, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.addrow);
    }

    async clicksearchcustomer(){
         const frame = await this.getsignatoryframe()
         await frame.waitForSelector(this.Elements.customersearch, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.customersearch);
    }

    async clickfetchSTD(){
         const frame = await this.getlistofframe()
         await frame.waitForSelector(this.Elements.fetch1, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.fetch1);
    }

    async clickfirstrecord(){
         const frame = await this.getlistofframe()
         await frame.waitForSelector(this.Elements.firstrecord, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.firstrecord);
    }

    async clicksearch(){
         const frame = await this.getclosureframe()
         await frame.waitForSelector(this.Elements.search, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.search);
    }
    async clicksignatorysearch(){
         const frame = await this.getsignatoryframe()
         await frame.waitForSelector(this.Elements.signatorysearch, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.signatorysearch);
    }

    async clickfetchbutton(){
         const frame = await this.getlistoffvaluesframe()
         await frame.waitForSelector(this.Elements.fetch2, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.fetch2);
    }

    async clicksavesignatory(){
         const frame = await this.getsignatoryframe()
         await frame.waitForSelector(this.Elements.savebtn3, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.savebtn3);
    }

    async clickclose(){
      const frame = await this.handleAOFrame()
        await frame.waitForSelector(this.Elements.close, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.close);
    }

    async clickokconfirm(){
      const frame = await this.handleconfirmframe()
      await frame.waitForSelector(this.Elements.ok3, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.ok3);
    await this.page.waitForTimeout(2000)
    }

    async enteroffsetbranch(branch){
      const frame = await this.getclosureframe()
       await frame.waitForSelector(this.Elements.offsetbranch, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.offsetbranch).clear()
       await frame.locator(this.Elements.offsetbranch).fill(branch)
       await this.page.waitForTimeout(2000)
    }

    async enteroffsetnumber(offsetaccnum){
      const frame = await this.getclosureframe()
       await frame.waitForSelector(this.Elements.offsetaccount, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.offsetaccount).clear()
       await frame.locator(this.Elements.offsetaccount).fill(offsetaccnum)
       await this.page.waitForTimeout(2000)
    }

    async enterclosemode(closemode){
      const frame = await this.getclosureframe()
       await frame.waitForSelector(this.Elements.CloseMode, { state: 'visible', timeout: 30000 });
           await frame.locator(this.Elements.CloseMode).clear()
       await frame.locator(this.Elements.CloseMode).fill(closemode)
       await this.page.waitForTimeout(2000)
    }

    async clicksaveclose(){
      const frame = await this.getclosureframe()
      await frame.waitForSelector(this.Elements.saveclose, { state: 'visible', timeout: 30000 });
    await frame.click(this.Elements.saveclose);
    }

}

