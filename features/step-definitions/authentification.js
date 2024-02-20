import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home-page.js';
import signInPage from '../page-objects/signin-page.js';

When('I click on the Sign In link', async function() {
    await homePage.signInLink.click();
});

When('I enter {string} into {word} input field', async function(text, inputTitle) {
    await signInPage.input(inputTitle).setValue(text);
});

When('I click the Sign In button', async function() {
    await signInPage.signInButton.click();
});