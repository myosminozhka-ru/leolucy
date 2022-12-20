import Swiper, { Navigation, Lazy }  from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class WhereToBuyModalsSlider {
    constructor() {
        this.domSlider = document.querySelector('.where-to-buy-modals-slider__slider');
        this.domSliderSwiper = document.querySelector('.where-to-buy-modals-slider__swiper');
        this.domPrev = this.domSlider?.querySelector('.where-to-buy-modals-slider__arrow--prev');
        this.domNext = this.domSlider?.querySelector('.where-to-buy-modals-slider__arrow--next');
        this.slider;
    }

    init() {
        this.initSlider();
    }

    initSlider() {
        if (this.domSlider) {
            setTimeout(() => {
                this.slider = new Swiper(stringClassesArray(Array.from(this.domSliderSwiper.classList)), {
                    modules: [Navigation, Lazy],
                    speed: 1000,
                    lazy: true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        prevEl: stringClassesArray(Array.from(this.domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(this.domNext.classList)),
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }
                })
            }, 0)
        }
    }
}