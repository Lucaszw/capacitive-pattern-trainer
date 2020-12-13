import { el, mount } from "redom";
import _ from "lodash";
import randInt from "random-int";
import randomColor from "./utils/random-color";
import API from "./api";

let recordHTML = `
    <div class="record-banner">
        <div class="current-card"></div>
    </div>
`;

class Recorder {
    constructor() {
        this.state = "stopped";
        this.newData = [];
    }
    draw() {
        this.container = el("div", {innerHTML: recordHTML}).children[0];
        mount(document.body, this.container);
    }

    changeGesture() {
        let gestureNames = _.map(this._gestures, "name");
        let index = randInt(0, gestureNames.length-1);

        this.lastGesture = gestureNames[index]
        this.container.querySelector(".current-card").innerHTML = this.lastGesture;
        this.container.style.backgroundColor = randomColor.get();
        randomColor.update();
    }

    next(touches) {
        if (!this.state == "running") throw "recorder not running";
        this.newData.push({name: this.lastGesture, touches});
        this.changeGesture();
    }

    start(gestures) {
        this.newData = [];

        this.container.style.display = "block";
        this.state = "running";
        this._gestures = gestures;

        this.changeGesture();
    }

    async stop() {
        this.container.querySelector(".current-card").innerHTML = "";
        this.container.style.display = "none";
        this.state = "stopped";
        
        for (let item of this.newData) {
            let cardId = _.find(this._gestures, {name: item.name}).id;
            await API.cards.samples(cardId).create(item.touches);
        }
    }

    toggle(gestures) {
        if (this.state == "running") this.stop();
        else if (this.state == "stopped") this.start(gestures);
    }
}

export default Recorder;