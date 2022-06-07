const Page = require('../pageobjects/page')

class JobTitleAddPage extends Page{

    get lblAddJobTitlePage(){
        return ('#saveHobTitleHeading')
    }
    get txtJobTitle(){
        return ('#jobTitle_jobTitle')
    }
    get txtJobDescription(){
        return ('#jobTitle_jobDescription')
    }
    get txtJobTitleNote(){
        return ('#jobTitle_note')
    }
    get fleJobSpecification(){
        return ('#jobTitle_jobSpec')
    }
    get btnSave(){
        return ('#btnSave')
    }

    async addJobTitle(title, description, note){
        await this.txtJobTitle.setValue(title)
        await this.txtJobDescription.setValue(description)
        await this.txtJobTitleNote.setValue(note)
        await this.btnSave.click()
    }

}

module.exports = new JobTitleAddPage()