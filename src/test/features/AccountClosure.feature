@AccClosure @NextGenUI
Feature:Account Closure Feature

@ACClosure1  @tdAccountChange
  Scenario Outline: Perform Acount By Cash Mode Closure successfully
     Given User navigates to the application
   When MAK user enters the username and password
   And click on signin button
   Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And click on NextGen UI Dashboard 
   And user selects BranchName as "<BranchName>"
   When user enters close withdrawal screen
   When user enters close account number as "<AccountNumber>"
    And user clicks on IC Liquidate Button
    And user clicks on close Submit Button
    And user clicks on Query Tab
    And user enters Transaction Reference Number for AccountNumber as "<AccountNumber>"
    And user selects By Cash Mode
    When user exits NewGenDepositPage
   

    Examples:
    | HomePageTitle                                       | BranchNumber   | AccountNumber  |BranchName|
     | Oracle Financial Services - ENG - Transaction Input | 999         |  1024027100019 |100|

    
 @ACClosureAuth1  
  Scenario Outline: Perform Acount Closure By Cash Mode Authentication successfully
   Given User navigates to the application
  And CHE user enters the username and password
  And click on signin button
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
 

    Examples:
    | HomePageTitle                               | BranchNumber   | AccountNumber  |BranchName|
     | Oracle Financial Services                   | 999         |  1024027100019   |100|

 @ACClosure2  @tdAccountChange
  Scenario Outline: Perform Acount Closure By Account Mode successfully
     Given User navigates to the application
   When MAK user enters the username and password
   And click on signin button
   Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And click on NextGen UI Dashboard 
   And user selects BranchName as "<BranchName>"
   When user enters close withdrawal screen
   When user enters close account number as "<AccountNumber>"
    And user clicks on IC Liquidate Button
    And user clicks on close Submit Button
    And user clicks on Query Tab
    And user enters Transaction Reference Number for AccountNumber as "<AccountNumber>"
    And user selects By Account Mode
    
   

    Examples:
    | HomePageTitle                                       | BranchNumber   | AccountNumber  |BranchName|
     | Oracle Financial Services - ENG - Transaction Input | 999         |  1003988200018  |100|

@ACClosureAuth2  
  Scenario Outline: Perform Acount Closure By Account Mode Authentication successfully
   Given User navigates to the application
  And CHE user enters the username and password
  And click on signin button
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
 

    Examples:
    | HomePageTitle                               | BranchNumber   | AccountNumber  |BranchName|
     | Oracle Financial Services                   | 999         | 1003988200018 |100|