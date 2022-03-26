

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lblHRMDemoLogo() {
        return $("//img[@alt='OrangeHRM']");
    }

    get lnkAdmin(){
        return $("//a[@id='menu_admin_viewAdminModule']");
    }

}

module.exports = new LandingPage();
