Feature: demo login

  @Counter
  Scenario Outline: Test Login
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login
    Then user is navigated to homepage

    Examples: 
      | username  | password  |
      | username1 | password1 |
      | username1 | password1 |
