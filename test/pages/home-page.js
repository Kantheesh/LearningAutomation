import NavComponent from './components/components-nav';

class HomePage{
    open(){
        return browser.url('/');
    }
    get urlContainAssertion(){
        return $('#get-started');
    }
    get logoImage(){
        return $('//*[@id="masthead"]/div/div/div/div/a');
    }
    get headingText(){
        return $('.elementor-widget-container h1');
    }

    get NavComponent(){
        return NavComponent;
    }


}

export default new HomePage();