@Closure
Feature: Premature Closure 

@PrematureLCY @SBM
    Scenario Outline: Close the Premature for LCY 
    Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "ICDREDMN" and click search button
             And Click on New
             And enter Term Deposit Account Number "<TDAccountNumber>"
            #  And Click on Arrow
             And Select Redemption mode
             And click on Compute
             And click on ok
             And click on Add row in Payout details
             And enter Percentage "<Percentage>"
             And enter Amount "<Amount>"
             And Enter Offset Account Number "<OffsetAccount>"
             And Click on Save1 
             And Click on accept1 
             And click on OK button1
             And Click on Exit btn2

             Examples:
             | HomePageTitle             | TDAccountNumber | Percentage | Amount | OffsetAccount |
             | Oracle Financial Services | 0013049468931 |    100      | 3538000  | 0001428031002 |
