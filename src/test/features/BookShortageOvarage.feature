@Book
Feature: Book Shortage and Book Overage Feature

  @BOOK1 @SBM @BookShortage
  Scenario Outline: Validate Book Shortage successfully

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on Book NextGen UI Dashboard
    When user searches for Book Shortage Screen
    And user selects Book Currency Code "<CurrencyCode>"
    And user enters Book Amount "<Amount>"
    And user expands Book Denomination
     And user fills Book Denomination from Amount "<Amount>"
    And user clicks Book Submit button
    Then user validates Book Success Message

    Examples:
      | HomePageTitle             | CurrencyCode | Amount |
      | Oracle Financial Services | KES          | 1000  |

  @BOOK2 @SBM @BookOverage
  Scenario Outline: Validate Book Overage successfully

    Given User navigates to the application
    When MAK user enters the username and password
    When MAK user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    And user clicks on Book NextGen UI Dashboard
    When user searches for Book Overage Screen
    And user selects Book Currency Code "<CurrencyCode>"
    And user enters Book Amount "<Amount>"
    And user expands Book Denomination
    And user fills Book Denomination from Amount "<Amount>"
    And user clicks Book Submit button
    Then user validates Book Success Message

    Examples:
      | HomePageTitle             | CurrencyCode | Amount |
      | Oracle Financial Services | KES          | 2000   |
