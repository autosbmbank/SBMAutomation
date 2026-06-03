@CreditLineCreation
Feature: CreditLineCreation Transaction

@CreditLineCreationScreen @SBM
    Scenario Outline: CreditLineCreation Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "<HomePageTitle>" 
                When user enters the function name as "<FunctionName>" and click search button
        And user clicks on Newtab CLC 
        And user enters Liability No CLC as "<Liability No>"  
        And user enters Line Code CLC as "<Line Code>"
        And clicks on save button CLC      
        Then clicks on OK btn CLC
        When user exits CreditLineCreationPage CLC           
        And user SignOff the application
                When CHE user enters the username and password
                When CHE user login in the application
                Then valdiate the home page tite as "<HomePageTitle>"             
                When user enters the function name as "<FunctionName>" and click search button
        And user clicks on Enter Query CLC
        And user enters Liability No CLC as "<Liability No>"  
        And user enters Line Code CLC as "<Line Code>"
        And user clicks on Execute Query CLC
        And user clicks on Authorize tab CLC
        And user clicks on Authorize button CLC
        Then clicks on OK button CLC

    
      
    Examples:
      
                  | HomePageTitle                                       | FunctionName     | Liability No | Line Code |
                  | Oracle Financial Services - ENG - Transaction Input | GEDFACLT         | 041663      |  CAR      |
