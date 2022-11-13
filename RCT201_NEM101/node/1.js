const math = require("./math");
const path = require("path");

// browser window
// nodejs process

console.log(math.sum(10, 12));
console.log(math.sub(10, 12));
console.log(math.mul(10, 12));
console.log(math.div(10, 12));

console.log(path.join(process.cwd(), "..", "assets"));
console.log(process.cwd());
console.log(isEven(1));
