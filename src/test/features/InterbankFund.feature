@FundTransfer
Feature: Inter bank Fund Transfer

@Transfer1 @SBM
Scenario Outline: Inter Bank Fund Transfer Domestic
 Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             And Click on NextGen tab
             And enter the Screen name "<Screen>"
             And click on down tab
             And enter Debit Account Number "<DebitAccountNo>"
             And enter amount "<Amount>"
             And enter Credit Account Number "<CreditAccountNo>"
             And click on Submit
             And Click on OK
             And click on NO
             And Clik on NO option

             Examples:
    | HomePageTitle             | Screen | DebitAccountNo | Amount | CreditAccountNo |
    | Oracle Financial Services | 0006 |   0012415565001  | 1000   | 0012405712001 |
             