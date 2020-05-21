@Registration
Feature: As a user, I want to register Facebook using Automation

Scenario: Register Facebook
Given I open "https://www.facebook.com/" in browser
When I input "Mohamad" in "u_0_l" as Nama depan text field
And I input "Romli" in "u_0_n" as Nama belakang text field
And I input "romly31@gmail.com" in "u_0_q" as Email text field
And I input "romly31@gmail.com" in "u_0_t" as re-Enter Email text field
And I input "IniP@ssw0rd" in "u_0_x" text field
And I select "13" in "day" dropdown list
And I select "Okt" in "month" dropdown list
And I select "1988" in "year" dropdown list
And I click "Laki-laki" as Laki-laki radio button
And I click "Daftar" as Daftar button
Then I verify Register successful is shown