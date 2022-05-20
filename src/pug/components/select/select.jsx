import Vue from 'vue/dist/vue.js';

export default Vue.component('AppSelect', {
    props: {
        items: {
            type: Array,
            default: []
        },
        name: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        isShow: false,
    }),
    computed: {
        titleSelectItem: function() {
            return this.items?.find(item => item.select === true) ? this.items.find(item => item.select === true) : {title: ''};
        },
    },
    created() {
        const vm = this;
        document.addEventListener('click', function (e) {
            if (!e.composedPath().find(item => item.classList?.contains('select'))) {
                vm.hideDropdown();
            }
        });
    },
    beforeDestroy() {
        document.removeEventListener('click', () => {});
    },
    methods: {
        toggleDropdown: function() {
            this.isShow = !this.isShow;
        },
        hideDropdown: function() {
            this.isShow = false;
        },
        onSelect: function(obj) {
            this.hideDropdown();
            this.$emit('on-select', obj);
        }
    },
    template: `
        <div class="select">
            <div class="select__content">
                <input type="hidden" :name="name" :value="titleSelectItem.key">
                <div class="select__top" @click="toggleDropdown">
                    <span class="select__title">{{ titleSelectItem.title }}</span>
                    <button type="button" class="select__btn" :class="{'select__btn--is-rotate': isShow}">
                        <svg class="select__btn-icon" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.98792C17.4514 1.43897 16.0134 -8.68352e-08 16.0134 -8.68352e-08L9.00003 7.01799L1.98662 -6.99967e-07L-8.68837e-08 1.98767L7.94648 9.93958C8.2361 10.2294 9.00003 11 9.00003 11C9.00003 11 9.76397 10.2294 10.0536 9.93958L18 1.98792Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div class="select__dropdown" :class="{'select__dropdown--is-open': isShow}">
                    <div class="select__dropdown-content">
                        <span v-for="(item, index) in items" 
                            :key="item.id ? item.id : index" 
                            class="select__item" 
                            :class="{'select__item--active': item.select ? item.select : false}"
                            @click="onSelect(item ? item : {})" >{{ item.title ? item.title : '' }}</span>
                    </div>
                </div>
            </div>
        </div>
    `
})