//Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/

//import homePage from '../pages/home-page.js';
import HomePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {
    //using hooks
    //Before hook runs once and get used in all the tests
    before( async()=>{
        console.log("BEFORE HOOK");
        //await HomePage.open();
    })

    //BeforeEach hook runs for every test
    beforeEach(async()=>{
        console.log("Before Each Hook");
        await HomePage.open();
    })

    //After hook runs once at the end of all the tests
    after( async()=>{
        console.log("After HOOK");
        //await HomePage.open();
    })

    //AfterEach hook runs at the end of every test
    afterEach(async()=>{
        console.log("After Each Hook");
        //await HomePage.open();
    })



    it('Open URL and Assert Title', async () => {
        allureReporter.addSeverity("Minor");

        //Open URL
        //await HomePage.open();
        //await HomePage.open();
        
        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
       
        
    })

    it('Go To About and Asert Title', async () => {
        //open about
        await browser.url('https://practice.automationbro.com/about/')

        //Assert Title - About – Practice E-Commerce Site
        //Assert Url - About – Practice E-Commerce Site
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')
    })

    it('Get STarted', async () => {
        //Open browser
       // await HomePage.open();
        //Assert url contains Get started 
        //await $('#get-started').click();
        await HomePage.urlContainAssertion.click();
        await expect(browser).toHaveUrlContaining('get-started');


    })

    it('Logo Check', async () => {
        allureReporter.addFeature("Logo Check");
        //Open Browser
        //await HomePage.open();
        //clicl on logo and verify link not containing get started
        //await $('//*[@id="masthead"]/div/div/div/div/a').click();
        await HomePage.logoImage.click();
        await expect(browser).not.toHaveUrlContaining('get-started');

    })
    //finding element and value of it then assign to some variable then assert with original value
    // it('Find Heading element and assert the text', async() => {
    //     //Open Browser
    //     await HomePage.open();
    //     //Get the heading element and asssign to variable
    //     const headingElement = await $('.elementor-widget-container h1');
    //     //Get the value of the text and assign to variabl
    //     const headingText = await headingElement.getText();
    //     //assert the text
    //     await expect(headingText).toEqual('Think different. Make different.');
    // })

    //finding element and assign to variable then assert using 'toHaveText'
    it('Find Heading element and assert the text', async() => {
        //Open Browser
        //await HomePage.open();
        //Get the heading element and asssign to variable
        //const headingElement = await $('.elementor-widget-container h1');
        const headingElement = await HomePage.headingText;
        //Get the value of the text and assign to variable
        //const headingText = await headingElement.getText();
        //assert the text
        //await expect(headingText).toEqual('Think different. Make different.');
        await expect(headingElement).toHaveText('Think different. Make different.');
    })
   





})
