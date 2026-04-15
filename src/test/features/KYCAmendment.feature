@KYC
Feature: KYC Maintenance Feature

  @KYC1 @SBM @KYCCreationForRetailCustomer
  Scenario Outline: Validate Creation of KYC for Retail Customer and Authorize

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User click on KYC New Tab
    And User enters KYC Full Name "<FullName>"
    And User selects KYC Customer Type as "<KYCCustomerType>"
    And User selects KYC Risk Level as "<RiskLevel>"
    And User selects Customer Type at bottom "<KYCCustomerType>"
    And User enters KYC Birth Country "<BirthCountry>"
    And User enters KYC Birth Date "<BirthDate>"
    And User enters KYC Birth Place "<BirthPlace>"
    And User enters KYC Country "<Country>"
    And User enters KYC Nationality "<Nationality>"
    And User clicks Save in Retail Tab
    And User clicks Save in Main Tab and clicks Ok
    And User validates KYC Success Message
    And user SignOff the application
    When CHE user enters the username and password
     When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks KYC enter query Tab
    And User enters KYC Reference Number
    And User clicks KYC execute query Tab
    And User clicks KYC Authorize Tab
    And User accepts KYC Authorize Alert and clicks Ok
    Then User validates KYC auth success message

    Examples:
      | HomePageTitle                                       | FunctionName | FullName | KYCCustomerType | RiskLevel | BirthCountry | BirthDate | BirthPlace | Country | Nationality | branchnumber |
      | Oracle Financial Services                            | STDKYCMN     | BNKUSR1  | Retail Customer | Low       | KE           | 2/3/1999  | Kenya      | KE      | KE          | 999          |
    #    | Oracle Financial Services                            | STDKYCMN     | BNKUSR3  | Corporate Customer | Low       | KE           | 2/3/1999  | Kenya      | KE      | KE          | 999          |


 @KYC2 @SBM @KYCCreationForCorporateCustomer
  Scenario Outline: Validate Creation of KYC for Corporate Customer and Authorize

    Given User navigates to the application
    When MAK user enters the username and password
    And click on signin button
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User click on KYC New Tab
    And User enters KYC Full Name "<FullName>"
    And User selects KYC Customer Type as "<KYCCustomerType>"
    And User selects KYC Risk Level as "<RiskLevel>"
    And User selects Customer Type at bottom "<KYCCustomerType>"
    And User enters Parent Company Country of Incorporation as "<Country>"
    And User clicks Save in Corporate Tab
    And User clicks Save in Main Tab and clicks Ok
    And User validates KYC Success Message
    And user SignOff the application
    When CHE user enters the username and password
     When CHE user login in the application
    Then valdiate the home page tite as "<HomePageTitle>"
    When user enters the function name as "<FunctionName>" and click search button
    And User clicks KYC enter query Tab
    And User enters KYC Reference Number
    And User clicks KYC execute query Tab
    And User clicks KYC Authorize Tab
    And User accepts KYC Authorize Alert and clicks Ok
    Then User validates KYC auth success message

    Examples:
      | HomePageTitle                                       | FunctionName | FullName | KYCCustomerType | RiskLevel | BirthCountry | BirthDate | BirthPlace | Country | Nationality | branchnumber |
    #   | Oracle Financial Services                            | STDKYCMN     | BNKUSR1  | Retail Customer | Low       | KE           | 2/3/1999  | Kenya      | KE      | KE          | 999          |
       | Oracle Financial Services                            | STDKYCMN     | BNKUSR3  | Corporate Customer | Low       | KE           | 2/3/1999  | Kenya      | KE      | KE          | 999          |