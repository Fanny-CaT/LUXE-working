describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the hero section', () => {
    cy.get('[data-cy=hero-section]').should('be.visible');
    cy.get('[data-cy=hero-title]').should('contain', 'Timeless Elegance');
    cy.get('[data-cy=hero-subtitle]').should('be.visible');
    cy.get('[data-cy=hero-cta]').should('be.visible');
  });

  it('should display featured products', () => {
    cy.get('[data-cy=featured-products]').should('be.visible');
    cy.get('[data-cy=product-card]').should('have.length.at.least', 1);
  });

  it('should display product carousels', () => {
    cy.get('[data-cy=product-carousel]').should('have.length.at.least', 2);
    cy.get('[data-cy=carousel-title]').first().should('contain', 'New Arrivals');
    cy.get('[data-cy=carousel-title]').last().should('contain', 'Best Sellers');
  });

  it('should have a functional navigation', () => {
    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=logo]').should('be.visible');
    cy.get('[data-cy=navigation]').should('be.visible');
    cy.get('[data-cy=cart-button]').should('be.visible');
    cy.get('[data-cy=search-button]').should('be.visible');
  });

  it('should have a footer with links', () => {
    cy.get('[data-cy=footer]').should('be.visible');
    cy.get('[data-cy=footer-links]').should('have.length.at.least', 3);
    cy.get('[data-cy=footer-copyright]').should('contain', '© 2024 LUXE');
  });

  it('should be responsive', () => {
    // Mobile viewport
    cy.viewport(375, 667);
    cy.get('[data-cy=mobile-menu-button]').should('be.visible');
    
    // Desktop viewport
    cy.viewport(1280, 720);
    cy.get('[data-cy=mobile-menu-button]').should('not.be.visible');
    cy.get('[data-cy=navigation]').should('be.visible');
  });

  it('should have proper SEO meta tags', () => {
    cy.title().should('contain', 'LUXE - Luxury Fashion & Lifestyle');
    cy.get('meta[name="description"]').should(
      'have.attr',
      'content',
      'Discover luxury fashion and lifestyle products from the world\'s finest designers.'
    );
  });
});