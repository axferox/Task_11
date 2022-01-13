const { BasePage } = require("../base_page/base_page");

class LogIn extends BasePage {
    constructor() {
        super();
        this.path = "/mijn/inloggen?ref=%2F";
        this.signUpLink = {
            locatorType: "xpath",
            locatorId: '//*[@id="app"]/div/main/div/div/div/div[2]/div[3]/div/footer/p[1]/a/span',
            locatorText: "Maak nu een profiel aan",
        };
    }
}

module.exports = {
    LogIn
};