const canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

let rects = [];
let opts = {
  columnWidth: 80,
  columns: 20,
  rows: 20,
  width: 100,
  height: 100,
  spread: 1.5,
  blurLevel: 0.6,
  fill: '#bbe5ed'
};

function render() {
  requestAnimationFrame(render);

  var scrollX = -(window.pageXOffset || window.scrollX);
  var scrollY = -(window.pageYOffset || window.scrollY);

  ctx.globalCompositeOperation = 'source-over';

  for (var j = 0, rect; j < rects.length; j++) {
    rect = rects[j];
    ctx.globalAlpha = rect.opacity;
    //Math.min( rect.opacity - ( opts.blurLevel ), 1 );
    ctx.beginPath();
    ctx.fillRect(
      rect.x * opts.columnWidth + scrollX * rect.z,
      rect.y * opts.columnWidth + scrollY * rect.z,
      opts.columnWidth,
      opts.columnWidth
    );
    ctx.closePath();
  }

  ctx.globalAlpha = opts.blurLevel;
  ctx.globalCompositeOperation = 'source-in';
  ctx.fillRect(0, 0, opts.width, opts.height);
}

function makeRect(x, y) {
  return {
    x,
    y,
    z: opts.spread + Math.random() * (opts.spread - 1),
    opacity: 0.3 + Math.random() * 0.7
  };
}

function makeRects(columns, rows) {
  var arr = [];

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < columns; x++) {
      if (Math.random() > 0.7) {
        arr.push(makeRect(x, y));
      }
    }
  }

  return arr;
}

var resize = function resize() {
  var x, y, rect, tl;

  canvas.width = opts.width = window.innerWidth;
  canvas.height = opts.height = window.innerHeight;
  opts.columns = Math.round(
    (document.body.clientWidth * opts.spread) / opts.columnWidth
  );
  opts.rows = Math.floor(
    (document.body.clientHeight * opts.spread) / opts.columnWidth
  );

  ctx.fillStyle = opts.fill;

  rects = makeRects(opts.columns, opts.rows);

  console.log('resize', rects.length, opts);
};

resize();
window.addEventListener('resize', resize);

render();
