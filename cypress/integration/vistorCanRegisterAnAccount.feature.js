describe("Visitor can see a register button", () => {
  beforeEach("xxxx", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_up",
      response: "fixture:successful_registration.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/auth/sign_in",
    });
  });
  cy.visit("/");
  context("Succesfully", () => {
    it("user can click on register button and see registration form", () => {
      cy.get('[data-cy="register-button"]').contains("Register").click();

      cy.get('[data-cy="registration-form"]').within(() => {
        cy.get('[data-cy="full-name"]').type("Facundo Osores");
        cy.get('[data-cy="email"]').type("registered@mail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="confirm-password"]').type("password");       
        cy.get('[data-cy="submit"]').contains("Submit").click();
        cy.get('[data-cy="registration-message"]').contains("Your registration was successful!")
      });
    });
  });
});
