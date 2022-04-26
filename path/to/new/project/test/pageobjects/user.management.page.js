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
    get lblCellUsername(){
        return $('((//tr[@class="odd"])[1]/td[@class="left"])[1]');
    }
    get chkFirstCheckbox(){
        return $("(//tbody//input[@type='checkbox'])[1]");
    }
    get btnDelete(){
        return $('.btnDelete');
    }

    async searchUserByEmployeeName(keyword){
        await this.txtUsername.setValue(keyword);
        await this.btnSearch.click();
    }

}


//h1[@id='UserHeading' and text()='Add User']
//td[@class='left']/a

module.exports = new UserManagementPage()