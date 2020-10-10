(function () {
  function Statistics() {
    if (Statistics.prototype._singleton) {
      return Statistics.prototype._singleton;
    } else {
      Statistics.prototype._singleton = this;
      this.genderStats = {
        male: 0,
        female: 0
      };

      this.ageGroupValues = [
        {
          title: 'from 01 to 10',
          count: 0,
          percent: 0
        },
        {
          title: 'from 11 to 20',
          count: 0,
          percent: 0
        },
        {
          title: 'from 21 to 30',
          count: 0,
          percent: 0
        },
        {
          title: 'from 31 to 40',
          count: 0,
          percent: 0
        },
        {
          title: 'from 41 to 50',
          count: 0,
          percent: 0
        },
        {
          title: 'from 51 to 60',
          count: 0,
          percent: 0
        },
        {
          title: 'from 61 to 70',
          count: 0,
          percent: 0
        },
        {
          title: 'from 71 to 80',
          count: 0,
          percent: 0
        },
        {
          title: 'from 81 to 90',
          count: 0,
          percent: 0
        },
        {
          title: 'from 91 to 100',
          count: 0,
          percent: 0
        }
      ];
    }
  }
  Statistics.prototype.updateGenderStats = function (simpleUser) {
    if (simpleUser.gender === 'female')
      Statistics.prototype._singleton.genderStats.female++;
    else Statistics.prototype._singleton.genderStats.male++;
  };
  Statistics.prototype.updateStatsByAge = function (simpleUser, totalN) {
    let startAge = 0;
    let endAge = 10;
    const { age } = simpleUser;
    for (let i = 0; i < 10; i++) {
      if (age > startAge && age <= endAge) {
        const ObjectReference =
          Statistics.prototype._singleton.ageGroupValues[i];
        ObjectReference.percent = ++ObjectReference.count / totalN;
        break;
      }
      startAge = endAge + 1;
      endAge += 10;
    }
  };
  Statistics.prototype.updateAllStats = function (simpleUser, totalN) {
    Statistics.prototype.updateGenderStats(simpleUser);
    Statistics.prototype.updateStatsByAge(simpleUser, totalN);
  };

  /**
   * Class used to Deal with
   */
  function UserRecordUtil() {}

  /**
   * Function Used to Turn User to SimpleUser
   * @param {*} user
   */
  UserRecordUtil.prototype.format = function (user) {
    // extracting the two properties from user
    const { gender, dob } = user;
    return {
      age: dob.age,
      gender
    };
  };

  const UserRecordUtilityService = new UserRecordUtil();

  function canvasService() {
    // using flex to determine height
    const canvasWrapElement = document.getElementById('canvas-wrap');
    const canvasWrapElementHeight = canvasWrapElement.clientHeight;
    const canvasWrapElementWidth = canvasWrapElement.clientWidth;

    const canvasPadding = 100;
    const ratio = canvasWrapElementHeight / canvasWrapElementWidth;
    const canvasWidth = canvasWrapElementWidth - canvasPadding;
    const canvasHeight = ratio * canvasWidth;

    // circle properties
    const smaller = Math.min(canvasWrapElementHeight, canvasWrapElementWidth);
    const radius = (smaller - (canvasPadding + 10)) / 2;
    const radiusPosition = {
      x: canvasWidth / 2,
      y: canvasHeight / 2
    };

    const canvasHTMLElement = document.querySelector('canvas');
    canvasHTMLElement.width = canvasWidth;
    canvasHTMLElement.height = canvasHeight;

    const ctx = canvasHTMLElement.getContext('2d');
    const circleRadOffset = Math.PI;

    function drawFullCircle(
      innerCircle = false,
      x = radiusPosition.x,
      y = radiusPosition.y,
      r = radius,
      startAngle = 0 * Math.PI,
      endAngle = 2 * Math.PI
    ) {
      ctx.beginPath();
      if (innerCircle) {
        r = radius - 20;
        ctx.fillStyle = 'darkslategrey';
      } else {
        ctx.fillStyle = '#303030';
      }
      ctx.arc(x, y, r, startAngle, endAngle, true);
      ctx.fill();
      ctx.stroke();
    }

    function renderCircleOutside() {
      drawFullCircle();
      drawFullCircle(true);
    }

    function drawDougnut(startP, endP, color) {
      ctx.beginPath();
      let r = radius - 65;
      const percentRadianStart = Math.PI * 2 * startP;
      const percentRadianEnd = Math.PI * 2 * endP;
      ctx.arc(
        radiusPosition.x,
        radiusPosition.y,
        r,
        percentRadianStart + circleRadOffset,
        percentRadianEnd + circleRadOffset
      );
      ctx.lineWidth = 40;
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    return {
      renderCircleOutside,
      drawDougnut
    };
  }

  const randomUserState = {
    count: 3000,
    excludeList: [
      'name',
      'location',
      'email',
      'login',
      'registered',
      'phone',
      'cell',
      'id',
      'picture',
      'nat'
    ],
    formattedUsers: []
  };

  function genderStatsRender(canvasinstance) {
    canvasinstance.renderCircleOutside();
    const Stats = new Statistics();
    const total = Stats.genderStats.male + Stats.genderStats.female;
    const menPercentage = Stats.genderStats.male / total;
    canvasinstance.drawDougnut(0, menPercentage, 'crimson');
    canvasinstance.drawDougnut(menPercentage, 1, 'cornflowerblue');
    document.getElementById('male-count').innerText = Stats.genderStats.male;
    document.getElementById('female-count').innerText =
      Stats.genderStats.female;
    document.getElementById('male-percent').innerText = Math.floor(
      100 * menPercentage
    );
    document.getElementById('female-percent').innerText =
      100 - Math.floor(100 * menPercentage);
  }

  // in a comma delimited way...
  const excludeCSV = randomUserState.excludeList.join(',');
  const canvasinstance = canvasService();
  fetch(
    `https://randomuser.me/api/?results=${randomUserState.count}&exc=${excludeCSV}`
  )
    .then((apiResponse) => apiResponse.json())
    .then((formattedAPIResponse) => {
      const results = formattedAPIResponse.results;

      if (Array.isArray(results)) {
        const Stats = new Statistics();
        results.forEach((randomuser) => {
          const simpleUser = UserRecordUtilityService.format(randomuser);
          randomUserState.formattedUsers.push(simpleUser);
          Stats.updateAllStats(simpleUser, randomUserState.count);
        });

        genderStatsRender(canvasinstance);
      }
    });
})();
