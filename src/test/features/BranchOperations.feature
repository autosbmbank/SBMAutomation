 @BranchOps
Feature: Open And Close Branch and Teller Batch 

@BranchOps1 @openBranchBatchAndTellerBatch
  Scenario Outline: Perform Open Branch Batch successfully
   Given User navigates to the application
   When MAK user enters the username and password
   And click on signin button
   Then valdiate the home page tite as "<HomePageTitle>"
   And enter the Branch number as "<BranchNumber>"
   And user selects BrOPs NextGen UI Dashboard
         And selects Open Branch Batch Option
        And selects Open Teller Batch Option
       And user exits from NextGen BrOPs
       
        
 Examples:
         | HomePageTitle                                       | BranchNumber |
         | Oracle Financial Services                           | 999       |


