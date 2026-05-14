@CORE
Feature: Core Module Feature
 
        @CORE1  @SBM @CreateNewCustomerRetailSTDCIF
        Scenario Outline: Validate Create New Customer - Retail - STDCIF
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
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
              And user clicks on MIS TAB
              And user clicks on Fields TAB
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              And User clicks on Save button
              And User accepts PopUp Alert
              And User accepts accept Alert
             Then User validates success message
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
              And User clicks enter query Tab
              And User enters customer number "<number>"
              And User clicks execute query Tab
              And User clicks on Autherize Tab
              And User accepts Autherize Alert
             Then User validates success msg
          


        Examples:
                  | HomePageTitle             | BranchNumber | FunctionName | FullName   | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address | Country | Language | Location | Media | branchnumber | CustomerStatus | functionname |
                  | Oracle Financial Services | 100          | STDCIF       | JohnRobert | john      | CIND             | Male   | 7/4/1999    | KE          | Kenya   | KE      | ENG      | MER      | MAIL  | 999          | Joint Customer | GEDCULIK     |
   # | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       | Test2    | UAT12     | STAFF      | Male   | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |Joint Customer    |GEDCULIK   |


     
      

        @CORE3 @SBM @CreateNewCustomerCorporateSTDCIF
        Scenario Outline: Validate the Create New Customer - Corporate - STDCIF
            Given User navigates to the application
             When MAK user enters the username and password
             When MAK user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
             When user enters the function name as "<FunctionName>" and click search button
              And User click on New Tab
              And User selects customer Type as "<CustomerType>"
              And User clicks the button P
              And User enters Full Name "<FullName>"
              And User enters Short Name "<ShortName>"
              And User enters Customer Category "<CustomerCategory>"
              And User enters Corporate Address "<Address>"
              And User enters Corporate Country "<Country>"
              And User enters Corporate Language "<Language>"
              And user clicks on MIS TAB
              And user clicks on Fields TAB
              And User clicks on Additional tab
              And User enters Location "<Location>"
              And User enters Media "<Media>"
              # And User checks Track Limits option
              And User clicks on Save button
              And User accepts PopUp Alert
              # And User accepts accept Alert
             Then User validates success message
            #  And enter the Branch number as "<branchnumber>"
              And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"
            # And enter the Branch number as "<BranchNumber>"
             When user enters the function name as "<FunctionName>" and click search button
              And User clicks enter query Tab
              And User enters customer number "<number>"
              And User clicks execute query Tab
              And User clicks on Autherize Tab
              And User accepts Autherize Alert
             Then User validates success msg
          
        Examples:
                  | HomePageTitle             | BranchNumber | FunctionName | CustomerType | FullName | ShortName | CustomerCategory | Gender | DateOfBirth | Nationality | Address | Country | Language | Location | Media | branchnumber |
                  | Oracle Financial Services | 100          | STDCIF       | Corporate    | JohnWill | Will      | CCRP             | Male   | 2000-03-03  | Ke          | Kenya   | KE      | ENG      | MER      | MAIL  | 999          |
                  #  | Oracle Financial Services - ENG - Transaction Input | 100          | STDCIF       |Bank    | Test2    | UAT12     | BANKS      | Male   | 2000-03-03          | LS              | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  |999      |

      
      