const canvas = document.getElementById('russianFlagCanvas');

const russFlg = canvas.getContext('2d');

russFlg.fillStyle = '#fff';
russFlg.fillRect(0, 0, 400, 100);

russFlg.fillStyle = '#0033a0';
russFlg.fillRect(0, 100, 400, 100);

russFlg.fillStyle = '#da291c';
russFlg.fillRect(0, 200, 400, 100);

russFlg.stroke();