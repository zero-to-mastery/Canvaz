const canvas = document.getElementById("mathFlowerCanvas");

const ctx = canvas.getContext("2d");

const angle = Math.PI * (3 - Math.sqrt(5));
const t = Array.from({ length: 500 }, (_, i) => i * angle);
const x = t.map((num) => Math.sin(num));
const y = t.map((num) => Math.cos(num));

ctx.fillStyle = "#fdf25888";
for (let i = 0; i < 500; i++) {
  ctx.beginPath();
  ctx.arc(450 + (x[i] * t[i]) / 3, 450 + (y[i] * t[i]) / 3, 10, 0, 2 * Math.PI);
  ctx.fill();
}
