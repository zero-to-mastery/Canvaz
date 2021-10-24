import Drawable from './Drawable.js';
import { degreeToRadiant } from './utils.js';

export default class Face extends Drawable {
  constructor(canvas, options = {}) {
    super(canvas);
    this.radius = options.radius;
  }

  drawCircle(x, y, radius) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawNumbers() {
    let i = 1;
    for (let angle = -60; angle < 360 - 60; angle += 360 / 60) {
      this.ctx.beginPath();
      
      const radiant = degreeToRadiant(angle);
      const xStart = Math.cos(radiant) * (this.radius - 15);
      const yStart = Math.sin(radiant) * (this.radius - 15);
      const xEnd = Math.cos(radiant) * (this.radius - 5);
      const yEnd = Math.sin(radiant) * (this.radius - 5);
      
      this.ctx.moveTo(xStart, yStart);
      this.ctx.lineTo(xEnd, yEnd);
      this.ctx.lineWidth = (angle % 30 !== 0) ? 1 : 3;
      this.ctx.stroke();
      
      if (angle % 30 === 0) {
        const text = String(i++);
        const numX = Math.cos(radiant) * (this.radius - 35);
        const numY = Math.sin(radiant) * (this.radius - 35);
        
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, numX, numY);
      }
      
      this.ctx.closePath();
    }
  }

  draw() {
    this.drawCircle(0, 0, this.radius);
    this.drawNumbers();
  }
}