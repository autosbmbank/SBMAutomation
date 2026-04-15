@FXSale
Feature: FX Sale Walk-in Feature

  @FXSALE1 @SBM @FXSaleWalkin
  Scenario Outline: Validate FX Sale Walk-in successfully

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on FXSale NextGen UI Dashboard
    When user searches for FXSale Screen
    And user selects FXSale Sold Currency "<BoughtCurrency>"
    And user enters FXSale Sold Amount "<BoughtAmount>"
    And user selects FXSale Currency Paid "<CurrencyPaid>"
    And user enters FXSale Beneficiary Name "<BeneficiaryName>"
    And user expands FXSale FX In Denomination Details
    And user fills FXSale FX In denomination from Amount Received
    And user expands FXSale FX Out Denomination Details
     And user enters FXSale FX Out Denomination from Bought Amount "<BoughtAmount>"
    # And user enters FXSale FX Out Denomination Units "<OutDenominationCode>" "<OutUnits>"
    And user clicks FXSale Submit button
    Then user validates FXSale Success Message

    Examples:
      | HomePageTitle             | BoughtCurrency | BoughtAmount | CurrencyPaid | BeneficiaryName | 
      | Oracle Financial Services | USD            |  50            | KES          | John                |

@FXPURCHASE1 @SBM @FXPurchaseWalkin
  Scenario Outline: Validate FX Purchase Walk-in successfully

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on FXSale NextGen UI Dashboard
    When user searches for FXPurchase Screen
    And user selects FXPurchase Bought Currency "<BoughtCurrency>"
    And user enters FXPurchase Bought Amount "<BoughtAmount>"
    And user selects FXPurchase Currency Paid "<CurrencyPaid>"
    And user enters FXPurchase Beneficiary Name "<BeneficiaryName>"
    And user expands FXSale FX In Denomination Details
    And user fills FXPurchase FX In denomination from Bought Amount "<BoughtAmount>"
    And user expands FXPurchase FX Out Denomination Details
    And user fills FXPurchase FX Out denomination from Amount Paid
    # And user expands FXPurchase FX In Denomination Details
    # And user fills FXPurchase FX In denomination from Amount Received
    And user clicks FXPurchase Submit button
    Then user validates FXPurchase Success Message

    Examples:
      | HomePageTitle             | BoughtCurrency | BoughtAmount | CurrencyPaid | BeneficiaryName |
      | Oracle Financial Services | USD            | 10          | KES          | John            | 