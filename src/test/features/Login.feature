@login

Feature: Create an Account

        @Login1
        Scenario: Valdiate the user is able to create an account
            Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
             When user enters the function name as "STDCIF" and click search button
              











