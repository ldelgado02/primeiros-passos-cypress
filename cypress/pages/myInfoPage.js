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

    // Employee Details

    //Status Details

    fillPersonalDetails(username, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(username)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driversLicenseDate) {
        cy.get(this.selectorsList().defautlField).eq(3).clear().type("Employee T")
        cy.get(this.selectorsList().defautlField).eq(4).clear().type("OtherId Test")
        cy.get(this.selectorsList().defautlField).eq(5).clear().type("Driver'sLicenseTest")
        cy.get(this.selectorsList().defautlField).eq(6).clear().type("2025-08-05")
        cy.get(this.selectorsList().dateCloseButton).click()//fechar "calendário"
    }

    fillStatusDetails(birthDate) {
        cy.get(this.selectorsList().defautlField).eq(7).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()//fechar "calendário"
        cy.get(this.selectorsList().genderButton).eq(0).click()
        cy.get(this.selectorsList().listSelector).eq(0).click()//selcionar lista pais "Nationality"
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()// selecionar no país 
        cy.get(this.selectorsList().listSelector).eq(1).click()// clicar na lista estado cívil "marital Status"
        cy.get('.oxd-select-dropdown > :nth-child(3)')// selecionar estado civíl
    }
        
        
        saveForm() {
        cy.get(this.selectorsList().saveDataButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(".oxd-toast-content-text")
    }

}

export default MyInfoPage