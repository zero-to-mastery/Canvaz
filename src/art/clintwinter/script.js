const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

const colors = {
    pumpkin: '#f15604',
    black: '#000',
    brown: 'brown',
};

/**
 * Width = 600; Width/2 = 300
 * Height = 400; Height/2 = 200
 */

const maxX = 600;
const maxY = 400;

// jack-o-lantern outer shape
c.fillStyle = colors.pumpkin;

// left side of pumpkin
c.beginPath();
c.arc((maxX/3)+54, maxY/2+40, 150, Math.PI*1.60, Math.PI*0.40, true);
c.fill();
c.closePath();

// right side of pumpkin
c.beginPath();
c.arc((maxX/3*2)-54, maxY/2+40, 150, Math.PI*1.40, Math.PI*0.60, false);
c.fill();
c.closePath();

// stem
c.beginPath();
c.fillStyle = colors.brown;
c.moveTo(275, 100);
c.arcTo(275, 50, 325, 0, 150);
c.lineTo(350, 5);
c.arcTo(325, 50, 340, 135, 160);
c.lineTo(275, 115);
c.fill();
c.closePath();

// left eye
c.beginPath();
c.fillStyle = colors.black;
c.moveTo(200, 200);
c.lineTo(233, 150);
c.lineTo(266, 200);
c.fill();
c.closePath();

// right eye
c.beginPath();
c.fillStyle = colors.black;
c.moveTo(333, 200);
c.lineTo(366, 150);
c.lineTo(400, 200);
c.fill();
c.closePath();

// mouth
c.beginPath();
c.fillStyle = colors.black;
c.ellipse(300, 275, 100, 75, 0, Math.PI, Math.PI*2, true);
c.fill();
c.closePath();

// teeth
c.fillStyle = colors.pumpkin;
c.fillRect(250, 275, 25, 25);
c.fillRect(325, 325, 25, 25);
