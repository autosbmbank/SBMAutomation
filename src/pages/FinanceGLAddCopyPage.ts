import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";

let GLCodevar,GLdescvar,option1var,option2var,option3var,option4var,option5var,option6var,parentGLvar;
//let frame: any; // typed to avoid TS1128 due to implicit any/global

export default class FinanceGLAddCopyPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
    NewButton: "//li[@id='New']//a", 
    GLCode: "//input[@id='BLK_GLTMS_GLMASTER__GLCD']",
    GLDescription: "//input[@id='BLK_GLTMS_GLMASTER__GLDESC']",
   Leaf: "//label[@for='BLK_GLTMS_GLMASTER__LEAF']",
   ClGL: "//label[@for='BLK_GLTMS_GLMASTER__CUSTOMER2']",
    GLType: "//select[@id='BLK_GLTMS_GLMASTER__TYPE']",
    Category:"//select[@id='BLK_GLTMS_GLMASTER__CATEGORY']",
    AssetOnReport: "//b[normalize-space(.)='Display On Report With']/following::label",
    CurRestrict: "//b[normalize-space(.)='Currency Restrictions']/following::label",
    PostingRestrict:"//b[normalize-space(.)='Posting Restrictions']/following::label",
    Reconc:"//b[normalize-space(.)='Reconciliation'/following::label]",
    GLLinkages:"//a[contains(@class,'Htaball') and .//span[normalize-space(.)='GL Linkages']]",
    ParentGL:"//input[@id='BLK_GLTMS_GLMASTER__PARENT_GL']",
    SaveButton:"//li[@id='Save']",
    Errormsg: "//span[@class='SPNtbltwoC' and contains(normalize-space(.), 'Duplicate GL Code, customer account or account short code')]",
    AuthorizationStatus:"//select[@id='BLK_GLTMS_GLMASTER__AUTHSTAT']",
    Search:"//li[@id='Search']",
    authorizeGLCode: "//input[@id='BLK_GLTMS_GLMASTER__GLCD']",
    authorizefirstrow : "//table[@id='TBL_QryRslts']//tr[contains(@class,'TBLoneTR')][1]",
    authorizebutton:"//div[@id='toolbar' and not(contains(@style,'display:none'))]//li[@id='Authorize']",
    OkBtn :"//input[@id='BTN_OK']",
    ExitBtn : "//input[@id='BTN_EXIT_IMG']",
    SignOff : "//li[contains(@onclick, 'SignOff')]",
    selectBtn:"(//label[@class='LBLmenustd'])[6]",
    acceptBtn:"//input[@value='Accept']",
    okafterAccept:"//input[@value='Accept']",
    authormsg: "//input[@id='BLK_GLTMS_GLMASTER__AUTHSTATI']",
    EnterQueryRN: "//li[@id='EnterQuery']//a", 
    GLCodeRN: "//input[@id='BLK_GLTMS_GLMASTER__GLCD']",
    ExecuteQueryRN: "//li[@id='ExecuteQuery']",
    UnlockRN: "//li[@id='Unlock']",
    GLDescriptionRN: "//input[@id='BLK_GLTMS_GLMASTER__GLDESC']",
    SaveRN:"//li[@id='Save']",
    OkRN: "//input[@id='BTN_OK']",
    unauthormsg: "//input[@id='BLK_GLTMS_GLMASTER__AUTHSTATI']",
    //
  };
  //Addition

  async handleAMFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Chart of Accounts Maintenance")]', { timeout: 45000 } );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleAMFrame() failed:", message);
    }
  }

  async clickGLCopyNew() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.NewButton, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.NewButton);
   }

  async enterGLCode(GLCode: string) {
  const frame = await this.handleAMFrame();
GLCodevar = GLCode;
  
  await frame.waitForSelector(this.Elements.GLCode, { state: 'visible', timeout: 15000 });
   await frame.locator(this.Elements.GLCode).clear;
  await frame.locator(this.Elements.GLCode).fill(GLCode);
    
 }

  async enterGLDescription(GLdesc: string) {
  const frame = await this.handleAMFrame();
GLdescvar = GLdesc;
  
  await frame.waitForSelector(this.Elements.GLDescription, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.GLDescription).clear;
  await frame.locator(this.Elements.GLDescription).fill(GLdesc);
  }

