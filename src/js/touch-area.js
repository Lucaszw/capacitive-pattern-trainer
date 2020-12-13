import { el, mount } from "redom";
import _ from "lodash";
import randomColor from "./utils/random-color";

class TouchArea {
  constructor(options={}) {
    this.ontouchcomplete = () => {throw "Not implemented";}
    
    this.touchdelay = options?.touchdelay || 500;
    this.parent = options?.parent || document.body;
    this.avoidListeners = options?.avoidListeners || false;

    this.clearOnNext = false;
    this.completeTouch = _.debounce(() =>{this._completeTouch()}, this.touchdelay);
  }

  draw(options={}) {
    this.createCanvas(options);
  }

  remove() {
    if (this.container) this.container.remove();
  }

  createCanvas(options={}) {
    let width = options?.width || window.innerWidth;
    let height = options?.height || window.innerHeight;
    
    let c = (this.container = el("canvas.touch-area", { width, height }));
    mount(this.parent, this.container);

    if (this.avoidListeners) return;

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
    touch.pageX = touch.x = e.pageX;
    touch.pageY = touch.y = e.pageY;
    touch.radiusX = touch.r = 20;
    e.touches = [touch];
    this.handleStart({
      changedTouches: [touch],
      preventDefault: _.noop,
      target: e.target
    });
  }

  handleStart(e) {
    if (_.isEmpty(this._touches) && this.clearOnNext) this.clearCanvas();
    e.preventDefault();

    this._touches = this._touches || [];

    let touches = e.changedTouches;
    console.log(e);
    for (let touch of touches) {
      this._touches.push({
        x: touch.pageX/e.target.width, 
        y: touch.pageY/e.target.height,
        r: touch.radiusX
      });
      this.drawCircle(touch.pageX, touch.pageY, 20);
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
    r = r || 20;
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
