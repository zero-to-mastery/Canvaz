const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


const circle1 = {
	x: 100,
	y: 50,
	size: 20,

}

const circle2 = {
	x: 500,
	y: 500,
	size: 50,

}
const circle3 = {
	x: 200,
	y: 500,
	size: 100,
}
const circle4 = {
	x: 20,
	y: 200,
	size: 100,
}


function drawCircle1() {
	ctx.beginPath();
	ctx.arc(circle1.x, circle1.y, circle1.size,0, Math.PI * 2);
	ctx.fillStyle = "blue";
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
function drawCircle4() {
	ctx.beginPath();
	ctx.arc(circle4.x, circle4.y, circle4.size,0, Math.PI * 2);
	ctx.fillStyle = "blue";
	ctx.fill();
}
drawCircle1()
drawCircle2()
drawCircle3()
drawCircle4()
