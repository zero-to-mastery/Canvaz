const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var x = 0;

window.requestAnimationFrame(function loop() {
 x += 1;
 
 context.clearRect(0, 0, canvas.width, canvas.height);
 context.fillStyle = '#DE781F'
 context.fillRect(canvas.width/2 - 50,canvas.height/2 - 50, 100, 100)

 context.rotate(Math.PI * 2  / 180)

 
 window.requestAnimationFrame(loop)

})



