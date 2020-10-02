'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const minCanvasY = 0;
const minCanvasX = minCanvasY;
const maxCanvasY = 400;
const maxCanvasX = maxCanvasY;

const startAngle = 0;
const endAngle = 2 * Math.PI;

const totalBubbles = 150;
const bubbles = [];

function initBubbles() {
  addBubbles();
  setInterval(draw, 10);
}

function addBubbles() {
  for (let i = 0; i < totalBubbles; i++) {
    addBubble();
  }
}

function addBubble() {
  const posX = getRandomPosX();
  const posY = getRandomPosY();
  const radius = randomIntFromInterval(1, 50);
  const color = randomBubbleColor();
  const increment = Math.random() + 1;
  bubbles.push({ posX, posY, radius, color, increment });
}

function draw() {
  createDrawingSurface();

  bubbles.map((bubble) => {
    drawBubble(bubble);
  });

  moveBubbles();
}

function createDrawingSurface() {
  context.clearRect(0, 0, maxCanvasX, maxCanvasY);
}

function drawBubble(bubble) {
  context.beginPath();
  context.arc(bubble.posX, bubble.posY, bubble.radius, startAngle, endAngle);
  context.fillStyle = bubble.color;
  context.fill();
}

function moveBubbles() {
  bubbles.map((bubble) => {
    moveBubblePosX(bubble);
    moveBubblePosY(bubble);
    resetBubblePosition(bubble);
  });
}

function moveBubblePosX(bubble) {
  bubble.posX += generateRandomNumber(-0.5, 0.5, 2);
}

function moveBubblePosY(bubble) {
  bubble.posY -= bubble.increment;
}

function resetBubblePosition(bubble) {
  if (
    bubble.posY < -50 ||
    bubble.posX > maxCanvasX + 50 ||
    bubble.posX < minCanvasX - 50
  ) {
    bubble.posX = getRandomPosX();
    bubble.posY = getRandomPosY();
  }
}

function getRandomPosX() {
  return randomIntFromInterval(minCanvasX - 20, maxCanvasX + 20);
}

function getRandomPosY() {
  return randomIntFromInterval(maxCanvasY + 50, maxCanvasY + 400);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumber(min, max, decimalPlaces) {
  const rand =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
}

function randomBubbleColor() {
  const red = randomIntFromInterval(60, 80);
  const green = randomIntFromInterval(180, 220);
  const blue = 255;

  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}
