const canvas = document.getElementById('canvas');
const japan = canvas.getContext('2d');

japan.fillStyle = "#B6002C";
japan.arc(150, 75, 40, 0, 2 * Math.PI);
japan.stroke();
japan.fill();