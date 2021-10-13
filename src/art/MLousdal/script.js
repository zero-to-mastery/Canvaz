const canvas = document.querySelector("#toastCanvas");
const ctx = canvas.getContext("2d");

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 60;

// Crust
ctx.beginPath();
ctx.lineWidth = 12;
ctx.strokeStyle = "#E18D26";
ctx.lineCap = "round";
ctx.arc(60, 85, 25, 0, 2 * Math.PI, false);
ctx.arc(240, 85, 25, 0, 2 * Math.PI, false);
ctx.rect(60, 60, 180, 180);
ctx.stroke();

// Bread
ctx.beginPath();
ctx.arc(60, 85, 25, 0, 2 * Math.PI, false);
ctx.arc(240, 85, 25, 0, 2 * Math.PI, false);
ctx.rect(60, 60, 180, 180);
ctx.fillStyle = "#F7C66E";
ctx.fill();
ctx.closePath();

// Eyes
ctx.beginPath();
ctx.arc(105, 130, 15, 0, 2 * Math.PI, false);
ctx.arc(195, 130, 15, 0, 2 * Math.PI, false);
ctx.fillStyle = "#2F0908";
ctx.fill();

// Happy bumps
ctx.beginPath();
ctx.arc(105, 150, 15, 0, Math.PI, true);
ctx.arc(195, 150, 15, 0, Math.PI, true);
ctx.fillStyle = "#F7C66E";
ctx.fill();
ctx.closePath();

// Pupils
ctx.beginPath();
ctx.arc(100, 125, 6, 0, 2 * Math.PI, false);
ctx.arc(190, 125, 6, 0, 2 * Math.PI, false);
ctx.fillStyle = "#ffffff";
ctx.fill();
ctx.closePath();

// Mouth
ctx.beginPath();
ctx.arc(150, 175, 35, 0, Math.PI, false);
ctx.fillStyle = "#2F0908";
ctx.fill();
ctx.save();
ctx.clip();

// Tongue
ctx.beginPath();
ctx.arc(145, 210, 10, 0, Math.PI, true);
ctx.arc(155, 210, 10, 0, Math.PI, true);
ctx.fillStyle = "#F2502E";
ctx.fill();
ctx.closePath();

// Blushing
ctx.restore();
ctx.beginPath();
ctx.ellipse(95, 155, 10, 5, 0, 0, 2 * Math.PI);
ctx.ellipse(205, 155, 10, 5, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#F2502E";
ctx.fill();
