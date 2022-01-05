const { PageFactory } = require("../../utils/page_factory");
const { expect } = require("chai");
const { TestData } = require("../../utils/test_data/test_data");
const { quit } = require("../../config/driver.config");

describe("Smoke test 1", () => {
  before(async () => {
  });
  after(async () => {
    await quit();
  });

  it("Verify that page is loaded and the title matches the expected", async () => {
    const homePageTitle = await PageFactory.getPage("Home");
    await PageFactory.getPage("Home").open();
    await PageFactory.getPage("Home").waitUntilTitleIsLoaded();
    expect(await PageFactory.getPage("Home").getTitle()).equal(homePageTitle.expectedTitle);
  });

  it("Verify that cookie modal is opened and Accept button contains the text ", async () => {
    const cookiePopup = await PageFactory.getPage("Cookie_Popup").cookiePopupModal;
    const cookieAcceptButton = cookiePopup.acceptButton;
    await PageFactory.getPage("Cookie_Popup").waitUntilElementIsVisible(cookiePopup);
    expect(await PageFactory.getPage("Cookie_Popup").getElementText(cookieAcceptButton)).equal(cookieAcceptButton.locatorText);
  });

  it("Verify that modal is closed after submission", async () => {
    const cookiePopup = await PageFactory.getPage("Cookie_Popup").cookiePopupModal.acceptButton;
    const cookieAcceptButton = cookiePopup.locatorId;
    await PageFactory.getPage("Cookie_Popup").elementFindAndClickJavaScript(cookieAcceptButton);
    expect(() => PageFactory.getPage("Cookie_Popup").getElement(cookiePopup)()).to.throw();
  });

  it("Verify that menu login button name matches the expected", async () => {
    const menuLoginButton = await PageFactory.getPage("Home").Header.HeaderNavigation.menuLoginButton;
    expect(await PageFactory.getPage("Home").getElementText(menuLoginButton)).equal(menuLoginButton.locatorText);
  });

  it("Verify that user is landed on login screen after click on login button", async () => {
    const menuLoginButtonSpan = await PageFactory.getPage("Home").Header.HeaderNavigation.menuLoginButtonSpan;
    const loginButton = await PageFactory.getPage("Home").Header.HeaderNavigation.loginButton;
    const loginPage = await PageFactory.getPage("Log_in");
    await PageFactory.getPage("Home").elementHoverAction(menuLoginButtonSpan);
    await PageFactory.getPage("Home").waitUntilElementIsVisible(loginButton);
    await PageFactory.getPage("Home").elementClickAction(loginButton);
    expect(await PageFactory.getPage("Log_in").getCurrentUrl()).equal(loginPage.getPageUrl());
  });

  it("Verify that page contains user sign up link text matches the expected", async () => {
    const loginPageLink = await PageFactory.getPage("Log_in").signUpLink;
    expect(await PageFactory.getPage("Log_in").getElementText(loginPageLink)).equal(loginPageLink.locatorText);
  });

  it("Verify that user is landed on sign up page after click", async () => {
    const signupPage = await PageFactory.getPage("Sign_up");
    const loginPageLink = await PageFactory.getPage("Log_in").signUpLink;
    await PageFactory.getPage("Log_in").elementClick(loginPageLink);
    expect(await PageFactory.getPage("Sign_up").getCurrentUrl()).equal(signupPage.getPageUrl());
  });

  it("Verify that radiobuttons is present and unticket by default", async () => {
    const femaleButton = await PageFactory.getPage("Sign_up").femaleButton;
    const maleButton = await PageFactory.getPage("Sign_up").maleButton;
    expect(await PageFactory.getPage("Sign_up").selected(femaleButton)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(maleButton)).equal(false);
  });

  it("Verify that female radiobutton changes status after click", async () => {
    const femaleButton = await PageFactory.getPage("Sign_up").femaleButton;
    await PageFactory.getPage("Sign_up").elementClick(femaleButton.span);
    expect(await PageFactory.getPage("Sign_up").selected(femaleButton)).equal(true);
  });

  it("Verify that female radiobutton changes status after click and female radiobutton is not active", async () => {
    const femaleButton = await PageFactory.getPage("Sign_up").femaleButton;
    const maleButton = await PageFactory.getPage("Sign_up").maleButton;
    await PageFactory.getPage("Sign_up").elementClick(maleButton.span);
    expect(await PageFactory.getPage("Sign_up").selected(maleButton)).equal(true);
    expect(await PageFactory.getPage("Sign_up").selected(femaleButton)).equal(false);
  });

  it("Verify that complete the fields with the test data", async () => {
    const inputField = await PageFactory.getPage("Sign_up");
    await PageFactory.getPage("Sign_up").input(inputField.firstName, TestData.textGenerator());
    await PageFactory.getPage("Sign_up").input(inputField.lastName, TestData.textGenerator());
    await PageFactory.getPage("Sign_up").input(inputField.postalCodeNld, TestData.postalCodeNld());
    await PageFactory.getPage("Sign_up").input(inputField.houseNumber, TestData.houseNumber());
    await PageFactory.getPage("Sign_up").input(inputField.houseNumberExtra, TestData.houseNumberExtra());
    await PageFactory.getPage("Sign_up").input(inputField.emailAddress, TestData.mailRandomizer());
    await PageFactory.getPage("Sign_up").input(inputField.password, TestData.passwordGenerator());
    await PageFactory.getPage("Sign_up").input(inputField.phoneNumberNl, TestData.phoneNumberNl());
    await PageFactory.getPage("Sign_up").input(inputField.birthDay, TestData.birthDay());
  });

  it("Verify that Bonus card options are unticked by default", async () => {
    const optOut = await PageFactory.getPage("Sign_up").radioOptOut;
    const request = await PageFactory.getPage("Sign_up").radioRequest;
    const input = await PageFactory.getPage("Sign_up").radioInput;
    expect(await PageFactory.getPage("Sign_up").selected(optOut)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(request)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(input)).equal(false);
  });

  it("Verify that Bonus card radiobutton with optOut option can be ticked and other options are unticked", async () => {
    const optOut = await PageFactory.getPage("Sign_up").radioOptOut;
    const request = await PageFactory.getPage("Sign_up").radioRequest;
    const input = await PageFactory.getPage("Sign_up").radioInput;
    await PageFactory.getPage("Sign_up").elementClick(optOut.span);
    expect(await PageFactory.getPage("Sign_up").selected(request)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(optOut)).equal(true);
    expect(await PageFactory.getPage("Sign_up").selected(input)).equal(false);
  });

  it("Verify that Bonus card radiobutton with request option can be ticked and other options are unticked", async () => {
    const optOut = await PageFactory.getPage("Sign_up").radioOptOut;
    const request = await PageFactory.getPage("Sign_up").radioRequest;
    const input = await PageFactory.getPage("Sign_up").radioInput;
    await PageFactory.getPage("Sign_up").elementClick(request.span);
    expect(await PageFactory.getPage("Sign_up").selected(request)).equal(true);
    expect(await PageFactory.getPage("Sign_up").selected(optOut)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(input)).equal(false);
  });

  it("Verify that Bonus card radiobutton with input option can be ticked and other options are unticked", async () => {
    const optOut = await PageFactory.getPage("Sign_up").radioOptOut;
    const request = await PageFactory.getPage("Sign_up").radioRequest;
    const input = await PageFactory.getPage("Sign_up").radioInput;
    await PageFactory.getPage("Sign_up").elementClick(input.span);
    expect(await PageFactory.getPage("Sign_up").selected(input)).equal(true);
    expect(await PageFactory.getPage("Sign_up").selected(optOut)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(request)).equal(false);
  });

  it("Verify that custom Bonus card field can be completed", async () => {
    const inputField = await PageFactory.getPage("Sign_up").bonusCardNumberField;
    await PageFactory.getPage("Sign_up").input(inputField, TestData.bonusCardNumber());
  });

  it("Verify that subscription checkboxes are unticked by defauilt and can be ticked", async () => {
    const checkboxServiceMail = await PageFactory.getPage("Sign_up").checkboxServiceMail;
    const checkboxMail = await PageFactory.getPage("Sign_up").checkboxMail;
    expect(await PageFactory.getPage("Sign_up").selected(checkboxServiceMail)).equal(false);
    expect(await PageFactory.getPage("Sign_up").selected(checkboxMail)).equal(false);
  });

  it("Verify that subscription checkboxes can be ticked", async () => {
    const checkboxServiceMail = await PageFactory.getPage("Sign_up").checkboxServiceMail;
    const checkboxMail = await PageFactory.getPage("Sign_up").checkboxMail;
    await PageFactory.getPage("Sign_up").elementClick(checkboxServiceMail.span);
    await PageFactory.getPage("Sign_up").elementClick(checkboxMail.span);
    expect(await PageFactory.getPage("Sign_up").selected(checkboxServiceMail)).equal(true);
    expect(await PageFactory.getPage("Sign_up").selected(checkboxMail)).equal(true);
  });

  it("Verify that can be submitted", async () => {
    const submitButton = await PageFactory.getPage("Sign_up").registrationSubmitButton;
    await PageFactory.getPage("Sign_up").elementClick(submitButton);
  });
});
