class ContactsPage{
    open(){
        return browser.url('/contact/');
    }
    get nameField(){
        return $('.contact-name input');
    }
    get emailField(){
        return $('.contact-email input');
    }
    get phoneNumber(){
        return $('.contact-phone input');
    }
    get textField(){
        return $('.contact-message textarea');
    }
    get submitButton(){
        return $('button[type="submit"]');
    }
    get successMessage(){
        return $('[role="alert"]');
    }

    async submitForm(name, email, number, message){
         await $('.contact-name input').setValue(name);
         
         await $('.contact-email input').setValue(email);
         
         await $('.contact-phone input').setValue(number);
         
         await $('.contact-message textarea').setValue(message);
         
         await $('button[type="submit"]').click();
    }
}

export default new ContactsPage();