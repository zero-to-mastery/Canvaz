//----------------------- Defining the global variables
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
width = canvas.width;
height = canvas.height;
let state = 0;
let time = 1200;
let offScreen = false;
let counter = 0;

//----------------------- Dividing the Canvas into Blocks
blockSize = 10;
widthInBlocks = width / blockSize;
heightInBlocks = height / blockSize;

//----------------------- Drawing the Border
drawBorder = () => {
  // ctx.fillStyle = "#3A86FF";
  ctx.fillStyle = 'hsla(' + placed() + ', 100%, 40%, 1)';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

//----------------------- Building the Block Constructor
class Block {
  constructor(col, row, color) {
    this.col = col;
    this.row = row;
    this.color = color;
  }

  drawSquare() {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, blockSize, blockSize);
  }

  drawCircle() {
    var x = this.col * blockSize + 5;
    var y = this.row * blockSize + 5;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(x, y, radius(), 0, Math.PI * 2, false);
    ctx.fill();
  }
}

//----------------------- Building the Elements Constructor
class Element {
  constructor() {
    this.segments = [
      //H
      new Block(10, 30, '#FFBE0B'),
      new Block(10, 31, '#FFBE0B'),
      new Block(10, 32, '#FFBE0B'),
      new Block(10, 33, '#FFBE0B'),
      new Block(10, 34, '#FFBE0B'),
      new Block(11, 32, '#FFBE0B'),
      new Block(12, 30, '#FFBE0B'),
      new Block(12, 31, '#FFBE0B'),
      new Block(12, 32, '#FFBE0B'),
      new Block(12, 33, '#FFBE0B'),
      new Block(12, 34, '#FFBE0B'),
      //A
      new Block(15, 30, '#FB5607'),
      new Block(15, 31, '#FB5607'),
      new Block(15, 32, '#FB5607'),
      new Block(15, 33, '#FB5607'),
      new Block(15, 34, '#FB5607'),
      new Block(16, 30, '#FB5607'),
      new Block(16, 32, '#FB5607'),
      new Block(17, 30, '#FB5607'),
      new Block(17, 31, '#FB5607'),
      new Block(17, 32, '#FB5607'),
      new Block(17, 33, '#FB5607'),
      new Block(17, 34, '#FB5607'),
      //C
      new Block(20, 30, '#FF006E'),
      new Block(20, 31, '#FF006E'),
      new Block(20, 32, '#FF006E'),
      new Block(20, 33, '#FF006E'),
      new Block(20, 34, '#FF006E'),
      new Block(21, 30, '#FF006E'),
      new Block(22, 30, '#FF006E'),
      new Block(21, 34, '#FF006E'),
      new Block(22, 34, '#FF006E'),
      //K
      new Block(25, 30, '#8338EC'),
      new Block(25, 31, '#8338EC'),
      new Block(25, 32, '#8338EC'),
      new Block(25, 33, '#8338EC'),
      new Block(25, 34, '#8338EC'),
      new Block(27, 30, '#8338EC'),
      new Block(26, 32, '#8338EC'),
      new Block(26, 31, '#8338EC'),
      new Block(27, 33, '#8338EC'),
      new Block(27, 34, '#8338EC'),
      //T
      new Block(30, 30, '#3A86FF'),
      new Block(31, 30, '#3A86FF'),
      new Block(32, 30, '#3A86FF'),
      new Block(31, 31, '#3A86FF'),
      new Block(31, 32, '#3A86FF'),
      new Block(31, 33, '#3A86FF'),
      new Block(31, 34, '#3A86FF'),
      //O
      new Block(35, 30, 'blue'),
      new Block(35, 31, 'blue'),
      new Block(35, 32, 'blue'),
      new Block(35, 33, 'blue'),
      new Block(35, 34, 'blue'),
      new Block(36, 30, 'blue'),
      new Block(36, 34, 'blue'),
      new Block(37, 30, 'blue'),
      new Block(37, 31, 'blue'),
      new Block(37, 32, 'blue'),
      new Block(37, 33, 'blue'),
      new Block(37, 34, 'blue'),
      new Block(37, 30, 'blue'),
      //B
      new Block(40, 30, 'blue'),
      new Block(40, 31, 'blue'),
      new Block(40, 32, 'blue'),
      new Block(40, 33, 'blue'),
      new Block(40, 34, 'blue'),
      new Block(41, 30, 'blue'),
      new Block(42, 31, 'blue'),
      new Block(41, 32, 'blue'),
      new Block(42, 33, 'blue'),
      new Block(41, 34, 'blue'),
      //E
      new Block(45, 30, 'blue'),
      new Block(45, 31, 'blue'),
      new Block(45, 32, 'blue'),
      new Block(45, 33, 'blue'),
      new Block(45, 34, 'blue'),
      new Block(46, 30, 'blue'),
      new Block(47, 30, 'blue'),
      new Block(46, 32, 'blue'),
      new Block(47, 32, 'blue'),
      new Block(46, 34, 'blue'),
      new Block(47, 34, 'blue'),
      //R
      new Block(50, 30, '#3A86FF'),
      new Block(50, 31, '#3A86FF'),
      new Block(50, 32, '#3A86FF'),
      new Block(50, 33, '#3A86FF'),
      new Block(50, 34, '#3A86FF'),
      new Block(51, 30, '#3A86FF'),
      new Block(52, 31, '#3A86FF'),
      new Block(51, 32, '#3A86FF'),
      new Block(52, 33, '#3A86FF'),
      new Block(52, 34, '#3A86FF'),
      //F
      new Block(55, 30, '#8338EC'),
      new Block(55, 31, '#8338EC'),
      new Block(55, 32, '#8338EC'),
      new Block(55, 33, '#8338EC'),
      new Block(55, 34, '#8338EC'),
      new Block(56, 30, '#8338EC'),
      new Block(57, 30, '#8338EC'),
      new Block(56, 32, '#8338EC'),
      //E
      new Block(60, 30, '#FF006E'),
      new Block(60, 31, '#FF006E'),
      new Block(60, 32, '#FF006E'),
      new Block(60, 33, '#FF006E'),
      new Block(60, 34, '#FF006E'),
      new Block(61, 30, '#FF006E'),
      new Block(62, 30, '#FF006E'),
      new Block(61, 32, '#FF006E'),
      new Block(62, 32, '#FF006E'),
      new Block(61, 34, '#FF006E'),
      new Block(62, 34, '#FF006E'),
      //S
      new Block(65, 30, '#FB5607'),
      new Block(66, 30, '#FB5607'),
      new Block(67, 30, '#FB5607'),
      new Block(65, 31, '#FB5607'),
      new Block(65, 32, '#FB5607'),
      new Block(66, 32, '#FB5607'),
      new Block(67, 32, '#FB5607'),
      new Block(67, 33, '#FB5607'),
      new Block(67, 34, '#FB5607'),
      new Block(66, 34, '#FB5607'),
      new Block(65, 34, '#FB5607'),
      //T
      new Block(70, 30, '#FFBE0B'),
      new Block(71, 30, '#FFBE0B'),
      new Block(72, 30, '#FFBE0B'),
      new Block(71, 31, '#FFBE0B'),
      new Block(71, 32, '#FFBE0B'),
      new Block(71, 33, '#FFBE0B'),
      new Block(71, 34, '#FFBE0B'),
      //2
      new Block(30, 37, '#14213d'),
      new Block(31, 37, '#14213d'),
      new Block(32, 37, '#14213d'),
      new Block(32, 38, '#14213d'),
      new Block(32, 39, '#14213d'),
      new Block(31, 39, '#14213d'),
      new Block(30, 39, '#14213d'),
      new Block(30, 40, '#14213d'),
      new Block(30, 41, '#14213d'),
      new Block(31, 41, '#14213d'),
      new Block(32, 41, '#14213d'),
      //0
      new Block(35, 37, '#14213d'),
      new Block(35, 38, '#14213d'),
      new Block(35, 39, '#14213d'),
      new Block(35, 40, '#14213d'),
      new Block(35, 41, '#14213d'),
      new Block(36, 37, '#14213d'),
      new Block(36, 41, '#14213d'),
      new Block(37, 37, '#14213d'),
      new Block(37, 38, '#14213d'),
      new Block(37, 39, '#14213d'),
      new Block(37, 40, '#14213d'),
      new Block(37, 41, '#14213d'),
      //2
      new Block(40, 37, '#14213d'),
      new Block(41, 37, '#14213d'),
      new Block(42, 37, '#14213d'),
      new Block(42, 38, '#14213d'),
      new Block(42, 39, '#14213d'),
      new Block(41, 39, '#14213d'),
      new Block(40, 39, '#14213d'),
      new Block(40, 40, '#14213d'),
      new Block(40, 41, '#14213d'),
      new Block(41, 41, '#14213d'),
      new Block(42, 41, '#14213d'),
      //0
      new Block(45, 37, '#14213d'),
      new Block(45, 38, '#14213d'),
      new Block(45, 39, '#14213d'),
      new Block(45, 40, '#14213d'),
      new Block(45, 41, '#14213d'),
      new Block(46, 37, '#14213d'),
      new Block(46, 41, '#14213d'),
      new Block(47, 37, '#14213d'),
      new Block(47, 38, '#14213d'),
      new Block(47, 39, '#14213d'),
      new Block(47, 40, '#14213d'),
      new Block(47, 41, '#14213d'),
      //!!!
      new Block(50, 37, '#14213d'),
      new Block(50, 38, '#14213d'),
      new Block(50, 39, '#14213d'),
      new Block(50, 41, '#14213d'),
      new Block(51, 37, '#14213d'),
      new Block(51, 38, '#14213d'),
      new Block(51, 39, '#14213d'),
      new Block(51, 41, '#14213d'),
      new Block(52, 37, '#14213d'),
      new Block(52, 38, '#14213d'),
      new Block(52, 39, '#14213d'),
      new Block(52, 41, '#14213d')
    ];
  }

