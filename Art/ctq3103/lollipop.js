const canvas = document.getElementById('lollipop');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
hue = Math.random() * 300;

console.log(ctx);
let number = 0;
let scale = 8;
console.log(number);

function draw() {
	let angle = number * 100;
	let radius = scale * Math.sqrt(number);
	let x = radius * Math.sin(angle) + canvas.width / 2;
	let y = radius * Math.cos(angle) + canvas.height / 2;
	console.log(x, y);

	ctx.strokeStyle = 'hsl(' + hue + ',50%, 50%';
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.arc(x, y, 1, 0, Math.PI * 2);
	ctx.closePath();
	ctx.stroke();

	number++;
	hue += 1;
}

function animate() {
	draw();
	if (number > 1200) return;
	requestAnimationFrame(animate);
}

animate();
