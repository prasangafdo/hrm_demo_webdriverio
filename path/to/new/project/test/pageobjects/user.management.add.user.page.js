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


}

//td[@class='left']/a

module.exports = new UserManagementAddUserPage()