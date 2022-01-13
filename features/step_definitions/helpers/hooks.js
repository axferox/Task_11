const {After, Status, AfterAll} = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { driver } = require("../../../test/config/driver.config");
setDefaultTimeout(60 * 1000);

After(function (testCase) {
	if (testCase.result.status === Status.FAILED) {
		return driver.takeScreenshot().then((screenShot) => {
			let decodedImage = new Buffer(screenShot, 'base64');
			return this.attach(decodedImage, 'image/png');
		});
	}
});

AfterAll(async function(){
	await driver.quit();
});