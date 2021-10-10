let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d')


c.beginPath();
c.arc(window.innerWidth/2, window.innerHeight/2, 30,0, Math.PI * 2, false);
c.strokeStyle = 'black';
c.stroke();

for (var i = 1; i < Math.max(window.innerWidth, window.innerHeight); i++){
    var rainbowColors = ['#4815AA','#3783FF','#4DE94C','#FFEE00','#FF951C','#FF2E1F'];
    var num = i % 7;
    c.beginPath();
    c.arc(window.innerWidth/2, window.innerHeight/2, 0+i,0, Math.PI * 2, false);
    c.strokeStyle = rainbowColors[num];
    c.stroke();
}
