const LoginPage = require('../pageobjects/login.page')
const Job = require('../functions/Job')


describe('Verify the functionality of the Job screen', ()=>{
    it('Verify the UI components of the Job screen',async ()=>{
        await LoginPage.open();
        if(await LoginPage.inputUsername.isDisplayed()){ //Handling the login to check whether the user has already logged into the system or not
            await LoginPage.login('Admin', 'admin123');
        }
        await Landing.navigateToJobs();
        //Add navigation to job titles


    })
})