 @TermDeposit
 Feature: Create and Authorize Term Deposit Account 
  
 @TD1 @TDAccountCreation
  Scenario Outline: Creation of TD Account with PayIn and Payout Details
  Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
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
        When user exit the Wholesale page
        And enter the Branch number as "<branchnumber>"
        And user SignOff the application
        When CHE user enters the username and password
        When CHE user login in the application
        And enter the Branch number as "<BranchNumber>"
         When enters the function name as "<functionname>" and click on search button
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
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |branchnumber|functionname|
     | 100           | STDCUSTD     | 10369487       | 302          | LSL        | 5000                 |  Account | 100         | 1038409200010   |   Account     |   100               | 1038409200010       |   Interest        |  100      | MAIL  | DFLTPOOL |999         |STSCUSTD    |



 @TD2 @CloseOnMaturityChk
  Scenario Outline: Check CloseOn Maturity Check Box While creating TD Account
  Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And clicks on New
        And enters the Customer Number "<CustomerNumber>"
        And enters the Account Class "<AccountClass>"
        And enters the Term Deposit Currency "<TDCurrency>"
        And clicks on P button
        And clicks Ok on the override screen
        And enters the Initial Deposit Amount "<InitialDepositAmount>"
        And checks on Tenor checkbox "<Tenor2>"
        And checks on Tenor checkbox "<Tenor1>"
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
        When user exit the Wholesale page
        And enter the Branch number as "<branchnumber>"
        And user SignOff the application
        When CHE user enters the username and password
        When CHE user login in the application
        And enter the Branch number as "<BranchNumber>"
         When enters the function name as "<functionname>" and click on search button
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
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |branchnumber|functionname|Tenor2            |Tenor1        |
     | 100           | STDCUSTD     | 10369487       | 302          | LSL        |5000                |  Account | 100         | 1038409200010  |   Account     |   100               | 1038409200010       |   Principal       |  100      | MAIL  | DFLTPOOL |999         |STSCUSTD    |Close on Maturity|Auto Rollover|

 @TD3 @TDAccRollOverType 
  Scenario Outline: changes RollOver Type while creating TD Account
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
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
         And checks on RollOver Details Tab "<Rollover>","<Rolloveramount>"
        And clicks on MIS tab
        And enters the Pool Code in the MIS tab "<PoolCode>"
        And clicks on ok in MIS tab
        And clicks on the Interest tab
        And clicks on UDE Default
        And clicks on Ok after UDEDefault
        And clicks on Compute in the Main tab
        # And checks on RollOver Details Tab "<Rollover>"
        And clicks on Save 
        And confirms with Ok after save
        And the user accepts the overrides
        And clicks on Ok after accept
        Then System should save the record successfully and status should be Unauthorized
        When user exit the Wholesale page
        And enter the Branch number as "<branchnumber>"
        And user SignOff the application
        When CHE user enters the username and password
        When CHE user login in the application
        And enter the Branch number as "<BranchNumber>"
      When enters the function name as "<functionname>" and click on search button
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
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass |Rollover           | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |branchnumber|functionname|Rolloveramount|
     | 100           | STDCUSTD     | 10369487       | 302          |Principal + Interest| LSL        | 5000                 |  Account | 100         | 1038409200010  |   Account     |   100               | 1038409200010       |  Principal       |  100      | MAIL  | DFLTPOOL |999         |STSCUSTD      |      |
     | 100           | STDCUSTD     | 10369487       | 302          |Interest           | LSL        | 5000                 |  Account | 100         | 1038103800018   |   Account     |   100               | 1036884100019       |  Principal       |  100      | MAIL  | DFLTPOOL |999         |STSCUSTD    |       |
   | 100           | STDCUSTD     | 10369487       | 302            |Special Amount     | LSL        | 5000                 |  Account | 100         | 1038409200010  |   Account     |   100               | 1038409200010       |  Principal       |  100      | MAIL     | DFLTPOOL      |999       |STSCUSTD  |  1000   |
   | 100           | STDCUSTD     | 10369487       | 302            |Principal          | LSL        | 5000                 |  Account | 100         | 1038409200010  |   Account     |   100               | 1038409200010       |  Principal       |  100      | MAIL  | DFLTPOOL     |999             |STSCUSTD   |     |         
@TD @DateChangeTDRate
  Scenario Outline: Perform Rate Change for Term Deposit with Date Change
  Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
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
        And user changes the rate change to Current Date 
        And clicks on UDE Default
        And clicks on Ok after UDEDefault
        And clicks on Compute in the Main tab
        And clicks on Save 
        And confirms with Ok after save
        And the user accepts the overrides
        And clicks on Ok after accept
        Then System should save the record successfully and status should be Unauthorized
        When user exit the Wholesale page
        And enter the Branch number as "<branchnumber>"
        And user SignOff the application
        When CHE user enters the username and password
        When CHE user login in the application
        And enter the Branch number as "<BranchNumber>"
         When enters the function name as "<functionname>" and click on search button
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
     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn | Percentage  | OffsetAccount   |   PayoutType  |   PayoutPercentage  | PayoutOffsetAccount |   PayoutComponent |  Location | Media | PoolCode |branchnumber|functionname|
     | 100           | STDCUSTD     | 10369487       | 302          | LSL        | 5000                 |  Account | 100         | 1038409200010   |   Account    |   100               | 1036884100019       |   Interest        |  100      | MAIL  | DFLTPOOL |999         |STSCUSTD    |


@TD6 @TDRedemption  @tdAccountNumberandPayoutOffsetAccountchange
  Scenario Outline: Partial and Full Redemption of Term Deposit Account
       Given User navigates to the application
       When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And clicks on new tab in Remption screen
         And enters Term Deposit Account Number "<AccountNumber>"
         # And enters Product Code "<ProductCode>"
         And User selects Redemption Mode as "<RedemptionMode>"
         And User enters Redemption Amount as "<RedemptionAmount>"
         And User clicks on Compute in RedemptionPage
         And User clicks on AddRow in the PayOut 
         And User enters PayOut Details as "<PayoutType>","<PayoutPercentage>","<PayoutOffsetAccount>"      
         And User enters Redemption Amount in the Pay Out Details section "<RedemptionAmount>"
         And User click on Save in Redemption Page
         Then User confirms the Save information message
         And enter the Branch number as "<branchnumber>"
        And user SignOff the application
        When CHE user enters the username and password
        When CHE user login in the application
        And enter the Branch number as "<BranchNumber>"
       When enters the function name as "<functionname>" and click on search button
       And user changes Authorization Status to Unauthorized for ICSREDMN
      And enters Parent Account as "<AccountNumber>"
      And User click search in Redemption Page
      And User Clicks on Authorize for ICDREDMN
      And User accepts Authorize for ICDREDMN
      Then User confirms the Authorization success message "<successmsg>"

Examples:
| HomePageTitle                                       | BranchNumber | FunctionName | AccountNumber | RedemptionMode | RedemptionAmount | PayoutType | PayoutPercentage | PayoutOffsetAccount | RedemptionAmount |functionname |branchnumber|successmsg|
| Oracle Financial Services - ENG - Transaction Input | 100          | ICDREDMN     | 1005142700055 | Partial Redemption      |  2000            | Account    |     100          | 1005142700022       | 1000     |ICSREDMN |999       | Successfully |
 | Oracle Financial Services - ENG - Transaction Input | 100          | ICDREDMN     | 1005142700055 |Full Redemption       |  2000            | Account    |     100          | 1005142700022       | 2000       |ICSREDMN |999        | Successfully |



 