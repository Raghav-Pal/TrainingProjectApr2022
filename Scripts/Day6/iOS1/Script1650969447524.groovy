import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('bs://444bd0308813ae0dc236f8cd461c02d3afa7901d', true)

Mobile.tap(findTestObject('Object Repository/Mobile/ios/XCUIElementTypeButton - Text Button'), 0)

Mobile.setText(findTestObject('Object Repository/Mobile/ios/XCUIElementTypeTextField - Text Input'), 'A B C D', 0)

Mobile.hideKeyboard()

Mobile.tap(findTestObject('Object Repository/Mobile/ios/XCUIElementTypeButton - Web View'), 0)

Mobile.tap(findTestObject('Object Repository/Mobile/ios/XCUIElementTypeButton - UI Elements'), 0)

Mobile.tap(findTestObject('Object Repository/Mobile/ios/XCUIElementTypeButton - UI Elements (1)'), 0)

Mobile.closeApplication()

