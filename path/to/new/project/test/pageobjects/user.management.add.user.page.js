const Page = require('./page');


class UserManagementAddUserPage extends Page{

    get lblAddUser(){
        return $("//h1[@id='UserHeading' and text()='Add User']");
    }
    get txtEmployeeName(){
        return $('#systemUser_employeeName_empName');
    }
    get txtUsername(){
        return $('#systemUser_userName');
    }
    get txtPassword(){
        return $('#systemUser_password');
    }
    get txtConfirmPassword(){
        return $('#systemUser_confirmPassword');
    }
    get btnSave(){
        return $('#btnSave'); //Using name locator - will look into it later
    }
    get lblSaveSuccessMessage(){
        return $("//div[@class='message success fadable']");
    }

}

//td[@class='left']/a

module.exports = new UserManagementAddUserPage()