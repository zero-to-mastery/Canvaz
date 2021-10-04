const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// first red square  
  ctx.fillStyle = "#E04E1D";
  ctx.fillRect(5, 30, 30, 30);

// second green square
  ctx.fillStyle = "#5CAE32";
  ctx.fillRect(38, 30, 30, 30);
  
// third blue square  
  ctx.fillStyle = "#3A8CC8";
  ctx.fillRect(5, 63, 30, 30);

// fourth yellow square  
  ctx.fillStyle = "#F4AE00";
  ctx.fillRect(38, 63, 30, 30);

// Text "Microsoft"
  ctx.fillStyle = "#686C6F";
  ctx.font = '3rem Roboto';
  ctx.fillText("Microsoft", 80, 80);
    
