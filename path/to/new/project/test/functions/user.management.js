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


}

module.exports = new UserManagement();