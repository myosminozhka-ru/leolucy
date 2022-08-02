import noUiSlider from 'nouislider/dist/nouislider.mjs';

export default class InputSlider {
    constructor() {}

    init() {
        setTimeout(() => {
            document.querySelectorAll('.calculator__slider').forEach(element => {
                const startValue = element.dataset.startValue ? +element.dataset.startValue : 0;
                const min = element.dataset.min ? +element.dataset.min : 0;
                const max = element.dataset.max ? +element.dataset.max : 0;

                noUiSlider.create(element, {
                    start: startValue,
                    connect: 'lower',
                    tooltips: true,
                    step: 0.1,
                    format: {
                        to: function (value) {
                            return Number(value).toFixed(1);
                        },
                        from: function (value) {
                            return Number(value).toFixed(1);
                        }
                    },
                    range: {
                        'min': min,
                        'max': max
                    }
                }).on('update', function (values) {
                    if (this.target.dataset.type === 'weight') {
                        app.calculator.updateWeight(values[0]);
                    }
                    if (this.target.dataset.type === 'age') {
                        app.calculator.updateAge(values[0]);
                    }
                });
            });
            document.querySelectorAll('.calculator__slider2').forEach(element => {
                const startValue = element.dataset.startValue ? +element.dataset.startValue : 0;
                const min = element.dataset.min ? +element.dataset.min : 0;
                const max = element.dataset.max ? +element.dataset.max : 0;

                noUiSlider.create(element, {
                    start: startValue,
                    connect: 'lower',
                    tooltips: true,
                    step: 0.1,
                    format: {
                        to: function (value) {
                            return Number(value).toFixed(1);
                        },
                        from: function (value) {
                            return Number(value).toFixed(1);
                        }
                    },
                    range: {
                        'min': min,
                        'max': max
                    }
                }).on('update', function (values) {
                    if (this.target.dataset.type === 'weight') {
                        app.calculator.updateWeight(values[0]);
                    }
                    if (this.target.dataset.type === 'age') {
                        app.calculator.updateAge(values[0]);
                    }
                });
            });
            document.querySelectorAll('.calculator__slider3').forEach(element => {
                const startValue = element.dataset.startValue ? +element.dataset.startValue : 0;
                const min = element.dataset.min ? +element.dataset.min : 0;
                const max = element.dataset.max ? +element.dataset.max : 0;

                noUiSlider.create(element, {
                    start: startValue,
                    connect: 'lower',
                    tooltips: true,
                    step: 0.1,
                    format: {
                        to: function (value) {
                            return Number(value).toFixed(1);
                        },
                        from: function (value) {
                            return Number(value).toFixed(1);
                        }
                    },
                    range: {
                        'min': min,
                        'max': max
                    }
                }).on('update', function (values) {
                    if (this.target.dataset.type === 'weight') {
                        app.calculator.updateWeight(values[0]);
                    }
                    if (this.target.dataset.type === 'age') {
                        app.calculator.updateAge(values[0]);
                    }
                });
            });
        }, 0)
    }
}