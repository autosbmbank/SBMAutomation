@IssueBankers
Feature: Issue bankers Cheque

@BankerCheque
Scenario Outline: Issue Bankers Cheque - Walkin (Cash)
 Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
            #  And enter the Branch number as "001"
             And Click on NextGen tab in 8301
             And enter the Screen Name "<Screen>"
             And click on down tab in 8301
             And enter BC Amount "<Amount>"
             And enter Payee name "<Name>"
             And enter BC number "<Number>"
             And click on Funding Details
             And enter drawer name "<DrawerName>"
             And click on Denomination
             And enter the units in bills "<Units>"
             And click on Submit in 8301
             
             Examples:
                 | HomePageTitle             | Screen | Amount | Name   | DrawerName | Units  |
                 | Oracle Financial Services | 8301  |   2000  | VARMA  |    ROMANIO  |   2    |
                 