describe('Pratice Test Automation', () => {
    it('Login - Sucess', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.get('#username').type('student')
      cy.get('#password').type('Password123')
      cy.get('#submit').click()
      cy.location('pathname').should('equal' , '/logged-in-successfully/')
      cy.get('.post-title').contains('Logged In Successfully')
    })
  })