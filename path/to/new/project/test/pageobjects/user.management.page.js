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
        return $('((//tr[@class="odd"])[1]/td[@class="left"])[1]/a');
    }
    get chkFirstCheckbox(){
        return $("(//tbody//input[@type='checkbox'])[1]");
    }
    get btnDelete(){
        return $('#btnDelete');
    }
    get lblDeletePopupMessage(){
        return $("//div[@class='modal-body']//p[text()='Delete records?']");
    }
    get btnDeleteOKPopup(){
        return $('#dialogDeleteBtn');
    }
    get lblDeleteSuccessfulMessage(){
        return $("//div[@class='message success fadable']");
    }
    get drpDwnUserRole(){
        return $('#searchSystemUser_userType');
    }
    get lblFirstRowSearchData(){
        return $("(//table[@id='resultTable']//tbody/tr)[1]");
    }

    async searchUserByEmployeeName(keyword){
        await this.txtUsername.setValue(keyword);
        await this.btnSearch.click();
    }
    async isUsernameDisplayingProperly(keyword){
        return await this.lblCellUsername.getText() === keyword;
    }
    async selectAdminFromDropDown(){
        console.log('------------------------------------',await this.drpDwnUserRole.getValue())
        await this.drpDwnUserRole.selectByAttribute('value','1'); //1 = Admin
        console.log('------------------------------------',await this.drpDwnUserRole.getValue())
    }
    async selectESSFromDropDown(){
        console.log('------------------------------------',await this.drpDwnUserRole.getValue())
        await this.drpDwnUserRole.selectByAttribute('value','2'); //2 = ESS
        console.log('------------------------------------',await this.drpDwnUserRole.getValue())
    }

}


//h1[@id='UserHeading' and text()='Add User']
//td[@class='left']/a

module.exports = new UserManagementPage()