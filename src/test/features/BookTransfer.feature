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
      And user clicks on New    
      And user enters Networkcodeb as "<Networkcodeb>"  
      And user enters Debtor account as "<Debtor Account>"  
      And user enters creditor account as "<Creditor Account>"
      # And user enters creditor Currency as "<Credit Currency>"
      And user enters creditor amount as "<Credit Amount>"
      And user enters exchange rate as "<Exchangerate>"
      And user enters sourcecodeb as "<Source Code>"
      And click on Enrich button
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
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Networkcodeb | Debtor Account | Creditor Account | Credit Amount | ExchangeRate | Source Code   |
                  | Oracle Financial Services - ENG - Transaction Input | 000          | PBDOTONL         | BOOK_TRF  |  0001073638002  | 0001428031002      |    300        |  1.2           |   MFUKONI  |



#@Authorize
 #    Scenario Outline: Authorizing Book Transfer Transaction
  #     Given User navigates to the application
   #           When MAK user enters the username and password
    #           When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
     #         Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
      #       When user enters the function name as "PBDOTONL" and click search button
       #And user clicks on Enter Query
       #And user enters Transaction reference number as "<Transaction Reference Number>" 
       #And clicks on Execute Query
       #And user clicks on Authorize tab
       #And user clicks on Authorize button
       #Then clicks on OK button

      #Examples:  
      
      #             | HomePageTitle                                       | BranchNumber | FunctionName     | Transaction Reference Number   | 
       #            | Oracle Financial Services - ENG - Transaction Input | 000          | PBDOTONL         | 2608601436431000         | 



  #@DeleteBookTransferTransaction
   # Scenario Outline: Book Transfer Transaction using Credit and Delete by MAK
     # Given User navigates to the application
     # When MAK user enters the username and password
     # And click on signin button
      #Then valdiate the home page tite as "<HomePageTitle>"
      #And enter the Branch number as "<BranchNumber>"
      #When enters the function name as "<FunctionName>" and click on search button
      #And user clicks on New
      #And user enters source code as "<Source Code>"
      #And user enters Debtor account as "<Debtor Account>"  
      #And user enters creditor account as "<Creditor Account>"
      #And user enters creditor Currency as "<Credit Currency>"
      #And user enters creditor amount as "<Credit Amount>"
      #And click on Enrich button
      #And clicks on save button
      #Then clicks on OK button
      # #When user exits BookTransferPage
      # #And user SignOff the application
      # Given User navigates to the application
      # When MAK user enters the username and password
      # And click on signin button
      # Then valdiate the home page tite as "<HomePageTitle>"
      # And enter the Branch number as "<BranchNumber>"
      # When enters the function name as "<FunctionName>" and click on search button
      # And user clicks on Enter Query
      # And user enters Transaction reference number as "<Transaction Reference Number>" 
      # And clicks on Execute Query
      #And clicks on Delete 
      #Then clicks on OK button
      


      #Examples:  
      
     #             | HomePageTitle                                       | BranchNumber | FunctionName     | Transaction Reference Number   | 
      #            | Oracle Financial Services - ENG - Transaction Input | 100          | PBDOTONL         | 2604201424099000               | 

     

#@BookTransferTransactionforDebit
 #    Scenario:Book Transfer Transaction using Debit by MAK
  #           Given User navigates to the application
   #          When MAK user enters the username and password
    #         And click on signin button
     #       Then valdiate the home page tite as "<HomePageTitle>"
      #       And enter the Branch number as "<BranchNumber>"
       #      When enters the function name as "<FunctionName>" and click on search button
        #     And user clicks on New
         #    And user enters source code as "<Source Code>"
          #   And user selects Instructed Currency Indicator as "<Debit Currency>"
           #  And user enters Debtor account as "<Debtor Account>" 
            # And user enters the debit amount as "<Amount>"
             #And user enters creditor account as "<Creditor Account>"
             #And click on Enrich button
             #And clicks on save button
             #Then clicks on OK button
            
    #Examples:  
      
     #           | HomePageTitle             | BranchNumber | FunctionName | Sourcecode  | InstructedCurrencyIndicator | Amount | Debtor Account | Creditor Account |
      #          | Oracle Financial Services | 999          | PBDOTONL     | INTERNTRFR  | Debit Currency              | 100    | 1036949200020  | 1023542200013    |



