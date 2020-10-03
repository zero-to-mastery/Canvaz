// first simple canvas to check if it's working ;)

var c = document.getElementById('my_canvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(600, 250, 200, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 250, 200, 0, 2 * Math.PI);
ctx.stroke();

ctx.font = '50px Arial';
ctx.strokeText('Hello Canvas', 10, 50);

ctx.beginPath();
ctx.arc(700, 250, 200, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(700, 250, 200, 0, 2 * Math.PI);
ctx.stroke();
