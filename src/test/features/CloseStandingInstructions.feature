@CloseStandingInstruction
Feature: CloseStandingInstruction Transaction

@CloseStandingInstructionScreen @SBM @TDAccount
    Scenario Outline: CloseStandingInstruction Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button      
      And user clicks on Enter Query SI
      And user enter Instrument Number as "<Instrument Number>"
      And user clicks on Execute Query SI
      And user clicks on Close tab SI      
      Then clicks on OK button SI

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Instrument Number | 
                  | Oracle Financial Services - ENG - Transaction Input | 000          | SIDTRONL         | 001SWPN211680001  | 
