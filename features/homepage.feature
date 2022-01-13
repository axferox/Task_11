Feature: Home Page Title
  @smoke
  Scenario: Checking the page title
    Given I am opening "Home" page
    Then the page title should be equal to expected "Home" page title

  @sanity
  Scenario: Checking the page title
    Given I am opening "Sign_up" page
    Then the page title should be equal to expected "Sign_up" page title

  @regression
  Scenario: Checking the page title
    Given I am opening "Log_in" page
    Then the page title should be equal to expected "Log_in" page title
