import userData from '../fixtures/userData.json'


describe('Orange HRM Testes', () => {

  const selectorsList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: ".oxd-alert",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    defautlField: ".oxd-input--active",
    closeDataButton: ".--close",
    genderButton: ".oxd-radio-input--active",
    saveDataButton: "[type='submit']"
  }


  it.only('Update User Infos', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Blade")
    cy.get(selectorsList.lastNameField).clear().type("Teste")
    cy.get(selectorsList.defautlField).eq(3).clear().type("Employee T")
    cy.get(selectorsList.defautlField).eq(4).clear().type("OtherID Test")
    cy.get(selectorsList.defautlField).eq(5).clear().type("Driver'sLicenseTest")
    cy.get(selectorsList.defautlField).eq(6).clear().type("2025-08-05")
    cy.get(selectorsList.closeDataButton).click()
    cy.get(selectorsList.defautlField).eq(7).clear().type("2002-06-22")
    cy.get(selectorsList.closeDataButton).click()
    cy.get(selectorsList.genderButton).eq(0).click()
    cy.get(selectorsList.saveDataButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(".oxd-toast-content-text")
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  });

})
 


