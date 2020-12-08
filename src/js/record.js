import { el, mount } from "redom";
import _ from "lodash";
import randInt from "random-int";
import randomColor from "./utils/random-color";

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
        let gestureNames = _.keys(this._gestures);
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
        this.oldData = {};

        this.container.style.display = "block";
        this.state = "running";
        this._gestures = gestures;

        _.each(this._gestures, (gesture, name) => {
            this.oldData[name] = JSON.parse(localStorage.getItem(`data-${name}`) || '[]');
        });

        this.changeGesture();
    }

    stop() {
        this.container.querySelector(".current-card").innerHTML = "";
        this.container.style.display = "none";
        this.state = "stopped";

        _.each(this.oldData, (entry, name) => {
            for (let item of this.newData) {
                this.oldData[item.name].push(item.touches);
            }
            localStorage.setItem(`data-${name}`, JSON.stringify(this.oldData[name]))
        });
    }

    toggle(gestures) {
        if (this.state == "running") this.stop();
        else if (this.state == "stopped") this.start(gestures);
    }
}

export default Recorder;