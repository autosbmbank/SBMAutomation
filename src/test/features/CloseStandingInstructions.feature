@StandingInstructions
Feature: BookTransfer Account Transaction

@StandingInstructionScreen @SBM @TDAccount
    Scenario Outline: Standing Instruction Transaction using Credit by MAK and Authorise by CHE
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
      And user clicks on Authorize tab SI
      And user enter SI Currency as "<SI Currency>"
      And user enter SI Amount as "<SI Amount>"
      And user clicks on Authorize button SI
      Then clicks on OK button SI

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Instrument Number | SI Currency | SI Amount |
                  | Oracle Financial Services - ENG - Transaction Input | 000          | SIDTRONL         | 000SICP111820312  |  KES        | 7307      |
