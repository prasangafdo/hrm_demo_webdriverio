

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

    async navigateToJobs(){
        await this.mainNavigationBar.moveTo();
        await this.btnAdminNavigationPanel.moveTo();
        await this.drpDwnJobNavigationPanel.moveTo();
        await this.lnkJobTitlesNavigationPanel.click();
        await browser.pause(5000);
    }

}

module.exports = new LandingPage();
