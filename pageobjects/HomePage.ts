import Page from "./Page";

class HomePage extends Page {
   
    get loginLink() {
        return $('//*[@id="ghn-err"]/span/a');
    }

   get bellIcon(){
       return $('//*[@id="gh-Alerts-i"]');
   }

   get profileExpander(){
    return $('//*[@id="gh-ug"]');
    }
   
    get logoutLink(){
        return $('//*[@id="gh-uo"]');
    }
    
    goToLoginPage() {
        this.bellIcon.click()
        this.loginLink.click();
    }

    clickProfileBtn(){
        this.profileExpander.click();
    }

    clickLogOutLink(){
        this.profileExpander.click();
    }

    open() {
        super.open("/");
    }
}

export default new HomePage();
