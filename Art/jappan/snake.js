// snakes game

// Game loop - Init, Draw, Update

function init() {
  // console.log("Init")
  canvas = document.getElementById('mycanvas');
  pen = canvas.getContext('2d'); //pen used for drawing on board
  W = canvas.width;
  H = canvas.height;
  score = 1;
  game_over = false;

  food_img = new Image();
  food_img.src = 'assets/apple.png';

  trophy = new Image();
  trophy.src = 'assets/trophy.png';

  food = getRandomFood();

  snake = {
    init_length: 1,
    color: 'blue',
    cells: [],
    direction: 'right',

    createSnake: function () {
      for (var i = this.init_length - 1; i >= 0; i--) {
        this.cells.push({ x: i, y: 0 });
      }
    },
    drawSnake: function () {
      for (var i = 0; i < this.cells.length; i++) {
        pen.fillStyle = this.color;
        pen.strokeStyle = 'black';
        pen.lineWidth = 2;
        pen.strokeRect(this.cells[i].x * 10, this.cells[i].y * 10, 10, 10);
        pen.fillRect(this.cells[i].x * 10, this.cells[i].y * 10, 10, 10);
      }
    },
    updateSnake: function () {
      var headX = this.cells[0].x;
      var headY = this.cells[0].y;

      if (headX == food.x && headY == food.y) {
        food = getRandomFood();
        score++;
      } else {
        // Pop last cell if food is not eaten
        this.cells.pop();
      }

      if (this.direction == 'right') {
        nextX = headX + 1;
        nextY = headY;
      } else if (this.direction == 'left') {
        nextX = headX - 1;
        nextY = headY;
      } else if (this.direction == 'down') {
        nextX = headX;
        nextY = headY + 1;
      } else {
        nextX = headX;
        nextY = headY - 1;
      }
      // Insert the new cell at head/front
      this.cells.unshift({ x: nextX, y: nextY });

      var last_x = Math.round(W / 10);
      var last_y = Math.round(H / 10);

      for (var i = 1; i < snake.cells.length; i++) {
        if (
          this.cells[0].x == this.cells[i].x &&
          this.cells[0].y == this.cells[i].y
        ) {
          alert('GameOver!');
          game_over = true;
        }
      }

      if (
        this.cells[0].y < 0 ||
        this.cells[0].x < 0 ||
        this.cells[0].x > last_x ||
        this.cells[0].y > last_y
      ) {
        alert('GameOver!');
        game_over = true;
      }
    }
  };
  snake.createSnake();

  // Add Event listeners to our game
  // listen for keyboard events.
  function keyPressed(e) {
    console.log('Key pressed');
    console.log(e);

    if (e.key == 'ArrowRight') {
      snake.direction = 'right';
    } else if (e.key == 'ArrowLeft') {
      snake.direction = 'left';
    } else if (e.key == 'ArrowDown') {
      snake.direction = 'down';
    } else if (e.key == 'ArrowUp') {
      snake.direction = 'up';
    }
  }

  document.addEventListener('keydown', keyPressed);
}

function draw() {
  pen.clearRect(0, 0, W, H);
  // draw the snake
  snake.drawSnake();

  // draw the food
  pen.fillStyle = food.color;
  pen.drawImage(food_img, food.x * 10, food.y * 10, 10, 10);

  // draw score on screen
  pen.drawImage(trophy, 60, 2, 12, 12);
  pen.fillStyle = 'white';
  pen.font = '12px Roboto';
  pen.fillText('Score : ' + score, 10, 10);
}

function update() {
  snake.updateSnake();
}

function getRandomFood() {
  var foodX = Math.round((Math.random() * (W - 10)) / 10);
  var foodY = Math.round((Math.random() * (H - 10)) / 10);

  foodColors = ['red', 'green', 'aqua', 'coral', 'orchid'];
  var i = Math.round(Math.random() * foodColors.length);

  var food = {
    x: foodX,
    y: foodY,
    color: foodColors[i]
  };
  return food;
}

function gameloop() {
  draw();
  update();

  if (game_over == true) {
    clearInterval(f);
    return;
  }
}

const mybut = document.querySelector('.mybutton-btn');
mybut.onclick = init;
// Call Game Loop after t time
var f = setInterval(gameloop, 100);
