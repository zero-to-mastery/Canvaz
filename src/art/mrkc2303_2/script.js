const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = parseInt(canvas.getAttribute('width'));
const canvasHeight = parseInt(canvas.getAttribute('height'));
const squareSize = 50;

const white = '#FFFFFF';
const black = '#000000';

for (let col = 0; col < 8; col++) {
  for (let row = 0; row < 8; row++) {
    if (col % 2 === 0) {
      ctx.fillStyle = white;
      ctx.fillRect(row * 100, col * 50, squareSize, squareSize);
      ctx.fillStyle = black;
      ctx.fillRect(row * 100 + 50, col * 50, squareSize, squareSize);
    } else {
      ctx.fillStyle = black;
      ctx.fillRect(row * 100, col * 50, squareSize, squareSize);
      ctx.fillStyle = white;
      ctx.fillRect(row * 100 + 50, col * 50, squareSize, squareSize);
    }
  }
}

ctx.stroke();