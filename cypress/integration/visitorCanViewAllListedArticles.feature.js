describe("visitor can see all listed articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
  });

  context("when visiting starting page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("visitor can see article title", () => {
      cy.get("[data-cy='article-1']").within(() => {
        cy.get("[data-cy='title']").should("contain", "Hello World");
      });
    });

    it("visitor can see article teaser", () => {
      cy.get("[data-cy='article-2']").within(() => {
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Sun is always shining in Kista"
        );
      });
    });
    it("visitor can see article image", () => {
      cy.get("[data-cy='image']").should("exist")
    })
  });

  context("when visiting sports category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/?category=sports",
        response: "fixture:sports_index.json",
      });
      cy.visit("/");

      cy.get("[data-cy='navigation-bar']").within(() => {
        cy.get("[data-cy='sports']").click();
      });
    });
    it("visitor can see article title", () => {
      cy.get("[data-cy='article-4']").within(() => {
        cy.get("[data-cy='title']").should(
          "contain",
          "Vännäs HC: 'Inget lag har tränat hårdare än oss'"
        );
      });
    });

    it("visitor can see article teaser", () => {
      cy.get("[data-cy='article-5']").within(() => {
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Vi har kartlagt inkomsterna i innebandyns SSL.Hur mycket tjänar spelarna i DITT lag?"
        );
      });
    });
  });

  context("when visiting depricated category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/?category=news",
        response: { error_message: "Sorry, we can't find that category" },
        status: 404,
      });
      cy.visit("/");
      cy.get("[data-cy='navigation-bar']").within(() => {
        cy.get("[data-cy='news']").click();
      });
    });
    it("visitor should see error message", () => {
      cy.get("[data-cy='error-message']").should(
        "contain",
        "Sorry, we can't find that category"
      );
    });
  });
});
