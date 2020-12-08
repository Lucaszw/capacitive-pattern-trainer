import './scss/main.scss';

import _ from 'lodash';
import scrollLock from "./js/utils/scroll-lock";
import waitUntil from 'async-wait-until';

import { el, mount } from "redom";

import TouchArea from "./js/touch-area";
import Gestures from "./js/gestures";
import buttonsHTML from "./html/buttons.html";
import Recorder from './js/record';


function drawButtons() {
    let buttons = el("div", {innerHTML: buttonsHTML}).children[0];
    mount(document.body, buttons);

    buttons.reset = buttons.querySelector("#reset-button");
    buttons.gestures = buttons.querySelector("#gestures-button");
    buttons.record = buttons.querySelector("#record-button");

    return buttons;
}

function main() {
    scrollLock.enable();

    let buttons = drawButtons();

    let touchArea = new TouchArea();
    let gestures = new Gestures();
    let recorder = new Recorder();

    touchArea.draw();
    gestures.draw();
    recorder.draw();

    touchArea.ontouchcomplete = (touches) => {
        if (recorder.state != "running") return;
        recorder.next(touches);
    }

    buttons.reset.onclick = touchArea.clearCanvas.bind(touchArea);
    buttons.gestures.onclick = gestures.show.bind(gestures);
    
    buttons.record.onclick = () => {
        recorder.toggle(gestures.gestures);
        if (recorder.state == "running") {
            buttons.record.innerHTML = "stop";
            touchArea.clearOnNext = true;
        }
        if (recorder.state == "stopped") {
            buttons.record.innerHTML = "record";
            touchArea.clearOnNext = false;
        }
    }
}



document.addEventListener("DOMContentLoaded", function(event) { 
    main();
});