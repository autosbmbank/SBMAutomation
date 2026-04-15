@ForeignExchange
Feature: Foreign Exchange Input

@ExchangeRate @SBM
Scenario Outline: Foreign Exchange Payment Input
       Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "FXDTRPAY" and click search button
             And Click on New in FXDTRPAY
             And enter Reference Number "<ReferenceNumber>"
             And click on Default Button
             And click on Save in FXDTRPAY
             And click on okbtn in FXDTRPAY
             And click on exit in FXDTRPAY
             And enter the Branch number as "000"
             And user SignOff the application
              When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "FXDTRPAY" and click search button
             And click on enter query in FXDTRPAY
             And enter Reference Number "<ReferenceNumber>"
             And click on execute query in FXDTRPAY
             And click on authorize in FXDTRPAY
             And click on authorize button in FXDTRPAY
             And click on ok in FXDTRPAY

             Examples:
    | HomePageTitle             | ReferenceNumber |
    | Oracle Financial Services | 001FXFD260621003 |
    