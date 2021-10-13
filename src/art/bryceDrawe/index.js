const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// //fillRect()
// ctx.fillStyle = 'red'
// ctx.fillRect(20,20,150,100);
// ctx.fillStyle ="blue"
// ctx.fillRect(200,20,150,100);

// //strokeRect()
// ctx.lineWidth ="5"
// ctx.strokeStyle ="green"
// ctx.strokeRect(100,200, 150, 100);

// //clearRect()
// ctx.clearRect(25,25,140,90);

// //fillText()
// ctx.font ="30px Arial"
// ctx.fillStyle="purple"
// ctx.fillText('Hello World',400,50)

// //strokeText()
// ctx.lineWidth = 1;
// ctx.strokeText('Hello World', 400, 100)

//Paths

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200)
// // ctx.lineTo(50,50)
// ctx.closePath();
// // ctx.stroke();
// ctx.fillStyle ='coral'
// ctx.fill();

// ctx.beginPath()
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath()
// ctx.rect(300,50,150,100)
// ctx.fillStyle='teal'
// ctx.fill();

//Arc(circles)
// ctx.beginPath()
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// ctx.arc(centerX, centerY, 200,0,Math.PI * 2);
// ctx.moveTo(centerX + 100, centerY);
// ctx.arc(centerX, centerY, 100,0,Math.PI, false);
// ctx.moveTo(centerX-60, centerY - 80);
// ctx.arc(centerX - 80, centerY - 80, 20, 0 , Math.PI * 2)
// ctx.moveTo(centerX + 100, centerY - 80)
// ctx.arc(centerX + 80, centerY - 80, 20, 0 , Math.PI * 2)
// ctx.stroke();

//animation 1
const circle1 = {
	x: 200,
	y: 100,
	size: 70,
	dx: 5,
	dy: 4
}
const circle2 = {
	x: 500,
	y: 500,
	size: 50,
	dx: 5,
	dy: 4
}
const circle3 = {
	x: 200,
	y: 500,
	size: 100,
	dx: 4,
	dy: 5
}

function drawCircle1() {
	ctx.beginPath();
	ctx.arc(circle1.x, circle1.y, circle1.size,0, Math.PI * 2);
	ctx.fillStyle = "orange";
	ctx.fill();
}
function drawCircle2() {
	ctx.beginPath();
	ctx.arc(circle2.x, circle2.y, circle2.size,0, Math.PI * 2);
	ctx.fillStyle = "rgba(147,221,229, 0.62)";
	ctx.fill();
}
function drawCircle3() {
	ctx.beginPath();
	ctx.arc(circle3.x, circle3.y, circle3.size,0,Math.PI * 2);
	ctx.fillStyle = "rgba(200,221,229, 0.62)";
	ctx.fill();
}

function update() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	drawCircle1();
	//change position
	circle1.x += circle1.dx;
	circle1.y += circle1.dy;
	//detect sideWalls for Circle 1
	if(circle1.x + circle1.size > canvas.width || circle1.x - circle1.size < 0) {
		circle1.dx *= -1
	}
//detect topWalls for Circle1
	if(circle1.y + circle1.size > canvas.height || circle1.y - circle1.size < 0){
		circle1.dy *= -1
	}
	
	drawCircle2();
	circle2.x += circle2.dx;
	circle2.y += circle2.dy;
	
	if(circle2.x + circle2.size > canvas.width || circle2.x - circle2.size < 0) {
		circle2.dx *= -1
	}
//detect topWalls for Circle2
	if(circle2.y + circle2.size > canvas.height || circle2.y - circle2.size < 0){
		circle2.dy *= -1
	}
	
	drawCircle3();
	circle3.x += circle3.dx;
	circle3.y += circle3.dy;
	
	if(circle3.x + circle3.size > canvas.width || circle3.x - circle3.size < 0) {
		circle3.dx *= -1
	}
//detect topWalls for Circle2
	if(circle3.y + circle3.size > canvas.height || circle3.y - circle3.size < 0){
		circle3.dy *= -1
	}
	
	
	requestAnimationFrame(update);
}

update()
