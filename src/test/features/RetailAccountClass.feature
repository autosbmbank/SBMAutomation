@ReatailAccountClassTransfer 
Feature: Retail Account Class Transfer

@Retail01 @AccountclasstransitionErrorscenarios  @tdAccountChange
  Scenario Outline: Verify retail Accountclass transition Error scenarios
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And user click on New in Account Class 
    And user Enter the Account "<Account>"
    And user Enter the Account Class "<AccountClass>"
    And user Click on Default button
    And user Click on Save
    Then validate the Error message
    When user Click on Exit button

  Examples:
   | HomePageTitle                                       | BranchNumber | FunctionName   | Account        | AccountClass |
    | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1000093500029  | 132          |
    # | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1000993600014  | 102          |
    # | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1013278500015  | 230          |
    # | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1017048400015  | 260         |
   #  | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1037635600017  | 250         |

    
@Retail02 @AccountclasstransitionMISscenarios    @tdAccountChange
  Scenario Outline: Verify retail MIS account class transfer
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And user click on New in Account Class 
    And user Enter the Account "<Account>"
    And user Enter the Account Class "<AccountClass>"
    And user Click on Default button
    And user Click on MIS Tab
    And user Click on Save
    Then validate the Success message
    When user Click on Exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And select "<AutheirizationStatus>" from drop down  
    And user Enter the Account Class "<AccountClass>"
    And user Clicks on Search button
    And user doubleclick on record
     And Click on Authorize Button
    Then validate the Authsuccess message


  Examples:
   | HomePageTitle                                       | BranchNumber | FunctionName   | Account        | AccountClass |branchnumber|functionname|AutheirizationStatus|
    | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1000017400015  | 132          |999         |STSACTFR    |   U                 |
   
    
    
@Retail03 @AccountclasstransitionsSuccesscenarios   @tdAccountChange
  Scenario Outline: Verify retail account class transfer Success
    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    When enters the function name as "<FunctionName>" and click on search button
    And user click on New in Account Class 
    And user Enter the Account "<Account>"
    And user Enter the Account Class "<AccountClass>"
    And user Click on Default button
    And user Click on Save
    Then validate the Success message
    When user Click on Exit button
    And enter the Branch number as "<branchnumber>"
    And user SignOff the application
    And CHE user enters the username and password
    And CHE user login in the application
    And valdiate the home page tite as "<HomePageTitle>"
    And enter the Branch number as "<BranchNumber>"
    And enters the function name as "<functionname>" and click on search button
    And select "<AutheirizationStatus>" from drop down  
    And user Enter the Account Class "<AccountClass>"
    And user Clicks on Search button
    And user doubleclick on record
    And Click on Authorize Button
    Then validate the Authsuccess message

  Examples:
   | HomePageTitle                                       | BranchNumber | FunctionName   | Account        | AccountClass |branchnumber|functionname|AutheirizationStatus|
    | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1017048400015  | 210        | 999         |STSACTFR   |    U              |
     # | Oracle Financial Services - ENG - Transaction Input | 100        | STDACTFR        | 1012512500033  | 215          |999     | STSACTFR   |    U              |
   