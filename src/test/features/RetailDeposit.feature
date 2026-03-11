 @CashDeposit @NextGenUI
Feature: Cash Deposit Transaction

@Depostit1 @CashDepositwithinlimit  @tdAccountChange
  Scenario Outline: Perform Cash Deposit successfully
   Given User navigates to the application
   When MAK user enters the username and password
   And click on signin button
   Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And click on NextGen UI Dashboard 
   And user selects BranchName as "<BranchName>"
   When user searches for Screen
   When user provides Account Number "<AccountNumber>"
   And user provides Transaction Amount "<TransactionAmount>"
   And user provides Customer Interview "<CustomerInterview>"
   And user clicks on Save
   Then user validates successful confirmation
    When user exits NewGenDepositPage
   And user SignOff the application

    Examples:
    | HomePageTitle                                       | BranchNumber   | AccountNumber | TransactionAmount | CustomerInterview |BranchName|
    | Oracle Financial Services - ENG - Transaction Input | 999         |  1035471300017| 1000            |              |100|
    | Oracle Financial Services - ENG - Transaction Input | 999         |  1013099100014| 20000            |              |100|
    
     @Depostit2 @CashDepositmorethanlimitandAuth  @tdAccountChange
  Scenario Outline: Perform Cash Deposit over the limit successfully
     Given User navigates to the application
   When MAK user enters the username and password
   And click on signin button
   Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And click on NextGen UI Dashboard 
   And user selects BranchName as "<BranchName>"
   When user searches for Screen
   When user provides Account Number "<AccountNumber>"
    And user provides Transaction Amount "<TransactionAmount>"
    And user provides Customer Interview "<CustomerInterview>"
    And user clicks on Save
    Then user sends approval for more than limit transaction
    When user exits NewGenDepositPage
     And user SignOff the application
     And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
   And click on NextGen UI Dashboard 
   And user selects BranchName as "<BranchName>"
   When user clicks on search for Screen
   And user selects pending id
   And user approves the pending approval
   When user exits NewGenDepositPage
   And user SignOff the application
   When MAK user enters the username and password
   And MAK user login in the application
   Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And click on NextGen UI Dashboard 
   And user selects BranchName as "<BranchName>"
   When user clicks on search for Screen
   And user accepts approval
   And user closes the screen
   When user exits NewGenDepositPage
   And user SignOff the application

    Examples:
    | HomePageTitle                                       | BranchNumber   | AccountNumber | TransactionAmount | CustomerInterview |BranchName|
     | Oracle Financial Services - ENG - Transaction Input | 999         |   1025603300019 | 55000            |                   |100|

#      @Depostit3 @CashDepositmorethanlimitAuth   @tdAccountChange
#   Scenario Outline: Perform Cash Deposit overthelimit auth successfully
#      Given User navigates to the application
#         When CHE user enters the username and password
#        And CHE user login in the application
#         Then valdiate the home page tite as "<HomePageTitle>"
#         And enter the Branch number as "<BranchNumber>"
#        And click on NextGen UI Dashboard 
#         And user selects BranchName as "<BranchName>"
#        When user clicks on search for Screen
#        And user selects pending id
#        And user approves the pending approval
#         When user exits NewGenDepositPage
#      And user SignOff the application
#       When MAK user enters the username and password
#     And MAK user login in the application
#       Then valdiate the home page tite as "<HomePageTitle>"
#        And enter the Branch number as "<BranchNumber>"
#        And click on NextGen UI Dashboard 
#         And user selects BranchName as "<BranchName>"
#        When user clicks on search for Screen
#        And user accepts approval
#         And user closes the screen
#    When user exits NewGenDepositPage
#    And user SignOff the application
       
#     Examples:
#     | HomePageTitle                                       | BranchNumber   | AccountNumber | TransactionAmount | CustomerInterview |BranchName|
#      | Oracle Financial Services - ENG - Transaction Input | 999         |   1008172000014 | 60000            | Deposited              |100|

  