const fs = require('fs');

let data = fs.readFileSync('./day 1/data.txt').toString().split('\r\n');

const extractDigits = chars => chars.filter(char => char >= '0' && char <= '9').join('');

const calibrationValues = [];

data.forEach(str => {
    const digits = extractDigits([...str])

    let parsed = parseInt(digits[0] + digits[digits.length - 1])

    calibrationValues.push(parsed);
});

console.log(calibrationValues.reduce((total, current) => total + current, 0));
