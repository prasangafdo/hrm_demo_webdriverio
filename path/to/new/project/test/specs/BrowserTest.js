describe('This suite is for testing the Browser', function () {
    it('Verify the Browser Object', function () {
        browser.url('https://opensource-demo.orangehrmlive.com/');
        console.log('======> Session ID: ', browser.sessionId);
        console.log('======> Browser capabilities: ', browser.capabilities);
        console.log('======>Getting variable values from conf.js: ', browser.config.testVariable)
    }
    )

})