const { HeaderNavigationMenu } = require("../base_collections/header_navigation");

class Header {
    constructor() {
        this.HeaderNavigation = new HeaderNavigationMenu();
    }
}

module.exports = { Header };