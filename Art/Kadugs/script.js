let canv = document.getElementById('animation');
let image = canv.getContext('2d');

for (x = 1; x < 5000; x++) {
  image.beginPath();
  color1 = Math.random() * 255;
  color2 = Math.random() * 255;
  color3 = Math.random() * 255;
  image.strokeStyle = `rgb(${color1}, ${color2}, ${color3})`;
  image.moveTo(0, Math.random() * 500);
  image.lineTo(Math.random() * 1000, Math.random() * 1000);
  image.moveTo(Math.random() * 1000, 0);
  image.lineTo(Math.random() * 1000, Math.random() * 1000);
  image.stroke();
}

function go() {
  for (x = 1; x < 5000; x++) {
    image.beginPath();
    color1 = Math.random() * 255;
    color2 = Math.random() * 255;
    color3 = Math.random() * 255;
    image.strokeStyle = `rgb(${color1}, ${color2}, ${color3})`;
    image.moveTo(0, Math.random() * 500);
    image.lineTo(Math.random() * 1000, Math.random() * 1000);
    image.moveTo(Math.random() * 1000, 0);
    image.lineTo(Math.random() * 1000, Math.random() * 1000);
    image.stroke();
  }
}