// async selectRadioLeaf(option: string) {
//   console.log('hello1');
//   const frame = await this.handleAMFrame();

//   // normalize user input
//   const normalized = option.trim().toLowerCase();
//   console.log('hello2');

//   // simple if-else for two radio options
//   if (normalized === 'leaf') {
//     await frame.locator('input#BLK_GLTMS_GLMASTER__LEAF').check();   // selects Leaf GL
//   } 
//   else if (normalized === 'node gl') {
//     await frame.locator('input#BLK_GLTMS_GLMASTER__LEAF2').check();  // selects Node GL
//   } 
//   else {
//     throw new Error(`Invalid option: ${option}. Please use 'Leaf' or 'Node GL'.`);
//   }
// }




// async selectRadioInternal(option: string) { 
//   const frame = await this.handleAMFrame();

//   // dynamically build selector using the option parameter
//   const radioSelector = `label[for="BLK_GLTMS_GLMASTER__${option.toUpperCase()}"]`;

//   // wait and click
//   await frame.waitForSelector(radioSelector, { state: 'visible', timeout: 15000 });
//   await frame.locator(radioSelector).click();
// }

async selectRadLeaf(){
const frame = await this.handleAMFrame();
await frame.waitForSelector(this.Elements.Leaf, {state: 'visible', timeout:10000});
await frame.locator(this.Elements.Leaf).check();
}

async selectRadInternal(){
const frame = await this.handleAMFrame();
await frame.waitForSelector(this.Elements.ClGL, {state: 'visible', timeout:10000});
await frame.locator(this.Elements.ClGL).check();

}


  async selectGLTypeDropdown(option1: string) {
  const frame = await this.handleAMFrame();
option1var = option1;
 
  await frame.waitForSelector(this.Elements.GLType, { state: 'visible', timeout: 15000 });
  await frame.selectOption(this.Elements.GLType, { label: option1 });
}

  async selectCategoryDropdown(option2: string) {
  const frame = await this.handleAMFrame();
option2var=option2;
  
  await frame.waitForSelector(this.Elements.Category), { state: 'visible', timeout: 15000 };
  await frame.selectOption(this.Elements.Category, { label: option2});
  }

  async selectRadioDisplay(option3: string) {
  const frame = await this.handleAMFrame();
option3var=option3;
   
  await frame.waitForSelector(this.Elements.AssetOnReport, { state: 'visible', timeout: 15000 });
  await frame.locator("//b[normalize-space(.)='Display On Report With']/following::label[normalize-space(text())='" + option3 + "']").click();
  }

  async selectRadioCurRestrict(option4: string) {
  const frame = await this.handleAMFrame();
option4var=option4;
  
  await frame.waitForSelector(this.Elements.CurRestrict, { state: 'visible', timeout: 15000 });
  await frame.locator("//b[normalize-space(.)='Currency Restrictions']/following::label[normalize-space(text())='" + option4 + "']").click();
}

  async selectRadioPostingRestrict(option5: string) {
  const frame = await this.handleAMFrame();

  option5var=option5
  
  await frame.waitForSelector(this.Elements.PostingRestrict, { state: 'visible', timeout: 15000 });
  var xpath = "//b[normalize-space(.)='Posting Restrictions']/following::div[1]//*[normalize-space(.)='" + option5 + "']/preceding::label[1]";
await frame.waitForSelector(xpath, { state: 'visible', timeout: 10000 });
await frame.locator(xpath).click();
}
  

  async selectRadioReconc(option6: string) {
  const frame = await this.handleAMFrame();
option6var = option6;
  
  var xpath = "//b[normalize-space(.)='Reconciliation']/following::div[1]//*[contains(normalize-space(.), '" + option6 + "')]/preceding::label[1]";
  await frame.waitForSelector(xpath, { state: 'visible', timeout: 10000 });
  await frame.locator(xpath).click();
 
}

  async clickGLLinkageTab() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLLinkages, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.GLLinkages).click();  
  }

  async enterParentGL(parentGL: string) {
  const frame = await this.handleAMFrame();
parentGLvar = parentGL;
  
  await frame.waitForSelector(this.Elements.ParentGL, { state: 'visible', timeout: 15000 });
   await frame.locator(this.Elements.ParentGL).clear;
  await frame.locator(this.Elements.ParentGL).fill(parentGL);
  }

  async clickGLCopySave() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.SaveButton, { state: 'visible', timeout: 45000 });
  await frame.click(this.Elements.SaveButton);
  await frame.waitForTimeout(50000);
   }

async handleIMFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
      'iframe[title*="Chart of Accounts Maintenance"]',
      { timeout: 30000 }
    );
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Information Message"], iframe[id*="ifr_AlertWin"]',
      { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleIMFrame() failed:", err);
    throw err;
  }
}

  async clickOkBtn() {
  const frame = await this.handleIMFrame();
  console.log('helloo1');
  await frame.waitForSelector(this.Elements.OkBtn, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.OkBtn);
   }

//    async verifyAddAuthorizationStatus() {
//   const frame = await this.handleAMFrame();
//   frame.waitForTimeout(10000);
//   const status = await frame.inputValue(this.Elements.authormsg);
//   frame.waitForTimeout(10000);
//   expect(status.trim()).toBe('Authorized');
// }

   async clickExitBtn() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.ExitBtn, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.ExitBtn);
   }

  async clickSignOffBtn() {
   await this.page.click(this.Elements.selectBtn)
                 await this.page.getByText('Sign Off').click();
            const frameElementHandle1 = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 80000 });
            const frame = await frameElementHandle1.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");
   }

   async handleCMFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Confirmation Message")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleCMFrame() failed:", message);
    }
  }


async ConfirmOkBtn() {
  const frame = await this.handleCMFrame();
  await frame.waitForSelector(this.Elements.OkBtn, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.OkBtn);
   }
   

//     async handleEMFrame() {
//     try {
//       // Wait for the iframe to appear in the DOM
//       const frameElementHandle = await this.page.waitForSelector(
//         '#ifr_AlertWin', { timeout: 45000 }
//       );
//     const frame = await frameElementHandle.contentFrame();
//    return frame;
//     } catch (message) {
//      console.log("handleEMFrame() failed:", message);
//     }
//   }

//   async verifyError(expectedError) {
//   // Wait for the outer frame and get it
//   const outerFrame = await this.handleAMFrame();

//   // From outer frame, get the inner iframe by ID
//   const innerIframeElement = await outerFrame.waitForSelector('#ifr_AlertWin', { state: 'attached', timeout: 20000 });
//   const innerFrame = await innerIframeElement.contentFrame();

//   if (!innerFrame) {
//     throw new Error('Inner iframe #ifr_AlertWin not found or not yet attached.');
//   }

//   // Interact with the element inside
//   const errorLocator = innerFrame.locator(this.Elements.Errormsg);
//   await errorLocator.waitFor({ state: 'visible', timeout: 20000 });

//   const actualText = await errorLocator.innerText();
//   if (!actualText.includes(expectedError)) {
//     throw new Error('Expected error "' + expectedError + '" not found. Found: "' + actualText + '"');
//   }
// }

//Authorization

async selectAuthorizationStatus() {
   const frame = await this.handleAMFrame();
   await frame.waitForSelector(this.Elements.AuthorizationStatus), { state: 'visible', timeout: 15000 };
   await frame.selectOption(this.Elements.AuthorizationStatus, { label: 'Unauthorized'});
  }


async enterGLCodeauthorize() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.authorizeGLCode, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.authorizeGLCode).clear;
  await frame.locator(this.Elements.authorizeGLCode).fill(GLCodevar);
}

async clickSearchbutton(){
const frame = await this.handleAMFrame();
await frame.waitForSelector(this.Elements.Search,{state: 'visible', timeout : 15000});
await frame.click(this.Elements.Search);
}

