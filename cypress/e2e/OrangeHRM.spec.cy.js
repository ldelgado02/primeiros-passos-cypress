describe('Orange HRM Testes', () => {
  it('Login - Sucess ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcdefg')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  });

  it('Login with username empty', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcdefg')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains('Required')
    
  });

})
 


