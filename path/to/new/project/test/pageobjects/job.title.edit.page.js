const Page = require('../pageobjects/page')

class JobTitleEditPage extends Page{

    get lblEditJobTitlePage(){
        return $('#saveHobTitleHeading')
    }
    get txtJobTitle(){
        return $('#jobTitle_jobTitle')
    }
    get txtJobDescription(){
        return $('#jobTitle_jobDescription')
    }
    get txtJobTitleNote(){
        return $('#jobTitle_note')
    }
    get fleJobSpecification(){
        return $('#jobTitle_jobSpec')
    }
    get btnSave(){
        return $('#btnSave')
    }
    get lblSaveSuccessMessage(){
        return $("//div[@class='message success fadable']");
    }

    async clickOnEditJobTitleButton(){
        await this.btnSave.click()
    }

    async editJobTitleWithoutJobSpecification(title, description, note){
        await this.txtJobTitle.setValue(title)
        await this.txtJobDescription.setValue(description)
        await this.txtJobTitleNote.setValue(note)
        // await this.fleJobSpecification.setValue("C:\\Users\\Prasanga Fernando\\Desktop")
        await this.btnSave.click()
    }
    // async addJobTitleWithJobSpecification(title, description, note){
    //     await this.txtJobTitle.setValue(title)
    //     await this.txtJobDescription.setValue(description)
    //     await this.txtJobTitleNote.setValue(note)
    //     await this.fleJobSpecification.setValue("C:\\Users\\Prasanga Fernando\\Desktop")
    //     await this.btnSave.click()
    // }
    async getSaveSuccessMessage(){
        return await this.lblSaveSuccessMessage.getText()
    }

}

module.exports = new JobTitleEditPage()