const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Before({ timeout: 10000 }, async function () {
    await this.openBrowser();
  });
  

  After(async function () {
    if (this.browser) {
      await this.closeBrowser();
    }
  });
  
  
Given('I open facebook\'s homepage',{ timeout: 10000 }, async function () {
  await this.page.goto('https://www.facebook.com');
});



Then('I should see {string} in the url',{ timeout: 10000 }, async function (title) {
    const url = this.page.url();
    expect(url).toContain(string);
});

