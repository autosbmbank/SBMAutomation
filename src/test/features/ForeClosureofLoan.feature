@LoanForeclosure
 
Feature: LoanForclosure Transaction
 
@LoanForeclosureScreen @SBM
    Scenario Outline: LoanForeclosure Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab FOL
      And user click on preclosure FOL
      And user enters Account Number FOL as "<Account Number>"  
      And user click on Popualte Due button FOL      
      And user get Total amount Due FOL
      And user enter Total amount Due FOL
      And user click on Allocate button FOL
      And user get Total amount Due FOL
      And user enter Total amount Due FOL
      And clicks on save button FOL
      Then clicks on OK btn FOL
      When user exits LoanForeclosure FOL
      And enter the Branch number as "000"        
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>" 
             And enter the Branch number as "001"           
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query FOL
      And user enters Account Number FOL as "<Account Number>"
      And user clicks on Execute Query FOL
      And user clicks on Authorize tab FOL
      And user clicks on Authorize button FOL
      Then clicks on OK button FOL
 
   
     
    Examples:
     
                  | HomePageTitle                                       | FunctionName     | Account Number     |
                  | Oracle Financial Services - ENG - Transaction Input | CLDPYMNT         | 001AFLI240710001   |