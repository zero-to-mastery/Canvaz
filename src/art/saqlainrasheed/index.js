let canvas = document.getElementById("my_canvas");
let c = canvas.getContext("2d");

let container = {
  x: 0,
  y: 0,
  width: 600,
  height: 300
};

let circles = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 10,
  vy: 9,
  color: 125
}, {
  x: 150,
  y: 80,
  r: 20,
  vx: 15,
  vy: 8,
  color: 205
}, {
  x: 90,
  y: 150,
  r: 5,
  vx: 5,
  vy: 15,
  color: 25
}, {
  x: 100,
  y: 50,
  r: 15,
  vx: 8,
  vy: 10,
  color: 100
}];

function animate() {
 
  c.fillStyle = "white";
  c.fillRect(container.x, container.y, container.width, container.height);
 
  for (let i = 0; i < circles.length; i++) {
   
    c.fillStyle = 'hsl(' + circles[i].color++ + ', 100%, 50%)';
    c.beginPath();
    c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
    c.fill()

    if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
      circles[i].vx = -circles[i].vx;
    }

    if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
      circles[i].vy = -circles[i].vy;
    }

    circles[i].x += circles[i].vx
    circles[i].y += circles[i].vy
  }

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);