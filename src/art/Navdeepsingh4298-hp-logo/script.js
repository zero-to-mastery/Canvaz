const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw Black Circle
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.arc(95, 75, 50, 0, Math.PI * 2, true);
  ctx.fill();

// Text white "hp"
  ctx.fillStyle = "#fff";
  ctx.font = 'italic 6rem Teko'; 
  ctx.textAlign = 'center';
  ctx.fillText("hp", 93, 100);

//-------------------------------------------------------------------
// Another one
//-------------------------------------------------------------------

// Draw White Circle
  ctx.beginPath();
  ctx.arc(200, 75, 50, 0, Math.PI * 2, true);
  ctx.stroke();

// Text Black "hp"
  ctx.fillStyle = "#000";
  ctx.font = 'italic 6rem Teko'; 
  ctx.textAlign = 'center';
  ctx.fillText("hp", 198, 100);
    
