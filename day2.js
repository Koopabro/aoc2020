const arrayInput = require("./reader");
const input = arrayInput("./day_2.txt");

const convertedInput = input.map((x) => x.split(/[ :-]/));

const validatePassword1 = (lower, higher, needle, haystack) => {
	const hayarray = haystack.split("");
	const count = hayarray.filter((x) => x == needle).length;
	if (count > higher || count < lower) {
		return false;
	} else {
		return true;
	}
};

const validatePassword2 = (first, second, needle, haystack) => {
	return haystack[first - 1] === needle
		? haystack[second - 1] === needle
			? false
			: true
		: haystack[second - 1] === needle
		? true
		: false;
};

//part 1
console.log(
	convertedInput.filter((entry) =>
		validatePassword1(
			parseInt(entry[0]),
			parseInt(entry[1]),
			entry[2],
			entry[4]
		)
	).length
);

// part 2
console.log(
	convertedInput.filter((entry) =>
		validatePassword2(
			parseInt(entry[0]),
			parseInt(entry[1]),
			entry[2],
			entry[4]
		)
	).length
);
