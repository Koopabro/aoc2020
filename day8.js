const fs = require("fs");
const input = fs.readFileSync("./day_8.txt").toString().split("\r\n").  map(x => x.split(" "));

for (let i=0; i<input.length; i++) {
    if (input[i][0] === "jmp") {
        i = i + input[i][1] 
    }
    else if (input[i][0] === "acc") {
        acc += input[i][1]
    }
}

