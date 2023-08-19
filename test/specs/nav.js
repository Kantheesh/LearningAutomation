  //Asserting multiple elements can be done in  ways -> Chaining $ to $$ and Dirctly asserting with $$
import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('menu navigations using multiple ID', () => {
    it('Get the text of the Menu Naviagtions', async() => {
        allureReporter.addFeature("Navigation");
        allureReporter.addSeverity("Critical");
        await HomePage.open();
        const expectedMenus = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
        const actualMenus = [];
        //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.navLink.$$('li[id*=menu]');
        for(const link of navLinks){
            actualMenus.push(await link.getText());
        }
        await expect(expectedMenus).toEqual(actualMenus);
    })




})

describe('Navigation Menu Link text assertion', () => {
    it('Get the text from the nav menu items and compare with expeced texts', async() => {
        //await browser.url('/');
        await HomePage.open();
        const expectedMenu = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
        const actualMenu = [];
        //const navLinks = await $$('#primary-menu li[id*=menu]');
        const navLinks = await HomePage.NavComponent.navMenu;
        for(const link of navLinks){
            actualMenu.push(await link.getText());
        }
        await expect(expectedMenu).toEqual(actualMenu);
    })



})