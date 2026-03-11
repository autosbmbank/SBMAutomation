@CORE
Feature: Core Module Feature
 
      @CORE1  @CIFCreationforIndividualwithTrackLimitschk
        Scenario Outline: Validate Creation of Individual Customer with Track Limits enabled
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User selects "<Gender>" radio button
              And User enters Date of Birth "<DateOfBirth>"
              And User enters Nationality "<Nationality>"
              And User enters Address "<Address>"
              And User enters Country "<Country>"
              And User enters Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
            When CHE user enters the username and password
            When CHE user login in the application
            Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
            And User clicks enter query Tab
            And User enters customer number "<number>"
            And User clicks execute query Tab
            And User clicks on Autherize Tab
            And User accepts Autherize Alert
            Then User validates success msg
            And enter the Branch number as "<branchnumber>"
            When enters the function name as "<functionname>" and click on search button
            And User in liability link frame clicks enter query Tab
            #   And User enters customer number "<number>"
            And User clicks execute query Tab


        Examples:
    | HomePageTitle                                       | BranchNumber | FunctionName | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus|functionname|
   | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | INDIVIDUAL       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |GEDCULIK   |
   # | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | STAFF      | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |GEDCULIK   |


     
      @CORE2 @CIFcreationforIndividualTrackLimitsUncheck
        Scenario Outline: Validate Creation of Individual Customer without Track Limits enabled
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User selects "<Gender>" radio button
              And User enters Date of Birth "<DateOfBirth>"
              And User enters Nationality "<Nationality>"
              And User enters Address "<Address>"
              And User enters Country "<Country>"
              And User enters Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
               And User unchecks Track Limits option
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
            When CHE user enters the username and password
            When CHE user login in the application
            Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
            And User clicks enter query Tab
            And User enters customer number "<number>"
            And User clicks execute query Tab
            And User clicks on Autherize Tab
            And User accepts Autherize Alert
            Then User validates success msg

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | INDIVIDUAL       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |

      


        @CORE3 @CorporateCustomerCreationandAuth
        Scenario Outline: Validate the CIF creation process for corporate customer with Track limits chk and Auth
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User checks Track Limits option
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
             And enter the Branch number as "<branchnumber>"
             And user SignOff the application
            When CHE user enters the username and password
            When CHE user login in the application
            Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
            And User clicks enter query Tab
            And User enters customer number "<number>"
            And User clicks execute query Tab
            And User clicks on Autherize Tab
            And User accepts Autherize Alert
            Then User validates success msg

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName |CustomerType| FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Corporate    | Test2    | UAT12     | CORPORATE       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |
                  #  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Bank    | Test2    | UAT12     | BANKS      | Male   | 2000-03-03          | LS              | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |

      
        @CORE4 @JointCustIndividual @tdjointcustNochange
        Scenario Outline: Validate the CIF creation process for Joint Customer Individual
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User selects "<Gender>" radio button
              And User enters Date of Birth "<DateOfBirth>"
              And User enters Nationality "<Nationality>"
              And User enters Address "<Address>"
              And User enters Country "<Country>"
              And User enters Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User selects customer status "<CustomerStatus>"
               And User checks AutoAccountCreation option
              And User clicks Account Details Tab
              And User enters Joint Customer Details "<Acclass>","<location>","<jointcustNo>","<jointholdertype>"
              And User clicks on Joint Tab and enter details "<DateOfBirth>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
             And enter the Branch number as "<branchnumber>"
            And user SignOff the application
            When CHE user enters the username and password
            When CHE user login in the application
            Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
            And User clicks enter query Tab
            And User enters customer number "<number>"
            And User clicks execute query Tab
            And User clicks on Autherize Tab
            And User accepts Autherize Alert
            Then User validates success msg

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus|Acclass |location |jointcustNo|jointholdertype|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | INDIVIDUAL       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |102        |100      |10001092  |Joint or First|

 @CORE5 @IndividualCustwithaddedTrackLimitsandAuth
        Scenario Outline: Validate the CIF creation process with added track limits and check in GEDMLIAB
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User selects "<Gender>" radio button
              And User enters Date of Birth "<DateOfBirth>"
              And User enters Nationality "<Nationality>"
              And User enters Address "<Address>"
              And User enters Country "<Country>"
              And User enters Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
               And User clicks Limits Tab and enter Limit Amount as "<amount>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When CHE user enters the username and password
               When CHE user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
               And User clicks enter query Tab
               And User enters customer number "<number>"
               And User clicks execute query Tab
               And User clicks on Autherize Tab
               And User accepts Autherize Alert
               Then User validates success msg
               And enter the Branch number as "<branchnumber>"
                  When enters the function name as "<functionname>" and click on search button
                  And User in liability Maintenance frame enter cif details "<CustomerNo>"
               #   And User enters customer number "<number>"
               And User clicks execute query Tab


        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus|functionname|amount|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | INDIVIDUAL       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |GEDMLIAB   |100000|



       @CORE6 @CreatecorporatejointcustandAuth @tdjointcustNochange
        Scenario Outline: Validate the CIF creation process for corporate customer with Joint Customer and Auth
            Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
           Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User selects customer Type as "<CustomerType1>"
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User selects customer status "<CustomerStatus>"
              And User checks AutoAccountCreation option
              And User clicks Account Details Tab
              And User enters Joint Customer Details "<Acclass>","<location>","<jointcustNo>","<jointholdertype>"
               And User clicks on Joint Tab and enter details "<DateOfBirth>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When CHE user enters the username and password
               When CHE user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
               And User clicks enter query Tab
               And User enters customer number "<number>"
               And User clicks execute query Tab
               And User clicks on Autherize Tab
               And User accepts Autherize Alert
               Then User validates success msg

        Examples:
    | HomePageTitle                                       | BranchNumber | FunctionName |CustomerType |CustomerType1                 | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus   |Acclass |location |jointcustNo|jointholdertype|
     | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Corporate    |Special Customer No Generation| Test2    | UAT12     | CORPORATE       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |102        |100      |10001092  |Joint or First|
      # | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Corporate    |Special Customer No Generation| Test2    | UAT12     | CORPORATE       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |102        |100      |10001092  |Authorized Signatory|

      
      
       @CORE7 @CorporateCustLimitsEnabledandAuth
        Scenario Outline: Validate the CIF creation process for corporate customer with LimitsEnabled chk in GEDMLIAB  and Autherisation
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
               And User clicks Limits Tab and enter Limit Amount as "<amount>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When CHE user enters the username and password
               When CHE user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
               And User clicks enter query Tab
               And User enters customer number "<number>"
               And User clicks execute query Tab
               And User clicks on Autherize Tab
               And User accepts Autherize Alert
               Then User validates success msg
               And enter the Branch number as "<branchnumber>"
                And user SignOff the application
               When MAK user enters the username and password
               And MAK user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<functionname>" and click on search button
               And User in liability Maintenance frame enter cif details "<CustomerNo>"
            #   And User enters customer number "<number>"
              And User clicks execute query Tab
              Then User validates limit amount set for the customer with "<amount>"

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName |CustomerType| FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|amount  |functionname|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Corporate    | Test2    | UAT12     | CORPORATE       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |1000000    |GEDMLIAB     |

 @CORE8 @CorporateCustCreationTrackLimtsUnchkandAuth
        Scenario Outline: Validate the CIF creation process for corporate customer with Track limits Unchk and Auth
               Given User navigates to the application
               When MAK user enters the username and password
               And click on signin button
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User unchecks Track Limits option
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
              And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When CHE user enters the username and password
               When CHE user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
               And User clicks enter query Tab
               And User enters customer number "<number>"
               And User clicks execute query Tab
               And User clicks on Autherize Tab
               And User accepts Autherize Alert
               Then User validates success msg

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName |CustomerType| FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Corporate    | Test2    | UAT12     | CORPORATE       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |

 @CORE9 @CreatecorporatejointcustLinkedEntityandAuth
        Scenario Outline: Validate the Create corporate joint customer by giving cust details in Linked Entities and Auth
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User checks Track Limits option
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
              And enter the Branch number as "<branchnumber>"
              And user SignOff the application
            When CHE user enters the username and password
            When CHE user login in the application
            Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
            And User clicks enter query Tab
            And User enters customer number "<number>"
            And User clicks execute query Tab
            And User clicks on Autherize Tab
            And User accepts Autherize Alert
            Then User validates success msg
             And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When MAK user enters the username and password
            When MAK user login in the application
              Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User selects customer Type as "<CustomerType>"
              And User Fetch CustomerNumber
              And User selects customer Type as "<CustomerType1>"
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User selects customer status "<CustomerStatus>"
            #  And User checks AutoAccountCreation option
              And User clicks Linked Entities Tab
              And User shares Joint Customer Details "<relation>","<jointcustNo>"
               And User clicks on Joint Tab and enter details "<DateOfBirth>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When CHE user enters the username and password
               When CHE user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
               And User clicks enter query Tab
               And User uses created customer number
               And User clicks execute query Tab
               And User clicks on Autherize Tab
               And User accepts Autherize Alert
               Then User validates success msg

        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName |CustomerType |CustomerType1                 | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus   |relation |jointcustNo|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Corporate    |Special Customer No Generation| Test2    | UAT12     | CORPORATE       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |BUSINESS PARTNER|10381252  |

 

       @CORE10  @QuickCustomercreationandAuth
        Scenario Outline: Validate the Quick CIF creation process for Individual
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
              And User in QuickCustomer frame click on New Tab 
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User selects "<Gender>" radio button
              And User enters Date of Birth "<DateOfBirth>"
              And User enters Nationality "<Nationality>"
              And User enters Address "<Address>"
              And User enters Country "<Country>"
              And User enters Language "<Language>"
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
               When CHE user enters the username and password
               When CHE user login in the application
               Then valdiate the home page tite as "<HomePageTitle>"
               And enter the Branch number as "<BranchNumber>"
               When enters the function name as "<FunctionName>" and click on search button
               And User in QuickCustomer frame clicks enter query Tab
               And User enters customer number "<number>"
               And User clicks execute query Tab
               And User clicks on Autherize Tab
               And User accepts Autherize Alert
               Then User validates success msg
               #  And enter the Branch number as "<branchnumber>"
               #   When enters the function name as "<functionname>" and click on search button
               #   And User in liability link frame clicks enter query Tab
               # #   And User enters customer number "<number>"
               #   And User clicks execute query Tab


        Examples:
                  | HomePageTitle                                       | BranchNumber | FunctionName | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus|functionname|
                  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIFAD      | Test2    | UAT12     | INDIVIDUAL       | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |GEDCULIK   |

 @CORE11  @IndividualCustwithStaffchkandAuth
        Scenario Outline: Validate the Creation of Individual type of customer with Additional details as Staff
           Given User navigates to the application
            When MAK user enters the username and password
            And click on signin button
             Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
              And User click on New Tab 
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User selects "<Gender>" radio button
              And User enters Date of Birth "<DateOfBirth>"
              And User enters Nationality "<Nationality>"
              And User enters Address "<Address>"
              And User enters Country "<Country>"
              And User enters Language "<Language>"
              And User checks Staff checkbox
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
                And enter the Branch number as "<branchnumber>"
              And user SignOff the application
            When CHE user enters the username and password
            When CHE user login in the application
            Then valdiate the home page tite as "<HomePageTitle>"
            And enter the Branch number as "<BranchNumber>"
            When enters the function name as "<FunctionName>" and click on search button
            And User clicks enter query Tab
            And User enters customer number "<number>"
            And User clicks execute query Tab
            And User clicks on Autherize Tab
            And User accepts Autherize Alert
            Then User validates success msg
            # And enter the Branch number as "<branchnumber>"
            # When enters the function name as "<functionname>" and click on search button
            # And User in liability link frame clicks enter query Tab
            # #   And User enters customer number "<number>"
            # And User clicks execute query Tab


        Examples:
    | HomePageTitle                                       | BranchNumber | FunctionName | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address         | Country | Language | Location | Media |branchnumber|CustomerStatus|functionname|
   | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | STAFF      | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |GEDCULIK   |
