let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");



//colours-cat
context.fillStyle = "#777";
context.fillRect(112,52,56,8);
context.fillRect(96,60,88,8);
context.fillRect(48,68,184,16);
context.fillRect(56,84,168,16);
context.fillRect(64,100,152,8);
context.fillRect(72,108,136,32);
context.fillRect(80,140,120,16);
context.fillRect(88,156,104,8);
context.fillRect(96,164,88,8);
context.fillRect(104,172,88,8);
context.fillRect(104,180,96,8);
context.fillRect(112,188,96,16);
context.fillRect(104,204,112,16);
context.fillRect(112,212,104,48);
context.fillRect(168,260,48,16);
context.fillRect(208,260,48,8);
context.fillRect(224,252,48,8);
context.fillRect(248,244,24,8);
context.fillRect(256,236,8,8);

//outline

context.fillStyle = "rgb(20,20,20)";

//outline-head
context.fillRect(40,60,56,8);
context.fillRect(96,52,16,8);
context.fillRect(112,44,56,8);
context.fillRect(168,52,16,8);
context.fillRect(184,60,56,8);

context.fillRect(40,68,8,16);
context.fillRect(232,68,8,16);

context.fillRect(48,84,8,16);
context.fillRect(224,84,8,16);

context.fillRect(56,100,8,8);
context.fillRect(216,100,8,8);

context.fillRect(64,108,8,32);
context.fillRect(208,108,8,32);

context.fillRect(72,140,8,16);
context.fillRect(200,140,8,16);

context.fillRect(80,156,8,8);
context.fillRect(192,156,8,8);

//outline-body
context.fillRect(88,164,8,8);
context.fillRect(184,164,8,8);

context.fillRect(192,172,8,8);
context.fillRect(200,180,8,8);
context.fillRect(208,188,8,16);
context.fillRect(216,204,8,56);

//outline-tail
context.fillRect(224,252,16,8);
context.fillRect(240,244,8,8);
context.fillRect(248,228,8,16);
context.fillRect(256,204,8,24);
context.fillRect(248,188,8,16);
context.fillRect(256,188,16,8);
context.fillRect(272,196,8,8);
context.fillRect(280,204,8,32);
context.fillRect(272,236,8,16);
context.fillRect(264,252,8,8);
context.fillRect(248,260,16,8);
context.fillRect(216,268,32,8);

//outline-legs
context.fillRect(144,276,72,8);
context.fillRect(120,276,16,8);
context.fillRect(136,220,8,56);
context.fillRect(160,252,8,24);
context.fillRect(168,220,8,32);
context.fillRect(112,252,8,24);
context.fillRect(104,220,8,32);
context.fillRect(96,204,8,16);
context.fillRect(104,188,8,16);
context.fillRect(96,172,8,16);


//outline-text line 1
context.fillStyle = "rgb(20,20,20)";
context.font = '52px monospace';
context.textAlign = "center"
context.fillText('PIXEL', 160, 360);
context.font = '32px monospace';
context.fillText('Wishes U a good', 160, 410);
context.font = '42px monospace';
context.fillText('Hacktoberfest', 160, 460);


//outline-face
context.fillStyle = "rgb(20,20,20)";
context.fillRect(184,124,8,8);
context.fillRect(160,124,8,8);
context.fillRect(168,116,16,8);

context.fillRect(112,124,8,8);
context.fillRect(88,124,8,8);
context.fillRect(96,116,16,8);

context.fillStyle = "#333333";
context.fillRect(208,100,8,8);
context.fillRect(64,100,8,8);
context.fillRect(200,92,24,8);
context.fillRect(56,92,24,8);
context.fillRect(192,84,32,8);
context.fillRect(56,84,32,8);

//outline-html5-logo
context.fillStyle = "#FF0000";
context.fillRect(112,148,56,8);
context.fillRect(112,148,8,56);
context.fillRect(160,148,8,56);
context.fillRect(144,204,16,8);
context.fillRect(120,204,16,8);
context.fillRect(136,212,8,8);

context.fillStyle = "#E95D5D";
context.fillRect(120,156,40,48);
context.fillRect(136,204,8,8);

context.fillStyle = "rgb(200,200,200)";
context.fillRect(128,164,24,8);
context.fillRect(128,164,8,16);
context.fillRect(136,180,16,8);
context.fillRect(144,188,8,8);
context.fillRect(136,196,8,8);
context.fillRect(128,190,8,6);