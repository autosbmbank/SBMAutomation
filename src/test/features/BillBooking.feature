@BillBooking
Feature: Guarante Transaction

@BillBookingscreen @SBM @TDAccount
    Scenario Outline: BillBooking Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "BCDTRONL" and click search button
      And user clicks on New BB
      And user enters Product code BB as "<Product Code>"        
      And user enters Amount BB as "<Amount>"      
      And user enters Customer Id BB as "<Customer>" 
      And get Contract Reference BB
      And get Amount BB 
      And get Customer Id BB   
      And get Currency BB    
      And clicks on Parties btn in BB
      And user enters party id of Drawee in BB as "<Drawee party Id>"
      And user enters party id of Drawer in BB as "<Drawer party Id>"
      And user enters party id of Remitting bank in BB as "<Remitting bank party Id>" 
      And user enters rfn of Drawee in BB as "<Drawee rfn>"
      And user enters rfn of Drawer in BB as "<Drawer rfn>"
      And user enters rfn of Remitting bank in BB as "<Remitting bank rfn>"     
      And clicks on save btn in BB  
        And clicks on accept in BB   
      Then clicks on ok btn in BB
      When user clicks on exits BillBookingPage
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "BCDTRONL" and click search button
      And user clicks on Enter Query in BB
      And user enters Contract Reference BB
      And user clicks on Execute Query in BB
      And user clicks on Authorize tab in BB
      And user enters currency in BB
      And user enters amount in BB
      And user enters customer Id in BB
      And user clicks on Authorize button in BB
      And clicks on OK button in BB

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Product Code|Customer|Amount|Drawee party Id |Drawer party Id|Remitting bank party Id  | Drawee rfn   |Drawer rfn   |Remitting Bank rfn  |
                  | Oracle Financial Services - ENG - Transaction Input | 000          |    BCDTRONL      | ICLS        | 000002 |1820  | 000002         |000006         | 000001                 | 8        |4      |9        | 
