 @Wholesale
 Feature: Create and Authorize Term Deposit Account in STDCUSTD screen
  
  @ChangeTDRate
  Scenario Outline: Maker changes the TDRate
  Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
    # Then validate the home page title as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And clicks on New
        And enters the Customer Number "<CustomerNumber>"
        And enters the Account Class "<AccountClass>"
        And enters the Term Deposit Currency "<TDCurrency>"
        And clicks on P button
        And clicks Ok on the override screen
        And enters the Initial Deposit Amount "<InitialDepositAmount>"
        And clicks on AddRow + in the Pay In Details section
        And selects the Term Deposit Pay In Option from the dropdown "<TDPayIn>"
        And enters the Percentage "<Percentage>"
        And enters the Offset Account "<OffsetAccount>"
        And clicks on AddRow + in the Pay Out Details section
        And selects the Payout Type Option from the dropdown "<PayoutType>"
        And enters the PayoutPercentage "<PayoutPercentage>"
        And enters the Payout Offset Account "<PayoutOffsetAccount>"
        And selects the Payout Component from the dropdown "<PayoutComponent>"
        And enters the Location "<Location>"
        And enters the Media "<Media>"
        And clicks on MIS tab
        And enters the Pool Code in the MIS tab "<PoolCode>"
        And clicks on ok in MIS tab
        And clicks on the Interest tab
        And clicks on UDE Default
        And clicks on Ok after UDEDefault
        And clicks on Compute in the Main tab
        And clicks on Save 
        And confirms with Ok after save
        And the user accepts the overrides
        And clicks on Ok after accept
        Then System should save the record successfully and status should be Unauthorized
        Examples:
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |
     | 100           | STDCUSTD     | 10369487       | 305          | LSL        | 5000                 |  Account | 100         | 1036884100019   |   Account     |   100               | 1036884100019       |   Interest        |  100      | MAIL  | DFLTPOOL |


   @TermDepositAuthorization
 Scenario Outline: Checker authorizes the Term Deposit Account
     Given User navigates to the application
     When CHE user enters the username and password
     And click on signin button as cheker
     And enter the Branch number as "<BranchNumber>"
     When enters the function name as "<FunctionName>" and click on search button
     And set Authorization Status to Unauthorized for STSCUSTD
     And enters the TDAccount Number for authorization for STSCUSTD
     And enters the Customer Number for authorization for STSCUSTD
     And click on search for STSCUSTD
     And Open the first unauthorized record from results for STSCUSTD
     And Click on Authorize for STSCUSTD
     And Click on Accept button for STSCUSTD
     And Click on Ok after Accept for STSCUSTD
     Then System should authorize the record successfully and record status should be Authorized for STSCUSTD
    Examples:
      | BranchNumber  | FunctionName |
      | 100           | STSCUSTD     |

     @ChangeTDFrate