  draw() {
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].drawSquare();
    }
  }

  drawCircle() {
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].drawCircle();
    }
  }
}

//----------------------- checking if all the elements are outside of the screen
offScreenChecker = () => {
  filteredScreen = element['segments'].some((item) => {
    return 0 <= item.col && item.col <= 80;
  });
  if (filteredScreen === false) {
    offScreen = true;
  }

  //2nd way to check:
  // filteredScreen = element["segments"].filter(item => {
  //     return 0 <= item.col && item.col <= 80;
  //   });
  // if (filteredScreen.length === 0) {
  //     console.log("empty");
  // }

  //3rd way to check:
  // return element["segments"].some((item) => {
  //     return 0 <= item.col && item.col <= 80;
  // });
};

//----------------------- checking if all the elements are back on their original positions
placed = () => {
  return element['segments'].reduce((acc, val) => {
    return acc + val.row;
  }, 0);
};

//----------------------- Explotion animation
explode = () => {
  element['segments'].map((val) => {
    let randomCol = Math.floor(Math.random() * 6);
    let randomRow = Math.floor(Math.random() * 10);
    val.col < 39 ? (val.col -= randomCol) : (val.col += randomCol);
    val.row < 35 ? (val.row -= randomRow) : (val.row += randomRow);
  });
};

