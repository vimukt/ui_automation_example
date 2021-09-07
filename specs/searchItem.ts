import homePage from "../pageobjects/HomePage";
import * as User from "../data/Users";
import loginPage from "../pageobjects/LoginPage";
import search from "../pageobjects/Search"
import pause from "webdriverio/build/commands/browser/pause";
import { assert } from "chai";
import { Browser } from "puppeteer-core/lib/cjs/puppeteer/common/Browser";

//Test Data setup
const pauseTimeToSeeException = 5000;

describe("Ebay website serach test suite :->", () => {
    it("Search 'garmin instinct watch - graphite' & assert the item", () => {
        homePage.open();
        homePage.goToLoginPage();
        // Login
        //Enter user name 
        loginPage.enterUsername(User.Credentials.userId);
        loginPage.clickContinueBtn();
       
        //Password 
        loginPage.enterPassword(User.Credentials.password);
        loginPage.clickSignIn();

        // Search
        search.enterSearchItem("garmin instinct watch - graphite");
        search.clickSearchButton();
        search.clickFirstItem();
        const qty = search.getQuantity();

        //Assert its not out of stock
        assert.isTrue(qty.includes("available"));
       
        // Logout
        homePage.clickProfileBtn();
        homePage.clickLogOutLink();

    });

    
});
