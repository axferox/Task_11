const { BasePage } = require("../base_page/base_page");

class Homepage extends BasePage {
    constructor() {
        super();
        this.path = "";
        this.expectedTitle =
            "Albert Heijn: boodschappen doen bij de grootste supermarkt";
    }
}

module.exports = {
    Homepage
};