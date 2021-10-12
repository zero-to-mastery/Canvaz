let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let demoEvent = document.getElementById('demo-event');
let demoName = document.getElementById('demo-name');

let fps, totalFrames, spriteSize, animRequest, balls;

let states = {
	balls: false,
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

$('#balls_start').on('click', function() {
	balls = new Balls();
	states.balls = true;
	balls.init();
});

$('#balls_stop').on('click', function() {
	states.balls = false;
});

function startAnimation() {
	if (!animRequest) {loop();}
}

function stopAnimation() {
	if (animRequest) {
		window.cancelAnimationFrame(animRequest);
		animRequest = undefined;
	}
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loop() {
  let lastTime = 0;
  let now = Date.now();
  let	delta = now - lastTime;
  
  lastTime = now;
  if (states.balls) {
  	balls.update();
  	balls.draw();
  }
  animRequest = window.requestAnimationFrame(loop);
}

function Balls() {
	this.totalBalls = getRandom(40, 50);
	this.balls = [];

	this.init = function() {
		this.setUpBalls();
		startAnimation();
	}

	this.setUpBalls = function() {
		for (var i = 0; i < this.totalBalls; i++) {
			let red = getRandom(0, 255);
			let green = getRandom(0, 255);
			let blue = getRandom(0, 255);
			let color = `rgb(${red},${green},${blue})`;
			let radius = (getRandom(8, 40));
			let speed = this.setBallSpeed(radius);

			let ball = {
			  x: getRandom(55, 555),
			  y: getRandom(55, 555),
			  radius,
			  radians: 0,
			  color,
			  xUnits: 0,
			  yUnits: 0,
			  speed,
			  angle: getRandom(25, 66)
			};
			this.balls.push(ball);
		}
	};

	this.draw = function() {
		ctx.clearRect(
			0, 0,
			canvas.width,
			canvas.height
		);

		this.balls.forEach((ball) => {
			ball.x += ball.xUnits;
		  ball.y += ball.yUnits;

			ctx.fillStyle = ball.color;
			ctx.beginPath();
			
			ctx.arc(
				ball.x, ball.y,
				ball.radius, 0, 
				2 * Math.PI, false
			);

			ctx.closePath();
			ctx.fill();

			this.checkBorders(ball);
		});
	};

	this.checkBorders = function(ball) {
		if (ball.x < 0 || ball.x > canvas.width) {
			ball.angle = 180 - ball.angle;
			
			this.updateBall(ball);
		}

		if (ball.y < 0 || ball.y > canvas.height) {
			ball.angle = 360 - ball.angle;
			
			this.updateBall(ball);
		}
	}

	this.update = function() {
		this.balls.forEach(function(ball) {
			//updateBall(ball);
			ball.radians = ball.angle * Math.PI/180;
		
			ball.xUnits = Math.cos(ball.radians) * ball.speed;
			ball.yUnits = Math.sin(ball.radians) * ball.speed;
		});
	};

	this.updateBall = function(ball) {
		
	}

	this.setBallSpeed = function(radius) {
		let speed = 0;

		if (radius >= 8 && radius <= 13) {
			speed = getRandom(11, 12);
		}
		else if (radius >= 14 && radius <= 18) {
			speed = getRandom(8, 5);
		}
		else if (radius >= 19 && radius <= 24) {
			speed = getRandom(3, 7);
		}
		else if (radius >= 25 && radius <= 50) {
		 	speed = getRandom(4, 2);
		}
		return speed;
	};
}