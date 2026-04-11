@CustomerAccounts
Feature: Create Account and Authorize 

@Account1 @SBM
   Scenario Outline: Opening CASA Account
   Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And clicks on New tab
             And enter Customer no "<CustomerNo>"
             And enter Currency1 "<Currency>"
             And enter Account Class "<AccountClass>"
             And Click on Fetch
             And click on save in Account generation tab 
             And enter location "<Location>"
             And enter media "<Media>"
             And click on MIS tab
             And enter Pool Code "<PoolCode>"
             And Click on Save button in MIS tab
             And Click on Fields tab
             And enter KDIC-FP-ODS "<KDIC_FP_ODS>"
             And Click on Save in UDE fields
             And Click on Save
             And Click on Ok
             And Click on Accept button
             And click on ok button
             And Click on Exit
             And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And click enter Query
             And enter Account number "<Accountnumber>"
             And Click on Execute Query
             And click on Authorize 
             And Click on Accept1
            #  And Click on OKButton
             
    Examples:
    | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS | Accountnumber |
    | Oracle Financial Services | 430895    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430895001 |
   #  | Oracle Financial Services |000006    | USD      | DBCA      | KE         | MAIL   | DFLTPOOL | YES          | 

   @Account2
       Scenario Outline: Block Account Debit Freeze
                 Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And clicks on New tab
             And enter Customer no "<CustomerNo>"
             And enter Currency1 "<Currency>"
             And enter Account Class "<AccountClass>"
             And Click on Fetch
             And click on save in Account generation tab 
             And enter location "<Location>"
             And enter media "<Media>"
             And click on MIS tab
             And enter Pool Code "<PoolCode>"
             And Click on Save button in MIS tab
             And Click on Fields tab
             And enter KDIC-FP-ODS "<KDIC_FP_ODS>"
             And Click on Save in UDE fields
             And click on Auxiliary tab
             And Click on no debit check box
             And Click on Save
             And Click on Ok
             And Click on Accept button
             And click on ok button
             And Click on Exit
             And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And click enter Query
             And enter Account number "<Accountnumber>"
             And Click on Execute Query in STDCUSAC
             And click on Authorize 
             And Click on Accept1
            #  And Click on OKButton
             
    Examples:
    | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS | Accountnumber |
    | Oracle Financial Services | 430895    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430895004 |

    @Account3
     Scenario Outline: Block Account Credit Freeze
       Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And clicks on New tab
             And enter Customer no "<CustomerNo>"
             And enter Currency1 "<Currency>"
             And enter Account Class "<AccountClass>"
             And Click on Fetch
             And click on save in Account generation tab 
             And enter location "<Location>"
             And enter media "<Media>"
             And click on MIS tab
             And enter Pool Code "<PoolCode>"
             And Click on Save button in MIS tab
             And Click on Fields tab
             And enter KDIC-FP-ODS "<KDIC_FP_ODS>"
             And Click on Save in UDE fields
             And click on Auxiliary tab
             And Click on no credit check box
             And Click on Save
             And Click on Ok
             And Click on Accept button
             And click on ok button
             And Click on Exit
             And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And click enter Query
             And enter Account number "<Accountnumber>"
             And Click on Execute Query in STDCUSAC
             And click on Authorize 
             And Click on Accept1
            #  And Click on OKButton
             
    Examples:
    | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS | Accountnumber |
    | Oracle Financial Services | 430895    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430895006 |

@Account4
     Scenario Outline: Block Account Credit Freeze
       Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And clicks on New tab
             And enter Customer no "<CustomerNo>"
             And enter Currency1 "<Currency>"
             And enter Account Class "<AccountClass>"
             And Click on Fetch
             And click on save in Account generation tab 
             And enter location "<Location>"
             And enter media "<Media>"
             And click on MIS tab
             And enter Pool Code "<PoolCode>"
             And Click on Save button in MIS tab
             And Click on Fields tab
             And enter KDIC-FP-ODS "<KDIC_FP_ODS>"
             And Click on Save in UDE fields
             And click on Auxiliary tab
             And Click on no debit check box
             And Click on no credit check box
             And Click on Save
             And Click on Ok
             And Click on Accept button
             And click on ok button
             And Click on Exit
             And enter the Branch number as "000"
             And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And click enter Query
             And enter Account number "<Accountnumber>"
             And Click on Execute Query in STDCUSAC
             And click on Authorize 
             And Click on Accept1
            #  And Click on OKButton
             
    Examples:
    | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS | Accountnumber |
    | Oracle Financial Services | 430895    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430895007 |

@Account5
 Scenario Outline: Unblock the account Reverse above the Freeze
   Given User navigates to the application
            When MAK user enters the username and password
            When MAK user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
             And click enter Query
             And enter Account number "<Accountnumber>"
             And Click on Execute Query in STDCUSAC
             And click on unlock
             And click on Auxiliary tab
             And uncheck on no debit check box
             And uncheck on no credit check box
             And Click on Save
             And Click on Ok
             And Click on Accept button
             And click on ok button
             And Click on Exit
             And enter the Branch number as "000"
             And user SignOff the application
          
          Examples:
          | HomePageTitle             | Accountnumber |
          | Oracle Financial Services | 0011430895008 |
