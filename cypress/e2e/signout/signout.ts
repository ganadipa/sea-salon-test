import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AUTH_ENDPOINT, BASEURL } from "../..";

/**
 * @description
 *
 * This is a test suite for the sign out feature
 *
 * Given I am logged in
 * - Here, we visit the login page and fill the form with valid data
 *
 *
 *
 * Given I click the sign-out button
 * - Here, we click the sign out button
 *
 *
 * Then I see the sign-in button
 * - Here, we check if the sign in button is visible
 */

Given("I am logged in", () => {
  cy.visit(BASEURL + AUTH_ENDPOINT);
  cy.get('input[name="email"]').type("example@example.com");
  cy.get('input[name="password"]').type("example");
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/app/dashboard");
});

When("I click the sign-out button", () => {
  cy.contains("button", "Sign out").click();
});

Then("I see the sign-in button", () => {
  cy.contains("a", "Sign In");
});
