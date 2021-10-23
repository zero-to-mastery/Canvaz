class Elements {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.setVars();
    this.setListeners();
  }
  setVars() {
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  setListeners() {
    window.addEventListener('resize', function () {
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;
    });
  }
}

class Shape {
  constructor() {
    this.setColor();
    this.setSize();
  }
  setColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random();
    this.color = [r, g, b, a];
  }
  setSize() {
    this.size = Math.floor(Math.random() * 50);
  }
}
class Draw {
  constructor(elements, shape) {
    this.ctx = elements.ctx;
    this.width = elements.canvas.width;
    this.height = elements.canvas.height;
    this.shape = shape;
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
  }
  circle() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.shape.size, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(${this.shape.color.toString()})`;
    this.ctx.fill();
  }
}
class MainController {
  constructor() {
    this.elements = new Elements();
    this.drawFrequency = 20;
    this.init();
  }
  circle() {
    const shape = new Shape();
    new Draw(this.elements, shape).circle();
  }
  init() {
    setInterval(() => {
      this.circle(this.shape);
    }, this.drawFrequency);
  }
}
new MainController();
