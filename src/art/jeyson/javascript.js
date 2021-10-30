let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

let text = "Nicaragua Libre!";
c.beginPath(); 
c.moveTo(50, 90);
c.lineTo(238, 90);
c.moveTo(70, 110);
c.lineTo(218, 110);
c.moveTo(90, 130);
c.lineTo(208, 130);

c.stroke();
c.strokeStyle = "#000000";
c.font = "30px Oswald";
c.fillText(text, 50, 80 );
c.textAlign = "center";



