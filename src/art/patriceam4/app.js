const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;

const img = new Image();
img.src = "2.jpg";

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.globalCompositeOperation = "xor";

  ctx.fillRect(10, 10, 100, 100);

  ctx.fillRect(50, 50, 100, 100);

  ctx.fillRect(20, 310, 100, 100);
  ctx.fillRect(120, 350, 100, 100);
  ctx.fillRect(220, 310, 100, 100);
  ctx.fillRect(320, 350, 100, 100);
  ctx.fillRect(420, 310, 100, 100);
  ctx.fillRect(520, 350, 100, 100);

  ctx.font = "80px serif";

  const text = "Happy Hacking";
  const textWidth = ctx.measureText(text).width;
  ctx.fillText(text, canvas.width / 2 - textWidth / 2, canvas.height / 2);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
