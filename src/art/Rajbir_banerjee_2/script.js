var power=function init() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    logo(ctx);
  }

  var logo=function draw(ctx) {

    ctx.save();
    ctx.beginPath();

    ctx.moveTo(0.0, 132.4);
    ctx.lineTo(390.9, 540.4);
    ctx.lineTo(779.8, 132.4);
    ctx.lineTo(649.5, 0.0);
    ctx.lineTo(130.3, 0.0);
    ctx.lineTo(0.0, 132.4);
    ctx.lineTo(0.0, 132.4);
    ctx.closePath();

    ctx.moveTo(641.7, 37.5);
    ctx.lineTo(723.4, 121.0);
    ctx.lineTo(733.5, 131.3);
    ctx.lineTo(724.0, 142.2);
    ctx.lineTo(630.0, 249.1);
    ctx.bezierCurveTo(592.1, 162.2, 451.4, 167.7, 373.7, 169.4);
    ctx.bezierCurveTo(307.7, 170.9, 229.5, 162.7, 224.6, 109.3);
    ctx.bezierCurveTo(219.9, 57.4, 309.2, 33.5, 361.3, 33.6);
    ctx.bezierCurveTo(418.3, 33.7, 509.8, 43.1, 523.4, 136.5);
    ctx.bezierCurveTo(562.8, 136.5, 602.3, 136.5, 641.7, 136.5);
    ctx.lineTo(641.7, 37.5);
    ctx.lineTo(641.7, 37.5);
    ctx.closePath();

    ctx.moveTo(499.8, 397.1);
    ctx.lineTo(402.1, 508.2);
    ctx.lineTo(390.5, 521.4);
    ctx.lineTo(378.8, 508.2);
    ctx.lineTo(283.4, 400.0);
    ctx.bezierCurveTo(367.8, 415.4, 438.1, 411.9, 499.8, 397.1);
    ctx.lineTo(499.8, 397.1);
    ctx.closePath();

    ctx.moveTo(236.9, 347.3);
    ctx.lineTo(152.1, 251.2);
    ctx.bezierCurveTo(198.2, 273.1, 288.3, 272.7, 353.8, 275.5);
    ctx.bezierCurveTo(467.5, 280.3, 552.8, 283.7, 551.1, 318.5);
    ctx.bezierCurveTo(549.6, 348.7, 488.6, 364.8, 381.3, 366.2);
    ctx.bezierCurveTo(345.4, 307.6, 245.9, 302.4, 236.9, 347.3);
    ctx.lineTo(236.9, 347.3);
    ctx.closePath();

    ctx.moveTo(103.0, 200.9);
    ctx.lineTo(55.9, 140.2);
    ctx.lineTo(46.3, 131.3);
    ctx.lineTo(56.4, 121.0);
    ctx.lineTo(141.0, 34.6);
    ctx.lineTo(145.6, 30.0);
    ctx.lineTo(152.1, 30.0);
    ctx.lineTo(231.3, 30.0);
    ctx.bezierCurveTo(180.0, 40.7, 100.1, 100.5, 103.0, 200.9);
    ctx.lineTo(103.0, 208.9);
    ctx.closePath();

    ctx.moveTo(513.5, 30.0);
    ctx.lineTo(583.7, 30.0);
    ctx.bezierCurveTo(584.8, 48.4, 578.2, 71.4, 557.8, 84.1);
    ctx.bezierCurveTo(551.6, 68.3, 531.2, 46.3, 513.5, 30.0);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();
  }