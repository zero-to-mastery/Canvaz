const colorPicker = document.getElementById('ytrkptl-color-picker');
const canvas = document.getElementById('ytrkptl-canvas');
const ctx = canvas.getContext('2d');
const animateBtn = document.getElementById('animate-button');

// function that will draw y axis on the graph
function drawYAxis() {
  ctx.strokeStyle = `black`;
  ctx.beginPath();
  ctx.moveTo(400 / 2, 0);
  ctx.lineTo(400 / 2, 400);
  ctx.stroke();
}

// function that will draw x axis on the graph
function drawXAxis() {
  ctx.strokeStyle = `black`;
  ctx.beginPath();
  ctx.moveTo(0, 400 / 2);
  ctx.lineTo(400, 400 / 2);
  ctx.stroke();
}

// function that will place a dot on the origin
function drawOrigin() {
  let center = 400 / 2;
  ctx.fillStyle = `black`;
  ctx.beginPath();
  ctx.ellipse(center, center, 4, 4, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();
}

// function that draw the other Horizontal lines
function drawOtherHorizontalLines() {
  ctx.strokeStyle = `#a9a9a9`;
  ctx.beginPath();
  for (let i = 0; i < 400; i += 40) {
    ctx.moveTo(0, i);
    ctx.lineTo(400, i);
  }
  ctx.stroke();
}

// function that draw the other Vertical lines
function drawOtherVerticalLines() {
  ctx.strokeStyle = `#a9a9a9`;
  ctx.beginPath();
  for (let i = 0; i < 400; i += 40) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 400);
  }
  ctx.stroke();
}

// function that will place dashes on the x-axis at equal intervals
function drawIntervalsOnXAxis() {
  ctx.strokeStyle = `black`;
  ctx.beginPath();
  for (let i = 0; i < 400; i += 40) {
    ctx.moveTo(i, 400 / 2 - 4);
    ctx.lineTo(i, 400 / 2 + 4);
  }
  ctx.stroke();
}

// function that will place dashes on the y-axis at equal intervals
function drawIntervalsOnYAxis() {
  ctx.strokeStyle = `black`;
  ctx.beginPath();
  for (let i = 0; i < 400; i += 40) {
    ctx.moveTo(400 / 2 - 4, i);
    ctx.lineTo(400 / 2 + 4, i);
  }
  ctx.stroke();
}

// add some text to the graph
function addText() {
  ctx.font = '50px serif';
  ctx.fillText('Made with ❤️ at ZTM', 20, 160, 360);
  ctx.fillText('-by Yatrik Patel', 100, 260, 200);
}

// draws the graph displayed on screen
function drawAGraph(color = '#F8F8F8') {
  canvas.setAttribute('height', '400px');
  canvas.setAttribute('width', '400px');
  ctx.fillStyle = `${color}`;
  ctx.fillRect(0, 0, 400, 400);
  drawYAxis();
  drawXAxis();
  drawOrigin();
  drawOtherHorizontalLines();
  drawOtherVerticalLines();
  drawIntervalsOnXAxis();
  drawIntervalsOnYAxis();
  addText();
}

// animates the graph
function animateAGraph() {
  canvas.setAttribute('height', '400px');
  canvas.setAttribute('width', '400px');
  ctx.fillStyle = '#f8f8f8';
  ctx.fillRect(0, 0, 400, 400);
  let arr2 = [
    drawYAxis,
    drawXAxis,
    drawOrigin,
    drawOtherHorizontalLines,
    drawOtherVerticalLines,
    drawIntervalsOnXAxis,
    drawIntervalsOnYAxis,
    addText
  ];
  let i = 0;
  let animate = setInterval(() => {
    if (i < arr2.length) {
      arr2[i]();
      i++;
    } else {
      clearInterval(animate);
    }
  }, 200);
}

// call the function initially
drawAGraph();

// redraws canvas with new bg color
function setCanvasBgColor(event) {
  drawAGraph(event.target.value);
}

// add event listeners
colorPicker.addEventListener('input', setCanvasBgColor);
animateBtn.addEventListener('click', animateAGraph);
