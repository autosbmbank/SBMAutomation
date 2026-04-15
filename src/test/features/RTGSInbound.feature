 @RTGS
Feature: RTGS Inbound and Outbound Transaction

@RTGSINBOUND
    Scenario Outline: creating RTGS Inbound Transaction
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
              Then valdiate the home page tite as "Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "PSDIT2BT" and click search button
      And user clicks on New tab
      And user enters Source Code as "<SourceCode>"
      And user enters Network code as "<Network Code>"
      And user enters transfer currency as "<Transfer Currency>"
      And user enters transfer amount as "<Transfer Amount>"  
      And user enters credit account number as "<Credit Account>"
     # And user enters credit account currency as "<Credit Account Currency>"
      #And user enters credit account branch as "<Credit Account Branch>"
      #And user enters credit amount as "<Credit Amount>"
      # And user enter debit account as "<Debit Account>"
      # And user enter debit account currency as "<Debit Account Currency>"
      # And user enter debit account branch as "<Debit Account Branch>"
      And user enters creditor details for BICFI as "<BICFI>"
      And user enters debitor details for BICFI as "<BICFI>"
      And user enters creditor agent details for BICFI as "<BICFI>"
      And user enters debitor agent details for BICFI as "<BICFI>"
      And user enters instructing agent for BICFI as "<BICFI>"
      And User click on Enrichbutton
      And User Click on Other Creditor Details
      And User enters Department as "<Department>"
      And User enters Floor as "<Floor>"
      And User clicks on save
      And User clicks on savebutton
      Then User clicks on Okbutton
    
      
    Examples:
      
                  | HomePageTitle                                       | FunctionName     | SourceCode   | Network Code | Transfer Currency | Transfer Amount | Credit Account | BICFI        | BICFI        | BICFI        | BICFI        | BICFI        | Department | Floor|
                  |Oracle Financial Services - ENG - Transaction Input  | PSDIT2BT         | MANL          | RTGSMX     |  KES              |  300            | 0001428031002   |  AAAGFRP1XXX  | AAAARSBGXXX  | AAAMFRP1XXX  | AACMUS41XXX  | AAALSARIJED  | DDD       | 123  |


 