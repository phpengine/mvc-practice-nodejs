Feature: Reaching the Error Page

  Scenario: I can load the error page
    Given I visit a Non Existent URL

  Scenario: The Non Existent URL has a site title
    Given I visit a Non Existent URL
    Then I should see the site title

  Scenario: The Non Existent URL has the correct site title
    Given I visit a Non Existent URL
    Then The site title should be correct

  Scenario: The Non Existent URL has a site footer
    Given I visit a Non Existent URL
    Then I should see the site footer

  Scenario: The Non Existent URL has the correct site footer
    Given I visit a Non Existent URL
    Then The site footer content should be correct

  Scenario: The Non Existent URL has an article title
    Given I visit a Non Existent URL
    Then I should see an article title