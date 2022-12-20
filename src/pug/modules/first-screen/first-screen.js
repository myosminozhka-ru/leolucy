import Swiper, {Lazy, Pagination, Autoplay} from "swiper";
import {stringClassesArray} from "../../../js/utils.js";

export default class FirstScreen {
    constructor() {
        this.domFirstScreen = document.querySelector(".first-screen");
        this.randomGroup = 0;
        this.countGroups = this.domFirstScreen?.querySelectorAll('.first-screen__select').length / 2;
    }

    init() {
        this.randomGroup = this.getRandomInt(1, this.countGroups);
        this.initSlider();
    }

    initSlider() {
        setTimeout(() => {
            new Swiper('.first-screen-slider',
                {
                    modules: [Pagination, Lazy, Autoplay],
                    speed: 1000,
                    lazy: true,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5000,
                    },
                    loop: true,
                    autoHeight: true,
                    pagination: {
                        el: '.first-screen-slider__dots',
                        bulletClass: "first-screen-slider__dot",
                        bulletActiveClass: "first-screen-slider__dot--active",
                        clickable: true,
                    },
                    breakpoints: {
                        1365: {
                            autoHeight: false,
                        },
                    },
                }
            );
        },0)
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}