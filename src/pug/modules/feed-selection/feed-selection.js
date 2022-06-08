import Swiper, { Pagination, Navigation } from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class FeedSelection {
    constructor() {
        this.domSlider = document.querySelector('.feed-selection__swiper');
        this.domPrev = this.domSlider?.querySelector('.feed-selection__arrow--prev');
        this.domNext = this.domSlider?.querySelector('.feed-selection__arrow--next');
        this.domPagination = this.domSlider?.querySelector('.feed-selection__dots');
        this.sizes;
        this.slider = null;
    }

    init(sizes) {
        this.sizes = sizes;
        this.initSlider();
    }

    initSlider() {
        const sizes = this.sizes;
        if (this.domSlider) {
            setTimeout(() => {
                this.slider = new Swiper(stringClassesArray(Array.from(this.domSlider.classList)), {
                    modules: [Pagination, Navigation],
                    speed: 1000,
                    loop: false,
                    slidesPerView: 2,
                    spaceBetween: 20,
                    pagination: {
                        el: stringClassesArray(Array.from(this.domPagination.classList)),
                        bulletClass: 'feed-selection__dot',
                        bulletActiveClass: 'feed-selection__dot--active',
                        clickable: true
                    },
                    navigation: {
                        prevEl: stringClassesArray(Array.from(this.domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(this.domNext.classList)),
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4
                        }, 
                        1366: {
                            slidesPerView: 6
                        }
                    },
                    on: {
                        slideChange: function(swiper) {
                            setTimeout(() => {
                                let activeSlideIndex;

                                Array.from(swiper.slides).forEach(slide => {
                                    if (slide.classList.contains('swiper-slide-active')) {
                                        activeSlideIndex = +slide.dataset.swiperSlideIndex + (sizes.window >= 1024 && sizes.window < 1366 ? 3 : 5);

                                        if (activeSlideIndex > (Array.from(swiper.slides).length / 2)) {
                                            activeSlideIndex = activeSlideIndex - (Array.from(swiper.slides).length / 2) - 1;
                                        }
                                    }

                                    if ( slide.classList.contains('swiper-slide-active') || +slide.dataset.swiperSlideIndex === activeSlideIndex) {
                                        slide.classList.add('feed-selection__slide--opacity');
                                    } else {
                                        slide.classList.remove('feed-selection__slide--opacity');
                                    }
                                });
                            }, 0)
                        }
                    }
                })
            }, 0)
        }
    }
}