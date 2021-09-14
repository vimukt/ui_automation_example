import pause from "webdriverio/build/commands/browser/pause";
import waitForExist from "webdriverio/build/commands/element/waitForExist";
import Timeout from './Timeout';
import Page from "./Page";

class LoginPage extends Page {
    open() {
        super.open("https://signin.ebay.com.au/signin");
    }

    get username() {
        return $('//*[@id="userid"]'); 
    }

    get password() {
        return $('//*[@id="pass"]'); //$('//*[@type="password"]');
    }

    get signIn() {
        return $('//*[@id="sgnBt"]');
    }
    
    get continueBtn() {
        return $('//*[@id="signin-continue-btn"]');
    }

    enterUsername(name: string) {
        this.username.setValue(name);
    }

    enterPassword(password: string) {
        this.syncWait(Timeout.MEDIUM);
        this.password.setValue(password);   
    }

    clickSignIn() {
        this.signIn.click();
        this.syncWait(Timeout.MEDIUM);
    }

    clickContinueBtn() {
        this.continueBtn.click();
    }
}
export default new LoginPage();
