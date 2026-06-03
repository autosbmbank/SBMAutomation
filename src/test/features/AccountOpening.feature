@CustomerAccounts     @SBM
Feature: Create Account and Authorize

        @Account1 @SBM
        Scenario Outline: Opening CASA Account
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              # And clicks on ok in STDCUSAC
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS | 
                   | Oracle Financial Services | STDCUSAC | 430981 | KES | DBSA | KE | MAIL | DFLTPOOL | YES | 


            @Account10 @SBM
        Scenario Outline: Overdraft Account Opening
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              # And clicks on ok in STDCUSAC
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |
       | Oracle Financial Services | STDCUSAC  |106999    | USD      | DBCA      | KE         | MAIL   | DFLTPOOL | YES          | 
        

       @Account8 @SBM
        Scenario Outline: Corporate Account Opening without limits
        Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
              And User click on New Tab
              And user click on ok in STDCIF
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              # And User selects "<Gender>" radio button
              # And User enters Date of Birth "<DateOfBirth>"
              # And User enters Nationality "<Nationality>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And user clicks on MIS TAB
              And user clicks on Fields TAB
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User clicks on Save button
              And User accepts PopUp Alert
              # And User accepts accept Alert
             Then User validates success message
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
          #    And enter the Branch number as "000"
             When user enters the function name as "<FunctionName>" and click search button
              And User clicks enter query Tab
              And User enters customer number "<number>"
              And User clicks execute query Tab
              And User clicks on Autherize Tab
              And User accepts Autherize Alert
             Then User validates success msg
            #  And enter the Branch number as "<branchnumber>"
              And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<Functionname>" and click search button
              And clicks on New tab
              And enter Customer no
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<Functionname>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle | Functionname | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |  FunctionName | CustomerType |FullName   | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address | Country | Language | Location | Media |
      | Oracle Financial Services | STDCUSAC  |106999    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | STDCIF       | Corporate    | JohnRobert | john      | CCRP             | Male   | 7/4/1999    | KE          | Kenya   | KE      | ENG      | MER      | MAIL  |

        @Account9 @SBM
        Scenario Outline: Corporate Account Opening with limits
        Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
              And User click on New Tab
              And user click on ok in STDCIF
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              # And User selects "<Gender>" radio button
              # And User enters Date of Birth "<DateOfBirth>"
              # And User enters Nationality "<Nationality>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And user clicks on MIS TAB
              And user clicks on Fields TAB
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User checks Track Limits option
              And User clicks on Save button
              And User accepts PopUp Alert
              # And User accepts accept Alert
             Then User validates success message
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
          #    And enter the Branch number as "000"
             When user enters the function name as "<FunctionName>" and click search button
              And User clicks enter query Tab
              And User enters customer number "<number>"
              And User clicks execute query Tab
              And User clicks on Autherize Tab
              And User accepts Autherize Alert
             Then User validates success msg
            #  And enter the Branch number as "<branchnumber>"
              And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<Functionname>" and click search button
              And clicks on New tab
              And enter Customer no
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<Functionname>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle | Functionname | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |  FunctionName | CustomerType |FullName   | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address | Country | Language | Location | Media |
      | Oracle Financial Services | STDCUSAC  |106999    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | STDCIF       | Corporate    | JohnRobert | john      | CCRP             | Male   | 7/4/1999    | KE          | Kenya   | KE      | ENG      | MER      | MAIL  |

        @Account2  @SBM
        Scenario Outline: Block Account Debit Freeze
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
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
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |
                  | Oracle Financial Services | 000006     | KES      | DBSA         | KE       | MAIL  | DFLTPOOL | YES         |
                  | Oracle Financial Services | 000007     | USD      | DBSA         | KE       | MAIL  | DFLTPOOL | YES         |

        @Account3  @SBM
        Scenario Outline: Block Account Credit Freeze
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
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
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |
                  | Oracle Financial Services | 000007     | KES      | DBSA         | KE       | MAIL  | DFLTPOOL | YES         |

        @Account4  @SBM
        Scenario Outline: Block Account Full Freeze
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
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
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
             
        Examples:
                  | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |
                  | Oracle Financial Services | 000010     | KES      | DBSA         | KE       | MAIL  | DFLTPOOL | YES         |

        @Account5  @SBM
        Scenario Outline: Unblock the account Reverse above the Freeze
        Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
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
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
              And click enter Query
              And enter Account number
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
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
              And enter the Branch number as "001"
             When user enters the function name as "STDCUSAC" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
          
          Examples:
                  | HomePageTitle             | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |
                  | Oracle Financial Services | 000096     | KES      | DBSA         | KE       | MAIL  | DFLTPOOL | YES         |
        

        @Account6  @SBM
        Scenario Outline: Amend Corporate Account Mandates
        Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on unlock
              And enter location "<Location>"
              And Click on Fields tab
              And enter KDIC-FP-ODS "<KDIC_FP_ODS>"
              And Click on Save in UDE fields
              And click on Account Signatory tab
              And click on addrow in signatory details
              And click on search button in customer id
              And click on fetch in STDCUSAC
              And click on first record
              And click on search in signature id
              And click on fetch button
              And click on first record
              And click on save in signatory details
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton

        Examples:
                  | HomePageTitle             |FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode |Accountnumber |  KDIC_FP_ODS |
                  | Oracle Financial Services | STDCUSAC   | 186023    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL |0011430981002 |  YES         |

        @Close1  @SBM
        Scenario Outline: Close Retail Account - Transfer balance to other account (In Bank)
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
            #  And click on first record
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |079254    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | INTERNAL TRANSFE |
           
           @Close2  @SBM
        Scenario Outline: Close Retail Account - Transfer balance to other account (Interbank - Domestic)
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
              And click on search in STDCUSAC
              And click on first record              
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |079929    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | FT |
        
        @Close3  @SBM
        Scenario Outline: Close Retail Account - Issue Bankers Cheque for Balance amount
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
            #  And click on first record
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |074009    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | BANKERS CHEQUE |
        
        @Close4  @SBM
        Scenario Outline: Close Retail Account - Give Cash across counter
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
            #  And click on first record
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |438729    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | PC |
        
        @Close5  @SBM
        Scenario Outline: Close Corporate Account - Transfer balance to other account (In Bank)
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
            #  And click on first record
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |127304    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | INTERNAL TRANSFE |
        
        @Close6  @SBM
        Scenario Outline: Close Corporate Account - Transfer balance to other account (Interbank - Domestic)
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
              And click on search in STDCUSAC
              And click on first record             
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |286121    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | FT |
        
        @Close7  @SBM
        Scenario Outline: Close Corporate Account - Issue Bankers Cheque for Balance amount
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And clicks on New tab
              And enter Customer no "<CustomerNo>"
              And enter Currency1 "<Currency>"
              And enter Account Class "<AccountClass>"
              And Click on Fetch
              And click on save in Account generation tab
              And enter location "<Location>"
              And enter media "<Media>"
              And select mode of Operation
              And uncheck ATM checkbox
              And get the account number
              And click on MIS tab in STDCUSAC
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
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton
              And Click on Exit
               And enter the Branch number as "000"
               And user SignOff the application
            # Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
              And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on close option
              And click on ok for confirm
              And enter offset branch "<Branch>"
              And enter offset account "<offsetAccount>"
              And enter close mode "<CloseMode>"
            #  And click on first record
              And click on save in account closure
              And click on ok button
              And Click on Exit
              And enter the Branch number as "000"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "- Oracle Financial Services - ENG - Transaction Input"
             And enter the Branch number as "001"
             When user enters the function name as "<FunctionName>" and click search button
              And click enter Query
              And enter Account number
              And Click on Execute Query in STDCUSAC
              And click on Authorize
              And Click on Accept1
              And Click on OKButton


        Examples:
                  | HomePageTitle             | FunctionName | CustomerNo | Currency | AccountClass | Location | Media | PoolCode | KDIC_FP_ODS |Accountnumber | Branch | offsetAccount | CloseMode        |
                  | Oracle Financial Services | STDCUSAC  |075643    | KES      | DBSA      | KE         | MAIL   | DFLTPOOL | YES          | 0011430978002 | 001    | 0011000027002 | BANKERS CHEQUE |
        