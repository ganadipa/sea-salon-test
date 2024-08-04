import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { BASEURL } from "../..";

/**
 * @description
 *
 * This is a test suite for the review feature
 *
 * Given The total reviews is a number
 * - Here, we visit the home page and get the total number of reviews
 *
 *
 * When I add a review
 * - Here, we click the add review button and fill the form with valid data
 *
 *
 * Then a toast should appear
 * - Here, we check if the toast is visible
 *
 *
 * Then after 5s the total number would be that initial number plus one
 * - Here, we wait for 5s and check if the total number of reviews has increased by one
 *
 *
 */

Given("The total reviews is a number", function () {
  cy.visit(BASEURL);
  cy.get("p.font-semibold.text-center.text-cyan-950")
    .invoke("text")
    .then((text) => {
      const numbers = text.match(/\d+/g);
      if (!numbers) throw new Error("No numbers found");
      const totalReviews = {
        variable: parseInt(numbers[numbers.length - 1], 10),
        initial: parseInt(numbers[numbers.length - 1], 10),
        increment: function () {
          this.variable += 1;
        },
      };

      Object.assign(this, totalReviews);
    });
});

When("I add a review", function () {
  cy.contains("button", "Add a review").click();
  cy.get('input[name="name"]').type("Abegnale");
  cy.get('textarea[name="description"]').type("This is a review");
  cy.get('input[name="rating"]').clear().type("5");

  cy.get('button[type="submit"]').click();
});

Then("a toast should appear", function () {
  cy.get(
    'div[style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"]'
  ).should("have.descendants", "*");
});

Then(
  "after 5s the total number would be that initial number plus one",
  function () {
    cy.wait(5000);
    cy.get("p.font-semibold.text-center.text-cyan-950")
      .invoke("text")
      .then((text) => {
        const numbers = text.match(/\d+/g);
        if (!numbers) throw new Error("No numbers found");
        expect(parseInt(numbers[numbers.length - 1], 10)).to.equal(
          this.initial + 1
        );
      });
  }
);
