$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Registration.feature");
formatter.feature({
  "line": 2,
  "name": "As a user, I want to register Facebook using Automation",
  "description": "",
  "id": "as-a-user,-i-want-to-register-facebook-using-automation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.before({
  "duration": 7065713935,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Register Facebook",
  "description": "",
  "id": "as-a-user,-i-want-to-register-facebook-using-automation;register-facebook",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open \"https://www.facebook.com/\" in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I input \"Mohamad\" in \"u_0_l\" as Nama depan text field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I input \"Romli\" in \"u_0_n\" as Nama belakang text field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I input \"romly31@gmail.com\" in \"u_0_q\" as Email text field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I input \"romly31@gmail.com\" in \"u_0_t\" as re-Enter Email text field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I input \"IniP@ssw0rd\" in \"u_0_x\" text field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"13\" in \"day\" dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"Okt\" in \"month\" dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"1988\" in \"year\" dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click \"Laki-laki\" as Laki-laki radio button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click \"Daftar\" as Daftar button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify Register successful is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 8
    }
  ],
  "location": "StepDefinition.openApps(String)"
});
formatter.result({
  "duration": 3111622241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohamad",
      "offset": 9
    },
    {
      "val": "u_0_l",
      "offset": 22
    }
  ],
  "location": "StepDefinition.input(String,String)"
});
formatter.result({
  "duration": 1811740612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Romli",
      "offset": 9
    },
    {
      "val": "u_0_n",
      "offset": 20
    }
  ],
  "location": "StepDefinition.input(String,String)"
});
formatter.result({
  "duration": 83486163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romly31@gmail.com",
      "offset": 9
    },
    {
      "val": "u_0_q",
      "offset": 32
    }
  ],
  "location": "StepDefinition.input(String,String)"
});
formatter.result({
  "duration": 175019564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romly31@gmail.com",
      "offset": 9
    },
    {
      "val": "u_0_t",
      "offset": 32
    }
  ],
  "location": "StepDefinition.input(String,String)"
});
formatter.result({
  "duration": 194741995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IniP@ssw0rd",
      "offset": 9
    },
    {
      "val": "u_0_x",
      "offset": 26
    }
  ],
  "location": "StepDefinition.input(String,String)"
});
formatter.result({
  "duration": 149240968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 10
    },
    {
      "val": "day",
      "offset": 18
    }
  ],
  "location": "StepDefinition.select(String,String)"
});
formatter.result({
  "duration": 61625268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Okt",
      "offset": 10
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "StepDefinition.select(String,String)"
});
formatter.result({
  "duration": 68732552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1988",
      "offset": 10
    },
    {
      "val": "year",
      "offset": 20
    }
  ],
  "location": "StepDefinition.select(String,String)"
});
formatter.result({
  "duration": 73113666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laki-laki",
      "offset": 9
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 110673745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daftar",
      "offset": 9
    }
  ],
  "location": "StepDefinition.click(String)"
});
formatter.result({
  "duration": 136485742,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.write("Scenario Pass");
formatter.after({
  "duration": 5005088354,
  "status": "passed"
});
});