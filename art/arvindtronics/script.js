window.onload = () => {
  const canvas = document.getElementById("canvas-wrap");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //-----------------------left upper green rectangle---------------------------------//

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(200, 100);
  context.lineTo(200, 200);
  context.closePath();

  // the outline

  context.strokeStyle = "#00ae8e";
  context.stroke();

  // the fill color
  context.fillStyle = "#00ae8e";
  context.fill();
  //-----------------------left bottom yellow rectangle---------------------------------//

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(200, 300);
  context.lineTo(200, 200);
  context.closePath();
  // the outline

  context.strokeStyle = "#FFC432";
  context.stroke();

  // the fill color
  context.fillStyle = "#FFC432";
  context.fill();

  //-----------------------mid blue trapezoid---------------------------------//
  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(250, 200);
  context.lineTo(250, 150);

  context.lineTo(200, 100);
  context.closePath();
  // the outline

  context.strokeStyle = "#0082C0";
  context.stroke();

  // the fill color
  context.fillStyle = "#0082C0";
  context.fill();

  //-----------------------mid pink square---------------------------------//

  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(250, 200);
  context.lineTo(250, 250);
  context.lineTo(200, 250);
  context.closePath();

  // the outline

  context.strokeStyle = "#F05283";
  context.stroke();

  // the fill color
  context.fillStyle = "#F05283";
  context.fill();

  //-----------------------mid orange triangle---------------------------------//

  context.beginPath();
  context.moveTo(200, 250);
  context.lineTo(250, 250);
  context.lineTo(200, 300);
  context.closePath();

  // the outline

  context.strokeStyle = "#FF9231";
  context.stroke();

  // the fill color
  context.fillStyle = "#FF9231";
  context.fill();

  //-----------------------right purple triangle---------------------------------//

  context.beginPath();
  context.moveTo(250, 250);
  context.lineTo(300, 200);
  context.lineTo(250, 150);

  context.closePath();

  // the outline

  context.strokeStyle = "#8F2B8C";
  context.stroke();

  // the fill color
  context.fillStyle = "#8F2B8C";
  context.fill();
};
