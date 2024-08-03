import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AUTH_ENDPOINT, BASEURL } from "../..";

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
