@LCAmendment
Feature: LCAmendment Transaction

@LCAmendmentscreen @SBM
    Scenario Outline: LCAmendment Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
           # And enter the Branch number as "001"
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on New LCAT   
      And user enters Contract Reference LCAT as "<Contract Reference>"  
      And user click P LCAT
      And get Amendment Number in LCAT
      And get Currency LCAT 
      And get Contract amount LCAT
      And user clicks on parties LCAT
      And get customer LCAT
      And user click on Fields tab LCAT
      And clicks on accept in LCAT 
      And user enter security type LCAT as "<Security Type>"
      And user click on save field LCAT
      And clicks on save btn LCAT
      And clicks on accept in LCAT 
      Then clicks on OK btn LCAT
      When user exits LCAmendmentPage
      #And enter the Branch number as "000"
            And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
           #  And enter the Branch number as "001"
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query in LCAT
      And user enters Contract Reference LCAT as "<Contract Reference>"
      And user enters Amendment Number in LCAT
      And user clicks on Execute Query in LCAT
      And user clicks on Authorize tab in LCAT
      And user enters Currency LCAT
      And user enters Contract amount LCAT
      And user enters customer LCAT     
      And user clicks on Authorize button in LCAT
      Then clicks on OK button in LCAT

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Contract Reference |  Security Type |
                  | Oracle Financial Services - ENG - Transaction Input | 001          | LCDAMEND         | 000ETLC261500001   | AFRICAN GUARANTEE FUND |
