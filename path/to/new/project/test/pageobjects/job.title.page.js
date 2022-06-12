const Page = require('../pageobjects/page')

class JobTitlePage {//extends Page{


    get lblJobTitle(){
        return $("//h1[text()='Job Titles']")
    }
    get btnAdd(){
        return $('#btnAdd');
    }
    get btnDelete(){
        return $('#btnDelete');
    }
    // get chkJobTitle(){
    //     return $('aaaa')
    // }
    constructor() {
        // this.chkJobTitle = $('test')
        this.chkJobTitle= 'aaa'
    }
    setJobTitle(keyword) {
        // this.chkJobTitle = $("//a[text()='",keyword,"']")
        this.chkJobTitle = keyword
        console.log('=======>',this.chkJobTitle);
    }
    getJobTitle(){
        return this.chkJobTitle
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
        return this.btnAdd.click()
    }
    async clickOnDeleteJobTitleButton(){
        return this.btnDelete.click()
    }


}


module.exports = new JobTitlePage()