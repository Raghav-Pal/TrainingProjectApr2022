Feature: demo login

  @smoke
  Scenario Outline: Test Login
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login
    Then user is navigated to homepage

    @valid
    Examples: 
      | username | password |
      | test     | test     |

    @invalid
    Examples: 
      | username | password |
      | abc      |      123 |
