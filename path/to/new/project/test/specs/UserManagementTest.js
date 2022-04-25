const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');
const UserManagement = require('../pageobjects/user.management.page')
const UserManagementAddUser = require('../pageobjects/user.management.add.user.page');

describe('HRM Demo application - Verify User Management Screen', () => {//Scenario name comes here
    it('Verify the admin can navigate to User Management page', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        await LandingPage.lnkAdmin.click();
        await expect(UserManagement.lblSystemUsers).toBeExisting();
        // await browser.close(); <- Need to look into this further
    });
    //
    // it('Verify the admin can view existing users', async () => {
    //     await LoginPage.open();                              //Logging is not required, since Webdriver io continues the test from the last test case
    //     // await LoginPage.login('Admin', 'admin123');
    //     // await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
    //     await LandingPage.lnkAdmin.click();
    //     await expect(UserManagement.lblUsernameTable).toBeExisting();
    // });
    //
    // it('Verify the admin can search users by username', async() =>{
    //     await LoginPage.open();
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.txtUsername.setValue('Admin');
    //     await UserManagement.btnSearch.click();
    //     await expect(UserManagement.lblUsernameTable).toBeExisting(); //Add a value mapping later
    // });
    //
    // it('Verify Admin can add a new Enabled ESS User', async ()=>{
    //     await LoginPage.open();
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.btnAdd.click();
    //     await expect(UserManagementAddUser.lblAddUser).toBeDisplayed();
    //     await UserManagementAddUser.txtEmployeeName.setValue('A');//Pass value using tab
    //     await browser.pause(3000);
    //     await browser.keys('Tab');
    //     await UserManagementAddUser.txtUsername.setValue('autESSEnabled01');
    //     UserManagementAddUser.txtPassword.setValue('test12345');
    //     UserManagementAddUser.txtConfirmPassword.setValue('test12345');
    //     await browser.pause(5000);
    //     UserManagementAddUser.btnSave.click();
    //     await browser.pause(5000);
    //     expect(UserManagementAddUser.lblSaveSuccessMessage).toHaveText('Successfully Saved');
    // });
    //
    // it('Verify the Admin can search users by employee name', async ()=>{
    //     await LoginPage.open();
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.searchUserByEmployeeName('autESSEnabled01');
    //     await browser.pause(5000);
    //     //Add a verification point
    // });

    // it('Verify the Admin can add a new Enabled Admin user', async () => {
    //     await LoginPage.open();
    //     await LoginPage.login('Admin', 'admin123');
    //     await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.btnAdd.click();
    //     await expect(UserManagementAddUser.lblAddUser).toBeDisplayed();
    //     await UserManagementAddUser.txtEmployeeName.setValue('A');//Pass value using tab
    //     await browser.pause(3000);
    //     await browser.keys('Tab');
    //     await UserManagementAddUser.txtUsername.setValue('autAdminEnabled01');
    //     UserManagementAddUser.txtPassword.setValue('test12345');
    //     UserManagementAddUser.txtConfirmPassword.setValue('test12345');
    //     await UserManagementAddUser.selectAdminFromDropDown();
    //     await browser.pause(5000);
    //     UserManagementAddUser.btnSave.click();
    //     await browser.pause(5000);
    //     expect(UserManagementAddUser.lblSaveSuccessMessage).toHaveText('Successfully Saved');
    //     await browser.pause(6000);
    // });

    // it('Verify the Admin can add a new Disabled ESS user', async()=> {
    //     await LoginPage.open();
    //         await LandingPage.lnkAdmin.click();
    //         await UserManagement.btnAdd.click();
    //         await expect(UserManagementAddUser.lblAddUser).toBeDisplayed();
    //         await UserManagementAddUser.txtEmployeeName.setValue('A');//Pass value using tab
    //         await browser.pause(3000);
    //         await browser.keys('Tab');
    //         await UserManagementAddUser.txtUsername.setValue('autESSDisabled01');
    //         await UserManagementAddUser.selectDisabledFromDropDown();
    //         UserManagementAddUser.txtPassword.setValue('test12345');
    //         UserManagementAddUser.txtConfirmPassword.setValue('test12345');
    //         await browser.pause(5000);
    //         UserManagementAddUser.btnSave.click();
    //         await browser.pause(5000);
    //         expect(UserManagementAddUser.lblSaveSuccessMessage).toHaveText('Successfully Saved');
    // });

    it('Verify the Admin can add a new Disabled Admin user', async()=> {
        await LoginPage.open();
        await LandingPage.lnkAdmin.click();
        await UserManagement.btnAdd.click();
        await expect(UserManagementAddUser.lblAddUser).toBeDisplayed();
        await UserManagementAddUser.selectAdminFromDropDown();
        await UserManagementAddUser.txtEmployeeName.setValue('A');//Pass value using tab
        await browser.pause(3000);
        await browser.keys('Tab');
        await UserManagementAddUser.txtUsername.setValue('autAdminDisabled01');
        await UserManagementAddUser.selectDisabledFromDropDown();
        UserManagementAddUser.txtPassword.setValue('test12345');
        UserManagementAddUser.txtConfirmPassword.setValue('test12345');
        await browser.pause(5000);
        UserManagementAddUser.btnSave.click();
        await browser.pause(5000);
        expect(UserManagementAddUser.lblSaveSuccessMessage).toHaveText('Successfully Saved');
    });

    it('Verify the Admin can delete a user', async()=>{
        await LoginPage.open();
        await LandingPage.lnkAdmin.click();
        await UserManagement.btnAdd.click();
        await UserManagement.searchUserByEmployeeName('autESSEnabled01');
        
    });
});
