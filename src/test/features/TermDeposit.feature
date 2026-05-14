@TermDeposit
Feature: Create and Authorize Term Deposit Account
  
        @TD1 @TDAccountCreation @SBM
        Scenario Outline: Creation of TD Account with PayIn and Payout Details
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
              And enter the Branch number as "001"
            # And enter the Branch number as "<BranchNumber>"
             When user enters the function name as "STDCUSTD" and click search button
              And clicks on New
              And enters the Customer Number "<CustomerNumber>"
              And enters the Account Class "<AccountClass>"
              And enters the Term Deposit Currency "<TDCurrency>"
              And clicks on P button
              And clicks save on the override screen
        # And get the account number in STDCUSTD
              And enters the Initial Deposit Amount "<InitialDepositAmount>"
              And clicks on AddRow + in the Pay In Details section
        #  And selects the Term Deposit Pay In Option from the dropdown "<TDPayIn>"
              And enters the Percentage "<Percentage>"
              And enters the Offset Account "<OffsetAccount>"
              And clicks on AddRow + in the Pay Out Details section
        #  And selects the Payout Type Option from the dropdown "<PayoutType>"
              And enters the PayoutPercentage "<PayoutPercentage>"
              And enters the Payout Offset Account "<PayoutOffsetAccount>"
              And selects the Payout Component from the dropdown "<PayoutComponent>"
              And enters the Location "<Location>"
              And enters the Media "<Media>"
              And clicks on MIS tab
              And enters the Pool Code in the MIS tab "<PoolCode>"
              And clicks on save in MIS tab
              And clicks on the Interest tab
        # And clicks on Ok button
              And clicks on UDE Default
              And clicks on Ok after UDEDefault
              And clicks on Save button3
              And clicks on Compute in the Main tab
        # And Click on check box of Close on Maturity
              And clicks on Save
        # And confirms with Ok after save
              And the user accepts the overrides
              And clicks on Ok after accept
        # Then System should save the record successfully and status should be Unauthorized
              And Click on Exit in STDCUSTD
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
              And enter the Branch number as "001"
             When user enters the function name as "STSCUSTD" and click search button
              And set Authorization Status to Unauthorized for STSCUSTD
              And enters the TDAccount Number for authorization for STSCUSTD
              And enters the Customer Number for authorization for STSCUSTD
              And click on search for STSCUSTD
              And Open the first unauthorized record from results for STSCUSTD
              And Click on Authorize for STSCUSTD
              And Click on Accept button for STSCUSTD
              And Click on Ok after Accept for STSCUSTD
        #  Then System should authorize the record successfully and record status should be Authorized for STSCUSTD
        Examples:
                  | BranchNumber | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount | TDPayIn | Percentage | OffsetAccount | PayoutType | PayoutPercentage | PayoutOffsetAccount | PayoutComponent | Location | Media | PoolCode | branchnumber | functionname |
                  | 100          | STDCUSTD     | 000006         | FDEP         | KES        | 50000                | Account | 100        | 0002057225002 | Account    | 100              | 0002057225002       | Principal       | KE       | MAIL  | DFLTPOOL | 999          | STSCUSTD     |



 