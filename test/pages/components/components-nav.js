class NavComponent{
    get navMenu(){
        return $$('#primary-menu li[id*=menu]');
    }
    get navLink(){
        return $('#primary-menu');
    }
}

export default new NavComponent();
