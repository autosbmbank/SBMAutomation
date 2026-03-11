 @Withdrawals @NextGenUI
 Feature: Withdrawal of Amount - Teller

@Set1    @Accnum @Txnamt
  Scenario Outline: Withdrawals - till limit
  Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
        And User selects the NextGen tab
        And Clicks on Retail Operations
        And changes the branch code as "<BranchCode>"
        # And clicks on Tellertab
        And selects Cash Withdrawal in the Teller Menu Bar
        And enters the Account number "<Accnum>"
        And enters the Transaction Amount "<Txnamt>"
        And enters the Customer Information "<custinfo>"
        And saves the normal transaction
        Then validate that Till minimum balance breached message is displayed
     Examples:
     | BranchCode  |  Accnum          | Txnamt | custinfo |
     | 100         | 1025603300019    | 23000   | Withdrawal    |

  @Set2 @Accnum @Txnamt @custinfo
 #  Basic withdrawals with fee verification 
  Scenario Outline: Maker withdraws the amount
  Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
        And User selects the NextGen tab
        And Clicks on Retail Operations
        And changes the branch code as "<BranchCode>"
        And selects Cash Withdrawal in the Teller Menu Bar
        And click on Charge details button
        Then No data to display message should be shown
        And enters the Account number "<Accnum>"
        And enters the Transaction Amount "<Txnamt>"
        And enters the Customer Information "<custinfo>"
        And saves the normal transaction
        Then validate that transaction is submitted succesfully
     Examples:
     | BranchCode  |  Accnum          | Txnamt | custinfo |
     | 100         | 1025603300019    | 10   | Withdrawal    |

 @set3 @Accnum @Txnamt
##  Amount withdrawal above the transaction limit
   Scenario Outline: Maker withdraws the amount
   Given User navigates to the application
    When MAK user enters the username and password
        And click on signin button
        And User selects the NextGen tab
        And Clicks on Retail Operations
        And changes the branch code as "<BranchCode>"
        And selects Cash Withdrawal in the Teller Menu Bar
        And enters the Account number "<Accnum>"
        And enters the Transaction Amount "<Txnamt>"
        And enters the Customer Information "<custinfo>"
        And saves the transaction
        Then validate that transaction is submitted succesfully for approval
    Examples:
     | BranchCode  |  Accnum          | Txnamt | custinfo |
     | 100         | 1025603300019    | 51000  | Withdrawal  |  

     @set3
    Scenario Outline: Cheker Approves the Transaction
        Given User navigates to the application
        When CHE user enters the username and password
        And click on signin button as cheker
        And User selects the NextGen tab
        And Clicks on Retail Operations
        And changes the branch code as "<BranchCode>"
        And selects Electronic Journal in the Teller Menu Bar
        And Fetches the transactions that have status as Pending Approval
        # And approves the transaction
     Examples:
     | BranchCode  | 
     | 100         | 

@set3
    Scenario Outline: Maker Approves the Transaction
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        And User selects the NextGen tab
        And Clicks on Retail Operations
        And changes the branch code as "<BranchCode>"
        And selects Electronic Journal in the Teller Menu Bar
        And selects Sent Back in the Transaction Status
        And Clicks on the Fetch button
        # And approves the transaction
   
     Examples:
     | BranchCode  |
     | 100         |

      @Set4 @Accnum @Txnamt
    #  Withdrawal with Insufficient available balance.
      Scenario Outline: Blocked Account Scenario
      Given User navigates to the application
      When MAK user enters the username and password
        And click on signin button
        And User selects the NextGen tab
        And Clicks on Retail Operations
        And changes the branch code as "<BranchCode>"
        And selects Cash Withdrawal in the Teller Menu Bar
        And enters the Account number "<Accnum>"
        And enters the Transaction Amount "<Txnamt>"
        And enters the Customer Information "<custinfo>"
        And saves the normal transaction
        Then validate the Error Message
    Examples:
     | BranchCode  |  Accnum          | Txnamt | custinfo |
     | 100         | 1037635100014    | 23000   | Withdrawal    |

 

