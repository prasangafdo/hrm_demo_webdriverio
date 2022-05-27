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
    get drpDwnStatus(){
        return $('#searchSystemUser_status');
    }
    get lblUsernameColumnHeader(){
        return $("//a[text()='Username']/parent::th");
    }
    get lblUsernameColumnValues(){
        return $$("//a[contains(@href, 'saveSystemUser?userId=')]");
    }
    get lblUserRoleColumnValues(){
        return $$("//tr/td[3]");
    }
    get lblUserRoleColumnHeader(){
        return $("//a[text()='User Role']/parent::th");
    }
    get lblEmployeeNameColumnValues(){
        return $$("//tr/td[4]");
    }
    get lblEmployeeNameColumnHeader(){
        return $("//a[text()='Employee Name']/parent::th");
    }
    get lblStatusColumnValues(){
        return $$("//tr/td[5]");
    }
    get lblStatusColumnHeader(){
        return $("//a[text()='Status']/parent::th");
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
    async selectDisabledFromDropDown(){
        await this.drpDwnStatus.selectByAttribute('value', 0);//0 = Disabled
        console.log('------------------------------------',await this.drpDwnStatus.getValue())
    }
    async selectEnabledFromDropDown(){
        await this.drpDwnStatus.selectByAttribute('value', 1);
        console.log('------------------------------------',await this.drpDwnStatus.getValue())
    }
    async sortUsernameInAscendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userNameColumnValues1 = await this.lblUsernameColumnValues;
        for (let item of userNameColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblUsernameColumnHeader.click();
        let userNameColumnValues2 = await this.lblUsernameColumnValues;
        for (let item of userNameColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        });
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortUserRoleInAscendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userRoleColumnValues1 = await this.lblUserRoleColumnValues;
        for (let item of userRoleColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblUserRoleColumnHeader.click();
        let userRoleColumnValues2 = await this.lblUserRoleColumnValues;
        for (let item of userRoleColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        });
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortEmployeeNameInAscendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userRoleColumnValues1 = await this.lblEmployeeNameColumnValues;
        for (let item of userRoleColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblEmployeeNameColumnHeader.click();
        let userRoleColumnValues2 = await this.lblEmployeeNameColumnValues;
        for (let item of userRoleColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        });
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortStatusInAscendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userRoleColumnValues1 = await this.lblStatusColumnValues;
        for (let item of userRoleColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblStatusColumnHeader.click();
        let userRoleColumnValues2 = await this.lblStatusColumnValues;
        for (let item of userRoleColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        });
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortUsernameInDescendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userNameColumnValues1 = await this.lblUsernameColumnValues;
        for (let item of userNameColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblUsernameColumnHeader.click();
        let userNameColumnValues2 = await this.lblUsernameColumnValues;
        for (let item of userNameColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        }).reverse();
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortUserRoleInDescendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userRoleColumnValues1 = await this.lblUserRoleColumnValues;
        for (let item of userRoleColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblUserRoleColumnHeader.click();
        let userRoleColumnValues2 = await this.lblUserRoleColumnValues;
        for (let item of userRoleColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        }).reverse();
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortEmployeeNameInDescendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userRoleColumnValues1 = await this.lblEmployeeNameColumnValues;
        for (let item of userRoleColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblEmployeeNameColumnHeader.click();
        let userRoleColumnValues2 = await this.lblEmployeeNameColumnValues;
        for (let item of userRoleColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        }).reverse();
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }
    async sortStatusInDescendingOrder(){
        let gatheredValues = [];
        let sortedValues = []; //This will contain already sorted values by front end

        let userRoleColumnValues1 = await this.lblStatusColumnValues;
        for (let item of userRoleColumnValues1){
            gatheredValues.push(await item.getText());
            // console.log(await item.getText());
        }

        await this.lblStatusColumnHeader.click();
        let userRoleColumnValues2 = await this.lblStatusColumnValues;
        for (let item of userRoleColumnValues2){
            sortedValues.push(await item.getText());
            // console.log(await item.getText());
        }
        console.log(gatheredValues)
        gatheredValues.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase()); //Sorting in case insensitive manner
        }).reverse();
        console.log(gatheredValues)
        return (JSON.stringify(gatheredValues)===JSON.stringify(sortedValues));
    }

}


//h1[@id='UserHeading' and text()='Add User']
//td[@class='left']/a

module.exports = new UserManagementPage()