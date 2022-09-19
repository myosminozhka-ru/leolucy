export default class PromoInput {
    constructor() {}
    onFocus(event) {
        event.target.closest('.promo-input').classList.add('promo-input--focus')
        event.target.closest('.promo-input').classList.remove('promo-input--error')
    }

    onBlur(event) {
        event.target.closest('.promo-input').classList.remove('promo-input--focus')
    }
}