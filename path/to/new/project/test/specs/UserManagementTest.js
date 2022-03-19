

const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');

describe('HRM Demo application', () => {
    it('Verify the admin can navigate to User Management page', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        await LandingPage.lnkAdmin.click();
        await expect(LandingPage.lblSystemUsers).toBeExisting();
    });
});
