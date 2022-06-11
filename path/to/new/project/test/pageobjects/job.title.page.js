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
    get chkJobTitle(){
        return $('aaaa')
    }
    constructor() {
        this.variable = 1;
    }
    someOtherFunction() {
        console.log(this.variable + 1); // 2
    }


    async const student = {

        // data property
        firstName: 'Monica',

        // accessor property(getter)
        get getName() {
            return this.firstName;
        }
    };


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