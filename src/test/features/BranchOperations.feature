 @BranchOps
Feature: Open And Close Branch and Teller Batch 

@BranchOps1 @SBM @openBranchBatchAndTellerBatch
  Scenario Outline: Perform Open Branch Batch successfully
  Given User navigates to the application
   When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
   And user selects BrOPs NextGen UI Dashboard
         And selects Open Branch Batch Option
        And selects Open Teller Batch Option
      #  And user exits from NextGen BrOPs
       
        
 Examples:
         | HomePageTitle                                       | BranchNumber |
         | Oracle Financial Services                           | 000     |


@BranchOps2 @SBM @OpenVaultandTill @tdUserIdchangeandTillType
  Scenario Outline: Perform Open Till or Vault
  Given User navigates to the application
   When MAK user enters the username and password
   When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
   And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
    And user clicks on Add button in Branch User Limit
    And user selects Branch Code "<BranchCode>" 
      And user selects User ID "<UserId>" from LOV
    And user selects Till Vault Indicator "<TillType>"
    And user adds Currency Holding Preference with "<CH_Currency>" "<MinBal>" "<MaxBal>"
    And user adds Currency Limit Preference with "<CL_Currency>" "<MaxTxnAmt>" "<AuthLimit>"
     And user clicks Save
     When user exits NewGenPage
    And user SignOff the application
     And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
     When user selects Vault authorization status "<Status1>","<UserId>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
     When user exits NewGenPage
     

     Examples:
      | HomePageTitle                                       |   Status    |SearchName      |    status1        |TillType1| BranchCode | UserId   | TillType | CH_Currency | MinBal | MaxBal           | CL_Currency | MaxTxnAmt | AuthLimit     |Status1    |BranchName|
    |  Oracle Financial Services                              | Unauthorized  | Branch User Limits| Authorized       |Vault    |*.*       | DINESH1    | Till    |KES         | 0.00    | 9,999,999,999.00| KES   | 5,000.00   | 9,999,999.00    |Unauthorized| 100     |

    @BranchOps3 @SBM @TillToVaultandVaultToTill @tdUserIdandTillTypeandTillTypechange
  Scenario Outline: Perform vault to teller and teller to vault change successfully
  Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
    And user clicks on Add button in Branch User Limit
    And user selects Branch Code "<BranchCode>" 
    And user selects User ID "<UserId>" from LOV
    And user selects Till Vault Indicator "<TillType>"
    And user adds Currency Holding Preference with "<CH_Currency>" "<MinBal>" "<MaxBal>"
    And user adds Currency Limit Preference with "<CL_Currency>" "<MaxTxnAmt>" "<AuthLimit>"
    And user clicks Save
    When user exits NewGenPage
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
     When user selects Vault authorization status "<Status1>","<UserId>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
     When user exits NewGenPage
    And user SignOff the application
    When MAK user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
   And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
     When user selects Vault authorization status "<status1>","<UserId>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Unlock option
     And user selects Till Vault Indicator "<TillType1>"
      And user clicks Save
       When user exits NewGenPage
     And user SignOff the application
      And CHE user enters the username and password
   And CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
   And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
    When user selects Vault authorization status "<Status1>","<UserId>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success

 Examples:
      | HomePageTitle                                       | BranchNumber | LoginID | Username    | HomeBranch | status | StartDate       | Language | Branch1 | Role1           | Branch2 | Role2         | App1  | App2 | App3 | App4    | App5     |   Status    |SearchName      |    status1        |TillType1| BranchCode | UserId   | TillType | CH_Currency | MinBal | MaxBal           | CL_Currency | MaxTxnAmt | AuthLimit     |Status1    |BranchName|
    # |  Oracle Financial Services                              | 999        | AUTO     | AUTOUSER      | 100        | Enable |DEC 03, 2025  | ENG      | 100     | OBBRN_MANAGER        |100  | OBBRN_BASE    | PLATO | REMO | OBPY | DEPOSIT | LOAN | Unauthorized  | Branch User Limits| Authorized       |Vault    |*.*       | CLPMAUTO8  | Till    |KES         | 0.00    | 9,999,999,999.00| KES   | 5,000.00   | 9,999,999.00    |Unauthorized| 100     |
     |  Oracle Financial Services                              | 999        | AUTO     | AUTOUSER      | 100        | Enable |DEC 03, 2025  | ENG      | 100     | OBBRN_MANAGER        |100  | OBBRN_BASE    | PLATO | REMO | OBPY | DEPOSIT | LOAN | Unauthorized  | Branch User Limits| Authorized       |Till    |*.*       | CLPMAUTO7  | Vault    |KES         | 0.00    | 9,999,999,999.00| KES   | 5,000.00   | 9,999,999.00    |Unauthorized| 100     |