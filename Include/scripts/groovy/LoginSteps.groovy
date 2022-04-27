import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.Before
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class LoginSteps {
	
	private static int count = 0;
	
	@Before("@Counter")
	public void countScenarioOutlineRows() {
		count++;
	}

//	public void getData() {
//		int rowNum = findTestData('Data Files/Data3').getRowNumbers()
//
//		println('No of Rows : ' + rowNum)
//		//username1 = findTestData('Data Files/Data3').getValue('username', 1)
//		//println(' Here is username1 : ' + username1)
//		//password1 = findTestData('Data Files/Data3').getValue('password', 1)
//		//println(' Here is password1 : ' + password1)
//
//		for (int index : (1..rowNum)) {
//			username1 = findTestData('Data Files/Data3').getValue('username', index)
//			println(' Here is username : ' + username1)
//
//			password1 = findTestData('Data Files/Data3').getValue('password', index)
//			println(' Here is password : ' + password1)
//		}
//	}

	@Given("user is on login page")
	public void user_is_on_login_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('https://trytestingthis.netlify.app/')
	}

	@When("user enters (.*) and (.*)")
	public void user_enters_username_and_password(username, password) {
		
//		int counter = counter+1
		int rowNum = findTestData('Data Files/Data3').getRowNumbers()
		
				println('No of Rows : ' + rowNum)
		
//				for (int index : (1..rowNum)) {
					def username1 = findTestData('Data Files/Data3').getValue('username', count)
					println(' Here is username : ' + username1)
		
					def password1 = findTestData('Data Files/Data3').getValue('password', count)
					println(' Here is password : ' + password1)
					
					WebUI.setText(findTestObject('Object Repository/WEB/Page_Try Testing This/input_Username_uname'), username1)
					WebUI.setText(findTestObject('Object Repository/WEB/Page_Try Testing This/input_Password_pwd'), password1)
//				}
		
		
	}

	@When("clicks on login")
	public void clicks_on_login() {
		WebUI.click(findTestObject('Object Repository/WEB/Page_Try Testing This/input'))
	}

	@Then("user is navigated to homepage")
	public void user_is_navigated_to_homepage() {
//		WebUI.verifyElementText(findTestObject('Object Repository/WEB/Page_Login Success/h2_Login Successful )'), 'Login Successful :)')
		WebUI.closeBrowser()
	}
}
