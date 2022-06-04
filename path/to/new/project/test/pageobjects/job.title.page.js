const Page = require('../pageobjects/page')

class JobTitlePage extends Page{

    get lblJobTitle(){
        return $("//h1[text()='Job Titles']")
    }
    get btnAdd(){
        return $('#btnAdd');
    }
    get btnDelete(){
        return $('#btnDelete');
    }

    async isJobTitleTopicDisplaying(){
        return this.lblJobTitle.isDisplayed()
    }
    async isAddButtonDisplaying(){
        return this.btnAdd.isDisplayed()
    }
    async isDeleteButtonDisplaying(){
        return this.btnDelete.isDisplayed()
    }
    async clickOnAddJobTitleButton(){
        return this.btnAdd()
    }
    async clickOnDeleteJobTitleButton(){
        return this.btnDelete()
    }


}

module.exports = new JobTitlePage()