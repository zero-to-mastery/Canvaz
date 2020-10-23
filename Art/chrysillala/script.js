function draw() {
  const canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const canvasWidth = parseInt(canvas.getAttribute('width'));
    const canvasHeight = parseInt(canvas.getAttribute('height'));
    const squareSize = 50;

    const green = '#26B47A';
    const black = '#000000';

    for (let col = 0; col < canvasHeight / squareSize; col++) {
      for (let row = 0; row < canvasWidth / (squareSize * 2); row++) {
        if (col % 2 === 0) {
          ctx.fillStyle = green;
          ctx.fillRect(row * 100, col * 50, squareSize, squareSize);

          ctx.fillStyle = black;
          ctx.fillRect(row * 100 + 50, col * 50, squareSize, squareSize);
        } else {
          ctx.fillStyle = black;
          ctx.fillRect(row * 100, col * 50, squareSize, squareSize);

          ctx.fillStyle = green;
          ctx.fillRect(row * 100 + 50, col * 50, squareSize, squareSize);
        }
      }
    }
  } else {
    alert(`Your browser doesn't support canvas`);
  }
}

document.addEventListener('load', draw());
