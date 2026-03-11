import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import BranchOperationsPage from "../../pages/BranchOperationsPage";

let opsPage: BranchOperationsPage;

When(`user selects BrOPs NextGen UI Dashboard`, async function() {
     opsPage = new BranchOperationsPage(fixture.page);
    fixture.logger.info("Click on NextGen UI Dashboard and select Retail Operations");
    await opsPage.NextGenFun();
    await fixture.page.waitForTimeout(2000)
})
When("selects Open Branch Batch Option", async function(){
   opsPage = new BranchOperationsPage(fixture.page);
  await opsPage.clickopenbranchbatch();
});

When("selects Open Teller Batch Option", async function(){
  
  await opsPage.clickopentellerbatch();
});
When("selects Close Teller Batch Option", async function(){
  
  await opsPage.clickclosetellerbatch();
});
Then('user exits from NextGen BrOPs', async function () {
  opsPage = new BranchOperationsPage(fixture.page);
    await opsPage.NewGenBrOpsexit();
});