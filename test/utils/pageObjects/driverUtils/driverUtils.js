const { until } = require('selenium-webdriver');
const { driver, sleep } = require('../../../config/driverConfig');
const { logger } = require('../../../config/loggerConfig');

class DriverUtils {
  static wait(locator) {
    return driver.wait(until.elementIsVisible(locator), 10000);
  }

  static getCurrentUrl() {
    logger.info('I\'m trying to get the URL of this page');
    return driver.getCurrentUrl();
  }

  static async getTitle() {
    await sleep();
    return driver.getTitle();
  }
}

module.exports = {
  DriverUtils,
};
