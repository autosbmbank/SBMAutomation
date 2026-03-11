 @Reports
 Feature: Generate Reports
  
#  @CGenerate Report - @Start Date, @ End Date
@NewAccount
  Scenario Outline: New Account Report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the New Account Folder
        And Open the Report
        And Enter the Branch for New Account "<Branch Number>"
        And Enter the Start Date "<Start Date>"
        And Enter the End Date "<End Date>"
        And Run the Report
     Examples:
     |Branch Number| Start Date | End Date |
     |100          | 01-01-2024 | 11-19-2025 |


  @ClosedAccount
  Scenario Outline: Closed Account Report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Closed Account Folder
        And Open the Report
        And Enter the Branch for Closed Account "<Branch Number>"
        And Enter the Start Date "<Start Date>"
        And Enter the End Date "<End Date>"
        And Run the Report
    
        Examples:
     |Branch Number| Start Date | End Date |
     |100          | 12-31-2023 | 11-18-2025 |

# @Start Date, @ End Date
  @CustomerSegmentation
      
  Scenario Outline: Customer Segmentation Report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Customer Segmentation Folder
        And Open the Report
       And Enter the Branch for Customer Segment "<Branch Number>"
        And Enter the Start Date "<Start Date>"
        And Enter the End Date "<End Date>"
        And Run the Report
    
        Examples:
     |Branch Number| Start Date | End Date |
     |100          | 02-02-2024 | 11-19-2025 |


# @Start Date, @ End Date
@ReactivationReport
       Scenario Outline: Reactivated Document Accounts Report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Reactivated Folder
        And Open the Report
       And Enter the Branch for Reactivated "<Branch Number>"
        And Enter the Start Date "<Start Date>"
        And Enter the End Date "<End Date>"
        And Run the Report
    
        Examples:
     |Branch Number| Start Date | End Date |
     |100          | 02-02-2024 | 11-19-2025 |

# @Start Date, @ End Date
@VaultTransactionReport
       Scenario Outline: Vault Transaction Report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Vault Transaction Folder
        And Open the Report
       And Enter the Branch for Vault Transaction "<Branch Number>"
       And Enter the Currency for Vault Transaction "<Currency>"
        And Enter the Start Date "<Start Date>"
        And Enter the End Date "<End Date>"
        And Run the Report
     Examples:
     |Branch Number| Currency   | Start Date | End Date |
     |100          | LSL       | 02-02-2024 | 11-19-2025 |

# @ Date
@CashPosition
 Scenario Outline: Cash Position Report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Cash Position Folder
        And Open the Report
       And Enter the UserID for Cash Position "<UserID>"
       And Enter the Date for Cash Position "<Date>"
       And Run the Report
     Examples:
     |UserID   | Date |
     |A00359     | 12-19-2023 |

  # @Transaction Date
  @UDFReport
 Scenario Outline: UDF report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the UDF Folder
        And Open the Report
       And Enter the Branch for UDF "<Branch Number>"
       And Enter the Date of Transaction for UDF "<TxnDate>"
        And Run the Report
     Examples:
     |Branch Number| TxnDate |
     |100          | 11-19-2024 |

# @UserID, @AccountType, @Branch Number, @Start Date, @End Date, @AmtFrom, @AmtTo
@LargeCashTransaction
 Scenario Outline: Large cash transaction report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Cash Transaction Folder
        And Open the Report
        And Enter the UserID for Cash Transaction "<UserID>"
        And Enter the AccountType for Cash Transaction "<AccountType>"
        And Enter the Branch for Cash Transaction "<Branch Number>"
        And Enter the Start Date "<Start Date>"
        And Enter the End Date "<End Date>"
        And Enter the Amount From for Large Cash Transaction "<AmtFrom>"
        And Enter the Amount To for Large Cash Transaction "<AmtTo>"
        And Run the Report
     Examples:
     |UserID|AccountType|Branch Number | Start Date | End Date | AmtFrom | AmtTo |
     |All   |101        |100            |02-02-2025 |11-19-2025|    0    | 40000 |

@TDMaturingNextMonth
 Scenario Outline: TD maturing next month
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the TD mature Folder
        And Open the Report
        And Enter the Branch for TD mature "<Branch Number>"
        And Run the Report
     Examples:
     |Branch Number|
     |100          |

# @UserID, @Transaction Date
@DailyTellerTransaction
 Scenario Outline: Daily teller transaction report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Teller Transaction Folder
        And Open the Report
        And Enter the Transaction Date for Teller Transaction "<TxnDate>"
        And Enter the Branch for Teller Transaction "<BranchNumber>"
        And Enter the UserID for Teller Transaction "<UserID>"
        And Run the Report
    Examples:
     |BranchNumber| UserID   | TxnDate|
     |100          | A00416   | 05-05-2025 |


# @Start Date, @End Date
@LoanDisbursement
 Scenario Outline: Loan Disbursement report
  Given User navigates to the Reports application
    When user enters the Reports username and password
        And click on Reports signin button 
        And Navigate to the Catalog
        And Open the Department Folder
        And Select the Loan Disbursement Folder
        And Open the Report
        And Enter the Start Date for Loan Disbursement "<Start Date>"
        And Enter the End Date for Loan Disbursement "<End Date>"
        And Run the Report
   Examples:
     |Start Date | End Date |
     |12-31-2024 | 11-19-2025 |
