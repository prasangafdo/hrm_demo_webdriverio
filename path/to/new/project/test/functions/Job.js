const LandingPage = require('../pageobjects/landing.page');
const JobTitles = require('../pageobjects/job.title.page');

class Job {
    async isJobTitleTopicDisplaying(){
        return JobTitles.isJobTitleTopicDisplaying()
    }
    async isAddButtonDisplaying(){
        return JobTitles.isAddButtonDisplaying()
    }
    async isDeleteButtonDisplaying(){
        return JobTitles.isDeleteButtonDisplaying()
    }
    async clickOnAddJobTitleButton(){
        return JobTitles.clickOnAddJobTitleButton()
    }
    async clickOnDeleteJobTitleButton(){
        return JobTitles.clickOnDeleteJobTitleButton()
    }

}
module.exports = new Job()
