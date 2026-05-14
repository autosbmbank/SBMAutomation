@LoanBooking

Feature: Booking a Loan

        @LoanBooking1 @SBM
        Scenario: Booking of loan contract
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            # And enter the Branch number as "<BranchNumber>"
             When user enters the function name as "<FunctionName>" and click search button
              And User clicks on New Tab1
              And enters the product code "<ProductCode>"
              And enter customer ID "<CustomerID>"
              And enter Currency "KES"
              And enter amount financed "<Amount>"
              And click on product default button
            #  And system capture account number
              And click on enrich button
              And click on preference tab
              And uncheck the Auto liquidation
              And clicks on Save button
              And accept PopUp Alert
             Then System display success message
              And User signoff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "<FunctionName>" and click search button
              And click on Enter Query
              And enter loan account number "<AccountNumber>"
              And Click on Execute Query
              And system Clicks Authorize
              And Click on Autorize1
             Then System display success message with ok option

        Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName | ProductCode | CustomerID | Currency | Amount |
                  | Oracle Financial Services - ENG - Transaction Input | 100          | CLDACCNT     | AFLI        | 000006     | KES      | 100000 |




