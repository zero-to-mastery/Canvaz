'use strict';

/**
 * All bubble related functions and constants
 */
const Bubbles = (function () {
  const startAngle = 0;
  const endAngle = 2 * Math.PI;

  const minBubbleRadius = 2;
  const maxBubbleRadius = 50;

  const totalBubbles = 300;
  const bubblesArray = [];

  const minPosXOffset = -(maxBubbleRadius / 2);
  const maxPosXOffset = maxBubbleRadius / 2;

  const minPosYOffset = maxBubbleRadius / 2;
  const maxPosYOffset = maxBubbleRadius * 2;

  const shakeRange = {
    min: -0.5,
    max: 0.5
  };

  const colors = {
    red: {
      min: 80,
      max: 200
    },
    green: {
      min: 140,
      max: 220
    },
    blue: {
      min: 245,
      max: 255
    }
  };

  function initBubbles() {
    for (let i = 0; i < totalBubbles; i++) {
      addBubble(bubblesArray);
    }
  }

  function addBubble(bubblesArray) {
    bubblesArray.push({
      posX: getStartingPosX(),
      posY: getStartingPosY(),
      radius: getRandomIntFromInterval(minBubbleRadius, maxBubbleRadius),
      color: getRandomRgbColor(),
      movement: Math.random() + 1
    });
  }

  function getStartingPosX() {
    const minX = minPosXOffset;
    const maxX = window.innerWidth + maxPosXOffset;
    return getRandomIntFromInterval(minX, maxX);
  }

  function getStartingPosY() {
    const minY = window.innerHeight + minPosYOffset;
    const maxY = window.innerHeight * 2 + maxPosYOffset;
    return getRandomIntFromInterval(minY, maxY);
  }

  function getRandomRgbColor() {
    const red = getRandomIntFromInterval(colors.red.min, colors.red.max);
    const green = getRandomIntFromInterval(colors.green.min, colors.green.max);
    const blue = getRandomIntFromInterval(colors.blue.min, colors.blue.max);
    const rgb = `rgb(${red},${green},${blue})`;
    return rgb;
  }

  function getRandomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomDecimalFromInterval(min, max) {
    const rand =
      Math.random() < 0.5
        ? (1 - Math.random()) * (max - min) + min
        : Math.random() * (max - min) + min;

    const power = Math.pow(10, 2);
    return Math.floor(rand * power) / power;
  }

  function drawBubbles(context) {
    bubblesArray.map((bubble) => {
      drawBubble(context, bubble);
    });
  }

  function drawBubble(context, bubble) {
    context.beginPath();
    context.arc(bubble.posX, bubble.posY, bubble.radius, startAngle, endAngle);
    context.fillStyle = bubble.color;
    context.fill();
  }

  function moveBubbles() {
    bubblesArray.map((bubble) => {
      getNewBubblePosX(bubble);
      getNewBubblePosY(bubble);
      resetBubblePosition(bubble);
    });
  }

  function getNewBubblePosX(bubble) {
    bubble.posX += getRandomDecimalFromInterval(shakeRange.min, shakeRange.max);
  }

  function getNewBubblePosY(bubble) {
    bubble.posY -= bubble.movement;
  }

  function resetBubblePosition(bubble) {
    const outOfBounds = {
      y: {
        min: -(maxBubbleRadius / 2) - 5
      },
      x: {
        min: -(maxBubbleRadius / 2) + 5,
        max: window.innerWidth + maxBubbleRadius / 2 + 5
      }
    };

    if (
      bubble.posY < outOfBounds.y.min ||
      bubble.posX > outOfBounds.x.max ||
      bubble.posX < outOfBounds.x.min
    ) {
      bubble.posX = getStartingPosX();
      bubble.posY = getStartingPosY();
    }
  }

  return { initBubbles, drawBubbles, moveBubbles };
})();

/**
 * Main starting point for the art drawing
 */
const Art = (function (Bubbles) {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  function init() {
    Bubbles.initBubbles();
    const updateTempo = 10;
    setInterval(startDrawing, updateTempo);
  }

  function startDrawing() {
    clearDrawingSurface();
    Bubbles.drawBubbles(context);
    Bubbles.moveBubbles();
  }

  function clearDrawingSurface() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  return { init };
})(Bubbles);

/**
 * Must initialize the art to kick everything off
 */
Art.init();
