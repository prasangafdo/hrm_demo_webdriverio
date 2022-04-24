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
        return $('#btnSave'); //Using id locator
    }
    get drpDwnUserRole(){
        return $('#systemUser_userType');
    }
    get lblSaveSuccessMessage(){
        return $("//div[@class='message success fadable']");
    }
    get drpDwnStatus(){
        return $('#systemUser_status');
    }

    async selectAdminFromDropDown(){
        console.log('------------------------------------',await this.drpDwnUserRole.getValue())
        await this.drpDwnUserRole.selectByAttribute('value','1'); //1 = Admin
        console.log('------------------------------------',await this.drpDwnUserRole.getValue())
    }

    async selectDisabledFromDropDown(){
        await this.drpDwnStatus.selectByVisibleText('Disabled');
    }

}

//td[@class='left']/a

module.exports = new UserManagementAddUserPage()