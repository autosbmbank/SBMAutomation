@Guarantee
Feature: Guarante Transaction

@Guaranteescreen @SBM @TDAccount
    Scenario Outline: Guarantee Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDGUONL" and click search button
      And user clicks on New GS
      And user enters Product code GS as "<Product Code>"  
      And user click P GS
      And user enters Operation code GS as "<Operation Code>"
      And get Contract Reference GS
      And user enters Customer GS as "<Customer>"
      And user enters Contract Amount GS as "<Contract Amount>"
      And user selects Purpose of Guarantee GS
      And user selects Expiry Type GS
      And clicks on Default btn in GS
      And clicks on Accept btn in GS
      And clicks on OK in Main GS
      And clicks on Parties btn in GS
      And user enters party id of APP in Parties as "<APP party Id>"
      And user enters party id of BEN in Parties as "<BEN party Id>"
      And clicks on Terms& Conditions btn in GS
      And clicks on + btn in GS
      And user enters Terms& Conditions in GS as "<TermandCod>"     
      And clicks on save btn in GS
      And clicks on accept in GS
      Then clicks on OK btn in GS
      When user clicks on exits GuaranteePage
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDGUONL" and click search button
      And user clicks on Enter Query in GS
      And user enters Contract Reference GS
      And user clicks on Execute Query in GS
      And user clicks on Authorize tab in GS
      And user enters currency in GS as "<currencyGS>"
     And user enters contract amount in GS as "<contractamount>"
      And user enters customer in GS as "<customerGS>"
      And User click checkbox for Guarantee type is not input
      And User click checkbox for No limit tracking done for the contract      
      And user clicks on Authorize button in GS
      And clicks on OK button in GS

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Product Code|Operation Code|Customer|Contract Amount|GuaranteePurpose|ExpiryType|APP party Id   |BEN party Id   |TermandCod  | currencyGS| contractamount| customerGS|
                  | Oracle Financial Services - ENG - Transaction Input | 000          |    LCDGUONL      | APGR        |  ONC          |000001 |1290           |Issue           |Fixed     |000001         |000003         | Test   | KES |        1290       | 000001|
