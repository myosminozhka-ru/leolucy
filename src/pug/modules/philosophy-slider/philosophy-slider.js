import Swiper, { Navigation, Pagination, Lazy } from "swiper";
import { stringClassesArray } from "../../../js/utils.js";

export default class PhilosophySlider {
  constructor() {
    this.domSlider = document.querySelectorAll(".philosophy-slider");
    this.sliders = [];
  }

  init() {
    this.initSlider();
  }

  initSlider() {
    if (this.domSlider) {
      setTimeout(() => {
        this.domSlider.forEach((element, index) => {
          const domSliderSwiper = element?.querySelector(
            ".philosophy-slider__swiper"
          );
          const domPrev = element?.querySelector(
            ".philosophy-slider__arrow--prev"
          );
          const domNext = element?.querySelector(
            ".philosophy-slider__arrow--next"
          );
          const domPagination = element?.querySelector(
            ".philosophy-slider__dots"
          );
          this.sliders[index] = new Swiper(
            stringClassesArray(Array.from(domSliderSwiper?.classList)),
            {
              modules: [Navigation, Pagination, Lazy],
              speed: 1000,
                lazy: true,
              slidesPerView: 1,
              loop: true,
              autoHeight: true,
              navigation: {
                prevEl: stringClassesArray(Array.from(domPrev?.classList)),
                nextEl: stringClassesArray(Array.from(domNext?.classList)),
              },
              pagination: {
                el: stringClassesArray(Array.from(domPagination?.classList)),
                bulletClass: "philosophy-slider__dot",
                bulletActiveClass: "philosophy-slider__dot--active",
                clickable: true,
              },
            }
          );
        });
      }, 0);
    }
  }
}
