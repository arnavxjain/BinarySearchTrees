const { Tree } = require("./Tree");

let main = [44, 33, 76, 12, 23, 43, 22, 21, 78, 54, 24];
const system = new Tree(main)

let queryied = system.search(main[0], 12);

console.log(queryied[0], queryied[1]);