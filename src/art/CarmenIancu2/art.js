window.onload = function () {
    const element = document.getElementById("countdown");
    const noOfDaysTillXmas = calculateTitle();
    element.innerText = noOfDaysTillXmas + ' days till Xmas!';

    draw(noOfDaysTillXmas);
}

function calculateTitle() {
    const today = new Date();
    let xmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        xmas.setFullYear(cmas.getFullYear() + 1);
    }
    const one_day = 1000 * 60 * 60 * 24;
    return Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
}

function draw(no) {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 365, 100);
    ctx.save();
    ctx.moveTo(0,10);
    ctx.fillStyle = '#FF6666';
    ctx.fillRect(0, 10, no, 90);
}