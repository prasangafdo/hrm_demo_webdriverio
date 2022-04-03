const Page = require('./page');


class UserManagementAddUserPage extends Page{

    get lblAddUser(){
        return $("//h1[@id='UserHeading' and text()='Add User']");
    }
}

//td[@class='left']/a

module.exports = new UserManagementAddUserPage()