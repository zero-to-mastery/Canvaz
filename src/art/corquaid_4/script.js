let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

// Sun
c.beginPath();
let radgrad = c.createRadialGradient(200, 325, 6, 200, 325, 200);
radgrad.addColorStop(0, "rgba(255,255,255,1)");
radgrad.addColorStop(0.005, "rgba(92, 140, 179,0.7)");
radgrad.addColorStop(1, "rgba(139, 155, 169,0.2)");
c.fillStyle = radgrad;
c.fillRect(0, 0, 500, 500);
c.closePath();

// Distant mountain ridge
c.beginPath();
c.moveTo(0, 400);
c.lineTo(0, 500);
c.lineTo(500, 500);
c.lineTo(500, 340);
c.lineTo(460, 335);
c.lineTo(450, 335);
c.lineTo(425, 325);
c.lineTo(375, 315);
c.lineTo(300, 320);
c.lineTo(250, 340);
c.lineTo(180, 330);
c.lineTo(120, 320);
c.lineTo(80, 330);
c.lineTo(50, 340);
c.lineTo(0, 350);
c.fillStyle = "#2E3134";
c.fill();
c.closePath();

// Foreground hills
c.beginPath();
c.moveTo(0, 425);
c.lineTo(100, 430);
c.lineTo(200, 420);
c.lineTo(350, 410);
c.lineTo(450, 420);
c.lineTo(500, 400);
c.lineTo(500, 500);
c.lineTo(0, 500);
c.fillStyle = "#0F1113";
c.fill();
c.closePath();
