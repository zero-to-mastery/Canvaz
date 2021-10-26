import { degreeToRadiant } from './utils.js';
import Drawable from './Drawable.js';

export default class Hand extends Drawable {
  constructor(canvas, options = {}) {
    super(canvas);
    this.length = options.length;
    this.width = options.width;
  }

  draw(angle) {
    this.ctx.beginPath();
    
    const radiant = degreeToRadiant(angle);
    const x = Math.cos(radiant) * this.length;
    const y = Math.sin(radiant) * this.length;

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(x, y);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = this.width;
    this.ctx.lineCap = 'round';
    this.ctx.stroke();
    
    this.ctx.closePath();
  }
}