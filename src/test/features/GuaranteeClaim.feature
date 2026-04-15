@Guarantee
Feature: Guarantee Claim Lodgement Feature

  @GUARANTEE1 @SBM @GuaranteeClaimLodgementAndAuthorize @tdContractRefencechange
  Scenario Outline: Validate Creation and Authorization of Guarantee Claim Lodgement

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
     And enter the Branch number as "<BranchNumber>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks on Guarantee New Tab
    And User enters Guarantee Contract Reference "<ContractReference>"
    And User clicks Guarantee P button and clicks Ok
    And User enters Guarantee Claim Lodgement Date "<ClaimLodgementDate>"
    And User enters Guarantee Claim Amount "<ClaimAmount>"
    # And User enters Guarantee Claiming Bank Reference "<ClaimingBankReference>"
    And User selects Guarantee Extend Or Settle "<ExtendOrSettle>"
    And User clicks Guarantee Save button and clicks Ok
    And User validates Guarantee Success Message
     And enter the Branch number as "000"
    And user SignOff the application

    When CHE user enters the username and password
    When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
     And enter the Branch number as "<BranchNumber>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks Guarantee Enter Query Tab
    And User enters Guarantee Contract Reference "<ContractReference>"
    And User enters Guarantee Claim SI No "<ClaimSINo>"
    And User clicks Guarantee Execute Query Tab
    And User clicks Guarantee Authorize Tab
    And User clicks Guarantee Authorize button
    And User clicks Guarantee Ok button
    Then User validates Guarantee auth success message

    Examples:
      | HomePageTitle             | FunctionName | ContractReference  | ClaimLodgementDate | ClaimAmount | ClaimingBankReference | ExtendOrSettle | ClaimSINo |BranchNumber|
      | Oracle Financial Services | LCDGCLM      | 001PBGR251120001   | 08/28/2025         | 2500        | 1234                  | Settle Only    | 1         |001    |
