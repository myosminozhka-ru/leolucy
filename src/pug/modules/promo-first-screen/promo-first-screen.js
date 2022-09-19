export default class PromoFirstScreen {
    constructor() {
    }

    showPromoRegistration(event, promo) {
        promo.isShowPromoRegistration = true;

        setTimeout(() => {
            this.scrollToForm()
        }, 500)
    }

    scrollToForm() {
        document.querySelector(".header").classList.add('header--scoll')
        let headerHeight = document.querySelector(".header").clientHeight;
        const block = document.querySelector(".promo-registration");
        const position = block.getBoundingClientRect().top;
        let offsetPosition = position - headerHeight;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}