@Customer
Feature: Cross Border Transaction Booking Customer

@Customer1 @SBM
Scenario Outline: Cross Border Transaction Booking Customer Transfer
        Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And user click on new tab in PSDOCBCT
             And Enters source code "<SourceCode>"
             And Enters Network code "<NetworkCode>"
             And Enters Transfer Currency "<TransferCurrecy>"
             And Enters Transfer Amount "<TransferAmount>"
             And Enters Debit Account "<DebitAccountNo>"
            #  And Enters Debitor Details "<DebitorDetails>"
             And Enters Creditor Agent Details "<CreditBICFI>"
             And Enters Debitor Agent Details "<DebitBICFI>"
            #  And Enters Creditor Details "<CreditorDetails>"
             And Enters Instructed Agent Details "<BICFI>"
             And click on Search button in PSDOCBCT
             And click on first row in PSDOCBCT
             And get the transaction reference number in PSDOCBCT
             And selects the charge bearer in PSDOCBCT
             And Enters Creditor Details "<CreditorName>"
             And Click on Enrich in PSDOCBCT            
             And Click on Save option in PSDOCBCT
             And Click on ok in PSDOCBCT
             And Click on exit button in PSDOCBCT
            #  And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #   And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And click on enter Query tab in PSDOCBCT
             And enter Transaction Reference No in PSDOCBCT
             And Click on Execute Query tab in PSDOCBCT
             And Click on Authorize tab in PSDOCBCT
             And Click on Authorize button1 in PSDOCBCT
              And click on ok button1 in PSDOCBCT

              Examples:
    | HomePageTitle             | FunctionName | SourceCode | NetworkCode | TransferCurrecy | TransferAmount | DebitAccountNo | CreditBICFI  | DebitBICFI | BICFI     |ChargeBearer| CreditorName |
    | Oracle Financial Services | PSDOCBCT    |MANL       | SWFITMX       |      KES       |     1000      | 0001073641002  | DBSSSGSGXXX | SBMKKENAXXX | CITIGB2LXXX |    SHAR   |   Imanuel    |  
