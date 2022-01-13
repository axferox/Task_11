class HeaderNavigationMenu {
  constructor() {
    this.menuLoginButton = {
      locatorType: "xpath",
      locatorId: '//*[@id="menu_personal"]/li[2]/a/span',
      locatorText: "Inloggen",
    };
    this.menuLoginButtonSpan = {
      locatorType: "id",
      locatorId: "menu_mijn",
      locatorText: "Inloggen",
    };
    this.loginButton = {
      locatorType: "css",
      locatorId: "#menu_mijn > li:nth-child(7) > a",
      locatorText: "Inloggen",
    };
  }
}

module.exports = { HeaderNavigationMenu };
