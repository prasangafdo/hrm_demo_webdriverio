/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/


module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://opensource-demo.orangehrmlive.com/${path}`)
        // https://opensource-demo.orangehrmlive.com/
    }
    get mainNavigationBar(){
        return $('#mainMenuFirstLevelUnorderedList');
    }
    get btnAdminNavigationPanel(){
        return $("//a[@id='menu_admin_viewAdminModule']//parent::li");
    }
    get drpDwnJobNavigationPanel(){
        return $("//a[@id='menu_admin_Job']//parent::li");
    }
    get lnkJobTitlesNavigationPanel(){
        return $('#menu_admin_viewJobTitleList');
    }

}
