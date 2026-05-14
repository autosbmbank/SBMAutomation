@RTGS
Feature: RTGS OUTBOUND Feature

      @RTGSoutbound @SBM
        Scenario Outline: RTGS OUTBOUND Transaction
           Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            # And enter the Branch number as "<BranchNumber>"
            When user enters the function name as "PSDORTBT" and click search button
            And User click on NewTab
            And User enters the SourceCode as "<Source Code>"
            And User enters the NetworkCode as "<Network Code>"
            And User enters the Transfer Currency as "<Transfer Currency>"
            And User enters the Transfer amount as "<Transfer amount>" 
            And User enters the Network account as "<Network Account>" 
            And User enters the Debit account as "<Debit account>"            
            And User enters the Debitor BICFI as "<DebitorBICFI>"            
            And User enters the Creditor Agent BICFI as "<CreditorAgentBICFI>"
            And User enters the Debitor Agent BICFI as "<DebitorAgentBICFI>" 
            And User enters the Creditor BICFI as "<CreditorBICFI>"
            And User enters the Instructing Agent BICFI as "<BICFI>"
            And click on first row in PSDORTBT
             And get the transaction reference number in PSDORTBT
            And User clicks on enrich button
            And User clicks on save button
            Then User clicks on Ok button   
            And Click on exit button in PSDORTBT
            #  And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             When user enters the function name as "PSDORTBT" and click search button
             And click on enter Query tab in PSDORTBT
             And enter Transaction Reference No in PSDORTBT
             And Click on Execute Query tab in PSDORTBT
             And Click on Authorize tab in PSDORTBT
             And Click on Authorize button1 in PSDORTBT
              And click on ok button1 in PSDORTBT        


        Examples:
    | HomePageTitle            | BranchNumber | FunctionName | Source Code | Network Code | Transfer Currency | Transfer amount | Network Account | Debit account | DebitorBICFI      | CreditorAgentBICFI | DebitorAgentBICFI  |CreditorBICFI        | BICFI       |
   | Oracle Financial Services | 999          | PSDORTBT     | MANL        | RTGSMX       | KES               | 2000             | 0004005459002   | 0001073638002 | AAAARSBGXXX      | SBMKKENAXXX         | SBMKKENAXXX      |AAAARSBGXXX       | CITIGB2LXXX |
   
