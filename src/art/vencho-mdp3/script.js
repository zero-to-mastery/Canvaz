const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");
const bars = 20;
let radius = 140;
ctx.lineWidth = 3;

for(let i = 0; i < bars; i++, radius -= ctx.lineWidth - 1) {      // increase bar, reduce radius
  ctx.beginPath();
  ctx.arc(canvas.width * 0.5, canvas.height, radius, 0, Math.PI, true); // half circle
  ctx.strokeStyle = "hsl(" + (i / bars * 300) + ", 90% ,50%)";  // set color using HSL
  ctx.stroke();
}