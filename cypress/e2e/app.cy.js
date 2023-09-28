describe("View my landing page", function () {
  it("frontpage can be opened", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("Disfrute de tesla");
    cy.contains("Prueba de conducción");
  });
});
