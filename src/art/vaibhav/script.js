function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
        console.log(getRndInteger(0, 255))
        ctx.fillStyle = `rgb(${getRndInteger(0, 255)},${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`;
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 5, 0, Math.PI * 2, true);
        ctx.fill();
    }
}
