const fs = require('fs')

let data = fs.readFileSync('./day 2/data.txt').toString().split('\r\n')

const maxCubes = {
    "red": 12,
    "green": 13,
    "blue": 14
}

const parseGame = text => {
    let [game, rounds] = text.split(':')
    game = parseInt(game.slice(5))
    rounds = rounds.split(';')

    let highestCubeCount = {
        "red": 0,
        "green": 0,
        "blue": 0
    }

    rounds.forEach(round => {
        let { red, green, blue } = parseRound(round)
        if (red > highestCubeCount.red) highestCubeCount.red = red
        if (green > highestCubeCount.green) highestCubeCount.green = green
        if (blue > highestCubeCount.blue) highestCubeCount.blue = blue
    })

    return { game, highestCubeCount }
}

const parseRound = text => {
    let cubes = text.split(',')
    let cubeCount = {}

    cubes.forEach(cube => {
        if (cube.includes('red')) {
            cubeCount.red = parseInt(cube)
        }
        if (cube.includes('green')) {
            cubeCount.green = parseInt(cube)
        }
        if (cube.includes('blue')) {
            cubeCount.blue = parseInt(cube)
        }
    })

    return cubeCount
}

let validGames = [];

data.forEach(game => {
    let gameResult = parseGame(game)
    if (gameResult.highestCubeCount.red <= maxCubes.red
        && gameResult.highestCubeCount.green <= maxCubes.green
        && gameResult.highestCubeCount.blue <= maxCubes.blue) {
        validGames.push(gameResult.game)
    }
})

console.log(validGames.reduce((total, current) => total + current, 0))