import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import './scss/main.scss';
import _ from 'lodash';
import scrollLock from "./js/utils/scroll-lock";

import TouchArea from "./js/touch-area";

function main() {
    scrollLock.enable();
    let touchArea = new TouchArea();
    touchArea.draw();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    main();
});