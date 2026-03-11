@LoanBooking

Feature: Booking a Loan

        @LoanBooking1
        Scenario: Booking of loan contract 
            Given User navigates to the application
             When user enters the username and password
             And click on signin button
            Then valdiate the home page tite as "<HomePageTitle>"
             And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
             And User clicks on New Tab1
             And enters the product code "<ProductCode>" 
             And enter customer ID "<CustomerID>" 
             And enter Currency "LSL"
             And enter amount financed "<Amount>"
             And click on product default button
             And system capture account number
             And click on enrich button
             And click on preference tab
             And uncheck the Auto liquidation
             And clicks on Save button
             And accept PopUp Alert
             Then System display success message

    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | ProductCode | CustomerID | Currency | Amount | 
                  | Oracle Financial Services - ENG - Transaction Input | 100          | CLDACCNT         | 9010        | 10225589   | LSL      | 100000 | 




@AuthorizeLoan1
        Scenario: Booking of loan contract 
            Given User navigates to the application
            #  When user enters the username and password
             And CHE user enters the username and password
             And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
             And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
             And click on Enter Query
             And enter loan account number "<AccountNumber>"
             And Click on Execute Query
             And system Clicks Authorize
             And Click on Autorize1
             Then System display success message with ok option


             Examples:

             | HomePageTitle                                      |BranchNumber| | FunctionName |  | AccountNumber   |
              | Oracle Financial Services - ENG - Transaction Input|     100    | |  CLDACCNT    |  | 9010046679665   |





@Disbursement1
        Scenario: Disbursing a Loan contract 
            Given User navigates to the application
             When user enters the username and password
             And click on signin button
            Then valdiate the home page tite as "<HomePageTitle>"
             And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
             And User clicks on New Tab2
             And enter disbursement account number "<AccountNumber>"
             And click on default button
             And enter the settlement amount "<SettlementAmount>"
             And enter Loan Currency Equivalent "<LoanCurrencyEquivalent>"
             And click on Default Settlement
             And click on Ok button
             And click on Compute Charges
             And clicks on Save button1
             Then System displays successful message with ok option 

   Examples:

            | HomePageTitle                                       | BranchNumber | FunctionName  | AccountNumber  | SettlementAmount  | LoanCurrencyEquivalent |
            | Oracle Financial Services - ENG - Transaction Input | 100          | CLDMNDSB      | 9010046679665  | 60000             | 60000                  |




@authorizedisbursement1
        Scenario: Disbursing of loan contract 
            Given User navigates to the application
            #  When user enters the username and password
             And CHE user enters the username and password
             And click on signin button
            Then valdiate the home page tite as "Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
             And click on Enter Query button
             And enter loan disbursement account number "<AccountNumber>"
             And Click on Execute Query button
             And Click on Authorize button
             And Click on Autorize1 button
             Then System display success message with ok button

   Examples: 

          |BranchNumber| | FunctionName |  | AccountNumber  |
          |     100    | |  CLDMNDSB    |  | 9010046679574  |


