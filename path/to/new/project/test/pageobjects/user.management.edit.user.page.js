const Page = require('./page');


class UserManagementEditUserPage extends Page{

    get lnkUser(){
    return $('//td/a');
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