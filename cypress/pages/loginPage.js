class LoginPage {
    selectorsList() {
        const selectors = {
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert",
            baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        }

        return selectors
        
    }

    accessLoginPage() {
        cy.visit(this.selectorsList().baseURL)
    }

    loginWitAnyhUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkInvalidAccess() {
        cy.get(this.selectorsList().wrongCredentialAlert).contains("Invalid credentials")
    }

}

export default LoginPage