@ImportLCBooking
Feature: Guarante Transaction

@ImportLCBookingscreen @SBM @TDAccount
    Scenario Outline: ImportLCBooking Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDTRONL" and click search button
      And user clicks on New ILCB
      And user enters Product code ILCB as "<Product Code>"  
      And user click P ILCB
      And user enters Operation code ILCB as "<Operation Code>"
      And get Contract Reference ILCB
      And user enters Contract Amount ILCB as "<Contract Amount>"      
      And user enters Customer ILCB as "<Customer>" 
      And get Contract Amount ILCB 
      And get Customer ILCB   
      And get Currency ILCB       
      And user enter Frequency ILCB as "<Frequency>"
      And user enter Credit AVailable with ILCB as "<CreditAvailable>"
      And user enter Expiry Place as "<Expiry Place>"  
      And user selects Units ILCB
      And clicks on Parties btn in ILCB
      And user enters party id of APP in ILCB as "<APP party Id>"
      And user enters party id of BEN in ILCB as "<BEN party Id>"
      And user enters party id of ABK in ILCB as "<ABK party Id>"      
      And user click on MIS tab ILCB
      And clicks on accept in ILCB
      And user selects Rate Type ILCB
      And user selects Profit Method ILCB
      And user enters Pool Code ILCB as "<Pool Code>"
      And user enters Rate Code ILCB as "<Rate Code>"
      And user click on save MIS ILCB
      And clicks on save btn in ILCB  
     And clicks on accept in ILCB   
      Then clicks on OK btn in ILCB
      When user clicks on exits ImportLCBookingPage
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDTRONL" and click search button
      And user clicks on Enter Query in ILCB
      And user enters Contract Reference ILCB
      And user clicks on Execute Query in ILCB
      And user clicks on Authorize tab in ILCB
      And user enters currency in ILCB
      And user enters contract amount in ILCB
      And user enters customer in ILCB
      And user clicks on Authorize button in ILCB
      And clicks on OK button in ILCB

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Product Code|Operation Code|Customer|Contract Amount|CreditAvailable | Units |Expiry Place| Frequency |APP party Id   |BEN party Id   |ABK party Id  | Pool Code | Rate Code |
                  | Oracle Financial Services - ENG - Transaction Input | 000          |    LCDTRONL      | IRLC        |  OPN          |000006 |1290           |1768             |Months    |Hyd         |2           |000006         |000003         | 000004         | DFLTPOOL | BASE_RATE |
