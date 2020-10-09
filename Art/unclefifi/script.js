(function(){

    function Statistics(){
        if(Statistics.prototype._singleton) {
            return Statistics.prototype._singleton
        } else {
            Statistics.prototype._singleton = this
            this.genderStats = {
                male: 0,
                female: 0
            }
            this.ageGroupStats = [
                0,// from 01 to 10
                0,// from 11 to 20
                0,// from 21 to 30
                0,// from 31 to 40
                0,// from 41 to 50
                0,// from 51 to 60
                0,// from 61 to 70
                0,// from 71 to 80
                0,// from 81 to 90
                0,// from 91 to 100
            ]
        }
    }
    Statistics.prototype.updateGenderStats = function(simpleUser) {
        if(simpleUser.gender === 'female')
            Statistics.prototype._singleton.genderStats.female++
        else
           Statistics.prototype._singleton.genderStats.male++
    }
    Statistics.prototype.updateStatsByAge = function(simpleUser) {
        let startAge = 0
        let endAge = 10
        const { age } = simpleUser
        for(let i = 1;i <= 10;i++) {
            if(age > startAge && age <= endAge) {
                Statistics.prototype._singleton.ageGroupStats[i]++
                break;
            }
            startAge = endAge+1
            endAge+=10
        }
    }
    Statistics.prototype.updateAllStats = function(simpleUser) {
        Statistics.prototype.updateGenderStats(simpleUser)
        Statistics.prototype.updateStatsByAge(simpleUser)
    }



    /**
     * Class used to Deal with 
     */
    function UserRecordUtil(){}

    /**
     * Function Used to Turn User to SimpleUser
     * @param {*} user 
     */
    UserRecordUtil.prototype.format = function(user) {
        // extracting the two properties from user
        const { gender, dob } = user
        return { 
            age:    dob.age,
            gender
        }
    }

    const UserRecordUtilityService = new UserRecordUtil()

    function canvasService()
    {
        // using flex to determine height
        const canvasWrapElement = document.getElementById('canvas-wrap')
        const canvasWrapElementHeight = canvasWrapElement.clientHeight
        const canvasWrapElementWidth = canvasWrapElement.clientWidth
        const smaller = Math.min(canvasWrapElementHeight,canvasWrapElementWidth)

        const canvasPadding = 100
        const ratio = canvasWrapElementHeight / canvasWrapElementWidth
        const canvasWidth = canvasWrapElementWidth - canvasPadding
        const canvasHeight = ratio * canvasWidth

        // circle properties
        const radius = (smaller - (canvasPadding + 10)) / 2
        const radiusPosition = {
            x: canvasWidth/2,
            y: canvasHeight/2
        }

        const canvasHTMLElement = document.querySelector('canvas')
        canvasHTMLElement.width = canvasWidth
        canvasHTMLElement.height = canvasHeight

        const ctx = canvasHTMLElement.getContext('2d')

        function drawFullCircle(innerCircle = false, x = radiusPosition.x, y = radiusPosition.y, r = radius, startAngle = 0*Math.PI, endAngle = 2*Math.PI){
            ctx.beginPath();
            if(innerCircle) {
                r = radius - 20
            }
            ctx.arc(x, y, r, startAngle, endAngle, true)
            if(innerCircle) {
                ctx.fillStyle = 'crimson';
            } else {
                ctx.fillStyle = '#303030';
            }

            ctx.fill();
            ctx.stroke();
        }

        return {
            drawCircle: drawFullCircle
        }
    }


    const randomUserState = {
        count: 100,
        excludeList: [
            // "gender",
            "name",
            "location",
            "email",
            "login",
            "registered",
            // "dob",
            "phone",
            "cell",
            "id",
            "picture",
            "nat"
        ],
        formattedUsers: []
    }


    // in a comma delimited way...
    const excludeCSV = randomUserState.excludeList.join(",")
    fetch(`https://randomuser.me/api/?results=${randomUserState.count}&exc=${excludeCSV}`)
        .then((apiResponse) =>  apiResponse.json())
        .then((formattedAPIResponse) => {
            const results = formattedAPIResponse.results

            if(Array.isArray(results)) {
                const Stats = new Statistics()
                results.forEach((randomuser) => {
                    const simpleUser = UserRecordUtilityService.format(randomuser)
                    randomUserState.formattedUsers.push(simpleUser)
                    Stats.updateAllStats(simpleUser)
                })

                const canvasinstance = canvasService()
                canvasinstance.drawCircle()
                canvasinstance.drawCircle(true)

            }
        })
})()