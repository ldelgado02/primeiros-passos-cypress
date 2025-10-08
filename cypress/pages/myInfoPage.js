class MyInfoPage {
    selectorsList() {
        const selectors = {

            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            defautlField: ".oxd-input--active",
            dateCloseButton: ".--close",
            genderButton: ".oxd-radio-input--active",
            listSelector: ".oxd-select-text-input",
            saveDataButton: "[type='submit']"
        }

        return selectors
    }

    nameUpate() {
        cy.get(this.selectorsList().firstNameField).clear().type('Luis Gustavo')
        cy.get(this.selectorsList().middleNameField).clear().type('Delgado')
        cy.get(this.selectorsList().lastNameField).clear().type('Correa')
    }

    employeeIdField() {
        cy.get(this.selectorsList().defautlField).eq(3).clear().type("Employee T")
    }

    otherIdField() {
        cy.get(this.selectorsList().defautlField).eq(4).clear().type("OtherId Test")
    }

    driversLicenseField() {
        cy.get(this.selectorsList().defautlField).eq(5).clear().type("Driver'sLicenseTest")
    }

    dateLicenseExpiryField() {
        cy.get(this.selectorsList().defautlField).eq(6).clear().type("2025-08-05")//selecionar data "calendário"
        cy.get(this.selectorsList().dateCloseButton).click()//fechar "calendário"
    }

    dateBirthField() {
        cy.get(this.selectorsList().defautlField).eq(7).clear().type("2002-06-22")//selecionar data "calendário"
        cy.get(this.selectorsList().dateCloseButton).click()//fechar "calendário"
    }

    genderButton() {
        cy.get(this.selectorsList().genderButton).eq(0).click()
    }

    nationalityList() {
        cy.get(this.selectorsList().listSelector).eq(0).click()//selcionar lista pais "Nationality"
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()// selecionar no país 
    }

    maritalStatusList() {
        cy.get(this.selectorsList().listSelector).eq(1).click()// clicar na lista estado cívil "marital Status"
        cy.get('.oxd-select-dropdown > :nth-child(3)')// selecionar estado civíl
    }

    saveButton() {
        cy.get(this.selectorsList().saveDataButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(".oxd-toast-content-text")
    }

}

export default MyInfoPage