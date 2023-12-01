const fs = require('fs');

let data = fs.readFileSync('./day 1/data.txt').toString().split('\r\n');

const extractDigits = str => str.filter(char => char >= '0' && char <= '9').join('');

const numberWords = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

data = data.map(str => {
    for (const [key, value] of Object.entries(numberWords)) {
        str = str.replaceAll(key, key[0] + value + key[key.length - 1])
    }

    return str
});

const calibrationValues = [];

data.forEach(str => {
    const digits = extractDigits([...str])

    let parsed = parseInt(digits[0] + digits[digits.length - 1])

    console.log(`Input: ${str}, Output: ${parsed}`)

    calibrationValues.push(parsed);
});

console.log(calibrationValues.reduce((total, current) => total + current, 0));
