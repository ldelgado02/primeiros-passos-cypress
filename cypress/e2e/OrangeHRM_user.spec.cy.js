import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Testes', () => {

  it('Update User Infos - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWitAnyhUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails("EmploeeIdX", "OtherID Test", "12345", "2025-08-05")
    myInfoPage.fillStatusDetails("2002-06-22")
    myInfoPage.saveForm()
  })

})
 


