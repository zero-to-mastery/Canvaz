const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const linearGradient = context.createLinearGradient(0, 0, canvas.width, 0);
linearGradient.addColorStop(0, 'white');
linearGradient.addColorStop(1, 'blue');
context.fillStyle = linearGradient;
context.fillRect(10, 10, 150, 90);
context.font = '28px Arial';
context.strokeText('Hello World', 10, 60);
