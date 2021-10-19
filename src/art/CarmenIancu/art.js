let goodPumpkin = new Image();
let evilPumpkin = new Image();
let toggle = true;

function init() {
    goodPumpkin.src = 'goodPumpkin.png';
    evilPumpkin.src = 'evilPumpkin.png';
    setInterval(() => {
        draw(toggle);
        toggle = !toggle;
    }, 500);
}

function draw(toggle) {
    const imageToUse = toggle ? goodPumpkin : evilPumpkin;
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 300, 300);

    ctx.drawImage(imageToUse, 0, 0, 300, 300);
}

init();