const { BasePage } = require('../basePage/basePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this.baseUrl = 'https://www.ah.nl';
    this.pageTitle = 'Albert Heijn: boodschappen doen bij de grootste supermarkt';
    this.path = '';
  }
}

module.exports = { HomePage };
