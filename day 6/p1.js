let races = [
    { time: 49, targetDistance: 356 },
    { time: 87, targetDistance: 1378 },
    { time: 78, targetDistance: 1502 },
    { time: 95, targetDistance: 1882 },
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

console.log(raceResults.map(results => results.length).reduce((total, current) => total * current, 1))