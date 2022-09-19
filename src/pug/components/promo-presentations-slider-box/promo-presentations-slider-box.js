import Swiper, { Navigation } from "swiper";
import { stringClassesArray } from "../../../js/utils.js";

export default class PromoPresentationsSliderBox {
    constructor() {
        this.promoPresentationsSliderBoxes = document.getElementsByClassName("promo-presentations-slider-box");
        this.sliders = []
    }

    init() {
        this.initSlider();
    }

    initSlider() {
        if (this.promoPresentationsSliderBoxes) {
            setTimeout(() => {
                Array.from(this.promoPresentationsSliderBoxes).forEach((box, index) => {
                    const domSwiper = box?.querySelector(
                        ".promo-presentations-slider-box__swiper"
                    );

                    const domPrev = box?.querySelector(
                        ".promo-presentations-slider-box__btn-prev-slide"
                    );

                    const domNext = box?.querySelector(
                        ".promo-presentations-slider-box__btn-next-slide"
                    );

                    const domPagination = box?.querySelector(
                        ".promo-presentations-slider-box__swiper-pagination"
                    );

                    const domCurrentSlide = domPagination.querySelector(
                        ".promo-presentations-slider-box__current-slide"
                    );

                    const domAllSlides = domPagination.querySelector(
                        ".promo-presentations-slider-box__all-slides"
                    );

                    this.sliders[index] = new Swiper(
                        stringClassesArray(Array.from(domSwiper?.classList)),
                        {
                            modules: [Navigation],
                            speed: 1000,
                            slidesPerView: 1,
                            autoHeight: true,
                            navigation: {
                                prevEl: stringClassesArray(Array.from(domPrev?.classList)),
                                nextEl: stringClassesArray(Array.from(domNext?.classList)),
                            },
                            on: {
                                afterInit(swiper) {
                                    domCurrentSlide.innerText = swiper.activeIndex + 1;
                                    domAllSlides.innerText = swiper.imagesLoaded;
                                },
                                beforeTransitionStart(swiper) {
                                    domCurrentSlide.innerText = swiper.activeIndex + 1;
                                }
                            }
                        }
                    );
                })
            }, 0)
        }
    }
}