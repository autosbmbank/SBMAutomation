@Securities
Feature: Securities Instrumention Definition

@Instrumentation @SBM
 Scenario Outline: Save the transaction for securities instrument
     Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "SEDTRONL" and click search button
             And clicks on new
             And enter security id "<SecurityID>"
             And enter product "<Product>"
             And click on p button
             And enter market of issue "<MarketOfIssue>"
             And enter issuer code "<IssuerCode>"
             And select the Quantity Quotation
             And enter issue date "<IssueDate>"
             And enter start of trading date "<StartofTradingDate>"
             And enter redemption date "<RedemptionDate>"
             And enter security currency "<SecurityCurrency>"
             And enter initial face value "<InitialFaceValue>"
             And enter issue price "<IssuePrice>"
             And enter redemption price "<RedemptionPrice>"
             And click on others tab
             And enter collateral type "<CollateralType>"
             And enter market for revaluation "<MarketForRevaluation>"
             And Click on save 
             And Click on Accept2
             And click on ok button2
             And Click on exitbtn2
             And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "SEDTRONL" and click search button
             And click on Enter Query1
             And enter security id "<SecurityID>"
             And click on Execute Query
             And Click on Authorize1
             And click on Authorize btn
            #  And click on OK


             Examples:
             | HomePageTitle             | SecurityID | Product | MarketOfIssue | IssuerCode | IssueDate | StartofTradingDate | RedemptionDate | SecurityCurrency | InitialFaceValue | IssuePrice | RedemptionPrice | CollateralType | MarketForRevaluation |
             | Oracle Financial Services | 111234  | CKTB     | CBKFLTBN       | 100000    | 2/3/2026 |  03/25/2026       | 1/3/2027       |  KES              |       9           |   2000     |       9         |    SE          |      NSETRD          |