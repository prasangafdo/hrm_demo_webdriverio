const LandingPage = require('../pageobjects/landing.page');
const JobTitles = require('../pageobjects/job.title.page');

class Job {
    async isJobTitleTopicDisplaying(){
        return JobTitles.lblJobTitle.isDisplayed()
    }
    async isAddButtonDisplaying(){
        return JobTitles.btnAdd.isDisplayed()
    }
    async isDeleteButtonDisplaying(){
        return JobTitles.btnDelete.isDisplayed()
    }
}
module.exports = new Job()
