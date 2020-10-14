const canvas = document.getElementById('js-canvas');
const context = canvas.getContext('2d');

const { width, height } = canvas;
const circles = [];

const tick = () => {
  context.fillStyle = 'Fuchsia';
  context.strokeStyle = 'SteelBlue';

  let circle = {
    x: width / 2,
    y: height / 2,
    stroke: 0,
    radius: 50,
    xSpeed: (Math.random() - 0.5) * 10,
    ySpeed: (Math.random() - 0.5) * 10
  };

  circles.push(circle);

  context.clearRect(0, 0, width, height);

  circles.forEach((circle) => {
    context.lineWidth = circle.stroke;
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.stroke();
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;
    circle.stroke += 0.5;
    circle.radius <= 0.5 ? (circle.radius = 0.5) : (circle.radius -= 0.5);
  });

  circles.length > 150 ? circles.shift() : null;

  requestAnimationFrame(tick);
};

tick();
