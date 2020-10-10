var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

for (var i = 0; i < 12; i++) {
  var q = Math.random();
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.fillStyle = 'rgba(15, 15, 15, 0.8 )';
  c.fillRect(x, y, 50, 200);
}

for (var i = 0; i < 10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var q = Math.floor(Math.random() * 3);
  c.beginPath();
  c.arc(x, y, 80, 0, Math.PI * 2, false);
  if (q === 0) {
    c.strokeStyle = '#993955';
  } else if (q === 1) {
    c.strokeStyle = '#AE76A6';
  } else {
    c.strokeStyle = '#CCD6EB';
  }
  c.lineWidth = 5;
  c.stroke();
}
