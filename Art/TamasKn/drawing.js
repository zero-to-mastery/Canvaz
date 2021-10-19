window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const canvasWidth = 500;
  const canvasHeight = 300;

  let offsetX = getOffsetX();
  // Margin-top of the canvas + height of Header
  const offsetY = 198 + 50 + 25 + 25;

  window.addEventListener('resize', () => {
    offsetX = getOffsetX();
  });

  function getOffsetX() {
    return (document.body.clientWidth - canvasWidth) / 2;
  }

  canvas.height = canvasHeight;
  canvas.width = canvasWidth;

  // Image upload

  let img = document.querySelector('img');

  if (img.attributes[0].nodeValue === '#') {
    img.style.display = 'none';
  }

  document
    .querySelector('input[type="file"]')
    .addEventListener('change', function () {
      if (this.files && this.files[0]) {
        img.style.display = 'initial';
        img.src = URL.createObjectURL(this.files[0]);
      }
    });

  // Drawing functionality

  let color = '#7E4327';
  let width = 5;
  let drawing = false;

  const startPos = (e) => {
    drawing = true;
    draw(e);
  };

  const finishPos = () => {
    drawing = false;
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!drawing) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - offsetX, e.clientY - offsetY);
  };

  canvas.addEventListener('mousedown', startPos);
  canvas.addEventListener('mouseup', finishPos);
  canvas.addEventListener('mousemove', draw);

  // Reset button

  const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Brush color picker

  document.querySelectorAll('.colors').forEach((item) => {
    item.addEventListener('click', (e) => {
      color = e.target.style.backgroundColor;
    });
  });

  // Brush size picker

  document.querySelectorAll('.sizes').forEach((item) => {
    item.addEventListener('click', (e) => {
      width = e.target.style.borderBottomWidth[0];
    });
  });
});
