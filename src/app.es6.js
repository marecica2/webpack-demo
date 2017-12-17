import $ from 'jquery';

export class App {
    constructor(x) {
        this.x = x;
    }

    build() {
        return this.x;
    }
}
export class AppB {
    constructor(x) {
        this.x = x;
    }

    build() {
        return this.x;
    }
}

$(document).ready(function () {
    console.log("som ready app.js");
});