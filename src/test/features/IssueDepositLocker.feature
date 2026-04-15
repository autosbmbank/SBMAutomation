@DepositLocker
Feature: BookTransfer Account Transaction

@IssueDepositLocker @SBM @TDAccount
    Scenario Outline: Issue Deposit Locker Transaction using Credit by MAK and Authorise by CHE
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "DLDTRONL" and click search button
      And user clicks on New button IDL 
      And user enters ProductCode IDL as "<Productcodedl>"  
      And user click on P IDL
      And get Contract reference IDL
      And user enters Vault code IDL as "<Vault Code>"
      And user enters Customer IDL as "<customer>"
      And user enters Branch IDL as "<Branch>"
      And user enters Account number IDL as "<Account Number>"
        And clicks on save tab IDL
      Then clicks on OK tab IDL
      When user exits IssueDepositLockerPage IDL
      And User signoff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "DLDTRONL" and click search button
      And user clicks on Enter Query IDL
      And user enters Contract reference IDL as "<Contract Reference>" 
      And user clicks on Execute Query IDL
      And user clicks on Authorize tab IDL
      And user clicks on Authorize button IDL
      Then clicks on OK button IDL

    
      
    Examples:
      
                  | HomePageTitle                                       | BranchNumber | FunctionName     | Productcodedl | Vault Code |customer |Branch | Account Number| 
                  | Oracle Financial Services - ENG - Transaction Input | 000          | DLDTRONL         | DLME         |  V001       |120002  | 000      | 0002000000038 |
