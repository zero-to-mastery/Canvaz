export default class Drawable {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  }

  sharpenCanvas() {
    this.canvas.width = this.width * devicePixelRatio;
    this.canvas.height = this.height * devicePixelRatio;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  centerOrigin() {
    this.ctx.translate(this.width / 2, this.height / 2);
  }

  clearCanvas() {
    this.ctx.clearRect(0 - this.width / 2, 0 - this.height / 2, this.width, this.height);
  }
}