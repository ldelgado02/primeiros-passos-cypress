import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Testes', () => {

  it.only('Update User Infos - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWitAnyhUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.nameUpate()
    myInfoPage.employeeIdField()
    myInfoPage.otherIdField()
    myInfoPage.driversLicenseField()
    myInfoPage.dateLicenseExpiryField()
    myInfoPage.nationalityList()
    myInfoPage.maritalStatusList()
    myInfoPage.dateBirthField()
    myInfoPage.genderButton()
    myInfoPage.saveButton()

  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWitAnyhUser(userData.userFail.username, userData.userFail.password)
  });

})
 


