const { Given, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');
// const { setDefaultTimeout } = require('@cucumber/cucumber');
const { PageFactory } = require('../../test/utils/page_factory')
// const cucumberDefaultTimeout = 20 * 1000;
// setDefaultTimeout(cucumberDefaultTimeout);

Given('I am opening {string} page', async function (pageName) {
	await PageFactory.getPage(pageName).open();
});

Then('the page title should be equal to expected {string} page title', {timeout: 60 * 1000}, async function (pageName) {
    const actualTitle = await PageFactory.getPage(pageName).getTitle()
		const expectedTitle = await PageFactory.getPage(pageName).expectedTitle
    expect(actualTitle).equal(expectedTitle);
});

