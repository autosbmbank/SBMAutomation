@Cheque
Feature: Cheque Book Operations Feature

  @CHEQUE1 @SBM1 @IssueChequeBook
  Scenario Outline: Validate Issue Cheque Book to Customer

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on Cheque NextGen UI Dashboard
    When user searches for Cheque Screen "<ScreenCode>"
    And user enters Cheque Account Number "<AccountNumber>"
    And user enters Cheque Address Line1 "<AddressLine1>"
    And user enters Cheque Address Line2 "<AddressLine2>"
   And user enters Cheque First Cheque Number with length "<ChequeLength>"
    And user clicks Cheque Submit button
    Then user validates Cheque Success Message

    Examples:
      | HomePageTitle             | ScreenCode | AccountNumber | AddressLine1 | AddressLine2 |ChequeLength|
      | Oracle Financial Services | CQRQ       | 0002000000036  | KE           | Kenya        |6          |
  @CHEQUE2 @SBM1 @StopPaymentCheque
  Scenario Outline: Validate Process Stop Payment of Cheque

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on Cheque NextGen UI Dashboard
    When user searches for Cheque Screen "<ScreenCode>"
    And user enters Cheque Account Number "<AccountNumber>"
    And user enters Cheque Number "<ChequeNumber>"
    And user clicks Cheque Submit button
    Then user validates Cheque Success Message

    Examples:
      | HomePageTitle             | ScreenCode | AccountNumber | ChequeNumber |
      | Oracle Financial Services | CQST       | 0002000000036 | ert034       |
