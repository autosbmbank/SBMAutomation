@LiabilityCreation
Feature: BookTransfer Account Transaction

@LiabilityCreationscreen @SBM @TDAccount
    Scenario Outline: Liability Creation using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "GEDMLIAB" and click search button
      And user clicks on New LC 
      And user enters Liability No LC as "<Liability No>"  
      And user enters Liability Name in LC as "<Liability Name>"
      And clicks on save btn in LC
      Then clicks on OK btn in LC
      When user clicks on exits LiabilitycreationPage
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "GEDMLIAB" and click search button
      And user clicks on Enter Query in LC
       #And user enters Liability Number 
       And user enters Liability No LC as "<Liability No>"     
      And user clicks on Execute Query in LC
      And user clicks on Authorize tab in LC
      And user clicks on Authorize button in LC
      Then clicks on OK button in LC

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Liability No |  Liability Name| 
                  | Oracle Financial Services - ENG - Transaction Input | 000          |    GEDMLIAB      | 78339922        |  Rhagu         |
