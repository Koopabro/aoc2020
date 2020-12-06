const fs = require('fs');

const arrayInput = inputfile => {
    const text = fs.readFileSync(inputfile).toString().split("\r\n") 
    return text
}

module.exports = arrayInput

