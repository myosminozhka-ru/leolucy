const Header = class Header {
    constructor(){
        this.isShowMenu = false;
        this.isScroll = false;
    }
    
    init() {
        this.addHeaderScrollClass();
    }

    toggleMenu() {
        this.isShowMenu = !this.isShowMenu;
    }

    addHeaderScrollClass() {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                this.isScroll = true;
            } else {
                this.isScroll = false;
            }
        })
    }
}

export default Header;