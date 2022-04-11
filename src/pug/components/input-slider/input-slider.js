import noUiSlider from 'nouislider/dist/nouislider.mjs';

export default class InputSlider {
    constructor() {
    }

    init() {
        setTimeout(() => {
            document.querySelectorAll('.input-slider').forEach(element => {
                const startValue = element.dataset.startValue ? +element.dataset.startValue : 0;
                const min = element.dataset.min ? +element.dataset.min : 0;
                const max = element.dataset.max ? +element.dataset.max : 0;

                noUiSlider.create(element, {
                    start: startValue,
                    connect: 'lower',
                    tooltips: true,
                    step: 1,
                    format: {
                        to: function (value) {
                            return Number(value);
                        },
                        from: function (value) {
                            return Number(value);
                        }
                    },
                    range: {
                        'min': min,
                        'max': max
                    }
                });
            });
        }, 0)
    }
}