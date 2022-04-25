Feature: demo login

  Scenario: Test Login
    Given user is on login page
    When user enters username and password
    And clicks on login
    Then user is navigated to homepage
