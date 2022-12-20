import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class Reviews {
    constructor() {
        this.arrayReviews = [];

        this.domSlider = document.querySelector('.reviews__slider');
        this.domSliderSwiper = this.domSlider?.querySelector('.reviews__swiper');
        this.domPrev = this.domSlider?.querySelector('.reviews__arrow--prev');
        this.domNext = this.domSlider?.querySelector('.reviews__arrow--next');
        this.domPagination = this.domSlider?.querySelector('.reviews__dots');
    }

    init() {
        this.initSlider();
    }

    initSlider() {
        if (this.domSliderSwiper) {
            setTimeout(() => {
                new Swiper(stringClassesArray(Array.from(this.domSliderSwiper.classList)), {
                    modules: [Navigation, Pagination, Lazy],
                    speed: 1000,
                    lazy: true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        prevEl: stringClassesArray(Array.from(this.domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(this.domNext.classList)),
                    },
                    pagination: {
                        el: stringClassesArray(Array.from(this.domPagination.classList)),
                        bulletClass: 'reviews__dot',
                        bulletActiveClass: 'reviews__dot--active',
                        clickable: true
                    },
                    breakpoints: {
                        769: {
                            slidesPerView: 2,
                            pagination: false
                        }
                    }
                });
            }, 0)
        }
    }
}