import Drawable from './Drawable.js';
import Face from './Face.js';
import Hand from './Hand.js';
import {
  getHours,
  getMinutes,
  getSeconds
} from './utils.js';

export default class Clock extends Drawable {
  constructor(canvas, options = {}) {
    super(canvas);
    this.radius = options.radius;
  }

  drawFace() {
    const face = new Face(this.canvas, { radius: this.radius });
    face.draw();
  }
  
  drawHands() {
    const radius = this.radius;
    
    const hourHand    = new Hand(this.canvas, { length: radius - 80, width: 8 });
    const minuteHand  = new Hand(this.canvas, { length: radius - 50, width: 3 });
    const secondHand  = new Hand(this.canvas, { length: radius - 50, width: 1 });
    
    const hours   = getHours() % 12;
    const minutes = getMinutes();
    const seconds = getSeconds();
    
    const secondAngle = seconds * 360 / 60;
    const minutesAngle = (minutes * 360 / 60) + (seconds * 360 / 3600);
    const hoursAngle = (hours * 360 / 12) + (minutes * 360 / (12 * 60)) + (seconds * 360 / (12 * 3600));
    
    hourHand.draw(-90 + hoursAngle);
    minuteHand.draw(-90 + minutesAngle);
    secondHand.draw(-90 + secondAngle);
  }

  draw() {
    this.drawFace();
    this.drawHands();
  }
}

