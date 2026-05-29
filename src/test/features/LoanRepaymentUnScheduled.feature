@LoanRepaymentUnScheduled
Feature: LoanRepaymentUnScheduled Transaction
 
@LoanRepaymentUnScheduledScreen @SBM
    Scenario Outline: LoanRepaymentUnScheduled Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab LRUS
      And user enters Account Number LRUS as "<Account Number>"  
      And user click on Popualte Due button LRUS      
      And user get Total amount Due LRUS
      And user enter Total amount Due LRUS
      And user click on Allocate button LRUS
      And user get Total amount Due LRUS
      And user enter Total amount Due LRUS
      And clicks on save button LRUS
      Then clicks on OK btn LRUS
      When user exits LoanRepaymentUnScheduled LRUS
      And enter the Branch number as "000"        
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             And enter the Branch number as "001"        
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query LRUS
      And user enters Account Number LRUS as "<Account Number>"
      And user clicks on Execute Query LRUS
      And user clicks on Authorize tab LRUS
      And user clicks on Authorize button LRUS
      Then clicks on OK button LRUS
 
   
     
    Examples:
     
                  | HomePageTitle                                       | FunctionName     | Account Number     |
                  | Oracle Financial Services - ENG - Transaction Input | CLDPYMNT         | 001LOTL111820078   |