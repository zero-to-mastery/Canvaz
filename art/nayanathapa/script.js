var myFlagcanvas = document.getElementById("flagOfNepal"); // getting the canvas
var cxt = myFlagcanvas.getContext("2d");


// Just scaling the canavas to 1 : 0.5
myFlagcanvas.width = 246;
myFlagcanvas.height = 300;
cxt.scale(0.5, 0.5);

// Draw the blue background
cxt.fillStyle = "#003893";
cxt.beginPath();
cxt.lineWidth = 1;
cxt.moveTo(0, 0);
cxt.lineTo(0, 600);
cxt.lineTo(473, 600);
cxt.lineTo(183, 307);
cxt.lineTo(492, 307);
cxt.lineTo(0, 0);
cxt.fill();

// Draw the red background
cxt.fillStyle = "#DC143C";
cxt.beginPath();
cxt.lineWidth = 1;
cxt.moveTo(20,33);
cxt.lineTo(20, 580);
cxt.lineTo(425, 580);
cxt.lineTo(133, 287);
cxt.lineTo(423, 287);
cxt.lineTo(20,33);
cxt.fill();

// Draw the Sun
cxt.fillStyle = "white";
cxt.beginPath();
cxt.lineWidth = 1;
cxt.moveTo(34, 468);
cxt.lineTo(66, 482);
cxt.lineTo(45, 511);
cxt.lineTo(81, 508);
cxt.lineTo(77, 544);
cxt.lineTo(106, 523);
cxt.lineTo(120, 556);
cxt.lineTo(136, 523);
cxt.lineTo(164, 544);
cxt.lineTo(161, 507);
cxt.lineTo(196, 512);
cxt.lineTo(175, 482);
cxt.lineTo(209, 468);
cxt.lineTo(175, 453);
cxt.lineTo(196, 424);
cxt.lineTo(160, 428);
cxt.lineTo(164, 392);
cxt.lineTo(135, 414);
cxt.lineTo(120, 380);
cxt.lineTo(106, 413);
cxt.lineTo(77, 392);
cxt.lineTo(80, 428);
cxt.lineTo(45, 424);
cxt.lineTo(67, 453);
cxt.lineTo(34, 468);
cxt.fill();

// Draw the moon
cxt.beginPath();
cxt.lineWidth = 1;
cxt.arc(121, 195, 75, 2*Math.PI, Math.PI);
cxt.bezierCurveTo(56, 231, 122, 284, 184, 220);
cxt.fill();


// Draw the throne above the moon
cxt.beginPath();
cxt.lineWidth = 1;
cxt.moveTo(75, 250);
cxt.lineTo(75, 236);
cxt.lineTo(81, 231);
cxt.lineTo(69, 221);
cxt.lineTo(85, 217);
cxt.lineTo(77, 202);
cxt.lineTo(93, 204);
cxt.lineTo(92, 188);
cxt.lineTo(106, 196);
cxt.lineTo(110, 180);
cxt.lineTo(121, 193);
cxt.lineTo(131, 180);
cxt.lineTo(135, 197);
cxt.lineTo(149, 188);
cxt.lineTo(148, 208);
cxt.lineTo(164, 203);
cxt.lineTo(156, 217);
cxt.lineTo(172, 222);
cxt.lineTo(159, 231);
cxt.lineTo(165, 236);
cxt.lineTo(165, 250);
cxt.lineTo(75, 250);
cxt.fill();