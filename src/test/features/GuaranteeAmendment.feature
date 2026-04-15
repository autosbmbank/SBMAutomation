@GuaranteeAmendment
Feature: BookTransfer Account Transaction

@GuaranteeAmendmentscreen @SBM @TDAccount
    Scenario Outline: GuaranteeAmendment Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDGUAMD" and click search button
      And user clicks on New GA  
      And user enters Contract Reference GA as "<Contract Reference>"  
      And user click P GA
      And clicks on save btn in GA
      And clicks on accept in GA
      Then clicks on OK btn in GA
      When user clicks on exits GuaranteeAmendmentPage
      And User signoff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDGUAMD" and click search button
      And user clicks on Enter Query in GA
      And user enters Contract Reference GA as "<Contract Reference>"
      And user enters Amendment Number in GA as "<Amendment Number>" 
      And user clicks on Execute Query in GA
      And user clicks on Authorize tab in GA
      And user clicks on Authorize button in GA
      Then clicks on OK button in GA

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Contract Reference |  Amendment Number| 
                  | Oracle Financial Services - ENG - Transaction Input | 000          |    LCDGUAMD      | 000APGR260620001   |  2 |
