@RTGS
Feature: Transaction booking Customer Incoming

@Incomingtransaction @SBM
     Scenario Outline: Save the transaction for Incoming and Authorize 
     Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "PSDIT2CT" and click search button
             And clicks on newtab
             And enter source code "<SourceCode>"
             And enter Network code "<NetworkCode>"
             And enter Transfer Currency "<TransferCurrecy>"
             And enter Transfer Amount "<TransferAmount>"
             And enter Credit Account "<CreditAccountNo>"
             And enter Creditor Agent Details "<CreditBICFI>"
             And enter Debitor Agent Details "<DebitBICFI>"
             And enter Instructed Agent Details "<BICFI>"
             And get the transaction reference number
             And selects the charge bearer
             And Click on Enrich
             And enter Debitor Details "<DebitorName>"
             And Click on Save option
             And Click on ok
             And Click on exit button
             And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "PSDIT2CT" and click search button
             And click on enter Query tab
             And enter Transaction Reference No
             And Click on Execute Query tab
             And Click on Authorize tab
             And Click on Authorize button1
              And click on ok button1

             Examples:
    | HomePageTitle             | SourceCode | NetworkCode | TransferCurrecy | TransferAmount | CreditAccountNo | CreditBICFI  | DebitBICFI | BICFI     |ChargeBearer| DebitorName |
    | Oracle Financial Services | MANL       | RTGSMX       |      KES       |     3000      | 0002000001003  | AAAARSBGXXX | AAAARSBGXXX | KCBLKENX002 |    DEBT   |   Amanuel    |  
