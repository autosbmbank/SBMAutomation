@RTGSBooking
Feature:RTGS outbound Transaction Booking Customer

@RTGS1 @SBM
Scenario Outline: RTGS Transaction Booking Customer Transfer
        Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             When user enters the function name as "PSDOT2CT" and click search button
             And user click on new tab in PSDOT2CT
             And Enters the source code "<SourceCode>"
             And Enters the Network code "<NetworkCode>"
             And Enters the Transfer Currency "<TransferCurrecy>"
             And Enters the Transfer Amount "<TransferAmount>"
             And Enters the Debit Account "<DebitAccountNo>"
            #  And Enters Debitor Details "<DebitorDetails>"
             And Enters the Creditor Agent Details "<CreditBICFI>"
             And Enters the Debitor Agent Details "<DebitBICFI>"
            #  And Enters Creditor Details "<CreditorDetails>"
             And Enters the Instructed Agent Details "<BICFI>"
            #  And click on first row in PSDOT2CT
             And get the transaction reference number in PSDOT2CT
             And selects the charge bearer in PSDOT2CT
             And Enters the Creditor Details "<CreditorName>"
             And Click on Enrich in PSDOT2CT            
             And Click on Save option in PSDOT2CT
             And Click on ok in PSDOT2CT
             And Click on exit button in PSDOT2CT
            #  And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             When user enters the function name as "PSDOT2CT" and click search button
             And click on enter Query tab in PSDOT2CT
             And enter Transaction Reference No in PSDOT2CT
             And Click on Execute Query tab in PSDOT2CT
             And Click on Authorize tab in PSDOT2CT
             And Click on Authorize button1 in PSDOT2CT
              And click on ok button1 in PSDOT2CT

              Examples:
    | HomePageTitle             | SourceCode | NetworkCode | TransferCurrecy | TransferAmount | DebitAccountNo | CreditBICFI  | DebitBICFI | BICFI     |ChargeBearer| CreditorName |
    | Oracle Financial Services | MANL       | RTGSMX       |      USD       |     1000      | 0001073638002  | CBKEKENXXXX | SBMKKENAXXX | CBKEKENXXXX |    SHAR   |   Imanuel    |  
