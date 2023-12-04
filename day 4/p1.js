const { match } = require('assert')
const fs = require('fs')

let data = fs.readFileSync('./day 4/data.txt').toString().split('\r\n')

let cardValues = []

data.forEach(card => {
    card = card.split(':')[1].split('|')

    let winningNumbers = card[0].trim().split(' ')
    let myNumbers = card[1].trim().split(' ').filter(num => num)

    console.log(`${winningNumbers}`)
    let matches = 0

    myNumbers.forEach(num => {
        if (winningNumbers.includes(num)) matches++
    })

    if (matches) {
        cardValues.push(2 ** (matches - 1))
    }
})

console.log(cardValues.reduce((total, current) => total + current, 0))