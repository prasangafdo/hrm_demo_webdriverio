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
        this.lnkJobTitle = $("//a[text()='"+keyword+"']")
        // this.lnkJobTitle = await element
            Promise.resolve(this.lnkJobTitle).then(
                (value) =>
                   {
                       let val = value
                       // console.log('ccccccccc=======>',val)
                       this.lnkJobTitle = $("//a[text()='"+val+"']")
                       return val
                   }
            );
        // console.log('=======ss>',element);
    }
    // getJobTitle(){
    //     Promise.resolve(this.lnkJobTitle).then(
    //         (value) =>
    //            {
    //                let val = value
    //                // console.log('ccccccccc=======>',val)
    //                this.lnkJobTitle = $("//a[text()='"+val+"']")
    //                return val
    //            }
    //     );
    // }

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
    clickOnJobTitle(){
        // this.getJobTitle()
        console.log('11111111111111111111111',this.lnkJobTitle)
        this.lnkJobTitle.click()
    }


}


module.exports = new JobTitlePage()