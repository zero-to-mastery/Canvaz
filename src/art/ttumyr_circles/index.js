class MainLayer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.setVars();
    this.options = new Options();
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
    window.addEventListener('click', (e) => {
      if (
        (!e.target.closest('#options-panel') && !e.target.closest('#options-control')) ||
        e.target.closest('#btn-cancel')
      ) {
        document.getElementById('options-panel').style.display = 'none';
      }
      if (e.target.closest('#options-control')) {
        const el = document.getElementById('options-panel');
        if (el.style.display === '' || el.style.display === 'none') el.style.display = 'block';
        else el.style.display = 'none';
      }
      if (e.target.closest('#btn-pause')) {
        const el = document.getElementById('btn-pause');
        if (el.textContent === 'Pause') {
          el.textContent = 'Play';
          el.classList.remove('btn-secondary');
          clearInterval(this.play);
        } else {
          el.textContent = 'Pause';
          el.classList.add('btn-secondary');
          this.run();
        }
      }
      if (e.target.closest('#btn-refresh')) {
        console.clear();
        this.options.meter.count = 0;
        this.options.meter.total = 0;
        this.options.meter.totalTime = 0;
        this.canvas.width = window.innerWidth;
      }
    });
  }
  draw() {
    const size =
      Math.floor(Math.random() * (this.options.shapeSizeMax - this.options.shapeSizeMin)) + this.options.shapeSizeMin;
    const shape = new Shape(size, this.options.shapes);
    new Draw(this, shape).init();
  }
  run() {
    this.play = setInterval(() => {
      if (this.drawFrequency !== this.options.drawFrequency) {
        this.stop();
        this.drawFrequency = this.options.drawFrequency;
        this.run();
      }
      this.draw(this.shape);
      this.options.useMeter && this.options.meter.count++;
    }, this.drawFrequency);
  }
  stop() {
    clearInterval(this.play);
  }
}

class Shape {
  constructor(size = 50, types = ['circle', 'square', 'triangle']) {
    this.types = types;
    this.size = size;
    this.setColor();
    this.setType();
  }
  setColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random();
    this.color = [r, g, b, a];
  }
  setType() {
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
    this.ctx.arc(this.x, this.y, this.shape.size / 2, 0, Math.PI * 2);
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
class Options {
  constructor() {
    this.shapes = ['circle', 'square', 'triangle'];
    this.drawFrequency = 10;
    this.shapeSizeMin = 0;
    this.shapeSizeMax = 0;
    this.shapeCircle = document.getElementsByName('circle')[0];
    this.shapeSquare = document.getElementsByName('square')[0];
    this.shapeTriangle = document.getElementsByName('triangle')[0];
    this.optionsControl = document.getElementById('options-control');
    this.animationInterval = document.getElementById('animation-interval');
    this.sizeSliderOne = document.getElementById('slider-1');
    this.sizeSliderTwo = document.getElementById('slider-2');
    this.displayValLow = document.getElementById('range-1');
    this.displayValHigh = document.getElementById('range-2');
    this.minGap = 0;
    this.sliderTrack = document.querySelector('.slider-track');
    this.sliderMaxValue = document.getElementById('slider-1').max;
    this.selectUseMeter = document.getElementsByName('use-meter')[0];
    this.useMeter = false;
    this.meter = new Meter();
    this.optionsInit();
  }
  /* shapes */
  optionsInit() {
    this.animationInterval.value = this.drawFrequency;
    this.shapeCircle.addEventListener('change', this.changeShapeValue.bind(this, this.shapeCircle));
    this.shapeSquare.addEventListener('change', this.changeShapeValue.bind(this, this.shapeSquare));
    this.shapeTriangle.addEventListener('change', this.changeShapeValue.bind(this, this.shapeTriangle));
    this.animationInterval.addEventListener('change', () => this.setInterval());
    this.selectUseMeter.addEventListener('change', () => this.setUseMeter());
    this.sizeSliderOne.addEventListener('input', () => this.adjustSizeSlider());
    this.sizeSliderTwo.addEventListener('input', () => this.adjustSizeSlider());
    this.setUseMeter();
    this.adjustSizeSlider();
  }
  setUseMeter() {
    this.useMeter = this.selectUseMeter.checked;
    if (this.selectUseMeter.checked) {
      this.meter.ui.style.display = 'block';
      this.meter.run();
    } else {
      this.meter.ui.style.display = 'none';
      this.meter.stop();
    }
  }
  changeShapeValue(el) {
    if (el.checked) {
      this.shapes.push(el.name);
    } else {
      this.shapes.splice(this.shapes.indexOf(el.name), 1);
    }
  }
  setInterval() {
    this.drawFrequency = this.animationInterval.value;
  }
  /* size slider */
  setSizeSlider() {
    this.sizeSliderOne.addEventListener('input', () => this.adjustSizeSlider());
    this.sizeSliderTwo.addEventListener('input', () => this.adjustSizeSlider());
    this.adjustSizeSlider();
  }
  adjustSizeSlider() {
    const percent1 = (this.sizeSliderOne.value / this.sliderMaxValue) * 100;
    const percent2 = (this.sizeSliderTwo.value / this.sliderMaxValue) * 100;
    if (parseInt(this.sizeSliderOne.value) <= parseInt(this.sizeSliderTwo.value)) {
      this.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #87cefa ${percent1}% , #87cefa ${percent2}%, #dadae5 ${percent2}%)`;
      this.setSizeValues(this.sizeSliderOne.value, this.sizeSliderTwo.value);
    } else {
      this.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent2}% , #87cefa ${percent2}% , #87cefa ${percent1}%, #dadae5 ${percent1}%)`;
      this.setSizeValues(this.sizeSliderTwo.value, this.sizeSliderOne.value);
    }
  }
  setSizeValues(min, max) {
    this.displayValLow.textContent = min;
    this.displayValHigh.textContent = max;
    this.shapeSizeMin = parseInt(min);
    this.shapeSizeMax = parseInt(max);
  }
}
class Meter {
  constructor() {
    this.ui = document.getElementById('meter-container');
    this.uiPerSecTime = document.getElementById('mtr-ps-time');
    this.uiPerSecVal = document.getElementById('mtr-ps-value');
    this.uiTotalTime = document.getElementById('mtr-tot-time');
    this.uiTotalValue = document.getElementById('mtr-tot-value');
    this.count = 0;
    this.interval = 5000;
    this.total = 0;
    this.totalTime = 0;
    this.isRunning;
  }
  consoleRun() {
    this.isRunning = setInterval(() => {
      console.clear();
      console.log(`Current operations per ${this.interval / 1000} second(s): `, this.count);
      this.total += this.count;
      this.totalTime += this.interval;
      console.log(`Total operations over ${this.totalTime / 1000} second(s): `, this.total);
      this.count = 0;
    }, this.interval);
  }
  run() {
    this.uiPerSecTime.textContent = this.interval / 1000;
    this.uiTotalTime.textContent = this.totalTime / 1000;
    this.isRunning = setInterval(() => {
      this.uiPerSecVal.textContent = this.count;
      this.total += this.count;
      this.totalTime += this.interval;
      this.uiTotalTime.textContent = this.totalTime / 1000;
      this.uiTotalValue.textContent = this.total;
      this.count = 0;
    }, this.interval);
  }
  stop() {
    clearInterval(this.isRunning);
  }
}
class MainController {
  constructor() {
    this.main = new MainLayer();
    this.init();
  }
  init() {
    this.main.run();
  }
}
new MainController();
