const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');

describe('HRM Demo application', () => {
    it('Verify the admin can login with valid credentials', async () => {
        await LoginPage.open();
        await expect(browser).toHaveTitle('OrangeHRM')
        await LoginPage.login('Admin', 'admin123');
        await expect(LandingPage.lblHRMDemoLogo).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


