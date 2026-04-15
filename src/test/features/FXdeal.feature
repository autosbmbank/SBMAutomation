@FX
Feature: FX Deal - Forward Deal Feature

  @FX1 @SBM @FXForwardDealCreationAndAuthorize
  Scenario Outline: Validate Creation and Authorization of FX Forward Deal

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks on FX New Tab
    And User searches FX Product Code "<ProductCode>"
    And User searches FX Counterparty "<Counterparty>"
    And User searches FX Bought Currency "<BoughtCurrency>"
    And User enters FX Bought Amount "<BoughtAmount>"
    And User selects FX Bought Value Date "<BoughtValueDate>"
    And User searches FX Sold Currency "<SoldCurrency>"
    And User enters FX Sold Amount "<SoldAmount>"
    And User selects FX Sold Value Date "<SoldValueDate>"
    And User clicks FX Calculate
    And User clicks on FX Fields Tab
    And User enters Square Off Rate "<SquareOffRate>"
    And User clicks FX Save button
    And User validates FX Success Message
    And user SignOff the application
    When CHE user enters the username and password
    When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks FX Enter Query Tab
    And User enters FX Contract Reference Number
    And User clicks FX Execute Query Tab
    And User clicks FX Authorize Tab
     And User clicks FX Confirm Radio Button
    And User clicks FX Authorize on popup
    # And User clicks FX Ok button
    Then User validates FX auth success message

    Examples:
      | HomePageTitle             | FunctionName | ProductCode | Counterparty | BoughtCurrency | BoughtAmount | BoughtValueDate | SoldCurrency | SoldAmount | SoldValueDate | SquareOffRate |
       | Oracle Financial Services | FXDTRONL     | FXFD        | 000005       | EUR            | 1000         | 03/11/2026       | KES          | 150840.00  | 03/20/2026    | 10            |
       | Oracle Financial Services | FXDTRONL     | FXSD        | 000005       | EUR            | 1000         | 03/04/2026       | KES          | 150840.00  | 03/05/2026    | 10            |
