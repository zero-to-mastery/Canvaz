// Canvas element
var canvas = document.querySelector('canvas');

// Resize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Drawing context
var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
};

var maxRadius = 40;
// var minRadius = 2;

var colourArray = ['#61FF26', '#61BDFF', '#C794FF', '#FF40AB', '#FFBD47'];

// Listens to mouse movements
window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.colour = colourArray[Math.floor(Math.random() * colourArray.length)];

  // Draw arc/circle
  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.colour;
    c.fill();
  };
  // Make circle bounce off the edge of window
  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

var circleArray = [];
var totalCircles = 60;

const init = () => {
  circleArray = [];

  // Instantiate Circle object a number of times
  for (var i = 0; i < totalCircles; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var radius = Math.random() * 3 + 1;
    circleArray.push(new Circle(x, y, dx, dy, radius));

    //  Random velocity variables
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;
  }
};

const animate = () => {
  // Recursive call on to keep animating
  requestAnimationFrame(animate);

  // Clear previous image to give animation effect
  c.clearRect(0, 0, innerWidth, innerHeight);

  // Update each individual circle
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

// Generate the amount of circles the user inputs
const button = document.getElementById('btn');
button.addEventListener('click', function () {
  var input = document.getElementById('input');
  if (input.value <= 999 && input.value >= 1) {
    totalCircles = input.value;
    init();
  } else {
    console.log('Only values between 1 and 999 inclusive');
  }
});

animate();
init();
