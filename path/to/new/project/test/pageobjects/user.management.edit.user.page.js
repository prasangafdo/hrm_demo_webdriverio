const Page = require('./page');


class UserManagementEditUserPage extends Page{

    get lnkUser(){
    return $('//td/a');
    }
    get btnEdit(){
        return $("//input[@value='Edit']");
    }
    get txtUsername(){
        return $('#systemUser_userName');
    }
    get btnSave(){
        return $('#btnSave'); //Using id locator
    }
    get drpDwnUserRole(){
        return $('#systemUser_userType');
    }
    get lblUpdateSuccessfulMessage(){
        return $("//div[@class='message success fadable']");
    }

}
//
//     async selectAdminFromDropDown(){
//         console.log('------------------------------------',await this.drpDwnUserRole.getValue())
//         await this.drpDwnUserRole.selectByAttribute('value','1'); //1 = Admin
//         console.log('------------------------------------',await this.drpDwnUserRole.getValue())
//     }
//
//     async selectDisabledFromDropDown(){
//         await this.drpDwnStatus.selectByVisibleText('Disabled');
//     }
//
// }

//td[@class='left']/a

module.exports = new UserManagementEditUserPage()