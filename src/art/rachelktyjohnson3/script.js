const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//functions for Snow X position
function randStarsX(){
    return Math.floor(Math.random() * 600);
}

//functions for Snow Y position
function randStarsY(){
    return Math.floor(Math.random() * 400);
}

// stars
context.beginPath();
context.arc(randStarsX(), randStarsY(), 2, 0, Math.PI * 2, true);
context.fillStyle = '#9d9d9d';
context.fill();
for (let i=0; i<100; i++){
    context.beginPath();
    context.arc(randStarsX(), randStarsY(), 2, 0, Math.PI * 2, true);
    context.fill();
}

var img = new Image();   // Create new img element
img.src = './sun.png';
const ctx = context
img.onload = function() {
    ctx.drawImage(img, -220, 0, 400, 400);

  };



// mercury
context.beginPath();
context.arc(170, 200, 5, 0, Math.PI * 2, true);
context.fillStyle = '#bebebe';
context.fill();

// mars
context.beginPath();
context.arc(210, 200, 20, 0, Math.PI * 2, true);
context.fillStyle = '#de6705';
context.fill();

// earth
context.beginPath();
context.arc(260, 200, 22, 0, Math.PI * 2, true);
context.fillStyle = '#57b7f3';
context.fill();


// earth
context.beginPath();
context.arc(300, 200, 10, 0, Math.PI * 2, true);
context.fillStyle = '#da1313';
context.fill();

// earth
context.beginPath();
context.arc(360, 200, 40, 0, Math.PI * 2, true);
context.fillStyle = '#a2680e';
context.fill();

// earth
context.beginPath();
context.arc(440, 200, 35, 0, Math.PI * 2, true);
context.fillStyle = '#fa9c0f';
context.fill();


context.beginPath();
context.arc(510, 200, 30, 0, Math.PI * 2, true);
context.fillStyle = '#71eaff';
context.fill();

context.beginPath();
context.arc(570, 200, 28, 0, Math.PI * 2, true);
context.fillStyle = '#3e8ce0';
context.fill();
