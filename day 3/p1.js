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

let validParts = []

data.forEach((line, lineIndex) => {
    let i = 0
    while (i < line.length) {
        if (!isDigit(line[i])) {
            i++
            continue
        }

        let { number, digits } = findNumber(line.slice(i))
        let hasAdjacentSymbol = false

        //top
        for (let j = -1; j < digits + 1; j++) {
            if (data[lineIndex - 1] && isSymbol(data[lineIndex - 1][i + j])) {
                hasAdjacentSymbol = true
            }
        }

        //left
        if (data[lineIndex][i - 1] && isSymbol(data[lineIndex][i - 1])) {
            hasAdjacentSymbol = true
        }

        //right
        if (data[lineIndex][i + digits] && isSymbol(data[lineIndex][i + digits])) {
            hasAdjacentSymbol = true
        }

        //bottom
        for (let j = -1; j < digits + 1; j++) {
            if (data[lineIndex + 1] && isSymbol(data[lineIndex + 1][i + j])) {
                hasAdjacentSymbol = true
            }
        }

        if (hasAdjacentSymbol) {
            validParts.push(parseInt(number))
        }

        i += digits
    }
})

console.log(validParts.reduce((total, current) => total + current, 0))