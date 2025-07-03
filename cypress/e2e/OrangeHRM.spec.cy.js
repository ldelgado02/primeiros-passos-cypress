describe('Orange HRM Testes', () => {

  const selectorsList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopbar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert'
  }

  it('Login - Sucess ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopbar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Admin')
    cy.get(selectorsList.passwordField).type('abcdefg1234')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  });

})
 


