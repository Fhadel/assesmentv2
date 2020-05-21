$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Task.feature");
formatter.feature({
  "line": 2,
  "name": "As a user, I want to Book a Hotel using Facebook Credentials",
  "description": "",
  "id": "as-a-user,-i-want-to-book-a-hotel-using-facebook-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ReservationHotel"
    }
  ]
});
formatter.before({
  "duration": 23447746,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with facebook",
  "description": "",
  "id": "as-a-user,-i-want-to-book-a-hotel-using-facebook-credentials;login-with-facebook",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open \"https://www.tiket.com/\" in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click \".header-right-item:nth-child(3)\" as Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \".facebook\" as Login with Facebook",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I succeed login by seeing text Mau ke mana? in Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.tiket.com/",
      "offset": 8
    }
  ],
  "location": "StepDefinition.openApps(String)"
});
formatter.result({
  "duration": 19044839652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".header-right-item:nth-child(3)",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_click_Login_button(String)"
});
formatter.result({
  "duration": 4582552194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".facebook",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_click_Login_with_Facebook(String)"
});
formatter.result({
  "duration": 11855434442,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_succeed_login()"
});
formatter.result({
  "duration": 41091868,
  "status": "passed"
});
formatter.before({
  "duration": 67307,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Book a Hotel with 32 Guest and 8 rooms",
  "description": "",
  "id": "as-a-user,-i-want-to-book-a-hotel-using-facebook-credentials;book-a-hotel-with-32-guest-and-8-rooms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I already in Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click text \"Mau nginep ke mana?\" as a Hotel Destination",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can click \"#destinationDropDownList-place2\" to choose a value of location of hotel",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I choose existing date value for my booking date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click \"widget-passenger-counter-item\" to add the GUEST as many as \"32\" guest",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can click \"widget-passenger-counter-item\" to add the ROOMS as many as \"8\" rooms",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_already_in_Homepage()"
});
formatter.result({
  "duration": 77605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mau nginep ke mana?",
      "offset": 14
    }
  ],
  "location": "StepDefinition.i_click_as_a_Hotel_Destination(String)"
});
formatter.result({
  "duration": 754211,
  "error_message": "java.lang.NullPointerException\n\tat pages.HomePage.clickHotelDestination(HomePage.java:30)\n\tat stepDefinition.StepDefinition.i_click_as_a_Hotel_Destination(StepDefinition.java:77)\n\tat ✽.When I click text \"Mau nginep ke mana?\" as a Hotel Destination(Task.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "#destinationDropDownList-place2",
      "offset": 13
    }
  ],
  "location": "StepDefinition.i_can_click_to_choose_a_value_of_location_of_hotel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.i_choose_existing_date_value_for_my_booking_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "widget-passenger-counter-item",
      "offset": 13
    },
    {
      "val": "32",
      "offset": 73
    }
  ],
  "location": "StepDefinition.i_can_click_to_add_the_guest_as_many_as_guest(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "widget-passenger-counter-item",
      "offset": 13
    },
    {
      "val": "8",
      "offset": 73
    }
  ],
  "location": "StepDefinition.i_can_click_to_add_the_rooms_as_many_as_rooms(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 71843,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Book Flight Ticket for 2 Transit",
  "description": "",
  "id": "as-a-user,-i-want-to-book-a-hotel-using-facebook-credentials;book-flight-ticket-for-2-transit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I already in Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I login with email \"Fhadel\" with Pass \"P@ssw0rd\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I choose destination from \"Surabaya\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I choose current date today",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose \"2\" Adult Passengers",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I choose \"Ekonomi\" Cabin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I search the Flight schedule",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_already_in_Homepage()"
});
formatter.result({
  "duration": 133553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fhadel",
      "offset": 20
    },
    {
      "val": "P@ssw0rd",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_login_with_email_with_Pass(String,String)"
});
formatter.result({
  "duration": 1643977,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepDefinition.StepDefinition.i_login_with_email_with_Pass(StepDefinition.java:107)\n\tat ✽.And I login with email \"Fhadel\" with Pass \"P@ssw0rd\"(Task.feature:20)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Surabaya",
      "offset": 27
    }
  ],
  "location": "StepDefinition.i_choose_destination_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.i_choose_current_date_today()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "StepDefinition.i_choose_Adult_Passengers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ekonomi",
      "offset": 10
    }
  ],
  "location": "StepDefinition.i_choose_Cabin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.i_search_the_Flight_schedule()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 68090,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Logout",
  "description": "",
  "id": "as-a-user,-i-want-to-book-a-hotel-using-facebook-credentials;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "i already in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "i click my account icon \".header-account\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "i can click logout button \"Keluar\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I can succesfully logout",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});