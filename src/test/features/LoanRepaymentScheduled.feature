@LoanRepaymentScheduled
Feature: LoanRepaymentScheduled Transaction
 
@LoanRepaymentScheduledScreen @SBM
    Scenario Outline: LoanRepaymentScheduled Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab LRS
      And user enters Account Number LRS as "<Account Number>"  
      And user click on Popualte Due button LRS    
      And user get Total amount Due LRS
      And user enter Total amount Due LRS
      And user click on Allocate button LRS
      And clicks on accept in LRS
      And clicks on save button LRS
      Then clicks on OK btn LRS
      When user exits LoanRepaymentScheduled LRS
      And enter the Branch number as "000"            
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             And enter the Branch number as "001"            
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query LRS
      And user enters Account Number LRS as "<Account Number>"
      And user clicks on Execute Query LRS
      And user clicks on Authorize tab LRS
      And user clicks on Authorize button LRS
      Then clicks on OK button LRS
 
   
     
    Examples:
     
                  | HomePageTitle                                       | FunctionName     | Account Number     |
                  | Oracle Financial Services - ENG - Transaction Input | CLDPYMNT         | 001LOTL111820078   |  
