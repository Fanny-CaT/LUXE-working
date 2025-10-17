// cypress/support/commands.ts

Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');
  });
});

Cypress.Commands.add('addToCart', (productHandle: string) => {
  cy.visit(`/products/${productHandle}`);
  cy.get('[data-cy=add-to-cart-button]').click();
  cy.get('[data-cy=cart-item-count]').should('contain', '1');
});

// Override visit command to wait for hydration
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  return originalFn(url, options).then(() => {
    // Wait for Next.js hydration
    cy.window().should('have.property', 'next');
  });
});