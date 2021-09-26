const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// sign
context.fillStyle = "#2B3531";
context.fillRect(200, 150, 200, 140);

// Left Outta Ear
context.beginPath();
context.moveTo(275, 20);
context.lineTo(255, 60);
context.lineTo(295, 60);
context.fillStyle = '#F74700';
context.fill()

// Left Inner Ear
context.beginPath();
context.moveTo(275, 32);
context.lineTo(265, 55);
context.lineTo(285, 55);
context.fillStyle = '#000';
context.fill()

// Right Outta Ear
context.beginPath();
context.moveTo(325, 20);
context.lineTo(305, 60);
context.lineTo(345, 60);
context.fillStyle = '#F74700';
context.fill()

// Right Inner Ear
context.beginPath();
context.moveTo(325, 32);
context.lineTo(315, 55);
context.lineTo(335, 55);
context.fillStyle = '#000';
context.fill()

// head
context.beginPath();
context.moveTo(300, 150);
context.lineTo(240, 60);
context.lineTo(360, 60);
context.fillStyle = '#F74700';
context.fill();

// legs
context.fillRect(255, 290, 40, 60);
context.fillRect(305, 290, 40, 60);

// Left Foot
context.beginPath();
context.arc(275, 350, 20,( Math.PI/180 ) * 180, ( Math.PI/180 ) * 0);
context.fillStyle = '#000';
context.fill()

// Right Foot
context.beginPath();
context.arc(325, 350, 20,( Math.PI/180 ) * 180, ( Math.PI/180 ) * 0);
context.fillStyle = '#000';
context.fill()

// left arm
context.beginPath();
context.arc(180, 180, 20, 0, Math.PI * 2, true);
context.fillStyle = '#F74700';
context.fill();

// right arm
context.beginPath();
context.arc(420, 180, 20, 0, Math.PI * 2, true);
context.fill();



// eyes
context.beginPath();
context.arc(288, 90, 5, 0, Math.PI * 2, true);
context.fillStyle = 'white';
context.fill();
context.beginPath();
context.arc(308, 90, 5, 0, Math.PI * 2, true);
context.fill();

var img = new Image();   // Create new img element
img.src = './hacktoberfest.png';
img.height = "10px"
const ctx = context
img.onload = function() {
    ctx.drawImage(img, 250, 171, 100, 100);

  };