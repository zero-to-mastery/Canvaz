const canvas = document.getElementById('canvas');

//This is the main wording of the canvas
const ctx = canvas.getContext('2d');

//Setting font text color, and postioning of the main text
ctx.font = '48px Arial Black';
ctx.fillStyle = '#32de88';
ctx.fillText('ZTM', 10, 50);
//Setting the Shadow looking text in the background that is offset
ctx.fillStyle = '#9373af9e';
ctx.fillText('ZTM', 12, 53);
//Setting the Academy subtext
ctx.fillStyle = 'black';
ctx.font = '25px Courier New';
ctx.fillText('Academy', 15, 78);
