import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
 import FinanceGLAddCopyPage from "../../pages/FinanceGLAddCopyPage";

let GLPage: FinanceGLAddCopyPage;

//Creation

When("Click on new Create", async function () {
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
 // await GLPage.handleAMFrame();
  await GLPage.clickGLCopyNew();
//   await GLPage.clickGLCopyNew();
});

When("Enter the GL Code1 {string}", async function (glCode: string) {
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
  this.glCodevar = glCode;
  await GLPage.handleAMFrame();
  await GLPage.enterGLCode(glCode);
});

When("Enter the General Ledger Description1 {string}", async function (desc: string) {
 const GLPage = new FinanceGLAddCopyPage(fixture.page);
 this.descvar = desc;
  await GLPage.handleAMFrame();
  await GLPage.enterGLDescription(desc);
});

  When("Select the radio option Leaf1", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.selectRadLeaf();
 });
    When("Select the radio option CustInternal1", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
  await GLPage.selectRadInternal();
 });

When("Select option from the GL Type drop down1 {string}", async function (value: string) {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   this.valuevar = value;
   await GLPage.handleAMFrame();
   await GLPage.selectGLTypeDropdown(value);
});

When("Select option from the Category drop down1 {string}", async function (value1: string) {
    const GLPage = new FinanceGLAddCopyPage(fixture.page);
    this.value1var = value1;
    await GLPage.handleAMFrame();
    await GLPage.selectCategoryDropdown(value1);
});

When("Select the radio option Display On Report1 {string}", async function (option1: string) {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   this.option1var = option1;
    await GLPage.handleAMFrame();
    await GLPage.selectRadioDisplay(option1);
});

When("Select the radio option Currency Restrictions1 {string}", async function (option2: string) {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   this.option2var = option2;
  await GLPage.handleAMFrame();
    await GLPage.selectRadioCurRestrict(option2);
});

When("Select the radio option Posting Restrictions1 {string}", async function (option3: string) {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   this.option3var = option3;
  await GLPage.handleAMFrame();
    await GLPage.selectRadioPostingRestrict(option3);
});

When("Select the radio option Reconciliation1 {string}", async function (option4: string) {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   this.option4var = option4;
  await GLPage.handleAMFrame();
    await GLPage.selectRadioReconc(option4);
});

When("Click on GL Linkages tab1", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
    await GLPage.clickGLLinkageTab();
});

When("Enter the Parent GL1 {string}", async function (parentGL: string) {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   this.parentGLvar = parentGL;
  await GLPage.handleAMFrame();
    await GLPage.enterParentGL(parentGL);
});

When("Click on Save Create", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
    await GLPage.handleAMFrame();
    await GLPage.clickGLCopySave();
});

When("Click on Ok button", async function(){
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleIMFrame();
   await GLPage.clickOkBtn();
});

When("Click on Exit button", async function(){
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.clickExitBtn();
});


When("Click on SignOff button", async function(){
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.clickSignOffBtn();
});

// When("Confirm with Ok button", async function(){
//    const GLPage = new FinanceGLAddCopyPage(fixture.page);
//    await GLPage.handleCMFrame();
//    await GLPage.ConfirmOkBtn();
// });

// Then("System should display error message as {string}", async function(errormsg : string){

// const GLPage = new FinanceGLAddCopyPage(fixture.page);
//       await GLPage.verifyAuthorizationStatus();
// });


// Then('System should not allow to save the record and should display error {string}', async function (ExpectedError: string) {
//   const GLPage = new FinanceGLAddCopyPage(fixture.page);
//   await GLPage.handleEMFrame();
//   await GLPage.verifyError(ExpectedError);
// });

 When("set Authorization Status to Unauthorized", async function(){
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
  await GLPage.selectAuthorizationStatus();
 });

When("Enter the GL Code for authorization", async function(){
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
  await GLPage.enterGLCodeauthorize();
});

 When("click on search", async function(){
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
  await GLPage.clickSearchbutton();
 });

 When("Open the first unauthorized record from results", async function(){
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
  await GLPage.clickFirstRecord();

 });

 When("Click on Authorize", async function(){
const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
   await GLPage.clickAuthorize();
 });

When("Click on Accept", async function(){
const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAuthorizeFrame();
   await GLPage.clickAccept();
 });

 When("Click on OkafterAccept", async function(){
const GLPage = new FinanceGLAddCopyPage(fixture.page);
 // await GLPage.handleAuthorizeFrame();
   await GLPage.clickokafterAccept();
 });

 Then("System should authorize the record successfully and record status should be Authorized", async function(){
      const GLPage = new FinanceGLAddCopyPage(fixture.page);
      await GLPage.verifyAuthorizationStatus();

 });

/////Duplicate

When("Click on new Duplicate", async function () {
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
 // await GLPage.handleAMFrame();
  await GLPage.clickGLCopyNew();
//   await GLPage.clickGLCopyNew();
});
When("Enter the GL Code2", async function () {
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
  await GLPage.enterGLCodedup();
});

When("Enter the General Ledger Description2", async function () {
 const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
  await GLPage.enterGLDescriptiondup();
});

  When("Select the radio option Leaf2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.selectRadLeafdup();
 });
    When("Select the radio option CustInternal2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
  await GLPage.selectRadInternaldup();
 });

When("Select option from the GL Type drop down2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.selectGLTypeDropdowndup();
});

When("Select option from the Category drop down2", async function () {
    const GLPage = new FinanceGLAddCopyPage(fixture.page);
    await GLPage.handleAMFrame();
    await GLPage.selectCategoryDropdowndup();
});

When("Select the radio option Display On Report2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
    await GLPage.handleAMFrame();
    await GLPage.selectRadioDisplaydup();
});

When("Select the radio option Currency Restrictions2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
    await GLPage.selectRadioCurRestrictdup();
});

When("Select the radio option Posting Restrictions2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
    await GLPage.selectRadioPostingRestrictdup();
});

When("Select the radio option Reconciliation2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
    await GLPage.selectRadioReconcdup();
});

When("Click on GL Linkages tab2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
    await GLPage.clickGLLinkageTab();
});

When("Enter the Parent GL2", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
  await GLPage.handleAMFrame();
    await GLPage.enterParentGLdup();
});

When("Click on Save Duplicate", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
    await GLPage.handleAMFrame();
    await GLPage.clickGLCopySave();
});

//Rename

When("click on Enter Query for Rename", async function () {
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.clickEnterQueryRN();
});

When("enter the GL Code for Rename", async function () {
  const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.enterRNGLCode();
});

When("click on Execute Query for Rename", async function () {
 const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.clickExecuteQueryRN();
});

  When("click on Unlock for Rename", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
    await GLPage.handleAMFrame();
   await GLPage.clickUnlockRN();
 });

    When("modify the General Ledger Description", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
    await GLPage.handleAMFrame();
   await GLPage.enterGLDescriptionRN();
 });

When("Click on SavebuttonRN", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleAMFrame();
   await GLPage.ClickSaveRN();
});

When("Click on OkRN", async function () {
   const GLPage = new FinanceGLAddCopyPage(fixture.page);
   await GLPage.handleIMFrame();
   await GLPage.ClickOkRN();
});

Then("System should save the record successfully and status should be in unauthorized.", async function () {
    const GLPage = new FinanceGLAddCopyPage(fixture.page);
     await GLPage.handleAMFrame();
     await GLPage.verifyAuthorizationStatusRN();
});

 


