const { BasePage } = require("./page_objects/base_page/base_page");
const { CookiePopup } = require("./page_objects/base_page/cookie_popup");
const { Homepage } = require("./page_objects/home_page/home_page");
const { LogIn } = require("./page_objects/login_page/login_page");
const { SignUp } = require("./page_objects/signup_page/signup_page");

class PageFactory extends BasePage {
  static getPage(pageName) {
    switch (pageName) {
      case "Home":
        return new Homepage();
      case "Sign_up":
        return new SignUp();
      case "Log_in":
        return new LogIn();
      case "Cookie_Popup":
        return new CookiePopup();
      default:
        throw Error(`Page ${[pageName]} is not defined ot not found`);
    }
  }
}

module.exports = { PageFactory };
