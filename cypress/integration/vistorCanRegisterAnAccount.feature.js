describe("Visitor can register an account", () => {
  context("Succesfully", () => {
    it("user can click on register button and see registration form", () => {
      cy.signUp();
      cy.get('[data-cy="registration-message"]').contains(
        "Your registration was successful! Please log in to confirm your registration"
      );
    });
  });

  context("Unsuccessfully", () => {
    it("user can click on register button and see registration form", () => {
      cy.get('[data-cy="password-confirmation"]').type("wrongpassword");
      cy.get('[data-cy="submit"]').contains("Submit").click();
      cy.get('[data-cy="registration-message"]').contains(
        "Your passwords are not matching. Please put in matching passwords."
      );
    });
  });
});
