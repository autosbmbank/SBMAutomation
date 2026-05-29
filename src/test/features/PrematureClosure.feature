@Closure
Feature: Premature Closure 

@PrematureLCY @SBM
    Scenario Outline: Close the Premature for LCY 
    Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And Click on New
             And enter Term Deposit Account Number "<TDAccountNumber>"
            #  And Click on Arrow
             And Select Redemption mode
             And click on Compute
             And click on ok
             And click on Add row in Payout details
             And enter Percentage "<Percentage>"
            #  And enter Amount "<Amount>"
             And Enter Offset Account Number "<OffsetAccount>"
             And Click on Save1 
             And Click on accept1
             And get Redemption Reference Number
             And click on OK button1
             And Click on Exit btn2
             And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
               And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And click on enter query in ICDREDMN
             And enter Redemption Reference Number
             And click on execute query in ICDREDMN
             And click on authorize in ICDREDMN
             And click on authorize button in ICDREDMN
             And click on ok in ICDREDMN

             Examples:
             | HomePageTitle             | FunctionName |   TDAccountNumber | Percentage | Amount | OffsetAccount |
             | Oracle Financial Services | ICDREDMN |    0013097053013 |    100      | 3538000  | 0002000001001 |


@PrematureFCY @SBM
    Scenario Outline: Close the Premature for FCY 
    Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And Click on New
             And enter Term Deposit Account Number "<TDAccountNumber>"
            #  And Click on Arrow
             And Select Redemption mode
             And click on Compute
             And click on ok
             And click on Add row in Payout details
             And enter Percentage "<Percentage>"
            #  And enter Amount "<Amount>"
             And Enter Offset Account Number "<OffsetAccount>"
             And Click on Save1 
             And Click on accept1
             And get Redemption Reference Number 
             And click on OK button1
             And Click on Exit btn2
             And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
               And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
             And click on enter query in ICDREDMN
             And enter Redemption Reference Number
             And click on execute query in ICDREDMN
             And click on authorize in ICDREDMN
             And click on authorize button in ICDREDMN
             And click on ok in ICDREDMN

             Examples:
             | HomePageTitle             | FunctionName |   TDAccountNumber | Percentage | Amount | OffsetAccount |
             | Oracle Financial Services | ICDREDMN |    0013025821008 |    100      | 3538000  | 0002000001001 |
