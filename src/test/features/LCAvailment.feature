@CAvailment
Feature: BookTransfer Account Transaction

@LCAvailmentscreen @SBM @TDAccount
    Scenario Outline: LC Availment Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDAVMNT" and click search button
      And user clicks on New LCA   
      And user enters Contract Reference LCA as "<Contract Reference>"  
      And user click P LCA
      And get Currency LCA
      And get Contract amount LCA
      And get customer LCA
      And user enters Availment amount LCA as "<Availment amount>"
      And clicks on save btn LCA
      Then clicks on OK btn LCA
      When user exits LCAvailmentPage
      And User signoff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDAVMNT" and click search button
      And user clicks on Enter Query in LCA
      And user enters Contract Reference LCA as "<Contract Reference>"
      And user enters Currency LCA
      And user enters Contract amount LCA
      And user customer LCA
      And user clicks on Execute Query in LCA
      And user clicks on Authorize tab in LCA
      And user clicks on Authorize button in LCA
      Then clicks on OK button in LCA

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Contract Reference | Availment amount | 
                  | Oracle Financial Services - ENG - Transaction Input | 000          | LCDAVMNT         | 000UILC260620001   |  100       |
