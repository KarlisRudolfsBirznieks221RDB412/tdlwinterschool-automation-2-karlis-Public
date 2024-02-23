Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I click on the Sign In link
        And I enter "peter.parker123456@gmail.com" into Email input field
        And I enter "peter.parker123456" into Password input field
        And I click the Sign In button
        Then I see the welcome message "Welcome, Peter Parker!"
        And My Account page contains email "peter.parker123456@gmail.com"