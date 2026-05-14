@Withdrawals @NextGenUI
Feature: Withdrawal of Amount - Teller

        @withdrawal1 @SBM1 @Accnumchange
        Scenario Outline: Withdraw LCY Cash from Account - 1001
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
              And User selects the NextGen tab
              And selects Cash Withdrawal in the Teller Menu Bar
              And enters the Account number "<Accnum>"
              And enters the Transaction Amount "<Txnamt>" currency "<currency>"
              And enters the Customer Information "<denomination>" "<qty>"
              And saves the normal transaction
        # Then validate that transaction is submitted succesfully for approval
        Examples:
                  | BranchCode | Accnum        | Txnamt | custinfo   | denomination | qty | currency |
                  | 100        | 0012415565001 | 5      | Withdrawal | 5            | 1   | KES      |

  