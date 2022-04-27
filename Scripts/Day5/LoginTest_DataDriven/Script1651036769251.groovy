import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl('https://trytestingthis.netlify.app/')

int rowNum = findTestData('Data Files/Data3').getRowNumbers()

println('No of Rows : ' + rowNum)

//username1 = findTestData('Data Files/Data3').getValue('username', 1)
//println(' Here is username1 : ' + username1)
//password1 = findTestData('Data Files/Data3').getValue('password', 1)
//println(' Here is password1 : ' + password1)

for (int index : (1..rowNum)) {
	username1 = findTestData('Data Files/Data3').getValue('username', index)
	println(' Here is username : ' + username1)
	
	password1 = findTestData('Data Files/Data3').getValue('password', index)
	println(' Here is password : ' + password1)
}



WebUI.setText(findTestObject('Object Repository/WEB/Page_Try Testing This/input_Username_uname'), username)

WebUI.setText(findTestObject('Object Repository/WEB/Page_Try Testing This/input_Password_pwd'), password)

WebUI.click(findTestObject('Object Repository/WEB/Page_Try Testing This/input'))

WebUI.verifyElementText(findTestObject('Object Repository/WEB/Page_Login Success/h2_Login Successful )'), 'Login Successful :)')

WebUI.closeBrowser()

