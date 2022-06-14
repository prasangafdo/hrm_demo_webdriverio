const LoginPage = require('../pageobjects/login.page')
const Landing = require('../functions/Landing')
const Job = require('../functions/Job')
const JobT = require('../pageobjects/job.title.page')


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
    // it('Verify the Admin can add a new job title without a job specification', async ()=>{
    //     await LoginPage.open();
    //     if(await LoginPage.inputUsername.isDisplayed()){ //Handling the login to check whether the user has already logged into the system or not
    //         await LoginPage.login('Admin', 'admin123');
    //     }
    //     await Landing.navigateToJobs();
    //     await Job.clickOnAddJobTitleButton();
    //     await browser.pause(4000);
    //     await Job.addJobTitleWithoutJobSpecification('test123', 'test111', 'test222')
    //     expect(await Job.getSaveSuccessMessage()).toHaveText('Successfully Saved')
    //     await browser.pause(2000)
    // })
    // it('Verify the Admin can add a new job title with a job specification', async ()=>{
    //     await LoginPage.open();
    //     if(await LoginPage.inputUsername.isDisplayed()){ //Handling the login to check whether the user has already logged into the system or not
    //         await LoginPage.login('Admin', 'admin123');
    //     }
    //     await Landing.navigateToJobs();
    //     await Job.clickOnAddJobTitleButton();
    //     await browser.pause(4000);
    //     await Job.addJobTitleWithJobSpecification('test123', 'test111', 'test222')
    //     expect(await Job.getSaveSuccessMessage()).toHaveText('Successfully Saved')
    //     await browser.pause(2000)
    // })

    it('Verify the Admin can edit a job title', async ()=>{
        await LoginPage.open();
            if(await LoginPage.inputUsername.isDisplayed()){ //Handling the login to check whether the user has already logged into the system or not
                await LoginPage.login('Admin', 'admin123');
            }
            await Landing.navigateToJobs();
        await Job.setJobTitle('Engineer')
        Job.clickOnJobTitle()
        //Add a verification point to see if the user has navigated to the edit job titles page
        await Job.clickOnEditJobTitleButton()
        await Job.editJobTitleWithoutJobSpecification('test123 updated', 'test description updated', 'test note upd')
        await browser.pause(12000)
        //Add a verification point to check the save success message
    })
    // Add, edit, delete job titles
})