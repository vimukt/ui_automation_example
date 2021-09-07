import pause from "webdriverio/build/commands/browser/pause";
import waitForExist from "webdriverio/build/commands/element/waitForExist";
import Timeout from './Timeout';
import Page from "./Page";

class Search extends Page {
    open() {
        super.open("/");
    }

    get searchBox() {
        return $("//input[@id='gh-ac']");
    }
    
    get searchBtn() {
        return $('//*[@id="gh-btn"]');
    }

    get firstItem() {
        return $('//*[@class="s-item__image-img"]')
    }

    get quantity(){
        return $("//*[@id='qtySubTxt']/span")
    }

    enterSearchItem(name: string) {
        this.syncWait(Timeout.SMALL);
        this.searchBox.setValue(name);
    }
    

    clickSearchButton() {
        this.searchBtn.click();
    }

    clickFirstItem(){
     this.firstItem.click();
    }

    getQuantity(){
        this.syncWait(Timeout.SMALL);
        return this.quantity.getText();

    }

}
export default new Search();
