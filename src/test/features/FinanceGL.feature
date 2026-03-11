@FinanceGL
 
Feature: Process FinanceGL for a customer
        @set7   @tdAccChange
        Scenario Outline: Validate the Extraction of reports before posting journals from a new GL
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
             Then valdiate the home page tite as "Oracle Financial Services"
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And User clicks on EnterQuery Tab
              And User enters AccountNumber "<AccountNumber>"
             When User clicks on ExecuteQuery Tab   
             Then validate query results are not displayed
 
        Examples:
                  | BranchNumber | FunctionName | AccountNumber |
                  | 100          | ACDTRNQY     | 110010753     |
 
        @set7
        Scenario Outline: Login with Maker Credential and create journal in DEDJNLON
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And Click on NewGLDE
              And Enter the GLDEBatch Number
              And Enter the GLDEDescription "<Description>"
              And Enter the GLDEDebit "<Debit>"
              And Enter the GLDECredit "<Credit>"
              And Click on GLDEOk button
              And Click on Ok on the populated Pop Window
              And Click on AddRow1 button
              And Select DrCr1 from given drop down list as "<DrCr1>"
              And Enter the Branch Code1 as "<BranchCode1>"
              And Enter the Account Number1
              And Enter the Currency1 as "<Currency1>"
              And Enter the Amount1 as "<Amount1>"
              And Enter the TransactionCode1 as "<TxnCode1>"
              And Click on AddRow2 button
              And Select DrCr2 from given drop down list as "<DrCr2>"
              And Enter the Branch Code2 as "<BranchCode2>"
              And Enter the Account Number2 as "<AccountNumber2>"
              And Enter the Currency2 as "<Currency2>"
              And Enter the Amount2 as "<Amount2>"
              And Enter the TransactionCode2 as "<TxnCode2>"
              And Click on Compute
              And Click on ok to confirm
              And Click Savetab to save the entries
              And Click on Ok button to confirm
              And Click on BatchClose
              And Click Ok to confirm
              And Click on Exit1 button
              And Change to Home Branch number as "<HomeBranchNumber>"
              And Click on SignOff1 button
    # And Confirm with Ok1 button
 
        Examples:
                  | BranchNumber | FunctionName | Description    | Debit | Credit | DrCr1 | BranchCode1 | Currency1 | Amount1 | TxnCode1 | DrCr2  | BranchCode2 | AccountNumber2 | Currency2 | Amount2 | TxnCode2 | HomeBranchNumber |
                  | 100          | DEDJNLON     | DE Transaction | 1000  | 1000   | Debit | 100         | LSL       | 1000    | ANC      | Credit | 100         | 1015367000012  | LSL       | 1000    | ANC      | 999              |
 
        @set7
        Scenario Outline: Login with Checker Credential and authorize
            Given User navigates to the application
             When CHE user enters the username and password
              And click on signin button as cheker
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And set Authorization Status to Unauthorized for DESJNLON
              And Enter the Batch Number for authorization for DESJNLON
              And click on search for DESJNLON
              And Open the first unauthorized record from results for DESJNLON
              And Click on Authorize for DESJNLON
              And Click on Authorize to confirm
              And Click on OkafterAuthorize for DESJNLON
             Then System should authorize the record successfully and record status should be Authorized for DESJNLON
 
        Examples:
                  | BranchNumber | FunctionName |
                  | 100          | DESJNLON     |
 
        @set7
        Scenario Outline: Validate the Extraction of reports after posting journals from a new GL
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
             Then valdiate the home page tite as "Oracle Financial Services"
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And User clicks on EnterQuery Tab
              And User enters the same AccountNumber
             When User clicks on ExecuteQuery Tab
             Then validate query results are displayed
 
        Examples:
                  | BranchNumber | FunctionName |
                  | 100          | ACDTRNQY     |
 
        @set5    @tdGLCodeChange
        Scenario Outline: Login with Maker Credential and create a GL in GLDCHACC
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And Click on new Create
              And Enter the GL Code1 "<GLCode>"
              And Enter the General Ledger Description1 "<GLDescription>"
              And Select the radio option Leaf1
              And Select the radio option CustInternal1
              And Select option from the GL Type drop down1 "<GLType>"
              And Select option from the Category drop down1 "<Category>"
              And Select the radio option Display On Report1 "<DisplayOnReport>"
              And Select the radio option Currency Restrictions1 "<CurrencyRestrictions>"
              And Select the radio option Posting Restrictions1 "<PostingRestrictions>"
              And Select the radio option Reconciliation1 "<Reconciliation>"
              And Click on GL Linkages tab1
              And Enter the Parent GL1 "<ParentGL>"
              And Click on Save Create
              And Click on Ok button
              And Click on Exit button
              And Click on SignOff button
   
   
        Examples:
                  | BranchNumber | FunctionName | GLCode    | GLDescription            | GLType | Category | DisplayOnReport | CurrencyRestrictions | PostingRestrictions | Reconciliation        | ParentGL  |
                  | 999          | GLDCHACC     | 110010831| Fund Transfer to Account | Normal | Asset    | Asset           | All Currencies       | Direct Posting      | Direct Reconciliation | 110010000 |
        @set5
        Scenario Outline: Login with Checker Credential and authorize a newly created GL
            Given User navigates to the application
             When CHE user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And set Authorization Status to Unauthorized
              And Enter the GL Code for authorization
              And click on search
              And Open the first unauthorized record from results
              And Click on Authorize
              And Click on Accept
              And Click on OkafterAccept
    # Then System should authorize the record successfully and record status should be Authorized
 
        Examples:
                  | BranchNumber | FunctionName |
                  | 999          | GLSCHACC     |
 
        @set5
        Scenario Outline: Attempt to create a GL with a duplicate GL Code and verify the system shows an error
            Given User navigates to the application
             When MAK user enters the username and password
            #  When user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And Click on new Duplicate
              And Enter the GL Code2
              And Enter the General Ledger Description2
              And Select the radio option Leaf2
              And Select the radio option CustInternal2
              And Select option from the GL Type drop down2
              And Select option from the Category drop down2
              And Select the radio option Display On Report2
              And Select the radio option Currency Restrictions2
              And Select the radio option Posting Restrictions2
              And Select the radio option Reconciliation2
              And Click on GL Linkages tab2
              And Enter the Parent GL2
              And Click on Save Duplicate
    #  Then System should not allow to save the record and should display error "<ExpectedError>"
 
        Examples:
                  | BranchNumber | FunctionName |
                  | 999          | GLDCHACC     |
   
        @set5
        Scenario Outline: Verify user can unlock and modify GL Description in GLDCHACC
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And click on Enter Query for Rename
              And enter the GL Code for Rename
              And click on Execute Query for Rename
              And click on Unlock for Rename
              And modify the General Ledger Description
              And Click on SavebuttonRN
              And Click on OkRN
             Then System should save the record successfully and status should be in unauthorized.
 
        Examples:
                  | BranchNumber | FunctionName |
                  | 999          | GLDCHACC     |
 
        @set5
        Scenario Outline: Login with Checker Credential and authorize a newly created GL
            Given User navigates to the application
             When CHE user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And set Authorization Status to Unauthorized
              And Enter the GL Code for authorization
              And click on search
             And Open the first unauthorized record from results
              And Click on Authorize
              And Click on Accept
              And Click on OkafterAccept
    # Then System should authorize the record successfully and record status should be Authorized
 
        Examples:
                  | BranchNumber | FunctionName |
                  | 999          | GLSCHACC     |
 
 
        @set6    @tdAccChange
        Scenario Outline: Verify a Direct Posting GL is not available in LOV while creating a transaction in DEDJNLON
            Given User navigates to the application
             When MAK user enters the username and password
              And click on signin button
              And enter the Branch number as "<BranchNumber>"
             When enters the function name as "<FunctionName>" and click on search button
              And Click on BLKNew
              And Enter the BLKBatch Number "<BatchNumber>"
              And Enter the BLKDescription "<Description>"
              And Enter the BLKDebit "<Debit>"
              And Enter the BLKCredit "<Credit>"
              And Click on BLKOk
              And Click on Ok on the popup Window for BLK
              And Click on BLKAdd Row
              And Select DrCr from given drop down list "<DrCr>"
              And Enter the BLKBranch Code "<BranchCode>"
    # And Enter the BLKAccount Number "<AccountNumber>"
              And Click on LOVSearch button
              And Enter the BLKAccount Number in the Account field "<AccountNumber>"
             Then System should not display the provided GL in LOV
 
        Examples:
                  | BranchNumber | FunctionName | BatchNumber | Description    | Debit | Credit | DrCr  | BranchCode | AccountNumber |
                  | 100          | DEDJNLON     | 1010        | DE Transaction | 1000  | 1000   | Debit | 100        | 340030675     |