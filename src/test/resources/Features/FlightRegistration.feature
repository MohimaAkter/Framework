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

Feature: Mercury Page Testing Register link Funcationality
 
  Scenario: Check Register link on page
    Given Open Mercury Flight Application 
    When Click On Register Link
    Then Register Page Should Displayed
    And Close The Browser

  Scenario Outline: Testing The User Registration
    Given Open Mercury Flight Application 
    When Click On Register Link
    And Enter "<email>" and "<password>" and "<confirmPassword>" 
    Then verify the "<email>" Created Sucessfully 
    And Close The Browser
    Examples: 
      | email  | password | confirmPassword |
      | demoemail@gmail.com | 123456789 | 123456789 |
      
