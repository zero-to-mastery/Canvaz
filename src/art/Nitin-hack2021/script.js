class RainbowCircle {
  // Object for the canvas art
  constructor(canvasId, circleOrigin, incrementWidth) {
    this.ctx = this.initCanvas(canvasId);
    this.origin = circleOrigin;
    this.incWidth = incrementWidth;
    this.rotateDeg = 0;
    this.colorGrad = [
      ['#ffa500', '#ff8300', '#ff0000'],
      ['#ffff00', '#ffcd00', '#ffa500'],
      ['#008000', '#80e800', '#ffff00'],
      ['#0000ff', '#009999', '#008000'],
      ['#4b0082', '#3415b0', '#0000ff'],
      ['#ee82ee', '#8506a9', '#4b0082'],
      ['#ff0000', '#d8005f', '#ee82ee'],
    ];
  }

  initCanvas(canvasId) {
    // initiate ctx of the canvas based element's ID
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
      return canvas.getContext('2d');
    }
  }

  drawCircle(origin, radOut, radIn, fill = false) {
    // method for drawing circle, origin is a array of [x, y] for center of the circle
    const startAngle = 0;
    const endAngle = 2 * Math.PI;

    this.ctx.beginPath();
    this.ctx.arc(...origin, radOut, startAngle, endAngle);
    if (radIn) {
      this.ctx.arc(...origin, radIn, startAngle, endAngle);
    }
    fill ? this.ctx.fill() : this.ctx.fill('evenodd');
    this.ctx.closePath();
  }

  changeLinGrad3C(grad1, grad2, grad3, gradCoord) {
    // gradCoord is the arguement for createLinearGradient, so the array should be [x0, y0, x1, y1]
    const linGrad = this.ctx.createLinearGradient(...gradCoord);
    linGrad.addColorStop(0, grad1);
    linGrad.addColorStop(0.5, grad2);
    linGrad.addColorStop(1, grad3);
    this.ctx.fillStyle = linGrad;
  }

  calcGradCoord(circRad, degRotate, clockwise) {
    // calculate gradient coordinate based on circle radius and degree to rotate
    const radius = circRad + this.incWidth;
    let startCoordX, startCoordY, endCoordX, endCoordY;
    // determine which direction to rotate
    if (clockwise) {
      startCoordX =
        this.origin[0] - radius * Math.cos(degRotate * (Math.PI / 180));
      endCoordX =
        this.origin[0] + radius * Math.cos(degRotate * (Math.PI / 180));
    } else {
      startCoordX =
        this.origin[0] + radius * Math.cos(degRotate * (Math.PI / 180));
      endCoordX =
        this.origin[0] - radius * Math.cos(degRotate * (Math.PI / 180));
    }

    startCoordY =
      this.origin[1] - radius * Math.sin(degRotate * (Math.PI / 180));
    endCoordY = this.origin[1] + radius * Math.sin(degRotate * (Math.PI / 180));
    return [startCoordX, startCoordY, endCoordX, endCoordY];
  }

  drawRainbow() {
    // draw rainbow circles
    const numOfCirc = Math.floor(this.origin[0] / this.incWidth);
    let circRad = 0;
    if (this.rotateDeg === 360) {
      this.rotateDeg = 0;
    }
    for (let i = 0; i < numOfCirc; i++) {
      i ? this.ctx.restore() : this.ctx.save();
      const gradColor = this.colorGrad[i % this.colorGrad.length];
      const gradCoord =
        i % 2
          ? this.calcGradCoord(circRad, this.rotateDeg, true)
          : this.calcGradCoord(circRad, this.rotateDeg, false);
      this.changeLinGrad3C(...gradColor, gradCoord);
      const initDraw = i ? false : true;
      this.drawCircle(this.origin, circRad + this.incWidth, circRad, initDraw);
      circRad += this.incWidth;
      this.rotateDeg++;
    }
  }
}

// draw rainbow circles
function main() {
  const rainCirc = new RainbowCircle('rainbow-circle', [250, 250], 20);
  return setInterval(() => rainCirc.drawRainbow(), 50);
}

main();
