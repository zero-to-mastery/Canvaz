/*jshint esversion: 6 */

window.onload = function () {
  //create HTML5 canvas
  let object = document.querySelector("canvas");
  object.width = window.innerWidth;
  object.height = window.innerHeight;
  let ctx = object.getContext("2d");

  //define mouse position on x and y scale
  let mouse = {
    x: undefined,
    y: undefined,
  };

  //define radius
  let maxRadius = 50;

  //add EventListener: when mouse moves, mouseposition on x and y changes.
  window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  //create colorArray with colors used for animation
  let colorArray = [
    "#150485",
    "#590995",
    "#c62a88",
    "#A569BD",
    "#03c4a1",
    "#76ead7",
    "#c4fb6d",
  ];

  //add EventListener: resize the animation
  window.addEventListener("resize", function () {
    object.width = window.innerWidth;
    object.height = window.innerHeight;
    //initiate animation
    init();
  });

  //create a circle with x,y position, color and radius
  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    //draw a circle
    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    //after drawing circle update animation with logic
    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      this.x += this.dx;

      if (this.y + 30 > innerHeight || this.y - 30 < 0) {
        this.dy = -this.dy;
      }
      this.y += this.dy;

      //add interactivity with different x, y positions

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

  //create a CircleArray
  let CircleArray = [];

  //initiate the CircleArray with x, y coordinates and radius
  function init() {
    CircleArray = [];
    for (let i = 1; i <= 100; i++) {
      let radius = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - radius * 2) + radius;
      let y = Math.random() * (innerHeight - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 5;
      let dy = (Math.random() - 0.5) * 5;

      //push new Circle to CircleArray
      CircleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }
  init();

  //animate the CircleArray
  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let j = 0; j < CircleArray.length; j++) {
      CircleArray[j].update();
    }
  }

  animate();
};
