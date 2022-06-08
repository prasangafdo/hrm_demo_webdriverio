const LoginPage = require('../pageobjects/login.page')
const Landing = require('../functions/Landing')
const Job = require('../functions/Job')


describe('Verify the functionality of the Job screen', ()=>{
    // it('Verify the UI components of the Job screen',async ()=>{
    //     await LoginPage.open();
    //     if(await LoginPage.inputUsername.isDisplayed()){ //Handling the login to check whether the user has already logged into the system or not
    //         await LoginPage.login('Admin', 'admin123');
    //     }
    //     await Landing.navigateToJobs();
    //     expect(Job.isJobTitleTopicDisplaying()).toBeTruthy();
    //     expect(Job.isAddButtonDisplaying()).toBeTruthy();
    //     expect(Job.isDeleteButtonDisplaying()).toBeTruthy();
    // })
    it('Verify the Admin can add a new job title', async ()=>{
        await LoginPage.open();
        if(await LoginPage.inputUsername.isDisplayed()){ //Handling the login to check whether the user has already logged into the system or not
            await LoginPage.login('Admin', 'admin123');
        }
        await Landing.navigateToJobs();
        await Job.clickOnAddJobTitleButton();
        await browser.pause(4000);
        await Job.addJobTitleWithoutJpbSpecification('test123', 'test111', 'test222')
        expect(await Job.getSaveSuccessMessage()).toHaveText('Successfully Saved')
        await browser.pause(2000)
    })
    //Add, edit, delete job titles
})