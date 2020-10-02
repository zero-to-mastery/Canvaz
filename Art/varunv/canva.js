var canvas = document.querySelector('#canva');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// //Line
// c.beginPath();
// c.moveTo(50,50);
// c.lineTo(100,100);
// c.lineTo(200,20);
// c.strokeStyle = "#fa343a"
// c.stroke();

// //Arc
// // c.beginPath();
// // c.strokeStyle = 'blue';
// // c.arc(300,300,30,0,Math.PI*2,false);
// // c.stroke();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// for(var i = 0;i<1000;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.strokeStyle = getRandomColor();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.strokeStyle = getRandomColor();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
    c.fillStyle = getRandomColor();
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circlearray = [];
for (var i = 0; i < 200; i++) {
  var radius = Math.random() * 10;
  var x = Math.random() * (window.innerWidth - radius * 2) + radius;
  var y = Math.random() * (window.innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 7;
  var dy = (Math.random() - 0.5) * 7;
  circlearray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circlearray.length; i++) {
    circlearray[i].update();
  }
}
animate();
