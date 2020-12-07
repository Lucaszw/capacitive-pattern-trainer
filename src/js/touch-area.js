import { el, mount } from "redom";
import _ from "lodash";
import randomColor from "./utils/random-color";

class TouchArea {
  constructor() {
    this.ontouchcomplete = () => {throw "Not implemented";}
    this.touchdelay = 500;
    this.clearOnNext = false;
    this.completeTouch = _.debounce(() =>{this._completeTouch()}, this.touchdelay);
  }

  draw() {
    this.createCanvas();
  }

  createCanvas() {
    let width = window.innerWidth,
      height = window.innerHeight;

    let c = (this.container = el("canvas.touch-area", { width, height }));
    mount(document.body, this.container);

    c.addEventListener("touchstart", this.handleStart.bind(this), false);
    c.addEventListener("touchend", this.handleEnd.bind(this), false);
    c.addEventListener("touchcancel", this.handleCancel.bind(this), false);
    c.addEventListener("touchmove", this.handleMove.bind(this), false);
    c.addEventListener("click", this.handleClick.bind(this), false);
  }

  // Call completeTouch() to throttle
  _completeTouch() {
    let lastTouches = _.clone(this._touches || []);
    this._touches = [];
    randomColor.update();
    this.ontouchcomplete(lastTouches);
  }

  handleClick(e) {
    e.preventDefault();
    let touch = {};
    touch.pageX = e.pageX;
    touch.pageY = e.pageY;
    touch.radiusX = 20;
    e.touches = [touch];
    this.handleStart({
      changedTouches: [touch],
      preventDefault: _.noop
    });
  }

  handleStart(e) {
    if (_.isEmpty(this._touches) && this.clearOnNext) this.clearCanvas();
    e.preventDefault();

    this._touches = this._touches || [];

    let touches = e.changedTouches;
    for (let touch of touches) {
      this._touches.push(touch);
      this.drawCircle(touch.pageX, touch.pageY, touch.radiusX);
    }
    this.completeTouch();
  }

  handleEnd(e) {
    e.preventDefault();
    // console.log(2, e);
  }

  handleCancel(e) {
    e.preventDefault();
    // console.log(3, e);
  }

  handleMove(e) {
    e.preventDefault();
    // console.log(4, e);
  }

  drawCircle(x, y, r) {
    x = x || window.innerWidth / 2;
    y = y || window.innerHeight / 2;
    // r = r || 50;
    r = 20;
    const ctx = this.container.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = randomColor.get();
    ctx.fill();
  }

  clearCanvas() {
    const ctx = this.container.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

export default TouchArea;