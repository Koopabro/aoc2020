const fs = require("fs");
const input = fs.readFileSync("./day_6.txt").toString().split("\r\n\r\n");

//part 1
const correctedInput = input.map((x) => x.replace(/(\r\n|\n|\r)/g, ""));
const inputSets = correctedInput.map((x) => new Set(x));
console.log(inputSets.map((x) => x.size).reduce((ac, cv) => ac + cv));

//part 2
const correctedInput2 = input.map((x) => x.split(/\r\n/));
const testComparisons = correctedInput2.map((elements) => {
	let count = 0;
	Array.from(elements[0]).map((c) => {
		elements.every((el) => el.includes(c)) ? count++ : false;
	});
	return count;
});

console.log(testComparisons.reduce((ac, cv) => ac + cv));
