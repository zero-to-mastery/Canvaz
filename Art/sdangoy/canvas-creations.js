var c = document.getElementById('myCanvas');
c.style.transform = 'rotate(60deg)';

var ctx = c.getContext('2d');

xoff = -20;
yoff = 50;

ctx.fillStyle = '#EB54B9';
ctx.lineWidth = 15;

//Backpack
ctx.beginPath();
ctx.moveTo(235, 200);
ctx.lineTo(201, 200);
ctx.bezierCurveTo(180, 200, 200, 300, 201, 300);
ctx.lineTo(235, 300);
ctx.lineTo(235, 200);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Body with help of formation taken by https://www.victoriakirst.com/beziertool/ for outline
ctx.beginPath();
ctx.moveTo(394 + xoff, 75 + yoff);
ctx.bezierCurveTo(
  378 + xoff,
  26 + yoff,
  370 + xoff,
  32 + yoff,
  322 + xoff,
  27 + yoff
);
ctx.bezierCurveTo(
  307 + xoff,
  25 + yoff,
  298 + xoff,
  26 + yoff,
  275 + xoff,
  27 + yoff
);
ctx.bezierCurveTo(
  253 + xoff,
  28 + yoff,
  251 + xoff,
  48 + yoff,
  251 + xoff,
  63 + yoff
);
ctx.bezierCurveTo(
  251 + xoff,
  81 + yoff,
  255 + xoff,
  163 + yoff,
  253 + xoff,
  148 + yoff
);
ctx.bezierCurveTo(
  251 + xoff,
  133 + yoff,
  255 + xoff,
  289 + yoff,
  256 + xoff,
  304 + yoff
);
ctx.bezierCurveTo(
  257 + xoff,
  320 + yoff,
  299 + xoff,
  329 + yoff,
  303 + xoff,
  305 + yoff
);
ctx.bezierCurveTo(
  306 + xoff,
  287 + yoff,
  295 + xoff,
  259 + yoff,
  310 + xoff,
  259 + yoff
);
ctx.bezierCurveTo(
  333 + xoff,
  259 + yoff,
  315 + xoff,
  259 + yoff,
  330 + xoff,
  259 + yoff
);
ctx.bezierCurveTo(
  338 + xoff,
  259 + yoff,
  333 + xoff,
  274 + yoff,
  335 + xoff,
  304 + yoff
);
ctx.bezierCurveTo(
  337 + xoff,
  332 + yoff,
  381 + xoff,
  319 + yoff,
  377 + xoff,
  303 + yoff
);
ctx.bezierCurveTo(
  375 + xoff,
  295 + yoff,
  387 + xoff,
  200 + yoff,
  392 + xoff,
  187 + yoff
);
ctx.bezierCurveTo(
  412 + xoff,
  124 + yoff,
  419 + xoff,
  76 + yoff,
  387 + xoff,
  75 + yoff
);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Visor
ctx.fillStyle = '#95C9DC';
ctx.beginPath();
ctx.ellipse(334, 150, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Hat
//Pumpkin Stem
ctx.fillStyle = '#114C28';
ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(230, 25);
ctx.lineTo(260, 5);
ctx.lineTo(290, 30);
ctx.lineTo(250, 55);
ctx.lineTo(232, 24);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Pumpkin
ctx.fillStyle = '#FE8405';
ctx.beginPath();
ctx.lineWidth = 6;
ctx.ellipse(290, 75, 80, 50, Math.PI * 0.95, 0, Math.PI);
ctx.arc(370, 90, 5, 0 * Math.PI, 0.5 * Math.PI);
ctx.lineTo(345, 80);
ctx.lineTo(320, 95);
ctx.lineTo(300, 70);
ctx.lineTo(280, 110);
ctx.lineTo(260, 80);
ctx.lineTo(255, 120);
ctx.arc(241, 87, 30, 0.5 * Math.PI, 1 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Details
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(230, 45);
ctx.quadraticCurveTo(220, 100, 256, 120);
ctx.moveTo(250, 35);
ctx.quadraticCurveTo(250, 60, 260, 82);
ctx.moveTo(275, 24);
ctx.quadraticCurveTo(300, 40, 300, 78); //Pumpkin Curves
ctx.moveTo(315, 24);
ctx.quadraticCurveTo(330, 40, 320, 95);
ctx.moveTo(340, 30);
ctx.quadraticCurveTo(360, 30, 350, 85);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#3A180C';
ctx.moveTo(260, 50); //Left Eye
ctx.lineTo(259, 75);
ctx.lineTo(285, 70);
ctx.lineTo(260, 50);
ctx.moveTo(330, 40); //RIght Eye
ctx.lineTo(329, 65);
ctx.lineTo(350, 60);
ctx.lineTo(329, 40);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Stars were given random coordinates, can use a for loop here
ctx.fillStyle = 'white';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(130, 50, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(320, 4, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(313, 415, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(536, 278, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(65, 220, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(411, 190, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(237, 10, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(453, 430, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(483, 23, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(160, 300, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(147, 153, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
