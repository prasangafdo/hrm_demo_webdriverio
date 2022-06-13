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
    // constructor() {
    //     // this.chkJobTitle = $('test')
    //     this.lnkJobTitle = 'aaa'
    // }
    async setJobTitle(keyword) {
        // this.chkJobTitle = $("//a[text()='",keyword,"']")
        // this.chkJobTitle = keyword
        let element = $("//a[text()='"+keyword+"']")
        this.lnkJobTitle = await element
        // console.log('=======>',await this.lnkJobTitle);
    }
    async getJobTitle(){
        let val
        Promise.resolve(this.lnkJobTitle).then(
            (value) =>
               {
                   let val = value
                   console.log('ccccccccc=======>',val)
                   return val
               }


        );
        return val
    }

    async isJobTitleTopicDisplaying(){
        return await this.lblJobTitle.isDisplayed()
    }
    async isAddButtonDisplaying(){
        return await this.btnAdd.isDisplayed()
    }
    async isDeleteButtonDisplaying(){
        return await this.btnDelete.isDisplayed()
    }
    async clickOnAddJobTitleButton(){
        return await this.btnAdd.click()
    }
    async clickOnDeleteJobTitleButton(){
        return await this.btnDelete.click()
    }
    async clickOnJobTitle(){
        let title = await this.getJobTitle()
        title.click()
    }


}


module.exports = new JobTitlePage()