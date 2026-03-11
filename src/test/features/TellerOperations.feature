@TellerOperations @NextGenUI
Feature:Teller Operations Feature

   
  @TellerOperations1 @UserCreationandAuthSuccess @tdstartdatechange
    Scenario Outline: Validate User creation & Autherization process
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And user selects NextGen UI Dashboard and select Retail Operations 
     When user searches for in menu bar
    And user enters Login ID "<LoginID>"
    And user enters Username "<Username>"
    And user selects Home Branch "<HomeBranch>"
    And user selects User Status 
    And user enters Start Date "<StartDate>"
    And user selects Language Code "<Language>"
    And user click on add
    And user click on add
    And User enters Branch "<Branch1>" 
    And user enters Role "<Role1>"
    And user deletes row
     And user click on add
    And User enters Branch "<Branch2>" 
    And user enters Role "<Role2>"
    And user clicks on add2
    And user adds User Application "<App1>"
     And user deletes Application row
    And user adds User Application "<App2>"
    And user adds User Application "<App3>"
    And user adds User Application "<App4>"
    And user adds User Application "<App5>"
    And user clicks Save
    Then system should display success popup
    When user exits NewGenPage
     And user SignOff the application
    And CHE user enters the username and password 
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
     And user selects NextGen UI Dashboard and select Retail Operations 
    When user searches for ViewUser in menu bar
    When user selects authorization status "<Status>","<LoginID>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
     When user exits NewGenPage
     And user SignOff the application


 Examples:
      | HomePageTitle                                       | BranchNumber | LoginID | Username    | HomeBranch | Status | StartDate       | Language | Branch1 | Role1           | Branch2 | Role2         | App1  | App2 | App3 | App4    | App5     |   Status    |
    | Oracle Financial Services - ENG - Transaction Input | 999        | AUTO     | AUTOUSER      | 100        | Enable | DEC 03, 2025  | ENG      | 100     | OBBRN_MANAGER        |100  | OBBRN_BASE    | PLATO | REMO | OBPY | DEPOSIT | LOAN | Unauthorized  |


  @TellerOperations3 @VaultTellerCreationAndAuthSuccess @tdstartdatechange 
 
    Scenario Outline: Validate Vault Teller creation & Autherization process
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    When user searches for in menu bar
    And user enters Login ID "<LoginID>"
    And user enters Username "<Username>"
    And user selects Home Branch "<HomeBranch>"
    And user selects User Status 
    And user enters Start Date "<StartDate>"
    And user selects Language Code "<Language>"
    And user click on add
    And user click on add
    And User enters Branch "<Branch1>" 
    And user enters Role "<Role1>"
    And user deletes row
     And user click on add
    And User enters Branch "<Branch2>" 
    And user enters Role "<Role2>"
    And user clicks on add2
    And user adds User Application "<App1>"
     And user deletes Application row
    And user adds User Application "<App2>"
    And user adds User Application "<App3>"
    And user adds User Application "<App4>"
    And user adds User Application "<App5>"
    And user clicks Save
    Then system should display success popup
    When user exits NewGenPage
     And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
     And user selects NextGen UI Dashboard and select Retail Operations
     When user searches for ViewUser in menu bar
    When user selects authorization status "<Status>","<LoginID>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
     When user exits NewGenPage
     And user SignOff the application
      When MAK user enters the username and password
    And MAK user login in the application
     Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
    And user clicks on Add button in Branch User Limit
    And user selects Branch Code "<BranchCode>" 
    And user selects User ID "<UserId>" from LOV
    And user selects Till Vault Indicator "<TillType>"
    And user adds Currency Holding Preference with "<CH_Currency>" "<MinBal>" "<MaxBal>"
    And user adds Currency Limit Preference with "<CL_Currency>" "<MaxTxnAmt>" "<AuthLimit>"
     And user clicks Save
     Then user validates function
    When user exits NewGenPage
     And user SignOff the application
      And CHE user enters the username and password
    And CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
     When user selects Vault authorization status "<Status1>","<UserId>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
 

 Examples:
      | HomePageTitle                                       | BranchNumber | LoginID | Username    | HomeBranch | status | StartDate       | Language | Branch1 | Role1           | Branch2 | Role2         | App1  | App2 | App3 | App4    | App5     |   Status    |SearchName      |    Status1        |TillType1| BranchCode | UserId   | TillType | CH_Currency | MinBal | MaxBal           | CL_Currency | MaxTxnAmt | AuthLimit     |Status1    |BranchName|
    | Oracle Financial Services - ENG - Transaction Input | 999        | AUTO     | AUTOUSER      | 100        | Enable |DEC 03, 2025  | ENG      | 100     | OBBRN_MANAGER        |100  | OBBRN_BASE    | PLATO | REMO | OBPY | DEPOSIT | LOAN | Unauthorized  | Branch User Limits| Authorized       |Vault    |*.*       | AUTO26     | Till    | LSL          | 0.00    | 9,999,999,999.00| LSL    | 5,000.00   | 9,999,999.00    |Unauthorized| 100     |

   @TellerOperations2 @SupervisorUserCreationAndAuthSuccess @tdstartdatechange
    Scenario Outline: Validate SupervisorUser creation & Autherization process
   Given User navigates to the application
   When MAK user enters the username and password
   And click on signin button
  Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And user selects NextGen UI Dashboard and select Retail Operations 
    When user searches for in menu bar
    And user enters Login ID "<LoginID>"
    And user enters Username "<Username>"
    And user selects Home Branch "<HomeBranch>"
    And user selects User Status 
    And user celects SuperVisor
    And user enters Start Date "<StartDate>"
    And user selects Language Code "<Language>"
    And user click on add
    And user click on add
    And User enters Branch "<Branch1>" 
    And user enters Role "<Role1>"
    And user deletes row
     And user click on add
    And User enters Branch "<Branch2>" 
    And user enters Role "<Role2>"
    And user clicks on add2
    And user adds User Application "<App1>"
     And user deletes Application row
    And user adds User Application "<App2>"
    And user adds User Application "<App3>"
    And user adds User Application "<App4>"
    And user adds User Application "<App5>"
    And user clicks Save
    Then system should display success popup
     When user exits NewGenPage
     And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    When user searches for ViewUser in menu bar
    When user selects authorization status "<Status>","<LoginID>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
     When user exits NewGenPage
     And user SignOff the application



  Examples:
   | HomePageTitle                                       | BranchNumber | LoginID | Username      | HomeBranch    | Status | StartDate       | Language | Branch1     | Role1              | Branch2 | Role2         | App1  | App2 | App3 | App4    | App5 |
    | Oracle Financial Services - ENG - Transaction Input | 999        | ADMIN02     | ADMINUSER2      | 100        | Enable | DEC 03, 2025  | ENG      | 100     | CASA_SUPERVISOR       |100  | OBBRN_BASE    | PLATO | REMO | OBPY | DEPOSIT | LOAN |

     @TellerOperations4 @TellerToVaultAutherizationSuccess @tdstartdatechange
    Scenario Outline: Validate Teller to Vault creation & Autherization process
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    When user searches for in menu bar
    And user enters Login ID "<LoginID>"
    And user enters Username "<Username>"
    And user selects Home Branch "<HomeBranch>"
    And user selects User Status 
    And user enters Start Date "<StartDate>"
    And user selects Language Code "<Language>"
    And user click on add
    And user click on add
    And User enters Branch "<Branch1>" 
    And user enters Role "<Role1>"
    And user deletes row
     And user click on add
    And User enters Branch "<Branch2>" 
    And user enters Role "<Role2>"
    And user clicks on add2
    And user adds User Application "<App1>"
     And user deletes Application row
    And user adds User Application "<App2>"
    And user adds User Application "<App3>"
    And user adds User Application "<App4>"
    And user adds User Application "<App5>"
    And user clicks Save
    Then system should display success popup
    When user exits NewGenPage
     And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
     And user selects NextGen UI Dashboard and select Retail Operations 
     When user searches for ViewUser in menu bar
    When user selects authorization status "<Status>","<LoginID>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success
     When user exits NewGenPage
     And user SignOff the application
    When MAK user enters the username and password
    And MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
    And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
    And user clicks on Add button in Branch User Limit
    And user selects Branch Code "<BranchCode>" 
    And user selects User ID "<UserId>" from LOV
    And user selects Till Vault Indicator "<TillType>"
    And user adds Currency Holding Preference with "<CH_Currency>" "<MinBal>" "<MaxBal>"
    And user adds Currency Limit Preference with "<CL_Currency>" "<MaxTxnAmt>" "<AuthLimit>"
     And user clicks Save
     Then user validates function
     When user exits NewGenPage
     And user SignOff the application
      And CHE user enters the username and password
    And CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
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
     And MAK user login in the application
     Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
     When user selects Vault authorization status "<Status1>","<value>"
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
   And enter the Branch number as "<BranchNumber>"
   And user selects NextGen UI Dashboard and select Retail Operations 
    And user enters in Menu Bar "<SearchName>"
     When user selects Vault authorization status "<Status>","<value>"
    And user clicks on Search button
    And user clicks on three dot menu
    And user clicks on Authorize option
    And user approves the record
    Then user validates authorization success

 Examples:
      | HomePageTitle                                       | BranchNumber | LoginID | Username    | HomeBranch | status | StartDate       | Language | Branch1 | Role1           | Branch2 | Role2         | App1  | App2 | App3 | App4    | App5     |   Status    |SearchName      |    Status1        |TillType1| BranchCode | UserId   | TillType | CH_Currency | MinBal | MaxBal           | CL_Currency | MaxTxnAmt | AuthLimit     |Status1    |BranchName|
    | Oracle Financial Services - ENG - Transaction Input | 999        | AUTO     | AUTOUSER      | 100        | Enable |DEC 03, 2025  | ENG      | 100     | OBBRN_MANAGER        |100  | OBBRN_BASE    | PLATO | REMO | OBPY | DEPOSIT | LOAN | Unauthorized  | Branch User Limits| Authorized       |Vault    |*.*       | AUTO26     | Till    | LSL          | 0.00    | 9,999,999,999.00| LSL    | 5,000.00   | 9,999,999.00    |Unauthorized| 100     |