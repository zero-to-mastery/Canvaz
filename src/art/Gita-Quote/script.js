const canvas = document.querySelector('#quote');

if (canvas.getContext) {
  ctx = canvas.getContext('2d');
  ctx.font = '40px Comic Sans MS';
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.strokeText('क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।', 500, 50);
  ctx.strokeText('स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति।।', 500, 100);
  ctx.strokeText('From anger, complete delusion arises', 500, 180);
  ctx.strokeText('and from delusion bewilderment of memory.', 500, 220);
  ctx.strokeText('When memory is bewildered, intelligence is lost', 500, 260);
  ctx.strokeText('and when intelligence is lost, one is ruined.', 500, 300);
  ctx.strokeText('- Bhagavad gita, 2.63', 500, 350);
} else {
  console.log('Canvas not working');
}
