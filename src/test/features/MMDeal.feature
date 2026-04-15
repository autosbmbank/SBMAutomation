@MM
Feature: Money Market Deal - Placement Deal Feature

  @MM1 @SBM @MMPlacementDealCreationAndAuthorize
  Scenario Outline: Validate Creation and Authorization of MM Placement Deal

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
     And enter the Branch number as "<BranchNumber>"
    When user enters the function name as "<MakerFunctionName>" and click search button
    
    And User clicks on MM New Tab
    And User enters MM Product Code "<ProductCode>"
    And User enters MM Customer Number "<CustomerNumber>"
    And User enters MM Currency "<Currency>"
    And User enters MM Amount "<Amount>"
    And User selects MM Liquidation as Manual
    And User clicks MM Save button
    And User clicks MM Accept button
    And User clicks MM Ok button
    And User validates MM Success Message
    And enter the Branch number as "000"
    And user SignOff the application

    When CHE user enters the username and password
    When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<CheckerFunctionName>" and click search button
    And User clicks MM Enter Query Tab
    And User enters MM Contract Reference Number "<ContractReference>"
    And User clicks MM Execute Query Tab
    And User clicks MM Authorize Tab
    And User confirms MM all Override Checkboxes
    And User clicks MM Authorize button and clicks Ok
    Then User validates MM auth success message

    Examples:
      | HomePageTitle             | MakerFunctionName | CheckerFunctionName | ProductCode | CustomerNumber | Currency | Amount | ContractReference  |BranchNumber|
      | Oracle Financial Services | MMDTRONL           | MMDTRONL            | OMOP        | 428200         | KES      | 30000  | 001OMOP252721501   |001|
