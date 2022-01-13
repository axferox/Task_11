class TestData {
    static textGenerator() {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]/g, "")
            .substr(0, 11);
    }

    static phoneNumberNl() {
        return `06402190${this.numberGenerator()}`;
    }

    static mailRandomizer() {
        const randomizedUserName = this.textGenerator();
        return `${randomizedUserName}@mailinator.com`;
    }

    static passwordGenerator() {
        const randomizedText = this.textGenerator().toUpperCase();
        const randomizedNumbers = this.numberGenerator();
        return `${randomizedText}${randomizedNumbers}`;
    }

    static bonusCardNumber() {
        return "2620698240281";
    }

    static numberGenerator() {
        return Math.floor(Math.random() * (98765432120 - 100)) + 10000;
    }

    static postalCodeNld() {
        return "1421xm";
    }

    static houseNumber() {
        return "1";
    }

    static houseNumberExtra() {
        return "1";
    }

    static birthDay() {
        return "11-11-2000";
    }

    static bonusCardNumber() {
        return "2620698240281";
    }
}

module.exports = { TestData };