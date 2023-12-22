const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld {
  async openBrowser() {
    this.browser = await chromium.launch({headless:false});
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
