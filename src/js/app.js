import * as globalFunctions from "./modules/functions.js";
globalFunctions.isWebp();

import Vue from "vue/dist/vue.js";
import $ from "jquery";

import Header from "../pug/modules/header/header.js";
import FilterReviews from "../pug/components/filter-reviews/filter-reviews.js";
import FirstScreen from "../pug/modules/first-screen/first-screen.js";
import PhilosophySlider from "../pug/modules/philosophy-slider/philosophy-slider.js";
import Ingredients from "../pug/modules/ingredients/ingredients.js";
import FeedSelection from "../pug/modules/feed-selection/feed-selection.js";
import Calculator from "../pug/modules/calculator/calculator.js";
import InputSlider from "../pug/components/input-slider/input-slider.js";
import WhereToBuySlider from "../pug/components/where-to-buy-slider/where-to-buy-slider.js";
import OurArticles from "../pug/modules/our-articles/our-articles.js";
import Modals from "../pug/modules/modals/modals.js";
import WhereToBuyModalsSlider from "../pug/modules/modals/where-to-buy-modals-slider.js";
import Reviews from "../pug/modules/reviews/reviews.js";
import Quiz from "../pug/modules/quiz/quiz.js";
import Preloader from "../pug/components/preloader/preloader.js";

import AppSelect from "../pug/components/select/select.jsx";
import AppAccordion from "../pug/components/accordion/accordion.jsx";


Vue.directive('mask', {
  inserted: function (el, binding) {

    const mask = binding.value,
        first = mask.indexOf('_'),
        fieldsL = mask.replace(/[^_]/gm, '').length,
        clean = mask.replace(/[^0-9_]/gm, ''),
        indexes = []

    for(let i = 0; i < clean.length; i++){
      if(!isNaN(clean[i])){
        indexes.push(i)
      }
    }

    el.value = mask
    el.clean = mask.replace(/[^0-9]/gm, '')

    function maskIt(event, start){
      let value = el.value,
          filtred = value.replace(/[^0-9]/gm, ''),
          result = ''

      if(value.length < first){
        value = mask + value
        filtred = value.replace(/[^0-9]/gm, '')
      }

      for(let i = 0; i < filtred.length; i++){
        if(indexes.indexOf(i) == -1){
          result += filtred[i]
        }
      }

      value = ''
      let cursor = 0

      for(let i = 0; i < mask.length; i++){
        if(mask[i] == '_' && result){
          value += result[0]
          result = result.slice(1)
          cursor = i + 1

        }else{
          value += mask[i]
        }
      }

      if(cursor < first){
        cursor = first
      }

      el.value = value

      el.clean = el.value.replace(/[^0-9]/gm, '')

      el.setSelectionRange(cursor,cursor)
    }

    el.addEventListener('focus', function(event){
      event.preventDefault()
    })

    el.addEventListener('click', function(event){
      event.preventDefault()
      let start = el.value.indexOf('_')

      if(start == -1){
        start = el.value.length
      }

      el.setSelectionRange(start,start)

    })

    el.addEventListener('paste', function(event){
      const start = el.selectionStart

      if(start < first){
        el.value = '_' + el.value
      }
    })

    el.addEventListener('input', function(event){
      const start = el.selectionStart
      maskIt(event, start)
    })

  }
})


