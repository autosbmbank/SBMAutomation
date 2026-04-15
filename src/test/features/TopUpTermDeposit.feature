@TopUp
Feature: Top Up Term Deposit LCY Feature

  @TOPUP1 @SBM @TopUpTermDepositLCYCreationAndAuthorize @tdAccountNumberandoffsttAccountchange
  Scenario Outline: Validate Creation and Authorization of Top Up Term Deposit LCY

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    #  And enter the Branch number as "<BranchNumber>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks on TopUp New Tab
    And User enters TopUp Account Number "<AccountNumber>"
     And User clicks TopUp P button and clicks Ok
    And User enters TopUp Amount "<TopUpAmount>"
    And User clicks TopUp PayIn Add Row button
    And User enters TopUp Percentage "<Percentage>"
    And User enters TopUp PayIn Amount "<PayInAmount>"
    And User enters TopUp Offset Account "<OffsetAccount>"
    And User clicks TopUp Compute and clicks Ok
    And User clicks TopUp Save button
    And User clicks TopUp Accept button and clicks Ok
    And User validates TopUp Success Message 
    # And enter the Branch number as "000"
    And user SignOff the application

    When CHE user enters the username and password
    When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks TopUp Enter Query Tab
    And User enters TopUp Reference Number "<TopUpReference>"
    And User clicks TopUp Execute Query Tab
    And User clicks TopUp Authorize Tab
    And User clicks TopUp Accept button and clicks Ok
    Then User validates TopUp auth success message

    Examples:
      | HomePageTitle             | FunctionName | AccountNumber | TopUpAmount | Percentage | PayInAmount | OffsetAccount | TopUpReference   | BranchNumber|
      # | Oracle Financial Services | STDTDTOP     | 0013000027159  | 2000        | 100        | 2000        | 0001073641002  | 000TOPD260620016 |001|
       | Oracle Financial Services | STDTDTOP     | 0002000000027  | 2000        | 100        | 2000        | 0001428031002 | 000TOPD260620016 |000|