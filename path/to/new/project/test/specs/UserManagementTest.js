const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');
const UserManagement = require('../pageobjects/user.management.page')
const UserManagementAddUser = require('../pageobjects/user.management.add.user.page');

describe('HRM Demo application -- Verify User Management Screen', () => {//Scenario name comes here
    it('Verify the admin can navigate to User Management page', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        await LandingPage.lnkAdmin.click();
        await expect(UserManagement.lblSystemUsers).toBeExisting();
        // await browser.close(); <- Need to look into this further
    });

    it('Verify the admin can view existing users', async () => {
        await LoginPage.open();                              //Logging is not required, since Webdriver io continues the test from the last test case
        // await LoginPage.login('Admin', 'admin123');
        // await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        await LandingPage.lnkAdmin.click();
        await expect(UserManagement.lblUsernameTable).toBeExisting();
    });

    it('Verify the admin can search users by username', async() =>{
        await LoginPage.open();
        await LandingPage.lnkAdmin.click();
        await UserManagement.txtUsername.setValue('Admin');
        await UserManagement.btnSearch.click();
        await expect(UserManagement.lblUsernameTable).toBeExisting(); //Add a value mapping later
    });
    it('Verify Admin can add a new Enabled ESS User', async ()=>{
        await LoginPage.open();
        await LandingPage.lnkAdmin.click();
        await UserManagement.btnAdd.click();
        await expect(UserManagementAddUser.lblAddUser).toBeDisplayed();
        await UserManagementAddUser.txtEmployeeName.setValue('A');//Pass value using tab
        await browser.pause(3000);
        await browser.keys('Tab');
        await UserManagementAddUser.txtUsername.setValue('autESSEnabled01');
        UserManagementAddUser.txtPassword.setValue('test12345');
        UserManagementAddUser.txtConfirmPassword.setValue('test12345');
        await browser.pause(5000);
        UserManagementAddUser.btnSave.click();
        await browser.pause(5000);
        expect(UserManagementAddUser.lblSaveSuccessMessage).toHaveText('Successfully Saved');
        //Add a verification message
    });
});
