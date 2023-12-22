Feature: Google Search Functionality

  Scenario: Opening Google Homepage
    Given I open Google's homepage
    Then I should see "Google" in the title

  Scenario: Performing a Google Search
    Given I open Google's homepage
    When I type "Playwright" into the search box
    And I press "Enter"
    Then I should see search results