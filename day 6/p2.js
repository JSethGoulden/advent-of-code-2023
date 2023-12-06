const fs = require('fs')

let data = fs.readFileSync('./day 3/data.txt').toString().split('\r\n')

//example
// let races = [
//     { time: 71530, targetDistance: 940200 },
// ]

//input
let races = [
    { time: 49877895, targetDistance: 356137815021882 },
]

let raceResults = []

races.forEach(race => {
    let winningResults = []
    for (let chargeTime = 1; chargeTime < race.time; chargeTime++) {
        const distanceTraveled = chargeTime * (race.time - chargeTime)

        if (distanceTraveled > race.targetDistance)
            winningResults.push({ chargeTime, distanceTraveled })
    }
    raceResults.push(winningResults)
})

console.log(raceResults.map(results => results.length))