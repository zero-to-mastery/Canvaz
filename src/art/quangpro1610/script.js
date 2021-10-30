window.onload = function() {
  drawAmericanFlag("flag",0,0,300);
}
function drawAmericanFlag(canvasId, x, y, height) {
    var ctx = document.getElementById(canvasId).getContext("2d");

    // From the height, derive other measurements.
    var width = height * 1.9;
    var xStarSeparation = height * 0.063;
    var yStarSeparation = height * 0.054;

    // Make sure we start with a white base. That's the default for a 
    // canvas, but maybe someone else has already drawn on it.
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    // Color the red stripes.
    for (var ixStripe = 0; ixStripe < 13; ixStripe += 2) {
        ctx.fillStyle = "#C40043";
        ctx.fillRect(0, ixStripe * height / 13, width, height / 13);
    }

    // Draw the blue field.
    ctx.fillStyle = "#002654";
    ctx.fillRect(0, 0, 0.76 * height, height * 7 / 13);

    // Draw the stars.
    var outerRadius = 0.0616 * height / 2;
    var innerRadius = outerRadius * Math.sin(Math.PI / 10) / Math.sin(7 * Math.PI / 10);
    ctx.fillStyle = "white";
    for (var row = 1; row <= 9; ++row) {
        for (var col = 1; col <= 11; ++col) {
            if ((row + col) % 2 == 0) {
                drawStar(ctx, xStarSeparation * col, yStarSeparation * row, 5, outerRadius, innerRadius);
                ctx.fill();
            }
        }
    }
}
    
function drawStar(context, xCenter, yCenter, nPoints, outerRadius, innerRadius) {
    context.beginPath();
    for (var ixVertex = 0; ixVertex <= 2 * nPoints; ++ixVertex) {
        var angle = ixVertex * Math.PI / nPoints - Math.PI / 2;
        var radius = ixVertex % 2 == 0 ? outerRadius : innerRadius;
        context.lineTo(xCenter + radius * Math.cos(angle), yCenter + radius * Math.sin(angle));
    }
}
