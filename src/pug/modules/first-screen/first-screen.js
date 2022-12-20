import Swiper, {Lazy, Navigation, Pagination} from "swiper";
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
                    modules: [Navigation, Pagination, Lazy],
                    speed: 1000,
                    lazy: true,
                    slidesPerView: 1,
                    loop: true,
                    autoHeight: true,
                }
            );
        },0)
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}