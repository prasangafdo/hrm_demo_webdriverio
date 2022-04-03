const Page = require('./page');


class UserManagementPage extends Page{

    get lblSystemUsers(){
        return $("//h1[text()='System Users']");
    }
    get lblUsernameTable(){
        return $("//td/a");
    }
    get txtUsername(){
        return $('#searchSystemUser_userName');
    }
    get btnSearch(){
        return $('#searchBtn');
    }
    get btnAdd(){
        return $('#btnAdd');
    }
}
//h1[@id='UserHeading' and text()='Add User']
//td[@class='left']/a

module.exports = new UserManagementPage()