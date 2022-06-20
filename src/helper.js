const fs = require('fs');

const readData = function() {
    console.log(fs);
    var data = JSON.parse(fs.readFileSync("../assets/refugee_per_week.txt"));
    console.log(data);
}
module.exports = readData;
