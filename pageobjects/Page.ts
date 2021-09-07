import Timeout from './Timeout';
export default class Page {

    syncWait(t:Timeout) {
        browser.pause(t);
    };
    
    open(path: string) {
        browser.url(path);
    }
}
