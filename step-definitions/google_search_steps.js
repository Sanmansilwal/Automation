const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

Before({ timeout: 10000 }, async function () {
    await this.openBrowser();
  });
  

  After(async function () {
    if (this.browser) {
      await this.closeBrowser();
    }
  });
  
  
Given('I open Google\'s homepage',{ timeout: 10000 }, async function () {
  await this.page.goto('https://www.google.com');
});

When('I type {string} into the search box',{ timeout: 10000 }, async function (searchQuery) {
  await this.page.fill('input[name="q"]', searchQuery);
});

When('I press {string}',{ timeout: 10000 }, async function (key) {
  await this.page.press('input[name="q"]', key);
});

Then('I should see {string} in the title',{ timeout: 10000 }, async function (title) {
  await expect(this.page).toHaveTitle(title);
});

Then('I should see search results',{ timeout: 10000 }, async function () {
  const searchResultsExist = await this.page.locator('#search').isVisible();
  expect(searchResultsExist).toBe(true);
});
