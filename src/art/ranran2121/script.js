function draw() {
  var mainColor = "rgb(168, 50, 102)";
  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    //rounded rectangle
    function roundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      //ctx.stroke();
      ctx.fill();
    }

    //tail
    ctx.fillStyle = mainColor;
    roundedRect(ctx, 180, 353, 150, 30, 15);
    //left hear
    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.moveTo(270, 150);
    ctx.lineTo(270, 195);
    ctx.lineTo(300, 175);
    ctx.fill();
    //right hear
    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.moveTo(380, 150);
    ctx.lineTo(380, 195);
    ctx.lineTo(350, 175);
    ctx.fill();
    //body
    ctx.fillStyle = mainColor;
    roundedRect(ctx, 250, 250, 150, 133, 50);
    //head
    ctx.fillStyle = mainColor;
    roundedRect(ctx, 270, 167, 110, 83, 35);
    //stripes head
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(300, 167);
    ctx.lineTo(310, 187);
    ctx.lineTo(320, 167);
    ctx.fill();
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(330, 167);
    ctx.lineTo(340, 187);
    ctx.lineTo(350, 167);
    ctx.fill();
    //eye
    ctx.fillStyle = "rgb(0, 0, 0)";
    roundedRect(ctx, 300, 200, 5, 7, 2);
    ctx.fillStyle = "rgb(0, 0, 0)";
    roundedRect(ctx, 345, 200, 5, 7, 2);
    //nose
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(325, 220);
    ctx.lineTo(315, 210);
    ctx.lineTo(335, 210);
    ctx.fill();
    //whiskers left
    ctx.beginPath();
    ctx.moveTo(315, 212);
    ctx.lineTo(250, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(315, 215);
    ctx.lineTo(250, 215);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(315, 218);
    ctx.lineTo(250, 230);
    ctx.stroke();
    //whiskers right
    ctx.beginPath();
    ctx.moveTo(335, 212);
    ctx.lineTo(400, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(335, 215);
    ctx.lineTo(400, 215);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(335, 218);
    ctx.lineTo(400, 230);
    ctx.stroke();
    //stripes body
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(250, 295);
    ctx.lineTo(280, 305);
    ctx.lineTo(250, 315);
    ctx.fill();
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(250, 317);
    ctx.lineTo(280, 327);
    ctx.lineTo(250, 337);
    ctx.fill();
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(400, 295);
    ctx.lineTo(370, 305);
    ctx.lineTo(400, 315);
    ctx.fill();
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(400, 317);
    ctx.lineTo(370, 327);
    ctx.lineTo(400, 337);
    ctx.fill();
    //stripes tail
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(200, 353);
    ctx.lineTo(210, 373);
    ctx.lineTo(220, 353);
    ctx.fill();
    ctx.fillStyle = "rgb(200, 150, 150)";
    ctx.beginPath();
    ctx.moveTo(230, 353);
    ctx.lineTo(240, 373);
    ctx.lineTo(250, 353);
    ctx.fill();

    //paw
    /* ctx.fillStyle = mainColor;
    roundedRect(ctx, 400, 270, 30, 50, 15); */

    function hearth() {
      ctx.beginPath();
      ctx.moveTo(415, 40);
      ctx.bezierCurveTo(415, 37, 400, 25, 390, 25);
      ctx.bezierCurveTo(360, 25, 360, 62.5, 360, 62.5);
      ctx.bezierCurveTo(360, 80, 380, 102, 415, 120);
      ctx.bezierCurveTo(450, 102, 470, 80, 470, 62.5);
      ctx.bezierCurveTo(470, 62.5, 470, 25, 440, 25);
      ctx.bezierCurveTo(425, 25, 415, 37, 415, 40);
      ctx.fill();
    }

    function text(str) {
      ctx.font = "48px cursive";
      ctx.fillText(str, 10, 50);
    }

    let cName = canvas.className;

    function movePaw() {
      if (cName == "flash") {
        ctx.fillStyle = "rgb(247, 7, 113)";
        hearth();
        text("Good Luck!");
        ctx.fillStyle = mainColor;
        roundedRect(ctx, 400, 250, 30, 70, 15);
        cName = "noflash";
      } else {
        ctx.fillStyle = "rgb(238, 230, 245)";
        text("Good Luck!");
        hearth();
        roundedRect(ctx, 400, 250, 30, 70, 15);
        ctx.fillStyle = "rgb(200, 150, 150)";
        roundedRect(ctx, 400, 270, 30, 50, 15);
        cName = "flash";
      }
    }
  }
  setInterval(movePaw, 2000);
}
