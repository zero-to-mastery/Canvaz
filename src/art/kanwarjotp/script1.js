var screen = document.getElementById("output");

var ctx = screen.getContext("2d");

//bezier curve system
var array_curves = []

function Curves(gap) {
    this.x1 = screen.width;
    this.x2 = gap;
    this.x3 = 0;
    this.y1 = 0;
    this.y2 = gap;
    this.y3 = screen.height;
    this.speed = 5;
}

function createCurves() {
    for (let index = 0; index < 20; index++) {
        i = new Curves(index * 100);
        array_curves.push(i);        
    }
}

//adiing the curves to the array
createCurves();

function drawCurves() {
    array_curves.forEach(i => {
        ctx.beginPath();
        ctx.bezierCurveTo(i.x1, i.y1, i.x2, i.y2, i.x3, i.y3);
        ctx.strokeStyle = "rgb(29, 28, 26, 1)";
        ctx.stroke();
        ctx.closePath();
    });
}

//function to move the squares and handle edges
function update() {
    array_curves.forEach(i => {
        i.x2 += i.speed;
        i.y2 += i.speed;

        if (i.x2 > screen.width) {
            i.speed -= 0.1;
        } else if (i.x2 < 0){
            i.speed += 0.1;
        }
    });

}


//main function 
function animation(){
    requestAnimationFrame(animation);

    ctx.clearRect(0, 0, screen.width, screen.height);

    drawCurves();

    update();

}

animation();