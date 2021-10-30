let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 50, 150);

ctx.fillStyle = "green";
ctx.fillRect(70, 20, 200, 50);

ctx.fillStyle = "black";
ctx.fillRect(70, 120, 200, 50);

document.querySelector("p").style.marginLeft = "75px";
