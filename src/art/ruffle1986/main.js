import Clock from './Clock.js';

const canvas = document.getElementById('canvas');

const clock = new Clock(canvas, {
  radius: 250
});

clock.sharpenCanvas();
clock.centerOrigin();

function tick() {
  clock.clearCanvas();
  clock.draw();
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);