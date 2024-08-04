import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AUTH_ENDPOINT, BASEURL } from "../..";

/**
 * @description
 * This is a test suite for the sign in feature
 *
 * Given At the login page
 * - Here, we visit the login page
 *
 *
 * When I login
 * - Here, we fill the form with valid data and submit
 *
 *
 * Then I see the dashboard page
 * - Here, we check if the url contains /app/dashboard
 *
 *
 *
 */

Given("At the login page", () => {
  cy.visit(BASEURL + AUTH_ENDPOINT);
});

When("I login", () => {
  cy.get('input[name="email"]').type("example@example.com");
  cy.get('input[name="password"]').type("example");
  cy.get('button[type="submit"]').click();
});

Then("I see the dashboard page", () => {
  cy.url().should("include", "/app/dashboard");
});
