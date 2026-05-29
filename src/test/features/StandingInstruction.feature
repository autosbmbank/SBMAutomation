@StandingInstructions
Feature: StandingInstructions Transaction

@StandingInstructionScreen1 @SBM
    Scenario Outline: Maintain Standing Instruction - Between accounts within the Bank
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab CSI 
      And user enters Product Code CSI as "<Productcodecs>"  
      And user click on P button CSI     
      And user enters Debit account branch CSI as "<Debit Account Branch>"
      And user enters debit account CSI as "<Debit Account>"
      And user enters SI amount CSI as "<SI Amount>"
      And user enters Credit account branch CSI as "<Credit Account Branch>"
      And user enters credit account CSI as "<Credit Account>"
      And user enters Number of Installments CSI as "<Installments>"
      And user enters Retry count for Advice CSI as "<Retry count>"
    And user get Instrument Number CSI
    And user get Currency CSI
    And user get SI amount CSI
      And click on Enrich tab CSI
      And click on MIS tab CSI
      And click on accept CSI
      And user enters MIS Group CSI as "<MIS Group>"
      And clicks on save MIS button CSI      
      And clicks on save button CSI
      And click on accept MIS CSI
      Then clicks on OK btn CSI
      When user exits CloseStandingInstructionPage CSI            
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"             
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query CSI
      And user enter Instrument Number CSI
      And user clicks on Execute Query CSI
      And user clicks on Authorize tab CSI
      And user enter Currency CSI
      And user enter SI amount CSI
      And user clicks on Authorize button CSI
      Then clicks on OK button CSI

    
      
    Examples:
      
                  | HomePageTitle                                       | FunctionName     | Productcodecs | Debit Account Branch |Debit Account |SI Amount | Credit Account Branch| Credit Account | Installments | Retry count   |MIS Group |
                  | Oracle Financial Services - ENG - Transaction Input | SIDTRONL         | CPSO         |  000                 |0001428031002  | 8956      |    000            | 0002000001001  |   1          |  0            | DFLTMIS   |


@StandingInstructionScreen2 @SBM @StandingInstructioInterBankDomestic
    Scenario Outline: Maintain Standing Instruction - InterBank (Domestic)
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab CSI 
      And user enters Product Code CSI as "<Productcodecs>"  
      And user click on P button CSI     
      And user enters Debit account branch CSI as "<Debit Account Branch>"
      And user enters debit account CSI as "<Debit Account>"
      And user enters SI amount CSI as "<SI Amount>"
      And user enters Credit account branch CSI as "<Credit Account Branch>"
      And user enters credit account CSI as "<Credit Account>"
      And user enters Number of Installments CSI as "<Installments>"
      And user enters Retry count for Advice CSI as "<Retry count>"
    And user get Instrument Number CSI
    And user get Currency CSI
    And user get SI amount CSI
      And click on Enrich tab CSI
      And click on MIS tab CSI
      And click on accept CSI
      And user enters MIS Group CSI as "<MIS Group>"
      And clicks on save MIS button CSI      
      And clicks on save button CSI
      And click on accept MIS CSI
      Then clicks on OK btn CSI
      When user exits CloseStandingInstructionPage CSI            
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"             
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query CSI
      And user enter Instrument Number CSI
      And user clicks on Execute Query CSI
      And user clicks on Authorize tab CSI
      And user enter Currency CSI
      And user enter SI amount CSI
      And user clicks on Authorize button CSI
      Then clicks on OK button CSI

    
      
    Examples:
      
                  | HomePageTitle                                       | FunctionName     | Productcodecs | Debit Account Branch |Debit Account |SI Amount | Credit Account Branch| Credit Account | Installments | Retry count   |MIS Group |
                  | Oracle Financial Services - ENG - Transaction Input | SIDTRONL         | CPSO         |  000                 |0002131046001  | 9912      |    000            | 0002324858009  |   1          |  0            | DFLTMIS   |

@StandingInstructionScreen3 @SBM @StandingInstructioInterBankInternational
    Scenario Outline: Maintain Standing Instruction - InterBank (International)
      Given User navigates to the application
              When MAK user enters the username and password
               When MAK user login in the application
            # When CHE user enters the username and password
            # When CHE user login in the application
              Then valdiate the home page tite as "- 000 - 000 - 000 - Oracle Financial Services - ENG - Transaction Input"
                When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Newtab CSI 
      And user enters Product Code CSI as "<Productcodecs>"  
      And user click on P button CSI     
      And user enters Debit account branch CSI as "<Debit Account Branch>"
      And user enters debit account CSI as "<Debit Account>"
      And user enters SI amount CSI as "<SI Amount>"
      And user enters Credit account branch CSI as "<Credit Account Branch>"
      And user enters credit account CSI as "<Credit Account>"
      And user enters Number of Installments CSI as "<Installments>"
      And user enters Retry count for Advice CSI as "<Retry count>"
    And user get Instrument Number CSI
    And user get Currency CSI
    And user get SI amount CSI
      And click on Enrich tab CSI
      And click on MIS tab CSI
      And click on accept CSI
      And user enters MIS Group CSI as "<MIS Group>"
      And clicks on save MIS button CSI      
      And clicks on save button CSI
      And click on accept MIS CSI
      Then clicks on OK btn CSI
      When user exits CloseStandingInstructionPage CSI            
      And user SignOff the application
             When CHE user enters the username and password
             When CHE user login in the application
             Then valdiate the home page tite as "<HomePageTitle>"             
             When user enters the function name as "<FunctionName>" and click search button
      And user clicks on Enter Query CSI
      And user enter Instrument Number CSI
      And user clicks on Execute Query CSI
      And user clicks on Authorize tab CSI
      And user enter Currency CSI
      And user enter SI amount CSI
      And user clicks on Authorize button CSI
      Then clicks on OK button CSI

    
      
    Examples:
      
                  | HomePageTitle                                       | FunctionName     | Productcodecs | Debit Account Branch |Debit Account |SI Amount | Credit Account Branch| Credit Account | Installments | Retry count   |MIS Group |
                  | Oracle Financial Services - ENG - Transaction Input | SIDTRONL         | CPSO         |  000                 |0002000004012  | 8956      |    000            | 0002000007001  |   1          |  0            | DFLTMIS   |
