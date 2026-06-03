@MaintainFacility
Feature: MaintainFacility Transaction

@MaintainFacilityscreen @SBM
    Scenario Outline: MaintainFacility Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "STDLMDET" and click search button
             And user clicks on Enter Query in MF             
             And user enters Liability Number MF as "<Liability Number>"
            And user enters Limit reference MF as "<Limit reference>"
            And user clicks on Execute Query in MF
      


      Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Liability Number |Limit reference |  
                  | Oracle Financial Services - ENG - Transaction Input | 000          | STDLMDET         | 006411   | ABCLTD1 |