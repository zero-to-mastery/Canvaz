window.addEventListener("load", (e) => {
    const canvazEl = document.getElementById("canvaz");
  
    if (!canvazEl?.getContext) return;
  
    // Resizing
    sizeCanvaz(canvazEl);
  
    const context = canvazEl.getContext("2d");
    const radian = Math.PI / 180;
    let r = 50;
    let x = -50;
    let startAngle = 90 * radian;
    let endAngle = 2 * Math.PI;
    let currentAngle = 0;
    let oldTime = getTime();
  
    // x, y, radius, startAngle, endAngle [, counterclockwise]
    // the x and y position is relative to the center of the circle
    setInterval(() => {
      let newTime = getTime();
      let diff = newTime - oldTime;
      
      context.fillStyle = "#000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  
      context.beginPath();
      context.fillStyle = "red";
      context.arc(x++, context.canvas.height / 2, r, startAngle + currentAngle, endAngle + currentAngle);
      context.fill();
      
      currentAngle += 0.1;
      currentAngle %= 2 * Math.PI;
      
      if (x >= context.canvas.width + r) {
        x = -r;
      }
    }, 10);
  });
  
  const sizeCanvaz = (el) => {
    el.width = "350";
    el.height = "350";
  };
  
  const getTime = () => (new Date()).getTime();