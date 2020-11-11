window.addEventListener('load', () => {
  //get the id of the canvas element
  const canvas = document.getElementById('canvas');

  const c = canvas.getContext('2d');

  //resizing
  //get the height from the window to make the canvas the same size with the screen
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let painting = false;

  function start() {
    painting = true;
  }

  function done() {
    painting = false;
    c.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    c.lineWidth = 20;
    c.lineCap = 'curve';

    c.lineTo(e.clientX, e.clientY);
    c.stroke();
    c.beginPath();
    c.moveTo(e.clientX, e.clientY);
  }

  //eventlisteners
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mouseup', done);
  canvas.addEventListener('mousemove', draw);
});
