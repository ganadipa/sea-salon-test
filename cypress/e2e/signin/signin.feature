Feature: Login to the app

    Haven't logged in,
    As a valid user, already have an account
    I want to log in

    Scenario: Valid Login
        Given At the login page
        When I login
        Then I see the dashboard page