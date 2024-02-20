import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {
    get signInLink() { return $('//header[@class="page-header"]//a[contains(text(), "Sign In")]'); }
    get greetMessage() { return $('.page-header .logged-in'); }

    async open() {
        await browser.navigateTo('https://magento.softwaretestingboard.com/');
    }
}

export default new HomePage();
