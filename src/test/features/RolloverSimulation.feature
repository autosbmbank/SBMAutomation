@Rollover
Feature: Manual Rollover of Term Deposit

@Simulation @SBM
Scenario Outline: Save the transaction for rollover term Deposit
  Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "ICDREDRN" and click search button
             And clicks on New tab1
             And enter Account number1 "<AccountNumber>"
             And Click on p
             And click on Save option
            #  And click on exit

             Examples: 
             | HomePageTitle             | AccountNumber |
             | Oracle Financial Services | 0013000027160 |