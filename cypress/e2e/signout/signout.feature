Feature: Sign out

  Scenario: User signs out successfully
    Given I am logged in
    When I click the sign-out button
    Then I see the sign-in button
