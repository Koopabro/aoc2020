const fs = require("fs");
const input = fs.readFileSync("./day_7.txt").toString().split("\n");

const bagRoutes = input.map(x => x.split(/ contain |, /g));
console.log(bagRoutes)