var c = document.getElementById("canvas-id");

var context = c.getContext('2d');
context.save();
context.translate(c.width/2, c.height - 120);
context.scale(2, 0.35);
context.beginPath();
context.arc(0, 0, 20, 0, 2 * Math.PI, false);
context.restore();
context.shadowBlur = 10;
context.shadowColor = "#3B4032";
context.fillStyle = '#3B4032';
context.fill();
context.shadowBlur = 0;

context.translate(c.width/2, c.height/2);
context.scale(2.2, 3);
context.beginPath();
context.arc(0, 0, 60, 0, 2 * Math.PI, false);
context.fillStyle = '#EFAA66';
context.fill();


context.scale(1, 0.75);
context.fillStyle = '#BD6357';
//baseline
context.beginPath();
context.arc(0, 0, circle_width2, 0, 2 * Math.PI);
context.fill();

var circle_width1 = 0.4;
var circle_width2 = 0.5;
//top-right
context.beginPath();
context.arc(47, -3, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(40, -10, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(50, -20, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(30, -30, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(40, -45, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(20, -60, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(10, -65, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(10, -55, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(25, -65, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(33, -50, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(10, -20, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(27, -7, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(27, -40, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(57, -17, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(52, -27, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(12, -75, circle_width2, 0, 2 * Math.PI);
context.fill();

//top-left
context.beginPath();
context.arc(-47, -5, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-40, -7, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-52, -17, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-33, -27, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-44, -42, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-23, -57, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-10, -65, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-14, -52, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-21, -63, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-31, -53, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-12, -22, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-27, -7, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-27, -70, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-6, -77, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-12, -49, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-56, -19, circle_width2, 0, 2 * Math.PI);
context.fill();

//bottom-left
context.beginPath();
context.arc(-42, 13, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-53, 24, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-35, 34, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-43, 42, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-22, 63, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-14, 61, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-14, 53, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-21, 62, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-33, 52, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-14, 21, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-22, 9, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-40, 50, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-36, 62, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-52, 10, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-12, 10, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-12, 28, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-12, 28, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-8, 32, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-17, 40, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-27, 50, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-17, 65, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-17, 76, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(-7, 72, circle_width1, 0, 2 * Math.PI);
context.fill();

//bottom-right
context.beginPath();
context.arc(43, 12, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(47, 23, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(28, 32, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(42, 42, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(22, 63, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(7, 62, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(12, 52, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(27, 63, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(35, 47, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(13, 22, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(22, 5, circle_width2, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(22, 50, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(10, 70, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(5, 77, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(5, 10, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(15, 27, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(27, 38, circle_width1, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(50, 38, circle_width1, 0, 2 * Math.PI);
context.fill();
