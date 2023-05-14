describe("First Auth Check", () => {
  it("Should redirect to /auth/signin", () => {
    cy.visit("http://localhost:3000/");
    // The new url should include "/about"
    cy.url().should("include", "/auth/signin");
    cy.url().should("include", "/auth/signin");
    cy.location("search").should("include", "callbackUrl");
  });
});

describe("Login Test", () => {
  it("Should get a login error", () => {
    cy.visit("http://localhost:3000/auth/signin");
    cy.get("input[name=email]").type("wrong@test.com");
    cy.get("input[name=password]").type("wrongpassword");

    cy.get("button[type=submit]").click();

    cy.contains("Invalid email or password");
  });

  it("Should login", () => {
    cy.visit("http://localhost:3000/auth/signin");
    cy.get("input[name=email]").type("admin@clastix.io");
    cy.get("input[name=password]").type("admin");
    cy.get("button[type=submit]").click();

    cy.url().should("include", "/dashboard");
  });
});
