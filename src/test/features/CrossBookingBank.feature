@BookingBank
Feature: Cross border Transaction booking bank

@Booking @SBM
Scenario Outline: Cross Border Transaction Booking Bank Transfer
          Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              # And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And user click on new tab in PSDOCBBT
             And enters source code "<SourceCode>"
             And enters Network code "<NetworkCode>"
             And enters Transfer Currency "<TransferCurrecy>"
             And enters Transfer Amount "<TransferAmount>"
             And enters Debit Account "<DebitAccountNo>"
             And enters Debitor Details "<DebitorDetails>"
             And enters Creditor Agent Details "<CreditBICFI>"
             And enters Debitor Agent Details "<DebitBICFI>"
             And enters Creditor Details "<CreditorDetails>"
             And enters Instructed Agent Details "<BICFI>"
             And click on Search button in PSDOCBBT
             And click on first row in PSDOCBBT
             And get the transaction reference number in PSDOCBBT
            #  And selects the charge bearer in PSDOCBBT
            #  And enters Creditor Details "<CreditorName>"
             And Click on Enrich in PSDOCBBT            
             And Click on Save option in PSDOCBBT
             And Click on ok in PSDOCBBT
             And Click on exit button in PSDOCBBT
            #  And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And click on enter Query tab in PSDOCBBT
             And enter Transaction Reference No in PSDOCBBT
             And Click on Execute Query tab in PSDOCBBT
             And Click on Authorize tab in PSDOCBBT
             And Click on Authorize button1 in PSDOCBBT
              And click on ok button1 in PSDOCBBT

           Examples:
    | HomePageTitle             | FunctionName |SourceCode | NetworkCode | TransferCurrecy | TransferAmount | DebitAccountNo | DebitorDetails | CreditBICFI  | DebitBICFI | CreditorDetails | BICFI     |ChargeBearer| CreditorName |
    | Oracle Financial Services | PSDOCBBT     |MANL       | SWFITMX       |      KES       |     2000      | 0002086540014  | AAAARSBGXXX    | AACMUS41XXX | AACMUS41XXX | AAAARSBGXXX     | CITIGB2LXXX |    DEBT   |   Imanuel    |