async clickFirstRecord(){
const frame = await this.handleAMFrame();
await frame.waitForSelector(this.Elements.authorizefirstrow,{state: 'visible', timeout : 55000});
await frame.locator(this.Elements.authorizefirstrow).dblclick();
await frame.waitForTimeout(10000)
}

async handleAMSFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
      'iframe[title*="Chart of Accounts Maintenance Summary"]',
      { timeout: 30000 }
    );
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Chart of Accounts Maintenance"], iframe[id*="ifr_AlertWin"]',
      { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleAMSFrame() failed:", err);
    throw err;
  }
}

async clickAuthorize(){
  
const frameLocator = this.page.frameLocator("iframe[title*='Chart of Accounts Maintenance']:not([title*='Summary'])");



await frameLocator
  .locator("//div[@id='toolbar' and not(contains(@style,'display:none'))]//li[@id='Authorize']/a")
  .waitFor({ state: 'visible', timeout: 50000 });

await frameLocator
  .locator("//div[@id='toolbar' and not(contains(@style,'display:none'))]//li[@id='Authorize']/a")
  .click();
await this.page.waitForTimeout(85000);
}

async handleAuthorizeFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  "iframe[title*='Chart of Accounts Maintenance']:not([title*='Summary'])",
  { timeout: 30000 }
);
    
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Authorize"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleAuthorizeFrame() failed:", err);
    throw err;
  }
}

async clickAccept(){
const frame = await this.handleAuthorizeFrame();
await frame.waitForSelector(this.Elements.acceptBtn,{state: 'visible', timeout : 85000});
await frame.locator(this.Elements.acceptBtn).click();
}

async clickokafterAccept(){

const ok = this.page
  .frameLocator("iframe[title*='Chart of Accounts Maintenance']:not([title*='Summary'])")
  .frameLocator("iframe[title*='Authorize'], iframe[id*='ifrSubScreen']")
  .frameLocator("iframe[title*='Information Message'], iframe#ifr_AlertWin")
  .locator("input#BTN_OK, input[title='Ok'], input[value='OK']");

await ok.waitFor({ state: 'visible', timeout: 60000 });

try {
  await ok.click();
} catch {
  const h = await ok.elementHandle();
  if (h) await h.evaluate((e: HTMLElement) => (e as any).click());
  else throw new Error('OK button not found');
}

}

async verifyAuthorizationStatus() {
  const frame = await this.handleAMFrame();
  frame.waitForTimeout(50000);
  const status = await frame.inputValue(this.Elements.authormsg);
  frame.waitForTimeout(50000);
  expect(status.trim()).toBe('Authorized');
}


//Duplicate

async enterGLCodedup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLCode, { state: 'visible', timeout: 15000 });
   await frame.locator(this.Elements.GLCode).clear;
  await frame.locator(this.Elements.GLCode).fill(GLCodevar);
    
 }

  async enterGLDescriptiondup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLDescription, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.GLDescription).clear;
  await frame.locator(this.Elements.GLDescription).fill(GLdescvar);
  
  }

async selectRadLeafdup(){
const frame = await this.handleAMFrame();
await frame.waitForSelector(this.Elements.Leaf, {state: 'visible', timeout:10000});
await frame.locator(this.Elements.Leaf).check();
}

async selectRadInternaldup(){
const frame = await this.handleAMFrame();
await frame.waitForSelector(this.Elements.ClGL, {state: 'visible', timeout:10000});
await frame.locator(this.Elements.ClGL).check();

}


  async selectGLTypeDropdowndup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLType, { state: 'visible', timeout: 15000 });
  await frame.selectOption(this.Elements.GLType, { label: option1var });
  
}

  async selectCategoryDropdowndup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.Category), { state: 'visible', timeout: 15000 };
  await frame.selectOption(this.Elements.Category, { label: option2var});
  
  }

  async selectRadioDisplaydup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.AssetOnReport, { state: 'visible', timeout: 15000 });
  await frame.locator("//b[normalize-space(.)='Display On Report With']/following::label[normalize-space(text())='" + option3var + "']").click();
  }

  async selectRadioCurRestrictdup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.CurRestrict, { state: 'visible', timeout: 15000 });
  await frame.locator("//b[normalize-space(.)='Currency Restrictions']/following::label[normalize-space(text())='" + option4var + "']").click();
}

  async selectRadioPostingRestrictdup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.PostingRestrict, { state: 'visible', timeout: 15000 });
  var xpath = "//b[normalize-space(.)='Posting Restrictions']/following::div[1]//*[normalize-space(.)='" + option5var + "']/preceding::label[1]";
