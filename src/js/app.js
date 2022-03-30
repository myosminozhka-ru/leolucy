import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import Header from '../pug/modules/header/header.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            laptop: 1366,
            window: window.innerWidth
        },
        header: new Header({
            someVareible: 'someVareible'
        })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
    },
    computed: {
        isDesctop: function () {
            return this.sizes.window > this.sizes.laptop;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
        isLaptop: function () {
            return this.sizes.window < this.sizes.laptop && this.sizes.window > this.sizes.tablet;
        }
    },
});