import Swiper, { EffectFade, Navigation, Pagination, Controller } from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class Ingredients {
    constructor() {
        this.domIngredients = document.querySelector('.ingredients');
        this.domIngredientsImgSliderSwiper = this.domIngredients?.querySelector('.ingredients-img-slider__swiper');
        this.domIngredientsTextSliderSwiper = this.domIngredients?.querySelector('.ingredients-text-slider__swiper');
        this.domPrev = this.domIngredients?.querySelector('.ingredients-text-slider__arrow--prev');
        this.domNext = this.domIngredients?.querySelector('.ingredients-text-slider__arrow--next');
        this.domPagination = this.domIngredients?.querySelector('.ingredients-text-slider__dots');

        this.imgSlider;
        this.textSlider;
    }

    init() {
        this.initImgSlider();
        this.initTextSlider();
        this.syncingTwoSliders();
    }

    initImgSlider() {
        if (this.domIngredientsImgSliderSwiper) {
            setTimeout(() => {
                this.imgSlider = new Swiper(stringClassesArray(Array.from(this.domIngredientsImgSliderSwiper.classList)), {
                    modules: [EffectFade, Controller],
                    speed: 1000,
                    slidesPerView: 1,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                })
            }, 0)
        }
    }

    initTextSlider() {
        if (this.domIngredientsTextSliderSwiper) {
            setTimeout(() => {
                this.textSlider = new Swiper(stringClassesArray(Array.from(this.domIngredientsTextSliderSwiper.classList)), {
                    modules: [EffectFade, Navigation, Pagination, Controller],
                    speed: 1000,
                    slidesPerView: 1,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    navigation: {
                        prevEl: stringClassesArray(Array.from(this.domPrev.classList)),
                        nextEl: stringClassesArray(Array.from(this.domNext.classList)),
                    },
                    pagination: {
                        el: stringClassesArray(Array.from(this.domPagination.classList)),
                        bulletClass: 'ingredients-text-slider__dot',
                        bulletActiveClass: 'ingredients-text-slider__dot--active',
                        clickable: true
                    }
                })
            }, 0)
        }
    }

    syncingTwoSliders() {
        setTimeout(() => {
            if (this.imgSlider && this.textSlider) {
                this.imgSlider.controller.control = this.textSlider;
                this.textSlider.controller.control = this.imgSlider;
            }
        }, 0)
    }
}