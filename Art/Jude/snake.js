//cols and roes of grid
var COLS = 26,
  ROWS = 26,
  //refrence ids for objects in grid
  EMPTY = 0,
  SNAKE = 1,
  FRUIT = 2,
  //direction of refrence ids
  LEFT = 0,
  UP = 1,
  RIGHT = 2,
  DOWN = 3,
  //keyboard refernce ids
  KEY_LEFT = 37,
  KEY_UP = 38,
  KEY_RIGHT = 39,
  KEY_DOWN = 40,
  //canvas object and frames
  canvas,
  ctx,
  keystate,
  score;
//grid object
var grid = {
  width: null,
  height: null,
  _grid: null,
  //function initialize empty grid
  init: function (d, c, r) {
    this.width = c;
    this.height = r;
    this._grid = [];
    for (var x = 0; x < c; x++) {
      this._grid.push([]);
      for (var y = 0; y < r; y++) {
        this._grid[x].push(d);
      }
    }
  },
  //to set a value at a particular cell in grid
  set: function (val, x, y) {
    this._grid[x][y] = val;
  },
  //get the value at a place in a grid
  get: function (x, y) {
    return this._grid[x][y];
  }
};
//snake object including queue and attributes
var snake = {
  direction: null,
  last: null,
  _queue: null,

  init: function (d, x, y) {
    this.direction = d;
    this._queue = [];
    this.insert(x, y);
  },

  insert: function (x, y) {
    this._queue.unshift({ x: x, y: y });
    this.last = this._queue[0];
  },

  remove: function () {
    return this._queue.pop();
  }
};

//to set food at random values
function setFood() {
  var empty = [];

  for (var x = 0; x < grid.width; x++) {
    for (var y = 0; y < grid.height; y++) {
      if (grid.get(x, y) === EMPTY) {
        empty.push({ x: x, y: y });
      }
    }
  }

  var randpos = empty[Math.round(Math.random() * (empty.length - 1))];
  grid.set(FRUIT, randpos.x, randpos.y);
}

//for resetiing the game after game over
function init() {
  score = 0;
  grid.init(EMPTY, COLS, ROWS);
  var sp = { x: Math.floor(COLS / 2), y: ROWS - 1 };
  snake.init(UP, sp.x, sp.y);
  grid.set(SNAKE, sp.x, sp.y);
  setFood();
}

//for rendring game and updating
function loop() {
  update();
  draw();
  //draw frames 60 times a second
  window.requestAnimationFrame(loop, canvas);
}

//to display change in grid and snake position and food position
function update() {
  frames++;

  if (keystate[KEY_LEFT] && snake.direction !== RIGHT) {
    snake.direction = LEFT;
  }
  if (keystate[KEY_UP] && snake.direction !== DOWN) {
    snake.direction = UP;
  }
  if (keystate[KEY_RIGHT] && snake.direction !== LEFT) {
    snake.direction = RIGHT;
  }
  if (keystate[KEY_DOWN] && snake.direction !== UP) {
    snake.direction = DOWN;
  }
  //showing change for every 5 frames
  if (frames % 5 === 0) {
    var nx = snake.last.x;
    var ny = snake.last.y;

    switch (snake.direction) {
      case LEFT:
        nx--;
        break;
      case UP:
        ny--;
        break;
      case RIGHT:
        nx++;
        break;
      case DOWN:
        ny++;
        break;
    }

    if (
      0 > nx ||
      nx > grid.width - 1 ||
      0 > ny ||
      ny > grid.height - 1 ||
      grid.get(nx, ny) === SNAKE
    ) {
      return init();
    }

    if (grid.get(nx, ny) === FRUIT) {
      score++;
      setFood();
    } else {
      var tail = snake.remove();
      grid.set(EMPTY, tail.x, tail.y);
    }

    grid.set(SNAKE, nx, ny);
    snake.insert(nx, ny);
  }
}

//drawing the elemnts into canvas
function draw() {
  var tw = canvas.width / grid.width;
  var th = canvas.height / grid.height;

  for (var x = 0; x < grid.width; x++) {
    for (var y = 0; y < grid.height; y++) {
      switch (grid.get(x, y)) {
        case EMPTY:
          ctx.fillStyle = 'black';
          break;
        case SNAKE:
          ctx.fillStyle = 'green';
          break;
        case FRUIT:
          ctx.fillStyle = 'red';
          break;
      }
      ctx.fillRect(x * tw, y * th, tw, th);
    }
  }

  ctx.fillStyle = 'white';
  ctx.fillText('SCORE: ' + score, 10, canvas.height - 10);
}

//main function which starts the game
function main() {
  canvas = document.createElement('canvas');
  canvas.width = COLS * 20;
  canvas.height = ROWS * 20;
  ctx = canvas.getContext('2d');
  var body = document.getElementById('body');
  body.appendChild(canvas);

  ctx.font = '12px Helvetica';
  frames = 0;
  keystate = {};

  document.addEventListener('keydown', function (evt) {
    keystate[evt.keyCode] = true;
  });
  document.addEventListener('keyup', function (evt) {
    delete keystate[evt.keyCode];
  });

  init();
  loop();
}

//initial call to start game
main();
