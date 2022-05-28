const userManagementPage = require('../pageobjects/user.management.page')

class UserManagement {

    async sortUsernameInAscendingOrder(){
       return await userManagementPage.sortUsernameInAscendingOrder();
    }
    async sortUserRoleInAscendingOrder(){
        return await userManagementPage.sortUserRoleInAscendingOrder();
    }
    async sortEmployeeNameInAscendingOrder(){
        return await userManagementPage.sortEmployeeNameInAscendingOrder();
    }
    async sortStatusInAscendingOrder(){
        return await userManagementPage.sortStatusInAscendingOrder();
    }
    async sortUsernameInDescendingOrder(){
        return await userManagementPage.sortUsernameInDescendingOrder();
    }
    async sortUserRoleInDescendingOrder(){
        return await userManagementPage.sortUserRoleInDescendingOrder();
    }
    async sortEmployeeNameInDescendingOrder(){
        return await userManagementPage.sortEmployeeNameInDescendingOrder();
    }
    async sortStatusInDescendingOrder(){
        return await userManagementPage.sortStatusInDescendingOrder();
    }
    async refreshPage(){
        await userManagementPage.refreshPage();
    }





}

module.exports = new UserManagement();