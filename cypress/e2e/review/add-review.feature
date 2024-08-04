
Feature: Counter on add review feature

  Scenario: Adds a review
    Given The total reviews is a number
    When I add a review
    Then after 5s the total number would be that initial number plus one