//----------------------- Implotion animation
implode = () => {
  time = 10;
  for (let i = 0; i < element['segments'].length; i++) {
    if (element['segments'][i].col < originalElement['segments'][i].col) {
      element['segments'][i].col++;
    } else if (
      element['segments'][i].col > originalElement['segments'][i].col
    ) {
      element['segments'][i].col--;
    } else if (
      element['segments'][i].row < originalElement['segments'][i].row
    ) {
      element['segments'][i].row++;
    } else if (
      element['segments'][i].row > originalElement['segments'][i].row
    ) {
      element['segments'][i].row--;
    }
  }
};

//----------------------- Radius changer
radius = () => {
  if (offScreen === false) {
    return 1 + counter;
  } else if (offScreen === true) {
    return (1 + counter) / 20;
  }
};

//----------------------- Starting the animation
const element = new Element();
const originalElement = JSON.parse(JSON.stringify(element));
// below is me trying to clone and disconnect the object from the original one, so as to compare the cols and rows for the implode animation. None of them worked beside the one used above.
// const originalElement = element["segments"].map(val => val);
// const originalElement = [];
// originalElement.push(element);
// const originalElement = {...obj};
// const clone = Object.assign({}, element);

repeat = () => {
  ctx.clearRect(blockSize, blockSize, width - blockSize, height - blockSize);
  drawBorder();
  placed() === 6403 ? element.draw() : element.drawCircle();
  offScreenChecker();
  if (offScreen === false) {
    explode();
  } else if (offScreen === true) {
    implode();
  }
  state === 0 ? (timeOutId = setTimeout(repeat, time)) : location.reload();
  if (placed() === 6403) {
    setTimeout(() => {
      state = 1;
    }, 2000);
  }
  counter++;
  // console.log("element", element["segments"][0]);
  // console.log("originalElement", originalElement["segments"][0]);
};
repeat();
time = 100;
