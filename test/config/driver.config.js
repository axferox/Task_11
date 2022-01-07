const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const fs = require("fs");

function switcher() {
  const config = JSON.parse(fs.readFileSync("./test/config/browser.config.json", "utf8"));

  if (config.browserName == "chrome") {
    const chromeOptions = new chrome.Options()
      .setPageLoadStrategy("normal")
      .addArguments("--window-size=1920,1080")
      .addArguments("--incognito")
      .setBrowserVersion(`${config.browserVersion}`)
      .setPlatform(`${config.platformName}`);

    return new Builder().forBrowser(`${config.browserName}`).setChromeOptions(chromeOptions).usingServer(`http://${config.environment}:4444/`).build();
  } else if (config.browserName == "firefox") {
    const firefoxOptions = new firefox.Options()
      .setPageLoadStrategy("normal")
      .addArguments("--width=1920") //without headless mode
      .addArguments("--height=1080") //without headless mode
      .addArguments("-private")
      .setBrowserVersion(`${config.browserVersion}`)
      .setPlatform(`${config.platformName}`);
    // .headless                                   //in headless mode
    // .windowSize({ width: 1920, height: 1080 }); //in headless mode

    return new Builder().forBrowser(`${config.browserName}`).setFirefoxOptions(firefoxOptions).usingServer(`http://${config.environment}:4444/`).build();
  } else {
    console.error("Looks like something wrong with gathering/parsing the arguments from comand line");
  }
}
const driver = switcher();

async function quit() {
  return await driver.quit();
}

async function sleep() {
  return await driver.sleep(10000);
}

module.exports = {
  driver,
  quit,
};
