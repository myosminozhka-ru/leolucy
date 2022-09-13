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
import Reviews from "../pug/modules/reviews/reviews.js";
import Quiz from "../pug/modules/quiz/quiz.js";
import Preloader from "../pug/components/preloader/preloader.js";

import AppSelect from "../pug/components/select/select.jsx";
import AppAccordion from "../pug/components/accordion/accordion.jsx";

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
    this.reviews.init();
    this.quiz.init();
    this.preloader.init();
  },
  mounted() {
    this.isMounted = true;
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
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    },

    activeInput(elem) {
      const parentInput = elem.closest(".input");
      if (parentInput.classList.contains("input--error")) {
        parentInput.classList.remove("input--error");
      }
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
            // // Здесь мы можем обращаться к свойству объекта и получать	его значение
            // console.log(obj.id_product);
            // console.log(obj.qty_product);
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
