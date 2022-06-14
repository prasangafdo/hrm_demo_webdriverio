const LandingPage = require('../pageobjects/landing.page');
const JobTitles = require('../pageobjects/job.title.page');
const AddJobTitles = require('../pageobjects/job.title.add.page');
const EditJobTitles = require('../pageobjects/job.title.edit.page');

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
    async addJobTitleWithoutJobSpecification(title, description, note){
        await AddJobTitles.addJobTitleWithoutJobSpecification(title, description, note)
    }
    async addJobTitleWithJobSpecification(title, description, note){
        await AddJobTitles.addJobTitleWithJobSpecification(title, description, note)
    }
    async getSaveSuccessMessage(){
        return AddJobTitles.lblSaveSuccessMessage.getText()
    }
    async setJobTitle(keyword){
        await JobTitles.setJobTitle(keyword)
    }
    async getJobTitle(){
        return JobTitles.getJobTitle()
    }
    clickOnJobTitle(){
        JobTitles.clickOnJobTitle()
    }


    async editJobTitleWithoutJobSpecification(title, description, note){
        await EditJobTitles.editJobTitleWithoutJobSpecification(title, description, note)
    }


}
module.exports = new Job()
