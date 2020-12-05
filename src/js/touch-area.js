import { el, mount } from "redom";

import randomColor from "./utils/random-color";

class TouchArea {
  constructor() {}

  draw() {
    this.createCanvas();
    this.resetButton = el(".btn.btn-primary.reset-button", {}, "reset");
    mount(document.body, this.resetButton);
    this.drawCircle();
    this.resetButton.onclick = this.clearCanvas.bind(this);
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
  }
  handleStart(e) {
    e.preventDefault();
    let touches = e.changedTouches;
    for (let touch of touches) {
      this.drawCircle(touch.pageX, touch.pageY, touch.radiusX);
    }
    console.log(1, e);
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
    randomColor.update();
  }

  clearCanvas() {
    const ctx = this.container.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

export default TouchArea;
