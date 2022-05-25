const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');
const UserManagement = require('../functions/user.management')
const UserManagementAddUser = require('../pageobjects/user.management.add.user.page');
const UserManagementEditUser = require('../pageobjects/user.management.edit.user.page')

describe('HRM Demo application - Verify User Management Screen', () => {//Scenario name comes here
    it('Verify the admin can navigate to User Management page', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        // await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        // await LandingPage.lnkAdmin.click();
        // await expect(UserManagement.lblSystemUsers).toBeExisting();
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

    // it('Verify the Admin can add a new Disabled Admin user', async()=> {
    //     await LoginPage.open();
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.btnAdd.click();
    //     await expect(UserManagementAddUser.lblAddUser).toBeDisplayed();
    //     await UserManagementAddUser.selectAdminFromDropDown();
    //     await UserManagementAddUser.txtEmployeeName.setValue('A');//Pass value using tab
    //     await browser.pause(3000);
    //     await browser.keys('Tab');
    //     await UserManagementAddUser.txtUsername.setValue('autAdminDisabled01');
    //     await UserManagementAddUser.selectDisabledFromDropDown();
    //     UserManagementAddUser.txtPassword.setValue('test12345');
    //     UserManagementAddUser.txtConfirmPassword.setValue('test12345');
    //     await browser.pause(5000);
    //     UserManagementAddUser.btnSave.click();
    //     await browser.pause(5000);
    //     expect(UserManagementAddUser.lblSaveSuccessMessage).toHaveText('Successfully Saved');
    // });

    // it('Verify the Admin can delete a user', async()=>{
    //     await LoginPage.open();
    //     await LandingPage.lnkAdmin.click();
    //     // await UserManagement.btnAdd.click();
    //     // await UserManagement.searchUserByEmployeeName('autESSEnabled01');
    //     // let keyword = 'autAdminDisabled01';
    //     let keyword = 'dilshad';
    //     await UserManagement.searchUserByEmployeeName(keyword);
    //     // console.log("=============>",await UserManagement.lblCellUsername.getText(), keyword);
    //     await expect(UserManagement.isUsernameDisplayingProperly()).toBeTruthy();
    //     // await expect(await UserManagement.lblCellUsername.getText()).toHaveTextContaining(keyword);
    //     // console.log("=============>",await UserManagement.lblCellUsername.getText());
    //     await UserManagement.chkFirstCheckbox.click();
    //     await UserManagement.btnDelete.click();
    //     await expect(UserManagement.lblDeletePopupMessage).toBeDisplayed();
    //     await UserManagement.btnDeleteOKPopup.click();
    //     await expect(UserManagement.lblDeleteSuccessfulMessage).toHaveTextContaining('Successfully Deleted');
    //     await browser.pause(2000);
    // });

    // it('Verify the Admin can edit a username of an employee', async ()=>{
    //     let keyword = 'dilshad';
    //     await UserManagement.searchUserByEmployeeName(keyword);
    //     await expect(UserManagement.isUsernameDisplayingProperly()).toBeTruthy();
    //     await UserManagementEditUser.lnkUser.click();
    //     await UserManagementEditUser.btnEdit.click();
    //     await UserManagementEditUser.txtUsername.setValue('Username Updated');
    //     await browser.pause(3000);
    //     await UserManagementEditUser.btnSave.click();
    //     await expect(UserManagementEditUser.lblUpdateSuccessfulMessage).toHaveTextContaining('Successfully Updated');
    //     await browser.pause(3000)
    //
    // });
    //
    // it('Verify the Admin can edit user role of an employee from ESS to Admin', async ()=>{
    //     await UserManagement.searchUserByEmployeeName(keyword);
    //     await expect(UserManagement.isUsernameDisplayingProperly()).toBeTruthy();
    //     await UserManagementEditUser.lnkUser.click();
    //     await UserManagementEditUser.btnEdit.click();
    //     await UserManagementEditUser.selectAdminFromDropDown();
    // });

    //Verify the Admin can disable a user

    // it('Verify the Admin can search ESS users', async ()=>{
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.selectESSFromDropDown();
    //     await UserManagement.btnSearch.click();
    //     await browser.pause(3000)
    //     console.log('============>',await UserManagement.lblFirstRowSearchData.getText());
    //     expect(await UserManagement.lblFirstRowSearchData).toHaveTextContaining('ESS')
    // });

    // it('Verify the Admin can search Admin users', async ()=>{
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.selectAdminFromDropDown();
    //     await UserManagement.btnSearch.click();
    //     await browser.pause(3000)
    //     console.log('============>',await UserManagement.lblFirstRowSearchData.getText());
    //     expect(await UserManagement.lblFirstRowSearchData).toHaveTextContaining('Admin')
    // });

    // it('Verify the Admin can search Disabled users', async()=>{
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.selectDisabledFromDropDown();
    //     await UserManagement.btnSearch.click();
    //     expect(await UserManagement.lblFirstRowSearchData).toHaveTextContaining('Disabled');
    //     // await browser.pause(5000);
    // });
    // it('Verify the Admin can search Enabled users', async()=>{
    //     await LandingPage.lnkAdmin.click();
    //     await UserManagement.selectEnabledFromDropDown();
    //     await UserManagement.btnSearch.click();
    //     expect(await UserManagement.lblFirstRowSearchData).toHaveTextContaining('Enabled');
    //     // await browser.pause(5000);
    // });
    it('Verify the Admin can sort table data in ascending order', async ()=>{
        await LandingPage.lnkAdmin.click();
        await browser.pause(5000);//Sort asc desc
        expect(await UserManagement.sortUsernameInAscendingOrder()).toBeTruthy();
        expect(await UserManagement.sortUserRoleInAscendingOrder()).toBeTruthy();
        expect(await UserManagement.sortEmployeeNameInAscendingOrder()).toBeTruthy();


    });

});
