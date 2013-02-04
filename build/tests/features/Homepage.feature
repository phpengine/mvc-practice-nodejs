Feature: Reaching the website

  Scenario: I can load the homepage
    Given I visit the homepage

  Scenario: The homepage has a site title
    Given I visit the homepage
    Then I should see the site title

  Scenario: The homepage has the correct site title
    Given I visit the homepage
    And The site title should be correct

  Scenario: The homepage has a site footer
    Given I visit the homepage
    Then I should see the site footer

  Scenario: The homepage has the correct site footer
    Given I visit the homepage
    And The site footer content should be correct

  Scenario: The homepage has an article title
    Given I visit the homepage
    Then I should see an article title