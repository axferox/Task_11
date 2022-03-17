const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { PageFactory } = require('../../test/utils/pageFactory');
const { DriverUtils } = require('../../test/utils/pageObjects/driverUtils/driverUtils');

Given('I am opening {string} page', async (pageName) => {
  await PageFactory.getPage(pageName).open();
});

Then(
  'the page title should be equal to expected {string} page title',
  { timeout: 60 * 10000 },
  async (pageName) => {
    const actualTitle = await DriverUtils.getTitle();
    const expectedTitle = await PageFactory.getPage(pageName).pageTitle;
    expect(actualTitle).equal(expectedTitle);
  }
);
