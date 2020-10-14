window.onload = function restart() {
  const canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  //Variables
  let minY = innerHeight - innerHeight + 1.25;
  let maxY = innerHeight - 1.25;
  let inc = 10;
  let swarmSize = maxY / 2;
  let size = 2.5;
  let fall = Boolean;
  let mouse = {
    x: undefined,
    y: undefined
  };

  const dotsArr = [];

  //circle Styles
  var colorArr = ['#FC3A8B', '#ffffff', '#4C5BFF'];

  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  function onResize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    reset();
  }

  function reset() {
    restart();
  }
  // draw circles function
  function draw(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.stroke();
  }

  //circle Objects
  function circles(x, y, dy, color, fall, spd) {
    this.x = x;
    this.iniX = x;
    this.y = y;
    this.dy = dy;
    this.dx = 0.2;
    this.color = color;
    this.spd = spd;
    this.size = size;
    fall = true;

    draw(x, y, color);

    this.update = function () {
      if (this.y < maxY && this.fall == true) {
        this.dy = this.spd;
        this.fall = true;
      }

      if (this.x + this.dx > canvas.width || this.x + this.dx < 0) {
        this.dx = -(this.dx * 0.5);
      }

      if (this.y + this.dy > maxY || this.y + this.dy < minY) {
        this.dy = -(this.dy * 0.5);
        this.fall = false;
      }

      //interact with Mouse
      // if mouse and dot coords ar within 50px
      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        //move top left
        if (mouse.x > this.x && mouse.y > this.y) {
          this.dx -= Math.ceil(Math.random() * 1);
          this.dy -= Math.ceil(Math.random() * 1);
          //move bottom right
        } else if (mouse.x < this.x && mouse.y < this.y) {
          this.dx += Math.ceil(Math.random() * 1);
          this.dy += Math.ceil(Math.random() * 1);
          //move bottom left
        } else if (mouse.x > this.x && mouse.y < this.y) {
          this.dx -= Math.ceil(Math.random() * 1);
          this.dy += Math.ceil(Math.random() * 1);
          //move top right
        } else if (mouse.x < this.x && mouse.y > this.y) {
          this.dx += Math.ceil(Math.random() * 1);
          this.dy -= Math.ceil(Math.random() * 1);
        }
      }

      this.y += this.dy;
      this.x += this.dx;
      draw(this.x, this.y, this.color);
    };
  }

  function createDotArr() {
    for (var i = 0; i < swarmSize; i++) {
      let x = Math.floor(inc);
      let y = Math.floor(Math.random() * (maxY - 100) + 10);
      let color = colorArr[Math.floor(Math.random() * colorArr.length)];
      let dy = Math.random() - 0.5;
      let spd = 1;
      dotsArr.push(new circles(x, y, dy, color, fall, spd));
      inc = inc + Math.random() * 35 + 1;
    }
  }

  function renderLoop() {
    createDotArr();
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      dotsArr.forEach(function (circles) {
        circles.update();
      });
    }

    animate();
  }

  requestAnimationFrame(renderLoop);
};
