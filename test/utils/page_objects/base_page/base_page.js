const { Builder, wait, until, By } = require("selenium-webdriver");
const { logger } = require("../../../config/logger.config");
const { driver } = require("../../../config/driver.config");
const { Header } = require("./header");

class BasePage {
  constructor() {
    this.baseUrl = `https://www.ah.nl`;
    this.Header = new Header();
  }

  getPageUrl() {
    logger.info(`I'm checking the expected URL, expected URL is: [${this.baseUrl}${this.path}]`);
    return `${this.baseUrl}${this.path}`;
  }

  open() {
    logger.info(`I'm navigating to the page: [${this.baseUrl}${this.path}]`);
    return driver.get(`${this.baseUrl}${this.path}`);
  }

  sleep(milliseconds) {
    logger.info(`I'm turning into a sleep for a [${milliseconds}] milliseconds`);
    return driver.sleep(milliseconds);
  }

  getTitle() {
    const pageTitle = driver.getTitle()
    logger.info(`I'm trying to get the title of this page`);
    return pageTitle;
  }

  getCurrentUrl() {
    const currentPageUrl = driver.getCurrentUrl();
    logger.info(`I'm trying to get the URL of this page`);
    return currentPageUrl;
  }

  input(element, inputData) {
    logger.info(`I'm completing this element: [${element.locatorType}]: "${element.locatorId}" with the following input data: "${inputData}"`);
    return this.getElement(element).sendKeys(inputData);
  }

  selected(element) {
    logger.info(`I'm checking whether the element: element: [${element.locatorType}]: "${element.locatorId}" is selected`);
    return this.getElement(element).isSelected();
  }

  waitUntilTitleIsLoaded() {
    logger.info(`I'm waiting while the title: [${this.expectedTitle}] is completely loaded`);
    return driver.wait(until.titleIs(this.expectedTitle));
  }

  getElementText(element) {
    logger.info(`I'm trying to get the element: [${element.locatorType}]: "${element.locatorId}" text`);
    return this.getElement(element).getText();
  }

  elementClick(element) {
    logger.info(`I'm trying to click the element: [${element.locatorType}]: "${element.locatorId}" via simple webdriver click`);
    return this.getElement(element).click();
  }

  elementClickAction(element) {
    logger.info(`I'm trying to click the element: [${element.locatorType}]: "${element.locatorId}" via webdriver actions`);
    return driver.actions().click(this.getElement(element)).perform();
  }

  elementHoverAction(element) {
    logger.info(`I'm trying to perform the element: [${element.locatorType}]: "${element.locatorId}" webdriver hover action`);
    return driver
      .actions()
      .move({ duration: 5000, origin: this.getElement(element) })
      .perform();
  }

  elementFindAndClickJavaScript(element) {
    logger.info(`I'm trying to click the element: [${element}] via JavaScript`);
    return driver.executeScript(`document.querySelector("${element}").click()`);
  }

  waitUntilElementIsVisible(element, waitMilliseconds = 10000) {
    logger.info(`I'm waiting: [${waitMilliseconds}] millliseconds, while the element: [${element.locatorType}]: "${element.locatorId}" becomes visible`);
    return driver.wait(until.elementIsVisible(this.getElement(element), waitMilliseconds));
  }

  getElement(element) {
    if (element.locatorType === "xpath") {
      logger.info(`I'm trying to find the element: [${element.locatorId}] by: [${element.locatorType}]`);
      return driver.findElement(By.xpath(element.locatorId));
    } else if (element.locatorType === "id") {
      logger.info(`I'm trying to find the element: ${element.locatorId} by: [${element.locatorType}]`);
      return driver.findElement(By.id(element.locatorId));
    } else if (element.locatorType === "css") {
      logger.info(`I'm trying to find the element: ${element.locatorId} by: [${element.locatorType}]`);
      return driver.findElement(By.css(element.locatorId));
    } else if (element.locatorType === "name") {
      logger.info(`I'm trying to find the element: ${element.locatorId} by: [${element.locatorType}]`);
      return driver.findElement(By.name(element.locatorId));
    } else {
      throw Error(`Element Locator: ${element.locatorType} or Id: ${element.locatorId} is not defined`);
    }
  }
}

module.exports = { BasePage };
