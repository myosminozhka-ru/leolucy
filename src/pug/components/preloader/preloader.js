export default class Preloader {
    constructor() {

    }

    init() {
        window.onload = function() {
            document.querySelector('.preloader')?.classList.add('preloader--on-hidden');
        };
    }
}