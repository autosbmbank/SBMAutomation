@Securities
Feature: Securities Deal Input Feature

  @SEC1 @SBM @SecuritiesDealCreationAndAuthorize
  Scenario Outline: Validate Creation and Authorization of Securities Deal

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks on Securities New Tab
    And User searches Securities Product "<Product>"
    And User clicks Securities P button
    And User searches Securities Security Code "<SecurityCode>"
    And User enters Securities Deal Quantity "<DealQuantity>"
    And User enters Securities TSDL Date "<TSDLDate>"
    And User enters Securities Input Price "<InputPrice>"
    And User searches Securities Counterparty "<Counterparty>"
    And User enables Securities Accommodation Lodge
    And User selects Securities Money Settlement Date "<MoneySettlementDate>"
    And User searches Securities Portfolio "<Portfolio>"
    And User searches Securities Safe Keeping Location "<SafeKeepingLocation>"
    And User searches Securities Safe Keeping Account "<SafeKeepingAccount>"
     And User clicks Securities Save button
    And User clicks Securities Accept button
    And User validates Securities Success Message
    And user SignOff the application

    When CHE user enters the username and password
   # When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks Securities Enter Query Tab
    And User enters Securities Deal Reference "<DealReference>"
    And User clicks Securities Execute Query Tab
    And User clicks Securities Authorize Tab in main screen
    And User clicks Securities Authorize button in Deal Authorization screen
    Then User validates Securities auth success message

    Examples:
      | HomePageTitle             | FunctionName | Product | SecurityCode          | DealQuantity | TSDLDate  | InputPrice | Counterparty | MoneySettlementDate | Portfolio        | SafeKeepingLocation | SafeKeepingAccount | DealReference        |
      | Oracle Financial Services | SEDXDLNL     | BBNZ    | FXD1/2008/20-SBM      | 100000000    | 2/11/2025 | 100000     | 000019       | 2/10/2025           | TRADINGPORTFOLIO | CENTRAL_BANK_LOC    | TRD_BONDS          |   000BBNZ260620516     |
