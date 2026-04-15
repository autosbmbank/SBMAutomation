@Fixed
Feature: Fixed Assets Capture

@FixedBooking @SBM
Scenario Outline: Fixed Assets Contract Booking
 Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "FADTRONL" and click search button
             And clicks on New Tab
             And enter Product Code "<ProductCode>"
             And click on p button in FADTRONL
             And click on Search button
             And Enter Category "IFEQ"
             And Click on Fetch in FADTRONL
             And Select the first record
             And enter asset cost "<AssetCost>"
             And get the contact reference number
             And enter Description "<Description>"
             And Click on save in FADTRONL
             And click on Accept in FADTRONL
             And click on OK in FADTRONL
             And click on exit in FADTRONL
             And enter the Branch number as "000"
             And user SignOff the application
              When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "FADTRONL" and click search button
             And click on enter query in FADTRONL
             And enter contact reference number
             And click on execute query in FADTRONL
             And click on authorize in FADTRONL
             And click on authorize button in FADTRONL
             And click on ok in FADTRONL

             Examples:
    | HomePageTitle             | ProductCode | AssetCost | Description |
    | Oracle Financial Services | HOEQ        | 2000      | COMPUTER   |