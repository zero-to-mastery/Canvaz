var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 * Borrowed from: https://gist.github.com/christopher4lis/f9ccb589ee8ecf751481f05a8e59b1dc
 */

var mouse = {
  x: undefined,
  y: undefined
};

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 * Borrowed from: https://gist.github.com/christopher4lis/f9ccb589ee8ecf751481f05a8e59b1dc
 */

function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y
    };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

canvas.addEventListener('mousedown', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (i = 0; i < circleArray.length; i++) {
    if (
      distance(mouse.x, mouse.y, circleArray[i].x, circleArray[i].y) -
        circleArray[i].radius * 2 <
      0
    ) {
      circleArray[i].color =
        colorArray[Math.floor(Math.random() * colorArray.length)];
    }
  }
});

var colorArray = ['#F20732', '#07038C', '#0439D9', '#056CF2', '#00CFFF'];

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: dx,
    y: dy
  };
  this.radius = radius;
  this.mass = 1;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function (circles) {
    for (var i = 0; i < circles.length; i++) {
      if (this === circles[i]) continue;
      if (
        distance(this.x, this.y, circles[i].x, circles[i].y) - this.radius * 2 <
        0
      ) {
        resolveCollision(this, circles[i]);
        var tempColor = this.color;
        this.color = circles[i].color;
        circles[i].color = tempColor;
      }
    }
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();
  };
}

var circleArray = [];
function init() {
  circleArray = [];
  for (var i = 0; i <= 100; i++) {
    var radius = 20;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5 + 1;
    var dy = Math.random() - 0.5 + 1;
    if (i > 0) {
      for (var j = 0; j < circleArray.length; j++) {
        if (
          distance(x, y, circleArray[j].x, circleArray[j].y) - radius * 2 <
          0
        ) {
          x = Math.random() * innerWidth;
          y = Math.random() * innerHeight;
          j = -1;
        }
      }
    }
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i <= circleArray.length; i++) {
    circleArray[i].update(circleArray);
  }
}

init();
animate();
