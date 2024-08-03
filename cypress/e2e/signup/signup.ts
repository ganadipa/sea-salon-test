import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AUTH_ENDPOINT, BASEURL } from "../..";

Given("I am seeing the sign up form", () => {
  cy.visit(BASEURL + AUTH_ENDPOINT);
  cy.contains("button", "Sign Up").click();
  cy.get(
    'div[style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"]'
  ).should("not.have.descendants", "*");
});

When("I create an invalid account", () => {
  cy.get('input[name="name"]').type("testuser");
  cy.get('input[name="phonenumber"]').type("0811892945");
  cy.get('input[name="email"]').type("example@example.com");
  cy.get('input[name="password"]').type("password123");
  cy.get('button[type="submit"]').click();
});

When("I create a valid account", () => {
  cy.get('input[name="name"]').type("testuser");
  cy.get('input[name="phonenumber"]').type("0811892945");
  cy.get('input[name="email"]').type("always_valid@example.com");
  cy.get('input[name="password"]').type("password123");
  cy.get('button[type="submit"]').click();
});

When("I am seeing the sign in form", () => {
  cy.contains("button", "Sign In").click();
});

Then("I see a toast", () => {
  cy.get(
    'div[style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"]'
  ).should("have.descendants", "*");
});

Then("I see the dashboard page", () => {
  cy.url().should("include", "/app/dashboard");
});

When("I login", () => {
  cy.get('input[name="email"]').type("always_valid@example.com");
  cy.get('input[name="password"]').type("password123");
  cy.get('button[type="submit"]').click();
});
