describe("Visitor can see a register button", () => {
  beforeEach("xxxx", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth?confirm_success_url=registered@mail.com",
      response: `fixture:successful_login_registered.json`,
    });
    // cy.route({
    //   method: "GET",
    //   url: "http://localhost:3000/api/v1/auth/sign_in",
    // });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");

  });
  context("Succesfully", () => {
    it("user can click on register button and see registration form", () => {
      cy.get('[data-cy="sign-up-button"]').contains("Sign Up").click();

      cy.get('[data-cy="sign-up-form"]').within(() => {
        cy.get('[data-cy="name"]').type("Facundo Osores");
        cy.get('[data-cy="email"]').type("registered@mail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="password-confirmation"]').type("password");       
        cy.get('[data-cy="submit"]').contains("Submit").click();
        cy.get('[data-cy="registration-message"]').contains("Your registration was successful!")
      });
    });
  });
});
