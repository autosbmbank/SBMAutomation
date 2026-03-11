@Processing
Feature: Processing Feature

  @Processing01 @Voucher101
  Scenario Outline: Verify Voucher entry DR GL and CR Customer Account 101 functionality
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
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
    And user click on exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And select "<AuthorizationStatus>" from the drop down list 
    And user enter Batch number
    And click on Search Button
    And user doubleclicks on the record
    And user Click on Authorize Button
    Then validate the success message
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application

  Examples:
     | HomePageTitle                                       | BranchNumber | FunctionName  | BatchNumber | Description | Debit | Credit | DebitBranch | DebitAccount | CreditBranch | CreditAccount  | Currency | Amount | TransactionCode |functionname|AuthorizationStatus |branchnumber|
    | Oracle Financial Services - ENG - Transaction Input | 100        | DEDJNLON        |     785D43        | 101DE       | 2000 | 2000   | 100         | 110010101    | 100          | 1015367000012 | LSL      | 2000   | AAT             |DESJNLON   |    U                   |999|


    @Processing02 @Voucher102
  Scenario Outline: Verify Voucher entry DR GL and CR Customer Account 102 functionality
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
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
    And user click on exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And select "<AutheirizationStatus>" from the drop down list 
    And user enter Batch number
    And click on Search Button
    And user doubleclicks on the record
    And user Click on Authorize Button
    Then validate the success message
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application

  Examples:
     | HomePageTitle                                       | BranchNumber | FunctionName  | BatchNumber | Description | Debit | Credit | DebitBranch | DebitAccount | CreditBranch | CreditAccount  | Currency | Amount | TransactionCode |functionname|AutheirizationStatus |branchnumber|
    | Oracle Financial Services - ENG - Transaction Input | 100        | DEDJNLON        |        56      | 102DE       | 3000 | 3000   | 100         | 110010101    | 100          | 1015367000012 | LSL      | 3000   | AAT             |DESJNLON   |    U                   |999|


     @Processing03 @Voucher104
  Scenario Outline: Verify Voucher entry DR GL and CR Customer Account 104 functionality
     Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
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
    And user click on exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And select "<AutheirizationStatus>" from the drop down list 
    And user enter Batch number
    And click on Search Button
    And user doubleclicks on the record
    And user Click on Authorize Button
    Then validate the success message
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
  Examples:
     | HomePageTitle                                       | BranchNumber | FunctionName  | BatchNumber | Description | Debit | Credit | DebitBranch | DebitAccount | CreditBranch | CreditAccount  | Currency | Amount | TransactionCode |functionname|AutheirizationStatus |branchnumber|
    | Oracle Financial Services - ENG - Transaction Input | 100        | DEDJNLON        | 254       | 104DE       | 3000 | 3000   | 100         | 110010101    | 100          | 1015367000012 | LSL      | 3000   | AAT             |DESJNLON   |    U                   |999|


     @Processing04 @Voucher105
  Scenario Outline: Verify Voucher entry DR GL and CR Customer Account 105 functionality
     Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
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
    And user click on exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And select "<AutheirizationStatus>" from the drop down list 
    And user enter Batch number
    And click on Search Button
    And user doubleclicks on the record
    And user Click on Authorize Button
    Then validate the success message
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application

  Examples:
     | HomePageTitle                                       | BranchNumber | FunctionName  | BatchNumber | Description | Debit | Credit | DebitBranch | DebitAccount | CreditBranch | CreditAccount  | Currency | Amount | TransactionCode |functionname|AutheirizationStatus |branchnumber|
    | Oracle Financial Services - ENG - Transaction Input | 100        | DEDJNLON        | 97C6        | 105DE       | 3000 | 3000   | 100         | 110010101    | 100          | 1015367000012  | LSL      | 3000   | ANC            |DESJNLON   |    U                   |999|