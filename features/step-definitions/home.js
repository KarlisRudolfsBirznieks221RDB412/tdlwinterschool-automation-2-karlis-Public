import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import {parseMenuExpression} from 'utils.js'

Given('I am on the home page', async function() {
    await homePage.open();
});

Then('I see the welcome message {string}', async function(message) {
    await expect(homePage.greetMessage).toHaveText(message);
});

When('I select {string} menu items', async function(menuExpression) {
    const menuItems = parseMenuExpression(menuExpression); 
});