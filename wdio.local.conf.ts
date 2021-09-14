import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            maxInstances: 1,
            'goog:chromeOptions': {
                args: ["incognito"]
            },
            // @ts-expect-error fixed in https://github.com/webdriverio/webdriverio/pull/6473
            // 'wdio:devtoolsOptions': {
            //     headless: false,
            // }
        }],
        reporters: [['allure', {
            // test results will generate in the directory mentioned below
                outputDir: 'allure-results', 
            }]]
    }
}
