@HelpDesk
Feature:Help Desk Feature

    @HelpDesk1 @UserCreationAuthSuc
    Scenario Outline: Validate User creation & Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        When User clicks on UserNew Tab
        When User enters User Identification "<userID>"
        When User enters Name "<name>"
        And User enters Home Entity "<HomeEntity>"
        And User enters Password "<Password>"
        When User clicks on UserSave button
        Then User validates success message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks userenter query Tab
         And User enters User ID
        And User clicks userexecute query Tab
         And User clicks on userAutherize Tab
         And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application

    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | userID | name | HomeEntity | Password    | SuccessMessage      |
        | Oracle Financial Services - ENG - Transaction Input | 999       | SSDUSRDF     | Oracle | John | ENTITY_ID1 | Manhat@1276 | Record Successfully |
        | Oracle Financial Services - ENG - Transaction Input   |   999       |    SSDUSRDF     | Oracle | Johna     | ENTITY_ID1  | Manhat@127 | Record Successfully   |
         | Oracle Financial Services - ENG - Transaction Input   |   999       |    SSDUSRDF     | Oracle| Johnb     | ENTITY_ID1  | Manhat@1278 | Record Successfully   |
        # | Oracle Financial Services - ENG - Transaction Input   |   999       |    SSDUSRDF     | Oracle4361 | Johnc     | ENTITY_ID1  | Manhat@1279 | Record Successfully   |


    @HelpDesk3 @CreateUserMaintAndAuthSuc   @tduserIdChange
    Scenario Outline: Validate User Maintenance creation And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        When User clicks on ANew Tab
        When User enters AUser Identification "<userID>"
        When User enters Timelevel "<Timelevel>"
        And User clicks on ASave button
        Then User validates Asuccess message "<SuccessMessage>"
        When User Maintenance signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks assignenter query Tab
        And User enters assigncustomer ID "<userID>"
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | userID      | Timelevel | SuccessMessage      | FunName  | name | HomeEntity | Password    | SuccessMessage      |
        # | Oracle Financial Services - ENG - Transaction Input | 999          | SMDUSRDF     |OracleTUKQ  | 9         | Record Successfully | SSDUSRDF | Mary | ENTITY_ID1 | Manhat@1276 | Record Successfully |
         | Oracle Financial Services - ENG - Transaction Input   |   999       |SMDUSRDF     |OracleP6DW  | 9         | Record Successfully   |SSDUSRDF | Mary | ENTITY_ID1 | Manhat@1276 | Record Successfully |


    @HelpDesk5 @AssignRolesAuthenAndAuthSuc
    Scenario Outline: Validate assign roles to new User And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunName>" and click on search button
        When User clicks on UserNew Tab
        When User enters User Identification "<UserID>"
        When User enters Name "<name>"
        And User enters Home Entity "<HomeEntity>"
        And User enters Password "<Password>"
        When User clicks on UserSave button
        Then User validates success message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunName>" and click on search button
        And User clicks userenter query Tab
        And User enters User ID
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
        When MAK user enters the username and password
        And MAK user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        When User clicks on ANew Tab
        When User enters Maintenance User ID
        When User enters Timelevel "<TimeLevel>"
        And User Click on Roles Tab
        And User click on Add
        When User enters branch as "<BranchCode>"
        When User enter Role as "<RoleName>"
        And User click on search button and selects first one on dropdown list
        And User clicks on Ok button
        And User clicks on ASave button
        Then User validates Asuccess message "<SuccessMessage>"
        When User Maintenance signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks assignenter query Tab
        And User enters Maintenance User ID
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID      | TimeLevel | BranchCode | RoleName | SuccessMessage   |FunName  | name | HomeEntity | Password    | Timelevel |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SMDUSRDF     | ORACLE      | 9         | 100        | ALLROLES | Record Successfully |SSDUSRDF | Mary | ENTITY_ID1 | Manhat@1276 | 9         |


    @HelpDesk7 @AssignOldUserroleMaintAndAuthSuc
    Scenario Outline: Validate assign old user role maintenance And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunName>" and click on search button
        When User clicks on UserNew Tab
        When User enters User Identification "<userID>"
        When User enters Name "<name>"
        And User enters Home Entity "<HomeEntity>"
        And User enters Password "<Password>"
        When User clicks on UserSave button
        Then User validates success message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunName>" and click on search button
        And User clicks userenter query Tab
        And User enters User ID
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
        When MAK user enters the username and password
        And MAK user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        When User clicks on ANew Tab
        When User enters Maintenance User ID
        When User enters Timelevel "<Timelevel>"
        And User clicks on ASave button
        Then User validates Asuccess message "<SuccessMessage>"
        When User Maintenance signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        And User clicks assignenter query Tab
        And User enters Maintenance User ID
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
        When MAK user enters the username and password
        And MAK user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName3>" and click on search button
        And User enters Old User ID
        And user Clicks on Searh button in SMSUSRDF
        And User Double clicks on User in SMSUSRDF
        And User clicks on Unlock Tab in User_Maintenance screen
        And User clicks on Roles Tab in User_Maintenance screen "<BranchCode>","<RoleName>"
        And User clicks on Ok button in User_Maintenance screen
        And User clicks on Save button in User_Maintenance screen
        Then User validate Asuccess message "<SuccessMessage>"
        When User Screen signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        And User clicks assignenter query Tab
        And User enters Maintenance User ID
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName3 | userID | BranchCode | RoleName | SuccessMessage      | functionname | FunName  | name | HomeEntity | Password    | Timelevel | 
        | Oracle Financial Services - ENG - Transaction Input | 999          | SMSUSRDF      | Oracle | 100        | ALLROLES | Record Successfully | SMDUSRDF     | SSDUSRDF | Mary | ENTITY_ID1 | Manhat@1276 | 9         | 


    @HelpDesk9 @AssignFunsToNewUserAndAuthSuc
    Scenario Outline: Validate assign functions to new user And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunName>" and click on search button
        When User clicks on UserNew Tab
        When User enters User Identification "<UserID>"
        When User enters Name "<name>"
        And User enters Home Entity "<HomeEntity>"
        And User enters Password "<Password>"
        When User clicks on UserSave button
        Then User validates success message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunName>" and click on search button
        And User clicks userenter query Tab
        And User enters User ID
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
        When MAK user enters the username and password
        And MAK user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        When User clicks on ANew Tab
        When User enters Maintenance User ID
        When User enters Timelevel "<TimeLevel>"
        And User Click on Functions Tab
        And User click on functionAdd
        And User enters branch "<BranchCode>"
        When User enters Function as "<FunctionCode>"
        And User Click on New checkbox
        And User Click on Auth checkbox
        And User Click on Reopen checkbox
        And User Click on Unlock checkbox
        And User Click on Close checkbox
        And User Click on Delete checkbox
        And User Click on Copy checkbox
        And User clicks on Ok button
        And User clicks on ASave button
        Then User validates Asuccess message "<SuccessMessage>"
        When User Maintenance signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks assignenter query Tab
        And User enters Maintenance User ID
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID | TimeLevel | BranchCode | FunctionCode | SuccessMessage      | FunName  | name | HomeEntity | Password    | Timelevel |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SMDUSRDF     | Oracle | 9         | 100        | ACDASTQY     | Record Successfully | SSDUSRDF | Mary | ENTITY_ID1 | Manhat@1276 | 9         |


    @HelpDesk11 @AssignOldUserfuncMaintAndAuthSuc   @tduserIdChange
    Scenario Outline: Validate assign old user function maintenance And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User enters User Id as "<UserID>" in SMSURDF
        And user Clicks on Searh button in SMSUSRDF
        And User Double clicks on User in SMSUSRDF
        And User clicks on Unlock Tab in User_Maintenance screen
        And User clicks on functions Tab in User_Maintenance screen "<BranchCode>","<FunctionCode>" and select copy,delete,new,close and unlock check boxes
        And User clicks on Ok button in User_Maintenance screen
        And User clicks on Save button in User_Maintenance screen
        Then User validate Asuccess message "<SuccessMessage>"
        When User Screen signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        And User clicks assignenter query Tab
        And User enters assigncustomer ID "<UserID>"
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID      | BranchCode | FunctionCode | SuccessMessage      | functionname | FunName  | name | HomeEntity | Password    | Timelevel |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SMSUSRDF     | OracleP6DW | 100        | CLDACSTC     | Record Successfully | SMDUSRDF     | SSDUSRDF | Mary | ENTITY_ID1 | Manhat@1276 | 9         |

 
    @HelpDesk13 @CloseUserAndAuthSuc    @tduserIdChange
    Scenario Outline: Validate close User And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks enterquery Tab
        And User enters dcustomer ID "<UserID>"
        And User clicks duser execute query Tab
        And User clicks on close Tab
        And User clicks on closeok button
        Then User validates dsuccess message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks userenter query Tab
        And User enters customer ID "<UserID>"
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
         When User signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID   | SuccessMessage      |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SSDUSRDF     | OracleMV9D | Record Successfully |


    @HelpDesk15 @CloseUserMaintAndAuthSuc  @tduserIdChange
    Scenario Outline: Validate close User Maintenance And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks assignenter query Tab
        And User enters assigncustomer ID "<UserID>"
        And User clicks assignexecute query Tab
        #And User enters UserID as "<UserID>"
        # And User Clicks on Searh button
        # And User Double clicks on User
        #And User Clicks on close button
        #And User clicks on close ok button
        Then User Validates close Maintenance Account with "<SuccessMessage>"
        When User Maintenance signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        And User clicks assignenter query Tab
        And User enters assigncustomer ID "<UserID>"
        And User clicks assignexecute query Tab
        And User clicks on assignAutherize Tab
        And User accepts assignAutherize Alert
        Then User validates assignsuccess msg "<SuccessMessage>"
        When User Maintenance signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID    | SuccessMessage      | functionname |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SMDUSRDF     | OracleP6DW | Record Successfully | SMDUSRDF     |


    @HelpDesk17 @UserDisableAndAuthSuc   @tduserIdChange
    Scenario Outline: Validate the Disable User And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks enterquery Tab
        And User enters dcustomer ID "<UserID>"
        And User clicks duser execute query Tab
        And User clicks on unlock Tab
        And User clicks on disable button
        And User clicks on dsave button
        Then User validates dsuccess message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks userenter query Tab
        And User enters customer ID "<UserID>"
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID   | SuccessMessage      |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SSDUSRDF     | OracleP6DW  | Record Successfully |


    @HelpDesk19 @UserEnableAndAuthSuc   @tduserIdChange
    Scenario Outline: Validate User Enable And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks enterquery Tab
        And User enters dcustomer ID "<UserID>"
        And User clicks duser execute query Tab
        And User clicks on unlock Tab
        And User clicks on enable button
        And User clicks on dsave button
        Then User validates dsuccess message "<SuccessMessage>"
        When User signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User clicks userenter query Tab
        And User enters customer ID "<UserID>"
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID   | SuccessMessage      |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SSDUSRDF     | OracleP6DW  | Record Successfully |


    @HelpDesk21 @UserPwdChangeAndAuthSuc  @tduserIdChange
    Scenario Outline: Validate User Password Change And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User enters UserID as "<UserID>"
        And User Clicks on Searh button
        And User Double clicks on User
        And User enters password as "<NewPassword>"
        And User clicked on Save button
        Then User validates success message as "<SuccessMessage>"
        When userScreen signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        And User clicks userenter query Tab
        And User enters customer ID "<UserID>"
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID   | NewPassword | SuccessMessage      | functionname |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SSSUSRDF     | OracleP6DW  | Welcome@13  | Record Successfully | SSDUSRDF     |

    @HelpDesk23 @UsernameChangeAndAuthSuc   @tduserIdChange
    Scenario Outline: Validate the Change Username And Autherization process
        Given User navigates to the application
        When MAK user enters the username and password
        And click on signin button
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<FunctionName>" and click on search button
        And User enters UserID as "<UserID>"
        And User Clicks on Searh button
        And User Double clicks on User
        And User enters name as "<NewUserName>"
        And User clicked on Save button
        Then User validates success message as "<SuccessMessage>"
        When userScreen signoff the application
        When CHE user enters the username and password
        When CHE user login in the application
        Then valdiate the home page tite as "<HomePageTitle>"
        And enter the Branch number as "<BranchNumber>"
        When enters the function name as "<functionname>" and click on search button
        And User clicks userenter query Tab
        And User enters customer ID "<UserID>"
        And User clicks userexecute query Tab
        And User clicks on userAutherize Tab
        And User accepts userAuthorize Alert
        Then User validates usersuccess msg
        When User signoff the application
    Examples:
        | HomePageTitle                                       | BranchNumber | FunctionName | UserID   | NewUserName | SuccessMessage      | functionname |
        | Oracle Financial Services - ENG - Transaction Input | 999          | SSSUSRDF     | OracleP6DW | John        | Record Successfully | SSDUSRDF     |



 

