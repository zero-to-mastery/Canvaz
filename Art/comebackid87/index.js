/* creating the clock container */
let canvasArea = document.getElementById('canvasPad');
let theContext = canvasArea.getContext('2d');
let radius = canvasArea.height / 2;
theContext.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClockContainer, 1000);

/* creating the face of the clock */
function drawClockContainer() {
  drawClockFace(theContext, radius);
  addClockNumbers(theContext, radius);
  addClockTime(theContext, radius);
}

function drawClockFace(theContext, radius) {
  let grad;

  theContext.beginPath();
  theContext.arc(0, 0, radius, 0, 2 * Math.PI);
  theContext.fillStyle = '#00f';
  theContext.fill();

  grad = theContext.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  grad.addColorStop(0, '#0f0');
  grad.addColorStop(0.5, '#0f0');
  grad.addColorStop(1, '#000');
  theContext.strokeStyle = grad;
  theContext.lineWidth = radius * 0.05;
  theContext.stroke();

  theContext.beginPath();
  theContext.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  theContext.fillStyle = '#0f0';
  theContext.fill();
}

/* add the clock numbers */
function addClockNumbers(theContext, radius) {
  let angle;
  let numbers;
  theContext.font = radius * 0.15 + 'px lato';
  theContext.textBaseline = 'middle';
  theContext.textAlign = 'center';

  for (numbers = 1; numbers < 13; numbers++) {
    angle = (numbers * Math.PI) / 6;
    theContext.rotate(angle);
    theContext.translate(0, -radius * 0.85);
    theContext.rotate(-angle);
    theContext.fillText(numbers.toString(), 0, 0);
    theContext.rotate(angle);
    theContext.translate(0, radius * 0.85);
    theContext.rotate(-angle);
  }
}

/* adds the time */
function addClockTime(theContext, radius) {
  let timeNow = new Date();
  let hourHand = timeNow.getHours();
  let minuteHand = timeNow.getMinutes();
  let secondHand = timeNow.getSeconds();

  /* calculate the time in  hours */
  hourHand = hourHand % 12;
  hourHand =
    (hourHand * Math.PI) / 6 +
    (minuteHand * Math.PI) / (6 * 60) +
    (secondHand * Math.PI) / (360 * 60);
  addClockHands(theContext, hourHand, radius * 0.5, radius * 0.05);

  /* calculate the time in  minutes */
  minuteHand = (minuteHand * Math.PI) / 30 + (secondHand * Math.PI) / (30 * 60);
  addClockHands(theContext, minuteHand, radius * 0.8, radius * 0.05);

  /* calculate the time in  seconds */
  secondHand = (secondHand * Math.PI) / 30;
  addClockHands(theContext, secondHand, radius * 0.9, radius * 0.01);
}

/* adds the clock hands onto the clock according to time */
function addClockHands(theContext, position, handLength, handWidth) {
  theContext.beginPath();
  theContext.lineWidth = handWidth;
  theContext.lineCap = 'round';
  theContext.moveTo(0, 0);
  theContext.rotate(position);
  theContext.lineTo(0, -handLength);
  theContext.stroke();
  theContext.rotate(-position);
  theContext.strokeStyle = '#0f0';
}

/* fetches the current year */
document.getElementById('year').innerHTML = new Date().getFullYear();
