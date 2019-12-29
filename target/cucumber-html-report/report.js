$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/findFlights.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Testing Flights link Funcationality",
  "description": "",
  "id": "testing-flights-link-funcationality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10573634400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Check Flights link Page",
  "description": "",
  "id": "testing-flights-link-funcationality;check-flights-link-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Click On The Flights link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Flights Page Should Be Displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close The Browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightRegistration.Luanch_Mercury_Flight_Application()"
});
formatter.result({
  "duration": 1173846700,
  "status": "passed"
});
formatter.match({
  "location": "FindFlights.Click_On_The_Flights_link()"
});
formatter.result({
  "duration": 5754969400,
  "status": "passed"
});
formatter.match({
  "location": "FindFlights.Flights_Page_Should_Be_Displayed()"
});
formatter.result({
  "duration": 3005200,
  "status": "passed"
});
formatter.match({
  "location": "FlightRegistration.Close_The_Browser()"
});
formatter.result({
  "duration": 791664700,
  "status": "passed"
});
formatter.after({
  "duration": 60100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Testing The Selecting Flights",
  "description": "",
  "id": "testing-flights-link-funcationality;testing-the-selecting-flights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Click On The Flights link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Click On tripType \"\u003ctripTypebtn\u003e\" and \"\u003cpassCountdrp\u003e\" and \"\u003cfromPortdrp\u003e\" and \"\u003cfromMonthdrp\u003e\" and \"\u003cfromDaydrp\u003e\" and \"\u003ctoPortdrp\u003e\" and \"\u003ctoMonthdrp\u003e\" and \"\u003ctoDaydrp\u003e\" and \"\u003cradiobtn\u003e\" and \"\u003cairlinedrp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click On Continue Button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Close The Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "testing-flights-link-funcationality;testing-the-selecting-flights;",
  "rows": [
    {
      "cells": [
        "tripTypebtn",
        "passCountdrp",
        "fromPortdrp",
        "fromMonthdrp",
        "fromDaydrp",
        "toPortdrp",
        "toMonthdrp",
        "toDaydrp",
        "radiobtn",
        "airlinedrp"
      ],
      "line": 38,
      "id": "testing-flights-link-funcationality;testing-the-selecting-flights;;1"
    },
    {
      "cells": [
        "Round Trip",
        "1",
        "New York",
        "July",
        "5",
        "Zurich",
        "August",
        "6",
        "Business class",
        "Blue Skies Airlines"
      ],
      "line": 39,
      "id": "testing-flights-link-funcationality;testing-the-selecting-flights;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9351037000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Testing The Selecting Flights",
  "description": "",
  "id": "testing-flights-link-funcationality;testing-the-selecting-flights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Click On The Flights link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Click On tripType \"Round Trip\" and \"1\" and \"New York\" and \"July\" and \"5\" and \"Zurich\" and \"August\" and \"6\" and \"Business class\" and \"Blue Skies Airlines\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click On Continue Button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Close The Browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightRegistration.Luanch_Mercury_Flight_Application()"
});
formatter.result({
  "duration": 1227683500,
  "status": "passed"
});
formatter.match({
  "location": "FindFlights.Click_On_The_Flights_link()"
});
formatter.result({
  "duration": 5655612500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round Trip",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "New York",
      "offset": 44
    },
    {
      "val": "July",
      "offset": 59
    },
    {
      "val": "5",
      "offset": 70
    },
    {
      "val": "Zurich",
      "offset": 78
    },
    {
      "val": "August",
      "offset": 91
    },
    {
      "val": "6",
      "offset": 104
    },
    {
      "val": "Business class",
      "offset": 112
    },
    {
      "val": "Blue Skies Airlines",
      "offset": 133
    }
  ],
  "location": "FindFlights.Click_On_tripType(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 28845300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027roundtrip\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-OV5H7EUD\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\mohim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65064}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44fc77e7bf2bb5dee06fa0eaf339b82d\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027roundtrip\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat Pages.Flights.Click_tripType(Flights.java:67)\r\n\tat Step_Defination_Three.FindFlights.Click_On_tripType(FindFlights.java:49)\r\n\tat ✽.And Click On tripType \"Round Trip\" and \"1\" and \"New York\" and \"July\" and \"5\" and \"Zurich\" and \"August\" and \"6\" and \"Business class\" and \"Blue Skies Airlines\"(src/test/resources/features/findFlights.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindFlights.Click_On_Continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightRegistration.Close_The_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://newtours.demoaut.com/index.php");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1172957300,
  "status": "passed"
});
});