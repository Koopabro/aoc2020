const arrayInput = require("./reader");
const input = arrayInput("./day_5.txt");

const generateBoardingpass = (code) => {
	const rowCode = code.slice(0, 7).toString();
	const seatCode = code.slice(-3).toString();

	let middleRow = 64;
	let halfRow = 64;
	for (let row of rowCode) {
		halfRow = halfRow / 2;
		if (row == "F") {
			middleRow = middleRow - halfRow;
		}
		if (row == "B") {
			middleRow = middleRow + halfRow;
		}
	}

	let middleSeat = 4;
	let halfSeat = 4;
	for (let seat of seatCode) {
		halfSeat = halfSeat / 2;
		if (seat == "L") {
			middleSeat = middleSeat - halfSeat;
		}
		if (seat == "R") {
			middleSeat = middleSeat + halfSeat;
		}
	}

	middleRow = middleRow - 0.5;
	middleSeat = middleSeat - 0.5;
	return middleRow * 8 + middleSeat;
};

//part 1
console.log(
	input.map((x) => parseInt(generateBoardingpass(x))).sort((a, b) => a - b)
);

//part 2
const boardingPasses = input.map((x) => parseInt(generateBoardingpass(x)));
const expectedPasses = [];
for (let index = 54; index < 931; index++) {
	expectedPasses.push(index);
}

console.log(expectedPasses.filter((x) => !boardingPasses.includes(x)));
