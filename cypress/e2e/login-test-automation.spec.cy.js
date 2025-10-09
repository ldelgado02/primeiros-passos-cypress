// Test case 1: Positive LogIn test
// Open page
// Type username student into Username field
// Type password Password123 into Password field
// Push Submit button
// Verify new page URL contains practicetestautomation.com/logged-in-successfully/
// Verify new page contains expected text ('Congratulations' or 'successfully logged in')
// Verify button Log out is displayed on the new page

// Test case 2: Negative username test
// Open page
// Type username incorrectUser into Username field
// Type password Password123 into Password field
// Push Submit button
// Verify error message is displayed
// Verify error message text is Your username is invalid!

// Test case 3: Negative password test
// Open page
// Type username student into Username field
// Type password incorrectPassword into Password field
// Push Submit button
// Verify error message is displayed
// Verify error message text is Your password is invalid!



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