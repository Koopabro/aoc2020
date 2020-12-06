const arrayInput = require("./reader");
const input = arrayInput("./day_3.txt");
const convertedInput = input.map((x) => x.split(""));

const treeCounter = (map, vertical, horizontal) => {
	const maxWidth = map[0].length;
	let x = 0;
	let y = 0;
	let trees = 0;
	for (let y = 0; y < map.length; y = y + vertical) {
		if (map[y][x] === "#") {
			trees++;
		}
		if (x + horizontal > maxWidth - 1) {
			x = x + horizontal - maxWidth;
		} else {
			x = x + horizontal;
		}
	}
	return trees;
};

//part 1
console.log(treeCounter(convertedInput, 1, 3));

//part 2
console.log(
	treeCounter(convertedInput, 1, 3) *
		treeCounter(convertedInput, 1, 1) *
		treeCounter(convertedInput, 1, 5) *
		treeCounter(convertedInput, 1, 7) *
		treeCounter(convertedInput, 2, 1)
);
