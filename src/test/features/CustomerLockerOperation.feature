@CustomerLockerOperation
Feature: CustomerLockerOperation Transaction

@CustomerLockerOperationscreen @SBM 
    Scenario Outline: CustomerLockerOperation Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "DLDCUSWL" and click search button
             And user clicks on New CLO
            And get Waitlist CLO
            And user enters Box Type CLO as "<Box Type>"  
            And user enters Branch Code CLO as "<Branch Code>"
            And user enters Name CLO as "<Name>"
            And user enters Address CLO as "<Address>"
            And user enters Phone Number CLO as "<Phone Number>"
            And clicks on save btn in CLO
            Then clicks on OK btn in CLO
            When user clicks on exits CustomerLockerOperationPage
            And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "DLDCUSWL" and click search button
             And user clicks on Enter Query in CLO             
             And user enters Waitlist CLO
            And user clicks on Execute Query in CLO
            And user clicks Authorize tab CLO
            And clicks on OK button in CLO
      


      Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Box Type    |Branch Code    | Name  |Address    | Phone Number|
                  | Oracle Financial Services - ENG - Transaction Input | 000          | DLDCUSWL         | LARGE1       | 000           | Bill  | Hyd       | 9967895678  |