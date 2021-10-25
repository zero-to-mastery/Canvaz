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
  constructor(size = 50) {
    this.setColor();
    this.setSize(size);
    this.setType();
  }
  setColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random();
    this.color = [r, g, b, a];
  }
  setSize(size) {
    this.size = Math.floor(Math.random() * size);
  }
  setType() {
    this.types = ['circle', 'square', 'triangle'];
    this.type = this.types[Math.floor(Math.random() * this.types.length)];
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
  init() {
    this.ctx.beginPath();
    this.shape.type === 'circle' && this.circle();
    this.shape.type === 'square' && this.square();
    this.shape.type === 'triangle' && this.triangle();
    this.ctx.fillStyle = `rgba(${this.shape.color.toString()})`;
    this.ctx.rotate(Math.random() * 360);
    this.ctx.fill();
  }
  circle() {
    this.ctx.arc(this.x, this.y, this.shape.size, 0, Math.PI * 2);
  }
  square() {
    this.ctx.rect(this.x, this.y, this.shape.size, this.shape.size);
  }
  triangle() {
    this.ctx.moveTo(this.x + this.shape.size / 2, this.y);
    this.ctx.lineTo(this.x + this.shape.size, this.y + this.shape.size);
    this.ctx.lineTo(this.x, this.y + this.shape.size);
    this.ctx.closePath();
  }
}
class Meter {
  constructor() {
    this.count = 0;
    this.interval = 5000;
    this.total = 0;
    this.totalTime = 0;
  }
  run() {
    setInterval(() => {
      console.clear();
      console.log(
        `Current operations per ${this.interval / 1000} second(s): `,
        this.count
      );
      this.total += this.count;
      this.totalTime += this.interval;
      console.log(
        `Total operations over ${this.totalTime / 1000} second(s): `,
        this.total
      );
      this.count = 0;
    }, this.interval);
  }
}
class MainController {
  constructor() {
    this.elements = new Elements();
    this.initialState = true;
    this.playState = true;
    //set useMeter to true and drawFreqency to 0 for performance testing
    this.useMeter = false;
    this.drawFrequency = 10;
    this.meter = new Meter();
    this.init();
  }
  draw() {
    this.opMetCount++;
    const size =
      Math.floor((Math.random() * this.elements.canvas.width) / 8) + 10;
    const shape = new Shape(size);
    new Draw(this.elements, shape).init();
  }
  run() {
    setInterval(() => {
      this.draw(this.shape);
      this.meter.count++;
    }, this.drawFrequency);
  }
  init() {
    this.useMeter && this.meter.run();
    this.playState && this.run();
  }
}
new MainController();