window.app = new Vue({
  el: "#app",
  components: {
    AppSelect,
    AppAccordion,
  },
  data: () => ({
    mainSelectAnimal: "",
    isMounted: false,
    sizes: {
      mobile: 768,
      tablet: 1024,
      laptop: 1366,
      window: window.innerWidth,
    },
    header: new Header(),
    filterReviews: new FilterReviews(),
    firstScreen: new FirstScreen(),
    philosophySlider: new PhilosophySlider(),
    ingredients: new Ingredients(),
    feedSelection: new FeedSelection(),
    calculator: new Calculator(),
    inputSlider: new InputSlider(),
    whereToBuySlider: new WhereToBuySlider(),
    ourArticles: new OurArticles(),
    modals: new Modals(),
    whereToBuyModalsSlider: new WhereToBuyModalsSlider(),
    reviews: new Reviews(),
    quiz: new Quiz(),
    preloader: new Preloader(),
  }),
  beforeCreate() {
    window.addEventListener("resize", () => {
      this.sizes.window = window.innerWidth;
    });
  },
  beforeMount() {
    this.header.init();
    this.filterReviews.init(this.reviews);
    this.firstScreen.init();
    this.philosophySlider.init();
    this.ingredients.init();
    this.feedSelection.init(this.sizes);
    this.calculator.init();
    this.inputSlider.init();
    this.whereToBuySlider.init(this.sizes);
    this.ourArticles.init();
    this.modals.init();
    this.whereToBuyModalsSlider.init();
    this.reviews.init();
    this.quiz.init();
    this.preloader.init();
  },
  mounted() {
    this.isMounted = true;
    this.scrollToRegistrationForm();
  },
  methods: {
    onSelectMainAnimal(animal) {
      this.mainSelectAnimal = animal;
      if (this.feedSelection.slider) {
        this.feedSelection.slider.destroy();
      }
      this.feedSelection.initSlider();
    },
    onScrollToBlock() {
      const scrollTarget = document.querySelector(".feed-selection");
      const topOffset = 0;
      if(scrollTarget) {
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

    },

    onInputPhone(event) {
      console.log('event: ', event)
      event.target.value = "+7" + event.target.value.replace(/\D/g, '');
      // console.log('elem: ', elem)
      // if (event.keyCode >= 48 && event.keyCode <= 90) {
      //   event.preventDefault()
      //   return
      // }
    },

    onFocusInput(elem) {
      const parentInput = elem.closest(".input");
      if (parentInput.classList.contains("input--error")) {
        parentInput.classList.remove("input--error");
        parentInput.classList.add("input--focus");
      } else {
        parentInput.classList.add("input--focus");
      }
    },

    onBlurInput(elem) {
      const parentInput = elem.closest(".input");
      parentInput.classList.remove("input--focus");
    },

    scrollToRegistrationForm() {
      document
        .getElementById("promo_button")
        ?.addEventListener("click", function () {
          document.querySelector(".hidden-section--1").classList.remove("hidden-section--hidden");
          setTimeout(() => {
            let headerHeight = document.querySelector(".header").clientHeight;
            const block = document.getElementById("promo-form-container");
            const elementPosition = block.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollBy({
              top: offsetPosition,
              behavior: "smooth",
            });

            if (
                document
                    .querySelector(".header")
                    .classList.contains("header--scoll")
            ) {
              headerHeight =
                  document.querySelector(".header--scoll").clientHeight;

              window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }, 500)
        });
    },

    sendPromoForm() {
      const form = document.getElementById("promo-form");
      const inputs = form.getElementsByTagName("input");
      const formData = new FormData();

      for (let input of inputs) {
        if (input.value) {
          formData.append(input.name, input.value);
        } else {
          const parentInput = input.closest(".input");
          parentInput.classList.add("input--error");
          parentInput.querySelector(".input__info").innerHTML =
            "Поле обязательное для заполнения";
        }
      }

      const lengthFormData = Array.from(formData.entries(), ([key, prop]) => ({
        [key]: {
          ContentLength: typeof prop === "string" ? prop.length : prop.size,
        },
      })).length;

      if (lengthFormData === inputs.length) {
        const request = new XMLHttpRequest();
        const url = "/local/api/register.php";
        request.responseType = "json";
        request.open("POST", url, true);

        request.addEventListener("readystatechange", () => {
          if (request.readyState === 4 && request.status === 200) {
            let obj = request.response;
            if ("success" in obj) {
              document
                .querySelector(".reg_block__title")
                ?.classList.add("reg_block__title--hidden");
              document
                .querySelector(".reg_block__form")
                ?.classList.add("reg_block__form--hidden");
              document
                .querySelector(".promo-success")
                ?.classList.add("promo-success--visible");
              document.querySelector(".hidden-section--2").classList.remove("hidden-section--hidden");
              document.querySelector(".hidden-section--3").classList.remove("hidden-section--hidden");
            } else {
              if ("error" in obj) {
                for (let errorItem in obj.error) {
                  const parentInput = form
                    .querySelector('[name="' + errorItem + '"]')
                    .closest(".input");
                  parentInput.classList.add("input--error");
                  parentInput.querySelector(".input__info").innerHTML =
                    obj.error[errorItem];
                }
              }
            }
          }
        });

        request.send(formData);
      }
    },
  },
  computed: {
    isDesctop: function () {
      return this.sizes.window > this.sizes.laptop;
    },
    isTablet: function () {
      return (
        this.sizes.window <= this.sizes.tablet &&
        this.sizes.window > this.sizes.mobile
      );
    },
    isLaptop: function () {
      return (
        this.sizes.window <= this.sizes.laptop &&
        this.sizes.window > this.sizes.tablet
      );
    },
  },
});
