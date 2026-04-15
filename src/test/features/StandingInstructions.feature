@StandingInstructions
Feature: BookTransfer Account Transaction

@StandingInstructionScreens @SBM @TDAccount
    Scenario Outline: Standing Instruction Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "SIDTRONL" and click search button
      And user clicks on Newtab    
      And user enters Product Code as "<Productcodes>"  
      And user click on P button 
      And user enters Debit account branch as "<Debit Account Branch>"
      And user enters debit account as "<Debit Account>"
      And user enters SI amount as "<SI Amount>"
      And user enters Credit account branch as "<Credit Account Branch>"
      And user enters credit account as "<Credit Account>"
      And user enters Number of Installments as "<Installments>"
      And user enters Retry count for Advice as "<Retry count>"
      And click on Enrich tab
      And click on MIS tab
      And user enters Rate Type as "<Rate Type>"
      And user enters Profit Method as "<Profit Method>"
      And user enters Pool Code as "<Pool Code>"
      And user enters Rate Code as "<Rate Code>"
      And clicks on save MIS button
      And clicks on save button
      Then clicks on OK button
      When user exits BookTransferPage
      And User signoff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "PBDOTONL" and click search button
      And user clicks on Enter Query
      And user enters Transaction reference number as "<Transaction Reference Number>" 
      And user clicks on Execute Query
      And user clicks on Authorize tab
      And user clicks on Authorize button
      Then clicks on OK button

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Productcodes | Debit Account Branch |Debit Account |SI Amount | Credit Account Branch| Credit Account | Installments | Retry Count   | Rate Type            | Profit Method | Pool Code | Rate Code |
                  | Oracle Financial Services - ENG - Transaction Input | 000          | SIDTRONL         | CPSB         |  000                 |0002000000035  | 10000      |    000            | 0002000000036  |   1          |  1            | Floating Automatic   | Actual/360    | DFLTPOOL  | FDRATE    |