Scenario Outline: Maker changes the TDF rate
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    # Then validate the home page title as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And clicks on New
    And enters the Customer Number "<CustomerNumber>"
    And enters the Account Class "<AccountClass>"
    And enters the Term Deposit Currency "<TDCurrency>"
    And clicks on P button
    And clicks Ok on the override screen
    And enters the Initial Deposit Amount "<InitialDepositAmount>"
    And clicks on AddRow + in the Pay In Details section
    And selects the Term Deposit Pay In Option from the dropdown "<TDPayIn>"
    And enters the Percentage "<Percentage>"
    And enters the Offset Account "<OffsetAccount>"
    And clicks on AddRow + in the Pay Out Details section
    And selects the Payout Type Option from the dropdown "<PayoutType>"
    And enters the PayoutPercentage "<PayoutPercentage>"
    And enters the Payout Offset Account "<PayoutOffsetAccount>"
    And selects the Payout Component from the dropdown "<PayoutComponent>"
    And enters the Location "<Location>"
    And enters the Media "<Media>"
    And clicks on MIS tab
    And enters the Pool Code in the MIS tab "<PoolCode>"
    And clicks on ok in MIS tab
    And clicks on the Interest tab
    And clicks on UDE Default
    And clicks on Ok after UDEDefault
    And clicks on Compute in the Main tab
    And clicks on Save 
    And confirms with Ok after save
    And the user accepts the overrides
    And clicks on Ok after accept
    Then System should save the record successfully and status should be Unauthorized
     Examples:
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |
     | 100           | STDCUSTD     | 10369487       | 307          | LSL        | 5000                 |  Account | 100         | 1036884100019   |   Account     |   100               | 1036884100019       |   Interest        |  100      | MAIL  | DFLTPOOL |


  @TermDepositAuthorization
   Scenario Outline: Checker authorizes the Term Deposit Account
    Given User navigates to the application
    When CHE user enters the username and password
    And click on signin button as cheker
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And set Authorization Status to Unauthorized for STSCUSTD
    And enters the TDAccount Number for authorization for STSCUSTD
    And enters the Customer Number for authorization for STSCUSTD
    And click on search for STSCUSTD
    And Open the first unauthorized record from results for STSCUSTD
    And Click on Authorize for STSCUSTD
    And Click on Accept button for STSCUSTD
    And Click on Ok after Accept for STSCUSTD
    Then System should authorize the record successfully and record status should be Authorized for STSCUSTD
     Examples:
      | BranchNumber  | FunctionName |
      | 100           | STSCUSTD     |

  
       @ChangeTDMrate
    Scenario Outline: Maker changes the TDM rate
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    # Then validate the home page title as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And clicks on New
    And enters the Customer Number "<CustomerNumber>"
    And enters the Account Class "<AccountClass>"
    And enters the Term Deposit Currency "<TDCurrency>"
    And clicks on P button
    And clicks Ok on the override screen
    And check Cascade Month-End Maturity Date
    And enters the Initial Deposit Amount "<InitialDepositAmount>"
    And clicks on AddRow + in the Pay In Details section
    And selects the Term Deposit Pay In Option from the dropdown "<TDPayIn>"
    And enters the Percentage "<Percentage>"
    And enters the Offset Account "<OffsetAccount>"
    And clicks on AddRow + in the Pay Out Details section
    And selects the Payout Type Option from the dropdown "<PayoutType>"
    And enters the PayoutPercentage "<PayoutPercentage>"
    And enters the Payout Offset Account "<PayoutOffsetAccount>"
    And selects the Payout Component from the dropdown "<PayoutComponent>"
    And enters the Location "<Location>"
    And enters the Media "<Media>"
    And clicks on MIS tab
    And enters the Pool Code in the MIS tab "<PoolCode>"
    And clicks on ok in MIS tab
    And clicks on the Interest tab
    And clicks on UDE Default
    And clicks on Ok after UDEDefault
    And clicks on Compute in the Main tab
    And clicks on Save 
    And confirms with Ok after save
    And the user accepts the overrides
    And clicks on Ok after accept
    Then System should save the record successfully and status should be Unauthorized
     Examples:
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |
     | 100           | STDCUSTD     | 10369487       | 620          | LSL        | 5000                 |  Account | 100         | 1036884100019   |   Account     |   100               | 1036884100019       |   Interest        |  100      | MAIL  | DFLTPOOL |


   @TermDepositAuthorization
   Scenario Outline: Checker authorizes the Term Deposit Account
    Given User navigates to the application
    When CHE user enters the username and password
    And click on signin button as cheker
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And set Authorization Status to Unauthorized for STSCUSTD
    And enters the TDAccount Number for authorization for STSCUSTD
    And enters the Customer Number for authorization for STSCUSTD
    And click on search for STSCUSTD
    And Open the first unauthorized record from results for STSCUSTD
    And Click on Authorize for STSCUSTD
    And Click on Accept button for STSCUSTD
    And Click on Ok after Accept for STSCUSTD
    Then System should authorize the record successfully and record status should be Authorized for STSCUSTD
    Examples:
      | BranchNumber  | FunctionName |
      | 100           | STSCUSTD     |

       @ChangeRDrate
     Scenario Outline: Maker changes the RD rate
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    # Then validate the home page title as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And clicks on New
    And enters the Customer Number "<CustomerNumber>"
    And enters the Account Class "<AccountClass>"
    And enters the Term Deposit Currency "<TDCurrency>"
    And clicks on P button
    And clicks Ok on the override screen
    And clicks on AddRow + in the Pay Out Details section
    And selects the Payout Type Option from the dropdown "<PayoutType>"
    And enters the PayoutPercentage "<PayoutPercentage>"
    And enters the Payout Offset Account "<PayoutOffsetAccount>"
    And selects the Payout Component from the dropdown "<PayoutComponent>"
    And check the Auto Payment TakeDown Option
    And enters Payment Branch in Recurring Deposit "<PaymentBranch>"
    And enters Payment Account in Recurring Deposit "<PaymentAccount>"       
    And enters Installment amount in Recurring Deposit "<Installamount>"
    And checks Recurring Deposit Accoun checkbox
    And enters the Location "<Location>"
    And enters the Media "<Media>"
    And clicks on MIS tab
    And enters the Pool Code in the MIS tab "<PoolCode>"
    And clicks on ok in MIS tab
    And clicks on the Interest tab
    And clicks on UDE Default
    And clicks on Ok after UDEDefault
    And clicks on Compute in the Main tab
    And clicks on Save 
    And confirms with Ok after save
    And the user accepts the overrides
    And clicks on Ok after accept
    Then System should save the record successfully and status should be Unauthorized
     Examples:
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |    PaymentAccount  |  PaymentBranch|    Installamount | PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |
     | 100           | STDCUSTD     | 10369487       | 310          | LSL        | 5000                 |  Account | 100         | 1036884100019   |    1036884100019   |   100         |    1000          | Account     |   100               | 1036884100019       |   Principal        |  100      | MAIL  | DFLTPOOL |


   @TermDepositAuthorization
   Scenario Outline: Checker authorizes the Term Deposit Account
   Given User navigates to the application
   When CHE user enters the username and password
   And click on signin button as cheker
   And enter the Branch number as "<BranchNumber>"
   When enters the function name as "<FunctionName>" and click on search button
   And set Authorization Status to Unauthorized for STSCUSTD
   And enters the TDAccount Number for authorization for STSCUSTD
   And enters the Customer Number for authorization for STSCUSTD
   And click on search for STSCUSTD
   And Open the first unauthorized record from results for STSCUSTD
   And Click on Authorize for STSCUSTD
   And Click on Accept button for STSCUSTD
   And Click on Ok after Accept for STSCUSTD
   Then System should authorize the record successfully and record status should be Authorized for STSCUSTD
    Examples:
      | BranchNumber  | FunctionName |
      | 100           | STSCUSTD     |