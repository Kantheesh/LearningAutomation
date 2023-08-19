import ContactsPage from '../pages/contacts-page';
import * as faker from 'faker';

describe('Input the details in contact tab and assert the Success message', () => {
    it('Open browser and clikc on Contact tab', async() => {
        //await browser.url('/');
        //await $('//*[@id="menu-item-493"]').click();
        await ContactsPage.open();
        //Input information to the required fields.
        //addValue -> just adds the value in the field. 
        //setValue -> clears the field and then add the values. Which means performs both clearValue() and addValue().
        // //await $('.contact-name input').setValue('Test Name');
        // await ContactsPage.nameField.setValue('Test Name');
        // //await $('.contact-email input').setValue('testing@auto.com');
        // await ContactsPage.emailField.setValue('testing@auto.com');
        // //await $('.contact-phone input').setValue('7676868767');
        // await ContactsPage.phoneNumber.setValue('7676868767');
        // //await $('.contact-message textarea').setValue('Adding message to he text field');
        // await ContactsPage.textField.setValue('Adding message to he text field');
        // //await $('button[type="submit"]').click();
        // await ContactsPage.submitButton.click();
        //await ContactsPage.submitForm('Test Name', 'testing@auto.com', '7676868767', 'Adding message to he text field');

        //using random info into the fields using faker package
        await ContactsPage.submitForm(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.paragraphs(2));
        //assert the success message - Thanks for contacting us! We will be in touch with you shortly
       //const successMsg = await $('[role="alert"]');
       const successMsg = await ContactsPage.successMessage;
       await expect(successMsg).toHaveText('Thank you for contacting us! We will be in touch with you shortly');

    })
})