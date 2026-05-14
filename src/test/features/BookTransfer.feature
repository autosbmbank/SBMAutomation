@BookTransfer
Feature: BookTransfer Account Transaction

        @BookTransferTransaction @SBM @TDAccount
        Scenario Outline: Book Transfer Transaction using Credit by MAK and Authorise by CHE
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
             Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "PBDOTONL" and click search button
              And user clicks on New BT
              And get Transaction reference number BT
              And user enters Networkcodeb as "<Networkcodeb>"
              And user enters Debtor account as "<Debtor Account>"
              And user enters creditor account as "<Creditor Account>"
              And user enters creditor amount as "<Credit Amount>"
              And user enters exchange rate as "<ExchangeRate>"
              And user enters sourcecodeb as "<Source Code>"
              And click on Enrich button
              And clicks on save button
             Then clicks on OK btn
             When user exits BookTransferPage
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "PBDOTONL" and click search button
              And user clicks on Enter Query
              And user enters Transaction reference number BT
              And user clicks on Execute Query
              And user clicks on Authorize tab
              And user clicks on Authorize button
             Then clicks on OK button

    
      
        Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName | Networkcodeb | Debtor Account | Creditor Account | Credit Amount | ExchangeRate | Source Code |
                  | Oracle Financial Services - ENG - Transaction Input | 000          | PBDOTONL     | BOOK_TRF     | 0001073638002  | 0001428031002    | 100           | 3            | MFUKONI     |



