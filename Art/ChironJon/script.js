function draw() {
  let canvas = document.getElementById('canvasImg');
  let ctx = canvas.getContext('2d');
  const drawLine = (coords, lineWidth) => {
    ctx.save();
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(coords[0], coords[1]);
    for (let i = 2; i < coords.length; i++) {
      if (i % 2 < 1) {
        ctx.lineTo(coords[i], coords[i + 1]);
      }
    }
    ctx.stroke();
    ctx.restore();
  };
  const flower = (startX, startY, pedals) => {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.translate(startX, startY);
    for (let i = 0; i < pedals; i++) {
      let halfPedals = pedals / 2;
      ctx.beginPath();
      ctx.rotate(Math.PI / halfPedals);
      ctx.arc(5, 0, 5, 0, Math.PI + (Math.PI * 2) / 2, true);
      ctx.moveTo(10, 0);
      ctx.lineTo(14, 0);
      ctx.stroke();
    }
    ctx.restore();
  };
  const spikes = (startX, endX, topCutoff, bottomCutoff) => {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.translate(startX, 0);
    let distance = endX - startX;
    for (let i = 0; i < 40; i++) {
      let steps = (distance / 40) * i;
      if (i > topCutoff && i < bottomCutoff) {
        ctx.beginPath();
        ctx.moveTo(0 + steps, i * 5);
        ctx.lineTo(3 + steps, i * 5);
        ctx.stroke();
      }
    }
    ctx.restore();
  };
  const curveSpike = (startX, startY, density, spikeStart, spikeEnd) => {
    ctx.save();
    ctx.translate(startX, startY);
    for (let i = 0; i < density; i++) {
      let halfAmt = density / 2;
      if (i < halfAmt && i > 0) {
        ctx.beginPath();
        ctx.rotate(-Math.PI / halfAmt);
        ctx.moveTo(spikeStart, 0);
        ctx.lineTo(spikeEnd, 0);
        ctx.stroke();
      }
    }
    ctx.restore();
  };
  const arcs = (coords) => {
    ctx.save();
    ctx.lineWidth = 2;
    for (let i = 0; i < coords.length; ) {
      ctx.beginPath();
      ctx.arc(
        coords[i],
        coords[i + 1],
        coords[i + 2],
        0,
        Math.PI + (Math.PI * 0) / 2,
        true
      );
      ctx.stroke();
      i = i + 3;
    }
    ctx.restore();
  };
  const text = (infoArr, size) => {
    ctx.font = size + 'px serif';
    for (let i = 0; i < infoArr.length; ) {
      ctx.strokeText(infoArr[i], infoArr[i + 1], infoArr[i + 2]);
      i = i + 3;
    }
  };
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'green';
  flower(120, 40, 10); // flower
  flower(85, 150, 8);
  drawLine([80, 200, 70, 126, 43, 120, 35, 70], 2); // outline
  drawLine([55, 70, 53, 112, 68, 113, 60, 50], 2);
  drawLine([140, 50, 127, 147, 137, 144, 135, 120], 2);
  drawLine([145, 120, 143, 149, 125, 154, 120, 200, 80, 200], 2);
  drawLine([42, 73, 46, 117, 69, 121]); // spines
  drawLine([50, 73, 49, 114, 68, 117]);
  drawLine([75, 52, 87, 197]);
  drawLine([87, 50, 94, 197]);
  drawLine([100, 49, 100, 196]);
  drawLine([113, 50, 106, 197]);
  drawLine([125, 52, 113, 197]);
  drawLine([126, 151, 140, 146, 139, 123]);
  arcs([45, 70, 10, 100, 50, 40, 140, 120, 5]);
  spikes(18, 53, 13, 25); // spikes
  curveSpike(45, 70, 14, 10, 15);
  spikes(60, 50, 9, 23);
  spikes(49, 76, 9, 40);
  curveSpike(100, 50, 32, 40, 45);
  spikes(149, 120, 9, 40);
  spikes(115, 140, 24, 29);
  curveSpike(140, 120, 12, 6, 11);
  spikes(158, 140, 23, 30);
  text(['H', 2, 32, '2020', 135, 190], 30);
  text(['ackt', 25, 15, 'ober', 25, 25, 'fest', 25, 37], 15);
}
