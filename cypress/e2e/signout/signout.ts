import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AUTH_ENDPOINT, BASEURL } from "../..";

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
