@ReservationHotel
Feature: As a user, I want to Book a Hotel using Facebook Credentials

Scenario: Login with facebook
Given I open "https://www.tiket.com/" in browser
When I click ".header-right-item:nth-child(3)" as Login button
And I click ".facebook" as Login with Facebook
Then I succeed login by seeing text Mau ke mana? in Home page

Scenario: Book a Hotel with 32 Guest and 8 rooms
Given I already in Homepage
When I click text "Mau nginep ke mana?" as a Hotel Destination
Then I can click "#destinationDropDownList-place2" to choose a value of location of hotel
And I choose existing date value for my booking date
And I can click "widget-passenger-counter-item" to add the GUEST as many as "32" guest
And I can click "widget-passenger-counter-item" to add the ROOMS as many as "8" rooms

Scenario: Book Flight Ticket for 2 Transit 
Given I already in Homepage
And I login with email "fhadelfadillah@gmail.com" with Pass "P@ssw0rd"
And I choose destination from "Surabaya"
And I choose destination to "Jakarta"
And I choose current date today
And I choose "2" Adult Passengers
And I choose Ekonomi Cabin  	
Then I search the Flight schedule 

Scenario: Logout
Given i already in homepage
When i click my account icon ".header-account"
Then i can click logout button "Keluar"
And I can succesfully logout