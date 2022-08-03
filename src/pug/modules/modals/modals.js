import Swiper, { Pagination, Thumbs } from 'swiper';
import Dropzone from "dropzone";

export default class Modals {
    constructor() {
        this.createReviewModalsData = {
            photo: {
                url: '',
                status: true,
            },
            isSended: false
        }
        this.selectedPet = 'dog',
        this.productData = {
            isLoading: false,
            data: null
        }
        this.articleData = {
            isLoading: false,
            data: null
        }
    }

    init() {

    }

    async newReview() {
        let form = document.querySelector('.create-review-modals__bottom');
        let data = new URLSearchParams(Array.from(new FormData(form))).toString();
        let url = `https://leolucy.ru/local/api/review.php?${data}`;
        let response = await fetch(url, {
            method: 'POST'
        });
        if (response.ok) {
            let json = await response.json(); // читаем ответ в формате JSON
            if (json.status === 'success') {
                this.createReviewModalsData.isSended = true;
            }
        } else {
            alert ('Что-то пошло не так...');
        }
    }

    async loadProduct(productId) {
        let url = `https://leolucy.ru/local/api/catalog.php?id=${productId}&action=get`;
        let response = await fetch(url, {
            method: 'POST'
        });
        if (response.ok) {
            let json = await response.json(); // читаем ответ в формате JSON
            this.productData.data = json.data;
            this.showModals('feed-selection-modals');
        } else {
            alert ('Что-то пошло не так...');
        }
    }
    async loadArticle(articleId) {
        let url = `https://leolucy.ru/local/api/news.php?id=${articleId}&action=get`;
        let response = await fetch(url);
        console.log(response);
        if (response.ok) {
            let json = await response.json(); // читаем ответ в формате JSON
            if ('status' in json) {
                this.articleData.data = json.data;
                this.showModals('our-articles-modals');
            } else {
                this.loadArticle(articleId);
            }
        } else {
            alert ('Что-то пошло не так...');
        }
    }
    async loadNewArticle(articleId) {
        console.log(articleId);
        let url = `https://leolucy.ru/local/api/news.php?id=${articleId}&action=get`;
        let response = await fetch(url);
        console.log(response);
        if (response.ok) {
            let json = await response.json(); // читаем ответ в формате JSON
            if (json.data) {
                this.articleData.data = json.data;
            } else {
                alert ('Мы не нашли такую новость...');
            }
            console.log(this.articleData.data);
            // this.showModals('our-articles-modals');
        } else {
            alert ('Что-то пошло не так...');
        }
    }

    actionShowModals(name) {
        document.querySelector(`.${name}`).classList.add('modals--is-open');
        document.querySelector('body').style.overflow = 'hidden';
    }

    showModals(name, data) {
        if(document.querySelector(`.${name}`)) {
            setTimeout(() => {
                switch (name) {
                    case 'feed-selection-modals':
                        this.feedSelectionModals(data) ?? this.actionShowModals(name);
                        break;
                    case 'where-to-buy-modals':
                        this.whereToBuyModals(data) ?? this.actionShowModals(name);
                        break;
                    case 'our-articles-modals':
                        this.ourArticlesModals(data) ?? this.actionShowModals(name);
                        break;
                    case 'create-review-modals':
                        this.createReviewModals(data) ?? this.actionShowModals(name);
                        break;
                }                
            }, 0)
        }
    }

    hideModals(name) {
        
        if(document.querySelector(`.${name}`)) {
            document.querySelector(`.${name}`).classList.remove('modals--is-open');
            document.querySelector('body').style.overflow = '';

            if (name === 'our-articles-modals') {
                this.articleData = {
                    isLoading: false,
                    data: null
                };
                document.querySelectorAll('.our-articles-modals__center').forEach(modalsCenter => {
                    modalsCenter.scrollTop = 0;
                })
                
            }
            if (name === 'feed-selection-modals') {
                this.productData = {
                    isLoading: false,
                    data: null
                };
                
            }
        }
    }

    feedSelectionModals(data) {
        setTimeout(() => {
            const dotsSlider = new Swiper(document.querySelector('.feed-selection-modals__dots-swiper'), {
                spaceBetween: 5,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });

            const mainSlider = new Swiper(document.querySelector('.feed-selection-modals__swiper'), {
                modules: [Pagination, Thumbs],
                speed: 1000,
                slidesPerView: 1,
                pagination: {
                    el: '.feed-selection-modals__swiper-dots',
                    bulletClass: 'feed-selection-modals__swiper-dot',
                    bulletActiveClass: 'feed-selection-modals__swiper-dot--active',
                    clickable: true
                },
                thumbs: {
                    swiper: dotsSlider,
                },
            })

            return true;
        }, 0)
    }

    whereToBuyModals (swiper) {
        setTimeout(() => {
            swiper.update();
            return true;
        }, 0)
    }

    ourArticlesModals(data) {
        setTimeout(() => {
            return true;
        }, 0)
    }

    createReviewModals(data) {
        setTimeout(() => {
            let myDropzone = new Dropzone('#create-review-modals__dropzone', {
                url: '/file/post',
                parallelUploads: 1,
                acceptedFiles: '.png, .jpg, .jpeg',
                addRemoveLinks: true,
                autoProcessQueue: false,
                addedfile: (file) => {
                    this.createReviewModalsData.photo.status = true;
                },
                thumbnail: (file, dataURL ) => {
                    this.createReviewModalsData.photo.url = file.dataURL;
                },
                drop: (e) => {
                    e.preventDefault();
                    return false;
                },
                dragstart: (e) => {
                    e.preventDefault();
                    return false;
                },
                dragend: (e) => {
                    e.preventDefault();
                    return false;
                },
                dragenter: (e) => {
                    e.preventDefault();
                    return false;
                },
                dragover: (e) => {
                    e.preventDefault();
                    return false;
                },
                dragleave: (e) => {
                    e.preventDefault();
                    return false;
                },
                paste: (e) => {
                    e.preventDefault();
                    return false;
                },
                error: (file) => {
                    this.createReviewModalsData.photo.status = true;
                    setTimeout(() => {
                        this.createReviewModalsData.photo.status = false;
                    }, 0);
                    myDropzone.files = [];
                    this.createReviewModalsData.photo.photo = '';
                },
                success: (file) => {
                    processQueue();
                }
            });
            // * Отправка файла на сервер
            // myDropzone.processQueue()
            return true;
        }, 0)
    }
}