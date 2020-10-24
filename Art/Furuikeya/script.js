const canvas = document.getElementById("canvas");

const ctx1 = canvas.getContext("2d");
ctx1.fillStyle = "#AAAAFF";
ctx1.fillRect(0, 0, 420, 420);

const ctx2 = canvas.getContext("2d");
ctx2.fillStyle = "#FFAAFF";
ctx2.fillRect(105, 105, 320, 320);

const ctx3 = canvas.getContext("2d");
ctx3.fillStyle = "#AAFFAA";
ctx3.fillRect(210, 210, 210, 210);

ctx1.font = "50px Arial";
ctx1.strokeText("Z",20,60);

ctx2.font = "75px Arial";
ctx2.strokeText('T', 140, 200);

ctx3.font = "100px Arial";
ctx3.strokeText('M', 280, 350);