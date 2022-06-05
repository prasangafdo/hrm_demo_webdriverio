const Page = require('../pageobjects/page')

class JobTitleAddPage extends Page{

    get lblAddJobTitlePage(){
        return ('#saveHobTitleHeading')
    }

}

module.exports = new JobTitleAddPage()