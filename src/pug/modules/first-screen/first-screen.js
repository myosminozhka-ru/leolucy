export default class FirstScreen {
    constructor() {
        this.domFirstScreen = document.querySelector(".first-screen");
        this.randomGroup = 0;
        this.countGroups = this.domFirstScreen?.querySelectorAll('.first-screen__select').length / 2;
    }

    init() {
        this.randomGroup = this.getRandomInt(1, this.countGroups);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}