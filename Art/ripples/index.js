const canvas = document.getElementById('rippleCanvas');
const ctx = canvas.getContext('2d');
const fps = 30;
let ripple_array = [];
let rainEnabled = false;
let rainInterval;

function toggleRain() {
  rainEnabled = !rainEnabled;
  console.log('toggling rain');
  if (rainEnabled) {
    // When we are doing rain set our interval and add some rain
    rainInterval = setInterval(function () {
      for (let i = 0; i < 3; i++) {
        let newX = Math.floor(Math.random() * 450);
        let newY = Math.floor(Math.random() * 350);

        setTimeout(function () {
          addRipple(newX, newY, 50, 2);
        }, 500 * i);
      }
    }, 1000);
  } else {
    clearInterval(rainInterval);
  }
}

function addRipple(x, y, subRippleCount, increase) {
  ripple_array.push({
    x: x,
    y: y,
    subRippleCount: subRippleCount,
    increase: increase
  });
}

function drawRipple(index, x, y, increase) {
  let ripple = ripple_array[index];
  if (increase > 100) {
    ripple_array.splice(index, 1);
    return;
  }

  if (increase > 5) {
    ctx.beginPath();
    ctx.arc(x, y, increase, 0, 2 * Math.PI, true);
    ctx.stroke();
  }

  ripple_array[index].increase = (ripple_array[index].increase + 1) * 1.15;
  ripple_array[index].subRippleCount -= 1;
  // Let's try adding sub ripples.
  if (ripple.subRippleCount > 0) {
    ripple_array.push({
      x: ripple.x,
      y: ripple.y,
      subRippleCount: 0, // Don't want to keep doing more ripples.
      increase: 2
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (ripple_array.length == 0) {
    return;
  }

  // Draw the ripples in their current states.
  for (let index = 0; index < ripple_array.length; index++) {
    let ripple = ripple_array[index];
    drawRipple(index, ripple.x, ripple.y, ripple.increase);
  }
}

document.getElementById('rippleCanvas').addEventListener(
  'click',
  function (event) {
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    addRipple(x, y, 50, 2);
  },
  false
);

window.setInterval(function () {
  if (ripple_array.length > 0) animate();
}, 1000 / fps);
