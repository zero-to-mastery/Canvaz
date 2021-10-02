const canvas = document.getElementById("koreanFlagCanvas");

const krFlg = canvas.getContext("2d");

krFlg.fillStyle = "#fff";
krFlg.fillRect(0, 0, 600, 400);

krFlg.translate(135, -125);
krFlg.rotate((30 * Math.PI) / 180);

krFlg.fillStyle = "#000";
krFlg.fillRect(100, 150, 15, 100);
krFlg.fillRect(125, 150, 15, 100);
krFlg.fillRect(150, 150, 15, 100);

krFlg.fillRect(440, 150, 15, 45);
krFlg.fillRect(440, 205, 15, 45);
krFlg.fillRect(465, 150, 15, 45);
krFlg.fillRect(465, 205, 15, 45);
krFlg.fillRect(490, 150, 15, 45);
krFlg.fillRect(490, 205, 15, 45);

krFlg.setTransform(1, 0, 0, 1, 0, 0);
krFlg.translate(-65, 175);
krFlg.rotate((-30 * Math.PI) / 180);
krFlg.fillRect(100, 150, 15, 100);
krFlg.fillRect(125, 150, 15, 45);
krFlg.fillRect(125, 205, 15, 45);
krFlg.fillRect(150, 150, 15, 100);

krFlg.fillRect(440, 150, 15, 45);
krFlg.fillRect(440, 205, 15, 45);
krFlg.fillRect(465, 150, 15, 100);
krFlg.fillRect(490, 150, 15, 45);
krFlg.fillRect(490, 205, 15, 45);

krFlg.setTransform(1, 0, 0, 1, 0, 0);
krFlg.fillStyle = "#cd2e3a";
krFlg.beginPath();
krFlg.arc(300, 200, 90, 0, 2 * Math.PI);
krFlg.fill();

krFlg.fillStyle = "#0047a0";
krFlg.beginPath();
krFlg.arc(339, 222.5, 45, (210 * Math.PI) / 180, (30 * Math.PI) / 180);
krFlg.fill();

krFlg.beginPath();
krFlg.moveTo(300, 200);
krFlg.arc(300, 200, 90, (30 * Math.PI) / 180, (210 * Math.PI) / 180);
krFlg.fill();

krFlg.fillStyle = "#cd2e3a";
krFlg.beginPath();
krFlg.moveTo(261, 177.5);
krFlg.arc(261, 177.5, 45, (30 * Math.PI) / 180, (210 * Math.PI) / 180);
krFlg.fill();
