Feature: Register to the app

    Haven't Logged In
    I want to register an account

    Scenario: Valid Register
        Given I am seeing the sign up form
        When I create a valid account
        Then I see a toast 
        When I am seeing the sign in form
        When I login
        Then I see the dashboard page

    Scenario: Invalid Register
        Given I am seeing the sign up form
        When I create an invalid account
        Then I see a toast
        