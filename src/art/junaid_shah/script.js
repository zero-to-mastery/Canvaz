var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var ctxOne = first.getContext("2d");
var ctxTwo = second.getContext("2d");
var ctxThree = third.getContext("2d");
var ctxFourth = fourth.getContext("2d");
var ctxFifth = fifth.getContext("2d");
var ctxSixth = sixth.getContext("2d");

//function to get the round corners
CanvasRenderingContext2D.prototype.roundRect = function (
  x,
  y,
  width,
  height,
  radius,
  fill,
  stroke
) {
  var cornerRadius = {
    upperLeft: 0,
    upperRight: 0,
    lowerLeft: 0,
    lowerRight: 0,
  };
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "object") {
    for (var side in radius) {
      cornerRadius[side] = radius[side];
    }
  }

  this.beginPath();
  this.moveTo(x + cornerRadius.upperLeft, y);
  this.lineTo(x + width - cornerRadius.upperRight, y);
  this.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
  this.lineTo(x + width, y + height - cornerRadius.lowerRight);
  this.quadraticCurveTo(
    x + width,
    y + height,
    x + width - cornerRadius.lowerRight,
    y + height
  );
  this.lineTo(x + cornerRadius.lowerLeft, y + height);
  this.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
  this.lineTo(x, y + cornerRadius.upperLeft);
  this.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
  this.closePath();
  if (stroke) {
    this.stroke();
  }
  if (fill) {
    this.fill();
  }
};

ctxOne.roundRect(
  50,
  50,
  50,
  50,
  { upperLeft: 50, upperRight: 50, lowerLeft: 50, lowerRight: 50 },
  true,
  true
);

ctxTwo.roundRect(50, 50, 80, 80, {
  upperLeft: 50,
  upperRight: 50,
  lowerLeft: 50,
  lowerRight: 50,
});

ctxThree.roundRect(50, 50, 50, 50, {
  upperLeft: 50,
  upperRight: 50,
  lowerLeft: 50,
  lowerRight: 50,
});

ctxFourth.roundRect(50, 50, 10, 10, {
  upperLeft: 50,
  upperRight: 50,
  lowerLeft: 50,
  lowerRight: 50,
});

ctxFifth.roundRect(50, 50, 0, 0, {
  upperLeft: 50,
  upperRight: 50,
  lowerLeft: 50,
  lowerRight: 50,
});

ctxSixth.roundRect(50, 50, 60, 50, {
  upperLeft: 50,
  upperRight: 50,
  lowerLeft: 50,
  lowerRight: 50,
});
