function init() {
  const itemValue = [1, 5, 2, 8];
  const labels = [10, 8, 6, 4, 2, 0];
  const itemColor = ['#F2994A', '#F2C94C', '#2D9CDB', '#EB5757'];

  var canvas = document.getElementById('canvas');
  var w = window.getComputedStyle(canvas, null).getPropertyValue('width');
  var h = window.getComputedStyle(canvas, null).getPropertyValue('height');
  canvas.setAttribute('width', w);
  canvas.setAttribute('height', h);
  w = Number.parseInt(w.substring(0, w.length - 2));
  h = Number.parseInt(h.substring(0, h.length - 2));
  var context = canvas.getContext('2d');

  context.setLineDash([5, 3]);
  context.strokeStyle = '#3A4658';
  context.lineWidth = 0.5;
  context.font = '16 pt Verdana';
  context.textBaseline = 'bottom';

  for (let i = 0; i < 6; i++) {
    context.fillText(labels[i], 0, i == 0 ? 10 : i * 0.2 * h);
    context.beginPath();
    context.moveTo(20, i * 0.2 * h);
    context.lineTo(canvas.width, i * 0.2 * h);
    context.stroke();
  }

  var start = (w - 200) / 2;
  for (i = 0; i < 4; i++) {
    context.fillStyle = '#000';
    context.fillText(
      itemValue[i],
      start + 15 + (35 * i + 20 * i),
      h - 5 - itemValue[i] * (h / 10)
    );
    context.fillStyle = itemColor[i];
    context.fillRect(
      start + (35 * i + 20 * i),
      h - itemValue[i] * (h / 10),
      35,
      itemValue[i] * (h / 10)
    );
  }
}
