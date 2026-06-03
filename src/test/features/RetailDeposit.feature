@CashDeposit @NextGenUI
Feature: Cash Deposit Transaction

        @Depostit1 @SBM1 @CashDepositwithinlimit  @tdAccountNumberChange
        Scenario Outline: Perform Deposit LCY Cash to Account  - 1401 successfully
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And click on NextGen UI Dashboard
             When user searches for Screen
             When user provides Account Number "<AccountNumber>"
              And user provides Transaction Amount "<TransactionAmount>" currency "<currency>"
              And user provides Customer Interview "<denomination>" "<qty>"
              And user clicks on Save
             Then user validates successful confirmation
 

        Examples:
                  | HomePageTitle             | BranchNumber | AccountNumber | TransactionAmount | denomination | qty | currency |
                  | Oracle Financial Services | 999          | 0012415565001 | 200               | 200          | 1   | KES      |
    # | Oracle Financial Services                            | 999         |  1013099100014| 20000            |1000    | 20|KES|
    
     