#@BookTransferTransactionusingTemplateId
 #    Scenario:Book Transfer Transaction using Template ID by MAK  and Authorise by CHE
  #           Given User navigates to the application
   #          When MAK user enters the username and password
    #         And click on signin button
     #       Then valdiate the home page tite as "<HomePageTitle>"
      #       And enter the Branch number as "<BranchNumber>"
       #      When enters the function name as "<FunctionName>" and click on search button
        #     And user clicks on New
         #    And user enters source code as "<Source Code>"
          #   And user selects checkbox "<Credit to GL>"
           #  And user selects Instructed Currency Indicator as "<Debit Currency>"
            # And user enters Debtor account as "<Debtor Account>" 
             #And user enters the debit amount as "<Amount>"
             #And user enters creditor account as "<Creditor Account>"
             #And click on Enrich button
             #And clicks on save button
             #Then clicks on OK button
            #  When user exits BookTransferPage
      #And user SignOff the application
      #Given User navigates to the application
      #When CHE user enters the username and password
      #And CHE user login in the application
      #Then valdiate the home page tite as "<HomePageTitle>"
      #And enter the Branch number as "<BranchNumber>"
      #When enters the function name as "<FunctionName>" and click on search button
      #And user clicks on Enter Query
      #And user enters Transaction reference number as "<Transaction Reference Number>" 
      #And clicks on Execute Query
      #And user clicks on Authorize tab
      #And user clicks on Authorize button
      #Then clicks on OK button
            
    #Examples:  
      
     #           | HomePageTitle             | BranchNumber | FunctionName | Sourcecode  | InstructedCurrencyIndicator | Amount | Debtor Account | Creditor Account |
      #          | Oracle Financial Services | 999          | PBDOTONL     | INTERNTRFR  | Debit Currency              | 100    | 1036949200020  | 1023542200013    |

#@AuthorizationusingMaker
 #     Scenario Outline: Authorizing Book Transfer Transaction using Maker Checker
  #    Given User navigates to the application
   #   When CHE user enters the username and password
    #  And click on signin button
     # Then valdiate the home page tite as "<HomePageTitle>"
      #And enter the Branch number as "<BranchNumber>"
      #When enters the function name as "<FunctionName>" and click on search button
      #And user clicks on New
      #And user enters source code as "<Source Code>"
      #And user enters Debtor account as "<Debtor Account>"  
      #And user enters creditor account as "<Creditor Account>"
      #And user enters creditor Currency as "<Credit Currency>"
      #And user enters creditor amount as "<Credit Amount>"
      #And click on Enrich button
      #And clicks on save button
      #Then clicks on OK button
      # When user exits BookTransferPage
      #And user SignOff the application
     #Given User navigates to the application
      #When MAK user enters the username and password
      #And MAK user login in the application
      #Then valdiate the home page tite as "<HomePageTitle>"
      #And enter the Branch number as "<BranchNumber>"
      #When enters the function name as "<FunctionName>" and click on search button
      #And user clicks on Enter Query
      #And user enters Transaction reference number as "<Transaction Reference Number>" 
      #And clicks on Execute Query
      #And user clicks on Authorize tab
      #And user clicks on Authorize button
      #Then clicks on OK button
    
#Examples:
  #            | HomePageTitle                                       |BranchNumber|  FunctionName   | TransactionReferenceNumber  |
 #             | Oracle Financial Services - ENG - Transaction Input |     999   |   PBDOTONL       | 2605001444365000            |
