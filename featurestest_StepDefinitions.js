const { Given, When, Then }= require('@cucumber/cucumber')

// Scenario: First Scenario
Given('a Person named <Name>', function () {
// Your test goes here ;
});

When('they try to sign up', function () {
// Your test goes here ;
});

Then('they <Allowed> allowed to use the system', function () {
// Your test goes here ;
});


// Scenario: Name begins with M
Given('a Person named Matt', function () {
// Your test goes here ;
});

When('they try to sign up', function () {
 
 // Your test goes here ;
});

Then('they are allowed to use the system', function () {
// Your test goes here ;
});


// Scenario: Name begins with A
Given('a Person named Alexis', function () {
// Your test goes here ;
});

When('they try to sign up', function () {
 
 // Your test goes here ;
});

Then('they are not allowed to use the system', function () {
// Your test goes here ;
});