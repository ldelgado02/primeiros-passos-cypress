class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardTittle: ".oxd-topbar-header-breadcrumb > .oxd-text"
        }

        return selectors
        
    }

    checkDashboardPage() {
        cy.get(this.selectorsList().dashboardTittle).contains("Dashboard")
    }

}

export default DashboardPage