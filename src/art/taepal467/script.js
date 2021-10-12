//Name prompt
let name = () => prompt('Enter first name here: ');

//Drawing text canvas
let draw = () => {
    let txt = document.getElementById('canvas').getContext('2d');

    txt.canvas.width  = window.innerWidth * 0.85;
    txt.canvas.height = window.innerHeight * 0.5;

    txt.font = '70px Cinzel Decorative';
    txt.strokeStyle = 'black';
    txt.textBaseline = "hanging";
    txt.strokeText(`Hello, ${name()}! 👋🏾`, 100, 100);
}

draw();