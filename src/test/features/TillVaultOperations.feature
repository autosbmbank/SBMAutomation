@TillVault
Feature: Branch Operations Feature

  @BRANCH1 @SBM @OpenVault
  Scenario Outline: Validate Open Vault Batch

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard in TillVault
    And user enters screen name "<ScreenName>"

    Examples:
      | HomePageTitle             | ScreenName      |
      | Oracle Financial Services | Open Vault Batch |

  @BRANCH2 @SBM @CloseVault
  Scenario Outline: Validate Close Vault Batch

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard in TillVault
    And user enters screen name "<ScreenName>"

    Examples:
      | HomePageTitle             | ScreenName       |
      | Oracle Financial Services | Close Vault Batch |

  @BRANCH3 @SBM @OpenTill
  Scenario Outline: Validate Open Till

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard in TillVault
    And user enters screen name "<ScreenName>"

    Examples:
      | HomePageTitle             | ScreenName        |
      | Oracle Financial Services | Curret Open Tills |

  @BRANCH4 @SBM @TransferVaultToTill
  Scenario Outline: Validate Transfer Funds from Vault to Till - 9008

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard in TillVault
    And user enters screen name "<ScreenName>"
    And user enters Branch Total Required Cash "<TotalCash>"
    And user expands Branch Denomination
    And user fills Branch Denomination from Total Required Cash "<TotalCash>"
    And user clicks Branch Submit button
    Then user validates TillVault Success Message

    Examples:
      | HomePageTitle             | ScreenName         | TotalCash |
      | Oracle Financial Services | Sell cash to Vault | 1000      |

  @BRANCH5 @SBM @TransferTillToVault
  Scenario Outline: Validate Transfer Funds from Till to Vault - 9007

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user selects NextGen UI Dashboard in TillVault
    And user enters screen name "<ScreenName>"
    And user enters Branch Total Required Cash "<TotalCash>"
    And user expands Branch Denomination
    And user fills Branch Denomination from Total Required Cash "<TotalCash>"
    And user clicks Branch Submit button
    Then user validates TillVault Success Message

    Examples:
      | HomePageTitle             | ScreenName          | TotalCash |
      | Oracle Financial Services | Buy cash from Vault | 1000      |
