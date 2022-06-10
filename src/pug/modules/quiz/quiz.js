export default class Quiz {
    constructor() {
        this.steps = [
            {
                id: 1,
                question: 'Выберите ингредиенты из которых, по вашему мнению, состоит корм',
                listAnswer: [
                    {
                        id: 1,
                        status: true,
                        img: 'https://picsum.photos/600/600?random=1',
                        title: 'Орехи'
                    },
                    {
                        id: 2,
                        status: false,
                        img: 'https://picsum.photos/600/600?random=2',
                        title: 'мука'
                    },
                    {
                        id: 3,
                        status: false,
                        img: 'https://picsum.photos/600/600?random=3',
                        title: 'Фрукты'
                    },
                ]
            },
            {
                id: 2,
                question: 'Выберите ингредиенты из которых, по вашему мнению, состоит корм',
                listAnswer: [
                    {
                        id: 1,
                        status: false,
                        img: 'https://picsum.photos/600/600?random=1',
                        title: 'Фрукты'
                    },
                    {
                        id: 2,
                        status: false,
                        img: 'https://picsum.photos/600/600?random=2',
                        title: 'мука'
                    },
                    {
                        id: 3,
                        status: true,
                        img: 'https://picsum.photos/600/600?random=3',
                        title: 'Орехи'
                    },
                ]
            },
            {
                id: 3,
                question: 'Выберите ингредиенты из которых, по вашему мнению, состоит корм',
                listAnswer: [
                    {
                        id: 1,
                        status: false,
                        img: 'https://picsum.photos/600/600?random=1',
                        title: 'Фрукты'
                    },
                    {
                        id: 2,
                        status: true,
                        img: 'https://picsum.photos/600/600?random=2',
                        title: 'Орехи'
                    },
                    {
                        id: 3,
                        status: false,
                        img: 'https://picsum.photos/600/600?random=3',
                        title: 'мука'
                    },
                ]
            },
        ];
        this.answers = [];
        this.currentStep = 0;
    }

    init() {}

    currentStepData() {
        return this.steps[this.currentStep];
    }

    onSelectAnswer(idAnswer, idStep) {
        const resultAnswer = this.steps.find(step => step.id === idStep).listAnswer.find(answer => answer.id === idAnswer).status;
        const stepInAnswer = this.answers.find(answer => answer.id === this.currentStep);

        if (stepInAnswer) {
            const findSelectedAnswer = stepInAnswer.listAnswer.find(answer => answer.id === idAnswer);

            if (!findSelectedAnswer) {
                this.answers[this.answers.findIndex(item => item.id === stepInAnswer.id)].listAnswer.push({
                    id: idAnswer,
                    status: resultAnswer
                })
            }
        } else {
            this.answers.push({
                id: this.currentStep,
                listAnswer: [
                    {
                        id: idAnswer,
                        status: resultAnswer
                    }
                ]
            })
        }
        if (this.currentStep !== this.steps.length - 1) {
            setTimeout(() =>
                this.onClickNext()
            , 1000);
        }
    }

    addClassResult(idAnswer) {
        const status = this.answers.find(step => step.id === this.currentStep)?.listAnswer.find(answer => answer.id === idAnswer)?.status;
        return status === true ? status.toString() : status === false ? status.toString() : '';
    }

    isDisabledPrev() {
        if (this.currentStep !== 0) {
            return false;
        } else {
            return true;
        }
    }

    isDisabledNext() {
        if (this.currentStep !== this.steps.length - 1) {
            return false;
        } else {
            return true;
        }
    }

    onClickPrev() {
        this.currentStep--;
    }

    onClickNext() {
        this.currentStep++;
    }
}
