import Swiper, { Navigation, Pagination, Grid } from 'swiper';
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
            const domPrev = element?.querySelector('.where-to-buy-slider__arrow--prev');
            const domNext = element?.querySelector('.where-to-buy-slider__arrow--next');
            const domPagination = element?.querySelector('.where-to-buy-slider__dots');

            let objSize;

            const resizeWindow = () => {
                return {
                    isDesctop: window.innerWidth > sizes.laptop,
                    isTablet: window.innerWidth <= sizes.tablet && window.innerWidth > sizes.mobile,
                    isLaptop: window.innerWidth <= sizes.laptop && window.innerWidth > sizes.tablet
                }
            }

            setTimeout(() => {
                this.sliders = new Swiper(stringClassesArray(Array.from(element.classList)), {
                    modules: [Navigation, Pagination, Grid],
                    speed: 1000,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    navigation: {
                        prevEl: stringClassesArray(Array.from(domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(domNext.classList)),
                    },
                    pagination: {
                        el: stringClassesArray(Array.from(domPagination.classList)),
                        bulletClass: 'where-to-buy-slider__dot',
                        bulletActiveClass: 'where-to-buy-slider__dot--active',
                        clickable: true
                    },
                    breakpoints: {
                        769: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: countSlides,
                        }, 
                        1366: {
                            slidesPerView: countSlides,
                        }
                    },
                    on: {
                        afterInit: function(swiper) {
                            objSize = resizeWindow();

                            if (objSize.isLaptop || objSize.isDesctop) {
                                swiper.$wrapperEl[0].style.height = swiper.slides[0].clientHeight * 2 + 1 + 'px';
                            } else {
                                swiper.$wrapperEl[0].style.height = '';
                            }
                        },
                        slideChange: function(swiper) {
                            objSize = resizeWindow();

                            if (objSize.isLaptop || objSize.isDesctop) {
                                swiper.$wrapperEl[0].style.height = swiper.slides[0].clientHeight * 2 + 1 + 'px';
                            } else {
                                swiper.$wrapperEl[0].style.height = '';
                            }
                        },
                        resize: function(swiper) {
                            objSize = resizeWindow();
                            
                            if (objSize.isLaptop || objSize.isDesctop) {
                                swiper.$wrapperEl[0].style.height = swiper.slides[0].clientHeight * 2 + 1 + 'px';
                            } else {
                                swiper.$wrapperEl[0].style.height = '';
                            }
                        }, 
                    }
                })
            }, 0)
        });
    }
}