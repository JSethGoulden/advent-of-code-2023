const fs = require('fs')

const data = fs.readFileSync('./day 5/data.txt').toString().split('\r\n')
const seeds = data[0].split(': ')[1].split(' ').map(seed => parseInt(seed))
const mapIndexes = []
const locations = []

data.forEach((line, i) => {
    if (line.includes(' map:')) {
        mapIndexes.push(i)
    }
})

const convert = (mapIndex, number) => {
    let i = mapIndex + 1
    while (data[i]) {
        let [destinationStart, sourceStart, range] = data[i].split(' ').map(num => parseInt(num))
        if (number >= sourceStart && number < sourceStart + range) {
            return number - sourceStart + destinationStart
        }
        i++
    }
    return number
}

seeds.forEach(seed => {
    let temp = seed
    mapIndexes.forEach(mapIndex => {
        temp = convert(mapIndex, temp)
    })
    locations.push(temp)
})

console.log(Math.min(...locations))