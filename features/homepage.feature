Feature: Home Page Title
  @smoke
  Scenario: Checking the page title
    Given I am opening "Home" page
    Then the page title should be equal to expected "Home" page title

  @sanity
  Scenario: Checking the page title
    Given I am opening "Sign up" page
    Then the page title should be equal to expected "Sign up" page title

  @regression
  Scenario: Checking the page title
    Given I am opening "Log in" page
    Then the page title should be equal to expected "Log in" page title
