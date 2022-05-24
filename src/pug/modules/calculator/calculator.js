export default class Calculator {
    constructor() {
        this.resultWeight = 150;
        this.pet = 'Собаке';
        this.weight = 0;
        this.age = 0;
        this.type = 'Сухой'
    }
    onSelectCalcAnimal(pet) {
        this.pet = pet;
        this.recalculateResult();
    }
    updateWeight(weight) {
        this.weight = weight;
        this.recalculateResult();
    }
    updateAge(age) {
        this.age = age;
        this.recalculateResult();
    }
    recalculateResult() {
        switch(this.pet) {
            case 'Собаке':
                if (this.age <= 1) {
                    if (this.weight <= 1) this.resultWeight = 60;
                    if (this.weight > 1 && this.weight <= 2) this.resultWeight = 100;
                    if (this.weight > 2 && this.weight <= 3) this.resultWeight = 130;
                    if (this.weight > 3 && this.weight <= 5) this.resultWeight = 195;
                    if (this.weight > 5 && this.weight <= 10) this.resultWeight = 330;
                    if (this.weight > 10 && this.weight <= 15) this.resultWeight = 440;
                    if (this.weight > 15) this.resultWeight = 440;
                } else {
                    if (this.weight <= 2) this.resultWeight = 50;
                    if (this.weight > 2 && this.weight <= 4) this.resultWeight = 85;
                    if (this.weight > 4 && this.weight <= 6) this.resultWeight = 115;
                    if (this.weight > 6 && this.weight <= 8) this.resultWeight = 145;
                    if (this.weight > 8 && this.weight <= 10) this.resultWeight = 170;
                    if (this.weight > 10 && this.weight <= 15) this.resultWeight = 230;
                    if (this.weight > 15 && this.weight <= 20) this.resultWeight = 290;
                    if (this.weight > 20 && this.weight <= 25) this.resultWeight = 340;
                    if (this.weight > 25 && this.weight <= 30) this.resultWeight = 390;
                    if (this.weight > 30 && this.weight <= 35) this.resultWeight = 440;
                    if (this.weight > 35) this.resultWeight = 480;
                }
                break;
            case 'Кошке':
                if (this.weight <= 0.3) this.resultWeight = 21;
                if (this.weight > 0.3 && this.weight <= 0.4) this.resultWeight = 28;
                if (this.weight > 0.4 && this.weight <= 0.5) this.resultWeight = 35;
                if (this.weight > 0.5 && this.weight <= 0.6) this.resultWeight = 42;
                if (this.weight > 0.6 && this.weight <= 0.7) this.resultWeight = 49;
                if (this.weight > 0.7 && this.weight <= 0.8) this.resultWeight = 56;
                if (this.weight > 0.8 && this.weight <= 0.9) this.resultWeight = 63;
                if (this.weight > 0.9 && this.weight <= 1) this.resultWeight = 70;
                if (this.weight > 1 && this.weight <= 2) this.resultWeight = 140;
                if (this.weight > 2 && this.weight <= 3) this.resultWeight = 210;
                if (this.weight > 3 && this.weight <= 4) this.resultWeight = 280;
                if (this.weight > 4 && this.weight <= 5) this.resultWeight = 350;
                if (this.weight > 5 && this.weight <= 6) this.resultWeight = 420;
                if (this.weight > 6 && this.weight <= 7) this.resultWeight = 490;
                if (this.weight > 7) this.resultWeight = 560;
                break;
            default:
                console.log('Default');
                break;
        }
    }
    init() {}
}