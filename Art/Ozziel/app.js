const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext('2d');
const img = document.querySelector('img');

context.fillStyle = 'red';
context.fillRect(5, 10, 100, 130);
context.fillStyle = 'white';
context.fillRect(95, 10, 100, 130);
context.fillStyle = 'red';
context.fillRect(195, 10, 100, 130);

context.drawImage(img, 110, 45, 75, 70);

console.log(img);
