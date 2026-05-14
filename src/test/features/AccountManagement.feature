@AccManagement
Feature:Account Management Feature
 
        @AmountBLK1 @SBM @AmountBlockAndAuth @tdAccountchange
        Scenario Outline: Verify Block Customer - Death/ KYC Expiry - CADAMBLK
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
              And user click on New in Amount Block Input Frame
              And user enters Account Number as "<Account>"
              And user extracts Reference Number from InputBox
              And user enters amount as "<Amount>"
              And user enters EffectiveDate as "<Start Date>"
              And user click on Save Button
             Then user Validates Function to contain "<Success Message>"
             When user Click on TDFrame Exit button
              And user SignOff the application
              And CHE user enters the username and password
              And CHE user login in the application
              And valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
              And user in Amount Frame clicks on Enter Query Tab
              And user enters Block Reference Number
              And user clicks on Authorize Tab
              And user clicks on Accept Button
             Then user Validates Block Success message with "<Success Message>"
    # When user Click on TDFrame Exit button
  
        Examples:
                  | HomePageTitle             | BranchNumber | FunctionName | Account       | Amount | Start Date | End Date | Success Message | branchnumber | functionname | Status       |
                  | Oracle Financial Services | 100          | CADAMBLK     | 0002000001002 | 100    |            |          | Success         | 999          | CADAMBLK     | Unauthorized |

     