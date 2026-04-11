@RTGS
Feature: RTGS OUTBOUND Feature

      @RTGSoutbound
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
            And User enters the Debitor BICFI as "<BICFI>"            
            And User enters the Creditor Agent BICFI as "<BICFI>"
            And User enters the Debitor Agent BICFI as "<BICFI>" 
            And User enters the Creditor BICFI as "<BICFI>"
            And User enters the Instructing Agent BICFI as "<BICFI>"
            And User clicks on enrich button
            And User clicks on save button
            Then User clicks on Ok button           




        Examples:
    | HomePageTitle            | BranchNumber | FunctionName | Source Code | Network Code | Transfer Currency | Transfer amount | Network Account | Debit account | BICFI            | BICFI        | BICFI        |BICFI        | BICFI       |
   | Oracle Financial Services | 999          | PSDORTBT     | MANL        | RTGSMX       | KES               | 2000             | 0004005459004   | 0001073641002 | KCBLKENX012      | AAAARSBGXXX  | AAAARSBGXXX  |KCBLKENX012  | AAFAFRP1XXX |
   
