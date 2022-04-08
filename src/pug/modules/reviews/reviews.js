import Swiper, { Navigation, Pagination } from 'swiper';
import { stringClassesArray } from '../../../js/utils.js';

export default class Reviews {
    constructor() {
        this.arrayReviews = [];
        // this.arrayReviews = [
        //     {
        //         id: 1,
        //         animal: 'cat',
        //         age: '0-1',
        //         food: 'sec',
        //         photo: 'https://picsum.photos/600/600?random=1',
        //         name: 'Екатерина',
        //         city: 'г. Железнодорожный',
        //         text: 'Господа, социально-экономическое развитие не оставляет шанса для новых предложений. Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании поставленных обществом задач.'
        //     },
        //     {
        //         id: 2,
        //         animal: 'cat',
        //         age: '0-1',
        //         food: 'sec',
        //         photo: 'https://picsum.photos/600/600?random=2',
        //         name: 'Екатерина2',
        //         city: 'г. Железнодорожный',
        //         text: 'Господа, социально-экономическое развитие не оставляет шанса для новых предложений. Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании поставленных обществом задач.'
        //     },
        //     {
        //         id: 3,
        //         animal: 'cat',
        //         age: '0-1',
        //         food: 'sec',
        //         photo: 'https://picsum.photos/600/600?random=3',
        //         name: 'Екатерина3',
        //         city: 'г. Железнодорожный',
        //         text: 'Господа, социально-экономическое развитие не оставляет шанса для новых предложений. Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании поставленных обществом задач.'
        //     },
        //     {
        //         id: 4,
        //         animal: 'dog',
        //         age: '0-1',
        //         food: 'sec',
        //         photo: 'https://picsum.photos/600/600?random=4',
        //         name: 'Екатерина3',
        //         city: 'г. Железнодорожный',
        //         text: 'Господа, социально-экономическое развитие не оставляет шанса для новых предложений. Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании поставленных обществом задач.'
        //     },
        // ];

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
                    modules: [Navigation, Pagination],
                    speed: 1000,
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