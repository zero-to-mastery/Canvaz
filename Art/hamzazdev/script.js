const drawForMe = (canvas, acc, down, colour) => {
  canvas.fillStyle = colour;
  console.log(acc, down);
  canvas.fillRect(acc, down, 50, 50);
};

const draw = () => {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let x = 0;
    let y = 0;
    for (let i = 0; i <= 63; i++) {
      drawForMe(
        ctx,
        y,
        x,
        '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
      );
      x += 50;
      if (x === 400) {
        x = 0;
        y += 50;
      }
    }
  }
};
