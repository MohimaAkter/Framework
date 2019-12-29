#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Testing Flights link Funcationality

  Scenario: Check Flights link Page
    Given Open Mercury Flight Application
    When Click On The Flights link
    Then Flights Page Should Be Displayed
    And Close The Browser

  Scenario Outline: Testing The Selecting Flights
    Given Open Mercury Flight Application
    When Click On The Flights link 
    And Click On tripType "<tripTypebtn>" and "<passCountdrp>" and "<fromPortdrp>" and "<fromMonthdrp>" and "<fromDaydrp>" and "<toPortdrp>" and "<toMonthdrp>" and "<toDaydrp>" and "<radiobtn>" and "<airlinedrp>"
    Then Click On Continue Button
    And Close The Browser
    
    

    Examples: 
      | tripTypebtn  | passCountdrp | fromPortdrp  | fromMonthdrp | fromDaydrp | toPortdrp | toMonthdrp | toDaydrp | radiobtn | airlinedrp | 
      | Round Trip | 1 | New York | July | 5 | Zurich | August | 6 | Business class | Blue Skies Airlines | 
      
