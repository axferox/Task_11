Feature: Home Page Title with scenario outline
  @outline
  Scenario Outline: Checking that pages titles from scenario outline table match the expected
    Given I am opening "<pageName>" page
    Then the page title should be equal to expected "<pageName>" page title

    Examples:
      | pageName |
      | Home     |
      | Log_in   |
      | Sign_up  |
