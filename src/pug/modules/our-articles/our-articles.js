import Swiper, { Navigation }  from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class OurArticles {
    constructor() {
        this.isShowAll = false;
        this.domSlider = document.querySelector('.our-articles__slider');
        this.domSliderSwiper = document.querySelector('.our-articles__swiper');
        this.domPrev = this.domSlider?.querySelector('.our-articles__arrow--prev');
        this.domNext = this.domSlider?.querySelector('.our-articles__arrow--next');
        this.slider;
    }

    init() {
        this.initSlider();
    }

    toggleAllArticles() {
        this.slider.destroy();
        this.isShowAll = true;
    }

    initSlider() {
        if (this.domSlider) {
            setTimeout(() => {
                this.slider = new Swiper(stringClassesArray(Array.from(this.domSliderSwiper.classList)), {
                    modules: [Navigation],
                    speed: 1000,
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