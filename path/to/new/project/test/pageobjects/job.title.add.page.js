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

}

module.exports = new JobTitleAddPage()