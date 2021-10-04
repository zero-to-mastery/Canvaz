let c = document.getElementById('canvas');
let ctx = c.getContext('2d');

let x = 0;
let y = 0;
function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = '100px Arial';
	for (let i = 0; i < 3; i++) {
		ctx.fillText('💗', 200 * i + x, 500 - y * (i + 1));
		ctx.fillText('😄', 150 * i - x, 500 - y * (i + 1));
		ctx.fillText('😮', 100 * i + x, y * (i + 1));
		ctx.fillText('😥', 100 * i + 2 * x, y * (i + 2));
		ctx.fillText('😕', 0 * i - x, 500 - y * 2);
	}

	y += 3;

	if (y < 200) {
		x += 5;
	} else {
		x -= 5;
	}

	if (y > 450) {
		y = 0;
		x = 0;
	}
	requestAnimationFrame(render);
}
render();
