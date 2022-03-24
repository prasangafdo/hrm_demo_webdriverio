const Page = require('./page');


class UserManagementPage extends Page{

    get lblSystemUsers(){
        return $("//h1[text()='System Users']");
    }

}

//td[@class='left']/a

module.exports = new UserManagementPage()