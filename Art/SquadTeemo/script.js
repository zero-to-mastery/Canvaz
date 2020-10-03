const middle = document.querySelector('.middle');
const canvas = document.getElementById('canvas');
const con = canvas.getContext('2d');

let size = 0;

// con.fillRect(10,20,100,100);

function animate() {
  if (size < 130) {
    size++;
  }
  con.fillStyle = 'white';
  con.strokeStyle = 'grey';
  con.lineWidth = 2;
  con.beginPath();
  con.arc(150, 75, size, 0, Math.PI * 2);
  con.closePath();
  con.fill();
  con.stroke();
  requestAnimationFrame(animate);
}

animate();

function colors() {
  middle.style.color = 'dodgerblue';
}

setTimeout(colors, 3500);
