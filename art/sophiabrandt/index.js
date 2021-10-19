let canvas = document.getElementById("chadFlagCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#002664";
ctx.fillRect(0, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#FECB00";
ctx.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);

ctx.fillStyle = "#C60C30";
ctx.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
