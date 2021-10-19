class Navigation {
  static navContainer = document.getElementById('nav-selector-wrapper');
  static navSelectors = [];
}
class Colors {
  static noRed = window
    .getComputedStyle(document.querySelector('.colors'))
    .getPropertyValue('--noRed');
  static noBlue = window
    .getComputedStyle(document.querySelector('.colors'))
    .getPropertyValue('--noBlue');
  static seBlue = window
    .getComputedStyle(document.querySelector('.colors'))
    .getPropertyValue('--seBlue');
  static seYellow = window
    .getComputedStyle(document.querySelector('.colors'))
    .getPropertyValue('--seYellow');
  static daRed = window
    .getComputedStyle(document.querySelector('.colors'))
    .getPropertyValue('--daRed');
  static white = window
    .getComputedStyle(document.querySelector('.colors'))
    .getPropertyValue('--white');
}
class DrawShapes {
  static square(cs, sX, sY, eX, eY) {
    cs.fillRect(sX, sY, eX, eY);
  }
}
class Canvas {
  constructor() {
    this.canvases = [];
    this.cs = [];
    this.canContainer = document.getElementById('canvas-container');
    this.dimensions = [];
    this.objects = [
      {
        title: 'norwegian flag',
        meta: {
          colors: {
            r: Colors.noRed,
            b: Colors.noBlue,
            w: Colors.white,
          },
          dimensions: {
            width: 30,
            height: 14,
          },
        },
        pattern: [
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sw11', 'sb2', 'sw17'],
          ['sb30'],
          ['sb30'],
          ['sw11', 'sb2', 'sw17'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
          ['sr10', 'sw', 'sb2', 'sw', 'sr16'],
        ],
      },
      {
        title: 'swedish flag',
        meta: {
          colors: {
            b: Colors.seBlue,
            y: Colors.seYellow,
          },
          dimensions: {
            width: 30,
            height: 14,
          },
        },
        pattern: [
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sw11', 'sy2', 'sb17'],
          ['sy30'],
          ['sy30'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
          ['sb11', 'sy2', 'sb17'],
        ],
      },
      {
        title: 'danish flag',
        meta: {
          colors: {
            r: Colors.daRed,
            w: Colors.white,
          },
          dimensions: {
            width: 30,
            height: 14,
          },
        },
        pattern: [
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sw30'],
          ['sw30'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
          ['sr11', 'sw2', 'sr17'],
        ],
      },
    ];
  }
  //class canvas functions
  drawObject(drawObject, idx) {
    this.cs[idx].clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    const xChunk =
      this.dimensions[idx].width / drawObject.meta.dimensions.width;
    const yChunk =
      this.dimensions[idx].height / drawObject.meta.dimensions.height;
    let currentX = 0;
    let currentY = 0;
    drawObject.pattern.forEach((row) => {
      row.forEach((node) => {
        const type = node.charAt(0);
        let color;
        const repeat = node.match(/\d+/) ? node.match(/\d+/)[0] : 1;
        if (repeat) {
          for (let i = 0; i < repeat; i++) {
            switch (type) {
              case 's':
                node.charAt(1) && (color = node.charAt(1));
                this.cs[idx].fillStyle = drawObject.meta.colors[color];
                DrawShapes.square(
                  this.cs[idx],
                  currentX,
                  currentY,
                  xChunk,
                  yChunk
                );
                currentX += xChunk;
                break;
            }
          }
        }
      });
      currentY += yChunk;
      currentX = 0;
    });
    currentY = 0;
  }
}
class PageController {
  constructor() {
    this.canvas = new Canvas();
    this.interval = 5000;
    this.init();
  }
  //create canvases
  createPageElements() {
    this.canvas.objects.forEach((object, idx) => {
      this.createCanvas(object, idx);
      this.createNavElements(object, idx);
    });
  }
  createCanvas(object, idx) {
    //create element
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', `canvas-${idx}`);
    canvas.setAttribute('width', '600');
    canvas.setAttribute('height', '280');
    this.canvas.canContainer.appendChild(canvas);
    //add canvases to class
    this.canvas.canvases.push(canvas);
    this.canvas.cs.push(canvas.getContext('2d'));
    //add width and height to class
    this.canvas.dimensions.push({
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
    });
    //draw canvas
    this.canvas.drawObject(object, idx);
  }
  createNavElements(idx) {
    const navSelector = document.createElement('div');
    navSelector.setAttribute('id', `nav-selector-${idx}`);
    navSelector.setAttribute('class', 'nav-selector');
    navSelector.insertAdjacentHTML(
      'beforeend',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#333"/></svg>'
    );
    Navigation.navContainer.appendChild(navSelector);
    Navigation.navSelectors.push(navSelector);
  }
  //slider functions
  slideUpdate(activeIndex) {
    Navigation.navSelectors[activeIndex].classList.add('nav-selector--active');
    this.canvas.canvases.forEach((canvas, idx) => {
      canvas.classList.remove('hidden');
      canvas.classList.add('animate');
      if (activeIndex !== idx) {
        canvas.classList.add('hidden');
        Navigation.navSelectors[idx].classList.remove('nav-selector--active');
      }
    });
  }
  slideControl() {
    const totalIntervals = this.canvas.canvases.length - 1;
    let activeInterval = 0;
    this.slideUpdate(activeInterval);
    activeInterval++;
    setInterval(() => {
      this.slideUpdate(activeInterval);
      if (activeInterval >= totalIntervals) activeInterval = 0;
      else activeInterval++;
    }, this.interval);
  }
  init() {
    this.createPageElements();
    this.slideControl();
  }
}
const page = new PageController();
