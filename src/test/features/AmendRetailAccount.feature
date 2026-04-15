@AmendRetailAccount
Feature: BookTransfer Account Transaction

@AmendRetailAccountscreen @SBM @TDAccount
    Scenario Outline: LC Availment Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "STDCSHIS" and click search button
             And user clicks on Enter Query in ARA
      And user enters Customer Number ARA as "<Customer Number>"
      And user clicks on Execute Query in ARA
      


      Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Customer Number |  
                  | Oracle Financial Services - ENG - Transaction Input | 000          | STDCSHIS         | 000034   | 