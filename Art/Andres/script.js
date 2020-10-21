draw = () => {
  const canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    const rad = (deg) => {
      const radians = (Math.PI / 180) * deg;
      return radians;
    };

    //PIIRJOONED

    // Ring
    ctx.beginPath();
    ctx.arc(350, 197, 150, 0, 360);
    ctx.fillStyle = 'rgba(253, 185, 39)';
    ctx.fill();

    //Ülemine piirjoon
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(350, 197, 150, rad(209), rad(331));
    ctx.stroke();

    //Alumine piirjoon
    ctx.beginPath();
    ctx.arc(350, 197, 150, rad(35), rad(145));
    ctx.stroke();

    // ÜLEMISED JOONED

    //Keskmine ülemine joon
    ctx.beginPath();
    ctx.moveTo(300, 56);
    ctx.lineTo(325, 126);
    ctx.stroke();

    //Vasakpoolne ülemine joon
    ctx.beginPath();
    ctx.moveTo(270, 70);
    ctx.quadraticCurveTo(300, 95, 285, 123);
    ctx.stroke();

    //Parempoolne ülemine joon
    ctx.beginPath();
    ctx.moveTo(360, 47);
    ctx.quadraticCurveTo(325, 85, 395, 126);
    ctx.stroke();

    // Läbistav joon

    ctx.beginPath();
    ctx.moveTo(245, 123);
    ctx.bezierCurveTo(300, 50, 425, 50, 480, 124);
    ctx.stroke();

    // ALUMISED JOONED

    //Parempoolne alumine joon
    ctx.beginPath();
    ctx.moveTo(400, 338);
    ctx.lineTo(375, 270);
    ctx.stroke();

    //Vasakpoolne alumine joon
    ctx.beginPath();
    ctx.moveTo(320, 343.5);
    ctx.quadraticCurveTo(283, 310, 275, 270);
    ctx.stroke();

    // KIRJAD

    //Ülemine Kiri "Los Angeles" - tähelaius 12üh, kõrgus 15üh

    //L
    ctx.beginPath();
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.moveTo(285, 130);
    ctx.lineTo(280, 145);
    ctx.lineTo(295, 145);
    ctx.lineTo(297, 141);
    ctx.lineTo(288, 141);
    ctx.lineTo(292, 130);
    ctx.lineTo(285, 130);
    ctx.fill();

    //O
    ctx.beginPath();
    ctx.arc(306, 137.5, 8, 0, 360);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(253, 185, 39)';
    ctx.arc(306, 137.5, 3, 0, 360);
    ctx.fill();

    //S

    ctx.font = '20px Georgia bold italic';
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.fillText('S', 315, 144.4);

    //A

    ctx.beginPath();
    ctx.moveTo(345, 130);
    ctx.lineTo(335, 145);
    ctx.lineTo(339, 145);
    ctx.lineTo(342, 140);
    ctx.lineTo(346, 140);
    ctx.lineTo(349, 145);
    ctx.lineTo(353, 145);
    ctx.lineTo(345, 130);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(253, 185, 39)';
    ctx.moveTo(345, 134);
    ctx.lineTo(342, 138);
    ctx.lineTo(346, 138);
    ctx.closePath();
    ctx.fill();

    //N

    ctx.beginPath();
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.moveTo(360, 130);
    ctx.lineTo(353, 145);
    ctx.lineTo(355, 145);
    ctx.lineTo(360, 134);
    ctx.lineTo(363, 145);
    ctx.lineTo(365, 145);
    ctx.lineTo(373, 130);
    ctx.lineTo(370, 130);
    ctx.lineTo(365, 140);
    ctx.lineTo(363, 130);
    ctx.lineTo(360, 130);
    ctx.fill();

    //G

    ctx.font = '20px Georgia bold italic';
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.fillText('G', 370, 144.4);

    //E

    ctx.beginPath();
    ctx.moveTo(392, 130);
    ctx.lineTo(387, 145);
    ctx.lineTo(399, 145);
    ctx.lineTo(401, 142);
    ctx.quadraticCurveTo(401, 143.5, 392, 143);
    ctx.lineTo(394, 139);
    ctx.lineTo(400, 139);
    ctx.lineTo(401, 136);
    ctx.lineTo(394, 136);
    ctx.lineTo(396, 132);
    ctx.quadraticCurveTo(402, 131.5, 403, 133);
    ctx.lineTo(404, 130);
    ctx.lineTo(392, 130);
    ctx.fill();

    //L

    ctx.beginPath();
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.moveTo(407, 130);
    ctx.lineTo(402, 145);
    ctx.lineTo(417, 145);
    ctx.lineTo(419, 141);
    ctx.lineTo(410, 141);
    ctx.lineTo(414, 130);
    ctx.lineTo(407, 130);
    ctx.fill();

    //E

    ctx.beginPath();
    ctx.moveTo(427, 130);
    ctx.lineTo(422, 145);
    ctx.lineTo(434, 145);
    ctx.lineTo(436, 142);
    ctx.quadraticCurveTo(436, 143.5, 427, 143);
    ctx.lineTo(429, 139);
    ctx.lineTo(435, 139);
    ctx.lineTo(436, 136);
    ctx.lineTo(429, 136);
    ctx.lineTo(431, 132);
    ctx.quadraticCurveTo(437, 131.5, 438, 133);
    ctx.lineTo(439, 130);
    ctx.lineTo(427, 130);
    ctx.fill();

    //S

    ctx.font = '20px Georgia bold italic';
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.fillText('S', 439, 144.4);

    //Alumine Kiri "LAKERS"

    //L

    ctx.beginPath();
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.moveTo(210, 130);
    ctx.lineTo(165, 280);
    ctx.lineTo(225, 280);
    ctx.lineTo(235, 255);
    ctx.quadraticCurveTo(230, 269, 190, 270);
    ctx.lineTo(230, 130);
    ctx.lineTo(210, 130);
    ctx.fill();

    //A

    ctx.beginPath();
    ctx.moveTo(245, 160);
    ctx.quadraticCurveTo(218, 250, 200, 260);
    ctx.lineTo(225, 260);
    ctx.quadraticCurveTo(210, 260, 230, 220);
    ctx.lineTo(250, 220);
    ctx.lineTo(250, 250);
    ctx.quadraticCurveTo(250, 255, 233, 260);
    ctx.lineTo(260, 260);
    ctx.quadraticCurveTo(255, 255, 260, 160);
    ctx.lineTo(245, 160);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(253, 185, 39)';
    ctx.moveTo(232, 210);
    ctx.lineTo(247, 165);
    ctx.lineTo(252, 165);
    ctx.lineTo(250, 210);
    ctx.closePath();
    ctx.fill();

    //K

    ctx.beginPath();
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.moveTo(295, 160);
    ctx.lineTo(260, 260);
    ctx.lineTo(287, 260);
    ctx.quadraticCurveTo(282, 255, 285, 250);
    ctx.lineTo(298, 215);
    ctx.moveTo(299, 215);
    ctx.quadraticCurveTo(315, 260, 320, 260);
    ctx.lineTo(337, 260);
    ctx.lineTo(337, 255);
    ctx.lineTo(316, 202);
    ctx.lineTo(350, 160);
    ctx.lineTo(330, 160);
    ctx.quadraticCurveTo(345, 161, 330, 175);
    ctx.lineTo(299, 215);
    ctx.moveTo(298, 215);
    ctx.lineTo(320, 160);
    ctx.lineTo(295, 160);
    ctx.fill();

    //E

    ctx.beginPath();
    ctx.moveTo(350, 160);
    ctx.bezierCurveTo(360, 165, 345, 255, 337, 260);
    ctx.lineTo(385, 260);
    ctx.lineTo(395, 225);
    ctx.quadraticCurveTo(385, 255, 360, 250);
    ctx.lineTo(368, 210);
    ctx.quadraticCurveTo(383, 210, 385, 235);
    ctx.lineTo(392, 185);
    ctx.quadraticCurveTo(385, 205, 369, 208);
    ctx.lineTo(375, 165);
    ctx.quadraticCurveTo(405, 165, 400, 190);
    ctx.lineTo(405, 160);
    ctx.closePath();
    ctx.fill();

    //R

    ctx.beginPath();
    ctx.moveTo(410, 160);
    ctx.bezierCurveTo(420, 165, 405, 255, 395, 260);
    ctx.lineTo(420, 260);
    ctx.quadraticCurveTo(415, 250, 425, 200);
    ctx.bezierCurveTo(460, 200, 440, 380, 600, 210);
    ctx.lineTo(600, 208);
    ctx.bezierCurveTo(440, 330, 480, 250, 460, 205);
    ctx.quadraticCurveTo(500, 188, 460, 165);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(253, 185, 39)';
    ctx.moveTo(425, 190);
    ctx.lineTo(428, 170);
    ctx.lineTo(455, 174);
    ctx.quadraticCurveTo(480, 182, 455, 190);
    ctx.fill();

    //S

    ctx.font = '130px Georgia bold italic';
    ctx.fillStyle = 'rgba(85, 37, 130)';
    ctx.fillText('S', 475, 255);
  }
};
