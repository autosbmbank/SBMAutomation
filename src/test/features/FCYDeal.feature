@FCY
Feature: FCY Purchase and Sell - From Account Feature

  @FCY1 @SBM @PurchaseFCYFromAccount @tdAccountNumberchange
  Scenario Outline: Validate Purchase FCY From Account - 8207 successfully

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on FCY NextGen UI Dashboard
    When user searches for FCY Screen "<ScreenCode>"
    And user provides FCY Account Number "<AccountNumber>"
    And user selects FCY Bought Currency "<Currency>"
    And user enters FCY Bought Amount "<BoughtAmount>"
    And user expands FCY Denomination
    And user fills FCY denomination from Bought Amount "<BoughtAmount>"
    And user clicks FCY Submit and clicks Ok

  

    Examples:
      | HomePageTitle             | ScreenCode | AccountNumber | Currency | BoughtAmount | DenominationCode | Units | FileName |
      | Oracle Financial Services | 8207       | 0015428049001 | USD      | 10         | 10             | 1     | Ka       |

  @FCY2 @SBM @SellFCYFromAccount @tdAccountNumberchange
  Scenario Outline: Validate Sell FCY From Account - 8206 successfully

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on FCY NextGen UI Dashboard
    When user searches for FCY Screen "<ScreenCode>"
    And user provides FCY Sale Account Number "<AccountNumber>"
    And user selects FCY Bought Currency "<Currency>"
    And user enters FCY Sold Amount "<SoldAmount>"
    And user expands FCY Denomination
    And user fills FCY denomination from Bought Amount "<SoldAmount>"
    And user clicks FCY Submit and clicks Ok
   

    Examples:
      | HomePageTitle             | ScreenCode | AccountNumber | Currency | SoldAmount | DenominationCode | Units | FileName |
      | Oracle Financial Services | 8206       | 0015428049001 | USD      | 10           | 10               | 1     | Ka       |
