import Vue from 'vue/dist/vue.js';

export default Vue.component('AppAccordion', {
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        resizeClass: {
            type: Object,
            default: {}
        }
    },
    data: () => ({
        isShow: false,
    }),
    computed: {
        
    },
    methods: {
        toggleDropdown: function() {
            this.isShow = !this.isShow;
            if (this.isShow) {
                const style = getComputedStyle(this.$refs.dropdownContent);
                this.$refs.dropdown.style.height = this.$refs.dropdownContent.offsetHeight + parseInt(style.marginTop) + 'px';
            } else {
                this.$refs.dropdown.style.height = 0;
            }
        },
    },
    template: `
        <div class="accordion" :class="resizeClass">
            <div ref="content" class="accordion__content">
                <div ref="top" class="accordion__top" :class="resizeClass" @click="toggleDropdown">
                    <span class="accordion__title" :class="resizeClass">{{ title ? title : '' }}</span>
                    <button class="accordion__btn" :class="[{'accordion__btn--is-rotate': isShow}, resizeClass]">
                        <svg class="accordion__btn-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5714 2V21.4286M22.5714 21.4286L22.5714 42M22.5714 21.4286L42 21.4286M22.5714 21.4286L2 21.4286" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                
                <div ref="dropdown" class="accordion__dropdown" :class="[{'accordion__dropdown--is-open': isShow}, resizeClass]">
                    <div ref="dropdownContent" class="accordion__dropdown-content" :class="resizeClass">
                        <p v-if="description" class="accordion__text" :class="resizeClass">{{ description }}</p>
                        <slot v-else></slot>
                    </div>
                </div>
            </div>
        </div>
    `
})