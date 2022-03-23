const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');
const UserManagement = require('../pageobjects/user.management.page')

describe('HRM Demo application -- Verify User Management Screen', () => {//Scenario name comes here
    it('Verify the admin can navigate to User Management page', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        await LandingPage.lnkAdmin.click();
        await expect(UserManagement.lblSystemUsers).toBeExisting();
    });

    // it('Verify the admin can view existing users', async () => {
    //     await LoginPage.open();
    //     await LoginPage.login('Admin', 'admin123');
    //     await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
    //     await LandingPage.lnkAdmin.click();
    //     await expect(UserManagement.lblSystemUsers).toBeExisting();
    // });
});
