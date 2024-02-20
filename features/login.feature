Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I click on the Sign In link
        And I enter email "peter.parker123456@gmail.com"
        And I enter password "peter.parker123456"
        And I click the Sign In button
        Then I see the welcome message "Welcome, Peter Parker!"
        Then My account page contains email "peter.parker123456@gmail.com"
        
