const fs = require("fs");

const input = fs
	.readFileSync("./day_4.txt")
	.toString()
	.split("\r\n\r\n")
	.map((x) => x.replace(/(\r\n|\n|\r)/g, " "))
	.map((x) => x + " ");

console.log(input);
const passportValidator = (data) => {
	return (
		data.includes("byr") &&
		data.includes("iyr") &&
		data.includes("eyr") &&
		data.includes("hgt") &&
		data.includes("hcl") &&
		data.includes("ecl") &&
		data.includes("pid")
	);
};

const passportValidatorRules = (data) => {
	const rulebyr = RegExp("byr:(19[2-9][0-9]|200[0-2]) ");
	const ruleiyr = RegExp("iyr:(201[0-9]|2020) ");
	const ruleeyr = RegExp("eyr:(202[0-9]|2030) ");
	const rulehgt = RegExp(
		"hgt:(((59)|(6[0-9])|(7[0-6]))in|(1(([5-8][0-9])|(9[0-3]))cm)) "
	);
	const rulehcl = RegExp("hcl:#([0-9]|[a-f]){6} ");
	const ruleecl = RegExp("ecl:(amb|blu|brn|gry|grn|hzl|oth) ");
	const rulepid = RegExp("pid:([0-9]){9} ");

	return (
		rulebyr.test(data) &&
		ruleiyr.test(data) &&
		ruleeyr.test(data) &&
		rulehgt.test(data) &&
		rulehcl.test(data) &&
		ruleecl.test(data) &&
		rulepid.test(data)
	);
};

//part 1
console.log(input.filter((passport) => passportValidator(passport)).length);

//part 2
console.log(
	input.filter((passport) => passportValidatorRules(passport)).length
);
