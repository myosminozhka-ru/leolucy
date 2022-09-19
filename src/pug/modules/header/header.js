const Header = class Header {
    constructor(){
        this.isShowMenu = false;
        this.isScroll = false;
    }
    
    init() {
        this.addHeaderScrollClass();

        document.addEventListener('click', (e) => {
            if (!e.composedPath().find(item => item.classList?.contains('header-panel') || item.classList?.contains('header__show-menu'))) {
                this.hiddenMenu();
            }
        });
    }

    toggleMenu() {
        this.isShowMenu = !this.isShowMenu;
    }


    hiddenMenu() {
        this.isShowMenu = false;
    }

    addHeaderScrollClass() {
        window.addEventListener('scroll', () => {
            if (!document.querySelector('.header').classList.contains('.promo_page')) {
                if (window.scrollY >= 100) {
                    this.isScroll = true;
                } else {
                    this.isScroll = false;
                }
            } else {
                if (window.scrollY >= 50) {
                    this.isScroll = true;
                } else {
                    this.isScroll = false;
                }
            }

        })
    }
}

export default Header;