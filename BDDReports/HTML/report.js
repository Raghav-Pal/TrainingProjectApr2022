$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "demo login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test",
        "test"
      ]
    }
  ],
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.scenario({
  "name": "Test Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters test and test",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_navigated_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc",
        "123"
      ]
    }
  ],
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.scenario({
  "name": "Test Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters abc and 123",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_navigated_to_homepage()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Verify element text of test object \u0027Object Repository/Page_Login Success/h2_Login Successful )\u0027 FAILED.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$3.call(Unknown Source)\r\n\tat LoginSteps.user_is_navigated_to_homepage(LoginSteps.groovy:31)\r\n\tat ✽.user is navigated to homepage(Include/features/Login.feature:8)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027This is your layout one\u0027 and expected text \u0027Login Successful :)\u0027 of test object \u0027Object Repository/Page_Login Success/h2_Login Successful )\u0027 are NOT matched.\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.doCall(VerifyElementTextKeyword.groovy:57)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword$_verifyElementText_closure1.call(VerifyElementTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.verifyElementText(VerifyElementTextKeyword.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementTextKeyword.execute(VerifyElementTextKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementText(WebUiBuiltInKeywords.groovy:4749)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementText$3.call(Unknown Source)\r\n\tat LoginSteps.user_is_navigated_to_homepage(LoginSteps.groovy:31)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat BDDTest.run(BDDTest:26)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:445)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:436)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:415)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:407)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:284)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:133)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1650884309501.run(TempTestCase1650884309501.groovy:25)\r\n",
  "status": "failed"
});
});