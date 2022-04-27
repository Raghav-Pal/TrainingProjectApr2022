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

Mobile.startApplication('bs://c0d7df6f97e08293571b99cdff42da5deee70997', true)

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.Button - Continue'), 10)

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.Button - OK'), 10)

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.TextView - App'), 10)

Mobile.scrollToText('Search')

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.TextView - Search'), 10)

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.TextView - Invoke Search'), 10)

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.EditText'), 10)

Mobile.hideKeyboard()

Mobile.setText(findTestObject(''), 'A B C D', 10)

Mobile.tap(findTestObject('Object Repository/Mobile/1/android.widget.Button - onSearchRequested()'), 10)

Mobile.pressBack()

Mobile.pressBack()

Mobile.pressBack()

Mobile.pressBack()

Mobile.pressBack()

Mobile.pressBack()

Mobile.closeApplication()

