Feature: Reaching the Other Page

  Scenario: I can load the error page
    Given I visit the other page

  Scenario: The other page has a site title
    Given I visit the other page
    Then I should see the site title

  Scenario: The other page has the correct site title
    Given I visit the other page
    Then The site title should be correct

  Scenario: The other page has a site footer
    Given I visit the other page
    Then I should see the site footer

  Scenario: The other page has the correct site footer
    Given I visit the other page
    Then The site footer content should be correct

  Scenario: The other page has an article title
    Given I visit the other page
    Then I should see an article title