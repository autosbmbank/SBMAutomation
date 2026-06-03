@PartialLoanRepayment
Feature: PartialLoanRepayment Transaction
 
@PartialLoanRepaymentScreen @SBM
    Scenario Outline: PartialLoanRepayment Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab PLR
      And user enters Account Number PLR as "<Account Number>"  
      And user click on Popualte Due button PLR    
      And user enters Settlement Amount PLR as "<Settlement Amount>"
      And user click on Allocate button PLR
      And clicks on save button PLR
      Then clicks on OK btn PLR
      When user exits PartialLoanRepayment PLR
      And enter the Branch number as "000"            
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             And enter the Branch number as "001"            
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query PLR
      And user enters Account Number PLR as "<Account Number>"
      And user clicks on Execute Query PLR
      And user clicks on Authorize tab PLR
      And user clicks on Authorize button PLR
      Then clicks on OK button PLR
 
   
     
    Examples:
     
                  | HomePageTitle                                       | FunctionName     | Account Number     | Settlement Amount  |
                  | Oracle Financial Services - ENG - Transaction Input | CLDPYMNT         | 001AFLI250410001   |  8966      |