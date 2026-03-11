 @AccManagement
Feature:Account Management Feature
 
@AmountBLK1 @AmountBlockAndAuth 
     Scenario Outline: Verify Amount Block And Authorization Success
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And user click on New in Amount Block Input Frame 
    And user enters Account Number as "<Account>"
    And user extracts Reference Number from InputBox
    And user enters amount as "<Amount>" 
    And user enters EffectiveDate as "<Start Date>" 
    And user enters ExpiryDate as "<End Date>"
    And user click on Save Button
    Then user Validates Function to contain "<Success Message>"
    When user Click on TDFrame Exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And user selects status as "<Status>"
    And user enters Block Reference Number
    And user clicks on search and selects record
    And user clicks on Authorize Tab
    And user clicks on Accept Button
    Then user Validates Block Success message with "<Success Message>"
    When user Click on TDFrame Exit button
    And user exits Amount BLK Frame
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    Examples:
   | HomePageTitle                                       | BranchNumber | FunctionName   | Account        |Amount   |Start Date  | End Date  |Success Message|branchnumber|functionname|Status  |
   | Oracle Financial Services - ENG - Transaction Input | 100        | CADAMBLK      | 1016734100015    |1000       |             |         | Success       |  999       | CASAMBLK   |Unauthorized|



 @ACStatement @AcountStatementGeneration 
     Scenario Outline: Verify Account Statement Genetation Success
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And user click on New in Account Statement Input Frame
    And user enters From Date as "<from Date>"
    And user enters To Date as "<to Date>"
    And user enters Account number as "<Account>"
    And user clicks on Ok Button
    Then user Validates Account Statement
    When user exits Account Statement Frame
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application

     Examples:
    | HomePageTitle                                       | BranchNumber | FunctionName   | Account        | from Date | to Date  |branchnumber|
    | Oracle Financial Services - ENG - Transaction Input | 100        | ACDOPTN       | 1013099100014  |    2024-03-03|   2025-11-11  |999         |
   # | Oracle Financial Services - ENG - Transaction Input | 100        | ACDOPTN       | 1038103500017   |    2024-03-07|   2025-11-11  |999         |
    #| Oracle Financial Services - ENG - Transaction Input | 100        | ACDOPTN       | 1016744900011   |    2024-03-03|   2025-11-11  |999         |

@DormancyReAct @DormancyReactivation @tdAccountChange
     Scenario Outline: Verify Dormant Account Reactivation Success
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And user click on New in Account status change Input Frame
    And user enters Dormant Account Number as "<Account>"
    And user selects Norm as New Status
    And user Unchecks Dormant checkbox
    And user clicks on Save Button in Account status change Frame
    Then user Validates Account Status change Success Message with "<Success Message>"
    When user clicks on Exit Button in Account status change Frame
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName1>" and click on search button
    And user selects key id as "<Account>"
    And user clicks on Execute Query and selects record
    And user clicks on accept Button in verify Frame
     Then user Validates Account Status change Success Message with "<Success Message>"
     And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    When CHE second user enters the username and password
    And CHE second user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName2>" and click on search button
    And user enters status as "<status>" in Manual status change Frame
    And user enters account number as "<Account>" in Manual status change Frame
    And user enters search button and selects record from Manual status change Frame
    And user authorizes the record in Manual status Frame
    Then user Validates Manual status change Authsuccess message with "<Success Message>"
    When user clicks on Exit Button in Account status change Frame
    #When user exits Manual status change Frame
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application


 Examples:
    | HomePageTitle                                       | BranchNumber | FunctionName   | Account        | branchnumber|Success Message|FunctionName1|FunctionName2| status     |
    | Oracle Financial Services - ENG - Transaction Input | 100        | STDSTCHN      | 1027436300013 |   999         |  Success      |    CSDVERFY    |STSSTCHN    | Unauthorized |
   # | Oracle Financial Services - ENG - Transaction Input | 100        | STDSTCHN      | 1015125500016 |   999         |  Success      |    CSDVERFY    |STSSTCHN    | Unauthorized |
   #  | Oracle Financial Services - ENG - Transaction Input | 100        | STDSTCHN      | 1017941400028 |   999         |  Success      |    CSDVERFY    |STSSTCHN    | Unauthorized |


