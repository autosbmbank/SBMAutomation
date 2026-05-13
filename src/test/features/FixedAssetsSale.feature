@FixedAssets
Feature: Fixed Assets Sale Feature

  @FIXEDASSETS1 @SBM @FixedAssetsSaleQuery
  Scenario Outline: Validate Fixed Assets Sale Query with Screenshots

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks FixedAssets Enter Query Tab
    And User enters FixedAssets Reference Number "<ReferenceNumber>"
    And User clicks FixedAssets Execute Query Tab and takes screenshot
    And User clicks FixedAssets "<TabName>" Tab and takes screenshot
   

    Examples:
      | HomePageTitle             | FunctionName | ReferenceNumber  | TabName     |
    #   | Oracle Financial Services | FADTRSLE     | 000FXFT120250002 | Events      |
       | Oracle Financial Services | FADTRSLE     | 000FXFT120250002 | Settlements |
         | Oracle Financial Services | FADTRTFR     | 000FXFT120250002 | Settlements |