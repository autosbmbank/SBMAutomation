@Securitymaintenance
Feature: Securities Action Maintenance

@Maintenance1 @SBM
Scenario Outline: Securities Corporate Action Maintenance Redemption
 Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "SEDXREDF" and click search button
             And click on enter query in SEDXREDF
             And enter Internal Action "<InternalActionID>"
             And click on Execute Query in SEDXREDF

             Examples:
    | HomePageTitle             | InternalActionID |
    | Oracle Financial Services | 000ZRDM131190004 |
