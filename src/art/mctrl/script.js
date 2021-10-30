var x = document.querySelector('.mouse_x');
var y = document.querySelector('.mouse_y');
var c = document.getElementById("mctrl_canvas");


c.addEventListener('click', (e) => {
    var posX = e.clientX;
    var posY = e.clientY;
    console.log(`${posX}, ${posY}`);
})
var context = c.getContext("2d");


drawGrass().then(() => {
    drawCat();
    drawSun();
    drawTree();
});


function  drawGrass() {

    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => {

            var pattern = context.createPattern(img, 'repeat-x');
            context.rect(0, 440, 500, 60);
            context.fillStyle = pattern;
            context.fill();
            resolve(true);
        };
        img.onerror = reject
        img.src = './grass.jpg';
    });

}


function drawCat() {
    context.beginPath();
    context.arc(190,440,15,0,1*Math.PI);
    context.lineTo(190, 400);
    context.closePath();
    context.fillStyle = 'black';
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
    context.moveTo(190, 400);
    context.arc(190, 400,10,0,2*Math.PI);
    context.fill();

    context.beginPath();
    context.moveTo(182, 395);
    context.lineTo(182, 380);
    context.lineTo(187, 390);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.moveTo(198, 400);
    context.lineTo(203, 380);
    context.lineTo(196, 390);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.moveTo(205, 440);
    context.bezierCurveTo( 204, 420,225, 429, 219, 405);
    context.lineWidth = 3;
    context.stroke();

}
       
function drawSun() {
    //sun rays
    context.beginPath();
    context.moveTo(350, 40);
    context.quadraticCurveTo(377, 41 , 395, 11);
    context.quadraticCurveTo(415, 37, 444, 36);
    context.quadraticCurveTo(428, 75, 440, 95);
    context.quadraticCurveTo(404, 96, 396, 111);
    context.quadraticCurveTo( 380, 85,359, 85 );
    context.quadraticCurveTo(366, 68, 350, 40 );

    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#feea3b9e';
    context.fill();
    context.strokeStyle = 'orange';
    context.stroke();

    context.beginPath();
    context.arc(400, 62, 30, 0, 2 * Math.PI, false);
    context.fillStyle = 'yellow';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'orange';
    context.stroke();

}

function drawTree() {
// bark
    context.beginPath();
    context.moveTo(50, 450);
    context.quadraticCurveTo(85, 392, 75, 295);
    context.lineTo(130, 295);
    context.quadraticCurveTo(130, 380, 140, 450);
    context.lineTo(50, 450);
    // complete custom shape
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#8f6454';
    context.fill();
    context.strokeStyle = 'brown';
    context.stroke();

// leaves
    context.beginPath();
    context.moveTo(22, 247);
    context.quadraticCurveTo(6, 193 , 56, 186);
    context.quadraticCurveTo(114, 145, 146, 193);
    context.quadraticCurveTo(205, 220,173, 284);
    context.quadraticCurveTo(159, 333, 100, 307);
    context.quadraticCurveTo(24, 319,  22, 247);

    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#3bbe40';
    context.fill();
    context.strokeStyle = '#2f7a32';
    context.stroke();

}




