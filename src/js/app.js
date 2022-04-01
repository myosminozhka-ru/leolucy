import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import Header from '../pug/modules/header/header.js';
import FilterReviews from '../pug/modules/filter-reviews/filter-reviews.js';

import AppSelct from '../pug/components/select/select.jsx';


window.app = new Vue({
    el: '#app',
    components: {
        AppSelct,
    },
    data: () => ({
        isMounted: false,
        sizes: {
            mobile: 768,
            tablet: 1024,
            laptop: 1366,
            window: window.innerWidth
        },
        header: new Header({
            someVareible: 'someVareible'
        }),
        filterReviews: new FilterReviews(),
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
            console.group("Width");
            console.log("window.innerWidth: ", window.innerWidth);
            console.log("this.sizes.laptop: ", this.sizes.laptop);
            console.log("this.sizes.tablet: ", this.sizes.tablet);
            console.groupEnd();
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.filterReviews.init();
    },
    computed: {
        isDesctop: function () {
            return this.sizes.window > this.sizes.laptop;
        },
        isTablet: function () {
            return this.sizes.window <= this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
        isLaptop: function () {
            return this.sizes.window <= this.sizes.laptop && this.sizes.window > this.sizes.tablet;
        }
    },
});