@ExportLCBooking
Feature: ExportLCBooking Transaction

@ExportLCBookingscreen @SBM @TDAccount
    Scenario Outline: ExportLCBooking Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDTRONL" and click search button
      And user clicks on New ELCB
      And user enters Product code ELCB as "<Product Code>"  
      And user click P ELCB
      And user enters Operation code ELCB as "<Operation Code>"
      And get Contract Reference ELCB
      And user enters Contract Amount ELCB as "<Contract Amount>"      
      And user enters Customer ELCB as "<Customer>" 
      And get Contract Amount ELCB 
      And get Customer ELCB   
      And get Currency ELCB    
      And user enter Credit AVailable with ELCB as "<CreditAvailable>"
      And user enter Expiry Place in ELCB as "<Expiry Place>"  
      And clicks on Parties btn in ELCB
      And user enters party id of APP in ELCB as "<APP party Id>"
      And user enters party id of BEN in ELCB as "<BEN party Id>"
      And user enters party id of ISB in ELCB as "<ISB party Id>" 
      And user enters customer rfn of APP in ELCB as "<APP custrfn>"
      And user enters customer rfn of BEN in ELCB as "<BEN custrfn>"
      And user enters customer rfn of ISB in ELCB as "<ISB custrfn>"     
      And user enters dated of APP in ELCB as "<APP dated>"
      And user enters dated of BEN in ELCB as "<BEN dated>"
      And user enters dated of ISB in ELCB as "<ISB dated>" 
      And user click on Fields tab ELCB
      And clicks on accept in ELCB 
      And user enter security type ELCB as "<Security Type>"
      And user click on save field ELCB
      And clicks on save btn in ELCB  
        And clicks on accept in ELCB   
      Then clicks on OK btn in ELCB
      When user clicks on exits ExportLCBookingPage
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "LCDTRONL" and click search button
      And user clicks on Enter Query in ELCB
      And user enters Contract Reference ELCB
      And user clicks on Execute Query in ELCB
      And user clicks on Authorize tab in ELCB
      And user enters currency in ELCB
      And user enters contract amount in ELCB
      And user enters customer in ELCB
      And User click checkbox for Credit available with
      And User click checkbox for No limit tracking done for the contract ELCB
      And user clicks on Authorize button in ELCB
      And clicks on OK button in ELCB

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Product Code|Operation Code|Customer|Contract Amount|CreditAvailable |Expiry Place| APP party Id   |BEN party Id   |ISB party Id  | APP custrfn   |BEN custrfn   |ISB custrfn  | APP dated   |BEN dated   |ISB dated  | Security Type |
                  | Oracle Financial Services - ENG - Transaction Input | 000          |    LCDTRONL      | ETLC        |  ADV          |000003 |1920           |3477            |Hyd         | 000003         |000006         | 000001         | 000008        |000009      |000001        | 05/04/2026 | 05/04/2026 | 05/04/2026 | AFRICAN GUARANTEE FUND |
