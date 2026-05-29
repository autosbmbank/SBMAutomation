@Processing
Feature: Processing Feature

        @Processing01 @Voucher101 @SBM
        Scenario Outline: Verify Voucher entry DR GL and CR Customer Account 101 functionality
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             When user Click on New
              And user Enter the Batch Number "<BatchNumber>"
              And user Enter the Description "<Description>"
              And user Enter the Debit "<Debit>"
              And user Enter the Credit "<Credit>"
              And user Click on Ok
              And System will populate Pop Window. Click on Ok
              And user Click on Add Row
              And user Select Debit from given drop down list
              And user Enter the Branch Code "<DebitBranch>"
              And user Enter the Account Number "<DebitAccount>"
              And user Enter the Currency "<Currency>"
              And user Enter the Amount "<Amount>"
              And user Enter the Trransaction Code "<TransactionCode>"
              And user Click on Add Row
              And user Select Credit from given drop down list
              And user Enter the CrBranch Code "<CreditBranch>"
              And user Enter the CrAccount Number "<CreditAccount>"
              And user Enter the CrCurrency "<Currency>"
              And user Enter the CrAmount "<Amount>"
              And user Enter the CrTrransaction Code "<TransactionCode>"
              And user Click on Compute
              And user System will populate Pop Window. Click on Ok
              And user Click on Save and Click on Ok
              And user Click on Batch Close
            #   And user click on ok after Batch Close
              And user click on exit button
             And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "DESJNLON" and click search button
              And user select Authorization Status
              And user enter Batch number
              And click on Search Button
              And user doubleclicks on the record
              And user Click on Authorize Button
             Then validate the success message
    # And enter the Branch number as "<branchnumber>"
    # And user SignOff the application

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName | BatchNumber | Description | Debit | Credit | DebitBranch | DebitAccount  | CreditBranch | CreditAccount | Currency | Amount | TransactionCode | branchnumber |
                  | Oracle Financial Services - ENG - Transaction Input | 001          | DEDJNLON     | 8935        | TEST        | 1000  | 1000   | 000         | 0002000002001 | 000          | 0002000006001 | KES      | 1000   | ACD             | 001          |


    