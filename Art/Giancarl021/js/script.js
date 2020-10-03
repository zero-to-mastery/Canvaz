const canvas = {
  element: null,
  ctx: null,
  clearColor: '#fff',
  mouseStack: [],
  color: {
    r: 255,
    g: 0,
    b: 0
  }
};

const input = {
  r: null,
  g: null,
  b: null
};

function init() {
  canvas.element = document.getElementById('c');
  canvas.ctx = canvas.element.getContext('2d');
  input.r = document.getElementById('r');
  input.g = document.getElementById('g');
  input.b = document.getElementById('b');

  Object.keys(canvas.color).forEach((key) => {
    input[key].value = canvas.color[key];
  });

  window.onresize = resize;
  canvas.element.onmousemove = updateMouse;
  resize();
  animate();
}

function changeColor(value, key) {
  if (value >= 0 && value <= 255) {
    canvas.color[key] = value;
  }
  input[key].value = canvas.color[key];
}

function updateMouse({ clientX, clientY }) {
  const { mouseStack } = canvas;
  mouseStack.unshift({ x: clientX, y: clientY });
}

function animate() {
  clear();
  const { ctx, mouseStack, color } = canvas;

  mouseStack.forEach((mouse, i) => {
    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b}, ${
      1 - i / mouseStack.length
    })`;
    ctx.fillRect(mouse.x - 5, mouse.y - 5, 10, 10);
  });

  requestAnimationFrame(animate);
}

function resize() {
  const { element: e } = canvas;
  canvas.width = e.width = window.innerWidth;
  canvas.height = e.height = window.innerHeight;
}

function clear() {
  const { ctx, clearColor } = canvas;
  canvas.fillStyle = clearColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', init);
