import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class WhereToBuySlider {
    constructor() {
        this.sliders;
    }

    init(sizes) {
        this.initSlider(sizes);
    }

    initSlider(sizes) {
        document.querySelectorAll('.where-to-buy-slider').forEach(element => {
            const countSlides = +element?.dataset.countSlides;
            const isDots = element?.dataset.dots ? JSON.parse(element?.dataset.dots) : true;
            const isArrow = element?.dataset.arrow ? JSON.parse(element?.dataset.arrow) : true;
            const domPrev = element?.querySelector('.where-to-buy-slider__arrow--prev');
            const domNext = element?.querySelector('.where-to-buy-slider__arrow--next');
            const domPagination = element?.querySelector('.where-to-buy-slider__dots');

            setTimeout(() => {
                this.sliders = new Swiper(stringClassesArray(Array.from(element.classList)), {
                    modules: [Navigation, Pagination, Lazy],
                    speed: 1000,
                    slidesPerView: 1.5,
                    lazy: true,
                    spaceBetween: 0,
                    navigation: isArrow ? {
                        prevEl: stringClassesArray(Array.from(domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(domNext.classList)),
                    } : false,
                    pagination: isDots ? {
                        el: stringClassesArray(Array.from(domPagination.classList)),
                        bulletClass: 'where-to-buy-slider__dot',
                        bulletActiveClass: 'where-to-buy-slider__dot--active',
                        clickable: true
                    } : false,
                    breakpoints: {
                        769: {
                            slidesPerView: 4,
                            navigation: isArrow ? {
                                prevEl: stringClassesArray(Array.from(domPrev.classList)),
                                nextEl: stringClassesArray(Array.from(domNext.classList)),
                            } : false
                        },
                        1024: {
                            slidesPerView: countSlides,
                            navigation: isArrow ? {
                                prevEl: stringClassesArray(Array.from(domPrev.classList)),
                                nextEl: stringClassesArray(Array.from(domNext.classList)),
                            } : false
                        }, 
                        1366: {
                            slidesPerView: countSlides,
                            navigation: isArrow ? {
                                prevEl: stringClassesArray(Array.from(domPrev.classList)),
                                nextEl: stringClassesArray(Array.from(domNext.classList)),
                            } : false
                        }
                    }
                })
            }, 0)
        });
    }
}