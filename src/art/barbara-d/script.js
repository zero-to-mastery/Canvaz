/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'lightblue';
//x position, y position, width, height
ctx.fillRect(100, 200, 150, 100);
// ctx.clearRect(150, 100, 200, 200);