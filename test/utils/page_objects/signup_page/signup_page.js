const { BasePage } = require("../base_page/base_page");

class SignUp extends BasePage {
    constructor() {
        super();
        this.path = "/mijn/inschrijven/bestellen?ref=%2F";

				this.expectedTitle = "Mijn Ah.nl | online bestellen | AH.nl";

        this.maleButton = {
            locatorType: "id",
            locatorId: "f-radio-button-gender-male",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[2]/label',
            },
        };

        this.femaleButton = {
            locatorType: "id",
            locatorId: "f-radio-button-gender-female",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[1]/label',
            },
        };

        this.firstName = {
            locatorType: "name",
            locatorId: "firstName",
        };

        this.lastName = {
            locatorType: "name",
            locatorId: "lastName",
        };

        this.postalCodeNld = {
            locatorType: "name",
            locatorId: "address.postalCodeNld",
        };

        this.houseNumber = {
            locatorType: "name",
            locatorId: "address.houseNumber",
        };

        this.houseNumberExtra = {
            locatorType: "name",
            locatorId: "address.houseNumberExtra",
        };

        this.emailAddress = {
            locatorType: "name",
            locatorId: "emailAddress",
        };

        this.password = {
            locatorType: "name",
            locatorId: "password",
        };

        this.phoneNumberNl = {
            locatorType: "css",
            locatorId: "#phoneNumber",
        };

        this.birthDay = {
            locatorType: "css",
            locatorId: "#dateOfBirthWebshop",
        };
        this.radioOptOut = {
            locatorType: "id",
            locatorId: "f-radio-button-bonusCardChoice-optOut",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[7]/div[1]/div/span[3]/label',
            },
        };

        this.radioRequest = {
            locatorType: "id",
            locatorId: "f-radio-button-bonusCardChoice-request",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[7]/div[1]/div/span[2]/label',
            },
        };

        this.radioInput = {
            locatorType: "id",
            locatorId: "f-radio-button-bonusCardChoice-input",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[7]/div[1]/div/span[1]/label',
            },
        };

        this.bonusCardNumberField = {
            locatorType: "xpath",
            locatorId: '//*[@id="cards.BO"]',
        };

        this.checkboxServiceMail = {
            locatorType: "id",
            locatorId: "f-checkbox-serviceMail",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[8]/div/label',
            },
        };

        this.checkboxMail = {
            locatorType: "id",
            locatorId: "f-checkbox-newsLetter",
            span: {
                locatorType: "xpath",
                locatorId: '//*[@id="app"]/div/main/div/div/div/form/div[9]/div/label',
            },
        };

        this.registrationSubmitButton = {
            locatorType: "id",
            locatorId: "registration-form-submit",
        };
    }
}

module.exports = {
    SignUp
};