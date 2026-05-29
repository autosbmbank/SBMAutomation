@MaintainCollateral
Feature: MaintainCollateral Transaction

@MaintainCollateralscreen @SBM
    Scenario Outline: MaintainCollateral Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "STDCRCOL" and click search button
             And user clicks on Enter Query in MC             
             And user search liab no in MC
             And user enters Liability Number MC as "<Liability Number>"
             And user fetch Liab No in MC
            And user enters Collateral Code MC as "<Collateral Code>"
            And user clicks on Execute Query in MC
      


      Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Liability Number |Collateral Code |  
                  | Oracle Financial Services - ENG - Transaction Input | 000          | STDCRCOL         | 055038   | DTL2 |