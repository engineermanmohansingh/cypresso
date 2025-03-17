describe('Bing Homepage Sanity Tests', () => {
  beforeEach(() => {
    // Visit Bing homepage before each test
    cy.visit('https://www.bing.com')
  })

  it('should load the homepage successfully', () => {
    // Verify the page has loaded
    cy.url().should('include', 'bing.com')
    cy.title().should('contain', 'Bing')
  })

  it('should have a functional search box', () => {
    // Check if search box exists and is interactive
    cy.get('#sb_form_q')
      .should('be.visible')
      .should('have.attr', 'name', 'q')
      .type('Cypress testing{enter}')
    
    // Verify search was executed
    cy.url().should('include', 'search')
    cy.url().should('include', 'Cypress+testing')
  })

  it('should display essential UI elements', () => {
    // Check for main navigation elements
    cy.get('#id_h').should('be.visible') // Header
    cy.get('#id_sc').should('be.visible') // Search container
    
    // Check for footer presence
    cy.get('footer').should('exist')
    
    // Verify images/news links are present
    cy.contains('Images').should('exist')
    cy.contains('News').should('exist')
  })
}) 