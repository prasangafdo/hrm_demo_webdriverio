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
        const lnkJobTitle={
            title: 'aaa',
            async asetJobTitle(keyword) {
                // this.chkJobTitle = $("//a[text()='",keyword,"']")
                // this.chkJobTitle = keyword
                this.lnkJobTitle = $("//a[text()='"+keyword+"']")
                console.log('=======>',await this.lnkJobTitle);
            },
            async agetJobTitle(){
                return await this.lnkJobTitle
            }
        }

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
        await title.click()
    }


}


module.exports = new JobTitlePage()