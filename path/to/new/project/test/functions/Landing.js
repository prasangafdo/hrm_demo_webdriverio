const LandingPage = require('../pageobjects/landing.page');

class Landing {
    async navigateToJobs(){
        await LandingPage.navigateToJobs();
    }
}

module.exports = new Landing();