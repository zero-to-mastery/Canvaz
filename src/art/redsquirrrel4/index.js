const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let month;
let day;
let year;

function startClock() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const today = new Date();

  const hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
  const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
  let seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();

  month = today.toLocaleString('default', { month: 'long' });
  day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
  year = today.getFullYear();

  let hourString;

  ctx.fillStyle = 'gold';
  ctx.font = '50px verdana';

  hourString = `${hour}:${minutes}:${seconds}`;
  const textWidth = ctx.measureText(hourString).width;
  ctx.fillText(hourString, canvas.width / 2 - textWidth / 2, canvas.height / 2 - 150);

  const dateString = `${month} ${day}, ${year}`;
  const dateTextWidth = ctx.measureText(dateString).width;
  ctx.fillText(dateString, canvas.width / 2 - dateTextWidth / 2, canvas.height - 480);

  switch (month) {
    case 'January':
      ctx.fillText('Happy New Year!', canvas.width / 2 - 200, canvas.height - 320);
      break;
    case 'February':
      ctx.fillText('Happy Valentine’s', canvas.width / 2 - 220, canvas.height - 320);
      break;
    case 'March':
      ctx.fillText('St. Patrick’s Day is upcoming', canvas.width / 2 - 330, canvas.height - 320);
      break;
    case 'April':
      ctx.fillText('Easter is coming', canvas.width / 2 - 190, canvas.height - 320);
      break;
    case 'May':
      ctx.fillText('Mother’s Day', canvas.width / 2 - 150, canvas.height - 320);
      break;
    case 'June':
      ctx.fillText('Father’s Day is Around!', canvas.width / 2 - 260, canvas.height - 320);
      break;
    case 'July':
      ctx.fillText(
        'The warmest month in the Northern Hemisphere!',
        canvas.width / 2 - 550,
        canvas.height - 320
      );
      break;
    case 'August':
      ctx.fillText('Month of water', canvas.width / 2 - 170, canvas.height - 320);
      break;
    case 'September':
      ctx.fillText('First month of the Autumn', canvas.width / 2 - 290, canvas.height - 320);
      break;
    case 'October':
      ctx.fillText('Hacktoberfest is here!', canvas.width / 2 - 260, canvas.height - 320);
      break;
    case 'November':
      ctx.fillText('Last month of the Autumn', canvas.width / 2 - 300, canvas.height - 320);
      break;
    case 'December':
      ctx.fillText('Merry Christmas!', canvas.width / 2 - 210, canvas.height - 320);
      break;
    default:
      ctx.fillText('Take a break!', canvas.width / 2 - 210, canvas.height - 320);
  }
}

startClock();
setInterval(() => {
  startClock(ctx);
}, 1000);

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  startClock(ctx);
});
