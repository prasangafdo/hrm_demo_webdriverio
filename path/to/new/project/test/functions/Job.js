const LandingPage = require('../pageobjects/landing.page');
const JobTitles = require('../pageobjects/job.title.page');
const AddJobTitles = require('../pageobjects/job.title.add.page');

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
    async addJobTitleWithoutJpbSpecification(title, description, note){
        await AddJobTitles.addJobTitleWithoutJpbSpecification(title, description, note)
    }
    async getSaveSuccessMessage(){
        return AddJobTitles.lblSaveSuccessMessage.getText()
    }

}
module.exports = new Job()
