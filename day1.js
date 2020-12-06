const arrayInput = require('./reader');
const input = arrayInput('./day_1.txt');
const numbers = input.map(x => parseInt(x))

//1a
for (const first of numbers) {
    for (const second of numbers) {
        if (first + second === 2020) {
            console.log(first * second)
        }
    }
}

//1b
for (const first of numbers) {
    for (const second of numbers) {
        for (const third of numbers) {
            if (first + second + third === 2020) {
                console.log(first * second * third)
            }
        }
    }
}