const { match } = require('assert')
const fs = require('fs')

let data = fs.readFileSync('./day 4/data.txt').toString().split('\r\n')

let cards = Array(data.length).fill(1)

data.forEach((card, cardIndex) => {
    card = card.split(':')[1].split('|')

    let winningNumbers = card[0].trim().split(' ')
    let myNumbers = card[1].trim().split(' ').filter(num => num)
    let matches = 0

    myNumbers.forEach(num => {
        if (winningNumbers.includes(num)) matches++
    })

    if (matches) {
        for (let i = 1; i <= matches; i++) {
            console.log(`Adding ${cards[cardIndex]} cards to card at index ${i + cardIndex}`)
            cards[cardIndex + i] += cards[cardIndex]
        }
    }

})

console.log(cards.reduce((total, current) => total + current))