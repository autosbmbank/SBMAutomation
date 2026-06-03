@Pool
Feature: Collateral Pool Creation and Authorization Feature

  @POOL1 @SBM @CollateralPoolCreationAndAuthorize 
  Scenario Outline: Validate Creation and Authorization of Collateral Pool

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks on Pool New Tab
    And User searches Pool Liability No "<LiabilityNo>"
    And User enters Pool Code "<PoolCode>"
    And User searches Pool Currency "<PoolCurrency>"
    And User clicks Pool Collateral Linkage Add Row button
    And User searches Pool Collateral Code "<CollateralCode>"
    And click on fetch button in GCDMPOOL
    And click on first record in GCDMPOOL
    And enter Linked percentage number "<Percentage>"
    And User clicks Pool Save button
    And User clicks Pool Ok button
    # And User validates Pool Success Message
    And click on exit in GCDMPOOL
    And user SignOff the application

    When CHE user enters the username and password
    When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks Pool Enter Query Tab
    And User enters Pool Liability No "<LiabilityNo>"
    And User clicks Pool Execute Query Tab
    And User clicks Pool Authorize Tab
    And User clicks Pool Accept button
    And User clicks Pool Ok button
    Then User validates Pool auth success message

    Examples:
      | HomePageTitle             | FunctionName | LiabilityNo | PoolCode | PoolCurrency | CollateralCode | Percentage |
      | Oracle Financial Services | GCDMPOOL     | 000028        | 123985   | KES          | 9055       | 100 |
