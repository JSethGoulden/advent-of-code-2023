const fs = require('fs')

let data = fs.readFileSync('./day 3/data.txt').toString().split('\r\n')

const symbols = ["*", "-", "$", "@", "=", "#", "+", "/", "%", "&"]

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const isSymbol = char => symbols.includes(char)

const isDigit = char => digits.includes(parseInt(char))

const findNumber = str => {
    let number = str[0]
    let index = 1
    while (isDigit(str[index])) {
        number += str[index]
        index++
    }

    return { number, digits: index }
}

const findWholeNumber = (line, pos) => {
    return numbers.findIndex(number => {
        return line == number.line && pos >= number.pos && pos <= number.pos + number.digits - 1
    })
}

let numbers = []

data.forEach((line, lineIndex) => {
    let i = 0
    while (i < line.length) {
        if (!isDigit(line[i])) {
            i++
            continue
        }

        let { number, digits } = findNumber(line.slice(i))
        numbers.push({
            number,
            digits,
            line: lineIndex,
            pos: i
        })

        i += digits
    }
})

let gearRatios = [];

data.forEach((line, lineIndex) => {
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== '*') continue

        let adjacentNumberIndexes = []

        //top row
        adjacentNumberIndexes.push(findWholeNumber(lineIndex - 1, i - 1))
        adjacentNumberIndexes.push(findWholeNumber(lineIndex - 1, i))
        adjacentNumberIndexes.push(findWholeNumber(lineIndex - 1, i + 1))

        //same row
        adjacentNumberIndexes.push(findWholeNumber(lineIndex, i - 1))
        adjacentNumberIndexes.push(findWholeNumber(lineIndex, i + 1))

        //bottom row
        adjacentNumberIndexes.push(findWholeNumber(lineIndex + 1, i - 1))
        adjacentNumberIndexes.push(findWholeNumber(lineIndex + 1, i))
        adjacentNumberIndexes.push(findWholeNumber(lineIndex + 1, i + 1))

        let uniqueAdjacents = new Set(adjacentNumberIndexes)

        uniqueAdjacents.delete(-1)

        if (uniqueAdjacents.size === 2) {
            gearRatios.push(numbers[[...uniqueAdjacents][0]].number * numbers[[...uniqueAdjacents][1]].number)
        }
    }
})

console.log(gearRatios.reduce((total, current) => total + current, 0))