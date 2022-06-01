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
}