await frame.waitForSelector(xpath, { state: 'visible', timeout: 10000 });
await frame.locator(xpath).click();

}
  

  async selectRadioReconcdup() {
  const frame = await this.handleAMFrame();
  var xpath = "//b[normalize-space(.)='Reconciliation']/following::div[1]//*[contains(normalize-space(.), '" + option6var + "')]/preceding::label[1]";
  await frame.waitForSelector(xpath, { state: 'visible', timeout: 10000 });
  await frame.locator(xpath).click();
 
}

  async clickGLLinkageTabdup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLLinkages, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.GLLinkages).click();  
  }

  async enterParentGLdup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.ParentGL, { state: 'visible', timeout: 15000 });
   await frame.locator(this.Elements.ParentGL).clear;
  await frame.locator(this.Elements.ParentGL).fill(parentGLvar);
  }

  async clickGLCopySavedup() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.SaveButton, { state: 'visible', timeout: 45000 });
  await frame.click(this.Elements.SaveButton);
  await frame.waitForTimeout(50000);
   }

  //  async handleAMFrame() {
  //   try {
  //     // Wait for the iframe to appear in the DOM
  //     const frameElementHandle = await this.page.waitForSelector(
  //       '//iframe[contains(@title, "Chart of Accounts Maintenance")]',
  //       { timeout: 45000 }
  //     );
  //   const frame = await frameElementHandle.contentFrame();
  //  return frame;
  //   } catch (message) {
  //    console.log("handleJLFrame() failed:", message);
  //   }
  // }

  //Rename

  async clickEnterQueryRN() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.EnterQueryRN, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.EnterQueryRN);
   }

  async enterRNGLCode() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLCodeRN, { state: 'visible', timeout: 15000 });
   await frame.locator(this.Elements.GLCodeRN).clear;
  await frame.locator(this.Elements.GLCodeRN).fill(GLCodevar);
    
 }

 async clickExecuteQueryRN() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.ExecuteQueryRN, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.ExecuteQueryRN);
   }

  async clickUnlockRN() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.UnlockRN, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.UnlockRN);
   }

  async enterGLDescriptionRN() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.GLDescriptionRN, { state: 'visible', timeout: 15000 });
  const dynamic = await this.base.generateAlphanumericValue(4);
   await frame.locator(this.Elements.GLDescriptionRN).clear;
  await frame.locator(this.Elements.GLDescriptionRN).fill(dynamic);
  }

   async ClickSaveRN() {
  const frame = await this.handleAMFrame();
  await frame.waitForSelector(this.Elements.SaveRN, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.SaveRN);
   }

// async handleIMFrame() {
//   try {
//         const outerFrameHandle = await this.page.waitForSelector(
//       'iframe[title*="Chart of Accounts Maintenance"]',
//       { timeout: 30000 }
//     );
//     const outerFrame = await outerFrameHandle.contentFrame();
//     const innerFrameHandle = await outerFrame.waitForSelector(
//       'iframe[title*="Information Message"], iframe[id*="ifr_AlertWin"]',
//       { timeout: 50000 }
//     );
//     const innerFrame = await innerFrameHandle.contentFrame();
//     return innerFrame;
//   } catch (err) {
//     console.log("handleIMFrame() failed:", err);
//     throw err;
//   }
// }

   async ClickOkRN() {
  const frame = await this.handleIMFrame();
  await frame.waitForSelector(this.Elements.OkRN, { state: 'visible', timeout: 75000 });
  await frame.click(this.Elements.OkRN);
   }

   async verifyAuthorizationStatusRN() {
  const frame = await this.handleAMFrame();
  const status = await frame.inputValue(this.Elements.unauthormsg);
  expect(status.trim()).toBe('Unauthorized');
}
}




