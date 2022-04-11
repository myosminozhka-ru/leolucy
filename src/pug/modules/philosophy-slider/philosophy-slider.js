import Swiper, { Navigation, Pagination } from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class PhilosophySlider {
    constructor() {
        this.domSlider = document.querySelector('.philosophy-slider');
        this.domSliderSwiper = this.domSlider?.querySelector('.philosophy-slider__swiper');
        this.domPrev = this.domSlider?.querySelector('.philosophy-slider__arrow--prev');
        this.domNext = this.domSlider?.querySelector('.philosophy-slider__arrow--next');
        this.domPagination = this.domSlider?.querySelector('.philosophy-slider__dots');
    }

    init() {
        this.initSlider()
    }

    initSlider() {
        if (this.domSlider) {
            setTimeout(() => {
                new Swiper(stringClassesArray(Array.from(this.domSliderSwiper.classList)), {
                    modules: [Navigation, Pagination],
                    speed: 1000,
                    slidesPerView: 1,
                    loop: true,
                    navigation: {
                        prevEl: stringClassesArray(Array.from(this.domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(this.domNext.classList)),
                    },
                    pagination: {
                        el: stringClassesArray(Array.from(this.domPagination.classList)),
                        bulletClass: 'philosophy-slider__dot',
                        bulletActiveClass: 'philosophy-slider__dot--active',
                        clickable: true
                    }
                });
            }, 0);
        }
    }
}