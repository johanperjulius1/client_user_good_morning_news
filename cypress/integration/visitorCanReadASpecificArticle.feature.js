describe("Visitor can read a specific article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
  });

  context("sucessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/1",
        response: "fixture:articles_show.json",
      });
      cy.visit("/");

      cy.get("[data-cy='article-1']").within(() => {
        cy.get("[data-cy='title']").click();
      });
    });

    it("and see it's content", () => {
      cy.get("[data-cy='article']").within(() => {
        cy.get("[data-cy='title']").should("contain", "Hello World");
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Sun is always shining in Kista"
        );
        cy.get("[data-cy='image']").should("exist")
        cy.get("[data-cy='content']").should("contain", "Jenny is cool");
      });
    });
    it("and do not see content from other articles", () => {
      cy.get("[data-cy='article-2']").should("not.exist");
      cy.get("[data-cy='article-3']").should("not.exist");
    });
  });

  context("unsuccessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/1",
        response: {
          error: "sorry we can not find that article",
        },
        status: "404",
      });
      cy.visit("/");
    });
    it("receives error message", () => {
      cy.get("[data-cy='article-1']").within(() => {
        cy.get("[data-cy='title']").click();
      });
      cy.get("[data-cy='error-message']").should(
        "contain",
        "sorry we can not find that article"
      );
    });
  });
});
